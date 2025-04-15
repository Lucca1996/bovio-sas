'use client'

import { useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface FinishCustomizerProps {
  finishes: {
    id: string
    type: string
    priceMultiplier: number
    image: string
  }[]
  basePrice: number
}

export const FinishCustomizer = ({ finishes, basePrice }: FinishCustomizerProps) => {
  const [selectedFinish, setSelectedFinish] = useState(0)
  const [quantity, setQuantity] = useState(1)

  console.log('Datos de finishes:', finishes)
  console.log('Finish actual:', finishes[selectedFinish])

  const currentFinish = finishes[selectedFinish]
  const totalPrice = basePrice * currentFinish.priceMultiplier * quantity

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Personaliza tu producto</h3>
        <RadioGroup
          value={selectedFinish.toString()}
          onValueChange={(value) => setSelectedFinish(Number(value))}
          className="grid grid-cols-3 gap-2"
        >
          {finishes.map((finish, index) => (
            <div key={finish.id} className="aspect-square">
              <RadioGroupItem
                value={index.toString()}
                id={`finish-${index}`}
                className="peer sr-only"
              />
              <Label
                htmlFor={`finish-${index}`}
                className="flex flex-col items-center justify-center h-full rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <div className="relative w-32 aspect-square mb-1">
                  <Image
                    src={`/api/media/file/${finish.image}`}
                    alt={finish.type}
                    fill
                    className="object-cover rounded-md"
                    unoptimized
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium">{finish.type}</p>
                  <p className="text-xs text-muted-foreground">
                    +{((finish.priceMultiplier - 1) * 100).toFixed(0)}%
                  </p>
                </div>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Cantidad</h3>
        <Slider
          value={[quantity]}
          onValueChange={([value]) => setQuantity(value)}
          min={1}
          max={10}
          step={1}
          className="w-full"
        />
        <div className="flex justify-between mt-2">
          <span className="text-sm text-muted-foreground">1 unidad</span>
          <span className="text-sm text-muted-foreground">10 unidades</span>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-2xl font-bold">${totalPrice.toLocaleString('es-AR')}</span>
        </div>
      </div>
    </div>
  )
}
