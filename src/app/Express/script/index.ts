import { ExpressServer } from '@yukiTenshi/app';
import express,{Router} from 'express';
const router = express.Router();
router.all('/', (_, res) => {
    res.json({success: true, message: "Welcome to Yuki-Tenshi project!", guide: "You can change this message by change file app/App/Express/script/index.ts"});
})
export default router;