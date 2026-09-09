---
schema: wang-person/v1
id: p_rUMuK7CzfJfHKJ88kFi4jQ
status: active
merged_into: null
display_name: 王如琬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NWRgHFv5E4DEb2Wo782gWn
        subject_person_id: p_rUMuK7CzfJfHKJ88kFi4jQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如琬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3LnFJUdWX7dH4rMNywEcrB
          claim_id: c_NWRgHFv5E4DEb2Wo782gWn
          source_id: s_mQqTo3LN7Q5TznBtyZ4mf4
          stance: supports
          locator: CBDB:141769
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141769）
          source: &a1
            id: s_mQqTo3LN7Q5TznBtyZ4mf4
            source_type: api_record
            title: 中国历代人物传记资料库：王如琬（CBDB 141769）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141769&o=json
            external_identifier: CBDB:141769
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.205Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gRmgjNfCGtLQWHRWmdu5Cp
        subject_person_id: p_rUMuK7CzfJfHKJ88kFi4jQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 763年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NHbhjXkPMgoTiJHtHgZGxk
          claim_id: c_gRmgjNfCGtLQWHRWmdu5Cp
          source_id: s_mQqTo3LN7Q5TznBtyZ4mf4
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
        id: c_BPehU1qg8dws8UAuK3BB6G
        subject_person_id: p_rUMuK7CzfJfHKJ88kFi4jQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 836年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k4LdPhTXG6EUbzmQJ6MBbm
          claim_id: c_BPehU1qg8dws8UAuK3BB6G
          source_id: s_mQqTo3LN7Q5TznBtyZ4mf4
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
        id: c_L73Pbwffai13NSunTHz8zo
        subject_person_id: p_rUMuK7CzfJfHKJ88kFi4jQ
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
        - id: cs_ZaW4kRbnprkgrbTgzwbi74
          claim_id: c_L73Pbwffai13NSunTHz8zo
          source_id: s_mQqTo3LN7Q5TznBtyZ4mf4
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

# 王如琬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王如琬 | accepted |
| birth.date | 763年 | accepted |
| death.date | 836年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王如琬（CBDB 141769）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141769&o=json)
