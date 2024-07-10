export const metadata = {
    title: 'Next.js',
    description: 'The React Framework for Production',
}

export default function RootLayout({ children}){
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}