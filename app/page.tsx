import Navbar from "./components/Navbar"
import Experience from "./components/Experience"

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex pt-[57px]">

        {/* Left — sticky photo sidebar */}
        <aside className="w-[30%] shrink-0 bg-[#0F0F1A] sticky top-[57px] h-[calc(100vh-57px)] overflow-hidden">
          <img
            src="/mypic.jpg"
            alt="Senjuti Bala"
            className="w-full h-full object-cover object-center scale-110"
          />
        </aside>

        {/* Right — scrollable content */}
        <main className="flex-1 px-16 py-12 max-w-3xl">

          {/* Hero */}
          <section className="mb-10 pt-12">
            <h1 className="text-4xl font-bold mb-4">Hi, I'm Senjuti</h1>
            <p className="text-lg text-gray-600 mb-4">
              Data scientist with roots in research, consulting, and engineering.
              I work where data meets meaning. When I'm not doing that, I'm probably
              reading Mary Oliver, watching Anthony Bourdain, going to the movies,
              or conversing non-stop (sometimes with myself).
            </p>
            <p className="text-lg text-gray-600">Currently based in the Netherlands.</p>
          </section>

          {/* Experience */}
          <div className="mb-20" id="experience">
            <Experience />
          </div>

          {/* Projects */}
          <section id="projects" className="mb-10">
            <h2 className="text-2xl font-semibold mb-6">Projects</h2>
            <div className="space-y-6">
              <div className="border border-[#C084B0] rounded-lg p-5">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">MS Thesis · Leiden University · 2025</p>
                <h3 className="font-medium mb-2">Two-Layer Agent-Based Model for Climate Cooperation: Coupling National Policy Decisions and Consumer Behavior</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Traditional climate models tie emissions directly to GDP which totally disregards the people actually making consumption decisions.
                  This thesis builds a two-layer ABM that couples national governments as boundedly rational policy agents with
                  heterogeneous consumer households deciding whether to adopt green technology. A feedback loop connects the two,
                  policy shapes adoption, adoption drives emissions, emissions update climate vulnerability and fairness perceptions,
                  which in turn reshape policy. Seven experimental scenarios test how fairness mechanisms, aid structures, and
                  behavioural shocks affect cooperation across developed, developing, and vulnerable country types. The consistent
                  finding across all experi scenarios is that the access matters more than awareness, and redistribution alone leaves the most vulnerable behind.
                </p>
                <div className="flex gap-4">
                  <a href="https://github.com/tijushe/two_layer_climate_abm" target="_blank" rel="noopener noreferrer" className="text-xs underline underline-offset-4 text-[#C084B0] hover:text-[#8B4A7A] transition-colors">GitHub</a>
                  <a href="https://drive.google.com/file/d/1flmYbFHOpT27y60uzIWTTkr4luTxjtoB/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-xs underline underline-offset-4 text-[#C084B0] hover:text-[#8B4A7A] transition-colors">View PDF</a>
                </div>
              </div>
              <div className="border border-[#C084B0] rounded-lg p-5">
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Publication · Chapter 20 · 2025</p>
                <h3 className="font-medium mb-2">FAIR Data Implementation for Analysis of Research Data in Human Trafficking and Migration</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Human trafficking data is sensitive, fragmented, and often trapped in isolation which is exactly what makes
                  it hard to study and act on. This chapter implements FAIR principles on a qualitative dataset of 126 survivor
                  testimonies documenting trafficking routes across Africa and Europe. The work involved cleaning and restructuring
                  deeply unstructured interview data, building a custom OWL ontology for human trafficking entities (victims,
                  traffickers, border crossings, abuses), converting the data into RDF triples via Python's rdflib, and loading
                  it into AllegroGraph for SPARQL querying. The result are an interactive Streamlit dashboard and Gephi network
                  visualisations that reveal trafficking routes, key actors, and transit hotspots making complex, sensitive
                  data accessible to non-technical researchers while preserving strict privacy safeguards.
                </p>
                <a href="https://www.researchgate.net/publication/391762371_Creation_of_a_FAIR_Data_Point_for_a_Clinical_Trial_the_schistosome_controlled_human_infection_dataset" target="_blank" rel="noopener noreferrer" className="text-xs underline underline-offset-4 text-[#C084B0] hover:text-[#8B4A7A] transition-colors">View Publication</a>
              </div>
            </div>
          </section>

          {/* Research Interests
          <section id="research" className="mb-20">
            <h2 className="text-2xl font-semibold mb-6">Research Interests</h2>
            <p className="text-sm leading-relaxed">
              <span className="text-[#0F0F1A]">Social cohesion, individualisation, and the structure of social networks.</span>
              {" "}<span className="text-[#C084B0]">Quantitative and computational approaches to social phenomena.</span>
              {" "}<span className="text-[#0F0F1A]">Agent-based modelling and simulation for policy and behaviour.</span>
              {" "}<span className="text-[#8B4A7A]">FAIR data principles, data governance, and responsible AI.</span>
              {" "}<span className="text-[#C084B0]">Interdisciplinary research bridging analytical rigour with humanistic context.</span>
            </p>
          </section> */}
          {/* Education */}
          <section id="education" className="mb-10">
            <h2 className="text-2xl font-semibold mb-6">Education</h2>
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">Leiden University</p>
                  <p className="text-sm text-gray-600">MSc. Computer Science with specialization in Data Science</p>
                  <p className="text-sm text-gray-500 mt-1">Leiden, The Netherlands</p>
                </div>
                <p className="text-sm text-gray-400 shrink-0 ml-4">2023 – 2025</p>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">National Institute of Technology Durgapur (NIT)</p>
                  <p className="text-sm text-gray-600">BTech. Information Technology</p>
                  <p className="text-sm text-gray-500 mt-1">Durgapur, West Bengal, India</p>
                </div>
                <p className="text-sm text-gray-400 shrink-0 ml-4">2016 – 2020</p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section id="skills" className="mb-10">
            <h2 className="text-2xl font-semibold mb-6">Skills</h2>
            <div className="space-y-4 text-sm text-gray-600">
              {[
                { category: "ML & Modelling", items: "Supervised & Unsupervised Learning, NLP, Deep Learning (PyTorch / TensorFlow), Transformers, Agent-based Modelling" },
                { category: "Data & Analysis", items: "Python (Pandas, NumPy, SciPy), SQL, Tableau, Power BI, Plotly, Statistical Modelling" },
                { category: "Data Governance", items: "FAIR Principles, Data Lifecycle Planning, Metadata Standards, Access Control, Reproducibility" },
                { category: "Systems & Tools", items: "Git, Gephi, Streamlit, RDF/OWL, Basic Cloud (AWS / Azure), Experiment Tracking" },
                { category: "Soft Skills", items: "Stakeholder Communication, User Onboarding, Collaborative Working, Product Pricing" },
              ].map((skill, i) => (
                <div key={i}>
                  <p className="font-medium text-[#0F0F1A]">{skill.category}</p>
                  <p>{skill.items}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Fun Facts */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-6">Fun Facts</h2>
            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p><span className="text-base mr-2">🍔</span>Spent two years serving Happy Meals at McDonald's Nederlands as a part-time crew; trained across service, cafe, and kitchen.</p>
              <p><span className="text-base mr-2">📸</span>In my early teens I got my first DSLR, a Canon 600D and spent the next five years carrying multiple lenses, a tripod, and a camera bag everywhere like it was a personality. It was.</p>
              <p><span className="text-base mr-2">🎬</span>That same camera led me to create two short films with my best friend. Both were selected at the Children's Film Festival in Dhaka. We won a prize for one. I still think about making films.</p>
              <p><span className="text-base mr-2">🐝</span>In college, I had my own team of designers and developers. I still silently judge people based on the fonts they choose. Some of that work lives on <a href="https://www.behance.net/senjutibala" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-[#C084B0] hover:text-[#8B4A7A]">Behance</a>.</p>
              <p><span className="text-base mr-2">🇯🇵</span>Represented Bangladesh as an exchange student in Japan in high school, visited Miyazaki and Tokyo. When my host mother told me to call her mum, I cried my eyes out.</p>
              <p><span className="text-base mr-2">💃</span>In high school, I wrote and coordinated a Bengali folk dance theatre piece called "Mahua" for the seniors farewell. It was performed live. I have no idea where that version of me came from.</p>
            </div>
          </section>

          {/* Get to Know Me */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-6">Get to Know Me</h2>
            <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
              <p><span className="text-base mr-2">🍿</span>Letterboxd is my most used app. <span className="text-gray-800 font-medium">The Banshees of Inisherin</span> and <span className="text-gray-800 font-medium">Aftersun</span> are my current favourite movies.</p>
              <p><span className="text-base mr-2">⭐</span>My father and Satyajit Ray are two of my favourite people to have existed on this planet.</p>
              <p><span className="text-base mr-2">🌚</span>I return to <span className="italic">The Love Song of J. Alfred Prufrock</span> by T.S. Eliot more than I probably should.</p>
              <p><span className="text-base mr-2">🎵</span>Glass Animals. I cannot explain it. <a href="https://www.youtube.com/watch?v=1w7OgIMMRc4" target="_blank" rel="noopener noreferrer" className="text-[#C084B0] hover:text-[#8B4A7A] underline underline-offset-4 transition-colors">I won't try.</a></p>
              <p><span className="text-lg mr-2">🕺</span>When things get heavy, I put on Sweet Child O Mine and dance. <a href="https://www.youtube.com/watch?v=1w7OgIMMRc4" target="_blank" rel="noopener noreferrer" className="text-[#C084B0] hover:text-[#8B4A7A] underline underline-offset-4 transition-colors">I mean why wouldn't you?</a></p>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-600 text-sm mb-6">
              Open to work in research, data science, analytics, or anything that sits at an interesting intersection.
              Best reached at <a href="mailto:balasenjuti22@gmail.com" className="underline underline-offset-4 text-[#C084B0] hover:text-[#8B4A7A]">balasenjuti22@gmail.com</a>
            </p>
            <div className="flex gap-6 text-sm text-[#C084B0]">
              <a href="https://www.linkedin.com/in/senjutibala/" target="_blank" rel="noopener noreferrer" className="hover:text-[#8B4A7A] transition-colors">LinkedIn</a>
              <a href="https://www.instagram.com/tijushe/" target="_blank" rel="noopener noreferrer" className="hover:text-[#8B4A7A] transition-colors">Instagram</a>
              <a href="https://open.spotify.com/user/31ege6ijahvlyt3mjpcs7esoukmu?si=VD5irhJCQYu9g3lGVuQjyQ" target="_blank" rel="noopener noreferrer" className="hover:text-[#8B4A7A] transition-colors">Playlists</a>
            </div>
          </section>

        </main>

        {/* Right — sticky sidebar
        <aside className="w-[30%] shrink-0 bg-[#0F0F1A] sticky top-[57px] h-[calc(100vh-57px)] overflow-hidden">
          <img
            src="/mypic.jpg"
            alt="Senjuti Bala"
            className="w-full h-full object-cover object-center scale-110"
          />
        </aside> */}

      </div>
    </>
  )
}