import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const Header = ({ currentPage, showPage, isEnglish, toggleLanguage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    if (currentPage !== 'home') {
      showPage('home')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const translations = {
    'hero-title': isEnglish ? 'Empowering Health with Intelligence<br>Illuminating Hearts with Technology' : '用智慧赋能健康，让心灵沐浴科技之光',
    'hero-subtitle': isEnglish ? 'AI Empowerment · Digital Health · Human Care' : 'AI 赋能 · 数字健康 · 人本关怀',
    'hero-description': isEnglish ? 'Ximory is committed to empowering individuals and organizations with AI, creating user-centered digital health solutions' : '心沐智康致力于以AI赋能个体健康管理，打造以用户为中心的数字健康解决方案',
    'assessment-btn': isEnglish ? 'Free Health Assessment' : '免费健康评估',
    'learn-more-btn': isEnglish ? 'Learn More' : '了解更多'
  }

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="hero-logo mx-auto mb-8 w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center">
              <div className="text-4xl font-bold text-blue-600">心沐</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => showPage('home')}
              className={`text-gray-700 hover:text-blue-600 font-medium ${currentPage === 'home' ? 'text-blue-600' : ''}`}
            >
              {isEnglish ? 'Home' : '首页'}
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              {isEnglish ? 'About Us' : '关于我们'}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              {isEnglish ? 'Products & Services' : '产品与服务'}
            </button>
            <button 
              onClick={() => scrollToSection('solutions')}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              {isEnglish ? 'Solutions' : '解决方案'}
            </button>
            <button 
              onClick={() => showPage('health-assessment')}
              className={`text-gray-700 hover:text-blue-600 font-medium ${currentPage === 'health-assessment' ? 'text-blue-600' : ''}`}
            >
              {isEnglish ? 'Health Assessment' : '健康评估'}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              {isEnglish ? 'Contact Us' : '联系我们'}
            </button>
            <button 
              onClick={() => showPage('health-dashboard')}
              className={`text-gray-700 hover:text-blue-600 font-medium ${currentPage === 'health-dashboard' ? 'text-blue-600' : ''}`}
            >
              {isEnglish ? 'Data Dashboard' : '数据仪表板'}
            </button>
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              onClick={toggleLanguage}
              variant="outline"
              size="sm"
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              {isEnglish ? '中' : 'EN'}
            </Button>
            
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              <button 
                onClick={() => { showPage('home'); setMobileMenuOpen(false) }}
                className={`text-gray-700 hover:text-blue-600 font-medium py-2 text-left ${currentPage === 'home' ? 'text-blue-600' : ''}`}
              >
                {isEnglish ? 'Home' : '首页'}
              </button>
              <button 
                onClick={() => { scrollToSection('about'); setMobileMenuOpen(false) }}
                className="text-gray-700 hover:text-blue-600 font-medium py-2 text-left"
              >
                {isEnglish ? 'About Us' : '关于我们'}
              </button>
              <button 
                onClick={() => { scrollToSection('services'); setMobileMenuOpen(false) }}
                className="text-gray-700 hover:text-blue-600 font-medium py-2 text-left"
              >
                {isEnglish ? 'Products & Services' : '产品与服务'}
              </button>
              <button 
                onClick={() => { scrollToSection('solutions'); setMobileMenuOpen(false) }}
                className="text-gray-700 hover:text-blue-600 font-medium py-2 text-left"
              >
                {isEnglish ? 'Solutions' : '解决方案'}
              </button>
              <button 
                onClick={() => { showPage('health-assessment'); setMobileMenuOpen(false) }}
                className={`text-gray-700 hover:text-blue-600 font-medium py-2 text-left ${currentPage === 'health-assessment' ? 'text-blue-600' : ''}`}
              >
                {isEnglish ? 'Health Assessment' : '健康评估'}
              </button>
              <button 
                onClick={() => { scrollToSection('contact'); setMobileMenuOpen(false) }}
                className="text-gray-700 hover:text-blue-600 font-medium py-2 text-left"
              >
                {isEnglish ? 'Contact Us' : '联系我们'}
              </button>
              <button 
                onClick={() => { showPage('health-dashboard'); setMobileMenuOpen(false) }}
                className={`text-gray-700 hover:text-blue-600 font-medium py-2 text-left ${currentPage === 'health-dashboard' ? 'text-blue-600' : ''}`}
              >
                {isEnglish ? 'Data Dashboard' : '数据仪表板'}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header

