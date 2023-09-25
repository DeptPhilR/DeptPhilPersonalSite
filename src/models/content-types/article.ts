import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
import { type ArticleTopics } from '../taxonomies/manufacturer';
import { type Metadata } from '../content-type-snippets/metadata';

/**
 * Generated by '@kontent-ai/model-generator@6.5.0'
 *
 * Article
 * Id: 115171cb-49a7-4fbc-84aa-f3a614cbdf55
 * Codename: article
 */
export type Article = IContentItem<{
    /**
     * ArticleContent (rich_text)
     * Required: true
     * Id: 1dd2a0ac-87bc-45ef-9c01-0f6f7c30a65d
     * Codename: articlecontent
     */
    articlecontent: Elements.RichTextElement;

    /**
     * ArticleHeaderImage (asset)
     * Required: false
     * Id: abe8e6ea-9663-4189-8bad-d25c4e5577d7
     * Codename: articleheaderimage
     */
    articleheaderimage: Elements.AssetsElement;

    /**
     * Article Topics (taxonomy)
     * Required: false
     * Id: 967f226e-2705-4d35-ab6e-0b0e15d43d7a
     * Codename: articletaxonomy
     */
    articletaxonomy: Elements.TaxonomyElement<ArticleTopics>;

    /**
     * Summary (rich_text)
     * Required: false
     * Id: dbf8b1b5-2c50-4a77-b237-b41cce430822
     * Codename: summary
     */
    summary: Elements.RichTextElement;

    /**
     * Title (text)
     * Required: true
     * Id: 2e351eee-9826-4190-aa23-68294053a1d2
     * Codename: title
     */
    title: Elements.TextElement;
}> &
    Metadata;
