import Image, {ImageProps} from 'next/image'
import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

type ImagePropswithoutSrc = {
  hostedsrc?: string,
  absolutesrc?: string,
} & Omit<ImageProps, 'src'>

const CoverImage = ({hostedsrc,absolutesrc, alt, ...props}:ImagePropswithoutSrc) => {
  const altTag = alt || 'Cover Image'
  return (
    <>
    {hostedsrc && <Image  alt={altTag} {...props} src={hostedsrc} />}
    {absolutesrc && <Image alt={altTag} {...props} src={absolutesrc} />}
    {!hostedsrc && !absolutesrc && <Skeleton/>}
    </>
  )
}

export default CoverImage