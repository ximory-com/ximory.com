import { Heart, Brain, Shield, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import content from '../config/content.json'

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
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img 
            src="/logo_vertical.png" 
            alt={`${content.brand.name.zh} ${content.brand.name.en}`} 
            className="mx-auto mb-8 h-40 w-auto"
          />
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-800 via-blue-700 to-emerald-500 bg-clip-text text-transparent mb-6 leading-tight">
            {isEnglish ? (
              <>
                {content.brand.tagline.en.line1}<br />
                {content.brand.tagline.en.line2}
              </>
            ) : (
              <>
                {content.brand.tagline.zh.line1}<br />
                {content.brand.tagline.zh.line2}
              </>
            )}
          </h1>
          
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
            {isEnglish ? content.brand.subtitle.en : content.brand.subtitle.zh}
          </p>
          
          <p className="text-lg text-slate-500 mb-12 max-w-3xl mx-auto">
            {isEnglish ? content.brand.description.en : content.brand.description.zh}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={() => showPage('health-assessment')}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-800 to-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:from-blue-900 hover:to-emerald-700 transition-all shadow-lg hover:shadow-xl"
            >
              {isEnglish ? content.buttons.healthAssessment.en : content.buttons.healthAssessment.zh}
            </Button>
            <Button 
              onClick={() => scrollToSection('about')}
              variant="outline"
              className="w-full sm:w-auto border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 transition-all"
            >
              {isEnglish ? content.buttons.learnMore.en : content.buttons.learnMore.zh}
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isEnglish ? content.about.title.en : content.about.title.zh}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isEnglish ? content.about.introduction.en : content.about.introduction.zh}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {isEnglish ? content.about.vision.title.en : content.about.vision.title.zh}
              </h3>
              <p className="text-gray-600 mb-6">
                {isEnglish ? content.about.vision.content.en : content.about.vision.content.zh}
              </p>
              <ul className="space-y-4">
                {content.about.vision.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className={`w-6 h-6 ${index === 0 ? 'bg-blue-100' : 'bg-green-100'} rounded-full flex items-center justify-center mr-4 mt-1`}>
                      <div className={`w-2 h-2 ${index === 0 ? 'bg-blue-600' : 'bg-green-600'} rounded-full`}></div>
                    </div>
                    <span className="text-gray-600">
                      {isEnglish ? point.en : point.zh}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              {content.coreValues.items.slice(0, 2).map((value, index) => (
                <div key={index} className="flex items-start">
                  <div className={`w-6 h-6 ${index === 0 ? 'bg-blue-100' : 'bg-green-100'} rounded-full flex items-center justify-center mr-4 mt-1`}>
                    {value.icon === 'Heart' && <Heart className={`w-4 h-4 ${index === 0 ? 'text-blue-600' : 'text-green-600'}`} />}
                    {value.icon === 'Brain' && <Brain className={`w-4 h-4 ${index === 0 ? 'text-blue-600' : 'text-green-600'}`} />}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {isEnglish ? value.title.en : value.title.zh}
                    </h4>
                    <p className="text-gray-600">
                      {isEnglish ? value.description.en : value.description.zh}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {isEnglish ? content.coreValues.title.en : content.coreValues.title.zh}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {content.coreValues.items.map((value, index) => (
              <div key={index} className="flex items-start">
                <div className={`w-12 h-12 ${index % 2 === 0 ? 'bg-blue-100' : 'bg-green-100'} rounded-full flex items-center justify-center mr-6`}>
                  {value.icon === 'Heart' && <Heart className={`w-6 h-6 ${index % 2 === 0 ? 'text-blue-600' : 'text-green-600'}`} />}
                  {value.icon === 'Brain' && <Brain className={`w-6 h-6 ${index % 2 === 0 ? 'text-blue-600' : 'text-green-600'}`} />}
                  {value.icon === 'Shield' && <Shield className={`w-6 h-6 ${index % 2 === 0 ? 'text-blue-600' : 'text-green-600'}`} />}
                  {value.icon === 'Users' && <Users className={`w-6 h-6 ${index % 2 === 0 ? 'text-blue-600' : 'text-green-600'}`} />}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {isEnglish ? value.title.en : value.title.zh}
                  </h3>
                  <p className="text-gray-600">
                    {isEnglish ? value.description.en : value.description.zh}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-800 to-emerald-600 bg-clip-text text-transparent mb-4">
              {isEnglish ? content.contact.title.en : content.contact.title.zh}
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-6">
                    {isEnglish ? content.contact.info.title.en : content.contact.info.title.zh}
                  </h3>
                  <div className="space-y-4">
                    {content.contact.info.items.map((item, index) => (
                      <div key={index} className="flex items-center text-slate-700">
                        <div className={`w-6 h-6 mr-3 ${index % 2 === 0 ? 'text-blue-600' : 'text-emerald-600'}`}>
                          {item.icon}
                        </div>
                        <div>
                          <p className="font-medium">{isEnglish ? item.label.en : item.label.zh}</p>
                          <p>{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-6">
                    {isEnglish ? content.contact.hours.title.en : content.contact.hours.title.zh}
                  </h3>
                  <div className="space-y-4 text-slate-700">
                    {content.contact.hours.items.map((item, index) => (
                      <div key={index}>
                        <p className="font-medium">{isEnglish ? item.label.en : item.label.zh}</p>
                        <p>{isEnglish ? item.time.en : item.time.zh}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img 
                src="/logo_horizontal.png" 
                alt={`${isEnglish ? content.brand.name.en : content.brand.name.zh} Logo`}
                className="h-8 w-auto mb-4"
              />
              <p className="text-slate-600 text-sm">
                {isEnglish ? content.footer.description.en : content.footer.description.zh}
              </p>
            </div>
            
            <div>
              <h4 className="text-slate-900 font-semibold mb-4">
                {isEnglish ? content.footer.quickLinks.title.en : content.footer.quickLinks.title.zh}
              </h4>
              <div className="space-y-2 text-slate-600 text-sm">
                {content.footer.quickLinks.items.map((link, index) => (
                  <p key={index} className="hover:text-slate-900 cursor-pointer transition-colors">
                    {isEnglish ? link.en : link.zh}
                  </p>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-slate-900 font-semibold mb-4">
                {isEnglish ? content.footer.social.title.en : content.footer.social.title.zh}
              </h4>
              <div className="flex space-x-4">
                {content.footer.social.items.map((social, index) => (
                  <div 
                    key={index}
                    className={`w-8 h-8 ${social.color.startsWith('from-') ? `bg-gradient-to-r ${social.color}` : social.color} rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-all`}
                  >
                    <span className="text-white text-sm">{social.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-300 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-slate-600 text-sm">
              <p>
                © 2025 {isEnglish ? content.footer.copyright.company.en : content.footer.copyright.company.zh}
              </p>
              <p className="mt-2 md:mt-0">
                {isEnglish ? content.footer.copyright.icp.label.en : content.footer.copyright.icp.label.zh}
                <span className="text-slate-700">{content.footer.copyright.icp.number}</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home

