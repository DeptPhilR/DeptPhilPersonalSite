import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
import { type Client } from './client';

/**
 * Generated by '@kontent-ai/model-generator@6.5.0'
 *
 * Page
 * Id: 02060b17-d31b-4ac8-a821-dc0790f7f19c
 * Codename: page
 */
export type Page = IContentItem<{
    /**
     * Body (rich_text)
     * Required: true
     * Id: a9ac071f-a117-40a0-992b-c5466d189a82
     * Codename: body
     */
    body: Elements.RichTextElement;

    /**
     * Client List (modular_content)
     * Required: false
     * Id: d8a50e4e-9e63-4ea3-9b7c-44ff29e823ba
     * Codename: client_list
     */
    client_list: Elements.LinkedItemsElement<Client>;

    /**
     * Slug (url_slug)
     * Required: false
     * Id: f1e3fd8b-5573-42ee-b34c-7f1188b041fd
     * Codename: slug
     */
    slug: Elements.UrlSlugElement;

    /**
     * Title (text)
     * Required: false
     * Id: b13922c4-8649-4dc8-a23d-b69e11fe22ac
     * Codename: title
     */
    title: Elements.TextElement;
}>;
