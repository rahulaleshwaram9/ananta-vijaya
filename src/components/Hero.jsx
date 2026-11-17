import React from 'react';
import { ASSETS } from '../data/soaps';

export default function Hero({ onSelectSoap }) {
  return (
    <section id="home" className="relative w-full bg-white overflow-hidden pt-28 pb-space-xl lg:pb-32">
      {/* Subtle Architectural Arch & Radial Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-gradient-to-b from-[#ffdea6]/20 to-transparent blur-3xl"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center min-h-[640px]">
          
          {/* Left Editorial Column */}
          <div className="lg:col-span-5 flex flex-col justify-center pr-0 lg:pr-space-md">
            {/* Eyebrow Ornament */}
            <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-4 w-full">
              <div className="flex items-center gap-1.5 text-[#C59A45]">
                <span className="w-6 sm:w-10 h-[1px] bg-gradient-to-r from-transparent to-[#C59A45]"></span>
                <svg className="w-3 h-3 text-[#C59A45]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                </svg>
              </div>
              <span className="font-label-sm text-[11px] sm:text-[12px] uppercase tracking-[0.22em] text-[#7B5802] font-semibold text-center">
                Natural Handmade Soaps
              </span>
              <div className="flex items-center gap-1.5 text-[#C59A45]">
                <svg className="w-3 h-3 text-[#C59A45]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                </svg>
                <span className="w-6 sm:w-10 h-[1px] bg-gradient-to-l from-transparent to-[#C59A45]"></span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-display-lg text-display-lg text-primary leading-[1.08] tracking-tight mb-space-md font-serif">
              Nature's Tradition.<br />
              <span className="italic font-normal text-secondary">Timeless Wellness.</span>
            </h1>

            {/* Body Description */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-space-lg leading-relaxed">
              Experience five unique handcrafted soaps inspired by ancient Indian heritage and the sacred goodness of consecrated botanicals.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-space-md mb-space-xl">
              <a
                href="#collection"
                className="inline-flex items-center justify-center px-space-lg py-space-sm bg-primary-container text-surface-container font-label-md text-label-md uppercase tracking-widest shadow-md hover:bg-dark-brown transition-all duration-300 group rounded-sm"
              >
                <span>Discover Our Soaps</span>
                <span className="material-symbols-outlined text-[18px] ml-space-xs transition-transform group-hover:translate-x-1 text-secondary-fixed">
                  east
                </span>
              </a>
              <a
                href="#rituals"
                className="inline-flex items-center justify-center px-space-lg py-space-sm bg-surface-container text-dark-brown font-label-md text-label-md uppercase tracking-widest hover:bg-surface-container-high transition-all duration-300 shadow-sm rounded-sm"
              >
                Explore Our Story
              </a>
            </div>

            {/* Trust Badge Row */}
            <div className="pt-2 flex justify-center lg:justify-start w-full">
              <div className="inline-flex items-center justify-center gap-2 xs:gap-2.5 sm:gap-4 px-3 sm:px-4 py-1.5 sm:py-1 rounded-full bg-white/95 border border-[#C59A45]/40 shadow-[0_2px_12px_rgba(123,88,2,0.06)] text-[#00271d] text-[9.5px] xs:text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold select-none">
                <div className="inline-flex items-center gap-1 sm:gap-1.5">
                  <span className="material-symbols-outlined text-[#7B5802] text-[14px] sm:text-[16px]">verified</span>
                  <span>Handcrafted</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-[#C59A45]/60 shrink-0"></span>
                <div className="inline-flex items-center gap-1 sm:gap-1.5">
                  <span className="material-symbols-outlined text-[#7B5802] text-[14px] sm:text-[16px]">spa</span>
                  <span><span className="hidden sm:inline">Devotional </span>Pure Herbs</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-[#C59A45]/60 shrink-0"></span>
                <div className="inline-flex items-center gap-1 sm:gap-1.5">
                  <span className="material-symbols-outlined text-[#7B5802] text-[14px] sm:text-[16px]">local_florist</span>
                  <span>Sacred Botanicals</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Curated 3D Product Stage with All 5 Packaging Boxes & Temple Arch (Enlarged Luxury Showcase) */}
          <div className="lg:col-span-7 relative mt-6 lg:mt-0 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[840px] aspect-[16/9.2] select-none mx-auto flex items-center justify-center overflow-visible scale-[1.03] lg:scale-[1.08] origin-center">
              
              {/* 1. Ambient Golden Radial Glow Behind Arch */}
              <div className="absolute inset-0 bg-radial from-[#fdcd73]/35 via-[#E8D4B5]/25 to-transparent blur-3xl pointer-events-none -z-10"></div>

              {/* 2. Golden Indian Carved Temple Arch Backdrop - Expanded & Grand */}
              <div className="absolute top-0 inset-x-0 bottom-[3%] w-full flex items-start justify-center pointer-events-none z-0 overflow-hidden">
                <img 
                  alt="Ornate Temple Arch" 
                  className="w-[86%] sm:w-[84%] h-auto object-contain drop-shadow-[0_14px_32px_rgba(123,88,2,0.28)]" 
                  src={ASSETS.templeArch} 
                />
              </div>

              {/* 3. Sacred Golden Line-Art Lotus Mandala Ring (Enlarged & Positioned Behind Soaps) */}
              <div className="absolute top-[4%] sm:top-[3%] left-1/2 -translate-x-1/2 w-[64%] sm:w-[62%] aspect-square pointer-events-none z-5 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#fdcd73]/50 via-[#E8D4B5]/30 to-transparent blur-3xl"></div>
                <img
                  alt="Lotus Mandala Ring"
                  className="w-full h-full object-contain animate-[spin_90s_linear_infinite] opacity-95 drop-shadow-[0_0_36px_rgba(253,205,115,0.55)]"
                  src={ASSETS.lotusMandala}
                />
              </div>


              {/* 5. Left Upper Arch: Lush Botanical Bilvam Branch Framing */}
              <div className="absolute top-[2%] left-[6%] sm:left-[7%] w-[17%] sm:w-[18%] z-20 pointer-events-none drop-shadow-md">
                <img alt="Bilvam Leaves Left" className="w-full h-auto object-contain -rotate-12" src={ASSETS.bilvamLeaves} />
              </div>

              {/* 6. Right Upper Arch: Lush Botanical Bilvam Branch Framing */}
              <div className="absolute top-[2%] right-[6%] sm:right-[7%] w-[17%] sm:w-[18%] z-20 pointer-events-none drop-shadow-md">
                <img alt="Bilvam Leaves Right" className="w-full h-auto object-contain rotate-45 scale-x-[-1]" src={ASSETS.bilvamLeaves} />
              </div>

              {/* 7. Upper Right: "THE DIVINE COLLECTION" Medallion (Hanging on Right Pillar) */}
              <div className="absolute top-[16%] sm:top-[17%] right-[6%] sm:right-[7%] z-30 pointer-events-none flex flex-col items-center">
                {/* Golden Hanging Loop */}
                <div className="w-[3px] h-3.5 sm:h-4.5 bg-gradient-to-b from-[#C59A45] via-[#fdcd73] to-[#7b5802] rounded-full shadow-sm"></div>
                <div className="relative w-18 h-18 sm:w-22 sm:h-22 lg:w-24 lg:h-24 rounded-full bg-gradient-to-tr from-[#7b5802] via-[#fdcd73] to-[#C59A45] p-[3px] shadow-[0_14px_28px_rgba(57,37,29,0.38)] flex items-center justify-center border-2 border-[#ffdea6]">
                  <div className="w-full h-full rounded-full bg-gradient-to-b from-[#fffcf7] via-[#faecd4] to-[#f0e4cf] border border-[#C59A45]/70 flex flex-col items-center justify-center text-center p-1 sm:p-1.5 shadow-inner">
                    <span className="font-serif text-[8px] sm:text-[9.5px] lg:text-[10px] uppercase tracking-[0.24em] text-[#7b5802] font-semibold leading-tight">The</span>
                    <span className="font-serif text-[12px] sm:text-[14.5px] lg:text-[16px] font-bold text-[#173D32] tracking-wider uppercase leading-tight my-0.5">Divine</span>
                    <span className="font-serif text-[8.5px] sm:text-[10px] lg:text-[10.5px] font-semibold text-[#7b5802] tracking-wider uppercase leading-tight">Collection</span>
                  </div>
                </div>
              </div>

              {/* 9. The 5 Soap Boxes Row (Resting on top of the stone pedestal - Moved Down) */}
              <div className="absolute bottom-[18.5%] sm:bottom-[19%] inset-x-0 w-[95%] sm:w-[93%] mx-auto flex items-end justify-center select-none z-20 pointer-events-auto">
                
                {/* Box 1: Kamalam Soap (Pink) */}
                <div 
                  className="w-[18%] sm:w-[17.5%] flex flex-col items-center z-10 transition-transform duration-300 hover:-translate-y-2 group cursor-pointer origin-bottom"
                  onClick={() => onSelectSoap?.(3)}
                >
                  <div className="relative w-full">
                    <img alt="Kamalam Soap Box" className="w-full h-auto object-contain drop-shadow-[0_16px_22px_rgba(57,37,29,0.48)]" src={ASSETS.kamalamBox} />
                    <div className="absolute -bottom-1 inset-x-2 h-3.5 bg-[#173D32]/45 blur-sm rounded-full -z-10"></div>
                  </div>
                </div>

                {/* Box 2: Rudraksha Soap (Dark Brown) */}
                <div 
                  className="w-[20%] sm:w-[19.5%] flex flex-col items-center z-15 -ml-[1.5%] transition-transform duration-300 hover:-translate-y-2 group cursor-pointer origin-bottom"
                  onClick={() => onSelectSoap?.(1)}
                >
                  <div className="relative w-full">
                    <img alt="Rudraksha Soap Box" className="w-full h-auto object-contain drop-shadow-[0_18px_24px_rgba(57,37,29,0.52)]" src={ASSETS.rudrakshaBox} />
                    <div className="absolute -bottom-1 inset-x-2 h-3.5 bg-[#173D32]/50 blur-sm rounded-full -z-10"></div>
                  </div>
                </div>

                {/* Box 3: Vibhudi Soap (Navy Blue - Center Hero) */}
                <div 
                  className="w-[27%] sm:w-[26.5%] flex flex-col items-center z-25 -ml-[1.5%] -mr-[1.5%] scale-[1.08] origin-bottom transition-transform duration-300 hover:-translate-y-2 group cursor-pointer"
                  onClick={() => onSelectSoap?.(0)}
                >
                  <div className="relative w-full">
                    <img alt="Vibhudi Soap Box" className="w-full h-auto object-contain drop-shadow-[0_24px_34px_rgba(23,61,50,0.6)]" src={ASSETS.vibhudiBox} />
                    <div className="absolute -bottom-1 inset-x-2 h-4.5 bg-[#173d32]/65 blur-md rounded-full -z-10"></div>
                  </div>
                </div>

                {/* Box 4: Bilvam Soap (Forest Green) */}
                <div 
                  className="w-[20%] sm:w-[19.5%] flex flex-col items-center z-15 transition-transform duration-300 hover:-translate-y-2 group cursor-pointer origin-bottom"
                  onClick={() => onSelectSoap?.(2)}
                >
                  <div className="relative w-full">
                    <img alt="Bilvam Soap Box" className="w-full h-auto object-contain drop-shadow-[0_18px_24px_rgba(57,37,29,0.52)]" src={ASSETS.bilvamBox} />
                    <div className="absolute -bottom-1 inset-x-2 h-3.5 bg-[#173D32]/50 blur-sm rounded-full -z-10"></div>
                  </div>
                </div>

                {/* Box 5: Kadamba Soap (Orange) */}
                <div 
                  className="w-[18%] sm:w-[17.5%] flex flex-col items-center z-10 -ml-[1.5%] transition-transform duration-300 hover:-translate-y-2 group cursor-pointer origin-bottom"
                  onClick={() => onSelectSoap?.(4)}
                >
                  <div className="relative w-full">
                    <img alt="Kadamba Soap Box" className="w-full h-auto object-contain drop-shadow-[0_16px_22px_rgba(57,37,29,0.48)]" src={ASSETS.kadambaBox} />
                    <div className="absolute -bottom-1 inset-x-2 h-3.5 bg-[#173D32]/45 blur-sm rounded-full -z-10"></div>
                  </div>
                </div>

              </div>

              {/* 10. Natural Stone Pedestal Platform (Covering Ground Pillars) */}
              <div className="absolute bottom-[-0.5%] sm:bottom-[-1%] inset-x-0 w-[100%] sm:w-[98%] mx-auto z-15 pointer-events-none flex items-center justify-center">
                <img 
                  alt="Natural Stone Pedestal Platform" 
                  className="w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(57,37,29,0.48)]" 
                  src={ASSETS.stonePedestal} 
                />
              </div>

              {/* 11. Foreground Sacred Offerings (Directly aligned 1-to-1 beneath each soap box) */}
              <div className="absolute inset-x-0 bottom-[-4%] sm:bottom-[-5%] w-[95%] sm:w-[93%] mx-auto flex items-end justify-center pointer-events-none z-30">
                
                {/* Offering 1: Blooming Pink Lotus (Directly under Kamalam Lotus Soap) */}
                <div className="w-[18%] sm:w-[17.5%] flex flex-col items-center justify-end z-25">
                  <div className="w-[85%] sm:w-[90%] drop-shadow-xl">
                    <img alt="Sacred Pink Lotus Flower" className="w-full h-auto object-contain" src={ASSETS.pinkLotus} />
                  </div>
                </div>

                {/* Offering 2: Sacred Rudraksha Beads (Directly under Rudraksha Soap) */}
                <div className="w-[20%] sm:w-[19.5%] -ml-[1.5%] flex flex-col items-center justify-end z-20">
                  <div className="w-[72%] sm:w-[76%] drop-shadow-lg">
                    <img alt="Sacred Rudraksha Beads" className="w-full h-auto object-contain" src={ASSETS.rudrakshaMala} />
                  </div>
                </div>

                {/* Offering 3: Sacred Vibhudi Ash Bowl (Directly under Vibhudi Soap - Center) */}
                <div className="w-[27%] sm:w-[26.5%] -ml-[1.5%] -mr-[1.5%] flex flex-col items-center justify-end z-35">
                  <div className="w-[90%] sm:w-[94%] drop-shadow-2xl transition-transform duration-300 hover:scale-105">
                    <img alt="Sacred Vibhudi Ash Bowl with Holy Tulsi and Jasmine" className="w-full h-auto object-contain" src={ASSETS.powderBowl} />
                  </div>
                </div>

                {/* Offering 4: Sacred Bilva Fruit & Leaves (Directly under Bilvam Soap) */}
                <div className="w-[20%] sm:w-[19.5%] flex flex-col items-center justify-end z-35">
                  <div className="w-[98%] sm:w-[105%] drop-shadow-2xl transition-transform duration-300 hover:scale-105">
                    <img alt="Sacred Bilva Bael Fruit and Consecrated Leaves" className="w-full h-auto object-contain" src={ASSETS.bilvaFruit} />
                  </div>
                </div>

                {/* Offering 5: Sacred Kadamba Flower (Directly under Kadamba Soap) */}
                <div className="w-[18%] sm:w-[17.5%] -ml-[1.5%] flex flex-col items-center justify-end z-30">
                  <div className="w-[82%] sm:w-[88%] drop-shadow-2xl transition-transform duration-300 hover:scale-105">
                    <img alt="Sacred Kadamba Blossom Flower and Leaves" className="w-full h-auto object-contain" src={ASSETS.kadambaFlower} />
                  </div>
                </div>

              </div>

            </div>
          </div>
</div>

        {/* 4-FEATURE LUXURY TRUST BAR (Inspired by Reference Design) */}
        <div className="mt-10 sm:mt-14 max-w-6xl mx-auto">
          <div className="relative bg-[#FAF5EB]/95 border border-[#E8D4B5] rounded-xl sm:rounded-2xl px-5 sm:px-8 py-5 sm:py-6 shadow-[0_4px_20px_rgba(57,37,29,0.06)]">
            {/* Ornate Corner Accents */}
            <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#C59A45]/70 rounded-tl-sm pointer-events-none"></div>
            <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#C59A45]/70 rounded-tr-sm pointer-events-none"></div>
            <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#C59A45]/70 rounded-bl-sm pointer-events-none"></div>
            <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#C59A45]/70 rounded-br-sm pointer-events-none"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
              {/* Feature 1 */}
              <div className="flex items-center gap-3 sm:gap-3.5 pr-2">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#faecd4] border border-[#E8D4B5] flex items-center justify-center shrink-0 text-[#7B5802] shadow-sm">
                  <span className="material-symbols-outlined text-[20px] sm:text-[22px]">eco</span>
                </div>
                <div>
                  <div className="font-serif font-bold text-xs sm:text-sm text-[#00271d] leading-tight">Handcrafted</div>
                  <div className="font-sans text-[11px] sm:text-xs text-[#576B65] leading-tight mt-0.5">Traditional small-batch process</div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-3 sm:gap-3.5 pr-2">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#faecd4] border border-[#E8D4B5] flex items-center justify-center shrink-0 text-[#7B5802] shadow-sm">
                  <span className="material-symbols-outlined text-[20px] sm:text-[22px]">spa</span>
                </div>
                <div>
                  <div className="font-serif font-bold text-xs sm:text-sm text-[#00271d] leading-tight">Sacred Botanicals</div>
                  <div className="font-sans text-[11px] sm:text-xs text-[#576B65] leading-tight mt-0.5">Pure Ayurvedic ingredients</div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-3 sm:gap-3.5 pr-2">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#faecd4] border border-[#E8D4B5] flex items-center justify-center shrink-0 text-[#7B5802] shadow-sm">
                  <span className="material-symbols-outlined text-[20px] sm:text-[22px]">water_drop</span>
                </div>
                <div>
                  <div className="font-serif font-bold text-xs sm:text-sm text-[#00271d] leading-tight">Virgin Plant Oils</div>
                  <div className="font-sans text-[11px] sm:text-xs text-[#576B65] leading-tight mt-0.5">Nourishing & skin-friendly</div>
                </div>
              </div>
            </div>
          </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
