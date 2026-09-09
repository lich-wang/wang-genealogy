---
schema: wang-person/v1
id: p_12jgJLHbKkLvQcFSkbKykL
status: active
merged_into: null
display_name: 王沛膏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M2xkLPJuVNV9CURQyJaGxn
        subject_person_id: p_12jgJLHbKkLvQcFSkbKykL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沛膏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ULeGGxAww9ixLZGz5cXzaF
          claim_id: c_M2xkLPJuVNV9CURQyJaGxn
          source_id: s_psxQU2vh3jHsQAJCrdRv4f
          stance: supports
          locator: CBDB:639056
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639056）
          source: &a1
            id: s_psxQU2vh3jHsQAJCrdRv4f
            source_type: api_record
            title: 中国历代人物传记资料库：王沛膏（CBDB 639056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639056&o=json
            external_identifier: CBDB:639056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.823Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WxDQHwtTYwSmMXW7iKr6iy
        subject_person_id: p_12jgJLHbKkLvQcFSkbKykL
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
        - id: cs_dYryVQDeRemRRbqpuBMtP8
          claim_id: c_WxDQHwtTYwSmMXW7iKr6iy
          source_id: s_psxQU2vh3jHsQAJCrdRv4f
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

# 王沛膏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沛膏 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王沛膏（CBDB 639056）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639056&o=json)
