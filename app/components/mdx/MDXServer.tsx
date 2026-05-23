import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import {
    Tabs,
    Tab,
    Callout,
    Definition,
    Compare,
    Item,
    VideoEmbed,
    ImageGallery,
    Button,
    GoogleDriveEmbed,
    ImageWithText,
    Image,
    Example,
    Steps,
    Step,
    Formula,
    Accordion,
    AccordionItem,
    Timeline,
    TimelineItem,
    Vocabulary,
    Term,
    Pre,
    Quiz,
    Choice,
    KeyPoints,
    Point,
    Quote,
    FeedbackForm,
    MathGraph,
    NumberLine,
    RightTriangle,
    UnitCircle,
    Quadrants,
    DirectedAngles,
    ObliqueTriangle,
    ElevationDepression,
} from './MDXComponents';

const components = {
    Tabs,
    Tab,
    Callout,
    Definition,
    Compare,
    Item,
    VideoEmbed,
    ImageGallery,
    Button,
    GoogleDriveEmbed,
    ImageWithText,
    Image,
    Example,
    Steps,
    Step,
    Formula,
    Accordion,
    AccordionItem,
    Timeline,
    TimelineItem,
    Vocabulary,
    Term,
    pre: Pre,
    Quiz,
    Choice,
    KeyPoints,
    Point,
    Quote,
    FeedbackForm,
    MathGraph,
    NumberLine,
    RightTriangle,
    UnitCircle,
    Quadrants,
    DirectedAngles,
    ObliqueTriangle,
    ElevationDepression,
};

interface MDXServerProps {
    source: string;
}

export default function MDXServer({ source }: MDXServerProps) {
    return (
        <MDXRemote
            source={source}
            components={components}
            options={{
                parseFrontmatter: true,
                mdxOptions: {
                    remarkPlugins: [remarkGfm, remarkMath],
                    rehypePlugins: [rehypeKatex],
                },
            }}
        />
    );
}
