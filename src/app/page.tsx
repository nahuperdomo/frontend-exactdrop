export default function Home() {
  return (
    <section>
      {/* Hero Section */}
      <div className="hero bg-blue-500 text-white text-center py-20">
        <h1 className="text-4xl font-bold">Bienvenido a ExactDrop</h1>
        <p className="mt-4 text-lg">
          Solución revolucionaria para entregas precisas y programadas.
        </p>
        <button className="mt-8 bg-white text-blue-500 px-6 py-2 rounded-md hover:bg-gray-200">
          <a href="/login">
            Empezar ahora
          </a>
        </button>
      </div>

      {/* Sobre Nosotros */}
      <div className="about py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Sobre Nosotros</h2>
        <p className="text-center text-lg max-w-2xl mx-auto">
          En ExactDrop, redefinimos la experiencia de entregas con lockers inteligentes y entregas programadas.
          Nuestra misión es ofrecer comodidad, flexibilidad y seguridad en cada compra online.
        </p>
      </div>

      {/* Contacto */}
      <div className="contact bg-white py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Contacto</h2>
        <p className="text-center mb-6">
          ¿Tenés preguntas o querés trabajar con nosotros? ¡Escribinos!
        </p>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Nombre
            </label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="name"
              placeholder="Tu nombre"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              id="email"
              placeholder="Tu correo electrónico"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="message">
              Mensaje
            </label>
            <textarea
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="message"
              placeholder="Tu mensaje"
              rows={4}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
