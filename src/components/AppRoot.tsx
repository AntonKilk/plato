import React from 'react';
import { I18nProvider, useI18n, useT } from '../i18n/t';
import Navigation from './Navigation';
import CaveIntro from './CaveIntro';
import Section from './Section';
import About from './About';
import Events from './Events';
import Footer from './Footer';

const MainSections: React.FC = () => {
  const t = useT();
  return (
    <>
      <div id="home" className="home-section">
        <Navigation />
        <CaveIntro />
      </div>
      <main>
        <Section
          id="about"
          title={t('sections.about.title')}
          subtitle={t('sections.about.subtitle')}
        >
          <About />
        </Section>
        <Section
          id="events"
          title={t('sections.events.title')}
          subtitle={t('sections.events.subtitle')}
          light
        >
          <Events />
        </Section>
      </main>
      <Footer />
    </>
  );
};

export const AppRoot: React.FC<{ initialLang?: 'ru' | 'et' }> = ({ initialLang = 'ru' }) => {
  return (
    <I18nProvider initialLang={initialLang}>
      <MainSections />
    </I18nProvider>
  );
};

export default AppRoot;
