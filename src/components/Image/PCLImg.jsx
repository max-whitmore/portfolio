/*import { StaticImage } from "gatsby-plugin-image"
export function PCLAsset() {
  return (
    <StaticImage
      src="../images/pcl/pcl.png"
      alt="Pearson College London website"
      placeholder="blurred"
      layout="fixed"
      width={200}
      height={200}
    />
  )
} */

import { StaticImage } from "gatsby-plugin-image"
export function Kitten() {
  return <StaticImage src="https://placekitten.com/800/600" alt="A kitten" />
}