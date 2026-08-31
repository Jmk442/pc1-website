import { craftElements } from '@/data/craft'

export default function CraftGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
      {craftElements.map(({ letter, word, explanation }) => (
        <div key={letter} className="bg-primary text-white rounded-xl p-5 text-left sm:text-center">
          <div className="text-accent text-3xl font-black mb-1">{letter}</div>
          <div className="text-white text-sm font-bold uppercase tracking-widest mb-2">{word}</div>
          <p className="text-white/60 text-xs leading-relaxed hidden sm:block">{explanation}</p>
        </div>
      ))}
    </div>
  )
}
