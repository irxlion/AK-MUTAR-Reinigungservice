
import React from 'react';
import {
  Building2,
  Sparkles,
  Wind,
  Layers,
  ChevronsUp,
  ShieldCheck,
  Clock,
  Home,
  Trash2,
  Droplets,
  Hammer
} from 'lucide-react';
import { Service, Testimonial, BeforeAfterImage } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Büroreinigung',
    description: 'Für ein produktives Arbeitsumfeld und glänzende Büroräume.',
    longDescription: 'Ein sauberes Büro ist die Visitenkarte Ihres Unternehmens. Wir sorgen für strahlende Sauberkeit an Arbeitsplätzen, in Konferenzräumen und Sanitäranlagen. Unsere diskreten Reinigungsteams arbeiten effizient und stören Ihren Betriebsablauf nicht.',
    features: ['Reinigung von Böden und Oberflächen', 'Desinfektion von Sanitäranlagen', 'Müllentsorgung und Recycling', 'Reinigung von Küchenbereichen'],
    iconName: 'Building2',
    image: '/service_office.png'
  },
  {
    id: '2',
    title: 'Gebäudereinigung',
    description: 'Ganzheitliche Pflege für gewerbliche und private Immobilien.',
    longDescription: 'Werterhalt durch professionelle Pflege. Wir bieten umfassende Gebäudereinigung für Wohnanlagen, Gewerbeimmobilien und öffentliche Einrichtungen. Von der Fassade bis zum Keller – wir kümmern uns um alles.',
    features: ['Fassadenreinigung', 'Hausmeisterdienste', 'Grünanlagenpflege', 'Winterdienst'],
    iconName: 'Layers',
    image: '/service_office.png'
  },
  {
    id: '3',
    title: 'Fensterreinigung',
    description: 'Streifenfreier Glanz für alle Glasflächen und Rahmen.',
    longDescription: 'Klares Licht und freie Sicht. Unsere Experten für Glasreinigung sorgen für streifenfreie Fenster, Glasfassaden und Wintergärten. Wir erreichen auch schwer zugängliche Flächen sicher und effizient.',
    features: ['Fenster mit Rahmen', 'Glasfassaden', 'Schaufensterreinigung', 'Wintergärten und Glasdächer'],
    iconName: 'Wind',
    image: '/window_after.png'
  },
  {
    id: '4',
    title: 'Grundreinigung',
    description: 'Intensive Tiefenreinigung für höchste Hygieneansprüche.',
    longDescription: 'Manchmal reicht "sauber" nicht aus. Unsere Grundreinigung geht in die Tiefe und entfernt hartnäckige Verschmutzungen, alte Beschichtungen und Rückstände restlos. Ideal als jährliche Intensivreinigung.',
    features: ['Entfernung alter Pflegefilme', 'Intensivreinigung von Bodenbelägen', 'Reinigung von Ecken und Kanten', 'Spezialbehandlung von Oberflächen'],
    iconName: 'Sparkles',
    image: '/floor_after.png'
  },
  {
    id: '5',
    title: 'Treppenhausreinigung',
    description: 'Der erste Eindruck zählt – wir halten Ihren Eingang sauber.',
    longDescription: 'Ein gepflegtes Treppenhaus heißt Bewohner und Gäste willkommen. Wir reinigen Stufen, Geländer, Eingangstüren und Briefkastenanlagen zuverlässig und regelmäßig.',
    features: ['Kehren und Wischen der Treppen', 'Reinigung der Handläufe', 'Reinigung der Eingangstüren', 'Entfernung von Spinnweben'],
    iconName: 'ChevronsUp',
    image: '/service_stairs.png'
  },
  {
    id: '6',
    title: 'Praxisreinigung',
    description: 'Spezialisierte Hygiene für medizinische Einrichtungen.',
    longDescription: 'In medizinischen Einrichtungen ist Hygiene oberstes Gebot. Wir arbeiten nach strengen Hygieneplänen und nutzen spezielle Desinfektionsmittel, um die Sicherheit von Patienten und Personal zu gewährleisten.',
    features: ['Desinfizierende Reinigung', 'Einhaltung von Hygieneplänen', 'Reinigung von Wartebereichen', 'Sanitärhygiene'],
    iconName: 'ShieldCheck',
    image: '/service_medical.png'
  },
  {
    id: '7',
    title: 'Baureinigung',
    description: 'Schlüsselfertige Sauberkeit nach jedem Bauvorhaben.',
    longDescription: 'Nach dem Bau ist vor dem Einzug. Wir entfernen Bauschutt, Staub und Farb- oder Mörtelreste. Ob Bauzwischenreinigung oder Bauendreinigung – wir machen Ihre Immobilie bezugsfertig.',
    features: ['Baugrob- und Baufeinreinigung', 'Entsorgung von Bauschutt', 'Entfernung von Etiketten und Folien', 'Bodenversiegelung'],
    iconName: 'Hammer',
    image: '/service_construction.png'
  },
  {
    id: '8',
    title: 'Umzugsreinigung',
    description: 'Stressfrei in die neue Wohnung mit Übergabegarantie.',
    longDescription: 'Ein Umzug ist stressig genug. Überlassen Sie uns die Endreinigung Ihrer alten Wohnung. Wir garantieren eine saubere Übergabe an den Vermieter, damit Sie sich auf Ihr neues Zuhause konzentrieren können.',
    features: ['Übergabegarantie', 'Komplettreinigung inkl. Küche & Bad', 'Fensterreinigung', 'Dübel entfernen und Löcher schließen'],
    iconName: 'Home',
    image: '/service_office.png'
  },
  {
    id: '9',
    title: 'Entrümpelung',
    description: 'Fachgerechte Räumung und Entsorgung.',
    longDescription: 'Wir schaffen Platz. Egal ob Keller, Dachboden oder ganze Haushalte – wir entrümpeln schnell, diskret und entsorgen fachgerecht und umweltfreundlich.',
    features: ['Haushaltsauflösungen', 'Keller- und Dachbodenräumung', 'Fachgerechte Entsorgung', 'Besenreine Übergabe'],
    iconName: 'Trash2',
    image: '/service_construction.png'
  },
  {
    id: '10',
    title: 'Wasserschadensanierung',
    description: 'Schnelle Hilfe bei Feuchtigkeitsschäden.',
    longDescription: 'Wasser kann große Schäden anrichten. Wir helfen schnell und professionell bei der Beseitigung von Wasserschäden, Trocknung und Sanierung der betroffenen Bereiche.',
    features: ['Schnelle Notfallhilfe', 'Professionelle Trocknung', 'Sanierung der Schäden', 'Schimmelprävention'],
    iconName: 'Droplets',
    image: '/service_construction.png'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Vivian Melody Kunz', role: 'Rezension aus Google', content: 'Der Service war super – sehr ordentlich, sauber und unglaublich schnell. Hätte es selbst niemals so schnell und gründlich geschafft all Fenster inkl. Rahmen zum…', rating: 5 },
  { id: '2', name: 'Mrs Hunter', role: 'Rezension aus Google', content: 'Sehr zuverlässiges und sorgfältiges Reinigungsunternehmen. Wir beauftragen die Firma 2 x jährlich mit der Fensterreinigung und waren immer sehr zufrieden.', rating: 5 },
  { id: '3', name: 'Alexander Tanzer', role: 'Rezension aus Google', content: 'Sehr professionell. Sehr zuverlässig.', rating: 5 },
  { id: '4', name: 'Marina Hott', role: 'Rezension aus Google', content: 'Sehr gute Fensterreinigerfirma. Bin ganz begeistert. Waren schon mehrmals bei mir. Die Fenster werden samt Rahmen und Fliegengitter…', rating: 5 },
  { id: '5', name: 'Alexander Krieg', role: 'Rezension aus Google', content: 'Sehr zuverlässig, freundlich und vertrauenswürdig. MrIBO und sein Team reinigen sehr gründlich die Räumlichkeiten und die Fenster. Bisher wurde immer eine sehr gute Arbeit abgeliefert. MrIBO und sein Team kann man daher nur empfehlen.', rating: 5 },
  { id: '6', name: 'Sabine Zill', role: 'Rezension aus Google', content: 'Wir sind seit Jahren Kunden von Mr.IBO , mehrmals im Jahr werden unsere Terrassenüberdachung aus Glas sowie unsere großen Fenster von Mr. IBO gereinigt.', rating: 5 },
  { id: '7', name: 'kopenhagener 25', role: 'Rezension aus Google', content: 'Herr Metwalli und seine Jungs waren von Anfang bis Ende super freundlich, kompetent und professionell, und haben die stark verschmutzte Wohnung meines Vaters…', rating: 5 },
  { id: '8', name: 'Thomas Derschum', role: 'Rezension aus Google', content: 'Seit längerem lassen wir unsere Fenster inklusive Rahmen reinigen. Sehr freundliches Personal, beispielhafte Arbeit. Würde die Profi Reinigung MrlBO immer weiterempfehlen.', rating: 5 },
  { id: '9', name: 'Henriette Klemm', role: 'Rezension aus Google', content: 'Wir haben schon mehrfach die Firma Ibo und sein Team in Anspruch genommen. Super Service, sehr pünktlich und die Mitarbeiter sind absolut nett und freundlich und arbeiten sehr zuverlässig.', rating: 5 },
  { id: '10', name: 'Hanny Yildirim', role: 'Rezension aus Google', content: 'Eine sehr zu empfehlende grossartige Reinigungsfirma die sehr professionell arbeitet. Die Firma ist sehr zuverlässig, geht stets auf Wünsche ein und arbeitet sehr sorgfältig.', rating: 5 },
  { id: '11', name: 'Solveigh Köllner', role: 'Rezension aus Google', content: 'Sehr saubere Arbeit, sehr zuverlässig und professionell. Zwei mal im Jahr Komplettreinigung und alles glänzt wie neu. Ich kann dieses Unternehmen nur empfehlen.', rating: 5 },
  { id: '12', name: 'Mabel Killinger', role: 'Rezension aus Google', content: 'Wir beauftragen die Fa. seit Jahren und es gab nie etwas zu bemängeln. Pünktlich, zuverlässig, ordentlich und immer sehr hilfsbereit.', rating: 5 },
  { id: '13', name: 'Franz - Josef Derschum', role: 'Rezension aus Google', content: 'Ich kann diese Firma nur weiterempfehlen. Die Mitarbeiter arbeiten gut, schnell und verlassen den Arbeitsplatz wieder sauber. Auch die Kosten sind nicht zu hoch.', rating: 5 },
  { id: '14', name: 'martin rissmann', role: 'Rezension aus Google', content: 'Die Mitarbeiter von Mr. IBO arbeiten sorgfältig und effizient Sie sind sehr pünktlich freundlich. Ich kann die Firma uneingeschränkt empfehlen.', rating: 5 },
  { id: '15', name: 'Theresia Ross', role: 'Rezension aus Google', content: 'Lasse schon seit längerem meine Fenster putzen,und bin sehr zufrieden.Immer nette Mitarbeiter und schnelle Termine.Kann nur weiter empfehlen.', rating: 5 },
  { id: '16', name: 'Karin Schaefer', role: 'Rezension aus Google', content: 'Preis-Leistungs-Verhältnis perfekt, die auszuführenden Arbeiten wurden immer pünktlich und mit äußerste Präzision und Genauigkeit durchgeführt.', rating: 5 },
  { id: '17', name: 'Nicole Schaefer', role: 'Rezension aus Google', content: 'Super sauber, super zuverlässig und sehr schnell. Sehr gutes Preis-/Leistungsverhältnis.', rating: 5 },
  { id: '18', name: 'Annette Lubenau', role: 'Rezension aus Google', content: 'Super Service, sehr pünktlich und mega freundlich! Kann ich nur weiter empfehlen!!!!!', rating: 5 }
];

export const GALLERY: BeforeAfterImage[] = [
  { id: '1', before: '/floor_before.png', after: '/floor_after.png', label: 'Bodenreinigung' },
  { id: '2', before: '/window_before.png', after: '/window_after.png', label: 'Fensterreinigung' }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-8 h-8" />,
  Layers: <Layers className="w-8 h-8" />,
  Wind: <Wind className="w-8 h-8" />,
  Sparkles: <Sparkles className="w-8 h-8" />,
  ChevronsUp: <ChevronsUp className="w-8 h-8" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8" />,
  Hammer: <Hammer className="w-8 h-8" />,
  Home: <Home className="w-8 h-8" />,
  Trash2: <Trash2 className="w-8 h-8" />,
  Droplets: <Droplets className="w-8 h-8" />
};
