function Header() {
    return(
        <header className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <h1 className="inline-flex animate-text-gradient bg-gradient-to-r from-[#819ca0] via-[#516264] to-[#ffffff] bg-[200%_auto] bg-clip-text text-2xl text-transparent">Gustavo Müller Leonini Machado</h1>
            <h1 className="text-[#d0e1e4]">Software Developer</h1>
            <p className="text-[#d0e1e4]">Brazil, Rio Grande do Sul, Porto Alegre</p>
          </div>
        </div>
        <div className="h-32 w-32 rounded-full full-center">
          <img src="../../images/avatar.jpeg" className="rounded-full"></img>
        </div>
      </header>
    )
}

export default Header
