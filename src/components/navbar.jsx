import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { Languages, Phone } from "lucide-react";

export default function Navbar() {
  const { t, lang, toggleLanguage } = useLanguage();

  const HomeIcon = DATA.navbar[0].icon;
  const ProjectsIcon = DATA.navbar[1].icon;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
        
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <a href={DATA.contact.social.GitHub.url} target="_blank" className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-12")}>
                <DATA.contact.social.GitHub.icon className="size-4" />
              </a>
            </TooltipTrigger>
            <TooltipContent><p>GitHub</p></TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <a href={DATA.contact.social.LinkedIn.url} target="_blank" className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-12")}>
                <DATA.contact.social.LinkedIn.icon className="size-4" />
              </a>
            </TooltipTrigger>
            <TooltipContent><p>LinkedIn</p></TooltipContent>
          </Tooltip>
        </DockIcon>

        <Separator orientation="vertical" className="h-full mx-1" />

        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <a href="#projects" className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-12")}>
                <ProjectsIcon className="size-4" />
              </a>
            </TooltipTrigger>
            <TooltipContent><p>{t(DATA.navbar[1].label)}</p></TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <a href="#hero" className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-12")}>
                <HomeIcon className="size-4" />
              </a>
            </TooltipTrigger>
            <TooltipContent><p>{t(DATA.navbar[0].label)}</p></TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <a href="#contact" className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-12")}>
                <Phone className="size-4" />
              </a>
            </TooltipTrigger>
            <TooltipContent><p>{t({ en: "Contact Me", id: "Hubungi Saya" })}</p></TooltipContent>
          </Tooltip>
        </DockIcon>

        <Separator orientation="vertical" className="h-full mx-1" />

        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <a href={DATA.contact.social.instagram.url} target="_blank" className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-12")}>
                <DATA.contact.social.instagram.icon className="size-4" />
              </a>
            </TooltipTrigger>
            <TooltipContent><p>Instagram</p></TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <button onClick={toggleLanguage} className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-12 flex items-center justify-center")}>
                <Languages className="size-4 transition-all duration-300 hover:scale-110" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{lang === 'en' ? "Switch to Indonesia" : "Ganti ke Inggris"}</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>

      </Dock>
    </div>
  );
}
