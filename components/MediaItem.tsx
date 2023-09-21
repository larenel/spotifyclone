'use client'

import useLoadImage from '@/hooks/useLoadImage'
import { Song } from '@/types'
import Image from 'next/image'

interface MediaItemProps {
  onClick?: (id: string) => void
  data: Song
}
const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
  const imageUrl = useLoadImage(data)

  const handleClick = () => {
    if (onClick) return onClick(data.id)
  }

  return (
    <div
      onClick={handleClick}
      className="flex items-center  gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md"
    >
      <div className="relative rounded-md min-h-[48px]  min-w-[48px] overflow-hidden ">
        <Image
          src={
            imageUrl ||
            'https://images.unsplash.com/photo-1496062031456-07b8f162a322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D'
          }
          fill
          alt="Media item"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-y-1 overflow-hidden ">
        <p className="text-white truncate">{data.title}</p>
        <p className="text-neutral-400 text-sm truncate">{data.author}</p>
      </div>
    </div>
  )
}

export default MediaItem
