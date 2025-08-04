import { Heart, Brain, Shield, Users, Zap, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
      <section className="py-20 bg-black min-h-screen relative overflow-hidden">
        {/* 科技感背景装饰 */}
        <div className="absolute inset-0">
          {/* 网格背景 */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
          
          {/* 动态光效 */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* 粒子效果 */}
          <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-10 right-10 w-1 h-1 bg-green-400 rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <img 
            src="/logo_vertical.jpg" 
            alt="心沐智康 Ximory" 
            className="mx-auto mb-8 h-40 w-auto filter drop-shadow-2xl"
          />
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6 leading-tight">
            {isEnglish ? (
              <>
                Empowering Health with Intelligence<br />
                Illuminating Hearts with Technology
              </>
            ) : (
              <>
                用智慧赋能健康<br />
                让心灵沐浴科技之光
              </>
            )}
          </h1>
          
          <p className="text-xl text-blue-300 mb-12 max-w-3xl mx-auto font-light">
            {isEnglish 
              ? 'AI Empowerment · Digital Health · Human Care'
              : 'AI 赋能 · 数字健康 · 人本关怀'
            }
          </p>
          
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            {isEnglish
              ? 'Ximory is committed to empowering individuals and organizations with AI, creating user-centered digital health solutions'
              : '心沐智康致力于以AI赋能个体健康管理，打造以用户为中心的数字健康解决方案'
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={() => showPage('health-assessment')}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl border-2 border-blue-500"
            >
              {isEnglish ? 'Free Health Assessment' : '免费健康评估'}
            </Button>
            <Button 
              onClick={() => scrollToSection('about')}
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-all"
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
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {isEnglish ? 'Contact Us' : '联系我们'}
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-700">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-6">
                    {isEnglish ? 'Contact Information' : '联系信息'}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-300">
                      <div className="w-6 h-6 mr-3 text-blue-400">📧</div>
                      <div>
                        <p className="font-medium">{isEnglish ? 'Email' : '邮箱'}</p>
                        <p>contact@ximory.com</p>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <div className="w-6 h-6 mr-3 text-blue-400">🌐</div>
                      <div>
                        <p className="font-medium">{isEnglish ? 'Website' : '官网'}</p>
                        <p>www.ximory.com</p>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <div className="w-6 h-6 mr-3 text-blue-400">📱</div>
                      <div>
                        <p className="font-medium">{isEnglish ? 'Service Hotline' : '服务热线'}</p>
                        <p>400-888-0000</p>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <div className="w-6 h-6 mr-3 text-blue-400">💬</div>
                      <div>
                        <p className="font-medium">{isEnglish ? 'WeChat' : '微信客服'}</p>
                        <p>ximory-service</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-6">
                    {isEnglish ? 'Business Hours' : '服务时间'}
                  </h3>
                  <div className="space-y-4 text-gray-300">
                    <div>
                      <p className="font-medium">{isEnglish ? 'Online Service' : '在线服务'}</p>
                      <p>{isEnglish ? '24/7 Available' : '7×24小时全天候服务'}</p>
                    </div>
                    <div>
                      <p className="font-medium">{isEnglish ? 'Phone Support' : '电话支持'}</p>
                      <p>{isEnglish ? 'Mon-Fri 9:00-18:00' : '周一至周五 9:00-18:00'}</p>
                    </div>
                    <div>
                      <p className="font-medium">{isEnglish ? 'Emergency Support' : '紧急支持'}</p>
                      <p>{isEnglish ? 'Available on weekends' : '周末提供紧急技术支持'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img 
                src="/logo_horizontal.png" 
                alt="心沐智康 Ximory" 
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm">
                {isEnglish 
                  ? 'Empowering health with intelligence, illuminating hearts with technology'
                  : '用智慧赋能健康，让心灵沐浴科技之光'
                }
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">
                {isEnglish ? 'Quick Links' : '快速链接'}
              </h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p className="hover:text-white cursor-pointer transition-colors">
                  {isEnglish ? 'Health Assessment' : '健康评估'}
                </p>
                <p className="hover:text-white cursor-pointer transition-colors">
                  {isEnglish ? 'Data Dashboard' : '数据仪表板'}
                </p>
                <p className="hover:text-white cursor-pointer transition-colors">
                  {isEnglish ? 'Privacy Policy' : '隐私政策'}
                </p>
                <p className="hover:text-white cursor-pointer transition-colors">
                  {isEnglish ? 'Terms of Service' : '服务条款'}
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">
                {isEnglish ? 'Follow Us' : '关注我们'}
              </h4>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                  <span className="text-white text-sm">微</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition-colors">
                  <span className="text-white text-sm">@</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
              <p>
                © 2024 {isEnglish ? 'Ximory Technology Co., Ltd. All rights reserved.' : '心沐智康科技有限公司 版权所有'}
              </p>
              <p className="mt-2 md:mt-0">
                {isEnglish ? 'ICP License: ' : 'ICP备案号：'}
                <span className="text-gray-300">京ICP备2024000000号</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home

