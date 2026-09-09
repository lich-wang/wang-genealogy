---
schema: wang-person/v1
id: p_qvbo9my3E8G6gphwGfx6G9
status: active
merged_into: null
display_name: 王梓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W9FHJeTdENTLfpMwRWYcAN
        subject_person_id: p_qvbo9my3E8G6gphwGfx6G9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nK1BeLFS2EXeK96GqLMePm
          claim_id: c_W9FHJeTdENTLfpMwRWYcAN
          source_id: s_6nxMEb9YcFcX4hfMg7anWQ
          stance: supports
          locator: CBDB:71185
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71185）
          source: &a1
            id: s_6nxMEb9YcFcX4hfMg7anWQ
            source_type: api_record
            title: 中国历代人物传记资料库：王梓（CBDB 71185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71185&o=json
            external_identifier: CBDB:71185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.464Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ghfiqUpQ1Z5vhn4AgxNKWL
        subject_person_id: p_qvbo9my3E8G6gphwGfx6G9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1792年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s6vJKv1LDCCzo79UCEnTAz
          claim_id: c_ghfiqUpQ1Z5vhn4AgxNKWL
          source_id: s_6nxMEb9YcFcX4hfMg7anWQ
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
        id: c_5NxtX4S4gHBd2JQTYncyBD
        subject_person_id: p_qvbo9my3E8G6gphwGfx6G9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1851年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6E2ibfAz4ThiLQpsY4aK1Z
          claim_id: c_5NxtX4S4gHBd2JQTYncyBD
          source_id: s_6nxMEb9YcFcX4hfMg7anWQ
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
        id: c_xUJjVE6dXeGYLVaih9j2Ba
        subject_person_id: p_qvbo9my3E8G6gphwGfx6G9
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
        - id: cs_aDsxpVpBgyoZRRHCV8c1xY
          claim_id: c_xUJjVE6dXeGYLVaih9j2Ba
          source_id: s_6nxMEb9YcFcX4hfMg7anWQ
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

# 王梓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王梓 | accepted |
| birth.date | 1792年 | accepted |
| death.date | 1851年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王梓（CBDB 71185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71185&o=json)
