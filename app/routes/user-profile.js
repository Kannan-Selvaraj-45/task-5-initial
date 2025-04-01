import Route from '@ember/routing/route';

export default class UserProfileRoute extends Route {
    model() {
        return {
          name: 'John Doe',
          isPremium: true,
          isVerified: false,
          status: 'active',
        };
      }
}
