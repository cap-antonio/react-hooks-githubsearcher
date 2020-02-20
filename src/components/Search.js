import React, { useContext, useState } from 'react' 
import { AlertContext } from '../context/alert/alertContext'
import { GithubContext } from '../context/github/githubcontext'

export const Search = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const github = useContext(GithubContext)

    const onSubmit = (event) => {
        if (event.key !== 'Enter') {
            return
        }
        github.clearUsers()
        if (value.trim()) {
            github.search(value.trim())
            alert.hide()
        } else {
            alert.show('Enter something')
        }
    }
    return (
        <div className = "form-group">
            <input type="text" className="form-control"
                placeholder="Enter an user nick"
                onKeyPress={onSubmit}
                value={value}
                onChange = {event => setValue(event.target.value)}>
            </input>
        </div>
    )
}