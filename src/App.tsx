import React, { useState } from 'react';
import {
  Building2,
  Cog,
  Cpu,
  Facebook,
  Instagram,
  Linkedin,
  Leaf,
  MessageSquare,
  Ruler,
  Send,
  Zap,
  Users,
  Calendar,
  Target,
  Eye,
  Award
} from 'lucide-react';
import { images } from './data/images';
import { workerStories } from './data/workers';

interface FormData {
  name: string;
  email: string;
  message: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0">
          <img
            src={images.hero.background}
            alt="Engineering background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-slate-900/50 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 text-center px-4">
          <img
            src={images.hero.logo}
            alt="Sacks Logo"
            className="w-[600px] mx-auto mb-8"
          />
        </div>
      </header>

      {/* About Us Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Sobre Nós</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={images.about.office}
                alt="Nossa sede"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm">Anos de Experiência</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <p className="text-slate-600 leading-relaxed space-y-4">
                  <span className="block mb-4">
                    A Sacks Soluções Inovadoras foi fundada em 2008, no município de Alagoinhas/BA, com o propósito de oferecer serviços especializados em montagem e manutenção industrial.
                  </span>
                  <span className="block mb-4">
                    Nos primeiros anos, a empresa obteve sucesso na execução de projetos nos setores de curtumes e cerâmicas. Posteriormente, passou a atuar de forma ativa no fortalecimento do polo de bebidas da região, fornecendo projetos e mão de obra qualificada para instalações de linhas e processos industriais.
                  </span>
                  <span className="block">
                    Comprometida com a segurança, qualidade e pontualidade, a Sacks vem constantemente aprimorando suas ferramentas de gestão e buscando novas parcerias, mantendo-se preparada para enfrentar os desafios da atualidade.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Building2, 
                title: 'Engenharia Civil', 
                desc: 'Projetos estruturais, construções, reformas, laudos técnicos e consultoria em edificações.' 
              },
              { 
                icon: Cog, 
                title: 'Engenharia Mecânica', 
                desc: 'Sistemas mecânicos, automação industrial, manutenção de equipamentos e projetos de climatização.' 
              },
              { 
                icon: Zap, 
                title: 'Engenharia Elétrica', 
                desc: 'Instalações elétricas, sistemas de potência, automação predial e projetos de eficiência energética.' 
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-slate-800">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worker Stories Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Nosso Dia a Dia</h2>
            <p className="mt-4 text-slate-600">Acompanhe as histórias e conquistas da nossa equipe</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workerStories.map((story) => (
              <div key={story.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={`${story.name} no trabalho`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-slate-800">{story.name}</h3>
                    <span className="text-sm text-slate-500">• {story.role}</span>
                  </div>
                  <p className="text-slate-600 mb-4">{story.story}</p>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Calendar className="w-4 h-4" />
                    <span>{story.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800">Entre em Contato</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nome</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Mensagem</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Enviar Mensagem
              </button>
            </form>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-slate-800">Redes Sociais</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                    <Instagram className="w-8 h-8" />
                  </a>
                  <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                    <Facebook className="w-8 h-8" />
                  </a>
                  <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
                    <Linkedin className="w-8 h-8" />
                  </a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-slate-800">Fale Conosco</h3>
                <div className="flex items-start gap-3 text-slate-600">
                  <MessageSquare className="w-5 h-5 mt-1" />
                  <p>Entre em contato para discutir seu projeto ou tirar dúvidas sobre nossos serviços.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Sacks. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;