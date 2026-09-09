---
schema: wang-person/v1
id: p_uCFoa64cU5wtMJC9cj24vp
status: active
merged_into: null
display_name: 王書麟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5bALyws2j9NrmFQhDKqo9K
        subject_person_id: p_uCFoa64cU5wtMJC9cj24vp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王書麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_juBjQAC84A1GMjHfcqJ6H6
          claim_id: c_5bALyws2j9NrmFQhDKqo9K
          source_id: s_mPeZcNtbzR9JT8SGpqLmGP
          stance: supports
          locator: CBDB:638554
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638554）
          source: &a1
            id: s_mPeZcNtbzR9JT8SGpqLmGP
            source_type: api_record
            title: 中国历代人物传记资料库：王書麟（CBDB 638554）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638554&o=json
            external_identifier: CBDB:638554
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.713Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vTuMvjzqD3sav4WKmZQpof
        subject_person_id: p_uCFoa64cU5wtMJC9cj24vp
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
        - id: cs_xPqVP6mms3QBB1dGMJFUcP
          claim_id: c_vTuMvjzqD3sav4WKmZQpof
          source_id: s_mPeZcNtbzR9JT8SGpqLmGP
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

# 王書麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王書麟 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王書麟（CBDB 638554）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638554&o=json)
