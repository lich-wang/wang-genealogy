---
schema: wang-person/v1
id: p_mt3Tc1QAKSgUvg3weXNp7S
status: active
merged_into: null
display_name: 王偁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tPsTmKoQgvDLhp89yNmxUb
        subject_person_id: p_mt3Tc1QAKSgUvg3weXNp7S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D1H3RFkSRVvBUto96wLyws
          claim_id: c_tPsTmKoQgvDLhp89yNmxUb
          source_id: s_zeRjr6QpWwH1KUNZamYASP
          stance: supports
          locator: CBDB:71196
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71196）
          source: &a1
            id: s_zeRjr6QpWwH1KUNZamYASP
            source_type: api_record
            title: 中国历代人物传记资料库：王偁（CBDB 71196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71196&o=json
            external_identifier: CBDB:71196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.472Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3R5x3MCrKyA793pJ21Z5aa
        subject_person_id: p_mt3Tc1QAKSgUvg3weXNp7S
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1786年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rypB7YpnxuHc7AJJXgAhJi
          claim_id: c_3R5x3MCrKyA793pJ21Z5aa
          source_id: s_zeRjr6QpWwH1KUNZamYASP
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
        id: c_UfNyk3bTj9m5BCKJVMus4J
        subject_person_id: p_mt3Tc1QAKSgUvg3weXNp7S
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
        - id: cs_AGPtZQqBzUSbEUUoeCERju
          claim_id: c_UfNyk3bTj9m5BCKJVMus4J
          source_id: s_zeRjr6QpWwH1KUNZamYASP
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

# 王偁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王偁 | accepted |
| birth.date | 1786年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王偁（CBDB 71196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71196&o=json)
