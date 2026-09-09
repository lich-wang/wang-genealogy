---
schema: wang-person/v1
id: p_6SJjj7823FoCT1N1bQZB3T
status: active
merged_into: null
display_name: 王所甄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KoPRPpZbSs8V62Vh9xbhtX
        subject_person_id: p_6SJjj7823FoCT1N1bQZB3T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王所甄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R3HEM6eJ39gCNaWzY6Gqfh
          claim_id: c_KoPRPpZbSs8V62Vh9xbhtX
          source_id: s_gF9WnKnGeyMG1Y5SRH9JgG
          stance: supports
          locator: CBDB:638060
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638060）
          source: &a1
            id: s_gF9WnKnGeyMG1Y5SRH9JgG
            source_type: api_record
            title: 中国历代人物传记资料库：王所甄（CBDB 638060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638060&o=json
            external_identifier: CBDB:638060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.505Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WhuYpHpUFyuNRoXAQM7DE4
        subject_person_id: p_6SJjj7823FoCT1N1bQZB3T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PZu6SfHpZEvumrY89AL7g5
          claim_id: c_WhuYpHpUFyuNRoXAQM7DE4
          source_id: s_gF9WnKnGeyMG1Y5SRH9JgG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王所甄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王所甄 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王所甄（CBDB 638060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638060&o=json)
