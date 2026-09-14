---
schema: wang-person/v1
id: p_cji6F9PbUximyCd6AfnmxF
status: active
merged_into: null
display_name: 王炳
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pfv5WD9y78F9ZgFUBJC9aM
        subject_person_id: p_cji6F9PbUximyCd6AfnmxF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ijjHe7H9VDiaNxhc7K8KqU
          claim_id: c_pfv5WD9y78F9ZgFUBJC9aM
          source_id: s_CSbMT4GMWGuk18kNButK4f
          stance: supports
          locator: CBDB:283533
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283533）
          source: &a1
            id: s_CSbMT4GMWGuk18kNButK4f
            source_type: api_record
            title: 中国历代人物传记资料库：王炳（CBDB 283533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283533&o=json
            external_identifier: CBDB:283533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.143Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8FCwehXdA8rmN9aEDa37u8
        subject_person_id: p_cji6F9PbUximyCd6AfnmxF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳，明人物。正德十六年進士，籍贯固安。（中国历代人物传记资料库 CBDB 283533）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5J4PVNdbJKmnGBRZllTsAD
          claim_id: c_8FCwehXdA8rmN9aEDa37u8
          source_id: s_CSbMT4GMWGuk18kNButK4f
          stance: supports
          locator: CBDB:283533
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_I-pvM1h9xIW9x9_sU7uYs3
        subject_person_id: p_y9Be6wCSGkH3WJd1jLBiqu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cji6F9PbUximyCd6AfnmxF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fxn6jpn_4IeGcQhbZpdewS
          claim_id: c_I-pvM1h9xIW9x9_sU7uYs3
          source_id: s_vXLVzNsWt3Zta7E34e4com
          stance: supports
          locator: CBDB：兄弟 王煒（202099）之父／母 王相
          quotation: null
          interpretation_note: 由兄弟关系推断：王炳 与 王煒 为同胞（CBDB 记「兄」），王煒 之父／母即 王炳 之父／母。
          source:
            id: s_vXLVzNsWt3Zta7E34e4com
            source_type: api_record
            title: 中国历代人物传记资料库：王炳（CBDB 283533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283533&o=json
            external_identifier: CBDB:283533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y9Be6wCSGkH3WJd1jLBiqu
        status: active
        display_name: 王相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_hN7SrREx9qZTdn1XtciNbx
        subject_person_id: p_9cPpJFUi1d46tFMj2MGDrb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cji6F9PbUximyCd6AfnmxF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YpTuVjrMGIti-a4QmRq_lQ
          claim_id: c_hN7SrREx9qZTdn1XtciNbx
          source_id: s_vXLVzNsWt3Zta7E34e4com
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202099 王煒）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vXLVzNsWt3Zta7E34e4com
            source_type: api_record
            title: 中国历代人物传记资料库：王炳（CBDB 283533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283533&o=json
            external_identifier: CBDB:283533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9cPpJFUi1d46tFMj2MGDrb
        status: active
        display_name: 王煒
        merged_into_person_id: null
---

# 王炳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炳 | accepted |
| bio.summary | 王炳，明人物。正德十六年進士，籍贯固安。（中国历代人物传记资料库 CBDB 283533） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_y9Be6wCSGkH3WJd1jLBiqu | 王相 | accepted |
| other | p_9cPpJFUi1d46tFMj2MGDrb | 王煒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王炳（CBDB 283533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283533&o=json)
