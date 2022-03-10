import Image from 'next/image'

const TitleSection = ({ children }) => <span className='xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl text-2xl'>{children}</span>

const ColumnItem = ({ title, description, icon }) => (
    <div className='flex flex-col items-start hover:scale-110 hover:cursor-pointer transition-transform'>
        <div className='flex w-full justify-center mb-2'>
            <Image src={icon} width={50} height={50} alt="burn-icon" />
        </div>
        <span className='block w-full font-bold leading-loose text-xl text-center'>{title}</span>
        <span className='block leading-relaxed text-center mt-2'>{description}</span>
    </div>
)

const ButtonVIPGroup = () => (
    <a
        href="https://chat.whatsapp.com/HpAypFkMprbJ1vWkcMlIab"
        className='btn-whatsapp rounded-full px-5 py-3 font-bold flex gap-4 items-center hover:scale-110 hover:bg-green-700 hover:cursor-pointer transition-transform'
    >
        <i className="text-lg fa-brands fa-whatsapp"></i>
        <span>
            ÚNETE AL GRUPO VIP
        </span>
    </a>
)

const Embudo = () => {
    return (
        <>
            <div className='section-1 w-full px-auto pb-20 lg:pb-48 flex flex-col justify-center items-center text-white relative'>
                <div className='flex flex-col items-center lg:px-32 md:px-18 sm:px-10 px-5 py-36 gap-5 container'>
                    <div className='flex justify-center'>
                        <Image src={"/assets/logo.png"} alt="Logo" width={150} height={150} />
                    </div>
                    <h1 className='text-center xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl'>Opera 100% en automático y obtén hasta un 30% mensual</h1>
                    <h2 className='text-center md:text-xl sm:text-lg text-md leading-loose'>
                        Opera en el mercado de Forex, de lunes a viernes 100% en automático.<br />
                        Creado para principiantes o personas experimentadas por igual, es fácil de configurar y obtienes resultados en <span className='underline decoration-red-500 underline-offset-4'>menos de 24 horas.</span>
                    </h2>
                </div>
                <div className="elementor-shape elementor-shape-bottom" data-negative="false">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className="elementor-shape-fill" d="M0,6V0h1000v100L0,6z"></path>
                    </svg>
                </div>
            </div>

            <div className='section-2 w-full px-auto flex justify-center bg-white text-black relative'>
                <div className='flex flex-col items-center lg:px-32 md:px-18 sm:px-10 px-5 py-20 gap-5 container'>
                    <TitleSection>¿Por qué trabajar con este Bot?</TitleSection>
                    <h2 className='text-center md:text-xl sm:text-lg text-md leading-loose'>Estos son los 3 beneficios más importantes.</h2>
                    <div className='grid grid-cols-3 xl:gap-40 lg:gap-20 gap-5 mt-5'>
                        <ColumnItem
                            title="No quemas cuentas"
                            description="Usa algoritmos, redes neuronales, inteligencia artificial cuántica, para detectar el mejor momento de entrada y salida, de esta forma una operativa se cierra en cuestión de segundos"
                            icon="/assets/burn-icon.png"
                        />
                        <ColumnItem
                            title="No hay devaluación"
                            description="Sin riesgo de perdida, utiliza Inteligencia Artificial y opera en automático en USDT, todas las ganancias son en USDT. Verás como tu capital se incrementa día a día."
                            icon="/assets/devaluation-icon.png"
                        />
                        <ColumnItem
                            title="Fácil de conectar"
                            description="Usa algoritmos, redes neuronales, inteligencia artificial cuántica, para detectar el mejor momento de entrada y salida, de esta forma una operativa se cierra en cuestión de segundos"
                            icon="/assets/easy-icon.png"
                        />
                    </div>
                </div>
                <div className="elementor-shape elementor-shape-top" data-negative="false">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className="elementor-shape-fill" d="M0,6V0h1000v100L0,6z"></path>
                    </svg>
                </div>
            </div>

            <div className='section-3 w-full px-auto flex flex-col justify-center text-white relative'>
                <div className='w-full flex flex-col items-center py-36 gap-5 my-24'>
                    <iframe className="w-4/6 h-2/3 aspect-video" frameBorder="0" allowFullScreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="640" height="360" src="https://www.youtube.com/embed/SJRUjm7Wm9A?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fsistemaforexautomatico.com&amp;widgetid=1"></iframe>
                    <TitleSection>Únete al grupo VIP y recibe toda la info</TitleSection>
                    <ButtonVIPGroup />
                </div>
                <div className="elementor-shape elementor-shape-bottom" data-negative="false">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className="elementor-shape-fill" d="M0,6V0h1000v100L0,6z"></path>
                    </svg>
                </div>
            </div>

            <div className='section-4 w-full px-auto flex flex-col justify-center relative bg-white'>
                <div className='w-full flex flex-col items-center py-36 gap-5'>
                    <TitleSection>Testimonios</TitleSection>
                    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 w-8/12 mh-8'>
                        <Image src="/assets/testimonios/1.jpeg" width={80} height={160} layout="responsive" />
                        <Image src="/assets/testimonios/2.jpeg" width={80} height={160} layout="responsive" />
                        <Image src="/assets/testimonios/3.jpeg" width={80} height={160} layout="responsive" />
                        <Image src="/assets/testimonios/4.jpeg" width={80} height={160} layout="responsive" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Embudo