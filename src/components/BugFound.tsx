import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const BugFound = () => {
    return (
        <div className="border rounded-lg p-2.5 bg-black dark:bg-yellow-500">
            <p className="text-white dark:text-black">Oh wow! You just found a bug!</p>
            <Dialog>
                <DialogTrigger className="text-yellow-500 dark:text-blue-800 font-medium">
                    Report this to <span>AB Memon</span>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>The bug has been detected!</DialogTitle>
                        <DialogDescription>
                            AB Memon has purposefully left this issue as it. He thinks that this is how it should be. In
                            future, if there are too many complaints regarding this issue then he will change it. Right
                            now, he is busy working on more important things. But, you have really done a great job on
                            finding this problem. Hats off!
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default BugFound;
