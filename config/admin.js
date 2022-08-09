module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5e614de66ea23b3489814e7d58d73d81'),
  },
});
