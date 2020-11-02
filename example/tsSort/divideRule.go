package main

import (
	"fmt"
)

func main() {
	var sortArr = []int{5, 3, 6, 7, 2, 8, 1, 9}
	var reg []int = make([]int, 8)
	// fmt.Println(sortArr, len(sortArr))
	divideRule(sortArr, reg, 0, len(sortArr)-1)
}

func divideRule(arr []int, reg []int, start int, end int) {
	if start >= end {
		return
	}
	length := end - start
	mid := length>>1 + start
	var (
		start1 = start
		end1 = mid
		start2 = mid + 1
		end2 = end
	)

	divideRule(arr, reg, start1, end1)
	divideRule(arr, reg, start2, end2)
	k := start

	for start1 <= end1 && start2 <= end2 {
		if arr[start1] < arr[start2] {
			reg[k] = arr[start1]
			start1++
			k++
		} else {
			reg[k] = arr[start2]
			start2++
			k++
		}
	}

	for start1 <= end1 {
		reg[k] = arr[start1]
		k++
		start1++
	}

	for start2 <= end2 {
		reg[k] = arr[start2]
		k++
		start2++
	}

	for k = start; k <= end; k++ {
		arr[k] = reg[k]
	}

	fmt.Println(arr)
}
