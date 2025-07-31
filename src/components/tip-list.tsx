import { CheckCircle } from "lucide-react"

interface TipListProps {
  tips: Array<{
    title: string
    description: string
  }>
}

export function TipList({ tips }: TipListProps) {
  return (
    <div className="space-y-4">
      {tips.map((tip, index) => (
        <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg border border-border">
          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-foreground mb-1">{tip.title}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{tip.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}