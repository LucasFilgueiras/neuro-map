import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ style: 'normal', weight: ['500'], subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Neuro Map',
	description: 'Neuro Map',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-br">
			<body className={poppins.className}>
				{children}
			</body>
		</html>
	)
}
