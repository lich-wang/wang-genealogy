---
schema: wang-person/v1
id: p_dVWkq6QF34m9g4S4d18odc
status: active
merged_into: null
display_name: 王惟善
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ngk4pKxN6nKqeFwLzyazCe
        subject_person_id: p_dVWkq6QF34m9g4S4d18odc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Mxm19qA6QGYCsGpibqx7Gh
          claim_id: c_ngk4pKxN6nKqeFwLzyazCe
          source_id: s_iYkmnp2vNKNwQqACQWwNxC
          stance: supports
          locator: CBDB:338654
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（338654）
          source: &a1
            id: s_iYkmnp2vNKNwQqACQWwNxC
            source_type: api_record
            title: 中国历代人物传记资料库：王惟善（CBDB 338654）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338654&o=json
            external_identifier: CBDB:338654
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.558Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_mLa5Aqz54n2arYr3mk3Grc
        subject_person_id: p_dVWkq6QF34m9g4S4d18odc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1419年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TveVPD4sUzZrM6NxN5J6RL
          claim_id: c_mLa5Aqz54n2arYr3mk3Grc
          source_id: s_iYkmnp2vNKNwQqACQWwNxC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MUyiReGF8M5EwfrFXSCX2P
        subject_person_id: p_dVWkq6QF34m9g4S4d18odc
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
        - id: cs_D6QNKT7QPzZQDVf4iRPw6E
          claim_id: c_MUyiReGF8M5EwfrFXSCX2P
          source_id: s_iYkmnp2vNKNwQqACQWwNxC
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
        id: c_cOgAQT_meVq6KRiVBSs4Yv
        subject_person_id: p_7VdDxDNV8k1y8nwSyxJoga
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dVWkq6QF34m9g4S4d18odc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5rrvD9-VMNGcOdMzy-4OOH
          claim_id: c_cOgAQT_meVq6KRiVBSs4Yv
          source_id: s_WGJBWQBaXN5Ay8DNEDn6a9
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第三甲第八十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WGJBWQBaXN5Ay8DNEDn6a9
            source_type: api_record
            title: 中国历代人物传记资料库：王胤賢（CBDB 244197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244197&o=json
            external_identifier: CBDB:244197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.026Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7VdDxDNV8k1y8nwSyxJoga
        status: active
        display_name: 王胤賢
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_K2q3jHLcfgF3pB5OgVD3YV
        subject_person_id: p_PJsc1cLHcqWGocH1mhQqqC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dVWkq6QF34m9g4S4d18odc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MR0wOdTpS4F2RG1iXSZVPE
          claim_id: c_K2q3jHLcfgF3pB5OgVD3YV
          source_id: s_oSuHNHPKSr8vzZwNDi3bmn
          stance: supports
          locator: 景泰二年進士登科錄:一卷，第三甲第八十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oSuHNHPKSr8vzZwNDi3bmn
            source_type: api_record
            title: 中国历代人物传记资料库：王子秀（CBDB 244186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244186&o=json
            external_identifier: CBDB:244186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.026Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PJsc1cLHcqWGocH1mhQqqC
        status: active
        display_name: 王子秀
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王惟善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟善 | accepted |
| birth.date | 1419年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7VdDxDNV8k1y8nwSyxJoga | 王胤賢 | accepted |
| ancestors | p_PJsc1cLHcqWGocH1mhQqqC | 王子秀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惟善（CBDB 338654）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338654&o=json)
- [中国历代人物传记资料库：王胤賢（CBDB 244197）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244197&o=json)
- [中国历代人物传记资料库：王子秀（CBDB 244186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244186&o=json)
