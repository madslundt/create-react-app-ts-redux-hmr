import * as React from 'react';

interface IPage {
    currentPage: number;
    totalPages: number;

    gotoPage(pageIndex: number): void;
}

const containerStyle = {
    listStyleType: 'none',
    cursor: 'pointer'
};

const PageControl = (props: IPage) => {
    const listPages = () => {
        const pages: number[] = [];
        for (let i = 0; i < props.totalPages; i++) {
            pages.push(i);
        }

        return pages;
    };

    return (
        <ol style={containerStyle}>
            {listPages().map(page => (
                <li
                    key={page}
                    style={page === props.currentPage ? {fontWeight: 700} : {}}
                    onClick={() => props.gotoPage(page)}
                >
                    Page {page + 1}
                </li>
            ))}
        </ol>
    );
};

export default PageControl;

export {
    IPage,
};
