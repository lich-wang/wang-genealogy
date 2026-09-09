---
schema: wang-person/v1
id: p_JDkk9mN2RuQb3Zpo6HEPAu
status: active
merged_into: null
display_name: 王泰徵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2oAdLaMJSyUP3yC7XGsVbb
        subject_person_id: p_JDkk9mN2RuQb3Zpo6HEPAu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰徵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5YcNMLgBqwfiahDUZ9B3BY
          claim_id: c_2oAdLaMJSyUP3yC7XGsVbb
          source_id: s_bettZ14zHZ6AabAnPdZHnv
          stance: supports
          locator: CBDB:343340
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343340）
          source: &a1
            id: s_bettZ14zHZ6AabAnPdZHnv
            source_type: api_record
            title: 中国历代人物传记资料库：王泰徵（CBDB 343340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343340&o=json
            external_identifier: CBDB:343340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.310Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q6A8XgkLe6gdzMwydxWGfP
        subject_person_id: p_JDkk9mN2RuQb3Zpo6HEPAu
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
        - id: cs_avBZ2yGhNcGromQiLx6cuc
          claim_id: c_Q6A8XgkLe6gdzMwydxWGfP
          source_id: s_bettZ14zHZ6AabAnPdZHnv
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

# 王泰徵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泰徵 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王泰徵（CBDB 343340）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343340&o=json)
