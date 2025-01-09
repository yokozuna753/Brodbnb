const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const bookingsRouter = require('./bookings.js');
const reviewsRouter = require('./reviews.js');
const spotsRouter = require('./spots.js');
const spotImagesRouter = require('./spot-images.js');
const reviewImagesRouter = require('./review-images')
const { restoreUser } = require("../../utils/auth.js");

// Connect restoreUser middleware to the API router
  // If current user session is valid, set req.user to the user in the database
  // If current user session is not valid, set req.user to null
router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/bookings', bookingsRouter);

router.use('/reviews', reviewsRouter);

router.use('/spots', spotsRouter);

router.use('/spot-images', spotImagesRouter);

router.use('/review-images', reviewImagesRouter)


//! Keep this route to test frontend setup in Mod 5
router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;