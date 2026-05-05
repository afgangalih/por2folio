import React from "react";
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import ReactMarkdown from "react-markdown";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

import Marquee from "@/components/magicui/marquee";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Icons } from "@/components/icons";
import { ExternalLink } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const ProjectModal = ({ project, isOpen, onOpenChange }) => {
  const { t } = useLanguage();
  if (!project) return null;

  const [activeImage, setActiveImage] = React.useState(project.image);
  const [lightboxImage, setLightboxImage] = React.useState(null);

  React.useEffect(() => {
    setActiveImage(project.image);
  }, [project]);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] overflow-y-auto p-0 gap-0 border-none shadow-2xl bg-background/98 backdrop-blur-xl">
          <div className="relative border-b bg-muted/20">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            
            <div className="px-6 md:px-8 pr-14 md:pr-16 py-6 flex items-center justify-between gap-6">
              <div className="flex items-center gap-5 min-w-0">
                <div className="hidden sm:block w-[3px] h-10 bg-gradient-to-b from-primary to-violet-500 rounded-full shrink-0" />
                <div className="min-w-0">
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/70 mb-1">
                    {project.category}
                  </div>
                  <DialogTitle className="text-xl md:text-3xl font-black tracking-tighter leading-tight italic uppercase py-1 pr-2">
                    {project.title}
                  </DialogTitle>
                </div>
              </div>

              {project.role && (
                <div className="shrink-0 hidden sm:block">
                  <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-primary">
                    {t(project.role)}
                  </span>
                </div>
              )}
            </div>
          </div>

          <DialogDescription className="sr-only">{t(project.description)}</DialogDescription>

          <div className="p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
              <div className="lg:col-span-7 space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-violet-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />
                  <div 
                    className="relative aspect-video rounded-2xl overflow-hidden border shadow-2xl bg-zinc-950 cursor-zoom-in"
                    onClick={() => setLightboxImage(activeImage)}
                  >
                    <img 
                      src={activeImage} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-top transition-all duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 text-white transform scale-90 group-hover:scale-100 transition-transform">
                        <ExternalLink className="size-6" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {project.images && project.images.length > 1 && (
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                    {project.images.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImage(img)}
                        className={cn(
                          "w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:-translate-y-1",
                          activeImage === img 
                            ? "border-primary shadow-[0_0_15px_rgba(var(--primary),0.3)] scale-110" 
                            : "border-border/50 opacity-40 hover:opacity-100 hover:border-primary/50"
                        )}
                      >
                        <img src={img} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
                <div className="space-y-10">
                  {project.role && (
                    <div className="sm:hidden mb-6">
                      <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] text-primary">
                        {t(project.role)}
                      </span>
                    </div>
                  )}

                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary flex items-center gap-2">
                      <span className="w-8 h-[1px] bg-primary/30" />
                      {t({ en: "Project Overview", id: "Ringkasan Proyek" })}
                    </h4>
                    <div className="prose prose-sm dark:prose-invert max-w-full text-muted-foreground leading-relaxed text-sm md:text-base italic font-medium">
                      {t(project.details) || t(project.description)}
                    </div>
                  </div>

                  {project.features && (
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-primary/30" />
                        {t({ en: "Key Features", id: "Fitur Utama" })}
                      </h4>
                      <ul className="grid grid-cols-1 gap-3">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-muted/30 border border-border/50 text-xs font-bold text-foreground/80 group hover:border-primary/30 transition-colors">
                            <div className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0 group-hover:scale-150 transition-transform" />
                            {t(feature)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary flex items-center gap-2">
                      <span className="w-8 h-[1px] bg-primary/30" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="rounded-md bg-zinc-100 dark:bg-zinc-800/50 border border-border/50 text-[9px] font-black uppercase tracking-tighter px-2.5 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-6 border-t border-border/50">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-1">
                    Launch Project
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.links?.map((link, idx) => (
                      <Button key={idx} asChild size="lg" className="rounded-xl gap-3 font-black uppercase italic tracking-tighter shadow-xl shadow-primary/10 hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300">
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          {link.type === "GitHub" ? <Icons.github className="size-5" /> : <ExternalLink className="size-5" />}
                          {link.type}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={!!lightboxImage} onOpenChange={() => setLightboxImage(null)}>
        <DialogContent className="max-w-[95vw] md:max-w-[90vw] h-fit p-1 border-none bg-zinc-950/90 backdrop-blur-2xl shadow-none overflow-hidden rounded-3xl">
          <div className="relative w-full h-full flex items-center justify-center">
            <img 
              src={lightboxImage} 
              alt="Project detail" 
              className="w-full h-auto max-h-[92vh] object-contain rounded-2xl select-none"
              style={{ imageRendering: 'auto' }}
            />
            <button 
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all border border-white/10 group"
            >
              <Icons.close className="size-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const Page = () => {
  const { t, lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const categories = [
    "All",
    ...new Set(DATA.projects.map((p) => p.category)),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? DATA.projects
      : DATA.projects.filter((p) => p.category === selectedCategory);

  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl">
          <div className="flex items-center justify-between gap-6">
            <div className="flex flex-col gap-3 flex-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={lang === 'en' ? `Hi, I'm ${DATA.name.split(" ")[0]} 👋` : `Halo, saya ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[480px] text-muted-foreground md:text-lg leading-relaxed"
                delay={BLUR_FADE_DELAY * 1.5}
                text={t(DATA.description)}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <div className="flex gap-3 pt-2">
                  <Button asChild size="default" className="rounded-full gap-2 font-semibold shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all">
                    <a
                      href="https://drive.google.com/file/d/1y_rb-L3l5gMeMOse02aKOfLmzEAmDD5r/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileDown className="size-4" />
                      {t({ en: "Download CV", id: "Unduh CV" })}
                    </a>
                  </Button>
                </div>
              </BlurFade>
            </div>

            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="relative shrink-0 group">
                <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-violet-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="relative w-44 h-52 rounded-2xl overflow-hidden border-2 border-border shadow-2xl ring-1 ring-border/50">
                  <img
                    src={DATA.avatarUrl}
                    alt={DATA.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="max-w-2xl mx-auto w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">{t({ en: "About", id: "Tentang" })}</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              <ReactMarkdown>{t(DATA.summary)}</ReactMarkdown>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3 max-w-2xl mx-auto w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">{t({ en: "Work Experience", id: "Pengalaman Kerja" })}</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={work.end == null ? (lang === 'en' ? `${work.start} - Present` : `${work.start} - Sekarang`) : work.start === work.end ? work.start : `${work.start} - ${work.end}`}
                description={t(work.description)}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3 max-w-2xl mx-auto w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">{t({ en: "Education", id: "Pendidikan" })}</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={t(education.degree)}
                period={education.end === "Present" ? (lang === 'en' ? `${education.start} - Present` : `${education.start} - Sekarang`) : `${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3 max-w-2xl mx-auto w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">{t({ en: "Skills & Tech Stack", id: "Keahlian & Teknologi" })}</h2>
          </BlurFade>
          
          <div className="flex flex-wrap gap-1 mt-2">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill} className="rounded-full">{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-2xl mx-auto">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  {t({ en: "My Projects", id: "Proyek Saya" })}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {t({ en: "Check out my latest work", id: "Karya Terkini" })}
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t({ 
                    en: "I've worked on a variety of projects, from specialized web tools to complex AI-driven applications. Here are a few highlights.", 
                    id: "Saya telah mengerjakan berbagai proyek, mulai dari alat web khusus hingga aplikasi berbasis AI yang kompleks. Berikut beberapa di antaranya." 
                  })}
                </p>
              </div>
            </div>
          </BlurFade>
          
          <BlurFade delay={BLUR_FADE_DELAY * 11.5}>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full px-4"
                >
                  {category}
                </Button>
              ))}
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-full mx-auto">
            {filteredProjects.map((project, id) => (
              <BlurFade
                key={`${selectedCategory}-${project.title}`}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={t(project.description)}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                  onClick={() => handleProjectClick(project)}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="hackathons">
        <div className="space-y-12 w-full py-12 max-w-4xl mx-auto">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-2xl mx-auto">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  {t({ en: "Certificates", id: "Sertifikasi" })}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {t({ en: "Lifelong Learning", id: "Pembelajaran Kontinu" })}
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t({ 
                    en: "I am constantly seeking new challenges to grow. Here are some certifications I've earned along the way.", 
                    id: "Saya selalu mencari tantangan baru untuk berkembang. Berikut adalah beberapa sertifikasi yang saya dapatkan." 
                  })}
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={t(project.description)}
                    location={project.location}
                    dates={project.dates}
                    icon={project.icon}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>

      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {t({ en: "Get in Touch", id: "Hubungi Saya" })}
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t({ 
                  en: "Want to chat? Just shoot me a dm ", 
                  id: "Ingin berdiskusi? Cukup kirimkan pesan " 
                })}
                <a
                  href={DATA.contact.social.whatsapp.url}
                  className="text-blue-500 hover:underline"
                >
                  {t({ en: "directly on WhatsApp", id: "langsung melalui WhatsApp" })}
                </a>{" "}
                {t({ 
                  en: "and I'll respond whenever I can.", 
                  id: "dan saya akan merespon sesegera mungkin." 
                })}
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onOpenChange={setIsModalOpen} 
      />
    </main>
  );
}

export default function App() {
  return (
    <div className={cn(
      "min-h-screen bg-background font-sans antialiased max-w-5xl mx-auto py-12 sm:py-24 px-6",
    )}>
      <ThemeProvider attribute="class" defaultTheme="light">
        <TooltipProvider delayDuration={0}>
          <Page />
          <Navbar />
        </TooltipProvider>
      </ThemeProvider>
    </div>
  );
}