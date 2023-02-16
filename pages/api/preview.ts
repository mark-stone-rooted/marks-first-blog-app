import type { PageConfig } from 'next/types'

// res.setPreviewData only exists in the nodejs runtime, setting the config here allows changing the global runtime
// option in next.config.mjs without breaking preview mode
export const config: PageConfig = { runtime: 'nodejs' }

export default function preview(req, res) {
  res.setPreviewData({})
  res.writeHead(307, {Location: '/'})
  res.end()
}