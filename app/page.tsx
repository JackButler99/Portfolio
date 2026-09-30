import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContactCta } from "@/components/contact-cta";
import { ProjectCard } from "@/components/project-card";
import { processSteps, profile, projects, services } from "@/lib/portfolio-data";

export default function Home() {
  const featuredProject = projects[0];

  return (
    <main id="main-content">
      <section className="hero shell">
        <div className="hero-copy">
          <p className="availability"><span aria-hidden="true" />{profile.availability}</p>
          <p className="eyebrow">{profile.role}</p>
          <h1>I build <em>reliable</em> web products powered by data.</h1>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions text-gray-100">
            <Button asChild size="lg">
              <Link href="/projects">Explore my work</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Talk about your project</Link>
            </Button>
          </div>
          <dl className="hero-proof">
            <div>
              <dt>01</dt>
              <dd>Clear product thinking</dd>
            </div>
            <div>
              <dt>02</dt>
              <dd>Full-stack delivery</dd>
            </div>
            <div>
              <dt>03</dt>
              <dd>Data-backed outcomes</dd>
            </div>
          </dl>
        </div>

        <article className={`featured-project accent-${featuredProject.accent}`}>
          <div className="featured-project-meta">
            <span>Featured case study</span>
            <span>{featuredProject.category}</span>
          </div>
          <div className="featured-project-screen" aria-hidden="true">
            <div className="screen-toolbar">
              <span />
              <span />
              <span />
              <i>Operations overview</i>
            </div>
            <div className="screen-layout">
              <div className="screen-sidebar">
                <strong>OF</strong>
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="screen-main">
                <div className="screen-heading">
                  <span />
                  <i />
                </div>
                <div className="screen-kpis">
                  <div><span>Active work</span><strong>24</strong></div>
                  <div><span>On track</span><strong>91%</strong></div>
                  <div><span>Cycle time</span><strong>2.4d</strong></div>
                </div>
                <div className="screen-chart">
                  {[44, 62, 53, 76, 67, 88, 79, 94].map((height, index) => (
                    <span key={index} style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="featured-project-copy">
            <div>
              <p>{featuredProject.label}</p>
              <h2>{featuredProject.title}</h2>
            </div>
            <p>{featuredProject.summary}</p>
          </div>
          <div className="featured-project-footer">
            <ul>
              {featuredProject.stack.slice(0, 3).map((item) => <li key={item}>{item}</li>)}
            </ul>
            <Link href={`/projects/${featuredProject.slug}`}>View case study</Link>
          </div>
        </article>
      </section>

      <section className="marquee" aria-label="Core capabilities">
        <div>
          <span>Next.js</span><i />
          <span>TypeScript</span><i />
          <span>Python</span><i />
          <span>PostgreSQL</span><i />
          <span>Machine Learning</span><i />
          <span>API Design</span><i />
          <span>Data Products</span>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Useful software, seen from both sides.</h2>
          </div>
          <p>Representative case-study templates showing how web engineering and data work can meet inside one coherent product.</p>
        </div>
        <div className="project-grid">
          {projects.slice(1, 4).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <Button asChild variant="outline" className="section-button">
          <Link href="/projects">View all projects</Link>
        </Button>
      </section>

      <section className="section services-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Ways I can help</p>
              <h2>One partner across product and data.</h2>
            </div>
            <p>Bring me a defined build or an ambiguous operational problem. I’ll help turn it into a sensible technical plan and a working result.</p>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article key={service.number}>
                <span>{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <p className="best-for">{service.bestFor}</p>
              </article>
            ))}
          </div>
          <Button asChild variant="outline" className="section-button">
            <Link href="/services">Explore services</Link>
          </Button>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading process-heading">
          <div>
            <p className="eyebrow">A low-friction process</p>
            <h2>Clear steps. Visible progress.</h2>
          </div>
          <p>You should always know what is being built, what changed, and what decision comes next.</p>
        </div>
        <ol className="process-grid">
          {processSteps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <ContactCta />
    </main>
  );
}
