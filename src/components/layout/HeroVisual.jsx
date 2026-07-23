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
          src="/assets/logo-1000b.webp"
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
