import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">Discover & Play
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> Games</span>
        </h1>
        <p className="desc text-center">
            Gamer Boy is an open-source tool for gamers to discover new as well as old skool 
            OG games and know every thing about them.
        </p>

        <Feed/>
    </section>
  )
}

export default Home