import express,{Router} from 'express';
import { RESTResp } from '@yukiTenshi/utils'
const router = express.Router();
router.all('/', (_, res) => {
    const response: RESTResp<never> = {
        success: false,
        statusCode: 404,
        message: 'Here is test path by using /tenshi/test.js',
    }
    res.status(404).send(response)
})
export default router;