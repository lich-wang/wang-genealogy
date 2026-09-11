---
schema: wang-person/v1
id: p_xiJGz1CvGWmN8J9FD7eSeZ
status: active
merged_into: null
display_name: 王昌熺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CdTN7x3sgf735zUs73YpDR
        subject_person_id: p_xiJGz1CvGWmN8J9FD7eSeZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌熺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a1jL9gyxJ5wPbvhY7WSHKV
          claim_id: c_CdTN7x3sgf735zUs73YpDR
          source_id: s_vw9TxDiTPjgFHPpKVjDwUK
          stance: supports
          locator: CBDB:694241
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694241）
          source: &a1
            id: s_vw9TxDiTPjgFHPpKVjDwUK
            source_type: api_record
            title: 中国历代人物传记资料库：王昌熺（CBDB 694241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694241&o=json
            external_identifier: CBDB:694241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.518Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UCxnvMUtBnD4X8wuys8c6A
        subject_person_id: p_xiJGz1CvGWmN8J9FD7eSeZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌熺，清人物。籍贯海鹽，身份为為善鄉里，入仕庠生。（中国历代人物传记资料库 CBDB 694241）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_epdLaXIF2jijwUKaaKoTd6
          claim_id: c_UCxnvMUtBnD4X8wuys8c6A
          source_id: s_vw9TxDiTPjgFHPpKVjDwUK
          stance: supports
          locator: CBDB:694241
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  other: []
---

# 王昌熺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昌熺 | accepted |
| bio.summary | 王昌熺，清人物。籍贯海鹽，身份为為善鄉里，入仕庠生。（中国历代人物传记资料库 CBDB 694241） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昌熺（CBDB 694241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694241&o=json)
