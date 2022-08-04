const router = express.Router();
const publiCtrl = require('../controllers/post');

router.get("/", publiCtrl.getPubli);
router.get("/publication/:owner", publiCtrl.getPubliByOwner);
router.post("/add", publiCtrl.createPubli);

module.exports = router;