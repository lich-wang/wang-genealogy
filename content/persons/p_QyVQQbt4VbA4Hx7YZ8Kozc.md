---
schema: wang-person/v1
id: p_QyVQQbt4VbA4Hx7YZ8Kozc
status: active
merged_into: null
display_name: 王宗麒
cbdb_id: 239754
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xdtftggsN4FAVAyU16Z53S
        subject_person_id: p_QyVQQbt4VbA4Hx7YZ8Kozc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗麒，明人物。正统十年進士，籍贯長壽。（中国历代人物传记资料库 CBDB 239754）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_tEMDeNthXq1UbMC2Sghjh8
          claim_id: c_xdtftggsN4FAVAyU16Z53S
          source_id: s_sAy7kjGkVsX77p1ZaUGokM
          stance: supports
          locator: CBDB:239754
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_sAy7kjGkVsX77p1ZaUGokM
            source_type: api_record
            title: 中国历代人物传记资料库：王宗麒（CBDB 239754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239754&o=json
            external_identifier: CBDB:239754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jc6uiZBqinUSBEfLd8MmrT
        subject_person_id: p_QyVQQbt4VbA4Hx7YZ8Kozc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗麒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_V7M7PsBH499Et7N6NDK5Mk
          claim_id: c_jc6uiZBqinUSBEfLd8MmrT
          source_id: s_sAy7kjGkVsX77p1ZaUGokM
          stance: supports
          locator: CBDB:239754
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_wJBoTqz5T89tRNVQSzN0Xz
        subject_person_id: p_QyVQQbt4VbA4Hx7YZ8Kozc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ye9VLgV3pJbXBYdJ82vvQv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ivZD-1W9C20pC7hwxrD-87
          claim_id: c_wJBoTqz5T89tRNVQSzN0Xz
          source_id: s_3xLAig97UWbpTTVBBVEMck
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第五十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3xLAig97UWbpTTVBBVEMck
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 208053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208053&o=json
            external_identifier: CBDB:208053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ye9VLgV3pJbXBYdJ82vvQv
        status: active
        display_name: 王宣
        merged_into_person_id: null
    - claim:
        id: c_UlnYzsQH71_-FvcNHA0aOa
        subject_person_id: p_QyVQQbt4VbA4Hx7YZ8Kozc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_M551nrJ5d7pTaQmmJZsfEa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BPbhgaFjECI7_3wwTiRwXf
          claim_id: c_UlnYzsQH71_-FvcNHA0aOa
          source_id: s_f39jGpXOtNrISSzQ1mTXZU
          stance: supports
          locator: CBDB：兄弟 王宣（208053）之父／母 王宗麒
          quotation: null
          interpretation_note: 由兄弟关系推断：王孟通 与 王宣 为同胞（CBDB 记「兄」），王宣 之父／母即 王孟通 之父／母。
          source:
            id: s_f39jGpXOtNrISSzQ1mTXZU
            source_type: api_record
            title: 中国历代人物传记资料库：王孟通（CBDB 239759）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239759&o=json
            external_identifier: CBDB:239759
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_M551nrJ5d7pTaQmmJZsfEa
        status: active
        display_name: 王孟通
        merged_into_person_id: null
    - claim:
        id: c_s0wkXon6n9OTPB1cjgCu49
        subject_person_id: p_QyVQQbt4VbA4Hx7YZ8Kozc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hmAn57MwGaKJKqqX9Q4u9C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QKtUg4K14etZ7Ijt_Pt8ip
          claim_id: c_s0wkXon6n9OTPB1cjgCu49
          source_id: s_zuH5mxbxRJNe4fEDgi5C1M
          stance: supports
          locator: CBDB：兄弟 王宣（208053）之父／母 王宗麒
          quotation: null
          interpretation_note: 由兄弟关系推断：王孟南 与 王宣 为同胞（CBDB 记「兄」），王宣 之父／母即 王孟南 之父／母。
          source:
            id: s_zuH5mxbxRJNe4fEDgi5C1M
            source_type: api_record
            title: 中国历代人物传记资料库：王孟南（CBDB 239760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239760&o=json
            external_identifier: CBDB:239760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hmAn57MwGaKJKqqX9Q4u9C
        status: active
        display_name: 王孟南
        merged_into_person_id: null
    - claim:
        id: c_GV1_iOFHuUuj08G6sFGWLA
        subject_person_id: p_QyVQQbt4VbA4Hx7YZ8Kozc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sK1np5ERAT2spWcgarJQGn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QWtbwxb07XG7H8I2p4Vkgm
          claim_id: c_GV1_iOFHuUuj08G6sFGWLA
          source_id: s_5id-os8DdmI3UZ4l7KJNBj
          stance: supports
          locator: CBDB：兄弟 王宣（208053）之父／母 王宗麒
          quotation: null
          interpretation_note: 由兄弟关系推断：王孟慶 与 王宣 为同胞（CBDB 记「兄」），王宣 之父／母即 王孟慶 之父／母。
          source:
            id: s_5id-os8DdmI3UZ4l7KJNBj
            source_type: api_record
            title: 中国历代人物传记资料库：王孟慶（CBDB 239758）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239758&o=json
            external_identifier: CBDB:239758
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sK1np5ERAT2spWcgarJQGn
        status: active
        display_name: 王孟慶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宗麒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗麒，明人物。正统十年進士，籍贯長壽。（中国历代人物传记资料库 CBDB 239754） | accepted |
| name.primary | 王宗麒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ye9VLgV3pJbXBYdJ82vvQv | 王宣 | accepted |
| children | p_M551nrJ5d7pTaQmmJZsfEa | 王孟通 | accepted |
| children | p_hmAn57MwGaKJKqqX9Q4u9C | 王孟南 | accepted |
| children | p_sK1np5ERAT2spWcgarJQGn | 王孟慶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孟南（CBDB 239760）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239760&o=json)
- [中国历代人物传记资料库：王孟慶（CBDB 239758）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239758&o=json)
- [中国历代人物传记资料库：王孟通（CBDB 239759）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239759&o=json)
- [中国历代人物传记资料库：王宣（CBDB 208053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208053&o=json)
- [中国历代人物传记资料库：王宗麒（CBDB 239754）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239754&o=json)
