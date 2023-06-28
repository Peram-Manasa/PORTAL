import { SPFI } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import { BirthdaysMonth } from "../models/BirthdayMonths";
export declare class SharePointService {
    private readonly _spfi;
    constructor(spfi: SPFI);
    GetBirthdays(): Promise<Array<BirthdaysMonth>>;
    private GenerateCurrentMonths;
    private GetMonthIndex;
    private ProcessData;
}
//# sourceMappingURL=SharepointService.d.ts.map