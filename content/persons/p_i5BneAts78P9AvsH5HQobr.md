---
schema: wang-person/v1
id: p_i5BneAts78P9AvsH5HQobr
status: active
merged_into: null
display_name: 王府
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_769CJCfWujXJAVDnaCbDP6
        subject_person_id: p_i5BneAts78P9AvsH5HQobr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王府
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9Mx1HhtAFdD2k8jmYqMWmC
          claim_id: c_769CJCfWujXJAVDnaCbDP6
          source_id: s_Hm6yQVPyGH6kBGEMPtsVLG
          stance: supports
          locator: CBDB:212089
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212089）
          source: &a1
            id: s_Hm6yQVPyGH6kBGEMPtsVLG
            source_type: api_record
            title: 中国历代人物传记资料库：王府（CBDB 212089）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212089&o=json
            external_identifier: CBDB:212089
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.071Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xxW7y5AJread1Ep4v2K1hz
        subject_person_id: p_i5BneAts78P9AvsH5HQobr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王府，明人物。隆慶五年進士，籍贯深澤。（中国历代人物传记资料库 CBDB 212089）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WnBitgvGEfpcuSPUE4y_pf
          claim_id: c_xxW7y5AJread1Ep4v2K1hz
          source_id: s_Hm6yQVPyGH6kBGEMPtsVLG
          stance: supports
          locator: CBDB:212089
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xz5Qh2DhpcD_k5KSGbAmsM
        subject_person_id: p_gBwRWdErARQJVzB6EHJVfE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i5BneAts78P9AvsH5HQobr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tax9O7fTCYlTLtL7ZhrME4
          claim_id: c_xz5Qh2DhpcD_k5KSGbAmsM
          source_id: s_JG5nN4DhEM0h0Uik4Swxrm
          stance: supports
          locator: CBDB：兄弟 王度（206012）之父／母 王朝棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王府 与 王度 为同胞（CBDB 记「兄」），王度 之父／母即 王府 之父／母。
          source:
            id: s_JG5nN4DhEM0h0Uik4Swxrm
            source_type: api_record
            title: 中国历代人物传记资料库：王府（CBDB 212089）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212089&o=json
            external_identifier: CBDB:212089
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gBwRWdErARQJVzB6EHJVfE
        status: active
        display_name: 王朝棟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_sawLnxK9VgYpMxX9-VwMoS
        subject_person_id: p_feVTPN7HCaS1BxqehN6dAD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_i5BneAts78P9AvsH5HQobr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4kdcb4aHYxSFdnXfZZgixX
          claim_id: c_sawLnxK9VgYpMxX9-VwMoS
          source_id: s_JG5nN4DhEM0h0Uik4Swxrm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206012 王度）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JG5nN4DhEM0h0Uik4Swxrm
            source_type: api_record
            title: 中国历代人物传记资料库：王府（CBDB 212089）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212089&o=json
            external_identifier: CBDB:212089
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_feVTPN7HCaS1BxqehN6dAD
        status: active
        display_name: 王度
        merged_into_person_id: null
---

# 王府

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王府 | accepted |
| bio.summary | 王府，明人物。隆慶五年進士，籍贯深澤。（中国历代人物传记资料库 CBDB 212089） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gBwRWdErARQJVzB6EHJVfE | 王朝棟 | accepted |
| other | p_feVTPN7HCaS1BxqehN6dAD | 王度 | accepted |

## 外部来源

- [中国历代人物传记资料库：王府（CBDB 212089）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212089&o=json)
