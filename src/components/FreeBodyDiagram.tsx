import React from 'react';

interface FreeBodyDiagramProps {
  questionId: number;
}

const ArrowDefs: React.FC = () => (
  <defs>
    <marker id="fbdRed" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
    </marker>
    <marker id="fbdBlue" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#0284c7" />
    </marker>
    <marker id="fbdTeal" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#0f766e" />
    </marker>
    <marker id="fbdAmber" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#d97706" />
    </marker>
    <marker id="fbdSlate" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#334155" />
    </marker>
  </defs>
);

export const FreeBodyDiagram: React.FC<FreeBodyDiagramProps> = ({ questionId }) => {
  return (
    <div className="rounded-xl border border-teal-200 bg-white p-3 sm:p-4">
      <div className="flex justify-center overflow-hidden">
        {questionId === 1 && (
          <svg
            viewBox="0 0 460 250"
            className="h-auto w-full max-w-[460px]"
            role="img"
            aria-label="Diagram Benda Bebas Terpisah Katrol dan Beban Soal 1"
          >
            <ArrowDefs />
            {/* Left panel: Isolated Pulley */}
            <rect x={10} y={10} width={225} height={230} rx={8} fill="#f8fafc" stroke="#cbd5e1" />
            <text x={122} y={30} textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">
              DBB 1: Katrol (Rotasi)
            </text>
            <circle cx={110} cy={125} r={44} fill="#ccfbf1" stroke="#0f766e" strokeWidth="2.5" />
            <circle cx={110} cy={125} r={4} fill="#0f172a" />
            {/* N_poros up */}
            <line x1={110} y1={125} x2={110} y2={58} stroke="#0284c7" strokeWidth="2.2" markerEnd="url(#fbdBlue)" />
            <text x={118} y={66} fontSize="11" fontWeight="700" fill="#0284c7">N_poros</text>
            {/* Mg down */}
            <line x1={110} y1={125} x2={110} y2={195} stroke="#334155" strokeWidth="2.2" markerEnd="url(#fbdSlate)" />
            <text x={116} y={205} fontSize="11" fontWeight="700" fill="#334155">Mg = 40 N</text>
            {/* Tangent tension T down at right rim (154, 125) */}
            <line x1={154} y1={125} x2={154} y2={192} stroke="#dc2626" strokeWidth="2.5" markerEnd="url(#fbdRed)" />
            <text x={162} y={170} fontSize="11" fontWeight="700" fill="#dc2626">T = 12 N</text>
            {/* Moment arm R */}
            <line x1={110} y1={125} x2={154} y2={125} stroke="#d97706" strokeWidth="1.8" strokeDasharray="3 2" />
            <text x={132} y={119} textAnchor="middle" fontSize="11" fontWeight="700" fill="#b45309">R</text>

            {/* Right panel: Isolated Hanging Mass */}
            <rect x={250} y={10} width={200} height={230} rx={8} fill="#f8fafc" stroke="#cbd5e1" />
            <text x={350} y={30} textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">
              DBB 2: Beban m (Translasi)
            </text>
            <rect x={326} y={105} width={48} height={42} rx={4} fill="#0f766e" stroke="#134e4a" strokeWidth="2" />
            <circle cx={350} cy={126} r={3.5} fill="#ffffff" />
            {/* T up */}
            <line x1={350} y1={105} x2={350} y2={54} stroke="#dc2626" strokeWidth="2.5" markerEnd="url(#fbdRed)" />
            <text x={358} y={66} fontSize="11" fontWeight="700" fill="#dc2626">T = 12 N</text>
            {/* mg down */}
            <line x1={350} y1={147} x2={350} y2={212} stroke="#334155" strokeWidth="2.5" markerEnd="url(#fbdSlate)" />
            <text x={358} y={208} fontSize="11" fontWeight="700" fill="#334155">mg = 30 N</text>
          </svg>
        )}

        {questionId === 2 && (
          <svg
            viewBox="0 0 470 250"
            className="h-auto w-full max-w-[470px]"
            role="img"
            aria-label="Diagram Benda Bebas Terpisah m1, Katrol, dan m2 Soal 2"
          >
            <ArrowDefs />
            {/* Left: m1 */}
            <rect x={8} y={12} width={132} height={226} rx={8} fill="#f8fafc" stroke="#cbd5e1" />
            <text x={74} y={30} textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">DBB 1: m₁ (Naik)</text>
            <rect x={54} y={108} width={40} height={36} rx={4} fill="#0d9488" />
            <line x1={74} y1={108} x2={74} y2={52} stroke="#dc2626" strokeWidth="2.4" markerEnd="url(#fbdRed)" />
            <text x={80} y={64} fontSize="11" fontWeight="700" fill="#dc2626">T₁=28N</text>
            <line x1={74} y1={144} x2={74} y2={200} stroke="#334155" strokeWidth="2.4" markerEnd="url(#fbdSlate)" />
            <text x={80} y={198} fontSize="11" fontWeight="700" fill="#334155">m₁g=20N</text>

            {/* Center: Pulley */}
            <rect x={148} y={12} width={174} height={226} rx={8} fill="#f8fafc" stroke="#cbd5e1" />
            <text x={235} y={30} textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">DBB 2: Katrol M</text>
            <circle cx={235} cy={120} r={40} fill="#ccfbf1" stroke="#0f766e" strokeWidth="2.5" />
            <circle cx={235} cy={120} r={3.5} fill="#0f172a" />
            <line x1={235} y1={120} x2={235} y2={56} stroke="#0284c7" strokeWidth="2" markerEnd="url(#fbdBlue)" />
            <text x={242} y={64} fontSize="10" fontWeight="700" fill="#0284c7">N_poros</text>
            <line x1={235} y1={120} x2={235} y2={182} stroke="#334155" strokeWidth="2" markerEnd="url(#fbdSlate)" />
            <text x={241} y={182} fontSize="10" fontWeight="700" fill="#334155">Mg</text>
            {/* T1 left rim */}
            <line x1={195} y1={120} x2={195} y2={182} stroke="#dc2626" strokeWidth="2.2" markerEnd="url(#fbdRed)" />
            <text x={188} y={178} textAnchor="end" fontSize="10" fontWeight="700" fill="#dc2626">T₁</text>
            {/* T2 right rim */}
            <line x1={275} y1={120} x2={275} y2={194} stroke="#dc2626" strokeWidth="2.5" markerEnd="url(#fbdRed)" />
            <text x={281} y={182} fontSize="10" fontWeight="700" fill="#dc2626">T₂</text>
            {/* R label */}
            <line x1={195} y1={120} x2={275} y2={120} stroke="#d97706" strokeWidth="1.4" strokeDasharray="3 2" />
            <text x={215} y={114} fontSize="10" fontWeight="700" fill="#b45309">R</text>
            <text x={255} y={114} fontSize="10" fontWeight="700" fill="#b45309">R</text>

            {/* Right: m2 */}
            <rect x={330} y={12} width={132} height={226} rx={8} fill="#f8fafc" stroke="#cbd5e1" />
            <text x={396} y={30} textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">DBB 3: m₂ (Turun)</text>
            <rect x={372} y={104} width={48} height={42} rx={4} fill="#0f766e" />
            <line x1={396} y1={104} x2={396} y2={58} stroke="#dc2626" strokeWidth="2.2" markerEnd="url(#fbdRed)" />
            <text x={402} y={68} fontSize="11" fontWeight="700" fill="#dc2626">T₂=36N</text>
            <line x1={396} y1={146} x2={396} y2={214} stroke="#334155" strokeWidth="2.6" markerEnd="url(#fbdSlate)" />
            <text x={396} y={228} textAnchor="middle" fontSize="11" fontWeight="700" fill="#334155">m₂g = 60 N</text>
          </svg>
        )}

        {questionId === 3 && (
          <svg
            viewBox="0 0 440 250"
            className="h-auto w-full max-w-[440px]"
            role="img"
            aria-label="Diagram Benda Bebas Silinder Pejal Gaya di Tepi Atas Soal 3"
          >
            <ArrowDefs />
            <line x1={60} y1={190} x2={380} y2={190} stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx={200} cy={130} r={60} fill="#ccfbf1" stroke="#0f766e" strokeWidth="2.5" />
            <circle cx={200} cy={130} r={4} fill="#0f172a" />
            {/* Normal N up */}
            <line x1={200} y1={190} x2={200} y2={42} stroke="#0284c7" strokeWidth="2.2" markerEnd="url(#fbdBlue)" />
            <text x={208} y={48} fontSize="11" fontWeight="700" fill="#0284c7">N = 60 N</text>
            {/* mg down */}
            <line x1={200} y1={130} x2={200} y2={232} stroke="#334155" strokeWidth="2.2" markerEnd="url(#fbdSlate)" />
            <text x={208} y={232} fontSize="11" fontWeight="700" fill="#334155">mg = 60 N</text>
            {/* F right at top rim (200, 70) */}
            <line x1={200} y1={70} x2={322} y2={70} stroke="#dc2626" strokeWidth="2.6" markerEnd="url(#fbdRed)" />
            <text x={270} y={62} fontSize="12" fontWeight="700" fill="#dc2626">F = 18 N (r = R)</text>
            {/* f_s RIGHT at bottom contact (200, 190)! */}
            <line x1={200} y1={190} x2={285} y2={190} stroke="#d97706" strokeWidth="2.6" markerEnd="url(#fbdAmber)" />
            <text x={290} y={185} fontSize="12" fontWeight="700" fill="#b45309">fₛ = 6 N (ke kanan!)</text>
            {/* Moment arms */}
            <line x1={182} y1={70} x2={182} y2={130} stroke="#0f766e" strokeWidth="1.5" />
            <text x={174} y={102} textAnchor="end" fontSize="11" fontWeight="700" fill="#0f766e">R</text>
            <line x1={182} y1={130} x2={182} y2={190} stroke="#0f766e" strokeWidth="1.5" />
            <text x={174} y={162} textAnchor="end" fontSize="11" fontWeight="700" fill="#0f766e">R</text>
          </svg>
        )}

        {questionId === 4 && (
          <svg
            viewBox="0 0 440 250"
            className="h-auto w-full max-w-[440px]"
            role="img"
            aria-label="Diagram Benda Bebas Silinder Pejal Gaya Melalui Poros Soal 4"
          >
            <ArrowDefs />
            <line x1={60} y1={190} x2={380} y2={190} stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx={210} cy={130} r={60} fill="#ccfbf1" stroke="#0f766e" strokeWidth="2.5" />
            <circle cx={210} cy={130} r={4.5} fill="#dc2626" />
            {/* N up */}
            <line x1={210} y1={190} x2={210} y2={42} stroke="#0284c7" strokeWidth="2.2" markerEnd="url(#fbdBlue)" />
            <text x={218} y={48} fontSize="11" fontWeight="700" fill="#0284c7">N = 60 N</text>
            {/* mg down */}
            <line x1={210} y1={130} x2={210} y2={232} stroke="#334155" strokeWidth="2.2" markerEnd="url(#fbdSlate)" />
            <text x={218} y={232} fontSize="11" fontWeight="700" fill="#334155">mg = 60 N</text>
            {/* F through CM (210, 130) */}
            <line x1={210} y1={130} x2={335} y2={130} stroke="#dc2626" strokeWidth="2.6" markerEnd="url(#fbdRed)" />
            <text x={295} y={118} fontSize="12" fontWeight="700" fill="#dc2626">F = 18 N (r = 0)</text>
            {/* f_s LEFT at bottom contact (210, 190) */}
            <line x1={210} y1={190} x2={125} y2={190} stroke="#d97706" strokeWidth="2.6" markerEnd="url(#fbdAmber)" />
            <text x={118} y={184} textAnchor="end" fontSize="12" fontWeight="700" fill="#b45309">fₛ = 6 N (ke kiri)</text>
            {/* Moment arm R for f_s */}
            <line x1={226} y1={130} x2={226} y2={190} stroke="#0f766e" strokeWidth="1.5" />
            <text x={232} y={164} fontSize="11" fontWeight="700" fill="#0f766e">R</text>
          </svg>
        )}

        {questionId === 5 && (
          <svg
            viewBox="0 0 440 255"
            className="h-auto w-full max-w-[440px]"
            role="img"
            aria-label="Diagram Benda Bebas Umum Benda Menggelinding Menuruni Bidang Miring Soal 5"
          >
            <ArrowDefs />
            {/* 30 deg reference slope line */}
            <line x1={90} y1={75} x2={340} y2={219} stroke="#94a3b8" strokeWidth="2" strokeDasharray="5 4" />
            {/* Object centered at (200, 100) */}
            <circle cx={200} cy={100} r={42} fill="#ccfbf1" stroke="#0f766e" strokeWidth="2.5" />
            <circle cx={200} cy={100} r={3.5} fill="#0f172a" />
            {/* Normal N perpendicular up-right: (sin30, -cos30) = (0.5, -0.866) */}
            <line x1={200} y1={100} x2={245} y2={22} stroke="#0284c7" strokeWidth="2.3" markerEnd="url(#fbdBlue)" />
            <text x={252} y={26} fontSize="11" fontWeight="700" fill="#0284c7">N = mg cos θ</text>
            {/* mg straight down */}
            <line x1={200} y1={100} x2={200} y2={204} stroke="#334155" strokeWidth="2.3" markerEnd="url(#fbdSlate)" />
            <text x={192} y={214} textAnchor="end" fontSize="11" fontWeight="700" fill="#334155">mg</text>
            {/* mg cos theta */}
            <line x1={200} y1={100} x2={155} y2={178} stroke="#64748b" strokeWidth="1.8" strokeDasharray="3 2" markerEnd="url(#fbdSlate)" />
            <text x={148} y={190} textAnchor="end" fontSize="11" fontWeight="600" fill="#475569">mg cos θ</text>
            {/* mg sin theta down slope */}
            <line x1={200} y1={100} x2={269} y2={140} stroke="#dc2626" strokeWidth="2.4" markerEnd="url(#fbdRed)" />
            <text x={275} y={145} fontSize="11" fontWeight="700" fill="#dc2626">mg sin θ</text>
            {/* f_s UP slope at contact (200 - 42*0.5, 100 + 42*0.866) = (179, 136.4) */}
            <line x1={179} y1={136} x2={116} y2={100} stroke="#d97706" strokeWidth="2.5" markerEnd="url(#fbdAmber)" />
            <text x={110} y={96} textAnchor="end" fontSize="11" fontWeight="700" fill="#b45309">fₛ (ke atas bidang)</text>
          </svg>
        )}

        {questionId === 6 && (
          <svg
            viewBox="0 0 440 265"
            className="h-auto w-full max-w-[440px]"
            role="img"
            aria-label="Diagram Benda Bebas Silinder Pejal Menaiki Bidang Miring dengan Tarikan Poros Soal 6"
          >
            <ArrowDefs />
            {/* 30 deg rising right reference */}
            <line x1={70} y1={210} x2={360} y2={42} stroke="#94a3b8" strokeWidth="2" strokeDasharray="5 4" />
            {/* Cylinder centered at (210, 90) */}
            <circle cx={210} cy={90} r={42} fill="#ccfbf1" stroke="#0f766e" strokeWidth="2.5" />
            <circle cx={210} cy={90} r={4} fill="#0f172a" />
            {/* F up-right parallel to slope */}
            <line x1={210} y1={90} x2={312} y2={31} stroke="#dc2626" strokeWidth="2.6" markerEnd="url(#fbdRed)" />
            <text x={316} y={32} fontSize="11" fontWeight="700" fill="#dc2626">F = 38 N (r=0)</text>
            {/* N perpendicular up-left: (-0.5, -0.866) */}
            <line x1={210} y1={90} x2={166} y2={14} stroke="#0284c7" strokeWidth="2.2" markerEnd="url(#fbdBlue)" />
            <text x={158} y={20} textAnchor="end" fontSize="11" fontWeight="700" fill="#0284c7">N</text>
            {/* mg straight down */}
            <line x1={210} y1={90} x2={210} y2={192} stroke="#334155" strokeWidth="2.2" markerEnd="url(#fbdSlate)" />
            <text x={204} y={206} textAnchor="end" fontSize="11" fontWeight="700" fill="#334155">mg = 40 N</text>
            {/* mg cos 30 */}
            <line x1={210} y1={90} x2={252} y2={162} stroke="#64748b" strokeWidth="1.6" strokeDasharray="3 2" markerEnd="url(#fbdSlate)" />
            <text x={256} y={172} fontSize="10" fontWeight="600" fill="#475569">mg cos 30°</text>
            {/* mg sin 30 down-left */}
            <line x1={210} y1={90} x2={138} y2={132} stroke="#0f766e" strokeWidth="2.2" markerEnd="url(#fbdTeal)" />
            <text x={132} y={136} textAnchor="end" fontSize="11" fontWeight="700" fill="#0f766e">mg sin 30° = 20 N</text>
            {/* f_s DOWN slope at contact (210+21, 90+36.4) = (231, 126) */}
            <line x1={231} y1={126} x2={168} y2={162} stroke="#d97706" strokeWidth="2.6" markerEnd="url(#fbdAmber)" />
            <text x={152} y={178} textAnchor="end" fontSize="11" fontWeight="700" fill="#b45309">
              fₛ = 6 N (ke bawah bidang!)
            </text>
          </svg>
        )}

        {questionId === 7 && (
          <svg
            viewBox="0 0 440 255"
            className="h-auto w-full max-w-[440px]"
            role="img"
            aria-label="Diagram Benda Bebas Bola Berongga Tipis Menuruni Bidang Miring 37 Derajat Soal 7"
          >
            <ArrowDefs />
            <line x1={95} y1={65} x2={335} y2={245} stroke="#94a3b8" strokeWidth="2" strokeDasharray="5 4" />
            <circle cx={210} cy={100} r={42} fill="#ffffff" stroke="#0f766e" strokeWidth="4" />
            <circle cx={210} cy={100} r={32} fill="none" stroke="#5eead4" strokeWidth="2" strokeDasharray="4 3" />
            <circle cx={210} cy={100} r={3.5} fill="#0f172a" />
            {/* N up-right: (0.6, -0.8) */}
            <line x1={210} y1={100} x2={258} y2={36} stroke="#0284c7" strokeWidth="2.2" markerEnd="url(#fbdBlue)" />
            <text x={265} y={38} fontSize="11" fontWeight="700" fill="#0284c7">N = 24 N</text>
            {/* mg down */}
            <line x1={210} y1={100} x2={210} y2={205} stroke="#334155" strokeWidth="2.2" markerEnd="url(#fbdSlate)" />
            <text x={216} y={214} fontSize="11" fontWeight="700" fill="#334155">mg = 30 N</text>
            {/* mg cos 37 */}
            <line x1={210} y1={100} x2={162} y2={164} stroke="#64748b" strokeWidth="1.6" strokeDasharray="3 2" markerEnd="url(#fbdSlate)" />
            <text x={156} y={176} textAnchor="end" fontSize="10" fontWeight="600" fill="#475569">mg cos 37°</text>
            {/* mg sin 37 down slope: (0.8, 0.6) */}
            <line x1={210} y1={100} x2={278} y2={151} stroke="#dc2626" strokeWidth="2.4" markerEnd="url(#fbdRed)" />
            <text x={284} y={154} fontSize="11" fontWeight="700" fill="#dc2626">mg sin 37° = 18 N</text>
            {/* f_s up slope at contact (210 - 25.2, 100 + 33.6) = (185, 134) */}
            <line x1={185} y1={134} x2={125} y2={89} stroke="#d97706" strokeWidth="2.5" markerEnd="url(#fbdAmber)" />
            <text x={118} y={84} textAnchor="end" fontSize="11" fontWeight="700" fill="#b45309">fₛ = 7,2 N</text>
          </svg>
        )}

        {questionId === 8 && (
          <svg
            viewBox="0 0 470 245"
            className="h-auto w-full max-w-[470px]"
            role="img"
            aria-label="Diagram Benda Bebas Komparatif Silinder Pejal A dan Cincin Tipis B Soal 8"
          >
            <ArrowDefs />
            {/* Left: Silinder A */}
            <rect x={10} y={10} width={220} height={225} rx={8} fill="#f8fafc" stroke="#cbd5e1" />
            <text x={120} y={30} textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">
              DBB Benda A: Silinder Pejal (k=½)
            </text>
            <line x1={40} y1={75} x2={200} y2={195} stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx={120} cy={100} r={34} fill="#ccfbf1" stroke="#0f766e" strokeWidth="2.5" />
            <line x1={120} y1={100} x2={156} y2={52} stroke="#0284c7" strokeWidth="2" markerEnd="url(#fbdBlue)" />
            <text x={162} y={54} fontSize="10" fontWeight="700" fill="#0284c7">N = 40 N</text>
            <line x1={120} y1={100} x2={120} y2={182} stroke="#334155" strokeWidth="2" markerEnd="url(#fbdSlate)" />
            <text x={126} y={185} fontSize="10" fontWeight="700" fill="#334155">mg=50N</text>
            <line x1={120} y1={100} x2={176} y2={142} stroke="#dc2626" strokeWidth="2.2" markerEnd="url(#fbdRed)" />
            <text x={180} y={145} fontSize="10" fontWeight="700" fill="#dc2626">30 N</text>
            <line x1={100} y1={127} x2={56} y2={94} stroke="#d97706" strokeWidth="2.2" markerEnd="url(#fbdAmber)" />
            <text x={52} y={88} textAnchor="end" fontSize="10" fontWeight="700" fill="#b45309">fₛA=10N</text>
            <text x={120} y={220} textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f766e">a_A = 4 m/s²</text>

            {/* Right: Cincin B */}
            <rect x={240} y={10} width={220} height={225} rx={8} fill="#f8fafc" stroke="#cbd5e1" />
            <text x={350} y={30} textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">
              DBB Benda B: Cincin Tipis (k=1)
            </text>
            <line x1={270} y1={75} x2={430} y2={195} stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx={350} cy={100} r={34} fill="none" stroke="#0f766e" strokeWidth="4" />
            <line x1={350} y1={100} x2={386} y2={52} stroke="#0284c7" strokeWidth="2" markerEnd="url(#fbdBlue)" />
            <text x={392} y={54} fontSize="10" fontWeight="700" fill="#0284c7">N = 40 N</text>
            <line x1={350} y1={100} x2={350} y2={182} stroke="#334155" strokeWidth="2" markerEnd="url(#fbdSlate)" />
            <text x={356} y={185} fontSize="10" fontWeight="700" fill="#334155">mg=50N</text>
            <line x1={350} y1={100} x2={406} y2={142} stroke="#dc2626" strokeWidth="2.2" markerEnd="url(#fbdRed)" />
            <text x={410} y={145} fontSize="10" fontWeight="700" fill="#dc2626">30 N</text>
            <line x1={330} y1={127} x2={278} y2={88} stroke="#d97706" strokeWidth="2.4" markerEnd="url(#fbdAmber)" />
            <text x={275} y={84} textAnchor="end" fontSize="10" fontWeight="700" fill="#b45309">fₛB=15N</text>
            <text x={350} y={220} textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f766e">a_B = 3 m/s²</text>
          </svg>
        )}

        {questionId === 9 && (
          <svg
            viewBox="0 0 440 250"
            className="h-auto w-full max-w-[440px]"
            role="img"
            aria-label="Diagram Benda Bebas Bola Pejal Gaya di Tepi Atas Soal 9"
          >
            <ArrowDefs />
            <line x1={60} y1={190} x2={380} y2={190} stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx={195} cy={130} r={60} fill="#ccfbf1" stroke="#0f766e" strokeWidth="2.5" />
            <ellipse cx={195} cy={130} rx={60} ry={15} fill="none" stroke="#14b8a6" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx={195} cy={130} r={3.5} fill="#0f172a" />
            {/* N up */}
            <line x1={195} y1={190} x2={195} y2={42} stroke="#0284c7" strokeWidth="2.2" markerEnd="url(#fbdBlue)" />
            <text x={203} y={48} fontSize="11" fontWeight="700" fill="#0284c7">N = 50 N</text>
            {/* mg down */}
            <line x1={195} y1={130} x2={195} y2={232} stroke="#334155" strokeWidth="2.2" markerEnd="url(#fbdSlate)" />
            <text x={203} y={232} fontSize="11" fontWeight="700" fill="#334155">mg = 50 N</text>
            {/* F = 21 N right at top rim */}
            <line x1={195} y1={70} x2={322} y2={70} stroke="#dc2626" strokeWidth="2.6" markerEnd="url(#fbdRed)" />
            <text x={270} y={62} fontSize="12" fontWeight="700" fill="#dc2626">F = 21 N (r = R)</text>
            {/* f_s = 9 N right at contact */}
            <line x1={195} y1={190} x2={285} y2={190} stroke="#d97706" strokeWidth="2.6" markerEnd="url(#fbdAmber)" />
            <text x={292} y={185} fontSize="12" fontWeight="700" fill="#b45309">fₛ = 9 N (ke kanan)</text>
          </svg>
        )}

        {questionId === 10 && (
          <svg
            viewBox="0 0 470 250"
            className="h-auto w-full max-w-[470px]"
            role="img"
            aria-label="Diagram Benda Bebas Dua Tahap Bidang Miring dan Pengereman Horizontal Soal 10"
          >
            <ArrowDefs />
            {/* Left: Tahap 1 Bidang Miring */}
            <rect x={10} y={10} width={215} height={230} rx={8} fill="#f8fafc" stroke="#cbd5e1" />
            <text x={117} y={30} textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">
              Tahap 1: Bidang Miring (30°)
            </text>
            <line x1={40} y1={85} x2={195} y2={175} stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx={118} cy={95} r={34} fill="#ccfbf1" stroke="#0f766e" strokeWidth="2.5" />
            <line x1={118} y1={95} x2={148} y2={42} stroke="#0284c7" strokeWidth="2" markerEnd="url(#fbdBlue)" />
            <text x={154} y={46} fontSize="10" fontWeight="700" fill="#0284c7">N₁</text>
            <line x1={118} y1={95} x2={118} y2={176} stroke="#334155" strokeWidth="2" markerEnd="url(#fbdSlate)" />
            <text x={124} y={182} fontSize="10" fontWeight="700" fill="#334155">mg=40N</text>
            <line x1={118} y1={95} x2={174} y2={127} stroke="#dc2626" strokeWidth="2" markerEnd="url(#fbdRed)" />
            <text x={176} y={132} fontSize="10" fontWeight="700" fill="#dc2626">mg sin30°</text>
            <line x1={101} y1={124} x2={56} y2={98} stroke="#d97706" strokeWidth="2.2" markerEnd="url(#fbdAmber)" />
            <text x={52} y={92} textAnchor="end" fontSize="10" fontWeight="700" fill="#b45309">fₛ₁</text>
            <text x={117} y={222} textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f766e">v₁ = 6 m/s di dasar</text>

            {/* Right: Tahap 2 Pengereman Horizontal */}
            <rect x={238} y={10} width={222} height={230} rx={8} fill="#f8fafc" stroke="#cbd5e1" />
            <text x={349} y={30} textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">
              Tahap 2: Pengereman Poros
            </text>
            <line x1={258} y1={178} x2={440} y2={178} stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx={349} cy={128} r={48} fill="#ccfbf1" stroke="#0f766e" strokeWidth="2.5" />
            <circle cx={349} cy={128} r={4} fill="#0f172a" />
            {/* N up */}
            <line x1={349} y1={176} x2={349} y2={52} stroke="#0284c7" strokeWidth="2" markerEnd="url(#fbdBlue)" />
            <text x={356} y={58} fontSize="10" fontWeight="700" fill="#0284c7">N₂ = 40 N</text>
            {/* mg down */}
            <line x1={349} y1={128} x2={349} y2={208} stroke="#334155" strokeWidth="2" markerEnd="url(#fbdSlate)" />
            <text x={356} y={208} fontSize="10" fontWeight="700" fill="#334155">mg = 40 N</text>
            {/* f_s LEFT at contact (349, 176) */}
            <line x1={349} y1={176} x2={274} y2={176} stroke="#dc2626" strokeWidth="2.4" markerEnd="url(#fbdRed)" />
            <text x={274} y={168} textAnchor="middle" fontSize="10" fontWeight="700" fill="#dc2626">fₛ = 12 N</text>
            {/* Braking torque CCW */}
            <path d="M 372 104 A 30 30 0 0 0 326 104" fill="none" stroke="#d97706" strokeWidth="2.4" markerEnd="url(#fbdAmber)" />
            <text x={392} y={96} fontSize="10" fontWeight="700" fill="#b45309">τ_rem</text>
            <text x={349} y={228} textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f766e">|a₂| = 3 m/s² → d = 6 m</text>
          </svg>
        )}
      </div>
    </div>
  );
};
