---
schema: wang-person/v1
id: p_KvaDyJMUHzeGStoEsTh4se
status: active
merged_into: null
display_name: 王倫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vcJKqZvrirCfvpbWeEs3sC
        subject_person_id: p_KvaDyJMUHzeGStoEsTh4se
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cdW4s2dL5bvGc6mQuqkA6A
          claim_id: c_vcJKqZvrirCfvpbWeEs3sC
          source_id: s_yykPmVJb5Wn59M9QG2gpGt
          stance: supports
          locator: CBDB:8178
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（8178）
          source: &a1
            id: s_yykPmVJb5Wn59M9QG2gpGt
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 8178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8178&o=json
            external_identifier: CBDB:8178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.505Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LpPQ1vU3NcvJzJQ7eGbRtL
        subject_person_id: p_KvaDyJMUHzeGStoEsTh4se
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1084年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JGBWTWaHNzAz9XpRNL9CJP
          claim_id: c_LpPQ1vU3NcvJzJQ7eGbRtL
          source_id: s_yykPmVJb5Wn59M9QG2gpGt
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
        id: c_mpWHMHZY65LFwdLjPBJHP2
        subject_person_id: p_KvaDyJMUHzeGStoEsTh4se
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1144年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3MPmbXB8HXR6kqtcfU7SCs
          claim_id: c_mpWHMHZY65LFwdLjPBJHP2
          source_id: s_yykPmVJb5Wn59M9QG2gpGt
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
        id: c_4XNHdYj13ZS7QAFjQPXhiq
        subject_person_id: p_KvaDyJMUHzeGStoEsTh4se
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GC5h43VqnaMQgMXroRTNam
          claim_id: c_4XNHdYj13ZS7QAFjQPXhiq
          source_id: s_yykPmVJb5Wn59M9QG2gpGt
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

# 王倫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王倫 | accepted |
| birth.date | 1084年 | accepted |
| death.date | 1144年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王倫（CBDB 8178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8178&o=json)
