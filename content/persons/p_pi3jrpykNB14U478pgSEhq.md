---
schema: wang-person/v1
id: p_pi3jrpykNB14U478pgSEhq
status: active
merged_into: null
display_name: 王方
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MjcHZBdiwMNa6SjnTfkeFM
        subject_person_id: p_pi3jrpykNB14U478pgSEhq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gPURJdHxBu87eDCPp3T8KV
          claim_id: c_MjcHZBdiwMNa6SjnTfkeFM
          source_id: s_DZX4Y33F85LUjj7GuoCn67
          stance: supports
          locator: CBDB:143744
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（143744）
          source: &a1
            id: s_DZX4Y33F85LUjj7GuoCn67
            source_type: api_record
            title: 中国历代人物传记资料库：王方（CBDB 143744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143744&o=json
            external_identifier: CBDB:143744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.630Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_WhSUrLHz7yrfuEu3Hwok3P
        subject_person_id: p_pi3jrpykNB14U478pgSEhq
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 624年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ioP9Kq59aU8qTg36WwEMLi
          claim_id: c_WhSUrLHz7yrfuEu3Hwok3P
          source_id: s_DZX4Y33F85LUjj7GuoCn67
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
        id: c_9eCv6KLQe5yLYVNpEPGSD2
        subject_person_id: p_pi3jrpykNB14U478pgSEhq
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 701年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_64DrPx6oa78Q39dHQjtbHZ
          claim_id: c_9eCv6KLQe5yLYVNpEPGSD2
          source_id: s_DZX4Y33F85LUjj7GuoCn67
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
        id: c_7j3HmGCNhJWiDRY3Bw3nAK
        subject_person_id: p_pi3jrpykNB14U478pgSEhq
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
        - id: cs_JL7nNN6HXBPc11J4B49DmH
          claim_id: c_7j3HmGCNhJWiDRY3Bw3nAK
          source_id: s_DZX4Y33F85LUjj7GuoCn67
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

# 王方

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王方 | accepted |
| birth.date | 624年 | accepted |
| death.date | 701年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王方（CBDB 143744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143744&o=json)
