---
schema: wang-person/v1
id: p_GfpGrJynJDHMe9vXRrZHEx
status: active
merged_into: null
display_name: 王叔嘉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jUrvYWV3hDD1WmHNYYo7zt
        subject_person_id: p_GfpGrJynJDHMe9vXRrZHEx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔嘉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3iG8QMqUL27wCpW4ALEjs7
          claim_id: c_jUrvYWV3hDD1WmHNYYo7zt
          source_id: s_pvMwGUwfgNQQ6wXFfN3q1H
          stance: supports
          locator: CBDB:535039
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（535039）
          source: &a1
            id: s_pvMwGUwfgNQQ6wXFfN3q1H
            source_type: api_record
            title: 中国历代人物传记资料库：王叔嘉（CBDB 535039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=535039&o=json
            external_identifier: CBDB:535039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.387Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M7XZmNYy33k13ShHMPf6uG
        subject_person_id: p_GfpGrJynJDHMe9vXRrZHEx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔嘉，宋人物。籍贯晉江，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 535039）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M1KEGSera2C2PGc6r6PYxV
          claim_id: c_M7XZmNYy33k13ShHMPf6uG
          source_id: s_pvMwGUwfgNQQ6wXFfN3q1H
          stance: supports
          locator: CBDB:535039
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

# 王叔嘉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王叔嘉 | accepted |
| bio.summary | 王叔嘉，宋人物。籍贯晉江，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 535039） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王叔嘉（CBDB 535039）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=535039&o=json)
