'use client'

import MediaItem from '@/components/MediaItem'
import { Song } from '@/types'

interface SearchContentProps {
  songs: Song[]
}

const SearchContent: React.FC<SearchContentProps> = ({ songs }) => {
  if (songs.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No songs found
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-y-2 w-full px-6 ">
      {songs.map((el) => (
        <div className="flex items-center gap-x-4 w-full" key={el.id}>
          <div className="flex-1">
            <MediaItem data={el} onClick={() => {}} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default SearchContent
