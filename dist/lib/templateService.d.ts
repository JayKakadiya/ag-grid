// Type definitions for ag-grid v12.0.2
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
export declare class TemplateService {
    private $scope;
    private templateCache;
    private waitingCallbacks;
    getTemplate(url: any, callback: any): any;
    handleHttpResult(httpResult: any, url: any): void;
}
