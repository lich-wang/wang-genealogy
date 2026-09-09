---
schema: wang-person/v1
id: p_Ek4Wgk68iZEY4VMpF8nXfd
status: active
merged_into: null
display_name: 王希曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a8Gzh7h3k1XBy3QPAZvqf2
        subject_person_id: p_Ek4Wgk68iZEY4VMpF8nXfd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FvG97EH6eK29HkqEbyWo8f
          claim_id: c_a8Gzh7h3k1XBy3QPAZvqf2
          source_id: s_wXF55kNtNHZ6AJxjy26K9m
          stance: supports
          locator: CBDB:503738
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（503738）
          source: &a1
            id: s_wXF55kNtNHZ6AJxjy26K9m
            source_type: api_record
            title: 中国历代人物传记资料库：王希曾（CBDB 503738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=503738&o=json
            external_identifier: CBDB:503738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.913Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W6W9De7Bjg7DHGh3VK8HJP
        subject_person_id: p_Ek4Wgk68iZEY4VMpF8nXfd
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
        - id: cs_CgE9BFdJWQ6ima526pXoYc
          claim_id: c_W6W9De7Bjg7DHGh3VK8HJP
          source_id: s_wXF55kNtNHZ6AJxjy26K9m
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

# 王希曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希曾 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希曾（CBDB 503738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=503738&o=json)
