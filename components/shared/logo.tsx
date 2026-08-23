import Link from 'next/link'


const Logo = () => {
  return (
     <Link 
            href="/" 
            className="font-space text-xl font-bold tracking-tight text-foreground transition-opacity hover:opacity-80"
          >
            NEXUS<span className="text-primary font-light">.STORE</span>
          </Link>
  )
}

export default Logo