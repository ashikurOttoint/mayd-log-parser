import {TextParser} from "../helpers/textParser";

test('Text parser', () => {
   const tParser = new TextParser()
   const logInput = `2021-08-09T02:12:51.258Z - debug - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e821","details":"About to request user orders list","userId":16}
   2021-08-09T02:12:51.259Z - error - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Cannot find user orders list","code": 404,"err":"Not found"}`
   const expected = [{"err": "Not found", "loglevel": "error", "timestamp": 1628475171259, "transactionId": "9abc55b2-807b-4361-9dbe-aa88b1b2e978"}];
   const exampleJsonText= JSON.stringify({hi:"hello"});
   expect(tParser.isoToUnix('2021-08-09T02:12:51.259Z')).toBe(1628475171259);
   expect(tParser.parse(logInput)).toBe(expected)
  
  });