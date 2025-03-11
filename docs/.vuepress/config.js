import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'id',
  dest: '../dist',
  title: 'Himastat UT Docs',
  description: 'Himpunan Mahasiswa Statistika Universitas Terbuka',
  head: [
    [
      'meta',
      {
        name: 'Himastat-UT Team | Ikimukti',
        content: 'Himastat-UT Team 2024/2025'
      }
    ]
  ],

  theme: defaultTheme({
    logo: '/images/logo.png',

    navbar: [
      // NavbarLink for Home
      {
        text: 'Home',
        link: '/',
      },
      // NavbarGroup for StatGen with all the courses
      {
        text: 'StatGen',
        children: [
          {
            text: 'Semester 1',
            prefix: '/statgen/',
            children: [
              { text: 'BIOLOGI UMUM', link: 'BIOL4110/' },
              { text: 'KIMIA DASAR I', link: 'KIMD4110/' },
              { text: 'KALKULUS I', link: 'MATA4110/' },
              { text: 'ILMU SOSIAL DAN BUDAYA DASAR', link: 'MKDU4109/' },
              { text: 'BAHASA INGGRIS', link: 'MKWI4201/' },
              { text: 'PENDIDIKAN KEWARGANEGARAAN', link: 'MKWU4109/' },
              { text: 'METODE STATISTIK I', link: 'SATS4121/' },
            ],
          },
          {
            text: 'Semester 2',
            prefix: '/statgen/',
            children: [
              { text: 'FISIKA DASAR I', link: 'FISD4211/' },
              { text: 'PENGANTAR SOSIOLOGI', link: 'ISIP4110/' },
              { text: 'BAHASA INDONESIA', link: 'MKWU4108/' },
              { text: 'KOMPUTER I', link: 'SATS4111/' },
              { text: 'MATEMATIKA I', link: 'SATS4120/' },
              { text: 'METODE STATISTIK II', link: 'SATS4211/' },
              { text: 'ANALISIS DATA STATISTIK', link: 'SATS4212/' },
            ],
          },
          {
            text: 'Semester 3',
            prefix: '/statgen/',
            children: [
              { text: 'PENDIDIKAN AGAMA ISLAM', link: 'MKWU4101/' },
              { text: 'ALJABAR LINEAR TERAPAN', link: 'SATS4122/' },
              { text: 'MATEMATIKA II', link: 'SATS4210/' },
              { text: 'PENGUMPULAN DAN PENYAJIAN DATA', link: 'SATS4213/' },
              { text: 'PENGANTAR PROBABILITAS', link: 'SATS4221/' },
              { text: 'KOMPUTER II', link: 'SATS4223/' },
              { text: 'STATISTIKA PENGAWASAN KUALITAS', link: 'SATS4310/' },
            ],
          },
          {
            text: 'Semester 4',
            prefix: '/statgen/',
            children: [
              { text: 'PENGANTAR EKONOMI MAKRO', link: 'ESPA4110/' },
              { text: 'MATEMATIKA III', link: 'SATS4220/' },
              { text: 'RANCANGAN PERCOBAAN', link: 'SATS4222/' },
              { text: 'PENGANTAR SOSIOMETRI', link: 'SATS4224/' },
              { text: 'MODEL LINEAR TERAPAN', link: 'SATS4312/' },
              { text: 'DEMOGRAFI', link: 'SATS4313/' },
              { text: 'PENGANTAR PROSES STOKASTIK', link: 'SATS4322/' },
            ],
          },
          {
            text: 'Semester 5',
            prefix: '/statgen/',
            children: [
              { text: 'SISTEM INFORMASI MANAJEMEN', link: 'ADPU4442/' },
              { text: 'RISET OPERASIONAL I', link: 'MATA4343/' },
              { text: 'ASURANSI I', link: 'SATS4311/' },
              { text: 'METODE SAMPLING', link: 'SATS4321/' },
              { text: 'METODE PERAMALAN', link: 'SATS4323/' },
              { text: 'PENGANTAR STATISTIKA MATEMATIS I', link: 'SATS4410/' },
              { text: 'METODE STATISTIKA NON PARAMETRIK', link: 'SATS4411/' },
            ],
          },
          {
            text: 'Semester 6',
            prefix: '/statgen/',
            children: [
              { text: 'TEORI PEMBUATAN KEPUTUSAN', link: 'ADBI4531/' },
              { text: 'METODOLOGI PENELITIAN', link: 'MSIM4312/' },
              { text: 'ASURANSI II', link: 'SATS4412/' },
              { text: 'PENGANTAR STATISTIKA MATEMATIS II', link: 'SATS4420/' },
              { text: 'METODE STATISTIKA MULTIVARIAT', link: 'SATS4421/' },
              { text: 'METODE SEKUENSIAL', link: 'SATS4422/' },
            ],
          },
          {
            text: 'Semester 7',
            prefix: '/statgen/',
            children: [
              { text: 'INFERENSI BAYESIAN', link: 'SATS4324/' },
              { text: 'ANALISIS RUNTUN WAKTU', link: 'SATS4423/' },
              { text: 'TUGAS AKHIR PROGRAM', link: 'SATS4500/' },
              { text: 'KARYA ILMIAH', link: 'SATS4560/' },
            ],
          },
          {
            text: 'Semester 8',
            prefix: '/statgen/',
            children: [
              { text: 'MANAJEMEN', link: 'EKMA4116/' },
              { text: 'PENGANTAR EKONOMI MIKRO', link: 'ESPA4111/' },
              { text: 'EKONOMETRIKA', link: 'ESPA4312/' },
            ],
          },
        ],
      },
      // Other links
      {
        text: 'Radar',
        link: '/radar/',
      },
      {
        text: 'Gemas',
        link: '/gemas/',
      },
      {
        text: 'Link',
        link: '/link/',
      },
      {
        text: 'Github',
        link: 'https://github.com/arbiet/himastatut_vuepress',
        target: '_self',
        rel: false,
      },
    ],
  }),

  bundler: viteBundler(),
})
