import dotenv from 'dotenv';
import main from './libs/messages';
dotenv.config();

// 早安、午安、晚安 => 由环境变量控制
main();
