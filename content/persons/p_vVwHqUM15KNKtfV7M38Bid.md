---
schema: wang-person/v1
id: p_vVwHqUM15KNKtfV7M38Bid
status: active
merged_into: null
display_name: 王輗
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KbwZQXo8XST9VoMFrkxYdR
        subject_person_id: p_vVwHqUM15KNKtfV7M38Bid
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P29JVWvFfBPo39Kdm8pZGn
          claim_id: c_KbwZQXo8XST9VoMFrkxYdR
          source_id: s_gu6qjbHj6mLXXUZaGLJoEC
          stance: supports
          locator: CBDB:333188
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（333188）
          source: &a1
            id: s_gu6qjbHj6mLXXUZaGLJoEC
            source_type: api_record
            title: 中国历代人物传记资料库：王輗（CBDB 333188）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333188&o=json
            external_identifier: CBDB:333188
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.395Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pKSFN4FhPZG5t5X6moAdPD
        subject_person_id: p_vVwHqUM15KNKtfV7M38Bid
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輗，明人物。天順八年進士，籍贯公安。（中国历代人物传记资料库 CBDB 333188）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_y4CNOGvE-dJvbTVhyJclCg
          claim_id: c_pKSFN4FhPZG5t5X6moAdPD
          source_id: s_gu6qjbHj6mLXXUZaGLJoEC
          stance: supports
          locator: CBDB:333188
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_i91-CzZEyJ_aCH6cjGcocl
        subject_person_id: p_7Tia4RakEpFHiC5SDiDZSG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vVwHqUM15KNKtfV7M38Bid
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yEvot4GVki4EfmVessvEzY
          claim_id: c_i91-CzZEyJ_aCH6cjGcocl
          source_id: s_i067xdYO0Mx8HqX6kmbdOF
          stance: supports
          locator: CBDB：兄弟 王軾（67466）之父／母 王让
          quotation: null
          interpretation_note: 由兄弟关系推断：王輗 与 王軾 为同胞（CBDB 记「兄」），王軾 之父／母即 王輗 之父／母。
          source:
            id: s_i067xdYO0Mx8HqX6kmbdOF
            source_type: api_record
            title: 中国历代人物传记资料库：王輗（CBDB 333188）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333188&o=json
            external_identifier: CBDB:333188
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7Tia4RakEpFHiC5SDiDZSG
        status: active
        display_name: 王让
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_1-cPg4AztZ13DEPuC2FfJ4
        subject_person_id: p_8kvzu18KWCHGBJbrWxW4b9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vVwHqUM15KNKtfV7M38Bid
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V_irYjWlntznA9jONvgHVt
          claim_id: c_1-cPg4AztZ13DEPuC2FfJ4
          source_id: s_i067xdYO0Mx8HqX6kmbdOF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67466 王軾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_i067xdYO0Mx8HqX6kmbdOF
            source_type: api_record
            title: 中国历代人物传记资料库：王輗（CBDB 333188）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333188&o=json
            external_identifier: CBDB:333188
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8kvzu18KWCHGBJbrWxW4b9
        status: active
        display_name: 王軾
        merged_into_person_id: null
---

# 王輗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輗 | accepted |
| bio.summary | 王輗，明人物。天順八年進士，籍贯公安。（中国历代人物传记资料库 CBDB 333188） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7Tia4RakEpFHiC5SDiDZSG | 王让 | accepted |
| other | p_8kvzu18KWCHGBJbrWxW4b9 | 王軾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輗（CBDB 333188）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333188&o=json)
