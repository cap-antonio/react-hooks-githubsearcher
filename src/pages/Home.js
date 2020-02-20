import React, { useContext } from 'react'
import { Search } from '../components/Search'
import { Card } from '../components/Card'
import { GithubContext } from '../context/github/githubcontext'

export const Home = () => {
    const { loading, users } = useContext(GithubContext)
    return (
        <React.Fragment>
            <Search />
            <div className="row">
                {loading
                    ? <p className="text-center">Loading...</p>
                    : users.map((user) => (
                            <div className="col-sm-4 mb-4" key={user.id}>
                                <Card user={ user } />
                            </div>
                        )
                    )
                }
            </div>

        </React.Fragment>
    )
}