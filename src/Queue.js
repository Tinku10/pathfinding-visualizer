//code.iamkate.com

function Queue() {
    var a = [],
        b = 0;
    this.getLength = function () {
        return a.length - b;
    };
    this.isEmpty = function () {
        if (a.length == 0) {
            return true
        }
        return false;
    };
    this.enqueue = function (b) {
        a.push(b);
    };
    this.dequeue = function () {
        if (0 != a.length) {
            var c = a[b];
            2 * ++b >= a.length && ((a = a.slice(b)), (b = 0));
            return c;
        }
    };
    this.peek = function () {
        return 0 < a.length ? a[b] : void 0;
    };
    this.show = function(){
        return a;
    }
}
export default Queue;
