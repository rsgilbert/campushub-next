import Link from 'next/link'
export default function Park(props) {

    return (
        <Link href="/parks/[id]" as={`/parks/${props.park.id}`}>
            <div className="list-group-item list-group-item-action">
                <div>
                    <b>{props.park.name}</b>
                </div>
                <div>
                    { props.park.location  && props.park.location.place }
                </div>
            </div>
        </Link>
    )
}
