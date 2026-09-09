---
schema: wang-person/v1
id: p_sQhBWRij3zQXfm45ogoJdE
status: active
merged_into: null
display_name: 王廷泰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uGbV6kL3ho4pVXpPo4vtCY
        subject_person_id: p_sQhBWRij3zQXfm45ogoJdE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ruwxYASPGGjoAm5vax7RYJ
          claim_id: c_uGbV6kL3ho4pVXpPo4vtCY
          source_id: s_c2B9m5R9AQz3LBWopyQNd3
          stance: supports
          locator: CBDB:341937
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341937）
          source: &a1
            id: s_c2B9m5R9AQz3LBWopyQNd3
            source_type: api_record
            title: 中国历代人物传记资料库：王廷泰（CBDB 341937）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341937&o=json
            external_identifier: CBDB:341937
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.782Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Fz6Wp42MJ6ZJnYSY8s5mfQ
        subject_person_id: p_sQhBWRij3zQXfm45ogoJdE
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
        - id: cs_hL3K38QRB8YzQKeNGzhpBY
          claim_id: c_Fz6Wp42MJ6ZJnYSY8s5mfQ
          source_id: s_c2B9m5R9AQz3LBWopyQNd3
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

# 王廷泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷泰 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷泰（CBDB 341937）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341937&o=json)
