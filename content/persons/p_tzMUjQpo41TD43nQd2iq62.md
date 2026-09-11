---
schema: wang-person/v1
id: p_tzMUjQpo41TD43nQd2iq62
status: active
merged_into: null
display_name: 王禮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_17KMZhj1qtE3qjjWko8WKq
        subject_person_id: p_tzMUjQpo41TD43nQd2iq62
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rriyDPPfj7R2TRFsKieaF4
          claim_id: c_17KMZhj1qtE3qjjWko8WKq
          source_id: s_QJDupa6JHHkbeddQQTk3bb
          stance: supports
          locator: CBDB:71055
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71055）
          source: &a1
            id: s_QJDupa6JHHkbeddQQTk3bb
            source_type: api_record
            title: 中国历代人物传记资料库：王禮（CBDB 71055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71055&o=json
            external_identifier: CBDB:71055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.323Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2yCoatV1skyy8LijC44HJi
        subject_person_id: p_tzMUjQpo41TD43nQd2iq62
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1813年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b6sW8bgRetHt6R1j6PYMbG
          claim_id: c_2yCoatV1skyy8LijC44HJi
          source_id: s_QJDupa6JHHkbeddQQTk3bb
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_isgLa4vZX4CH42U3i9iM17
        subject_person_id: p_tzMUjQpo41TD43nQd2iq62
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1879年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iPiE6X6tM8s3PR6QpdH9Aj
          claim_id: c_isgLa4vZX4CH42U3i9iM17
          source_id: s_QJDupa6JHHkbeddQQTk3bb
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YgJxRa1NQ4Cvsat931SGCo
        subject_person_id: p_tzMUjQpo41TD43nQd2iq62
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禮（1813年—1879年），清人物。籍贯吳江。（中国历代人物传记资料库 CBDB 71055）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yEkQvVBbUdOvh0FXp8w4ay
          claim_id: c_YgJxRa1NQ4Cvsat931SGCo
          source_id: s_QJDupa6JHHkbeddQQTk3bb
          stance: supports
          locator: CBDB:71055
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

# 王禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禮 | accepted |
| birth.date | 1813年 | accepted |
| death.date | 1879年 | accepted |
| bio.summary | 王禮（1813年—1879年），清人物。籍贯吳江。（中国历代人物传记资料库 CBDB 71055） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王禮（CBDB 71055）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71055&o=json)
