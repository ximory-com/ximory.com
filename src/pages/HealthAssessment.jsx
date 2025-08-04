import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'

const HealthAssessment = ({ 
  currentStep, 
  healthData, 
  setHealthData, 
  nextStep, 
  prevStep, 
  submitAssessment, 
  showPage, 
  isEnglish 
}) => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    height: '',
    weight: '',
    exercise: '',
    sleep: '',
    smoking: '',
    alcohol: ''
  })

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNextStep = () => {
    if (currentStep === 1) {
      // 验证基本信息
      if (!formData.age || !formData.gender || !formData.height || !formData.weight) {
        alert(isEnglish ? 'Please fill in all basic information' : '请填写完整的基本信息')
        return
      }
      
      setHealthData(prev => ({
        ...prev,
        basicInfo: {
          age: parseInt(formData.age),
          gender: formData.gender,
          height: parseInt(formData.height),
          weight: parseInt(formData.weight)
        }
      }))
      nextStep()
    } else if (currentStep === 2) {
      // 验证生活习惯
      if (!formData.exercise || !formData.sleep || !formData.smoking || !formData.alcohol) {
        alert(isEnglish ? 'Please complete all lifestyle questions' : '请完成所有生活习惯问题')
        return
      }
      
      setHealthData(prev => ({
        ...prev,
        lifestyle: {
          exercise: formData.exercise,
          sleep: formData.sleep,
          smoking: formData.smoking,
          alcohol: formData.alcohol
        }
      }))
      submitAssessment()
    }
  }

  const resetAssessment = () => {
    setFormData({
      age: '',
      gender: '',
      height: '',
      weight: '',
      exercise: '',
      sleep: '',
      smoking: '',
      alcohol: ''
    })
    setHealthData({})
  }

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-blue-600'
    if (score >= 40) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreBarColor = (score) => {
    if (score >= 80) return 'bg-gradient-to-r from-green-400 to-green-600'
    if (score >= 60) return 'bg-gradient-to-r from-blue-400 to-blue-600'
    if (score >= 40) return 'bg-gradient-to-r from-yellow-400 to-yellow-600'
    return 'bg-gradient-to-r from-red-400 to-red-600'
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {isEnglish ? 'AI Health Assessment' : 'AI健康评估'}
            </h1>
            <p className="text-gray-600">
              {isEnglish 
                ? 'Through scientific assessment methods, understand your health status'
                : '通过科学的评估方法，了解您的健康状况'
              }
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">
                {isEnglish ? 'Assessment Progress' : '评估进度'}
              </span>
              <span className="text-sm font-medium text-gray-700">
                {isEnglish ? `Step ${currentStep} of 3` : `第${currentStep}步，共3步`}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                {isEnglish ? 'Basic Information' : '基本信息'}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {isEnglish ? 'Age' : '年龄'}
                  </label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => updateFormData('age', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={isEnglish ? 'Please enter age' : '请输入年龄'}
                    min="1"
                    max="120"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {isEnglish ? 'Gender' : '性别'}
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => updateFormData('gender', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">{isEnglish ? 'Please select gender' : '请选择性别'}</option>
                    <option value="male">{isEnglish ? 'Male' : '男'}</option>
                    <option value="female">{isEnglish ? 'Female' : '女'}</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {isEnglish ? 'Height (cm)' : '身高 (cm)'}
                  </label>
                  <input
                    type="number"
                    value={formData.height}
                    onChange={(e) => updateFormData('height', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={isEnglish ? 'Please enter height' : '请输入身高'}
                    min="100"
                    max="250"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {isEnglish ? 'Weight (kg)' : '体重 (kg)'}
                  </label>
                  <input
                    type="number"
                    value={formData.weight}
                    onChange={(e) => updateFormData('weight', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={isEnglish ? 'Please enter weight' : '请输入体重'}
                    min="30"
                    max="300"
                  />
                </div>
              </div>
              
              <div className="flex justify-end mt-8">
                <Button onClick={handleNextStep} className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  <ArrowRight className="w-4 h-4 ml-2" />
                  {isEnglish ? 'Next Step' : '下一步'}
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Lifestyle Habits */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                {isEnglish ? 'Lifestyle Habits' : '生活习惯'}
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {isEnglish ? 'Exercise Frequency' : '运动频率'}
                  </label>
                  <select
                    value={formData.exercise}
                    onChange={(e) => updateFormData('exercise', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">{isEnglish ? 'Please select exercise frequency' : '请选择运动频率'}</option>
                    <option value="regularly">{isEnglish ? 'Regular exercise' : '经常运动'}</option>
                    <option value="never">{isEnglish ? 'Never exercise' : '从不运动'}</option>
                    <option value="rarely">{isEnglish ? 'Rarely exercise' : '偶尔运动'}</option>
                    <option value="sometimes">{isEnglish ? 'Sometimes exercise' : '有时运动'}</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {isEnglish ? 'Sleep Quality' : '睡眠质量'}
                  </label>
                  <select
                    value={formData.sleep}
                    onChange={(e) => updateFormData('sleep', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">{isEnglish ? 'Please select sleep quality' : '请选择睡眠质量'}</option>
                    <option value="good">{isEnglish ? 'Good' : '良好'}</option>
                    <option value="poor">{isEnglish ? 'Poor' : '较差'}</option>
                    <option value="fair">{isEnglish ? 'Fair' : '一般'}</option>
                    <option value="excellent">{isEnglish ? 'Excellent' : '优秀'}</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {isEnglish ? 'Smoking Status' : '是否吸烟'}
                  </label>
                  <select
                    value={formData.smoking}
                    onChange={(e) => updateFormData('smoking', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">{isEnglish ? 'Please select smoking status' : '请选择吸烟情况'}</option>
                    <option value="no">{isEnglish ? 'No' : '否'}</option>
                    <option value="yes">{isEnglish ? 'Yes' : '是'}</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {isEnglish ? 'Alcohol Consumption' : '饮酒情况'}
                  </label>
                  <select
                    value={formData.alcohol}
                    onChange={(e) => updateFormData('alcohol', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">{isEnglish ? 'Please select alcohol consumption' : '请选择饮酒情况'}</option>
                    <option value="never">{isEnglish ? 'Never drink' : '从不饮酒'}</option>
                    <option value="occasionally">{isEnglish ? 'Occasionally' : '偶尔饮酒'}</option>
                    <option value="weekly">{isEnglish ? 'Weekly' : '每周饮酒'}</option>
                    <option value="daily">{isEnglish ? 'Daily' : '每天饮酒'}</option>
                  </select>
                </div>
              </div>
              
              <div className="flex justify-between mt-8">
                <Button 
                  onClick={prevStep} 
                  variant="outline"
                  className="border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {isEnglish ? 'Previous Step' : '上一步'}
                </Button>
                <Button 
                  onClick={handleNextStep}
                  className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
                >
                  {isEnglish ? 'Submit Assessment' : '提交评估'}
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Assessment Results */}
          {currentStep === 3 && healthData.results && (
            <div>
              <div className="text-center mb-8">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {isEnglish ? 'Assessment Results' : '评估结果'}
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className={`text-6xl font-bold mb-4 ${getScoreColor(healthData.results.health_score)}`}>
                    {healthData.results.health_score}
                  </div>
                  <div className={`text-2xl font-semibold mb-6 ${getScoreColor(healthData.results.health_score)}`}>
                    {healthData.results.level}
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
                    <div 
                      className={`h-4 rounded-full ${getScoreBarColor(healthData.results.health_score)}`}
                      style={{ width: `${healthData.results.health_score}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {isEnglish ? 'Health Recommendations' : '健康建议'}
                  </h3>
                  <div className="space-y-3">
                    {healthData.results.recommendations.map((recommendation, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <p className="text-gray-600">{recommendation}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center mt-8 space-x-4">
                <Button 
                  onClick={() => showPage('health-dashboard')}
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  {isEnglish ? 'View Data Dashboard' : '查看数据仪表板'}
                </Button>
                <Button 
                  onClick={resetAssessment}
                  variant="outline"
                  className="border-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-50 transition-colors"
                >
                  {isEnglish ? 'New Assessment' : '重新评估'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HealthAssessment

