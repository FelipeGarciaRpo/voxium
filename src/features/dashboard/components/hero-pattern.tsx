import { WavyBackground } from "@/components/ui/wavy-background";

export function HeroPattern() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block">
      <WavyBackground
        colors={[
          "oklch(0.488 0.218 260)", // --primary (azul vibrante ~blue-700)
          "oklch(0.62 0.19 230)",   // --chart-2 (azul cian medio)
          "oklch(0.72 0.15 210)",   // --chart-3 (azul claro cian)
          "oklch(0.55 0.22 285)",   // --chart-4 (violeta-azul)
          "oklch(0.68 0.17 250)",   // --chart-5 (azul suave)
        ]}
        backgroundFill="transparent"
        blur={10}
        speed="slow"
        waveOpacity={0.4}
        waveWidth={60}
        waveYOffset={250}
        containerClassName="h-full"
        className="hidden"
      />
    </div>
  );
}