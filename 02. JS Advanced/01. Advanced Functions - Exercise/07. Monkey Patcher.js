function solve(cmd) {

    let patcher = (() => {

        let commands = {
            upvote: () => {
                this.upvotes += 1;
            },

            downvote: () => {
                this.downvotes += 1;
            },

            score: () => {
                let result = [];

                let reportedDownvotes = this.downvotes;
                let reportedUpvotes = this.upvotes;
                let balance = reportedUpvotes - reportedDownvotes;
                let totalVotes = reportedDownvotes + reportedUpvotes;

                if (totalVotes > 50) {
                    let reportedScore = Math.ceil(Math.max(reportedUpvotes, reportedDownvotes) * 0.25);
                    reportedDownvotes += reportedScore;
                    reportedUpvotes += reportedScore;
                }

                let rating = "";

                if (totalVotes < 10) {
                    rating = 'new';
                } else if (this.upvotes > (this.upvotes + this.downvotes) * 0.66) {
                    rating = 'hot';
                } else if (balance >= 0 && (this.upvotes > 100 || this.downvotes > 100)) {
                    rating = 'controversial';
                } else if (balance < 0) {
                    rating = 'unpopular';
                } else {
                    rating = 'new';
                }

                result.push(reportedUpvotes, reportedDownvotes, balance, rating);


                return result;
            }

        };

        return commands;

    })();

    return patcher[cmd]();
}

let post = {
    id: "3",
    author: "emil",
    content: "some content",
    upvotes: 100,
    downvotes: 100
};

solve.call(post, 'upvote');
solve.call(post, 'downvote');
let score = solve.call(post, 'score'); // [127, 127, 0, 'controversial']
solve.call(post, 'downvote');          // (executed 50 times)
score = solve.call(post, 'score');

