---
schema: wang-person/v1
id: p_GEGHN1K9gw1QoXQtDSxg6F
status: active
merged_into: null
display_name: 王耤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_83n3L3DZEy9MSdFAWcZ9DU
        subject_person_id: p_GEGHN1K9gw1QoXQtDSxg6F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nijCep4ytxE5DJtgeM28L3
          claim_id: c_83n3L3DZEy9MSdFAWcZ9DU
          source_id: s_xtC8cpWiFb3UMRQBELiNDJ
          stance: supports
          locator: CBDB:639934
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639934）
          source: &a1
            id: s_xtC8cpWiFb3UMRQBELiNDJ
            source_type: api_record
            title: 中国历代人物传记资料库：王耤（CBDB 639934）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639934&o=json
            external_identifier: CBDB:639934
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.091Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Pn5sw9AwQdA5zuD8Mj732B
        subject_person_id: p_GEGHN1K9gw1QoXQtDSxg6F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王耤，清人物。籍贯大興，曾任典史。（中国历代人物传记资料库 CBDB 639934）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZkYDJ3Z9qP0BfmbG437WJn
          claim_id: c_Pn5sw9AwQdA5zuD8Mj732B
          source_id: s_xtC8cpWiFb3UMRQBELiNDJ
          stance: supports
          locator: CBDB:639934
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

# 王耤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王耤 | accepted |
| bio.summary | 王耤，清人物。籍贯大興，曾任典史。（中国历代人物传记资料库 CBDB 639934） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王耤（CBDB 639934）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639934&o=json)
