'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
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
};

interface MDXClientProps {
    mdxSource: MDXRemoteSerializeResult;
}

export default function MDXClient({ mdxSource }: MDXClientProps) {
    return (
        <MDXRemote {...mdxSource} components={components} />
    );
}
