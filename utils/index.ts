interface ArrowDesign {
    id: string;
    svg: string;
}

export const arrows: ArrowDesign[] = [
    {
        id: "arrow-1",
        svg: "../static/arrows/arrow-1.svg",
    },
    {
        id: "arrow-2",
        svg: "../static/arrows/arrow-2.svg",
    },
    {
        id: "arrow-3",
        svg: "../static/arrows/arrow-3.svg",
    },
    {
        id: "arrow-4",
        svg: "../static/arrows/arrow-4.svg",
    },
    {
        id: "arrow-5",
        svg: "../static/arrows/arrow-5.svg",
    },
    {
        id: "arrow-6",
        svg: "../static/arrows/arrow-6.svg",
    },
    {
        id: "arrow-7",
        svg: "../static/arrows/arrow-7.svg",
    },
    {
        id: "arrow-8",
        svg: "../static/arrows/arrow-8.svg",
    },
    {
        id: "arrow-9",
        svg: "../static/arrows/arrow-9.svg",
    },
    {
        id: "arrow-10",
        svg: "../static/arrows/arrow-10.svg",
    },
    {
        id: "arrow-11",
        svg: "../static/arrows/arrow-11.svg",
    },
    {
        id: "arrow-12",
        svg: "../static/arrows/arrow-12.svg",
    },
    {
        id: "arrow-13",
        svg: "../static/arrows/arrow-13.svg",
    },
    {
        id: "arrow-14",
        svg: "../static/arrows/arrow-14.svg",
    },
    {
        id: "arrow-15",
        svg: "../static/arrows/arrow-15.svg",
    },
    {
        id: "arrow-16",
        svg: "../static/arrows/arrow-16.svg",
    },
    {
        id: "arrow-17",
        svg: "../static/arrows/arrow-17.svg",
    },
    {
        id: "arrow-18",
        svg: "../static/arrows/arrow-18.svg",
    },
    {
        id: "arrow-19",
        svg: "../static/arrows/arrow-19.svg",
    },
    {
        id: "arrow-20",
        svg: "../static/arrows/arrow-20.svg",
    },
    {
        id: "arrow-21",
        svg: "../static/arrows/arrow-21.svg",
    },
    {
        id: "arrow-22",
        svg: "../static/arrows/arrow-22.svg",
    },
    {
        id: "arrow-23",
        svg: "../static/arrows/arrow-23.svg",
    },
    {
        id: "arrow-24",
        svg: "../static/arrows/arrow-24.svg",
    },
    {
        id: "arrow-25",
        svg: "../static/arrows/arrow-25.svg",
    },
    {
        id: "arrow-26",
        svg: "../static/arrows/arrow-26.svg",
    },
    {
        id: "arrow-27",
        svg: "../static/arrows/arrow-27.svg",
    },
    {
        id: "arrow-28",
        svg: "../static/arrows/arrow-28.svg",
    },
    {
        id: "arrow-29",
        svg: "../static/arrows/arrow-29.svg",
    },
    {
        id: "arrow-30",
        svg: "../static/arrows/arrow-30.svg",
    },
    {
        id: "arrow-31",
        svg: "../static/arrows/arrow-31.svg",
    },
    {
        id: "arrow-32",
        svg: "../static/arrows/arrow-32.svg",
    },
    {
        id: "arrow-33",
        svg: "../static/arrows/arrow-33.svg",
    },
    {
        id: "arrow-34",
        svg: "../static/arrows/arrow-34.svg",
    },
    {
        id: "arrow-35",
        svg: "../static/arrows/arrow-35.svg",
    },
    {
        id: "arrow-36",
        svg: "../static/arrows/arrow-36.svg",
    },
    {
        id: "arrow-37",
        svg: "../static/arrows/arrow-37.svg",
    },
    {
        id: "arrow-38",
        svg: "../static/arrows/arrow-38.svg",
    },
    {
        id: "arrow-39",
        svg: "../static/arrows/arrow-39.svg",
    },
    {
        id: "arrow-40",
        svg: "../static/arrows/arrow-40.svg",
    },
    {
        id: "arrow-41",
        svg: "../static/arrows/arrow-41.svg",
    }
    ,
    {
        id: "arrow-42",
        svg: "../static/arrows/arrow-42.svg",
    },
    {
        id: "arrow-43",
        svg: "../static/arrows/arrow-43.svg",
    },
    {
        id: "arrow-44",
        svg: "../static/arrows/arrow-44.svg",
    },
    {
        id: "arrow-45",
        svg: "../static/arrows/arrow-45.svg",
    }
];

export const fetchSvgContent = async (path: string): Promise<string> => {
    const response = await fetch(path);
    return response.text();
};

export const createReactComponentString = (svgContent: string): string => {
    const code = `import React from 'react';
      const Arrow = () => (
        ${svgContent}
);

export default Arrow;`;
    return code;
};
