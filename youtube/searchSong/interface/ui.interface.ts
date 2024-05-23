
export interface Iyoutube{
    goto():Promise<void>;
    enterData(locator:string, data: string): Promise<void>;
    search(): Promise<void>;
    randomSong(): Promise<string | null>;
    

}