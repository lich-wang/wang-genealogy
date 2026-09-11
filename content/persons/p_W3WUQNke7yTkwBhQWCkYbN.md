---
schema: wang-person/v1
id: p_W3WUQNke7yTkwBhQWCkYbN
status: active
merged_into: null
display_name: 王福鴻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7EohpUP2RFVjbE196Ty6nq
        subject_person_id: p_W3WUQNke7yTkwBhQWCkYbN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福鴻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_axW59c1KF34ExA9wbvMn9V
          claim_id: c_7EohpUP2RFVjbE196Ty6nq
          source_id: s_gzwbo53U13r4PzdUKMAc9v
          stance: supports
          locator: CBDB:639620
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639620）
          source: &a1
            id: s_gzwbo53U13r4PzdUKMAc9v
            source_type: api_record
            title: 中国历代人物传记资料库：王福鴻（CBDB 639620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639620&o=json
            external_identifier: CBDB:639620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.994Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DjSN6v7jzttztSZ7GSZTDh
        subject_person_id: p_W3WUQNke7yTkwBhQWCkYbN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福鴻，清人物。籍贯西安，入仕鄉貢舉人，曾任學正、訓導。（中国历代人物传记资料库 CBDB 639620）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZV0yOmSvkhBSSo4YrHKsaj
          claim_id: c_DjSN6v7jzttztSZ7GSZTDh
          source_id: s_gzwbo53U13r4PzdUKMAc9v
          stance: supports
          locator: CBDB:639620
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

# 王福鴻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福鴻 | accepted |
| bio.summary | 王福鴻，清人物。籍贯西安，入仕鄉貢舉人，曾任學正、訓導。（中国历代人物传记资料库 CBDB 639620） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王福鴻（CBDB 639620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639620&o=json)
