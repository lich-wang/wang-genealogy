---
schema: wang-person/v1
id: p_2oy62EEzX8avtnwM7s1tDJ
status: active
merged_into: null
display_name: 王綸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9cmyRaC7y7Yt4WvDmPfrfj
        subject_person_id: p_2oy62EEzX8avtnwM7s1tDJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ww5e958tiTHgdGLQJZ5d3q
          claim_id: c_9cmyRaC7y7Yt4WvDmPfrfj
          source_id: s_EMFDyqiwB7TGfKzHDKUFLZ
          stance: supports
          locator: CBDB:201866
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201866）
          source: &a1
            id: s_EMFDyqiwB7TGfKzHDKUFLZ
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 201866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201866&o=json
            external_identifier: CBDB:201866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.699Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2Mf5mp4FqH8MTWNDHMYJCs
        subject_person_id: p_2oy62EEzX8avtnwM7s1tDJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1485年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PL8nGX5iPKGtv7eUGxcs5B
          claim_id: c_2Mf5mp4FqH8MTWNDHMYJCs
          source_id: s_EMFDyqiwB7TGfKzHDKUFLZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q1MUh8AvqHe59o3Ne7tqzb
        subject_person_id: p_2oy62EEzX8avtnwM7s1tDJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G4wTkRBQmJdwod7FDJGR67
          claim_id: c_Q1MUh8AvqHe59o3Ne7tqzb
          source_id: s_EMFDyqiwB7TGfKzHDKUFLZ
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

# 王綸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綸 | accepted |
| birth.date | 1485年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綸（CBDB 201866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201866&o=json)
