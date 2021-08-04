
const SavedList = ({ saved }) => {
    return (
        <ul>
            { saved.map( s => (<li>{ s }</li>)) }
        </ul>
    )
}

export default SavedList;