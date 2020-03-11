{
  //
  //
  let set = new Set();
  console.log(set);
  //
  set.add(1);
  set.add(2);
  set.add(3);
  console.log(set);

  //
  let set2 = new Set([1,2,3,4]);
  console.log(set2)
  set2.add(5)
  console.log(set2)

  let f = set2.delete(1)
  console.log(f)
  console.log(set2)

  set2.clear();
  console.log(set2);

  set.forEach(v=>{
    console.log(v)
  });
  console.log(set.keys());
  console.log(set.values());
  console.log(set.entries());
  f = set.has(1);
  console.log(f);
}

