---
schema: wang-person/v1
id: p_g7fHJBLtK8y5q9D73vKWMM
status: active
merged_into: null
display_name: 王致遠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J6ccDHMKQ2PeiwHodGG9Dn
        subject_person_id: p_g7fHJBLtK8y5q9D73vKWMM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王致遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v68SEP9HMmeoLQJUxkdc2m
          claim_id: c_J6ccDHMKQ2PeiwHodGG9Dn
          source_id: s_JfPaeoNZTd46cahoBPV4Bk
          stance: supports
          locator: CBDB:37700
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37700）
          source: &a1
            id: s_JfPaeoNZTd46cahoBPV4Bk
            source_type: api_record
            title: 中国历代人物传记资料库：王致遠（CBDB 37700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37700&o=json
            external_identifier: CBDB:37700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.245Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BG9LLEAQ3uoAPNqaBb3G1K
        subject_person_id: p_g7fHJBLtK8y5q9D73vKWMM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王致遠，宋人物。籍贯永嘉，身份为書院山長，入仕恩蔭、蔭補，曾任路提點刑獄公事、書院山長。（中国历代人物传记资料库 CBDB 37700）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fxiuD-Q2F0V4tduakJ2sTq
          claim_id: c_BG9LLEAQ3uoAPNqaBb3G1K
          source_id: s_JfPaeoNZTd46cahoBPV4Bk
          stance: supports
          locator: CBDB:37700
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JKihel_fOvXLinxnbUEteD
        subject_person_id: p_EpF9g41LdnDgRy6vzi3Sev
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g7fHJBLtK8y5q9D73vKWMM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vb2eU-nS3Bz34bme3tkXfi
          claim_id: c_JKihel_fOvXLinxnbUEteD
          source_id: s_Qr3ThhMsn8Wh3xCAuuiqmU
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1775：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Qr3ThhMsn8Wh3xCAuuiqmU
            source_type: api_record
            title: 中国历代人物传记资料库：王允初（CBDB 37701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37701&o=json
            external_identifier: CBDB:37701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:46.515Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_EpF9g41LdnDgRy6vzi3Sev
        status: active
        display_name: 王允初
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王致遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王致遠 | accepted |
| bio.summary | 王致遠，宋人物。籍贯永嘉，身份为書院山長，入仕恩蔭、蔭補，曾任路提點刑獄公事、書院山長。（中国历代人物传记资料库 CBDB 37700） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EpF9g41LdnDgRy6vzi3Sev | 王允初 | accepted |

## 外部来源

- [中国历代人物传记资料库：王允初（CBDB 37701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37701&o=json)
- [中国历代人物传记资料库：王致遠（CBDB 37700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37700&o=json)
