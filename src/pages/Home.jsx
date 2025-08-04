import { Button } from '@/components/ui/button'
import { Heart, Brain, Shield, Users, Zap, Award } from 'lucide-react'

const Home = ({ showPage, isEnglish }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="hero-logo mx-auto mb-8 w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center">
            <div className="text-4xl font-bold text-blue-600">心沐</div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {isEnglish ? (
              <>
                Empowering Health with Intelligence,<br />
                Illuminating Hearts with Technology
              </>
            ) : (
              <>
                用智慧赋能健康，<br />
                让心灵沐浴科技之光
              </>
            )}
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            {isEnglish 
              ? 'AI Empowerment · Digital Health · Human Care'
              : 'AI 赋能 · 数字健康 · 人本关怀'
            }
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
            {isEnglish
              ? 'Ximory is committed to empowering individuals and organizations with AI, creating user-centered digital health solutions'
              : '心沐智康致力于以AI赋能个体健康管理，打造以用户为中心的数字健康解决方案'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={() => showPage('health-assessment')}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-green-700 transition-all"
            >
              {isEnglish ? 'Free Health Assessment' : '免费健康评估'}
            </Button>
            <Button 
              onClick={() => scrollToSection('about')}
              variant="outline"
              className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all"
            >
              {isEnglish ? 'Learn More' : '了解更多'}
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isEnglish ? 'About Us' : '关于我们'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isEnglish
                ? 'Ximory (Hangzhou) Technology Co., Ltd., referred to as "Ximory", was established in 2025 and is located in Hangzhou West District. It is an innovative technology enterprise specializing in artificial intelligence and health technology integration applications.'
                : '心沐智康（杭州）科技有限公司，简称"心沐智康"，成立于2025年，坐落于中国杭州西湖区，是一家专注于人工智能与健康科技融合应用的创新型科技企业。'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {isEnglish ? 'Brand Vision' : '品牌愿景'}
              </h3>
              <p className="text-gray-600 mb-6">
                {isEnglish
                  ? 'Let wisdom and heart coexist, enabling everyone to live a true growth. We believe that health is not just physical wellness, but also spiritual peace and the joy of shared growth.'
                  : '让智慧与心灵共生，赋能每一个生命真实成长。我们相信健康不仅是身体无恙，更是身心灵的和谐共鸣。'
                }
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">
                    {isEnglish
                      ? 'Technology empowers life, making health management more intelligent and convenient'
                      : '科技的终极使命，是让人类更好地自由'
                    }
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">
                    {isEnglish
                      ? 'Wisdom guides the future, creating a healthier and better life'
                      : '我们的使命不仅是身体无恙，更是身心灵的和谐共鸣'
                    }
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Heart className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {isEnglish ? 'Human Care' : '人本关怀'}
                  </h4>
                  <p className="text-gray-600">
                    {isEnglish
                      ? 'Focus on individual needs and care for every individual\'s true needs'
                      : '以人为本，关注每个个体的真实需求'
                    }
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Brain className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {isEnglish ? 'AI Empowerment' : 'AI 赋能'}
                  </h4>
                  <p className="text-gray-600">
                    {isEnglish
                      ? 'Use artificial intelligence technology to enhance health management capabilities'
                      : '用人工智能技术提升健康管理理念'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isEnglish ? 'Core Values' : '核心价值'}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {isEnglish ? 'Human Care' : '人本关怀'}
                </h3>
                <p className="text-gray-600">
                  {isEnglish
                    ? 'Focus on individual needs and care for every individual\'s true needs'
                    : '以人为本，关注每个个体的真实需求'
                  }
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-6">
                <Brain className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {isEnglish ? 'AI Empowerment' : 'AI 赋能'}
                </h3>
                <p className="text-gray-600">
                  {isEnglish
                    ? 'Use artificial intelligence technology to enhance health management capabilities'
                    : '用人工智能技术提升健康管理理念'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isEnglish ? 'Contact Us' : '联系我们'}
            </h2>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {isEnglish ? 'Contact Information' : '联系信息'}
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-600">
                    <strong>{isEnglish ? 'Email:' : '邮箱:'}</strong> contact@ximory.com
                  </p>
                  <p className="text-gray-600">
                    <strong>{isEnglish ? 'Website:' : '网站:'}</strong> www.ximory.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

