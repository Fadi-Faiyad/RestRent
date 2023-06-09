const React = require('react')
const Default = require('./default')

function Home() {
    return (
        <Default>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/fire.jpg" alt="Campfire" />
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                    </a>
            </main>
        </Default>
    )
}

module.exports = Home