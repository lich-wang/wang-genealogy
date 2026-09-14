---
schema: wang-person/v1
id: p_CdwM3THTpPaWK4dEbPKnqz
status: active
merged_into: null
display_name: 王存尚
cbdb_id: 260634
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9dQtcHVKBN2arpA2k7ADKt
        subject_person_id: p_CdwM3THTpPaWK4dEbPKnqz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王存尚，明人物。成化二十三年進士，籍贯寧海。（中国历代人物传记资料库 CBDB 260634）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_3V7Iwt3oIBemcHLq5dLfa1
          claim_id: c_9dQtcHVKBN2arpA2k7ADKt
          source_id: s_xWfcaqnRdgL4cLydhao4c4
          stance: supports
          locator: CBDB:260634
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_xWfcaqnRdgL4cLydhao4c4
            source_type: api_record
            title: 中国历代人物传记资料库：王存尚（CBDB 260634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260634&o=json
            external_identifier: CBDB:260634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uJNPuGNm8QkqQQ4VXkVTYN
        subject_person_id: p_CdwM3THTpPaWK4dEbPKnqz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王存尚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4EYK4aNjAi69m9tyopbDSE
          claim_id: c_uJNPuGNm8QkqQQ4VXkVTYN
          source_id: s_xWfcaqnRdgL4cLydhao4c4
          stance: supports
          locator: CBDB:260634
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nu7gl_qIssH6RKRDw6ryqQ
        subject_person_id: p_zYsGWZ26RZr9NP9BPEi82D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CdwM3THTpPaWK4dEbPKnqz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jbRShlN2JLrUXnzGb4JXuh
          claim_id: c_nu7gl_qIssH6RKRDw6ryqQ
          source_id: s_5CWwqM9NQKPsVDGb_oWzCJ
          stance: supports
          locator: CBDB：兄弟 王存忠（200628）之父／母 王永潮
          quotation: null
          interpretation_note: 由兄弟关系推断：王存尚 与 王存忠 为同胞（CBDB 记「弟」），王存忠 之父／母即 王存尚 之父／母。
          source:
            id: s_5CWwqM9NQKPsVDGb_oWzCJ
            source_type: api_record
            title: 中国历代人物传记资料库：王存尚（CBDB 260634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260634&o=json
            external_identifier: CBDB:260634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zYsGWZ26RZr9NP9BPEi82D
        status: active
        display_name: 王永潮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_hCJp4ZBfpAuRECRO58PBgC
        subject_person_id: p_CdwM3THTpPaWK4dEbPKnqz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ybLqBE5H4AFTdmTJtgwy2w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LOVAQ_bSrIzkxmOhStddDc
          claim_id: c_hCJp4ZBfpAuRECRO58PBgC
          source_id: s_5CWwqM9NQKPsVDGb_oWzCJ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200628 王存忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5CWwqM9NQKPsVDGb_oWzCJ
            source_type: api_record
            title: 中国历代人物传记资料库：王存尚（CBDB 260634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260634&o=json
            external_identifier: CBDB:260634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ybLqBE5H4AFTdmTJtgwy2w
        status: active
        display_name: 王存忠
        merged_into_person_id: null
---

# 王存尚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王存尚，明人物。成化二十三年進士，籍贯寧海。（中国历代人物传记资料库 CBDB 260634） | accepted |
| name.primary | 王存尚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zYsGWZ26RZr9NP9BPEi82D | 王永潮 | accepted |
| other | p_ybLqBE5H4AFTdmTJtgwy2w | 王存忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王存尚（CBDB 260634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260634&o=json)
