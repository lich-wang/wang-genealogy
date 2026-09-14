---
schema: wang-person/v1
id: p_94c89e5wW4HwVLc9t5cktH
status: active
merged_into: null
display_name: 王位
cbdb_id: 229904
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GedCk4HMSgKgTp7xo3Ujis
        subject_person_id: p_94c89e5wW4HwVLc9t5cktH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王位，明人物。萬曆丙戌科進士進士，籍贯武陵。（中国历代人物传记资料库 CBDB 229904）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_7hbfrj3fF28woJo6QEP8Be
          claim_id: c_GedCk4HMSgKgTp7xo3Ujis
          source_id: s_KoZh9mq6sowwrHFVdB4Kr3
          stance: supports
          locator: CBDB:229904
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_KoZh9mq6sowwrHFVdB4Kr3
            source_type: api_record
            title: 中国历代人物传记资料库：王位（CBDB 229904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229904&o=json
            external_identifier: CBDB:229904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_q3cidKP2iJzPdeypynZcYJ
        subject_person_id: p_94c89e5wW4HwVLc9t5cktH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王位
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_B3W1KQtaw186vhoyBk4evW
          claim_id: c_q3cidKP2iJzPdeypynZcYJ
          source_id: s_KoZh9mq6sowwrHFVdB4Kr3
          stance: supports
          locator: CBDB:229904
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ACnvs9ahjvsO97SwvUIyHx
        subject_person_id: p_HMYgDEoVuyW9xCPbxcPZ9o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_94c89e5wW4HwVLc9t5cktH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GFm028X-xuE4LJzR7ekAsV
          claim_id: c_ACnvs9ahjvsO97SwvUIyHx
          source_id: s_g7AaeNGl43196oxZvejE2Q
          stance: supports
          locator: CBDB：兄弟 王佐（207228）之父／母 王大才
          quotation: null
          interpretation_note: 由兄弟关系推断：王位 与 王佐 为同胞（CBDB 记「兄」），王佐 之父／母即 王位 之父／母。
          source:
            id: s_g7AaeNGl43196oxZvejE2Q
            source_type: api_record
            title: 中国历代人物传记资料库：王位（CBDB 229904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229904&o=json
            external_identifier: CBDB:229904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HMYgDEoVuyW9xCPbxcPZ9o
        status: active
        display_name: 王大才
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_fIcUEZyZ-2qZGGTK8i0TYT
        subject_person_id: p_94c89e5wW4HwVLc9t5cktH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DJcqSVwRMjWd5tk8GAdMxa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v99O26DAZy_MnDSICoQXuF
          claim_id: c_fIcUEZyZ-2qZGGTK8i0TYT
          source_id: s_g7AaeNGl43196oxZvejE2Q
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207228 王佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_g7AaeNGl43196oxZvejE2Q
            source_type: api_record
            title: 中国历代人物传记资料库：王位（CBDB 229904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229904&o=json
            external_identifier: CBDB:229904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DJcqSVwRMjWd5tk8GAdMxa
        status: active
        display_name: 王佐
        merged_into_person_id: null
---

# 王位

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王位，明人物。萬曆丙戌科進士進士，籍贯武陵。（中国历代人物传记资料库 CBDB 229904） | accepted |
| name.primary | 王位 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HMYgDEoVuyW9xCPbxcPZ9o | 王大才 | accepted |
| other | p_DJcqSVwRMjWd5tk8GAdMxa | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王位（CBDB 229904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229904&o=json)
