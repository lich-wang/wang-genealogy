---
schema: wang-person/v1
id: p_aHiY2a3fZHi8uhGv4QVxVg
status: active
merged_into: null
display_name: 王暹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G6PxKwjtoY2murDGEnz8nd
        subject_person_id: p_aHiY2a3fZHi8uhGv4QVxVg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cyMVhPb2e6gZysjDH4QLaJ
          claim_id: c_G6PxKwjtoY2murDGEnz8nd
          source_id: s_31AuVxQMh9N6VSb38yAxgv
          stance: supports
          locator: CBDB:126830
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126830）
          source: &a1
            id: s_31AuVxQMh9N6VSb38yAxgv
            source_type: api_record
            title: 中国历代人物传记资料库：王暹（CBDB 126830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126830&o=json
            external_identifier: CBDB:126830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.238Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_AHnxMSaqdT7aBAz1B1AqUJ
        subject_person_id: p_aHiY2a3fZHi8uhGv4QVxVg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1395年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cyoULL62Xbdk6RVhXGX4sH
          claim_id: c_AHnxMSaqdT7aBAz1B1AqUJ
          source_id: s_31AuVxQMh9N6VSb38yAxgv
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
        id: c_eZt2PpZ1FRZMYACdMotpE5
        subject_person_id: p_aHiY2a3fZHi8uhGv4QVxVg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1464年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3SDWJT6UE1UtdYwMLXY92d
          claim_id: c_eZt2PpZ1FRZMYACdMotpE5
          source_id: s_31AuVxQMh9N6VSb38yAxgv
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
        id: c_5B5Cnhh8ECTmkMzvmHgenn
        subject_person_id: p_aHiY2a3fZHi8uhGv4QVxVg
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
        - id: cs_anGHFG3jYdUWRoUjDRFYCJ
          claim_id: c_5B5Cnhh8ECTmkMzvmHgenn
          source_id: s_31AuVxQMh9N6VSb38yAxgv
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

# 王暹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王暹 | accepted |
| birth.date | 1395年 | accepted |
| death.date | 1464年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王暹（CBDB 126830）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126830&o=json)
