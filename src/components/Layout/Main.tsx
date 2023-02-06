import HeroSection from '../Content/HeroSection/HeroSection';
import ProjectsSection from '../Content/ProjectsSection/ProjectsSection';
import SkillSection from '../Content/SkillSection/SkillSection';
import ContactSection from '../Content/ContactSection/ContactSection';

export default function Main() {
  return (
    <main className='overflow-x-hidden'>
      <HeroSection />
      <SkillSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
