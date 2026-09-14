---
schema: wang-person/v1
id: p_otrtoeJnXhdY9sAS6CGtcV
status: active
merged_into: null
display_name: 王謹
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5rMB9AmAE43MGWRMHRBWEk
        subject_person_id: p_otrtoeJnXhdY9sAS6CGtcV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8zkR9Vj6aAzdL5mtNzCWve
          claim_id: c_5rMB9AmAE43MGWRMHRBWEk
          source_id: s_mAJvb44qEKEuWLUQDYZKCr
          stance: supports
          locator: CBDB:239892
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（239892）
          source: &a1
            id: s_mAJvb44qEKEuWLUQDYZKCr
            source_type: api_record
            title: 中国历代人物传记资料库：王謹（CBDB 239892）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239892&o=json
            external_identifier: CBDB:239892
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.907Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Rhmh5WjMQkk4im3xiVcaMj
        subject_person_id: p_otrtoeJnXhdY9sAS6CGtcV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謹，明人物。正统十年進士，籍贯永寧衛。（中国历代人物传记资料库 CBDB 239892）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nDdx8JqGDn1RyH6v_TAPk-
          claim_id: c_Rhmh5WjMQkk4im3xiVcaMj
          source_id: s_mAJvb44qEKEuWLUQDYZKCr
          stance: supports
          locator: CBDB:239892
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oO_iDfeyVj1yiyoykcZhOM
        subject_person_id: p_14ogWJ1NeYn1acYejdfnia
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_otrtoeJnXhdY9sAS6CGtcV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8ycHgf83IccPrWIXXujZlj
          claim_id: c_oO_iDfeyVj1yiyoykcZhOM
          source_id: s_tDbi49v5_ButEyRcQxrQfO
          stance: supports
          locator: CBDB：兄弟 王敞（208063）之父／母 王斌
          quotation: null
          interpretation_note: 由兄弟关系推断：王謹 与 王敞 为同胞（CBDB 记「兄」），王敞 之父／母即 王謹 之父／母。
          source:
            id: s_tDbi49v5_ButEyRcQxrQfO
            source_type: api_record
            title: 中国历代人物传记资料库：王謹（CBDB 239892）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239892&o=json
            external_identifier: CBDB:239892
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_14ogWJ1NeYn1acYejdfnia
        status: active
        display_name: 王斌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_zXPudQedlsgvP4ksCKmF3u
        subject_person_id: p_e8Zr493vi2djpmCUjmBf8z
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_otrtoeJnXhdY9sAS6CGtcV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kc9zLRPCjth6N6l8TS8_l2
          claim_id: c_zXPudQedlsgvP4ksCKmF3u
          source_id: s_tDbi49v5_ButEyRcQxrQfO
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 208063 王敞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tDbi49v5_ButEyRcQxrQfO
            source_type: api_record
            title: 中国历代人物传记资料库：王謹（CBDB 239892）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239892&o=json
            external_identifier: CBDB:239892
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e8Zr493vi2djpmCUjmBf8z
        status: active
        display_name: 王敞
        merged_into_person_id: null
---

# 王謹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謹 | accepted |
| bio.summary | 王謹，明人物。正统十年進士，籍贯永寧衛。（中国历代人物传记资料库 CBDB 239892） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_14ogWJ1NeYn1acYejdfnia | 王斌 | accepted |
| other | p_e8Zr493vi2djpmCUjmBf8z | 王敞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王謹（CBDB 239892）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239892&o=json)
