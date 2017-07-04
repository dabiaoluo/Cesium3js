function programs() {
	return {
		"programs": {
			"program_id": {
				"attributes": [
					"a_normal",
					"a_position"
				],
				"fragmentShader": "fs_id",
				"name": "user-defined program name",
				"vertexShader": "vs_id",
				"extensions": {
					"extension_name": {
						"extension specific": "value"
					}
				},
				"extras": {
					"Application specific": "The extra object can contain any properties."
				}
			}
		}
	}
}