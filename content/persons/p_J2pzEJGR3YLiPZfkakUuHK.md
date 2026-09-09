---
schema: wang-person/v1
id: p_J2pzEJGR3YLiPZfkakUuHK
status: active
merged_into: null
display_name: 王進玄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QUAJ4a4QM9cj2Gx2zervX7
        subject_person_id: p_J2pzEJGR3YLiPZfkakUuHK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進玄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_39X8BvSZZJ6rAW8r1SGP8v
          claim_id: c_QUAJ4a4QM9cj2Gx2zervX7
          source_id: s_GhbhvupPydLhgJjp5wKMw4
          stance: supports
          locator: CBDB:192942
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192942）
          source: &a1
            id: s_GhbhvupPydLhgJjp5wKMw4
            source_type: api_record
            title: 中国历代人物传记资料库：王進玄（CBDB 192942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192942&o=json
            external_identifier: CBDB:192942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.290Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NbRCVwarBKzB8NLzfvT6Ah
        subject_person_id: p_J2pzEJGR3YLiPZfkakUuHK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 774年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tc2enXoVgVr6wiNe4tPhae
          claim_id: c_NbRCVwarBKzB8NLzfvT6Ah
          source_id: s_GhbhvupPydLhgJjp5wKMw4
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
        id: c_R5CeLGQBUiggxCegAdW3zR
        subject_person_id: p_J2pzEJGR3YLiPZfkakUuHK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7E1A2knSPDpxkdKYEdgRN6
          claim_id: c_R5CeLGQBUiggxCegAdW3zR
          source_id: s_GhbhvupPydLhgJjp5wKMw4
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

# 王進玄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王進玄 | accepted |
| death.date | 774年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王進玄（CBDB 192942）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192942&o=json)
