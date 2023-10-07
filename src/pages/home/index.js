import { Helmet } from 'react-helmet';

function Home() {
    return (
        <>
            <Helmet>
                <title>Home Page</title>
                <meta name="description" content="This is the home page." />
            </Helmet>
            <div>
                <h1 className="header">Home</h1>
                <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
        </>

    )
}

export default Home;