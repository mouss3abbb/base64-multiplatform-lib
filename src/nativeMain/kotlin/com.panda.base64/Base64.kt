package com.panda.base64

private val B64_ALPHA = generateALPHA()
private val B64_MASK: Byte = 0x3f
private val B64_PAD: Char = '='
private val B64_ALPHA_INV = IntArray(256){
    B64_ALPHA.indexOf(it.toChar())
}

private fun Int.toBase64(): Char = B64_ALPHA[this]

private fun generateALPHA(): String{
    var result = ""
    for (i in 'A'..'Z'){
        result += i
    }
    for (i in 'a'..'z'){
        result += i
    }
    for (i in 0..9){
        result += (i+48).toChar()
    }
    result += "+/"
    return result
}

actual object Base64Factory {
    actual fun createEncoder(): Base64Encoder = NativeBase64Encoder
}

object NativeBase64Encoder: Base64Encoder{
    override fun encode(src: ByteArray): ByteArray {
        fun ByteArray.getOrZero(index: Int): Int = if (index >= size) 0 else get(index).toInt()

        val result  = ArrayList<Byte>(4*src.size/3)
        var index = 0
        while (index < src.size){
            val symbolsLeft = src.size - index
            val padSize = if(src.size >= 3) 0 else (3 - symbolsLeft)*8/6
            val chunk = (src.getOrZero(index) shl 16) or (src.getOrZero(index+1) shl 8) or src.getOrZero(index+2)
            index += 3
            for (i in 3 downTo padSize){
                val char = (chunk shr (6*i) and B64_MASK.toInt())
                result.add(char.toBase64().code.toByte())
            }
            repeat(padSize){
                result.add(B64_PAD.code.toByte())
            }
        }
        return result.toByteArray()
    }

}