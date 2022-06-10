declare var _paq: any;
export class Analytics {
    static pageTracking(route, pageTitle) {
		console.log('PAGE Event >>>>> '+pageTitle);
        if (_paq) {
            _paq.push(['setCustomUrl', route]);
            _paq.push(['setDocumentTitle', pageTitle]);
            //_paq.push(['trackPageView']);
        }
    }
    static dispatachMessageEvt(evtType, evtName, evtCategory, evtAction, evtValue, evtDetails) {
        console.log('CUSTOM Event >>>>>');
        const evtConfig = {
            event: evtType,
            eventName: evtName,
            eventCategory: evtCategory,
            eventAction: evtAction,
            eventValue: evtValue,
            eventDetail: evtDetails
        };
        const eventToTrack = new CustomEvent(evtConfig.event, { detail: evtConfig });
        document.dispatchEvent(eventToTrack);
    }
}
