import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faBookOpen, faArrowsAlt, faFingerprint } from '@fortawesome/free-solid-svg-icons';
import Stats from '../components/Stats'; // Sesuaikan path sesuai dengan struktur proyek Anda
import Footer from '../components/Footer';


const features = [
  {
    name: 'Akses Al-Quran Digital',
    description: 'Baca Al-Quran di mana saja dan kapan saja secara digital, dengan fasilitas penelusuran yang mudah dan cepat.',
    icon: faCloudUploadAlt,
  },
  {
    name: 'Terjemahan Tafsir',
    description: 'Fitur ini menyediakan tafsir dari berbagai ulama terpercaya untuk membantu pengguna memahami makna yang lebih dalam dari setiap ayat.',
    icon: faBookOpen,
  },
  {
    name: 'Navigasi yang Mudah',
    description: 'Navigasi sederhana untuk menjelajahi berbagai fitur iQuran dengan intuitif dan efisien.',
    icon: faArrowsAlt,
  },
  {
    name: 'Perlindungan Data',
    description: 'Perlindungan data pribadi pengguna terjamin melalui fitur keamanan lanjutan dan enkripsi informasi.',
    icon: faFingerprint,
  },
];

const Features = () => {
  return (
    <div>
      <div className="bg-transparent py-24 sm:py-32 " style={{ scrollBehavior: 'smooth' }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mt-8 mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-medium leading-7 text-gray-400">القرآن الكريم</h2>
            <p className="mt-2 font-bold tracking-tight text-gray-200 sm:text-7xl">
              Jelajahi iQur'an.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              aplikasi Al-Quran yang canggih, mudah diakses, dan didukung teknologi terbaru, memberikan kesan modern dan relevan dengan perkembangan teknologi saat ini. Berikut beberapa fitur utamanya:
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg" style={{ backgroundColor: '#846D35' }}>
                      <FontAwesomeIcon icon={feature.icon} className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-400">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <Stats />
      <Footer />
    </div>
  );
};

export default Features;
