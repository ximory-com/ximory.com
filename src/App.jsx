import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import HealthAssessment from './pages/HealthAssessment'
import HealthDashboard from './pages/HealthDashboard'
import './App.css'

// 健康数据管理类
class HealthDataManager {
  constructor() {
    this.storageKey = 'ximory-health-assessments'
    this.assessments = this.loadAssessments()
  }

  loadAssessments() {
    try {
      const data = localStorage.getItem(this.storageKey)
      return data ? JSON.parse(data) : []
    } catch (error) {
      console.error('加载存储数据失败:', error)
      return []
    }
  }

  saveAssessments() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.assessments))
    } catch (error) {
      console.error('保存存储数据失败:', error)
    }
  }

  addAssessment(assessmentData) {
    const assessment = {
      id: Date.now(),
      created_at: new Date().toISOString(),
      basic_info: assessmentData.basicInfo,
      lifestyle: assessmentData.lifestyle,
      results: assessmentData.results
    }
    
    this.assessments.unshift(assessment)
    this.saveAssessments()
    return assessment
  }

  getStatistics() {
    const total = this.assessments.length
    if (total === 0) {
      return {
        total_assessments: 0,
        average_score: 0,
        today_stats: {
          total_assessments: 0,
          score_distribution: { excellent: 0, good: 0, fair: 0, poor: 0 },
          age_distribution: { under_30: 0, age_30_50: 0, over_50: 0 }
        }
      }
    }

    // 计算平均分
    const totalScore = this.assessments.reduce((sum, a) => sum + a.results.health_score, 0)
    const averageScore = Math.round(totalScore / total * 10) / 10

    // 今日统计
    const today = new Date().toDateString()
    const todayAssessments = this.assessments.filter(a => 
      new Date(a.created_at).toDateString() === today
    )

    // 评分分布
    const scoreDistribution = { excellent: 0, good: 0, fair: 0, poor: 0 }
    this.assessments.forEach(a => {
      const score = a.results.health_score
      if (score >= 80) scoreDistribution.excellent++
      else if (score >= 60) scoreDistribution.good++
      else if (score >= 40) scoreDistribution.fair++
      else scoreDistribution.poor++
    })

    // 年龄分布
    const ageDistribution = { under_30: 0, age_30_50: 0, over_50: 0 }
    this.assessments.forEach(a => {
      const age = a.basic_info.age
      if (age < 30) ageDistribution.under_30++
      else if (age <= 50) ageDistribution.age_30_50++
      else ageDistribution.over_50++
    })

    return {
      total_assessments: total,
      average_score: averageScore,
      today_stats: {
        total_assessments: todayAssessments.length,
        score_distribution: scoreDistribution,
        age_distribution: ageDistribution
      }
    }
  }

  getRecentAssessments(limit = 10) {
    return this.assessments.slice(0, limit)
  }
}

// 全局健康数据管理器
const healthDataManager = new HealthDataManager()

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [isEnglish, setIsEnglish] = useState(false)
  const [healthData, setHealthData] = useState({})
  const [currentStep, setCurrentStep] = useState(1)

  // 页面切换函数
  const showPage = (pageId) => {
    setCurrentPage(pageId)
    
    // 如果切换到健康评估页面，重置评估状态
    if (pageId === 'health-assessment') {
      setCurrentStep(1)
      setHealthData({})
    }
  }

  // 语言切换函数
  const toggleLanguage = () => {
    setIsEnglish(!isEnglish)
  }

  // 健康评估相关函数
  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const submitAssessment = () => {
    // 计算健康评分
    const score = calculateHealthScore(healthData)
    const results = {
      health_score: score,
      level: getScoreLevel(score),
      recommendations: getHealthRecommendations(score, healthData)
    }

    // 保存评估结果
    healthDataManager.addAssessment({
      basicInfo: healthData.basicInfo || {},
      lifestyle: healthData.lifestyle || {},
      results: results
    })

    // 更新健康数据
    setHealthData(prev => ({ ...prev, results }))
    setCurrentStep(3)
  }

  // 健康评分计算函数
  const calculateHealthScore = (data) => {
    let score = 70 // 基础分数

    if (data.basicInfo) {
      const { age, height, weight } = data.basicInfo
      if (height && weight) {
        const bmi = weight / ((height / 100) ** 2)
        if (bmi >= 18.5 && bmi <= 24.9) score += 10
        else if (bmi >= 25 && bmi <= 29.9) score -= 5
        else score -= 10
      }

      if (age) {
        if (age <= 30) score += 5
        else if (age <= 50) score += 2
        else score -= 2
      }
    }

    if (data.lifestyle) {
      const { exercise, sleep, smoking, alcohol } = data.lifestyle
      
      if (exercise === 'regularly') score += 15
      else if (exercise === 'sometimes') score += 5
      else score -= 10

      if (sleep === 'good') score += 10
      else if (sleep === 'fair') score += 2
      else score -= 8

      if (smoking === 'no') score += 10
      else score -= 15

      if (alcohol === 'never' || alcohol === 'occasionally') score += 5
      else if (alcohol === 'weekly') score -= 2
      else score -= 10
    }

    return Math.max(0, Math.min(100, Math.round(score)))
  }

  const getScoreLevel = (score) => {
    if (score >= 80) return '优秀'
    if (score >= 60) return '良好'
    if (score >= 40) return '一般'
    return '需改善'
  }

  const getHealthRecommendations = (score, data) => {
    const recommendations = []
    
    if (score < 60) {
      recommendations.push('建议咨询专业医生进行全面健康检查')
    }
    
    if (data.lifestyle?.exercise !== 'regularly') {
      recommendations.push('增加规律运动，每周至少150分钟中等强度运动')
    }
    
    if (data.lifestyle?.sleep !== 'good') {
      recommendations.push('保持良好睡眠习惯，每晚7-9小时充足睡眠')
    }
    
    if (data.lifestyle?.smoking === 'yes') {
      recommendations.push('戒烟对健康有重大益处，建议寻求专业戒烟帮助')
    }
    
    recommendations.push('保持均衡饮食，多吃蔬菜水果')
    recommendations.push('定期体检，及时发现和预防健康问题')
    
    return recommendations
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header 
        currentPage={currentPage}
        showPage={showPage}
        isEnglish={isEnglish}
        toggleLanguage={toggleLanguage}
      />
      
      <main>
        {currentPage === 'home' && (
          <Home showPage={showPage} isEnglish={isEnglish} />
        )}
        
        {currentPage === 'health-assessment' && (
          <HealthAssessment
            currentStep={currentStep}
            healthData={healthData}
            setHealthData={setHealthData}
            nextStep={nextStep}
            prevStep={prevStep}
            submitAssessment={submitAssessment}
            showPage={showPage}
            isEnglish={isEnglish}
          />
        )}
        
        {currentPage === 'health-dashboard' && (
          <HealthDashboard
            healthDataManager={healthDataManager}
            showPage={showPage}
            isEnglish={isEnglish}
          />
        )}
      </main>
    </div>
  )
}

export default App

