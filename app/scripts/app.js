var app = angular.module('personal-blog', ['prismic.io']);

app.config(function(PrismicProvider) {
    PrismicProvider.setApiEndpoint('https://personal-blog.prismic.io/api');
    PrismicProvider.setAccessToken('');
    PrismicProvider.setClientId('');
    PrismicProvider.setClientSecret('');
    PrismicProvider.setLinkResolver(function(ctx, doc) {
        return 'detail.html?id=' + doc.id + '&slug=' + doc.slug + ctx.maybeRefParam;
    });
});