---
schema: wang-person/v1
id: p_KA8jsnDWkZiH7wDc8fzxW8
status: active
merged_into: null
display_name: 王豫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xEqA4AS6ayZeC9dRXybekk
        subject_person_id: p_KA8jsnDWkZiH7wDc8fzxW8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3qQVCaMmjHfX84EHooa74d
          claim_id: c_xEqA4AS6ayZeC9dRXybekk
          source_id: s_ixaJ8M1iVQFwbQ5gxgZhW8
          stance: supports
          locator: CBDB:69482
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69482）
          source: &a1
            id: s_ixaJ8M1iVQFwbQ5gxgZhW8
            source_type: api_record
            title: 中国历代人物传记资料库：王豫（CBDB 69482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69482&o=json
            external_identifier: CBDB:69482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.290Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_WsKN9TYLys6yL8fm837i9H
        subject_person_id: p_KA8jsnDWkZiH7wDc8fzxW8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1768年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EMMuZ9M7D4JdQ5A47E42n5
          claim_id: c_WsKN9TYLys6yL8fm837i9H
          source_id: s_ixaJ8M1iVQFwbQ5gxgZhW8
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
        id: c_59o23mtHbt599ZThefkKEZ
        subject_person_id: p_KA8jsnDWkZiH7wDc8fzxW8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1826年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wvTBBbK92FiLz816frLQkK
          claim_id: c_59o23mtHbt599ZThefkKEZ
          source_id: s_ixaJ8M1iVQFwbQ5gxgZhW8
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
        id: c_CGBJdwgH1mGMXAs4JJhf1L
        subject_person_id: p_KA8jsnDWkZiH7wDc8fzxW8
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
        - id: cs_AuUyJrGgo7HutQzz9MQMTb
          claim_id: c_CGBJdwgH1mGMXAs4JJhf1L
          source_id: s_ixaJ8M1iVQFwbQ5gxgZhW8
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

# 王豫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王豫 | accepted |
| birth.date | 1768年 | accepted |
| death.date | 1826年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王豫（CBDB 69482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69482&o=json)
