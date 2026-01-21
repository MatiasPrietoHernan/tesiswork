"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  MessageCircle,
  CheckCircle,
  BookOpen,
  Users,
  FileEdit,
  Target,
  Award,
  Clock,
} from "lucide-react";
import Image from "next/image";
export default function Home() {
  const whatsappNumber = "+5493815040885"; // Reemplaza con tu número real
  const whatsappMessage =
    "Hola, me interesa consultar sobre los servicios de TesisWork";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const services = [
    {
      title: "Acompañamiento académico",
      description:
        "Orientación personalizada durante todo el proceso de tu tesis",
      icon: Users,
    },
    {
      title: "Orientación en el proceso de tesis",
      description:
        "Guía metodológica y estructural para tu trabajo de investigación",
      icon: Target,
    },
    {
      title: "Escritura y reescritura académica",
      description: "Redacción profesional y mejora de tu contenido académico",
      icon: FileEdit,
    },
    {
      title: "Corrección de estilo y coherencia",
      description: "Revisión integral para garantizar calidad y consistencia",
      icon: CheckCircle,
    },
    {
      title: "Organización del trabajo",
      description: "Estructuración efectiva de capítulos y secciones",
      icon: BookOpen,
    },
    {
      title: "Acompañamiento metodológico",
      description: "Asesoramiento en diseño de investigación y análisis",
      icon: Award,
    },
  ];

  const packages = [
    {
      name: "Acompañamiento Inicial",
      features: [
        "Qué hago: defino con vos la base del trabajo.",
        "Delimitación del tema y problema.",
        "Objetivos y preguntas de investigación",
        "Orientación metodológica inicial.",
        "Devolución escrita.",
      ],
    },
    {
      name: "Corrección Integral",
      features: [
        "Qué hago: reviso y optimizo tu borrador.",
        "Corrección de redacción y coherencia.",
        "Revisión conceptual y argumentativa.",
        "Adecuación a normas académicas.",
        "Relectura final.",
      ],
      featured: true,
    },
    {
      name: "Acompañamiento Completo",
      features: [
        "Qué hago: acompaño todo el proceso de escritura.",
        "Asesoramiento metodológico continuo.",
        "Correcciones parciales.",
        "Orientación teórica y bibliográfica.",
        "Seguimiento hasta la entrega.",
      ],
    },
    {
      name: "Redacción académica completa",
      features: [
        "Qué hago: acompaño de forma intensiva la construcción del trabajo.",
        "Asistencia en redacción académica.",
        "Guía en marco teórico y metodológico.",
        "Correcciones y entregas parciales.",
        "Adecuación al nivel académico.",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/icon2.png" alt="icono" width={54} height={54} />
            <h1 className="text-2xl font-bold text-foreground">TesisWork</h1>
          </div>
          <Button
            size="lg"
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold"
            onClick={() => window.open(whatsappUrl, "_blank")}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Consultar ahora
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 md:py-32 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video2.mp4" type="video/mp4" />
        </video>
        <div className="" />
        {/* </CHANGE> */}

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-white/40 rounded-full">
              <p className="text-sm font-medium">
                ✨ Asesoría Profesional de Tesis
              </p>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Tu éxito académico está a un mensaje de distancia
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed text-pretty">
              Acompañamiento integral en tesis y trabajos finales de grado y
              posgrado. Convierte tu investigación en un trabajo académico de
              excelencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg px-8 py-6 h-auto font-semibold"
                onClick={() => window.open(whatsappUrl, "_blank")}
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                Consultar por WhatsApp
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6 h-auto border-2"
                onClick={() =>
                  document
                    .getElementById("servicios")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Ver servicios
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Servicios que ofrecemos
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Acompañamiento profesional adaptado a tus necesidades académicas
              específicas
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow border-2"
              >
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="servicios" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Paquetes de servicios
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Soluciones profesionales diseñadas para cada etapa de tu tesis
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`p-6 flex flex-col ${pkg.featured ? "border-primary border-2 shadow-lg scale-105" : "border-2"}`}
              >
                {pkg.featured && (
                  <div className="bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full w-fit mb-4">
                    Más popular
                  </div>
                )}
                <h4 className="text-2xl font-bold mb-2 text-foreground">
                  {pkg.name}
                </h4>
                <ul className="space-y-3 mb-6 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => {
                    const message = `Hola, me interesa consultar sobre el plan "${pkg.name}"`;
                    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      message,
                    )}`;
                    window.open(url, "_blank");
                  }}
                >
                  Consultar
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              ¿Por qué elegir TesisWork?
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">
                    Profesionalismo académico
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Equipo especializado con experiencia en investigación
                    académica de grado y posgrado
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">
                    Atención personalizada
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Cada trabajo se aborda de manera singular según tus
                    necesidades específicas
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">
                    Modalidad 100% online
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Trabaja desde donde estés con seguimiento constante y
                    entregas puntuales
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">
                    Resultados garantizados
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Alto estándar académico que cumple con las normativas
                    institucionales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              ¿Listo para finalizar tu tesis?
            </h3>
            <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed text-pretty">
              Contáctanos ahora y comienza tu camino hacia el éxito académico
              con el acompañamiento profesional que necesitas
            </p>
            <Button
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-xl px-12 py-8 h-auto font-bold shadow-lg"
              onClick={() => window.open(whatsappUrl, "_blank")}
            >
              <MessageCircle className="mr-3 h-7 w-7" />
              Consultar por WhatsApp
            </Button>
            <p className="mt-6 text-sm text-primary-foreground/80">
              Respuesta rápida • Presupuesto sin compromiso • Modalidad online
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <h4 className="text-xl font-bold text-foreground">
                    TesisWork
                  </h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Asesoría profesional integral en tesis y trabajos finales de
                  grado y posgrado.
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-4 text-foreground">
                  Servicios
                </h5>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Acompañamiento académico</li>
                  <li>Corrección integral</li>
                  <li>Redacción académica</li>
                  <li>Asesoramiento metodológico</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-4 text-foreground">Contacto</h5>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={() => window.open(whatsappUrl, "_blank")}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </div>
            </div>
            <div className="border-t mt-8 pt-8 text-center text-muted-foreground text-sm">
              <p>© 2026 TesisWork. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => window.open(whatsappUrl, "_blank")}
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-8 w-8" />
      </button>
    </div>
  );
}
