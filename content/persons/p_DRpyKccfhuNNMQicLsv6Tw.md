---
schema: wang-person/v1
id: p_DRpyKccfhuNNMQicLsv6Tw
status: active
merged_into: null
display_name: 王偉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KWKrHRPCoFm6RB19T8c7oC
        subject_person_id: p_DRpyKccfhuNNMQicLsv6Tw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tEXtmnA1socyM74LLFAk4Y
          claim_id: c_KWKrHRPCoFm6RB19T8c7oC
          source_id: s_H6RJLjvA5mt2iz857HNJLc
          stance: supports
          locator: CBDB:250574
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（250574）
          source: &a1
            id: s_H6RJLjvA5mt2iz857HNJLc
            source_type: api_record
            title: 中国历代人物传记资料库：王偉（CBDB 250574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250574&o=json
            external_identifier: CBDB:250574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.232Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1omrvGz37uMmaDWZNrG3GL
        subject_person_id: p_DRpyKccfhuNNMQicLsv6Tw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偉，明人物。成化十一年進士，籍贯海南衛。（中国历代人物传记资料库 CBDB 250574）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YQ-1Tlq5GbnnIZiuzd1a5X
          claim_id: c_1omrvGz37uMmaDWZNrG3GL
          source_id: s_H6RJLjvA5mt2iz857HNJLc
          stance: supports
          locator: CBDB:250574
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_blQbuCGM9F7xmAfv2VZIRQ
        subject_person_id: p_P6jrnxynY7Dudu6LBvAAqQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DRpyKccfhuNNMQicLsv6Tw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3pc79AVDveerJKyVlFdSGf
          claim_id: c_blQbuCGM9F7xmAfv2VZIRQ
          source_id: s_nWcCYSOkihmzxgOfxYemAy
          stance: supports
          locator: CBDB：兄弟 王儼（338703）之父／母 王璟
          quotation: null
          interpretation_note: 由兄弟关系推断：王偉 与 王儼 为同胞（CBDB 记「兄」），王儼 之父／母即 王偉 之父／母。
          source:
            id: s_nWcCYSOkihmzxgOfxYemAy
            source_type: api_record
            title: 中国历代人物传记资料库：王偉（CBDB 250574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250574&o=json
            external_identifier: CBDB:250574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P6jrnxynY7Dudu6LBvAAqQ
        status: active
        display_name: 王璟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_KtbtAsOSrDeF640QS2PiZx
        subject_person_id: p_DRpyKccfhuNNMQicLsv6Tw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GGm15a95bmjM4yFUpB9QGR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7K7eZWB_leR8_T7fHZSWmW
          claim_id: c_KtbtAsOSrDeF640QS2PiZx
          source_id: s_nWcCYSOkihmzxgOfxYemAy
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 338703 王儼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_nWcCYSOkihmzxgOfxYemAy
            source_type: api_record
            title: 中国历代人物传记资料库：王偉（CBDB 250574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250574&o=json
            external_identifier: CBDB:250574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GGm15a95bmjM4yFUpB9QGR
        status: active
        display_name: 王儼
        merged_into_person_id: null
---

# 王偉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王偉 | accepted |
| bio.summary | 王偉，明人物。成化十一年進士，籍贯海南衛。（中国历代人物传记资料库 CBDB 250574） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_P6jrnxynY7Dudu6LBvAAqQ | 王璟 | accepted |
| other | p_GGm15a95bmjM4yFUpB9QGR | 王儼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王偉（CBDB 250574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=250574&o=json)
