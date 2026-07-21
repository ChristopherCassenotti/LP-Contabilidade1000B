import { motion } from "motion/react";
function OpportunityChart() {
  const bars = [38, 54, 62, 49, 73, 88];

  return (
    <div className="relative mt-5 h-[92px]" aria-hidden="true">
      <div className="absolute inset-x-0 bottom-0 flex items-end gap-2">
        {bars.map((height, index) => (
          <span
            key={index}
            className="flex-1 rounded-t-[4px] bg-[#5f91d8]"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>

      <svg
        viewBox="0 0 260 90"
        className="absolute inset-0 h-full w-full overflow-visible"
        fill="none"
      >
        <path
          d="M2 70C35 62 55 61 82 51C112 40 134 45 162 32C187 20 212 25 251 5"
          stroke="#4b86d4"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M244 4L253 4L251 13"
          stroke="#4b86d4"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function MonitoringChart() {
  return (
    <div className="mt-3 h-[70px]" aria-hidden="true">
      <svg
        viewBox="0 0 240 80"
        className="h-full w-full overflow-visible"
        fill="none"
      >
        <defs>
          <linearGradient id="monitoring-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#28bdf1" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#28bdf1" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M0 67C18 60 28 56 41 42C56 26 69 21 84 30C105 42 119 34 135 28C154 20 163 31 180 35C198 40 213 33 240 25V80H0Z"
          fill="url(#monitoring-area)"
        />

        <path
          d="M0 67C18 60 28 56 41 42C56 26 69 21 84 30C105 42 119 34 135 28C154 20 163 31 180 35C198 40 213 33 240 25"
          stroke="#22b8ee"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <g fill="#a7b3c7">
          {[10, 48, 86, 124, 162, 200, 238].map((x) => (
            <circle key={x} cx={x} cy="75" r="1.5" />
          ))}
        </g>
      </svg>
    </div>
  );
}

export default function HeroVisual() {
  return (
    <div
      className="
        relative
        mx-auto
        h-[410px]
        w-full
        max-w-[590px]
        overflow-visible
        sm:h-[500px]
        lg:h-[540px]
      "
    >
      {/* Card de oportunidades */}
      <motion.article
        initial={{ opacity: 0, x: -35, y: 15 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.65, delay: 0.55 }}
        className="
          absolute
          left-0
          top-[130px]
          z-10
          w-[58%]
          rounded-2xl
          bg-white
          p-4
          shadow-[0_20px_60px_rgba(0,20,65,0.18)]
          sm:top-[165px]
          sm:w-[54%]
          sm:p-5
        "
      >
        <p className="text-[11px] font-semibold text-[#172033] sm:text-sm">
          Valor em oportunidades
        </p>

        <strong className="mt-1 block text-base font-bold text-[#16396c] sm:text-xl">
          + R$
        </strong>

        <OpportunityChart />
      </motion.article>

      {/* Card de licitações */}
      <motion.article
        initial={{ opacity: 0, x: 35, y: -15 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.65, delay: 0.7 }}
        className="
          absolute
          right-0
          top-0
          z-10
          w-[53%]
          rounded-2xl
          bg-white
          p-4
          text-right
          shadow-[0_20px_60px_rgba(0,20,65,0.18)]
          sm:w-[49%]
          sm:p-5
        "
      >
        <p className="text-[11px] font-semibold text-[#172033] sm:text-sm">
          Licitações monitoradas
        </p>

        <strong className="mt-1 block text-base font-bold text-[#16396c] sm:text-xl">
          + Editais ativos
        </strong>

        <MonitoringChart />
      </motion.article>

      {/* Pessoa */}
      <motion.img
        initial={{ opacity: 0, y: 45, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        src="/assets/person.webp"
        alt="Especialista da 1000B Assessoria Contábil"
        className="
          pointer-events-none
          absolute
          bottom-[68px]
          left-3/7
          z-20
          h-[77%]
          w-auto
          max-w-none
          -translate-x-[44%]
          object-contain
          object-bottom
          sm:bottom-[72px]
          sm:h-[83%]
          lg:h-[88%]
        "
      />

      {/* Card inferior */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.85 }}
        className="
          absolute
          bottom-0
          left-1/2
          z-30
          grid
          w-[92%]
          -translate-x-1/2
          grid-cols-[110px_1fr]
          items-center
          gap-4
          rounded-[22px]
          bg-[#063477]
          px-5
          py-4
          shadow-[0_22px_60px_rgba(0,16,54,0.32)]
          sm:w-[88%]
          sm:grid-cols-[145px_1fr]
          sm:rounded-[28px]
          sm:px-7
          sm:py-5
        "
      >
        <img
          src="/assets/logo-1000b.png"
          alt="1000B Assessoria Contábil"
          className="w-full object-contain"
        />

        <div className="border-l border-white/20 pl-4">
          <p className="text-[18px] leading-[1.25] text-white sm:text-xl">
            Assessoria contábil
            <strong className="block font-bold text-white">
              há mais de 50 anos.
            </strong>
          </p>

          <p className="mt-1 text-[14px] font-semibold uppercase leading-tight text-cyan-300 sm:text-lg">
            União da Vitória — PR
          </p>
        </div>
      </motion.div>
    </div>
  );
}
