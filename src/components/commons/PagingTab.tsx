import { Icon } from "@iconify/react";
import { Button, IconButton } from "@material-tailwind/react";
import { numberToString } from "../../utils/ConvertDataType";

type thisModel = {
    handlePaging: (pageNo: string) => void,
    handleSearch: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, pageNo: string) => void,
    onSearch: boolean,
    totalPage: number,
    active: number,
    setActive: (index: number) => void
}

export const PagingTab = (props:thisModel) => {
    const getItemProps = (index: number) =>
    ({
    variant: props.active === index ? "filled" : "text",
    className:
        props.active === index
        ? "bg-black text-white rounded"
        : "text-black hover:bg-gray-100",
    onClick: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.setActive(index);
        props.onSearch === true ? props.handleSearch(e, numberToString(index)) : props.handlePaging(index as unknown as string)
    },
    } as any);
    const next = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (props.active === props.totalPage) return;
        props.setActive(props.active + 1);
        props.onSearch === true ? props.handleSearch(e, numberToString(props.active + 1)) : props.handlePaging((props.active + 1) as unknown as string)
    };
    const prev = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (props.active === 1) return;
        props.setActive(props.active - 1);
        props.onSearch === true ? props.handleSearch(e, numberToString(props.active + 1)) : props.handlePaging((props.active - 1) as unknown as string)
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
                    onClick={(e) => prev(e)}
                    disabled={props.active === 1}
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
                    onClick={(e) => next(e)}
                    disabled={props.active === props.totalPage} nonce={undefined} onResize={undefined} onResizeCapture={undefined}
                >
                    Next
                    <Icon icon="ep:arrow-right-bold" />
                </Button>
            </div>
    );
}