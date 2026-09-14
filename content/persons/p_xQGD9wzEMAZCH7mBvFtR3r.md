---
schema: wang-person/v1
id: p_xQGD9wzEMAZCH7mBvFtR3r
status: active
merged_into: null
display_name: 王漙
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Cx8kD2AHAMRBYTsQhswYdC
        subject_person_id: p_xQGD9wzEMAZCH7mBvFtR3r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KtjB8KXmv4HyYfG5xfAHLN
          claim_id: c_Cx8kD2AHAMRBYTsQhswYdC
          source_id: s_bPzE2VAG9bxD9aQMdDuBS6
          stance: supports
          locator: CBDB:284251
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284251）
          source: &a1
            id: s_bPzE2VAG9bxD9aQMdDuBS6
            source_type: api_record
            title: 中国历代人物传记资料库：王漙（CBDB 284251）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284251&o=json
            external_identifier: CBDB:284251
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.191Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8zkkpXMXKrmCzoZbgrnQgv
        subject_person_id: p_xQGD9wzEMAZCH7mBvFtR3r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漙，明人物。正德十六年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 284251）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qsMr16z55KsS_AK-eR9oDG
          claim_id: c_8zkkpXMXKrmCzoZbgrnQgv
          source_id: s_bPzE2VAG9bxD9aQMdDuBS6
          stance: supports
          locator: CBDB:284251
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__j8BIjYzTLkBiRlA4ptqUT
        subject_person_id: p_229EQbFCA3PP8BNNQ1HMQL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xQGD9wzEMAZCH7mBvFtR3r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R0I2-hAcXHWdoloGVhnT5Y
          claim_id: c__j8BIjYzTLkBiRlA4ptqUT
          source_id: s_cI17UApEhYci_952pCIzbI
          stance: supports
          locator: CBDB：兄弟 王洙（202146）之父／母 王鎬
          quotation: null
          interpretation_note: 由兄弟关系推断：王漙 与 王洙 为同胞（CBDB 记「弟」），王洙 之父／母即 王漙 之父／母。
          source:
            id: s_cI17UApEhYci_952pCIzbI
            source_type: api_record
            title: 中国历代人物传记资料库：王漙（CBDB 284251）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284251&o=json
            external_identifier: CBDB:284251
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_229EQbFCA3PP8BNNQ1HMQL
        status: active
        display_name: 王鎬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_zyvuCBIFzBrJ-_6errgNCb
        subject_person_id: p_xQGD9wzEMAZCH7mBvFtR3r
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ziFePMbdNLKAgyGGN4BwgX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0u6KxABGFdpIhWaoEGhpJg
          claim_id: c_zyvuCBIFzBrJ-_6errgNCb
          source_id: s_cI17UApEhYci_952pCIzbI
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202146 王洙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cI17UApEhYci_952pCIzbI
            source_type: api_record
            title: 中国历代人物传记资料库：王漙（CBDB 284251）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284251&o=json
            external_identifier: CBDB:284251
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ziFePMbdNLKAgyGGN4BwgX
        status: active
        display_name: 王洙
        merged_into_person_id: null
---

# 王漙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王漙 | accepted |
| bio.summary | 王漙，明人物。正德十六年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 284251） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_229EQbFCA3PP8BNNQ1HMQL | 王鎬 | accepted |
| other | p_ziFePMbdNLKAgyGGN4BwgX | 王洙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王漙（CBDB 284251）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284251&o=json)
