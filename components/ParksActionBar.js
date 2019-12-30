import ActionBar from './ActionBar'
import ActionLink from './ActionLink'

const ParksActionBar = props => (
    <ActionBar>
        <ActionLink
            href="/"
            title="Home"
            icon="fa-home"
            />
        <ActionLink
            href="/manager"
            title="Manager"
            icon="fa-tools"
            />
    </ActionBar>

)

export default ParksActionBar