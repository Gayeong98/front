export interface IPreviewItem {
    img: string | null;
    writerProfile: string;
    writerNickname: string;
    writeDate: string;
    boardTitle: string;
    boardContent: string;
    likeCount: number;
    commentCount: number;
    viewCount: number;

    boardNumber: number;
}