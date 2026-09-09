---
schema: wang-person/v1
id: p_5F1q9a4jvD8uYW86GWs9iA
status: active
merged_into: null
display_name: 王孚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YqT4pXzwcSemHoCPhmYp6r
        subject_person_id: p_5F1q9a4jvD8uYW86GWs9iA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C5iGemP4CgTYit6PN7bjgh
          claim_id: c_YqT4pXzwcSemHoCPhmYp6r
          source_id: s_kNYv1Pq9dv9F2SdyZ62z51
          stance: supports
          locator: CBDB:100666
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100666）
          source: &a1
            id: s_kNYv1Pq9dv9F2SdyZ62z51
            source_type: api_record
            title: 中国历代人物传记资料库：王孚（CBDB 100666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100666&o=json
            external_identifier: CBDB:100666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.352Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BjWmeDWcUSbGREyE5H7iPG
        subject_person_id: p_5F1q9a4jvD8uYW86GWs9iA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1249年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3aFA6YMzxDhKaWSRAPVW7S
          claim_id: c_BjWmeDWcUSbGREyE5H7iPG
          source_id: s_kNYv1Pq9dv9F2SdyZ62z51
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
        id: c_1tg2iWC5ScZdUAtAHMkQBb
        subject_person_id: p_5F1q9a4jvD8uYW86GWs9iA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1327年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dxhR85gCge2za2DUDmUm1x
          claim_id: c_1tg2iWC5ScZdUAtAHMkQBb
          source_id: s_kNYv1Pq9dv9F2SdyZ62z51
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
        id: c_DykU83hnszHhthjomKtPyz
        subject_person_id: p_5F1q9a4jvD8uYW86GWs9iA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n7A1R2yVHWpQxAePQ91J7i
          claim_id: c_DykU83hnszHhthjomKtPyz
          source_id: s_kNYv1Pq9dv9F2SdyZ62z51
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

# 王孚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孚 | accepted |
| birth.date | 1249年 | accepted |
| death.date | 1327年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王孚（CBDB 100666）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100666&o=json)
