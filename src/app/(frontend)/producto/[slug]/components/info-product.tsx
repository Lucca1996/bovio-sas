import { useState } from 'react'
import { IconButton } from '../../../components/icon-button'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { formatPrice } from '../../../lib/formatPrice'
import { ProductType } from '../../../types/product'
import { Heart, ShoppingCart } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

export type InfoProductProps = {
  product: ProductType
}

export const InfoProduct = (props: InfoProductProps) => {
  const { product } = props
  const [quantity, setQuantity] = useState(1)
  const [selectedWood, setSelectedWood] = useState('pino')

  const handleQuantityChange = (value: string) => {
    setQuantity(Number(value))
  }

  const handleWoodChange = (checked: boolean) => {
    setSelectedWood(checked ? 'caoba' : 'pino')
  }

  const totalPrice = product.price * quantity

  return (
    <div className="px-6">
      <div className="justify-between mb-3 sm:flex">
        <h1 className="text-2xl">{product.title}</h1>
        <div className="flex items-center justify-between gap-3">
          <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
            {product.style.title}
          </p>
          <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
            {product.category.name}
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <p>{product.description}</p>
      <Separator className="my-4" />
      <div className="flex items-center space-x-2">
        <p className="text-gray-600 text-sm">Madera:</p>
        <Label htmlFor="wood-type">Pino</Label>
        <Switch
          id="wood-type"
          checked={selectedWood === 'caoba'}
          onCheckedChange={handleWoodChange}
        />
        <Label htmlFor="wood-type">Caoba</Label>
      </div>
      <Separator className="my-4" />
      <div className="flex items-center">
        <Select value={String(quantity)} onValueChange={handleQuantityChange}>
          <SelectTrigger className="w-16 mr-5">
            <SelectValue placeholder="1" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Cantidad</SelectLabel>
              {[1, 2, 3, 4, 5].map((num) => (
                <SelectItem key={num} value={String(num)}>
                  {num}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <p className="text-2xl">{formatPrice(totalPrice)}</p>
      </div>
      <div className="flex items-center gap-5 mt-4">
        <Button className="w-full">Comprar</Button>
        <IconButton
          onClick={() => console.log('Add to cart')}
          icon={<ShoppingCart size={20} className="fill-black dark:fill-white" />}
          className="text-gray-600"
        />
        <IconButton
          onClick={() => console.log('Add to favorites')}
          icon={<Heart size={20} className="fill-black dark:fill-white" />}
          className="text-gray-600"
        />
      </div>
    </div>
  )
}
