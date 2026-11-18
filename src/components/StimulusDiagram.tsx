import React from 'react';

interface StimulusDiagramProps {
  questionId: number;
}

const FloorHatches: React.FC<{ x1: number; x2: number; y: number; step?: number }> = ({
  x1,
  x2,
  y,
  step = 14,
}) => {
  const ticks: number[] = [];
  for (let x = x1; x <= x2; x += step) {
    ticks.push(x);
  }
  return (
    <g stroke="#64748b" strokeWidth="1.5">
      <line x1={x1} y1={y} x2={x2} y2={y} stroke="#334155" strokeWidth="2.5" />
      {ticks.map((x) => (
        <line key={x} x1={x} y1={y} x2={x - 7} y2={y + 9} />
      ))}
    </g>
  );
};

export const StimulusDiagram: React.FC<StimulusDiagramProps> = ({ questionId }) => {
  return (
    <figure className="my-4 rounded-xl border border-slate-200 bg-slate-50/70 p-3 sm:p-4">
      <div className="flex justify-center overflow-hidden">
        {questionId === 1 && (
          <svg
            viewBox="0 0 440 270"
            className="h-auto w-full max-w-[440px]"
            role="img"
            aria-label="Ilustrasi katrol cakram pejal dengan satu beban menggantung"
          >
            {/* Ceiling mount */}
            <FloorHatches x1={140} x2={340} y={24} />
            <line x1={225} y1={24} x2={225} y2={95} stroke="#475569" strokeWidth="5" />
            {/* Pulley */}
            <circle cx={225} cy={95} r={52} fill="#ccfbf1" stroke="#0f766e" strokeWidth="3" />
            <circle cx={225} cy={95} r={44} fill="none" stroke="#14b8a6" strokeWidth="1" strokeDasharray="4 3" />
            {/* Radius line */}
            <line x1={225} y1={95} x2={189} y2={58} stroke="#0f766e" strokeWidth="1.8" />
            <text x={196} y={82} fontSize="12" fontWeight="600" fill="#115e59">R</text>
            {/* Wrapped cord on pulley */}
            <path
              d="M 173 95 A 52 52 0 1 1 277 95"
              fill="none"
              stroke="#1e293b"
              strokeWidth="2.5"
            />
            {/* Tangent vertical cord */}
            <line x1={277} y1={95} x2={277} y2={195} stroke="#1e293b" strokeWidth="2.5" />
            {/* Center axle */}
            <circle cx={225} cy={95} r={6} fill="#334155" />
            {/* Hanging mass m */}
            <rect x={245} y={195} width={64} height={44} rx={4} fill="#0f766e" stroke="#134e4a" strokeWidth="2" />
            <text x={277} y={221} textAnchor="middle" fontSize="13" fontWeight="700" fill="#ffffff">
              m = 3 kg
            </text>
            {/* Labels */}
            <text x={40} y={86} fontSize="12" fontWeight="600" fill="#0f172a">Cakram pejal</text>
            <text x={40} y={103} fontSize="12" fill="#334155">M = 4 kg</text>
            <text x={40} y={120} fontSize="12" fill="#334155">R = 0,2 m</text>
            <text x={294} y={150} fontSize="12" fontWeight="600" fill="#334155">Tali tanpa slip</text>
            <text x={335} y={248} fontSize="11" fill="#475569">g = 10 m/s²</text>
          </svg>
        )}

        {questionId === 2 && (
          <svg
            viewBox="0 0 440 275"
            className="h-auto w-full max-w-[440px]"
            role="img"
            aria-label="Ilustrasi pesawat Atwood dengan katrol bermassa dan dua beban"
          >
            {/* Ceiling mount */}
            <FloorHatches x1={120} x2={320} y={22} />
            <line x1={220} y1={22} x2={220} y2={90} stroke="#475569" strokeWidth="5" />
            {/* Pulley */}
            <circle cx={220} cy={90} r={52} fill="#ccfbf1" stroke="#0f766e" strokeWidth="3" />
            <circle cx={220} cy={90} r={43} fill="none" stroke="#14b8a6" strokeWidth="1" strokeDasharray="4 3" />
            <line x1={220} y1={90} x2={220} y2={38} stroke="#0f766e" strokeWidth="1.5" />
            <text x={226} y={64} fontSize="12" fontWeight="600" fill="#115e59">R</text>
            {/* Rope tangent left and right */}
            <line x1={168} y1={90} x2={168} y2={175} stroke="#1e293b" strokeWidth="2.5" />
            <line x1={272} y1={90} x2={272} y2={200} stroke="#1e293b" strokeWidth="2.5" />
            <circle cx={220} cy={90} r={6} fill="#334155" />

            {/* Left mass m1 = 2 kg */}
            <rect x={146} y={175} width={44} height={40} rx={4} fill="#0d9488" stroke="#115e59" strokeWidth="2" />
            <text x={168} y={199} textAnchor="middle" fontSize="12" fontWeight="700" fill="#ffffff">
              m₁
            </text>
            <text x={125} y={199} textAnchor="end" fontSize="12" fontWeight="600" fill="#0f172a">
              2 kg
            </text>

            {/* Right mass m2 = 6 kg */}
            <rect x={244} y={200} width={56} height={50} rx={4} fill="#0f766e" stroke="#134e4a" strokeWidth="2" />
            <text x={272} y={229} textAnchor="middle" fontSize="13" fontWeight="700" fill="#ffffff">
              m₂
            </text>
            <text x={312} y={229} fontSize="12" fontWeight="600" fill="#0f172a">
              6 kg
            </text>

            {/* Labels */}
            <text x={290} y={76} fontSize="12" fontWeight="600" fill="#0f172a">Katrol Silinder Pejal</text>
            <text x={290} y={93} fontSize="12" fill="#334155">M = 4 kg, R = 0,25 m</text>
            <text x={156} y={138} textAnchor="end" fontSize="12" fontWeight="600" fill="#334155">Sisi T₁</text>
            <text x={284} y={138} fontSize="12" fontWeight="600" fill="#334155">Sisi T₂</text>
          </svg>
        )}

        {questionId === 3 && (
          <svg
            viewBox="0 0 440 250"
            className="h-auto w-full max-w-[440px]"
            role="img"
            aria-label="Ilustrasi silinder pejal di atas lantai kasar dengan gaya horizontal di tepi paling atas"
          >
            <defs>
              <marker id="arrowF3" markerWidth="10" markerHeight="10" refX="8" refY="3.5" orient="auto">
                <polygon points="0 0, 9 3.5, 0 7" fill="#dc2626" />
              </marker>
            </defs>
            <FloorHatches x1={40} x2={400} y={205} />
            {/* Solid cylinder */}
            <circle cx={190} cy={145} r={60} fill="#ccfbf1" stroke="#0f766e" strokeWidth="3" />
            <circle cx={190} cy={145} r={4} fill="#334155" />
            <line x1={190} y1={145} x2={148} y2={103} stroke="#0f766e" strokeWidth="1.6" />
            <text x={156} y={128} fontSize="12" fontWeight="600" fill="#115e59">R</text>
            {/* Force F at top rim (190, 85) */}
            <circle cx={190} cy={85} r={4} fill="#dc2626" />
            <line x1={190} y1={85} x2={315} y2={85} stroke="#dc2626" strokeWidth="3" markerEnd="url(#arrowF3)" />
            <text x={255} y={73} textAnchor="middle" fontSize="13" fontWeight="700" fill="#b91c1c">
              F = 18 N (tepi atas)
            </text>
            {/* Metadata labels */}
            <text x={55} y={120} fontSize="12" fontWeight="600" fill="#0f172a">Silinder Pejal</text>
            <text x={55} y={136} fontSize="12" fill="#334155">m = 6 kg</text>
            <text x={55} y={152} fontSize="12" fill="#334155">R = 0,2 m</text>
            <text x={295} y={232} fontSize="12" fontWeight="600" fill="#334155">
              Lantai kasar (μₛ = 0,25)
            </text>
          </svg>
        )}

        {questionId === 4 && (
          <svg
            viewBox="0 0 440 250"
            className="h-auto w-full max-w-[440px]"
            role="img"
            aria-label="Ilustrasi silinder pejal di atas lantai kasar dengan gaya horizontal bekerja melalui poros"
          >
            <defs>
              <marker id="arrowF4" markerWidth="10" markerHeight="10" refX="8" refY="3.5" orient="auto">
                <polygon points="0 0, 9 3.5, 0 7" fill="#dc2626" />
              </marker>
            </defs>
            <FloorHatches x1={40} x2={400} y={205} />
            {/* Solid cylinder */}
            <circle cx={185} cy={145} r={60} fill="#ccfbf1" stroke="#0f766e" strokeWidth="3" />
            <line x1={185} y1={145} x2={143} y2={103} stroke="#0f766e" strokeWidth="1.6" />
            <text x={150} y={127} fontSize="12" fontWeight="600" fill="#115e59">R</text>
            {/* Force F through axle/CM (185, 145) */}
            <circle cx={185} cy={145} r={5} fill="#dc2626" />
            <line x1={185} y1={145} x2={320} y2={145} stroke="#dc2626" strokeWidth="3" markerEnd="url(#arrowF4)" />
            <text x={285} y={132} textAnchor="middle" fontSize="13" fontWeight="700" fill="#b91c1c">
              F = 18 N (poros)
            </text>
            {/* Metadata */}
            <text x={50} y={120} fontSize="12" fontWeight="600" fill="#0f172a">Silinder Pejal</text>
            <text x={50} y={136} fontSize="12" fill="#334155">m = 6 kg</text>
            <text x={50} y={152} fontSize="12" fill="#334155">R = 0,2 m</text>
            <text x={290} y={232} fontSize="12" fontWeight="600" fill="#334155">
              Lantai kasar (μₛ = 0,25)
            </text>
          </svg>
        )}

        {questionId === 5 && (
          <svg
            viewBox="0 0 460 270"
            className="h-auto w-full max-w-[460px]"
            role="img"
            aria-label="Ilustrasi perlombaan empat benda menggelinding menuruni bidang miring 30 derajat"
          >
            {/* Exact 30 deg incline: dx=290, dy=167.4 -> top (85, 53), bottom (375, 220) */}
            <polygon points="85,220 85,53 375,220" fill="#f1f5f9" stroke="#334155" strokeWidth="2.5" />
            <line x1={40} y1={220} x2={445} y2={220} stroke="#334155" strokeWidth="2.5" />
            {/* Height h */}
            <line x1={68} y1={53} x2={68} y2={220} stroke="#0f766e" strokeWidth="1.5" strokeDasharray="4 3" />
            <text x={62} y={142} textAnchor="end" fontSize="11.5" fontWeight="600" fill="#0f766e">h = 2,8 m</text>
            {/* Angle 30 deg */}
            <path d="M 330 220 A 45 45 0 0 1 336 198" fill="none" stroke="#0f766e" strokeWidth="2" />
            <text x={306} y={211} fontSize="12" fontWeight="600" fill="#0f766e">θ = 30°</text>
            {/* Finish line */}
            <line x1={375} y1={178} x2={375} y2={220} stroke="#dc2626" strokeWidth="2.5" strokeDasharray="3 3" />
            <text x={383} y={195} fontSize="11" fontWeight="700" fill="#b91c1c">GARIS FINIS</text>

            {/* Rolling object at start line (radius 17) tangent to slope at top */}
            <circle cx={111} cy={46} r={17} fill="#14b8a6" stroke="#0f766e" strokeWidth="2.5" />
            <text x={135} y={37} fontSize="11" fontWeight="700" fill="#0f172a">
              Garis Start (v₀ = 0)
            </text>
            <text x={135} y={52} fontSize="10.5" fill="#334155">
              4 lintasan identik
            </text>

            {/* 4 distinct cross-section icons in top-right legend box */}
            <g transform="translate(268, 12)">
              <rect x={0} y={0} width={180} height={115} rx={8} fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
              <text x={10} y={18} fontSize="11" fontWeight="700" fill="#0f172a">Bentuk Benda (R sama):</text>
              {/* 1. Bola pejal */}
              <circle cx={24} cy={38} r={9} fill="#0f766e" />
              <ellipse cx={24} cy={38} rx={9} ry={3} fill="none" stroke="#99f6e4" strokeWidth="1" />
              <text x={42} y={42} fontSize="11" fill="#1e293b">1. Bola Pejal (k = 2/5)</text>
              {/* 2. Silinder pejal */}
              <circle cx={24} cy={60} r={9} fill="#5eead4" stroke="#0f766e" strokeWidth="2" />
              <circle cx={24} cy={60} r={2} fill="#0f766e" />
              <text x={42} y={64} fontSize="11" fill="#1e293b">2. Silinder Pejal (k = 1/2)</text>
              {/* 3. Bola berongga */}
              <circle cx={24} cy={82} r={9} fill="#ffffff" stroke="#0f766e" strokeWidth="2.5" />
              <circle cx={24} cy={82} r={6} fill="none" stroke="#99f6e4" strokeWidth="1.5" strokeDasharray="2 2" />
              <text x={42} y={86} fontSize="11" fill="#1e293b">3. Bola Berongga (k = 2/3)</text>
              {/* 4. Cincin tipis */}
              <circle cx={24} cy={103} r={9} fill="none" stroke="#0f766e" strokeWidth="2.5" />
              <text x={42} y={107} fontSize="11" fill="#1e293b">4. Cincin Tipis (k = 1)</text>
            </g>
          </svg>
        )}

        {questionId === 6 && (
          <svg
            viewBox="0 0 440 265"
            className="h-auto w-full max-w-[440px]"
            role="img"
            aria-label="Ilustrasi silinder pejal ditarik melalui poros menaiki bidang miring 30 derajat"
          >
            <defs>
              <marker id="arrowF6" markerWidth="10" markerHeight="10" refX="8" refY="3.5" orient="auto">
                <polygon points="0 0, 9 3.5, 0 7" fill="#dc2626" />
              </marker>
            </defs>
            {/* 30 deg slope rising to the right: (60, 225) to (390, 225 - 330*0.577) = (390, 34.5) */}
            <polygon points="60,225 390,225 390,34.5" fill="#f1f5f9" stroke="#334155" strokeWidth="2.5" />
            <line x1={30} y1={225} x2={415} y2={225} stroke="#334155" strokeWidth="2.5" />
            {/* Angle 30 */}
            <path d="M 118 225 A 58 58 0 0 0 110 196" fill="none" stroke="#0f766e" strokeWidth="2" />
            <text x={126} y={214} fontSize="12" fontWeight="600" fill="#0f766e">θ = 30°</text>
            {/* Contact point at 42% up slope: x=198.6, y=145. Contact normal (-sin30, -cos30)=(-0.5, -0.866) * r(38) -> center (179.6, 112.1) */}
            <circle cx={180} cy={112} r={38} fill="#ccfbf1" stroke="#0f766e" strokeWidth="3" />
            <circle cx={180} cy={112} r={5} fill="#dc2626" />
            {/* Pulling rope parallel to 30 deg slope up-right: cos30=0.866, -sin30=-0.5 */}
            <line
              x1={180}
              y1={112}
              x2={292}
              y2={47}
              stroke="#dc2626"
              strokeWidth="3"
              markerEnd="url(#arrowF6)"
            />
            <text x={242} y={50} fontSize="13" fontWeight="700" fill="#b91c1c">
              F = 38 N (poros)
            </text>
            <text x={55} y={76} fontSize="12" fontWeight="600" fill="#0f172a">Silinder Pejal</text>
            <text x={55} y={92} fontSize="12" fill="#334155">m = 4 kg, R = 0,2 m</text>
            <text x={55} y={108} fontSize="12" fill="#334155">μₛ = 0,4</text>
            <text x={260} y={248} fontSize="12" fill="#334155">Bidang miring kasar (tanpa slip)</text>
          </svg>
        )}

        {questionId === 7 && (
          <svg
            viewBox="0 0 440 265"
            className="h-auto w-full max-w-[440px]"
            role="img"
            aria-label="Ilustrasi bola berongga tipis menggelinding menuruni bidang miring 37 derajat"
          >
            {/* Exact 37 deg slope: 3-4-5 triangle -> base dx=240, height dy=180. Top (90, 45), bottom-right (330, 225) */}
            <polygon points="90,225 90,45 330,225" fill="#f1f5f9" stroke="#334155" strokeWidth="2.5" />
            <line x1={50} y1={225} x2={400} y2={225} stroke="#334155" strokeWidth="2.5" />
            {/* Angle 37 */}
            <path d="M 278 225 A 52 52 0 0 1 288 194" fill="none" stroke="#0f766e" strokeWidth="2" />
            <text x={246} y={214} fontSize="12" fontWeight="600" fill="#0f766e">θ = 37°</text>
            {/* Hollow sphere near top: contact at 35% along slope (174, 108). Normal (+0.6, -0.8)*r(36) -> center (195.6, 79.2) */}
            <circle cx={196} cy={79} r={36} fill="#ffffff" stroke="#0f766e" strokeWidth="4" />
            <circle cx={196} cy={79} r={28} fill="none" stroke="#5eead4" strokeWidth="2" strokeDasharray="5 3" />
            <circle cx={196} cy={79} r={3.5} fill="#0f766e" />
            <line x1={196} y1={79} x2={224} y2={58} stroke="#0f766e" strokeWidth="1.5" />
            <text x={208} y={64} fontSize="11" fontWeight="600" fill="#115e59">R</text>
            {/* Labels */}
            <text x={256} y={56} fontSize="12" fontWeight="700" fill="#0f172a">Bola Berongga Tipis</text>
            <text x={256} y={73} fontSize="12" fill="#334155">m = 3 kg, R = 0,25 m</text>
            <text x={256} y={90} fontSize="12" fill="#334155">I = (2/3) mR²</text>
            <text x={256} y={107} fontSize="12" fill="#334155">μₛ = 0,4, g = 10 m/s²</text>
            <text x={150} y={248} fontSize="12" fill="#334155">Dilepaskan dari diam (tanpa slip)</text>
          </svg>
        )}

        {questionId === 8 && (
          <svg
            viewBox="0 0 460 270"
            className="h-auto w-full max-w-[460px]"
            role="img"
            aria-label="Ilustrasi perbandingan lintasan silinder pejal A dan cincin tipis B pada bidang miring 37 derajat"
          >
            {/* 37 deg slope: (75, 45) to (315, 225) */}
            <polygon points="75,225 75,45 315,225" fill="#f1f5f9" stroke="#334155" strokeWidth="2.5" />
            <line x1={40} y1={225} x2={420} y2={225} stroke="#334155" strokeWidth="2.5" />
            {/* Length L = 18 m bracket */}
            <line x1={65} y1={35} x2={305} y2={215} stroke="#0f766e" strokeWidth="1.5" strokeDasharray="4 3" />
            <text x={155} y={168} fontSize="12" fontWeight="700" fill="#0f766e" transform="rotate(36.87, 155, 168)">
              L = 18 m
            </text>
            <text x={246} y={214} fontSize="12" fontWeight="600" fill="#0f766e">37°</text>
            {/* Finish line */}
            <line x1={315} y1={182} x2={315} y2={225} stroke="#dc2626" strokeWidth="2.5" strokeDasharray="3 3" />
            <text x={324} y={202} fontSize="11" fontWeight="700" fill="#b91c1c">FINIS</text>

            {/* Two objects side-by-side icons at start */}
            <circle cx={112} cy={42} r={19} fill="#99f6e4" stroke="#0f766e" strokeWidth="2.5" />
            <circle cx={112} cy={42} r={3} fill="#0f766e" />
            <text x={112} y={18} textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">A & B Start</text>

            {/* Comparison Legend */}
            <g transform="translate(230, 22)">
              <rect x={0} y={0} width={215} height={95} rx={8} fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" />
              <text x={12} y={20} fontSize="11" fontWeight="700" fill="#0f172a">Dua Benda Identik m = 5 kg, R = 0,2 m</text>
              <circle cx={26} cy={43} r={10} fill="#99f6e4" stroke="#0f766e" strokeWidth="2" />
              <text x={44} y={47} fontSize="11" fill="#1e293b">Benda A: Silinder Pejal (½mR²)</text>
              <circle cx={26} cy={72} r={10} fill="none" stroke="#0f766e" strokeWidth="3" />
              <text x={44} y={76} fontSize="11" fill="#1e293b">Benda B: Cincin Tipis (mR²)</text>
            </g>
          </svg>
        )}

        {questionId === 9 && (
          <svg
            viewBox="0 0 440 250"
            className="h-auto w-full max-w-[440px]"
            role="img"
            aria-label="Ilustrasi bola pejal di lantai horizontal kasar ditarik gaya 21 N pada tepi atas"
          >
            <defs>
              <radialGradient id="sphereGrad9" cx="38%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#f0fdfa" />
                <stop offset="55%" stopColor="#5eead4" />
                <stop offset="100%" stopColor="#0f766e" />
              </radialGradient>
              <marker id="arrowF9" markerWidth="10" markerHeight="10" refX="8" refY="3.5" orient="auto">
                <polygon points="0 0, 9 3.5, 0 7" fill="#dc2626" />
              </marker>
            </defs>
            <FloorHatches x1={40} x2={400} y={205} />
            {/* Solid sphere */}
            <circle cx={185} cy={145} r={60} fill="url(#sphereGrad9)" stroke="#0f766e" strokeWidth="2.5" />
            <ellipse cx={185} cy={145} rx={60} ry={16} fill="none" stroke="#115e59" strokeWidth="1" strokeDasharray="4 3" />
            <circle cx={185} cy={145} r={3.5} fill="#0f172a" />
            {/* Force F at top rim */}
            <circle cx={185} cy={85} r={4} fill="#dc2626" />
            <line x1={185} y1={85} x2={325} y2={85} stroke="#dc2626" strokeWidth="3" markerEnd="url(#arrowF9)" />
            <text x={255} y={72} textAnchor="middle" fontSize="13" fontWeight="700" fill="#b91c1c">
              F = 21 N (tepi atas)
            </text>
            <text x={45} y={118} fontSize="12" fontWeight="700" fill="#0f172a">Bola Pejal</text>
            <text x={45} y={135} fontSize="12" fill="#334155">m = 5 kg, R = 0,2 m</text>
            <text x={45} y={152} fontSize="12" fill="#334155">I = (2/5) mR²</text>
            <text x={285} y={232} fontSize="12" fontWeight="600" fill="#334155">Lantai kasar (μₛ = 0,24)</text>
          </svg>
        )}

        {questionId === 10 && (
          <svg
            viewBox="0 0 460 265"
            className="h-auto w-full max-w-[460px]"
            role="img"
            aria-label="Ilustrasi lintasan gabungan bidang miring dan bidang horizontal dengan torsi pengereman poros"
          >
            <defs>
              <marker id="brakeArrow10" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <polygon points="0 0, 7 3, 0 6" fill="#d97706" />
              </marker>
            </defs>
            {/* Combined track: slope from (55, 65) down to (205, 195), smooth transition to horizontal (430, 195) */}
            <path d="M 55 65 L 190 182 Q 208 195 225 195 L 430 195" fill="none" stroke="#334155" strokeWidth="3" />
            <line x1={40} y1={195} x2={225} y2={195} stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4 4" />
            {/* Height h = 2.7 m */}
            <line x1={45} y1={65} x2={45} y2={195} stroke="#0f766e" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x={38} y={135} textAnchor="end" fontSize="11" fontWeight="700" fill="#0f766e">h = 2,7 m</text>
            <text x={150} y={187} fontSize="11" fontWeight="600" fill="#0f766e">30°</text>

            {/* Cylinder at top start */}
            <circle cx={72} cy={46} r={22} fill="#ccfbf1" stroke="#0f766e" strokeWidth="2.5" />
            <circle cx={72} cy={46} r={3} fill="#0f766e" />
            <text x={102} y={42} fontSize="11" fontWeight="700" fill="#0f172a">Start (v₀ = 0)</text>
            <text x={102} y={57} fontSize="11" fill="#334155">m = 4 kg, R = 0,2 m</text>

            {/* Cylinder on horizontal braking zone */}
            <circle cx={310} cy={171} r={24} fill="#99f6e4" stroke="#0f766e" strokeWidth="2.5" strokeDasharray="5 3" />
            <circle cx={310} cy={171} r={4} fill="#d97706" />
            {/* Counter-clockwise braking torque arc */}
            <path
              d="M 326 155 A 22 22 0 0 0 293 156"
              fill="none"
              stroke="#d97706"
              strokeWidth="2.5"
              markerEnd="url(#brakeArrow10)"
            />
            <text x={315} y={130} textAnchor="middle" fontSize="11" fontWeight="700" fill="#b45309">
              τ_rem = 3,6 N·m
            </text>

            {/* Horizontal stopping distance d */}
            <line x1={225} y1={222} x2={395} y2={222} stroke="#dc2626" strokeWidth="2" />
            <line x1={225} y1={215} x2={225} y2={229} stroke="#dc2626" strokeWidth="2" />
            <line x1={395} y1={215} x2={395} y2={229} stroke="#dc2626" strokeWidth="2" />
            <text x={310} y={242} textAnchor="middle" fontSize="12" fontWeight="700" fill="#b91c1c">
              Jarak berhenti d = ? (μₛ = 0,4)
            </text>
          </svg>
        )}
      </div>
      <figcaption className="mt-2 text-center text-xs text-slate-500">
        Gambar Stimulus Soal {questionId} — Digambar proporsional tanpa menampilkan hasil analisis atau vektor percepatan.
      </figcaption>
    </figure>
  );
};
