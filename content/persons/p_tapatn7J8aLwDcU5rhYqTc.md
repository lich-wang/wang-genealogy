---
schema: wang-person/v1
id: p_tapatn7J8aLwDcU5rhYqTc
status: active
merged_into: null
display_name: 王廷極
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SEwdYr9FPWQEPL6HGwJ8xf
        subject_person_id: p_tapatn7J8aLwDcU5rhYqTc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷極
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rd5A94o2w7eTfU41ryhqjD
          claim_id: c_SEwdYr9FPWQEPL6HGwJ8xf
          source_id: s_SkXwt4af77XQNkaAWmM9t4
          stance: supports
          locator: CBDB:60041
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（60041）
          source: &a1
            id: s_SkXwt4af77XQNkaAWmM9t4
            source_type: api_record
            title: 中国历代人物传记资料库：王廷極（CBDB 60041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60041&o=json
            external_identifier: CBDB:60041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.848Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1pY66ggnyC6Mph6UnW1sjh
        subject_person_id: p_tapatn7J8aLwDcU5rhYqTc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1754年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E5E8sB4JiDfoSWzC7vXR6Q
          claim_id: c_1pY66ggnyC6Mph6UnW1sjh
          source_id: s_SkXwt4af77XQNkaAWmM9t4
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
        id: c_6Qq63j56FVM5gGs6XhDWa8
        subject_person_id: p_tapatn7J8aLwDcU5rhYqTc
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
        - id: cs_iSsyuv9SxMxb1PFRqX5mCo
          claim_id: c_6Qq63j56FVM5gGs6XhDWa8
          source_id: s_SkXwt4af77XQNkaAWmM9t4
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

# 王廷極

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷極 | accepted |
| death.date | 1754年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷極（CBDB 60041）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60041&o=json)
