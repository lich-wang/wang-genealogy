---
schema: wang-person/v1
id: p_sJw3vXAdXzHuC5w1Shag9M
status: active
merged_into: null
display_name: 王靖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m6LDKmiQiQ8zhqArae9NJc
        subject_person_id: p_sJw3vXAdXzHuC5w1Shag9M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_se1Bd6tLSALVs2PacLfjJw
          claim_id: c_m6LDKmiQiQ8zhqArae9NJc
          source_id: s_4UsyaZwExZCKvBdxo6Ntto
          stance: supports
          locator: CBDB:210326
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210326）
          source: &a1
            id: s_4UsyaZwExZCKvBdxo6Ntto
            source_type: api_record
            title: 中国历代人物传记资料库：王靖（CBDB 210326）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210326&o=json
            external_identifier: CBDB:210326
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.999Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rPPFy7nmfrRf1RyP76p92Q
        subject_person_id: p_sJw3vXAdXzHuC5w1Shag9M
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
        - id: cs_5kGVqP1A4rq3CPzPHqtvhG
          claim_id: c_rPPFy7nmfrRf1RyP76p92Q
          source_id: s_4UsyaZwExZCKvBdxo6Ntto
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

# 王靖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王靖 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王靖（CBDB 210326）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210326&o=json)
