import AuthenticatedRoute from 'ghost-admin/routes/authenticated';
import injectService from 'ember-service/inject';

export default AuthenticatedRoute.extend({
    mediaQueries: injectService(),

    beforeModel() {
        let firstTag = this.modelFor('settings.tags').get('firstObject');

        this._super(...arguments);

        if (firstTag && !this.get('mediaQueries.maxWidth600')) {
            this.transitionTo('settings.tags.tag', firstTag);
        }
    }
});
