

interface BlobProps {
    height: string;
    width: string;
    color: string;
    top: string;
    left: string;
}

function Blob({ height, width, color, top, left }: BlobProps) {
    const style = {
    
        top: top,
        left: left,
        backgroundColor: color,
        width: width,
        height: height,
    };

    return (
        <div className="-z-10 absolute blur-[100px] opacity-20 rounded-full" style={style}></div>
    );
}

export default Blob;