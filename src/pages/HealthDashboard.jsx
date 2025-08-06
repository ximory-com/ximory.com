import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { RefreshCw, TrendingUp, Users, Calendar, Award } from 'lucide-react'
import content from '../config/content.json'

const HealthDashboard = ({ healthDataManager, showPage, isEnglish }) => {
  const [statistics, setStatistics] = useState({})
  const [recentAssessments, setRecentAssessments] = useState([])
  const [isRefreshing, setIsRefreshing] = useState(false)

  useEffect(() => {
    refreshData()
  }, [])

  const refreshData = async () => {
    console.log('刷新数据开始...')
    setIsRefreshing(true)
    
    try {
      // 添加短暂延迟以显示刷新动画
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const stats = healthDataManager.getStatistics()
      const recent = healthDataManager.getRecentAssessments()
      
      console.log('获取到的统计数据:', stats)
      console.log('获取到的最近评估:', recent)
      
      setStatistics(stats)
      setRecentAssessments(recent)
      
      console.log('数据刷新完成')
    } catch (error) {
      console.error('刷新数据时出错:', error)
    } finally {
      setIsRefreshing(false)
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getScoreLevel = (score) => {
    if (score >= 80) return isEnglish ? 'Excellent' : '优秀'
    if (score >= 60) return isEnglish ? 'Good' : '良好'
    if (score >= 40) return isEnglish ? 'Fair' : '一般'
    return isEnglish ? 'Poor' : '需改善'
  }

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600'
    if (score >= 60) return 'text-blue-600'
    if (score >= 40) return 'text-yellow-600'
    return 'text-red-600'
  }

  // 评分分布数据
  const scoreDistributionData = [
    { 
      name: isEnglish ? 'Excellent (80+)' : '优秀 (80+)', 
      value: statistics.today_stats?.score_distribution?.excellent || 0,
      color: '#10B981'
    },
    { 
      name: isEnglish ? 'Good (60-79)' : '良好 (60-79)', 
      value: statistics.today_stats?.score_distribution?.good || 0,
      color: '#3B82F6'
    },
    { 
      name: isEnglish ? 'Fair (40-59)' : '一般 (40-59)', 
      value: statistics.today_stats?.score_distribution?.fair || 0,
      color: '#F59E0B'
    },
    { 
      name: isEnglish ? 'Poor (<40)' : '需改善 (<40)', 
      value: statistics.today_stats?.score_distribution?.poor || 0,
      color: '#EF4444'
    }
  ]

  // 年龄分布数据
  const ageDistributionData = [
    { 
      name: isEnglish ? 'Under 30' : '30岁以下', 
      value: statistics.today_stats?.age_distribution?.under_30 || 0 
    },
    { 
      name: isEnglish ? '30-50' : '30-50岁', 
      value: statistics.today_stats?.age_distribution?.age_30_50 || 0 
    },
    { 
      name: isEnglish ? 'Over 50' : '50岁以上', 
      value: statistics.today_stats?.age_distribution?.over_50 || 0 
    }
  ]

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {isEnglish ? 'Health Data Dashboard' : '健康数据仪表板'}
              </h1>
              <p className="text-gray-600 mt-2">
                {isEnglish 
                  ? 'View health assessment statistics and trend analysis'
                  : '查看健康评估的统计数据和趋势分析'
                }
              </p>
            </div>
            <Button 
              onClick={refreshData}
              disabled={isRefreshing}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
              {isRefreshing 
                ? (isEnglish ? content.buttons.refreshing.en : content.buttons.refreshing.zh) 
                : (isEnglish ? content.buttons.refreshData.en : content.buttons.refreshData.zh)
              }
            </Button>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  {isEnglish ? 'Total Assessments' : '总评估次数'}
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {statistics.total_assessments || 0}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  {isEnglish ? 'Average Score' : '平均健康评分'}
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {statistics.average_score || 0}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Calendar className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  {isEnglish ? 'Today\'s Assessments' : '今日评估'}
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {statistics.today_stats?.total_assessments || 0}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  {isEnglish ? 'Excellent Rate' : '优秀评分比例'}
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {statistics.total_assessments > 0 
                    ? Math.round((statistics.today_stats?.score_distribution?.excellent || 0) / statistics.total_assessments * 100)
                    : 0
                  }%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Score Distribution Chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {isEnglish ? 'Health Score Distribution' : '健康评分分布'}
            </h3>
            {statistics.total_assessments > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={scoreDistributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {scoreDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-300 flex items-center justify-center text-gray-500">
                {isEnglish ? 'No data available' : '暂无数据'}
              </div>
            )}
            <div className="flex flex-wrap gap-4 mt-4">
              {scoreDistributionData.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-gray-600">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Age Distribution Chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {isEnglish ? 'Age Distribution' : '年龄分布'}
            </h3>
            {statistics.total_assessments > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={ageDistributionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-300 flex items-center justify-center text-gray-500">
                {isEnglish ? 'No data available' : '暂无数据'}
              </div>
            )}
          </div>
        </div>

        {/* Recent Assessments Table */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">
              {isEnglish ? 'Recent Assessment Records' : '最近评估记录'}
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {isEnglish ? 'Assessment Time' : '评估时间'}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {isEnglish ? 'Age' : '年龄'}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {isEnglish ? 'Gender' : '性别'}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    BMI
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {isEnglish ? 'Health Score' : '健康评分'}
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {isEnglish ? 'Risk Level' : '风险等级'}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentAssessments.length > 0 ? (
                  recentAssessments.map((assessment) => {
                    const bmi = assessment.basic_info.weight / ((assessment.basic_info.height / 100) ** 2)
                    return (
                      <tr key={assessment.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {formatDate(assessment.created_at)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {assessment.basic_info.age}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {assessment.basic_info.gender === 'male' 
                            ? (isEnglish ? 'Male' : '男') 
                            : (isEnglish ? 'Female' : '女')
                          }
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {bmi.toFixed(1)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <span className={getScoreColor(assessment.results.health_score)}>
                            {assessment.results.health_score}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            assessment.results.health_score >= 80 
                              ? 'bg-green-100 text-green-800'
                              : assessment.results.health_score >= 60
                              ? 'bg-blue-100 text-blue-800'
                              : assessment.results.health_score >= 40
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {getScoreLevel(assessment.results.health_score)}
                          </span>
                        </td>
                      </tr>
                    )
                  })
                ) : (
                  <tr>
                    <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                      {isEnglish ? 'No assessment records yet' : '暂无评估记录'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 text-center">
          <Button 
            onClick={() => showPage('health-assessment')}
            className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
          >
            {isEnglish ? 'Start New Assessment' : '开始新评估'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HealthDashboard

