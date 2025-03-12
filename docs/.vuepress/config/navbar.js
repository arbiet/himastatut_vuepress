export const navbarConfig = [
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
                { text: 'BIOLOGI UMUM', link: 'semester1/BIOL4110' },
                { text: 'KIMIA DASAR I', link: 'semester1/KIMD4110' },
                { text: 'KALKULUS I', link: 'semester1/MATA4110' },
                { text: 'ILMU SOSIAL DAN BUDAYA DASAR', link: 'semester1/MKDU4109' },
                { text: 'BAHASA INGGRIS', link: 'semester1/MKWI4201' },
                { text: 'PENDIDIKAN KEWARGANEGARAAN', link: 'semester1/MKWU4109' },
                { text: 'METODE STATISTIK I', link: 'semester1/SATS4121' },
              ],
            },
            {
              text: 'Semester 2',
              prefix: '/statgen/',
              children: [
                { text: 'FISIKA DASAR I', link: 'semester2/FISD4211' },
                { text: 'PENGANTAR SOSIOLOGI', link: 'semester2/ISIP4110' },
                { text: 'BAHASA INDONESIA', link: 'semester2/MKWU4108' },
                { text: 'KOMPUTER I', link: 'semester2/SATS4111' },
                { text: 'MATEMATIKA I', link: 'semester2/SATS4120' },
                { text: 'METODE STATISTIK II', link: 'semester2/SATS4211' },
                { text: 'ANALISIS DATA STATISTIK', link: 'semester2/SATS4212' },
              ],
            },
            {
              text: 'Semester 3',
              prefix: '/statgen/',
              children: [
                { text: 'PENDIDIKAN AGAMA ISLAM', link: 'semester3/MKWU4101' },
                { text: 'ALJABAR LINEAR TERAPAN', link: 'semester3/SATS4122' },
                { text: 'MATEMATIKA II', link: 'semester3/SATS4210' },
                { text: 'PENGUMPULAN DAN PENYAJIAN DATA', link: 'semester3/SATS4213' },
                { text: 'PENGANTAR PROBABILITAS', link: 'semester3/SATS4221' },
                { text: 'KOMPUTER II', link: 'semester3/SATS4223' },
                { text: 'STATISTIKA PENGAWASAN KUALITAS', link: 'semester3/SATS4310' },
              ],
            },
            {
              text: 'Semester 4',
              prefix: '/statgen/',
              children: [
                { text: 'PENGANTAR EKONOMI MAKRO', link: 'sememster4/ESPA4110' },
                { text: 'MATEMATIKA III', link: 'sememster4/SATS4220' },
                { text: 'RANCANGAN PERCOBAAN', link: 'sememster4/SATS4222' },
                { text: 'PENGANTAR SOSIOMETRI', link: 'sememster4/SATS4224' },
                { text: 'MODEL LINEAR TERAPAN', link: 'sememster4/SATS4312' },
                { text: 'DEMOGRAFI', link: 'sememster4/SATS4313' },
                { text: 'PENGANTAR PROSES STOKASTIK', link: 'sememster4/SATS4322' },
              ],
            },
            {
              text: 'Semester 5',
              prefix: '/statgen/',
              children: [
                { text: 'SISTEM INFORMASI MANAJEMEN', link: 'semester5/ADPU4442' },
                { text: 'RISET OPERASIONAL I', link: 'semester5/MATA4343' },
                { text: 'ASURANSI I', link: 'semester5/SATS4311' },
                { text: 'METODE SAMPLING', link: 'semester5/SATS4321' },
                { text: 'METODE PERAMALAN', link: 'semester5/SATS4323' },
                { text: 'PENGANTAR STATISTIKA MATEMATIS I', link: 'semester5/SATS4410' },
                { text: 'METODE STATISTIKA NON PARAMETRIK', link: 'semester5/SATS4411' },
              ],
            },
            {
              text: 'Semester 6',
              prefix: '/statgen/',
              children: [
                { text: 'TEORI PEMBUATAN KEPUTUSAN', link: 'semester6/ADBI4531' },
                { text: 'METODOLOGI PENELITIAN', link: 'semester6/MSIM4312' },
                { text: 'ASURANSI II', link: 'semester6/SATS4412' },
                { text: 'PENGANTAR STATISTIKA MATEMATIS II', link: 'semester6/SATS4420' },
                { text: 'METODE STATISTIKA MULTIVARIAT', link: 'semester6/SATS4421' },
                { text: 'METODE SEKUENSIAL', link: 'semester6/SATS4422' },
              ],
            },
            {
              text: 'Semester 7',
              prefix: '/statgen/',
              children: [
                { text: 'INFERENSI BAYESIAN', link: 'semester7/SATS4324' },
                { text: 'ANALISIS RUNTUN WAKTU', link: 'semester7/SATS4423' },
                { text: 'TUGAS AKHIR PROGRAM', link: 'semester7/SATS4500' },
                { text: 'KARYA ILMIAH', link: 'semester7/SATS4560' },
              ],
            },
            {
              text: 'Semester 8',
              prefix: '/statgen/',
              children: [
                { text: 'MANAJEMEN', link: 'semester8/EKMA4116' },
                { text: 'PENGANTAR EKONOMI MIKRO', link: 'semester8/ESPA4111' },
                { text: 'EKONOMETRIKA', link: 'semester8/ESPA4312' },
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
];