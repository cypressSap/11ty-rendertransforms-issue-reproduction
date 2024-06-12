import { InputPathToUrlTransformPlugin } from '@11ty/eleventy';
import pluginRss from '@11ty/eleventy-plugin-rss';

export default function (eleventyConfig) {
	eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
	eleventyConfig.addPlugin(pluginRss);
}
