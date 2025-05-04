import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure>
          <img src={src} alt={alt} className="rounded-xl" />
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      )
    },
    PublishDate: ({ date }: { date: string }) => {
      return (
        <p className="text-sm text-gray-500">
          Last updated: {new Date(date).toLocaleDateString()}
        </p>
      )
    },
  }
}