export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">TicketZero</h1>
        <p className="text-lg mt-2">Contestation automatisée. Simple. Sûr.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Déposez votre amende</h2>
          <form className="flex flex-col space-y-4">
            <input type="text" placeholder="Nom complet" className="p-2 bg-gray-800 border border-gray-600 rounded" />
            <input type="email" placeholder="Adresse email" className="p-2 bg-gray-800 border border-gray-600 rounded" />
            <input type="file" className="p-2 bg-gray-800 border border-gray-600 rounded" />
            <button type="submit" className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200">Envoyer</button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Fonctionnement</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Upload de l'amende</li>
            <li>Analyse automatique par OCR</li>
            <li>Contestation automatisée avec désignation</li>
            <li>Envoi direct aux autorités</li>
            <li>Suivi de votre dossier par email</li>
          </ul>
        </div>
      </section>

      <footer className="text-center mt-20 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} TicketZero. Tous droits réservés.
      </footer>
    </main>
  );
}