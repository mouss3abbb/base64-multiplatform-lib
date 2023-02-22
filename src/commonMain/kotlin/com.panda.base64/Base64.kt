package com.panda.base64

interface Base64Encoder{
    fun encode(src: ByteArray): ByteArray
    fun encodeToString(src: ByteArray): String = buildString (encode(src).size){
            encode(src).forEach { append(it.toInt().toChar()) }
    }
}

expect object Base64Factory {
    fun createEncoder(): Base64Encoder

}