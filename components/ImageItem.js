import Image from './Image'

export default function ImageItem(props) {

    return (
        <div className="p-4 col-10 border">
            <Image src={props.src} />
        </div>
    )
}