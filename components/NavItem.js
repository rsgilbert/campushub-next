import Icon from './Icon'
import Item from './Item'
export default function NavItem(props) {

    return (
        <Item className="btn d-inline-flex">
            <Icon className={`${props.icon} fa-2x text-light`} />
            <div className="text-light px-2">{props.title}</div>
        </Item>
    )
}
