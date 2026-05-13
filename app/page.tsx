import React from 'react';
import { Instagram, Twitch, Youtube, Twitter, ArrowRight, Gamepad2, Code2, Video } from 'lucide-react';
import Image from 'next/image';
import Link from "next/link";
import { FlipWord } from '@/components/FlipWord';

export default function Home() {
  const projects = [
    {
      title: "BlockRush",
      description: "Breakout-style arcade roguelite with six power-up families, boss fights, and a new build every run",
      status: "Live on Google Play",
      tech: ["Godot", "GDScript", "Mobile"],
      color: "gold",
      icon: <Gamepad2 className="w-6 h-6" />
    },
    {
      title: "Beby",
      description: "Baby gender predictor using Chinese lunar calendar",
      status: "Live on App Store",
      tech: ["Kotlin Multiplatform", "Compose", "iOS/Android"],
      color: "terracotta",
      icon: <Code2 className="w-6 h-6" />
    },
    {
      title: "Clipzy",
      description: "Twitch clips manager and discovery tool",
      status: "In Development",
      tech: ["Next.js", "Twitch API"],
      color: "gold-bright",
      icon: <Video className="w-6 h-6" />
    },
    {
      title: "SubNudge",
      description: "Manual nudges for Twitch creators doing monthly subscriber review and replacing spreadsheet chaos",
      status: "Coming soon",
      tech: ["Mobile", "Twitch", "Human-in-the-loop"],
      color: "cyan",
      icon: <Twitch className="w-6 h-6" />
    }
  ];

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="section relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <div className="inline-block animate-fade-in-up">
                <div className="badge badge-accent mono">
                  🎮 Game Dev • 📺 Streamer • 🎥 Content Creator
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl leading-tight animate-fade-in-up delay-100">
                Building{' '}
                <FlipWord 
                  words={['games', 'apps']} 
                  className="text-gradient-orange"
                />
                {' '}and documenting{' '}
                <span className="text-gradient-cyan">everything</span>
              </h1>

              <p className="text-lg md:text-xl opacity-80 animate-fade-in-up delay-200" style={{ color: 'var(--text-muted)' }}>
                I make mobile games, stream the dev process on Twitch, and turn it all into YouTube videos. 
                <strong>Block Rush</strong> is live on Google Play, and I&apos;m also building <strong>Clipzy</strong> for Twitch creators. 
                Goal: retire my parents, replace my day job, and prove indie devs can make it.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
                <Link href="/apps" className="btn btn-primary">
                  See What I'm Building <ArrowRight className="w-4 h-4" />
                </Link>
                <a 
                  href="https://www.twitch.tv/fr0zair" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary"
                >
                  <Twitch className="w-4 h-4" /> Watch Live
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4 animate-fade-in-up delay-400">
                <a 
                  href="https://www.twitch.tv/fr0zair" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg hover:scale-110 transition-transform"
                  style={{ background: 'var(--surface)', border: '2px solid var(--border-subtle)' }}
                  aria-label="Twitch"
                >
                  <Twitch className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com/frozairlol" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg hover:scale-110 transition-transform"
                  style={{ background: 'var(--surface)', border: '2px solid var(--border-subtle)' }}
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.youtube.com/@frozair" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg hover:scale-110 transition-transform"
                  style={{ background: 'var(--surface)', border: '2px solid var(--border-subtle)' }}
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/frozair.lol" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg hover:scale-110 transition-transform"
                  style={{ background: 'var(--surface)', border: '2px solid var(--border-subtle)' }}
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right: Visual Element */}
            <div className="relative animate-fade-in-scale delay-200">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Decorative Rings */}
                <div className="absolute inset-0 rounded-full animate-pulse-glow" style={{ 
                  background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                  opacity: 0.1
                }}></div>
                <div className="absolute inset-4 rounded-full animate-pulse-glow" style={{ 
                  background: 'var(--surface)',
                  animationDelay: '0.5s'
                }}></div>
                
                {/* Profile Image */}
                <div className="absolute inset-8 rounded-full overflow-hidden border-4 animate-float" style={{ 
                  borderColor: 'var(--accent-primary)'
                }}>
                  <Image 
                    src="/frozair.png" 
                    alt="Frozair" 
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating Tech Icons */}
                <div className="absolute top-0 right-0 bg-[var(--surface-elevated)] p-3 rounded-lg border-2 border-[var(--border-emphasis)] animate-float" style={{ animationDelay: '0.5s' }}>
                  <Code2 className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
                </div>
                <div className="absolute bottom-0 left-0 bg-[var(--surface-elevated)] p-3 rounded-lg border-2 border-[var(--border-emphasis)] animate-float" style={{ animationDelay: '1s' }}>
                  <Gamepad2 className="w-6 h-6" style={{ color: 'var(--accent-secondary)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] opacity-5 transform skew-y-2"></div>
      </section>

      {/* Mission Section */}
      <section className="section-alt relative">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl animate-fade-in-up">
              The <span className="text-gradient-rainbow">Mission</span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed animate-fade-in-up delay-100" style={{ color: 'var(--text-muted)' }}>
              Build games and apps people love. Document the entire journey on <strong style={{ color: 'var(--foreground)' }}>Twitch and YouTube</strong>. 
              Help others learn from my wins and failures. 
              <strong style={{ color: 'var(--foreground)' }}> Replace my day job with content and products.</strong> Retire my parents. 
              Prove that indie devs can make it happen by building in public and shipping consistently.
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="card animate-fade-in-up delay-200">
                <div className="text-3xl font-bold text-gradient-orange mb-2">100</div>
                <div className="text-sm uppercase tracking-wide mono" style={{ color: 'var(--text-muted)' }}>Video Goal 2026</div>
              </div>
              <div className="card animate-fade-in-up delay-300">
                <div className="text-3xl font-bold text-gradient-cyan mb-2">3+</div>
                <div className="text-sm uppercase tracking-wide mono" style={{ color: 'var(--text-muted)' }}>Active Projects</div>
              </div>
              <div className="card animate-fade-in-up delay-400">
                <div className="text-3xl font-bold text-gradient-rainbow mb-2">2x/wk</div>
                <div className="text-sm uppercase tracking-wide mono" style={{ color: 'var(--text-muted)' }}>Twitch Streams</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl mb-4">
              What I'm <span className="text-gradient-orange">Building</span>
            </h2>
            <p className="text-lg opacity-80" style={{ color: 'var(--text-muted)' }}>
              Current games and tools, from live releases to what&apos;s shipping next
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div 
                key={project.title}
                className={`card-hover group animate-fade-in-up relative overflow-hidden`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Gradient Accent Bar */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background: project.color === 'gold' ? 'var(--accent-primary)' :
                               project.color === 'terracotta' ? 'var(--accent-secondary)' :
                               'var(--accent-tertiary)'
                  }}
                ></div>

                <div className="p-6 space-y-4">
                  {/* Icon */}
                  <div 
                    className="inline-flex p-3 rounded-lg" 
                    style={{ 
                      background: 'var(--surface-elevated)',
                      color: project.color === 'orange' ? 'var(--accent-primary)' :
                             project.color === 'cyan' ? 'var(--accent-secondary)' :
                             'var(--accent-tertiary)'
                    }}
                  >
                    {project.icon}
                  </div>

                  {/* Title & Status */}
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                    <div className="badge text-xs">{project.status}</div>
                  </div>

                  {/* Description */}
                  <p style={{ color: 'var(--text-muted)' }}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs px-2 py-1 rounded mono"
                        style={{ 
                          background: 'var(--surface-elevated)',
                          color: 'var(--text-muted)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/apps" className="btn btn-primary">
              View All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Content CTA */}
      <section className="section-alt relative overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl animate-fade-in-up">
              Watch the <span className="text-gradient-cyan">Journey</span>
            </h2>
            <p className="text-lg md:text-xl opacity-80 animate-fade-in-up delay-100" style={{ color: 'var(--text-muted)' }}>
              I stream <strong>Tuesdays & Thursdays</strong> on Twitch, building games and tools live. 
              Then I turn those streams into YouTube videos. Come hang out, ask questions, 
              and watch the process—bugs, breakthroughs, and everything in between.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
              <a 
                href="https://www.twitch.tv/fr0zair" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Twitch className="w-5 h-5" /> Follow on Twitch
              </a>
              <a 
                href="https://www.youtube.com/@frozair" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Youtube className="w-5 h-5" /> Subscribe on YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Diagonal Accent */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-[var(--accent-secondary)] to-[var(--accent-tertiary)] opacity-5 transform -skew-y-2"></div>
      </section>
    </div>
  );
}
