
export default function ProductDetailsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className='bg-black'>
          {children}
          <h2 className="text-red-200">Featured products</h2>
          </body>
      </html>
    )
  }
  