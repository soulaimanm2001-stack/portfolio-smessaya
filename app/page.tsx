"use client";

import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  const projets = [
    {
      titre: "Chaîne YouTube Shorts 100% automatisée",

      description: [
        "Création d’une chaîne YouTube Shorts entièrement automatisée.",
        "Développement d’un workflow Make permettant de récupérer automatiquement des vidéos virales depuis TikTok.",
        "Traitement automatisé des contenus vidéo afin de préparer les formats adaptés à YouTube Shorts.",
        "Publication automatique des vidéos sans intervention manuelle.",
        "Mise en place d’une base de données centralisée pour organiser les contenus.",
        "Optimisation du système pour maximiser la fréquence et la rapidité de publication.",
        "Plus de 20 000 vues générées en seulement quelques semaines.",
      ],

      stats: "+20K vues générées",

      outils: [
        "Make",
        "YouTube API",
        "TikTok",
        "Google Sheets",
      ],

      image: "/images/automatisation-youtube.png",
    },

    {
      titre: "Investissement crypto automatisé",

      description: [
        "Développement d’un système d’investissement automatisé sur les marchés crypto.",
        "Surveillance en temps réel des variations de prix via APIs.",
        "Achat automatique lorsqu’un actif descend sous un seuil défini.",
        "Vente automatique lorsque le prix dépasse un objectif prédéfini.",
        "Gestion automatisée des conditions d’entrée et de sortie.",
        "Mise en place d’alertes et de suivi des performances.",
        "Système fonctionnant 24h/24 sans intervention humaine.",
      ],

      stats: "Surveillance active 24/7",

      outils: [
        "Make",
        "Crypto API",
        "Webhooks",
        "Google Sheets",
      ],

      image: "/images/automatisation-nft.png",
    },

    {
      titre: "Automatisation d’emails",

      description: [
        "Création d’un workflow d’envoi automatique d’emails professionnels.",
        "Automatisation des campagnes de prospection et des relances.",
        "Centralisation des données clients dans Google Sheets.",
        "Déclenchement intelligent des envois selon différents scénarios.",
        "Réduction importante des tâches répétitives administratives.",
        "Optimisation du suivi des contacts et des échanges.",
        "Gain de plusieurs heures de travail chaque semaine.",
      ],

      stats: "+15h économisées / semaine",

      outils: [
        "Make",
        "SMTP",
        "Google Sheets",
        "Gmail",
      ],

      image: "/images/automatisation-email.png",
    },
  ];

  const automatisations = [
    "Automatisation d’envoi de lettres recommandées",
    "Automatisation de messages de relance",
    "Automatisation de prospection",
    "Préremplissage automatique de bulletins de paie",
  ];

  const recommandations = [
    {
      titre: "Archivage intelligent automatisé",

      texte:
        "Je peux mettre en place un système capable de classer automatiquement vos documents et archives sans intervention manuelle. L’objectif est de réduire le temps perdu dans la gestion administrative et rendre tous les fichiers accessibles beaucoup plus rapidement.",
    },

    {
      titre: "Extraction automatique de données",

      texte:
        "Je peux automatiser la récupération d’informations importantes depuis vos documents PDF ou papier. Cela permet d’éviter la saisie manuelle, limiter les erreurs et accélérer le traitement des dossiers.",
    },

    {
      titre: "Moteur de recherche intelligent",

      texte:
        "Je peux créer un moteur de recherche intelligent permettant de retrouver rapidement n’importe quel document dans vos archives. L’objectif est de simplifier l’accès aux informations et améliorer la productivité des équipes.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* POPUP */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-6">

          <div className="relative w-full max-w-2xl rounded-[2.5rem] overflow-hidden border border-violet-400 bg-violet-950 shadow-[0_0_60px_rgba(168,85,247,0.55)]">

            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 z-50 w-10 h-10 rounded-full border border-violet-400 bg-black/40 hover:bg-black/70 transition shadow-[0_0_20px_rgba(168,85,247,0.5)]"
            >
              ✕
            </button>

            <div className="grid md:grid-cols-2 min-h-[420px]">

              {/* LEFT */}
              <div className="bg-gradient-to-br from-violet-700 to-fuchsia-700 p-8 flex flex-col justify-center">

                <div className="inline-block px-4 py-2 rounded-full bg-violet-500/20 border border-violet-300 text-sm font-semibold w-fit mb-6 shadow-[0_0_20px_rgba(168,85,247,0.45)]">
                  Contact
                </div>

                <h2 className="text-3xl font-black leading-tight">
                  Travaillons ensemble.
                </h2>

                <p className="mt-5 text-[15px] leading-7 text-violet-100">
                  Professionnel orienté automatisation avec une expérience dans
                  l’optimisation des processus digitaux et la mise en place de
                  workflows automatisés. Excellentes capacités d’analyse et
                  aptitude à résoudre les problèmes efficacement.
                </p>

                <div className="space-y-4 mt-8">

                  <div className="bg-violet-500/20 rounded-2xl p-4 border border-violet-400 shadow-[0_0_20px_rgba(168,85,247,0.4)]">

                    <div className="text-xs text-violet-200 mb-1">
                      Email
                    </div>

                    <div className="font-semibold text-sm break-all">
                      soulaiman.messaya@hotmail.com
                    </div>
                  </div>

                  <div className="bg-violet-500/20 rounded-2xl p-4 border border-violet-400 shadow-[0_0_20px_rgba(168,85,247,0.4)]">

                    <div className="text-xs text-violet-200 mb-1">
                      Téléphone
                    </div>

                    <div className="font-semibold text-sm">
                      +33 7 83 42 59 79
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="bg-white overflow-hidden">
                <img
                  src="/images/photo-soulaiman.png"
                  alt="Soulaiman"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="px-8 py-32 max-w-7xl mx-auto text-center">

        <div className="inline-block px-4 py-2 rounded-full bg-violet-500/20 border border-violet-400 text-violet-200 text-sm font-semibold mb-8 shadow-[0_0_20px_rgba(168,85,247,0.45)]">
          Spécialiste Automatisation & IA
        </div>

        <h1 className="text-6xl md:text-8xl font-black leading-[1.05] tracking-tight">

          <span className="block">
            Je crée des
          </span>

          <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-400 to-violet-200 bg-clip-text text-transparent">
            systèmes automatisés.
          </span>
        </h1>

        <div className="w-64 h-[2px] mx-auto mt-8 bg-gradient-to-r from-transparent via-violet-400 to-transparent"></div>

        <p className="max-w-3xl mx-auto text-xl text-neutral-300 leading-[1.9] mt-10">
          Automatisation de workflows, intelligence artificielle,
          APIs et systèmes autonomes avec Make et automatisation avancée.
        </p>

        <div className="flex justify-center gap-4 mt-12 flex-wrap">

          <a
            href="#projets"
            className="px-8 py-4 rounded-2xl bg-violet-600 border border-violet-300 hover:bg-violet-500 transition text-lg font-semibold shadow-[0_0_25px_rgba(168,85,247,0.5)]"
          >
            Mes projets
          </a>

          <button
            onClick={() => setOpen(true)}
            className="px-8 py-4 rounded-2xl border border-violet-400 bg-violet-500/10 hover:bg-violet-500/20 transition text-lg shadow-[0_0_20px_rgba(168,85,247,0.35)]"
          >
            Contacter
          </button>
        </div>
      </section>

      {/* STATS */}
      <section className="px-8 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {[
          ["+20K", "Vues générées"],
          ["100%", "Automatisations"],
          ["24/7", "Systèmes actifs"],
        ].map((item, index) => (
          <div
            key={index}
            className="bg-violet-500/10 border border-violet-400 rounded-3xl p-8 text-center shadow-[0_0_30px_rgba(168,85,247,0.35)]"
          >
            <div className="text-5xl font-black text-violet-300">
              {item[0]}
            </div>

            <div className="mt-3 text-violet-100 text-lg">
              {item[1]}
            </div>
          </div>
        ))}
      </section>

      {/* PROJETS */}
      <section
        id="projets"
        className="px-8 py-32 max-w-7xl mx-auto"
      >

        <div className="text-center mb-20">

          <div className="text-violet-400 uppercase tracking-[0.3em] text-sm mb-4">
            Portfolio
          </div>

          <h2 className="text-5xl font-black">
            Mes automatisations
          </h2>
        </div>

        <div className="space-y-12">

          {projets.map((projet, index) => (
            <div
              key={index}
              className="bg-violet-500/10 border border-violet-400 rounded-[2.5rem] p-10 shadow-[0_0_35px_rgba(168,85,247,0.35)]"
            >

              <div className="grid lg:grid-cols-2 gap-12 items-start">

                {/* LEFT */}
                <div>

                  <div className="inline-block px-4 py-2 rounded-full border border-violet-300 text-violet-300 text-sm font-semibold mb-6 bg-violet-500/10">
                    Projet automatisation
                  </div>

                  <h3 className="text-4xl font-black leading-tight">
                    {projet.titre}
                  </h3>

                  <div className="space-y-4 mt-8">

                    {projet.description.map((point, idx) => (
                      <div
                        key={idx}
                        className="flex gap-3 text-neutral-200 text-lg leading-8"
                      >
                        <span className="text-violet-300 mt-1">•</span>

                        <p>
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 bg-violet-500/20 border border-violet-400 rounded-2xl p-5 shadow-[0_0_25px_rgba(168,85,247,0.35)]">

                    <div className="text-violet-200 font-semibold">
                      Résultats
                    </div>

                    <div className="text-2xl font-black mt-2">
                      {projet.stats}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-8">

                    {projet.outils.map((outil, idx) => (
                      <div
                        key={idx}
                        className="px-4 py-2 rounded-full bg-violet-500/20 border border-violet-400 text-sm shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                      >
                        {outil}
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT */}
                <img
                  src={projet.image}
                  alt={projet.titre}
                  className="w-full rounded-[2rem] border border-violet-400 shadow-[0_0_35px_rgba(168,85,247,0.4)]"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AUTRES AUTOMATISATIONS */}
      <section className="px-8 pb-20 max-w-7xl mx-auto">

        <div className="bg-violet-500/10 border border-violet-400 rounded-[2.5rem] p-10 shadow-[0_0_35px_rgba(168,85,247,0.35)]">

          <div className="inline-block px-4 py-2 rounded-full border border-violet-300 text-violet-300 text-sm font-semibold mb-6 bg-violet-500/10">
            Autres automatisations
          </div>

          <h3 className="text-3xl font-black mb-10">
            Autres systèmes développés.
          </h3>

          <div className="grid md:grid-cols-2 gap-5">

            {automatisations.map((item, index) => (
              <div
                key={index}
                className="bg-violet-500/20 border border-violet-400 rounded-2xl p-5 text-lg text-neutral-100 shadow-[0_0_20px_rgba(168,85,247,0.35)]"
              >
                • {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECOMMANDATIONS */}
      <section className="px-8 pb-32 max-w-7xl mx-auto">

        <div className="bg-violet-500/10 border border-violet-400 rounded-[2.5rem] p-10 shadow-[0_0_35px_rgba(168,85,247,0.35)]">

          <div className="inline-block px-4 py-2 rounded-full border border-violet-300 text-violet-300 text-sm font-semibold mb-6 bg-violet-500/10">
            Recommandations automatisation
          </div>

          <h3 className="text-4xl font-black mb-12">
            Ce que je peux automatiser pour votre entreprise.
          </h3>

          <div className="space-y-8">

            {recommandations.map((item, index) => (
              <div
                key={index}
                className="bg-violet-500/20 border border-violet-400 rounded-3xl p-8 shadow-[0_0_25px_rgba(168,85,247,0.35)]"
              >

                <h3 className="text-2xl font-bold text-violet-200 mb-5">
                  {item.titre}
                </h3>

                <p className="text-lg text-neutral-100 leading-8">
                  {item.texte}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}