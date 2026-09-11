---
schema: wang-person/v1
id: p_QyVQQbt4VbA4Hx7YZ8Kozc
status: active
merged_into: null
display_name: 王宗麒
cbdb_id: 239754
revision: 2
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
          text: 王宗麒，明人物。中国历代人物传记资料库（CBDB）以人物编号 239754 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_tEMDeNthXq1UbMC2Sghjh8
          claim_id: c_xdtftggsN4FAVAyU16Z53S
          source_id: s_sAy7kjGkVsX77p1ZaUGokM
          stance: supports
          locator: CBDB:239754
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
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
          source:
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
| bio.summary | 王宗麒，明人物。中国历代人物传记资料库（CBDB）以人物编号 239754 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王宗麒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ye9VLgV3pJbXBYdJ82vvQv | 王宣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宣（CBDB 208053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208053&o=json)
- [中国历代人物传记资料库：王宗麒（CBDB 239754）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239754&o=json)
