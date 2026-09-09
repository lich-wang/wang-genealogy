---
schema: wang-person/v1
id: p_i2LMACHk9VUrTpEULc1FM9
status: active
merged_into: null
display_name: 王素心
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nB5hV6DiHiMptKBmCiRKqr
        subject_person_id: p_i2LMACHk9VUrTpEULc1FM9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王素心
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zkrNgEhnCD2iQb1ifTANSL
          claim_id: c_nB5hV6DiHiMptKBmCiRKqr
          source_id: s_QPz4c6GPNnEo2dX5LTN9i9
          stance: supports
          locator: CBDB:71935
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71935）
          source: &a1
            id: s_QPz4c6GPNnEo2dX5LTN9i9
            source_type: api_record
            title: 中国历代人物传记资料库：王素心（CBDB 71935）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71935&o=json
            external_identifier: CBDB:71935
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.929Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_T9KCymFZGwqrjosakUdtMj
        subject_person_id: p_i2LMACHk9VUrTpEULc1FM9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1866年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5pSYjGqdXCao259A4srq1F
          claim_id: c_T9KCymFZGwqrjosakUdtMj
          source_id: s_QPz4c6GPNnEo2dX5LTN9i9
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
        id: c_jHX1Q1SMPE46HqzFfZ7fUq
        subject_person_id: p_i2LMACHk9VUrTpEULc1FM9
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
        - id: cs_zYJvpP9NZKfZQMhT6qF331
          claim_id: c_jHX1Q1SMPE46HqzFfZ7fUq
          source_id: s_QPz4c6GPNnEo2dX5LTN9i9
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

# 王素心

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王素心 | accepted |
| death.date | 1866年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王素心（CBDB 71935）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71935&o=json)
