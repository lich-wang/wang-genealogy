---
schema: wang-person/v1
id: p_Y35omjcVZEtYLiF7583y15
status: active
merged_into: null
display_name: 王聚才
cbdb_id: 255801
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Da6vCWLJk1SmsVWZ2oof6Y
        subject_person_id: p_Y35omjcVZEtYLiF7583y15
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聚才，明人物。成化十七年進士，籍贯西平。（中国历代人物传记资料库 CBDB 255801）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_mBDX0L0hPSKFUaEyee9MTV
          claim_id: c_Da6vCWLJk1SmsVWZ2oof6Y
          source_id: s_vuDNKMRP7P2memSK5ZTDbL
          stance: supports
          locator: CBDB:255801
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_vuDNKMRP7P2memSK5ZTDbL
            source_type: api_record
            title: 中国历代人物传记资料库：王聚才（CBDB 255801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255801&o=json
            external_identifier: CBDB:255801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KdSgBC7B585J3CqvbGGAuV
        subject_person_id: p_Y35omjcVZEtYLiF7583y15
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聚才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VcP8PvxQYoCXLZyakeTuUA
          claim_id: c_KdSgBC7B585J3CqvbGGAuV
          source_id: s_vuDNKMRP7P2memSK5ZTDbL
          stance: supports
          locator: CBDB:255801
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_kKfnpGWvvEZnAPl3X_secM
        subject_person_id: p_5sGq3fMCKQCFC1ia4efd12
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Y35omjcVZEtYLiF7583y15
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gz66Bl9fJRYr73YVapDbAf
          claim_id: c_kKfnpGWvvEZnAPl3X_secM
          source_id: s_8TG4JfMlxN3ZDoKwOM1Op5
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200280 王表）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8TG4JfMlxN3ZDoKwOM1Op5
            source_type: api_record
            title: 中国历代人物传记资料库：王聚才（CBDB 255801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255801&o=json
            external_identifier: CBDB:255801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5sGq3fMCKQCFC1ia4efd12
        status: active
        display_name: 王表
        merged_into_person_id: null
---

# 王聚才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王聚才，明人物。成化十七年進士，籍贯西平。（中国历代人物传记资料库 CBDB 255801） | accepted |
| name.primary | 王聚才 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_5sGq3fMCKQCFC1ia4efd12 | 王表 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聚才（CBDB 255801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255801&o=json)
