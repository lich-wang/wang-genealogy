---
schema: wang-person/v1
id: p_hpEQRWT5BuCAx5iC3W6giV
status: active
merged_into: null
display_name: 王陵
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tHTYW5gW9JzizMeQ5czJmK
        subject_person_id: p_hpEQRWT5BuCAx5iC3W6giV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jyNe3o5Z9VBBpvP9J5v53i
          claim_id: c_tHTYW5gW9JzizMeQ5czJmK
          source_id: s_FpFxJ7HGYQueauLhFafnGq
          stance: supports
          locator: CBDB:190513
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190513）
          source: &a1
            id: s_FpFxJ7HGYQueauLhFafnGq
            source_type: api_record
            title: 中国历代人物传记资料库：王陵（CBDB 190513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190513&o=json
            external_identifier: CBDB:190513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.329Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_BQijQcyvAeq6okCnqBJ3Gn
        subject_person_id: p_hpEQRWT5BuCAx5iC3W6giV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 795年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x9JxuC7UPw7RCVygu5gyQA
          claim_id: c_BQijQcyvAeq6okCnqBJ3Gn
          source_id: s_FpFxJ7HGYQueauLhFafnGq
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
        id: c_GVs4FQKiUsQrEFfrG6thTi
        subject_person_id: p_hpEQRWT5BuCAx5iC3W6giV
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
        - id: cs_7tfywABPBrbZ1saFh7AJwL
          claim_id: c_GVs4FQKiUsQrEFfrG6thTi
          source_id: s_FpFxJ7HGYQueauLhFafnGq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WD-g3WJUZttoz6YjdnO9vr
        subject_person_id: p_8Aqc68C8fXRQi969oTgMa3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hpEQRWT5BuCAx5iC3W6giV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-gu-wdjqDZC-ILoygbq4Vb
          claim_id: c_WD-g3WJUZttoz6YjdnO9vr
          source_id: s_DXg8oyZdP5SXnRvZ3N2vD9
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DXg8oyZdP5SXnRvZ3N2vD9
            source_type: api_record
            title: 中国历代人物传记资料库：王旻（CBDB 190514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190514&o=json
            external_identifier: CBDB:190514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.330Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8Aqc68C8fXRQi969oTgMa3
        status: active
        display_name: 王旻
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王陵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王陵 | accepted |
| death.date | 795年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8Aqc68C8fXRQi969oTgMa3 | 王旻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王陵（CBDB 190513）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190513&o=json)
- [中国历代人物传记资料库：王旻（CBDB 190514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190514&o=json)
