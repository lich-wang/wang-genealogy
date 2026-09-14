---
schema: wang-person/v1
id: p_2H7wDAyC2pUCToo884MHkb
status: active
merged_into: null
display_name: 王陳善
cbdb_id: 310886
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LJNqmsCDTcP9qdsGrGDn2L
        subject_person_id: p_2H7wDAyC2pUCToo884MHkb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陳善，明人物。嘉靖二十六年進士，籍贯泰州。（中国历代人物传记资料库 CBDB 310886）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_JUwxG1VSvuGK7mMoHzHJGv
          claim_id: c_LJNqmsCDTcP9qdsGrGDn2L
          source_id: s_fqdr8GU5XNMKx4jJ3mDezK
          stance: supports
          locator: CBDB:310886
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_fqdr8GU5XNMKx4jJ3mDezK
            source_type: api_record
            title: 中国历代人物传记资料库：王陳善（CBDB 310886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310886&o=json
            external_identifier: CBDB:310886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UNyNNDkJkpBkwQ3XwH78dZ
        subject_person_id: p_2H7wDAyC2pUCToo884MHkb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陳善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_x5UtN8HZJLK6KNZenGyHUM
          claim_id: c_UNyNNDkJkpBkwQ3XwH78dZ
          source_id: s_fqdr8GU5XNMKx4jJ3mDezK
          stance: supports
          locator: CBDB:310886
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XGG9ECZAntm1tIN7HFRd_g
        subject_person_id: p_BtDG6VoMZJKLkro1XEtynE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2H7wDAyC2pUCToo884MHkb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qfpELR7eo3CZNXO2GJXS4K
          claim_id: c_XGG9ECZAntm1tIN7HFRd_g
          source_id: s_hTx3yLGsPqFqnXHXRgGV_x
          stance: supports
          locator: CBDB：兄弟 王陳策（203846）之父／母 王交
          quotation: null
          interpretation_note: 由兄弟关系推断：王陳善 与 王陳策 为同胞（CBDB 记「弟」），王陳策 之父／母即 王陳善 之父／母。
          source:
            id: s_hTx3yLGsPqFqnXHXRgGV_x
            source_type: api_record
            title: 中国历代人物传记资料库：王陳善（CBDB 310886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310886&o=json
            external_identifier: CBDB:310886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BtDG6VoMZJKLkro1XEtynE
        status: active
        display_name: 王交
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_kBAB3re-8tsnBUSCe3Zu_G
        subject_person_id: p_2H7wDAyC2pUCToo884MHkb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uMoYvHtHcYSbRrJYWwDGUq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pd7npiFjbRGcB9C8MMR4Yg
          claim_id: c_kBAB3re-8tsnBUSCe3Zu_G
          source_id: s_hTx3yLGsPqFqnXHXRgGV_x
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203846 王陳策）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hTx3yLGsPqFqnXHXRgGV_x
            source_type: api_record
            title: 中国历代人物传记资料库：王陳善（CBDB 310886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310886&o=json
            external_identifier: CBDB:310886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uMoYvHtHcYSbRrJYWwDGUq
        status: active
        display_name: 王陳策
        merged_into_person_id: null
---

# 王陳善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王陳善，明人物。嘉靖二十六年進士，籍贯泰州。（中国历代人物传记资料库 CBDB 310886） | accepted |
| name.primary | 王陳善 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BtDG6VoMZJKLkro1XEtynE | 王交 | accepted |
| other | p_uMoYvHtHcYSbRrJYWwDGUq | 王陳策 | accepted |

## 外部来源

- [中国历代人物传记资料库：王陳善（CBDB 310886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310886&o=json)
