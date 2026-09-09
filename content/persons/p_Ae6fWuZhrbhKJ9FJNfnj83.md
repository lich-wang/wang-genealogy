---
schema: wang-person/v1
id: p_Ae6fWuZhrbhKJ9FJNfnj83
status: active
merged_into: null
display_name: 王三頌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pXzTMXoJUNbbCqNM6N4Sv5
        subject_person_id: p_Ae6fWuZhrbhKJ9FJNfnj83
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三頌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kg2JwNYAzxJ2QYMpLn8UUt
          claim_id: c_pXzTMXoJUNbbCqNM6N4Sv5
          source_id: s_nCa3fYGEqB45Sagx7kTBKj
          stance: supports
          locator: CBDB:635645
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635645）
          source: &a1
            id: s_nCa3fYGEqB45Sagx7kTBKj
            source_type: api_record
            title: 中国历代人物传记资料库：王三頌（CBDB 635645）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635645&o=json
            external_identifier: CBDB:635645
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.747Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L89VE1MVS5ghktrNQG77pB
        subject_person_id: p_Ae6fWuZhrbhKJ9FJNfnj83
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
        - id: cs_GirJZBEBaAfGR9FzZTDPdG
          claim_id: c_L89VE1MVS5ghktrNQG77pB
          source_id: s_nCa3fYGEqB45Sagx7kTBKj
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

# 王三頌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三頌 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三頌（CBDB 635645）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635645&o=json)
