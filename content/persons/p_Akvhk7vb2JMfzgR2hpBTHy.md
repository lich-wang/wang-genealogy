---
schema: wang-person/v1
id: p_Akvhk7vb2JMfzgR2hpBTHy
status: active
merged_into: null
display_name: 王浦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X767NtFFv11YtevqXpv6kU
        subject_person_id: p_Akvhk7vb2JMfzgR2hpBTHy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LoN3y3epMn6fkn4Sry3czv
          claim_id: c_X767NtFFv11YtevqXpv6kU
          source_id: s_FfvRYCEMRU5qP63TuKR5SZ
          stance: supports
          locator: CBDB:294329
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294329）
          source: &a1
            id: s_FfvRYCEMRU5qP63TuKR5SZ
            source_type: api_record
            title: 中国历代人物传记资料库：王浦（CBDB 294329）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294329&o=json
            external_identifier: CBDB:294329
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.447Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bs2GA4npAtMPQZeQNH2Jok
        subject_person_id: p_Akvhk7vb2JMfzgR2hpBTHy
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
        - id: cs_QLnRdDDDYwaDAujU6pYoqc
          claim_id: c_bs2GA4npAtMPQZeQNH2Jok
          source_id: s_FfvRYCEMRU5qP63TuKR5SZ
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

# 王浦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浦 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王浦（CBDB 294329）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294329&o=json)
