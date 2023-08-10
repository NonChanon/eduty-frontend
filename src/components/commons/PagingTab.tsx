import { Icon } from "@iconify/react";
import { Button, IconButton } from "@material-tailwind/react";
import { useState } from "react";

type thisModel = {
    handlePaging: (pageNo: string) => void,
    totalPage: number
}

export const PagingTab = (props:thisModel) => {
    const [active, setActive] = useState(1);

    const getItemProps = (index: number) =>
    ({
    variant: active === index ? "filled" : "text",
    className:
        active === index
        ? "bg-black text-white rounded"
        : "text-black hover:bg-gray-100",
    onClick: () => {
        setActive(index);
        props.handlePaging(index as unknown as string);
    },
    } as any);
    const next = () => {
        if (active === props.totalPage) return;
        setActive(active + 1);
        props.handlePaging((active + 1) as unknown as string)
    };
    const prev = () => {
        if (active === 1) return;
        setActive(active - 1);
        props.handlePaging((active - 1) as unknown as string)
    };
    const renderPageNumber = (totalPage: number) => {
        let list:any[] = [];
        for(let i = 1; i <= totalPage; i++){
            list.push(
                <IconButton key={`page${i}`} {...getItemProps(i)} size="sm">{i}</IconButton>
            )
        }
        return (
            <div className="flex items-center gap-2">{list}</div>
        )
    };
    return (
            <div className="flex justify-center items-center mt-5">
                <Button
                    variant="text"
                    size="sm"
                    className="flex items-center gap-2 font-Montserrat normal-case text-black"
                    onClick={prev}
                    disabled={active === 1}
                    nonce={undefined} 
                    onResize={undefined} 
                    onResizeCapture={undefined}
                >
                    <Icon icon="ep:arrow-left-bold" /> Previous
                </Button>
                {renderPageNumber(props.totalPage)}
                <Button
                    variant="text"
                    size="sm"
                    className="flex items-center gap-2 font-Montserrat normal-case text-black"
                    onClick={next}
                    disabled={active === props.totalPage} nonce={undefined} onResize={undefined} onResizeCapture={undefined}
                >
                    Next
                    <Icon icon="ep:arrow-right-bold" />
                </Button>
            </div>
    );
}