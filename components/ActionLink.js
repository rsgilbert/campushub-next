import NavItem from './NavItem'
import Link from 'next/link'

const ActionLink = props => (
    <Link href={props.href}>
        <a>
            <NavItem title={props.title} icon={props.icon}/>
        </a>
</Link>
)

export default ActionLink