import { Controller, endpoint, value } from '@kitcon/node/annotations';
import { FilterDTO } from '../dto/filter.dto';

@Controller()
export class SeoController {

    @endpoint("GET /api/seo")
    all(@value('query') query: FilterDTO) {
        return "SeoController all, " + query.q;
    }
}