import type { AnswerKey, ExplanationSections } from '../types/quiz';

export const TEACHER_ACCESS_PASSWORD = 'ABC';

export const ANSWER_KEYS: Record<number, AnswerKey> = {
  1: {
    kind: 'pg',
    correctOptionId: 'A',
    displayKey: 'Opsi A ($T = 12\\text{ N}$, $\\alpha = 30\\text{ rad/s}^2$)',
  },
  2: {
    kind: 'pg',
    correctOptionId: 'B',
    displayKey: 'Opsi B ($T_2 - T_1 = 8\\text{ N}$, $\\alpha = 16\\text{ rad/s}^2$)',
  },
  3: {
    kind: 'pg_complex',
    correctOptionIds: ['1', '2', '4'],
    displayKey: 'Pernyataan 1, 2, dan 4',
  },
  4: {
    kind: 'pg_complex',
    correctOptionIds: ['1', '2', '3'],
    displayKey: 'Pernyataan 1, 2, dan 3',
  },
  5: {
    kind: 'true_false',
    correctMap: {
      '1': true,
      '2': false,
      '3': true,
      '4': false,
    },
    displayKey: 'P1: Benar, P2: Salah, P3: Benar, P4: Salah',
  },
  6: {
    kind: 'numeric',
    expected: 3,
    absTolerance: 0.05,
    relTolerance: 0.01,
    displayKey: '3 m/s²',
  },
  7: {
    kind: 'numeric',
    expected: 14.4,
    absTolerance: 0.15,
    relTolerance: 0.01,
    displayKey: '14.4 rad/s²',
  },
  8: {
    kind: 'numeric',
    expected: 4.5,
    absTolerance: 0.05,
    relTolerance: 0.01,
    displayKey: '4.5 m',
  },
  9: {
    kind: 'numeric',
    expected: 0.75,
    absTolerance: 0.01,
    relTolerance: 0.01,
    displayKey: '0.75',
  },
  10: {
    kind: 'numeric',
    expected: 6,
    absTolerance: 0.06,
    relTolerance: 0.01,
    displayKey: '6 m',
  },
};

export const FULL_EXPLANATIONS: Record<number, ExplanationSections> = {
  1: {
    identifikasiMasalah: [
      'Fenomena fisika yang terjadi adalah gerak terkopel antara gerak translasi vertikal sebuah beban bermassa dan gerak rotasi sebuah katrol bermassa pada poros tetap.',
      'Benda yang dianalisis terdiri atas dua objek terpisah: (1) beban bermassa $m$ yang bergerak lurus vertikal ke bawah, dan (2) katrol berbentuk cakram pejal bermassa $M$ yang berotasi searah jarum jam terhadap poros tetapnya.',
      'Karena tali tidak mengalami slip terhadap permukaan keliling katrol, percepatan linear turun beban ($a$) terhubung langsung dengan percepatan sudut katrol ($\\alpha$) dan jari-jari katrol ($R$).',
      'Batas sistem diisolasi menjadi dua diagram benda bebas: subsistem beban dan subsistem katrol.',
    ],
    diketahui: [
      'Massa katrol cakram pejal: $M = 4\\text{ kg}$',
      'Jari-jari katrol: $R = 0{,}2\\text{ m}$',
      'Momen inersia cakram pejal terhadap poros pusat: $I = \\frac{1}{2}MR^2 = \\frac{1}{2}(4)(0{,}2)^2 = 0{,}08\\text{ kg}\\cdot\\text{m}^2$',
      'Massa beban gantung: $m = 3\\text{ kg}$',
      'Percepatan gravitasi: $g = 10\\text{ m/s}^2$',
    ],
    ditanyakan:
      'Besar tegangan tali ($T$), percepatan sudut katrol ($\\alpha$), serta kesimpulan ilmiah mengenai pengaruh momen inersia katrol terhadap gerak turun beban.',
    landasanTeori: [
      'Pada beban bermassa $m$ yang bergerak translasi vertikal ke bawah, berlaku Hukum Newton II translasi: $\\Sigma F_y = m a$, dengan arah gerak ke bawah diambil bernilai positif.',
      'Pada katrol bermassa $M$ yang berotasi pada poros tetap tanpa gesekan poros, berlaku Hukum Newton II rotasi: $\\Sigma \\tau = I \\alpha$, dengan momen gaya akibat tegangan tali yang menyinggung tepi katrol bernilai $\\tau = T \\cdot R \\sin 90^\\circ = T R$.',
      'Syarat tali tidak selip pada keliling katrol mengaitkan kinematika translasi dan rotasi melalui persamaan: $a = \\alpha R$ atau $\\alpha = \\frac{a}{R}$.',
    ],
    fbdTitle: 'Diagram Benda Bebas Terpisah: Katrol (Kiri) dan Beban Tunggal (Kanan)',
    fbdCaption:
      'Pada diagram benda bebas beban hanya bekerja gaya berat $mg$ ke bawah dan tegangan tali $T$ ke atas. Pada diagram benda bebas katrol bekerja gaya berat katrol $Mg$ dan gaya reaksi poros $N_{\\text{poros}}$ yang melalui pusat rotasi (torsi $= 0$), serta gaya tegangan tali $T$ menyinggung tepi kanan dengan lengan momen $R$.',
    penyelesaianMatematis: [
      '1. Persamaan Hukum Newton II translasi untuk beban ($m = 3\\text{ kg}$, gerak ke bawah positif): $$mg - T = ma \\implies 3(10) - T = 3a \\implies 30 - T = 3a$$',
      '2. Persamaan Hukum Newton II rotasi untuk katrol cakram pejal ($I = \\frac{1}{2}MR^2$): $$\\Sigma \\tau = I \\alpha \\implies T \\cdot R = \\left(\\frac{1}{2}MR^2\\right)\\alpha$$',
      '3. Substitusi syarat tanpa slip $\\alpha = \\frac{a}{R}$ ke persamaan rotasi katrol: $$T \\cdot R = \\frac{1}{2}MR^2 \\left(\\frac{a}{R}\\right) \\implies T = \\frac{1}{2}Ma$$',
      '4. Masukkan nilai $M = 4\\text{ kg}$ ke persamaan tegangan tali: $$T = \\frac{1}{2}(4)a = 2a$$',
      '5. Substitusi $T = 2a$ ke dalam persamaan translasi beban: $$30 - 2a = 3a \\implies 5a = 30 \\implies a = 6\\text{ m/s}^2$$',
      '6. Hitung besar tegangan tali $T$: $$T = 2(6) = 12\\text{ N}$$',
      '7. Hitung percepatan sudut katrol $\\alpha$: $$\\alpha = \\frac{a}{R} = \\frac{6\\text{ m/s}^2}{0{,}2\\text{ m}} = 30\\text{ rad/s}^2$$',
      '8. Pemeriksaan konsistensi dimensi dan batas fisik: $\\frac{T}{m} = \\frac{12}{3} = 4\\text{ m/s}^2$, $g - 4 = 6\\text{ m/s}^2$, dan nilai $a = 6\\text{ m/s}^2 < g = 10\\text{ m/s}^2$ karena sebagian gaya gravitasi ditahan oleh tegangan tali $T = 12\\text{ N}$ untuk memutar katrol.',
    ],
    interpretasiHasil:
      'Seandainya katrol tidak bermassa ($M \\to 0$), maka tegangan tali akan bernilai nol dan beban jatuh bebas dengan percepatan $a = g = 10\\text{ m/s}^2$. Karena katrol memiliki massa dan momen inersia $I = 0{,}08\\text{ kg}\\cdot\\text{m}^2$, dibutuhkan torsi dari tegangan tali $T = 12\\text{ N}$ untuk mempercepat rotasi katrol sebesar $\\alpha = 30\\text{ rad/s}^2$, sehingga percepatan turun beban berkurang menjadi $6\\text{ m/s}^2$.',
    kesimpulan:
      'Tegangan tali $T = 12\\text{ N}$, percepatan sudut katrol $\\alpha = 30\\text{ rad/s}^2$, dan momen inersia katrol menyebabkan percepatan turun beban lebih kecil daripada $g$ (Opsi A).',
    kesalahanUmum: [
      'Menganggap tegangan tali sama dengan berat beban ($T = mg = 30\\text{ N}$), padahal jika $T = mg$ beban tidak akan mengalami percepatan ke bawah.',
      'Mengabaikan massa dan momen inersia katrol sehingga menganggap beban jatuh bebas dengan $a = g = 10\\text{ m/s}^2$.',
      'Lupa membagi percepatan linear dengan jari-jari $R$ saat menghitung percepatan sudut $\\alpha = a/R$.',
    ],
  },
  2: {
    identifikasiMasalah: [
      'Fenomena fisika adalah dinamika sistem pesawat Atwood yang menggunakan katrol bermassa dan tidak licin terhadap tali (tanpa slip).',
      'Sistem diuraikan menjadi tiga benda terpisah: beban kiri $m_1 = 2\\text{ kg}$ (bergerak translasi naik), beban kanan $m_2 = 6\\text{ kg}$ (bergerak translasi turun), dan katrol silinder pejal bermassa $M = 4\\text{ kg}$ (berotasi searah jarum jam).',
      'Karena katrol memiliki momen inersia $I \\ne 0$, tegangan tali di kedua sisi katrol ($T_1$ dan $T_2$) tidak boleh dianggap sama. Selisih $(T_2 - T_1)$ inilah yang memberikan torsi neto untuk memutar katrol.',
    ],
    diketahui: [
      'Massa beban kiri: $m_1 = 2\\text{ kg}$',
      'Massa beban kanan: $m_2 = 6\\text{ kg}$',
      'Massa katrol silinder pejal: $M = 4\\text{ kg}$',
      'Jari-jari katrol: $R = 0{,}25\\text{ m}$',
      'Momen inersia katrol: $I = \\frac{1}{2}MR^2 = \\frac{1}{2}(4)(0{,}25)^2 = 0{,}125\\text{ kg}\\cdot\\text{m}^2$',
      'Percepatan gravitasi: $g = 10\\text{ m/s}^2$',
    ],
    ditanyakan:
      'Selisih tegangan tali sisi kanan dan kiri $(T_2 - T_1)$ serta besar percepatan sudut katrol $\\alpha$.',
    landasanTeori: [
      'Untuk beban $m_1$ yang bergerak naik: $\\Sigma F_1 = T_1 - m_1 g = m_1 a$.',
      'Untuk beban $m_2$ yang bergerak turun: $\\Sigma F_2 = m_2 g - T_2 = m_2 a$.',
      'Untuk katrol yang berotasi searah jarum jam akibat dua tarikan tali berlawanan arah putar: $\\Sigma \\tau = (T_2 - T_1)R = I \\alpha$.',
      'Hubungan gerak tanpa slip tali pada keliling katrol: $a = \\alpha R$.',
    ],
    fbdTitle: 'Diagram Benda Bebas Terpisah: Beban Kiri ($m_1$), Katrol ($M$), dan Beban Kanan ($m_2$)',
    fbdCaption:
      'Tegangan tali $T_2$ menarik tepi kanan katrol ke bawah (torsi searah jarum jam), sedangkan tegangan tali $T_1$ menarik tepi kiri katrol ke bawah (torsi berlawanan jarum jam). Karena katrol dipercepat searah jarum jam, wajib berlaku $T_2 > T_1$.',
    penyelesaianMatematis: [
      '1. Persamaan Hukum Newton II pada beban kiri $m_1 = 2\\text{ kg}$ (bergerak naik): $$T_1 - m_1 g = m_1 a \\implies T_1 - 20 = 2a \\implies T_1 = 20 + 2a$$',
      '2. Persamaan Hukum Newton II pada beban kanan $m_2 = 6\\text{ kg}$ (bergerak turun): $$m_2 g - T_2 = m_2 a \\implies 60 - T_2 = 6a \\implies T_2 = 60 - 6a$$',
      '3. Persamaan Hukum Newton II rotasi pada katrol silinder pejal ($I = \\frac{1}{2}MR^2$): $$(T_2 - T_1)R = I\\alpha = \\left(\\frac{1}{2}MR^2\\right)\\left(\\frac{a}{R}\\right) \\implies T_2 - T_1 = \\frac{1}{2}Ma$$',
      '4. Masukkan nilai $M = 4\\text{ kg}$: $$T_2 - T_1 = \\frac{1}{2}(4)a = 2a$$',
      '5. Eliminasi $T_1$ dan $T_2$ dengan menyubstitusikan persamaan (1) dan (2) ke persamaan (4): $$(60 - 6a) - (20 + 2a) = 2a$$ $$40 - 8a = 2a \\implies 10a = 40 \\implies a = 4\\text{ m/s}^2$$',
      '6. Hitung masing-masing tegangan tali dan selisihnya: $$T_1 = 20 + 2(4) = 28\\text{ N}$$ $$T_2 = 60 - 6(4) = 36\\text{ N}$$ $$T_2 - T_1 = 36 - 28 = 8\\text{ N}$$ (Cocok juga dengan $2a = 2 \\times 4 = 8\\text{ N}$).',
      '7. Hitung percepatan sudut katrol: $$\\alpha = \\frac{a}{R} = \\frac{4\\text{ m/s}^2}{0{,}25\\text{ m}} = 16\\text{ rad/s}^2$$',
    ],
    interpretasiHasil:
      'Bila massa katrol diabaikan, percepatan sistem adalah $a_0 = \\frac{6-2}{6+2}(10) = 5\\text{ m/s}^2$. Adanya katrol bermassa $4\\text{ kg}$ menambah inersia rotasi efektif sebesar $\\frac{1}{2}M = 2\\text{ kg}$ pada penyebut persamaan percepatan sehingga percepatan turun menjadi $4\\text{ m/s}^2$ dan selisih tegangan $8\\text{ N}$ terpakai untuk memutar katrol.',
    kesimpulan:
      'Selisih tegangan tali adalah $T_2 - T_1 = 8\\text{ N}$ dan percepatan sudut katrol sebesar $\\alpha = 16\\text{ rad/s}^2$ (Opsi B).',
    kesalahanUmum: [
      'Menyamakan $T_1 = T_2$ seperti pada katrol licin tak bermassa, padahal katrol bermassa membutuhkan $T_2 > T_1$ agar dapat berotasi.',
      'Salah menjumlahkan massa katrol utuh ($M$) ke dalam rumus percepatan tanpa faktor $\\frac{1}{2}$ dari momen inersia silinder pejal.',
    ],
  },
  3: {
    identifikasiMasalah: [
      'Benda yang dianalisis adalah satu silinder pejal homogen yang bergerak menggelinding tanpa slip di atas lantai horizontal kasar akibat gaya horizontal $F$ pada tepi paling atas.',
      'Gerak merupakan gabungan translasi pusat massa ke kanan dan rotasi searah jarum jam terhadap pusat massa.',
      'Titik kerja gaya $F$ berada pada jarak $R$ di atas pusat massa sehingga menimbulkan torsi besar searah jarum jam. Arah gaya gesek statis $f_s$ di titik kontak bawah harus ditentukan secara matematis, bukan ditebak berlawanan gerak.',
    ],
    diketahui: [
      'Massa silinder pejal: $m = 6\\text{ kg}$',
      'Jari-jari silinder: $R = 0{,}2\\text{ m}$',
      'Momen inersia terhadap pusat massa: $I = \\frac{1}{2}mR^2$',
      'Gaya horizontal di tepi atas (ke kanan): $F = 18\\text{ N}$',
      'Koefisien gesek statis lantai: $\\mu_s = 0{,}25$',
      'Percepatan gravitasi: $g = 10\\text{ m/s}^2$',
    ],
    ditanyakan:
      'Evaluasi kebenaran 5 pernyataan mengenai arah dan besar $f_s$, nilai $a$ dan $\\alpha$, arah torsi $f_s$, serta status syarat tanpa slip.',
    landasanTeori: [
      'Hukum Newton II translasi arah horizontal (ambil arah kanan sebagai $+x$): $\\Sigma F_x = F + f_s = ma$ (dengan memisalkan $f_s$ sementara ke kanan; jika hasil positif maka asumsi benar ke kanan).',
      'Hukum Newton II rotasi terhadap pusat massa (ambil putaran searah jarum jam sebagai $+$): $\\Sigma \\tau_{\\text{PM}} = F\\cdot R - f_s\\cdot R = I\\alpha$.',
      'Hubungan menggelinding tanpa slip: $a = \\alpha R$.',
      'Syarat agar benda tidak tergelincir (tanpa slip): $|f_s| \\le f_{s,\\text{maks}} = \\mu_s N = \\mu_s mg$.',
    ],
    fbdTitle: 'Diagram Benda Bebas Silinder Pejal dengan Gaya Horizontal pada Tepi Atas',
    fbdCaption:
      'Gaya berat $mg$ dan gaya normal $N$ bekerja vertikal melalui garis pusat massa (torsi $= 0$). Gaya luar $F$ bekerja ke kanan di tepi atas dengan lengan momen $R$ (torsi searah jarum jam). Gaya gesek statis $f_s$ pada titik kontak bawah bekerja ke kanan dengan lengan momen $R$ (torsi berlawanan jarum jam).',
    penyelesaianMatematis: [
      '1. Persamaan translasi ($+x$ ke kanan, asumsi $f_s$ ke kanan): $$F + f_s = ma \\implies 18 + f_s = 6a$$',
      '2. Persamaan rotasi terhadap pusat massa (searah jarum jam $+$): $$F \\cdot R - f_s \\cdot R = I\\alpha = \\left(\\frac{1}{2}mR^2\\right)\\left(\\frac{a}{R}\\right) \\implies F - f_s = \\frac{1}{2}ma$$',
      '3. Jumlahkan persamaan (1) dan (2) untuk mengeliminasi $f_s$: $$2F = \\frac{3}{2}ma \\implies a = \\frac{4F}{3m} = \\frac{4(18)}{3(6)} = \\frac{72}{18} = 4\\text{ m/s}^2$$',
      '4. Hitung percepatan sudut $\\alpha$: $$\\alpha = \\frac{a}{R} = \\frac{4}{0{,}2} = 20\\text{ rad/s}^2$$',
      '5. Substitusikan $a = 4\\text{ m/s}^2$ ke persamaan (1) untuk menentukan arah dan besar $f_s$: $$18 + f_s = 6(4) = 24 \\implies f_s = +6\\text{ N}$$ Tanda positif menegaskan bahwa **$f_s = 6\\text{ N}$ berarah ke kanan** (searah dengan $F$).',
      '6. Periksa syarat tanpa slip: $$N = mg = 6(10) = 60\\text{ N}$$ $$f_{s,\\text{maks}} = \\mu_s N = 0{,}25 \\times 60 = 15\\text{ N}$$ Karena $f_s = 6\\text{ N} \\le 15\\text{ N}$, maka silinder benar-benar menggelinding tanpa slip!',
    ],
    interpretasiHasil:
      'Gaya $F$ di tepi atas memberikan torsi sangat kuat searah jarum jam sehingga bagian bawah silinder cenderung terdorong/slip ke kiri relatif terhadap lantai. Untuk mencegah slip ke kiri tersebut, lantai memberikan gaya gesek statis $f_s = 6\\text{ N}$ ke arah kanan. Torsi dari $f_s$ berlawanan jarum jam (mengurangi torsi total menjadi $(F - f_s)R$), sementara gayanya mempercepat translasi bersama $F$.',
    kesimpulan:
      'Pernyataan yang benar adalah Pernyataan 1, 2, dan 4. Pernyataan 3 salah karena $a = 4\\text{ m/s}^2$ dan $\\alpha = 20\\text{ rad/s}^2$. Pernyataan 5 salah karena yang dibandingkan dengan $f_{s,\\text{maks}} = 15\\text{ N}$ adalah gaya gesek yang diperlukan ($f_s = 6\\text{ N}$), bukan gaya luar $F$.',
    kesalahanUmum: [
      'Selalu mengasumsikan arah gaya gesek statis berlawanan arah gerak benda ($f_s$ ke kiri), padahal ketika gaya bekerja di tepi atas cakram/silinder pejal, $f_s$ justru searah dengan gaya $F$.',
      'Membandingkan gaya luar $F$ secara langsung dengan $f_{s,\\text{maks}}$ untuk menentukan terjadinya slip.',
    ],
  },
  4: {
    identifikasiMasalah: [
      'Benda yang dianalisis adalah silinder pejal homogen yang ditarik oleh gaya horizontal $F = 18\\text{ N}$ ke kanan tepat melalui poros (pusat massa) di atas lantai horizontal kasar.',
      'Berbeda dari Soal 3, garis kerja gaya $F$ melewati sumbu rotasi pusat massa sehingga lengan momen gaya $F$ terhadap pusat massa bernilai nol ($\\tau_F = 0$).',
      'Oleh karena itu, gaya gesek statis $f_s$ merupakan satu-satunya gaya yang dapat memberikan torsi agar silinder berotasi searah jarum jam.',
    ],
    diketahui: [
      'Massa silinder pejal: $m = 6\\text{ kg}$',
      'Jari-jari: $R = 0{,}2\\text{ m}$, dengan $I = \\frac{1}{2}mR^2$',
      'Gaya horizontal melalui poros: $F = 18\\text{ N}$ (ke kanan)',
      'Koefisien gesek statis: $\\mu_s = 0{,}25$',
      'Percepatan gravitasi: $g = 10\\text{ m/s}^2$',
    ],
    ditanyakan:
      'Evaluasi kebenaran 5 pernyataan terkait torsi gaya poros, arah gaya gesek statis, besar percepatan $a$ dan $\\alpha$, serta perbandingan dengan tarikan di tepi atas.',
    landasanTeori: [
      'Torsi gaya terhadap pusat massa: $\\tau = r_{\\perp} F$. Karena $F$ bekerja tepat pada poros ($r_{\\perp} = 0$), maka $\\tau_F = 0$.',
      'Agar silinder berotasi searah jarum jam saat bergerak ke kanan, gaya gesek statis di titik kontak terbawah harus berarah ke kiri sehingga menghasilkan torsi $\\tau_{f_s} = f_s R$ searah jarum jam.',
      'Translasi ($+x$ ke kanan): $F - f_s = ma$.',
      'Rotasi terhadap pusat massa: $f_s R = I\\alpha = \\frac{1}{2}mR^2\\left(\\frac{a}{R}\\right)$.',
    ],
    fbdTitle: 'Diagram Benda Bebas Silinder Pejal dengan Gaya Horizontal Melalui Poros',
    fbdCaption:
      'Gaya $F$ bekerja tepat pada pusat massa (lengan momen $= 0$, tidak memberi torsi). Gaya berat $mg$ dan normal $N$ juga melewati pusat massa. Gaya gesek statis $f_s$ pada titik kontak lantai berarah ke kiri sehingga menghasilkan torsi searah jarum jam dengan lengan momen $R$.',
    penyelesaianMatematis: [
      '1. Persamaan translasi pusat massa ($+x$ ke kanan): $$F - f_s = ma \\implies 18 - f_s = 6a$$',
      '2. Persamaan rotasi terhadap pusat massa (searah jarum jam $+$): $$f_s \\cdot R = I\\alpha = \\left(\\frac{1}{2}mR^2\\right)\\left(\\frac{a}{R}\\right) \\implies f_s = \\frac{1}{2}ma = 3a$$',
      '3. Substitusikan $f_s = 3a$ ke persamaan translasi: $$18 - 3a = 6a \\implies 9a = 18 \\implies a = 2\\text{ m/s}^2$$',
      '4. Hitung percepatan sudut dan gaya gesek statis: $$\\alpha = \\frac{a}{R} = \\frac{2}{0{,}2} = 10\\text{ rad/s}^2$$ $$f_s = 3(2) = 6\\text{ N} \\text{ (berarah ke kiri)}$$',
      '5. Periksa syarat tanpa slip: $$f_{s,\\text{maks}} = \\mu_s mg = 0{,}25 \\times 6 \\times 10 = 15\\text{ N}$$ Karena $f_s = 6\\text{ N} \\le 15\\text{ N}$, kondisi tanpa slip terpenuhi.',
      '6. Bandingkan dengan Soal 3 ($F = 18\\text{ N}$ di tepi atas): pada tepi atas $a_{\\text{tepi}} = 4\\text{ m/s}^2$, sedangkan melalui poros $a_{\\text{poros}} = 2\\text{ m/s}^2$. Jadi $a_{\\text{poros}} < a_{\\text{tepi}}$.',
    ],
    interpretasiHasil:
      'Ketika gaya $F$ bekerja pada poros, gaya gesek statis harus mengarah ke kiri untuk memutar roda searah jarum jam, sehingga gaya neto translasi menjadi lebih kecil ($F - f_s = 12\\text{ N}$). Sebaliknya, pada tarikan di tepi atas, gaya gesek statis mengarah ke kanan sehingga gaya neto translasi lebih besar ($F + f_s = 24\\text{ N}$).',
    kesimpulan:
      'Pernyataan yang benar adalah Pernyataan 1, 2, dan 3. Pernyataan 4 salah karena tanpa gaya gesek statis ($f_s = 0$), tidak ada torsi untuk memutar silinder sehingga silinder hanya akan meluncur (slip) tanpa berotasi. Pernyataan 5 salah karena $2\\text{ m/s}^2 < 4\\text{ m/s}^2$.',
    kesalahanUmum: [
      'Mengira gaya gesek statis pada gerak menggelinding tanpa slip di lantai datar selalu nol; padahal hanya nol ketika kecepatan konstan ($a = 0$), tidak nol ketika ada percepatan.',
      'Menganggap tarikan di poros lebih efisien mempercepat translasi daripada tarikan di tepi atas.',
    ],
  },
  5: {
    identifikasiMasalah: [
      'Empat benda dengan distribusi massa berbeda (bola pejal, silinder pejal, bola berongga tipis, dan cincin tipis) memiliki massa $m$ dan jari-jari luar $R$ sama, berlomba menuruni bidang miring kasar tanpa slip dari ketinggian awal $h$ yang sama.',
      'Setiap benda mengalami percepatan translasi dan rotasi serempak akibat komponen berat sejajar bidang ($mg\\sin\\theta$) dan gaya gesek statis ($f_s$) yang arahnya ke atas bidang miring.',
    ],
    diketahui: [
      'Massa sama: $m = 2\\text{ kg}$; jari-jari luar sama: $R = 0{,}1\\text{ m}$',
      'Ketinggian awal: $h = 2{,}8\\text{ m}$; sudut bidang: $\\theta = 30^\\circ$; $g = 10\\text{ m/s}^2$',
      'Faktor momen inersia $k = \\frac{I}{mR^2}$: bola pejal $k_1 = \\frac{2}{5} = 0{,}40$; silinder pejal $k_2 = \\frac{1}{2} = 0{,}50$; bola berongga tipis $k_3 = \\frac{2}{3} \\approx 0{,}67$; cincin tipis $k_4 = 1{,}00$.',
    ],
    ditanyakan:
      'Kebenaran 4 pernyataan mengenai urutan kedatangan di garis finis, perbandingan energi kinetik total, perbandingan waktu tempuh, serta pengaruh penggandaan massa dan jari-jari.',
    landasanTeori: [
      'Tuliskan momen inersia secara umum sebagai $I = k m R^2$.',
      'Translasi sejajar bidang miring: $mg\\sin\\theta - f_s = ma$.',
      'Rotasi terhadap pusat massa: $f_s R = I\\alpha = k m R^2\\left(\\frac{a}{R}\\right) \\implies f_s = k m a$.',
      'Gabungan kedua persamaan memberikan rumus umum percepatan: $a = \\frac{g\\sin\\theta}{1 + k}$.',
      'Karena gerak tanpa slip, titik kontak sesaat diam terhadap bidang sehingga usaha gaya gesek statis bernilai nol ($W_{f_s} = 0$) dan energi mekanik kekal: $E_{k,\\text{total}} = E_{k,\\text{trans}} + E_{k,\\text{rot}} = mgh$.',
    ],
    fbdTitle: 'Diagram Benda Bebas Umum Benda Menggelinding Menuruni Bidang Miring',
    fbdCaption:
      'Gaya berat $mg$ diuraikan menjadi komponen sejajar bidang $mg\\sin\\theta$ (ke bawah bidang) dan tegak lurus bidang $mg\\cos\\theta$. Gaya normal $N = mg\\cos\\theta$ melalui pusat massa. Gaya gesek statis $f_s$ berarah ke atas bidang miring untuk menghasilkan torsi rotasi menuruni bidang.',
    penyelesaianMatematis: [
      '1. Hitung percepatan masing-masing benda dengan $g\\sin 30^\\circ = 10(0{,}5) = 5\\text{ m/s}^2$: $$a = \\frac{5}{1 + k}$$',
      '2. Bola pejal ($k = 0{,}4$): $a_1 = \\frac{5}{1{,}4} = \\frac{25}{7} \\approx 3{,}57\\text{ m/s}^2$ (terbesar, tiba ke-1).',
      '3. Silinder pejal ($k = 0{,}5$): $a_2 = \\frac{5}{1{,}5} = \\frac{10}{3} \\approx 3{,}33\\text{ m/s}^2$ (tiba ke-2).',
      '4. Bola berongga tipis ($k = \\frac{2}{3}$): $a_3 = \\frac{5}{5/3} = 3{,}00\\text{ m/s}^2$ (tiba ke-3).',
      '5. Cincin tipis ($k = 1$): $a_4 = \\frac{5}{2} = 2{,}50\\text{ m/s}^2$ (terkecil, tiba ke-4).',
      '6. Evaluasi waktu tempuh $t = \\sqrt{\\frac{2s}{a}}$: karena panjang lintasan $s$ sama, $a_2 > a_3 \\implies t_2 < t_3$ (Pernyataan 1 dan 3 BENAR).',
      '7. Evaluasi energi kinetik total di dasar: karena $W_{f_s} = 0$, seluruh benda memiliki $E_{k,\\text{total}} = mgh = 2(10)(2{,}8) = 56\\text{ J}$. Cincin hanya memiliki fraksi $E_{k,\\text{rot}}$ lebih besar (50%) dan $E_{k,\\text{trans}}$ lebih kecil (50%), namun totalnya tetap $56\\text{ J}$ (Pernyataan 2 SALAH).',
      '8. Evaluasi penggandaan $m$ dan $R$: dalam persamaan $a = \\frac{g\\sin\\theta}{1 + k}$, variabel $m$ dan $R$ saling meniadakan, sehingga percepatan hanya bergantung pada faktor bentuk $k$ (Pernyataan 4 SALAH).',
    ],
    interpretasiHasil:
      'Semakin terkonsentrasi massa di dekat pusat rotasi (nilai $k$ kecil, seperti bola pejal), semakin kecil porsi energi potensial yang diubah menjadi energi kinetik rotasi dan semakin besar porsi untuk energi kinetik translasi, sehingga benda meluncur lebih cepat ke dasar.',
    kesimpulan:
      'Pernyataan 1: BENAR, Pernyataan 2: SALAH, Pernyataan 3: BENAR, Pernyataan 4: SALAH.',
    kesalahanUmum: [
      'Mengira benda bermassa lebih besar atau berjari-jari lebih besar selalu turun lebih cepat.',
      'Menyamakan energi kinetik translasi dengan energi kinetik total sehingga mengira benda yang lebih lambat di dasar memiliki energi kinetik total lebih kecil.',
    ],
  },
  6: {
    identifikasiMasalah: [
      'Sebuah silinder pejal homogen bergerak menaiki bidang miring kasar karena ditarik tali melalui porosnya sejajar bidang miring ke atas.',
      'Karena gaya tarik $F$, komponen berat $mg\\sin\\theta$, dan gaya normal $N$ semuanya melewati pusat massa, tidak ada satu pun dari ketiganya yang menimbulkan torsi terhadap pusat massa.',
      'Agar silinder mengalami percepatan sudut naik (berputar berlawanan arah jarum jam bila bidang miring naik ke kanan) sambil menggelinding tanpa slip menaiki bidang, gaya gesek statis $f_s$ HARUS berarah ke BAWAH bidang miring!',
    ],
    diketahui: [
      'Massa silinder pejal: $m = 4\\text{ kg}$, jari-jari $R = 0{,}2\\text{ m}$',
      'Momen inersia: $I = \\frac{1}{2}mR^2$',
      'Sudut bidang miring: $\\theta = 30^\\circ$ ($\\sin 30^\\circ = 0{,}5$; $\\cos 30^\\circ \\approx 0{,}866$)',
      'Gaya tarik pada poros sejajar bidang ke atas: $F = 38\\text{ N}$',
      'Koefisien gesek statis: $\\mu_s = 0{,}4$; $g = 10\\text{ m/s}^2$',
    ],
    ditanyakan: 'Besar percepatan linear pusat massa silinder ($a$) saat menaiki bidang miring.',
    landasanTeori: [
      'Komponen berat sejajar bidang miring (mengarah ke bawah bidang): $w_x = mg\\sin\\theta$.',
      'Hukum Newton II translasi sejajar bidang miring (ambil arah naik sebagai positif): $F - mg\\sin\\theta - f_s = ma$.',
      'Hukum Newton II rotasi terhadap pusat massa: $f_s R = I\\alpha = \\frac{1}{2}mR^2\\left(\\frac{a}{R}\\right)$.',
      'Verifikasi tanpa slip: $f_s \\le \\mu_s N = \\mu_s mg\\cos\\theta$.',
    ],
    fbdTitle: 'Diagram Benda Bebas Silinder Pejal Menaiki Bidang Miring dengan Tarikan Poros',
    fbdCaption:
      'Gaya tarik $F$ sejajar bidang ke atas melewati pusat massa. Berat $mg$ diuraikan menjadi $mg\\sin\\theta$ ke bawah bidang dan $mg\\cos\\theta$ tegak lurus bidang. Gaya normal $N$ tegak lurus bidang. Gaya gesek statis $f_s$ berarah ke bawah bidang untuk memutar silinder menaiki tanjakan.',
    penyelesaianMatematis: [
      '1. Hitung komponen gaya berat sejajar bidang miring: $$mg\\sin 30^\\circ = 4 \\times 10 \\times 0{,}5 = 20\\text{ N}$$',
      '2. Tuliskan persamaan translasi (arah naik bidang miring positif): $$F - mg\\sin\\theta - f_s = ma \\implies 38 - 20 - f_s = 4a \\implies 18 - f_s = 4a$$',
      '3. Tuliskan persamaan rotasi terhadap pusat massa: $$f_s R = \\left(\\frac{1}{2}mR^2\\right)\\left(\\frac{a}{R}\\right) \\implies f_s = \\frac{1}{2}ma = \\frac{1}{2}(4)a = 2a$$',
      '4. Substitusikan $f_s = 2a$ ke persamaan translasi: $$18 - 2a = 4a \\implies 6a = 18 \\implies a = 3\\text{ m/s}^2$$',
      '5. Hitung gaya gesek statis yang bekerja dan cek batas slip: $$f_s = 2(3) = 6\\text{ N}$$ $$N = mg\\cos 30^\\circ = 40 \\times \\frac{\\sqrt{3}}{2} \\approx 34{,}64\\text{ N}$$ $$f_{s,\\text{maks}} = \\mu_s N = 0{,}4 \\times 34{,}64 \\approx 13{,}86\\text{ N}$$ Karena $f_s = 6\\text{ N} \\le 13{,}86\\text{ N}$, silinder tetap menggelinding tanpa slip.',
    ],
    interpretasiHasil:
      'Dari gaya tarik bersih $F - mg\\sin\\theta = 18\\text{ N}$ ke atas, sebanyak $6\\text{ N}$ ditahan oleh gaya gesek statis $f_s$ untuk menghasilkan percepatan sudut $\\alpha = 15\\text{ rad/s}^2$, dan sisanya $12\\text{ N}$ mempercepat pusat massa sebesar $a = 3\\text{ m/s}^2$.',
    kesimpulan: 'Besar percepatan linear pusat massa silinder adalah $3\\text{ m/s}^2$.',
    kesalahanUmum: [
      'Menganggap gaya gesek statis mengarah ke atas bidang miring; jika $f_s$ ke atas bidang, torsinya justru memutar silinder berlawanan dengan arah gerak naik sehingga silinder tidak mungkin menggelinding naik tanpa slip.',
      'Lupa mengurangkan komponen berat $mg\\sin\\theta = 20\\text{ N}$ dari gaya tarik $F$.',
    ],
  },
  7: {
    identifikasiMasalah: [
      'Benda yang dianalisis adalah bola berongga tipis yang dilepaskan dari diam di atas bidang miring kasar tanpa adanya gaya dorong luar.',
      'Komponen berat $mg\\sin\\theta$ menarik pusat massa ke bawah bidang, sedangkan gaya gesek statis $f_s$ mengarah ke atas bidang untuk memberikan torsi rotasi menuruni bidang.',
    ],
    diketahui: [
      'Massa bola berongga tipis: $m = 3\\text{ kg}$',
      'Jari-jari: $R = 0{,}25\\text{ m}$',
      'Momen inersia bola berongga tipis: $I = \\frac{2}{3}mR^2$',
      'Sudut bidang miring: $\\theta = 37^\\circ$ ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$)',
      'Koefisien gesek statis: $\\mu_s = 0{,}4$; $g = 10\\text{ m/s}^2$',
    ],
    ditanyakan: 'Besar percepatan sudut ($\\alpha$) bola berongga tipis saat menuruni bidang miring.',
    landasanTeori: [
      'Hukum Newton II translasi sejajar bidang miring (ke bawah positif): $mg\\sin\\theta - f_s = ma$.',
      'Hukum Newton II rotasi terhadap pusat massa: $f_s R = I\\alpha = \\frac{2}{3}mR^2\\left(\\frac{a}{R}\\right)$.',
      'Hubungan tanpa slip: $\\alpha = \\frac{a}{R}$.',
      'Batas gesekan statis maksimum: $f_{s,\\text{maks}} = \\mu_s mg\\cos\\theta$.',
    ],
    fbdTitle: 'Diagram Benda Bebas Bola Berongga Tipis Menuruni Bidang Miring',
    fbdCaption:
      'Komponen gaya berat $mg\\sin 37^\\circ$ menarik ke bawah bidang miring, $mg\\cos 37^\\circ$ menekan bidang dan diimbangi gaya normal $N$. Gaya gesek statis $f_s$ berarah ke atas bidang miring dengan lengan momen $R$.',
    penyelesaianMatematis: [
      '1. Hitung komponen gaya berat sejajar bidang miring: $$mg\\sin 37^\\circ = 3 \\times 10 \\times 0{,}6 = 18\\text{ N}$$',
      '2. Persamaan Hukum Newton II translasi: $$mg\\sin\\theta - f_s = ma \\implies 18 - f_s = 3a$$',
      '3. Persamaan Hukum Newton II rotasi ($I = \\frac{2}{3}mR^2$): $$f_s R = \\left(\\frac{2}{3}mR^2\\right)\\left(\\frac{a}{R}\\right) \\implies f_s = \\frac{2}{3}ma = \\frac{2}{3}(3)a = 2a$$',
      '4. Substitusikan $f_s = 2a$ ke persamaan translasi: $$18 - 2a = 3a \\implies 5a = 18 \\implies a = 3{,}6\\text{ m/s}^2$$',
      '5. Hitung percepatan sudut $\\alpha$: $$\\alpha = \\frac{a}{R} = \\frac{3{,}6\\text{ m/s}^2}{0{,}25\\text{ m}} = 14{,}4\\text{ rad/s}^2$$',
      '6. Periksa kondisi tanpa slip: $$f_s = 2(3{,}6) = 7{,}2\\text{ N}$$ $$f_{s,\\text{maks}} = \\mu_s mg\\cos 37^\\circ = 0{,}4 \\times 3 \\times 10 \\times 0{,}8 = 9{,}6\\text{ N}$$ Karena $7{,}2\\text{ N} \\le 9{,}6\\text{ N}$, bola benar-benar menggelinding tanpa slip.',
    ],
    interpretasiHasil:
      'Bola berongga tipis memiliki faktor momen inersia $k = \\frac{2}{3}$, lebih besar daripada bola pejal ($\\frac{2}{5}$) dan silinder pejal ($\\frac{1}{2}$), sehingga percepatan linearnya hanya $\\frac{3}{5}g\\sin 37^\\circ = 3{,}6\\text{ m/s}^2$ dengan laju perubahan putaran $14{,}4\\text{ rad/s}^2$.',
    kesimpulan: 'Besar percepatan sudut bola berongga tipis tersebut adalah $14{,}4\\text{ rad/s}^2$.',
    kesalahanUmum: [
      'Menggunakan momen inersia bola pejal ($\\frac{2}{5}mR^2$) padahal soal menyebutkan bola berongga tipis ($\\frac{2}{3}mR^2$).',
      'Menjawab nilai percepatan linear $3{,}6\\text{ m/s}^2$ dan lupa menghitung percepatan sudut $\\alpha = a/R$.',
    ],
  },
  8: {
    identifikasiMasalah: [
      'Analisis membandingkan dua benda bermassa dan berjari-jari sama namun berbeda distribusi massa: Benda A (silinder pejal, $k_A = \\frac{1}{2}$) dan Benda B (cincin tipis, $k_B = 1$).',
      'Keduanya menuruni bidang miring yang sama ($L = 18\\text{ m}$, $\\theta = 37^\\circ$) dari keadaan diam tanpa slip.',
      'Karena silinder pejal memiliki percepatan lebih besar, ia tiba di garis finis lebih awal pada waktu $t_A$. Pada saat $t = t_A$ tersebut, cincin tipis baru menempuh jarak $s_B < L$.',
    ],
    diketahui: [
      'Massa dan jari-jari sama: $m = 5\\text{ kg}$, $R = 0{,}2\\text{ m}$',
      'Silinder pejal (A): $I_A = \\frac{1}{2}mR^2 \\;(k_A = 0{,}5)$',
      'Cincin tipis (B): $I_B = mR^2 \\;(k_B = 1)$',
      'Panjang lintasan miring: $L = 18\\text{ m}$',
      'Sudut bidang: $\\theta = 37^\\circ$ ($\\sin 37^\\circ = 0{,}6$; $\\cos 37^\\circ = 0{,}8$)',
      'Koefisien gesek statis: $\\mu_s = 0{,}5$; $g = 10\\text{ m/s}^2$',
    ],
    ditanyakan:
      'Jarak ketertinggalan Benda B dari garis finis ($\\Delta s = L - s_B$) tepat saat Benda A menyentuh garis finis.',
    landasanTeori: [
      'Percepatan benda menggelinding tanpa slip pada bidang miring: $a = \\frac{g\\sin\\theta}{1 + k}$.',
      'Kinematika GLBB dari keadaan diam ($v_0 = 0$): $s(t) = \\frac{1}{2}a t^2$.',
      'Syarat tanpa slip untuk kedua benda: $f_s = kma \\le \\mu_s mg\\cos\\theta$.',
    ],
    fbdTitle: 'Diagram Benda Bebas Komparatif: Silinder Pejal (A) dan Cincin Tipis (B)',
    fbdCaption:
      'Kedua benda menerima komponen gaya dorong gravitasi $mg\\sin 37^\\circ$ dan gaya normal $N = mg\\cos 37^\\circ$ yang identik. Namun cincin tipis membutuhkan gaya gesek statis $f_{s,B}$ yang lebih besar untuk memutar momen inersianya yang lebih tinggi sehingga percepatan netonya lebih kecil.',
    penyelesaianMatematis: [
      '1. Hitung $g\\sin 37^\\circ = 10 \\times 0{,}6 = 6\\text{ m/s}^2$.',
      '2. Hitung percepatan Benda A (silinder pejal, $k_A = \\frac{1}{2}$): $$a_A = \\frac{g\\sin 37^\\circ}{1 + \\frac{1}{2}} = \\frac{6}{1{,}5} = 4\\text{ m/s}^2$$ Cek slip A: $f_{s,A} = \\frac{1}{2}(5)(4) = 10\\text{ N} \\le f_{s,\\text{maks}} = 0{,}5(5)(10)(0{,}8) = 20\\text{ N}$ (aman).',
      '3. Hitung percepatan Benda B (cincin tipis, $k_B = 1$): $$a_B = \\frac{g\\sin 37^\\circ}{1 + 1} = \\frac{6}{2} = 3\\text{ m/s}^2$$ Cek slip B: $f_{s,B} = 1(5)(3) = 15\\text{ N} \\le 20\\text{ N}$ (aman, tanpa slip).',
      '4. Hitung waktu yang dibutuhkan Benda A untuk menempuh seluruh lintasan $L = 18\\text{ m}$: $$L = \\frac{1}{2}a_A t_A^2 \\implies 18 = \\frac{1}{2}(4)t_A^2 \\implies 2t_A^2 = 18 \\implies t_A^2 = 9 \\implies t_A = 3\\text{ s}$$',
      '5. Hitung jarak yang telah ditempuh Benda B selama $t_A = 3\\text{ s}$: $$s_B = \\frac{1}{2}a_B t_A^2 = \\frac{1}{2}(3)(3)^2 = 1{,}5 \\times 9 = 13{,}5\\text{ m}$$',
      '6. Hitung jarak ketertinggalan Benda B di belakang garis finis: $$\\Delta s = L - s_B = 18 - 13{,}5 = 4{,}5\\text{ m}$$ (Cara cepat rasio: $s_B = L \\cdot \\frac{a_B}{a_A} = 18 \\times \\frac{3}{4} = 13{,}5\\text{ m}$, sehingga $\\Delta s = 18 - 13{,}5 = 4{,}5\\text{ m}$).',
    ],
    interpretasiHasil:
      'Karena percepatan cincin tipis bernilai $\\frac{3}{4}$ dari percepatan silinder pejal, maka pada selang waktu tempuh yang sama cincin baru menempuh $\\frac{3}{4}$ panjang lintasan ($13{,}5\\text{ m}$) dan masih tertinggal sejauh $\\frac{1}{4}$ lintasan ($4{,}5\\text{ m}$).',
    kesimpulan: 'Jarak ketertinggalan Benda B dari garis finis adalah $4{,}5\\text{ m}$.',
    kesalahanUmum: [
      'Menghitung posisi $s_B = 13{,}5\\text{ m}$ lalu langsung menuliskannya sebagai jawaban akhir tanpa mengurangkannya dari panjang total $L = 18\\text{ m}$.',
      'Menganggap kedua benda mencapai dasar bersamaan karena memiliki massa yang sama (keliru menyamakan dengan gerak jatuh bebas/meluncur licin).',
    ],
  },
  9: {
    identifikasiMasalah: [
      'Sebuah bola pejal homogen ($I = \\frac{2}{5}mR^2$) terletak pada lantai horizontal kasar dan ditarik gaya horizontal $F = 21\\text{ N}$ ke kanan tepat di tepi paling atas bola.',
      'Untuk mengevaluasi apakah kondisi menggelinding tanpa slip dapat dipertahankan, kita harus menghitung gaya gesek statis yang diperlukan ($f_s$) lalu membandingkannya dengan gaya gesek statis maksimum ($f_{s,\\text{maks}}$).',
    ],
    diketahui: [
      'Massa bola pejal: $m = 5\\text{ kg}$, jari-jari $R = 0{,}2\\text{ m}$',
      'Momen inersia bola pejal: $I = \\frac{2}{5}mR^2$',
      'Gaya horizontal pada tepi atas (ke kanan): $F = 21\\text{ N}$',
      'Koefisien gesek statis: $\\mu_s = 0{,}24$; $g = 10\\text{ m/s}^2$',
    ],
    ditanyakan:
      'Besar rasio $\\dfrac{f_s}{f_{s,\\text{maks}}}$ untuk menilai kondisi tanpa slip.',
    landasanTeori: [
      'Gaya gesek statis maksimum lantai: $f_{s,\\text{maks}} = \\mu_s N = \\mu_s mg$.',
      'Dengan memisalkan $f_s$ berarah ke kanan ($+x$): Hukum Newton II translasi: $F + f_s = ma$.',
      'Hukum Newton II rotasi terhadap pusat massa (searah jarum jam $+$): $F R - f_s R = I\\alpha = \\frac{2}{5}mR^2\\left(\\frac{a}{R}\\right) \\implies F - f_s = \\frac{2}{5}ma$.',
      'Kondisi menggelinding tanpa slip terpenuhi apabila $\\frac{f_s}{f_{s,\\text{maks}}} \\le 1$.',
    ],
    fbdTitle: 'Diagram Benda Bebas Bola Pejal dengan Gaya pada Tepi Atas',
    fbdCaption:
      'Gaya luar $F = 21\\text{ N}$ bekerja di tepi paling atas ke kanan dengan lengan momen $R$. Gaya berat $mg$ dan gaya normal $N$ melewati pusat massa. Gaya gesek statis $f_s$ bekerja di titik kontak lantai ke arah kanan dengan lengan momen $R$.',
    penyelesaianMatematis: [
      '1. Hitung gaya gesek statis maksimum: $$f_{s,\\text{maks}} = \\mu_s mg = 0{,}24 \\times 5 \\times 10 = 12\\text{ N}$$',
      '2. Susun persamaan translasi dan rotasi bola pejal ($I = \\frac{2}{5}mR^2$): $$F + f_s = ma \\quad\\text{dan}\\quad F - f_s = \\frac{2}{5}ma$$',
      '3. Eliminasi variabel $ma$ dengan menyubstitusi $ma = F + f_s$ ke persamaan kedua: $$F - f_s = \\frac{2}{5}(F + f_s)$$ $$5F - 5f_s = 2F + 2f_s \\implies 7f_s = 3F$$',
      '4. Hitung besar gaya gesek statis yang diperlukan ($F = 21\\text{ N}$): $$f_s = \\frac{3}{7}(21) = +9\\text{ N}$$ (Tanda positif memastikan $f_s$ berarah ke kanan; percepatan bola $a = \\frac{21 + 9}{5} = 6\\text{ m/s}^2$).',
      '5. Hitung rasio perbandingan terhadap gaya gesek statis maksimum: $$\\frac{f_s}{f_{s,\\text{maks}}} = \\frac{9\\text{ N}}{12\\text{ N}} = \\frac{3}{4} = 0{,}75$$',
    ],
    interpretasiHasil:
      'Nilai rasio $0{,}75 < 1$ (atau $75\\%$ dari batas maksimum $12\\text{ N}$) membuktikan bahwa lantai kasar masih sanggup menyuplai gaya gesek statis yang dibutuhkan sebesar $9\\text{ N}$, sehingga bola pejal tetap menggelinding tanpa slip.',
    kesimpulan: 'Nilai rasio $\\dfrac{f_s}{f_{s,\\text{maks}}}$ adalah $0{,}75$.',
    kesalahanUmum: [
      'Menganggap gaya gesek yang bekerja selalu sama dengan $f_{s,\\text{maks}} = 12\\text{ N}$, padahal $f_{s,\\text{maks}}$ hanya merupakan batas atas gaya gesek statis.',
      'Salah memakai rumus $I = \\frac{1}{2}mR^2$ milik silinder pejal alih-alih $I = \\frac{2}{5}mR^2$ milik bola pejal.',
    ],
  },
  10: {
    identifikasiMasalah: [
      'Kasus lanjutan ini memadukan dua tahap gerak menggelinding tanpa slip sebuah silinder pejal ($I = \\frac{1}{2}mR^2$):',
      'Tahap 1: Silinder menggelinding menuruni bidang miring dari ketinggian $h = 2{,}7\\text{ m}$ hingga mencapai kecepatan $v_1$ di dasar bidang miring.',
      'Tahap 2: Pada bidang horizontal kasar, silinder mengalami torsi pengereman konstan $\\tau_{\\text{rem}} = 3{,}6\\text{ N}\\cdot\\text{m}$ pada porosnya yang menahan putaran. Agar tetap menggelinding tanpa slip, gaya gesek statis $f_s$ bekerja ke kiri (melawan gerak translasi) sekaligus menjaga hubungan $a_2 = \\alpha_2 R$ hingga silinder berhenti.',
    ],
    diketahui: [
      'Massa silinder pejal: $m = 4\\text{ kg}$, jari-jari $R = 0{,}2\\text{ m}$, $I = \\frac{1}{2}mR^2$',
      'Ketinggian awal: $h = 2{,}7\\text{ m}$; sudut bidang miring: $\\theta = 30^\\circ$',
      'Torsi pengereman poros di bidang datar: $\\tau_{\\text{rem}} = 3{,}6\\text{ N}\\cdot\\text{m}$',
      'Koefisien gesek statis lantai datar: $\\mu_s = 0{,}4$; $g = 10\\text{ m/s}^2$',
    ],
    ditanyakan:
      'Jarak tempuh mendatar silinder pada lintasan horizontal hingga tepat berhenti ($d$).',
    landasanTeori: [
      'Tahap 1 (bidang miring tanpa slip): usaha gaya gesek statis nol sehingga energi mekanik kekal: $mgh = \\frac{1}{2}mv_1^2 + \\frac{1}{2}I\\omega_1^2 = \\frac{1}{2}mv_1^2\\left(1 + \\frac{1}{2}\\right) = \\frac{3}{4}mv_1^2$.',
      'Tahap 2 (bidang horizontal dengan rem poros, misalkan bergerak ke kanan dengan perlambatan $|a_2|$ dan $|\alpha_2| = |a_2|/R$): Hukum Newton II translasi: $f_s = m|a_2|$ (arah $f_s$ ke kiri menahan laju).',
      'Hukum Newton II rotasi terhadap pusat massa: torsi pengereman $\\tau_{\\text{rem}}$ melawan rotasi (berlawanan jarum jam), sedangkan gaya gesek statis $f_s$ ke kiri di titik bawah memberikan torsi searah jarum jam: $\\tau_{\\text{rem}} - f_s R = I|\\alpha_2|$.',
      'Kinematika GLBB diperlambat hingga berhenti ($v_2 = 0$): $v_2^2 = v_1^2 - 2|a_2|d$.',
    ],
    fbdTitle: 'Diagram Benda Bebas Silinder Pejal: Tahap Bidang Miring (Kiri) dan Tahap Pengereman Horizontal (Kanan)',
    fbdCaption:
      'Pada tahap bidang miring, $mg\\sin 30^\\circ$ mendorong turun dan $f_{s1}$ ke atas bidang memutar silinder. Pada tahap horizontal, pengereman poros menghasilkan torsi $\\tau_{\\text{rem}}$ berlawanan arah jarum jam, sementara gaya gesek statis $f_s$ ke kiri memperlambat pusat massa dan memberikan torsi searah jarum jam.',
    penyelesaianMatematis: [
      '1. Hitung kelajuan pusat massa di dasar bidang miring (Tahap 1): $$mgh = \\frac{3}{4}mv_1^2 \\implies v_1^2 = \\frac{4}{3}gh = \\frac{4}{3}(10)(2{,}7) = 36\\text{ (m/s)}^2 \\implies v_1 = 6\\text{ m/s}$$ (Verifikasi lewat Hukum Newton II: $a_1 = \\frac{g\\sin 30^\\circ}{1+0{,}5} = \\frac{10}{3}\\text{ m/s}^2$, $s_1 = \\frac{2{,}7}{0{,}5} = 5{,}4\\text{ m}$, $v_1^2 = 2\\left(\\frac{10}{3}\\right)(5{,}4) = 36$).',
      '2. Analisis Tahap 2 (bidang horizontal dengan perlambatan $|a_2|$): Persamaan translasi ($f_s$ ke kiri): $$f_s = m|a_2|$$',
      '3. Persamaan rotasi terhadap pusat massa (torsi neto memperlambat putaran searah jarum jam): $$\\tau_{\\text{rem}} - f_s R = I|\\alpha_2| = \\left(\\frac{1}{2}mR^2\\right)\\left(\\frac{|a_2|}{R}\\right) = \\frac{1}{2}mR|a_2|$$',
      '4. Substitusikan $f_s = m|a_2|$ ke persamaan rotasi: $$\\tau_{\\text{rem}} - (m|a_2|)R = \\frac{1}{2}mR|a_2| \\implies \\tau_{\\text{rem}} = \\frac{3}{2}mR|a_2|$$',
      '5. Masukkan nilai numerik ($\\tau_{\\text{rem}} = 3{,}6\\text{ N}\\cdot\\text{m}$, $m = 4\\text{ kg}$, $R = 0{,}2\\text{ m}$): $$3{,}6 = \\frac{3}{2}(4)(0{,}2)|a_2| = 1{,}2|a_2| \\implies |a_2| = \\frac{3{,}6}{1{,}2} = 3\\text{ m/s}^2$$',
      '6. Periksa syarat tanpa slip di bidang horizontal: $$f_s = m|a_2| = 4 \\times 3 = 12\\text{ N}$$ $$f_{s,\\text{maks}} = \\mu_s mg = 0{,}4 \\times 4 \\times 10 = 16\\text{ N}$$ Karena $f_s = 12\\text{ N} \\le 16\\text{ N}$, silinder benar-benar berhenti tanpa slip!',
      '7. Hitung jarak tempuh mendatar hingga berhenti ($v_2 = 0$): $$0 = v_1^2 - 2|a_2|d \\implies d = \\frac{v_1^2}{2|a_2|} = \\frac{36}{2(3)} = 6\\text{ m}$$ (Verifikasi Usaha-Energi: sudut putar $\\Delta\\theta = \\frac{d}{R} = \\frac{6}{0{,}2} = 30\\text{ rad}$, usaha rem $W = -\\tau_{\\text{rem}}\\Delta\\theta = -3{,}6 \\times 30 = -108\\text{ J}$, tepat menghabiskan energi awal $mgh = 4(10)(2{,}7) = 108\\text{ J}$!).',
    ],
    interpretasiHasil:
      'Energi mekanik awal silinder sebesar $108\\text{ J}$ diubah sempurna menjadi energi kinetik translasi dan rotasi di dasar bidang miring ($v_1 = 6\\text{ m/s}$), kemudian diserap sepenuhnya oleh kerja torsi pengereman poros sepanjang $6\\text{ m}$ lintasan datar dengan perlambatan seragam $3\\text{ m/s}^2$.',
    kesimpulan: 'Jarak mendatar yang ditempuh silinder hingga tepat berhenti adalah $6\\text{ m}$.',
    kesalahanUmum: [
      'Lupa memasukkan energi kinetik rotasi saat menuruni bidang miring sehingga mengira $v_1 = \\sqrt{2gh} = \\sqrt{54}\\text{ m/s}$.',
      'Lupa bahwa gaya gesek statis $f_s$ pada tahap pengereman menghasilkan torsi melawan $\\tau_{\\text{rem}}$ ($\\tau_{\\text{rem}} - f_s R = I|\\alpha_2|$), bukan $\\tau_{\\text{rem}} = I|\\alpha_2|$ saja.',
    ],
  },
};
