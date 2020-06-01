class Prawniczek extends React.Component {

    render() {
        // debugger
        return (
            <>
                <Header />
                <div className='panel'>
                    <LawCrimeArticle />
                </div>
            </>
        )
    }
}

ReactDOM.render(<Prawniczek />, document.getElementById('root'))

