const shorten = async (url: string) => (await fetch(`http://tinyurl.com/api-create.php?url=${url}`)).text();

export {shorten}
