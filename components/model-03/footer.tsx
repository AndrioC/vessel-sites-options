import { Globe, InstagramIcon, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full blur-3xl floating"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full blur-3xl floating-delayed"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center space-y-10 scroll-animate fade-up">
          <div className="flex items-center justify-center space-x-4 group">
            <div className="flex items-center space-x-2">
              <img
                src="/logo-white.svg"
                alt="VESSEL Logo"
                className="h-15 w-auto"
              />
            </div>
          </div>

          <p className="text-slate-100 max-w-4xl mx-auto text-lg leading-relaxed font-light">
            A VESSEL É A ESCOLHA INTELIGENTE PARA NEGÓCIOS NA ÁREA DA BELEZA QUE
            BUSCAM CRESCER DE MANEIRA ORGANIZADA, EFICIENTE E INOVADORA.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Mail,
                title: "E-mail",
                content: "contato@vesselbr.com",
                gradient: "from-emerald-500 to-emerald-600",
              },
              {
                icon: Phone,
                title: "Telefone",
                content: "(11) 98958-9292",
                gradient: "from-emerald-400 to-emerald-500",
              },
              {
                icon: InstagramIcon,
                title: "Instagram",
                content: "@vessel.br",
                gradient: "from-emerald-600 to-emerald-700",
              },
            ].map((contact, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${contact.gradient} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-2xl floating group-hover:scale-110 transition-transform duration-500`}
                >
                  <contact.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-black text-lg mb-2 text-slate-100">
                  {contact.title}
                </h4>
                <p className="text-slate-100 text-base">{contact.content}</p>
              </div>
            ))}
          </div>

          <div className="pt-10 border-t border-slate-700/50">
            <div className="flex items-center justify-center">
              <p className="text-slate-400 text-base text-center">
                ©{currentYear} VESSEL SOLUTION - TODOS OS DIREITOS RESERVADOS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
