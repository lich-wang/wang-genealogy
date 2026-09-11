---
schema: wang-person/v1
id: p_35wd94gwG3pzokf4a6CedM
status: active
merged_into: null
display_name: 王登
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7udT1561tYURWW2rd9c1BJ
        subject_person_id: p_35wd94gwG3pzokf4a6CedM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nbqmroEPadtPY3fWtrPPJx
          claim_id: c_7udT1561tYURWW2rd9c1BJ
          source_id: s_jnU1wrcswMwACQgeP5fatf
          stance: supports
          locator: CBDB:10686
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10686）
          source: &a1
            id: s_jnU1wrcswMwACQgeP5fatf
            source_type: api_record
            title: 中国历代人物传记资料库：王登（CBDB 10686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10686&o=json
            external_identifier: CBDB:10686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.540Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pFogdX3TgAGFoBAJGVJNSc
        subject_person_id: p_35wd94gwG3pzokf4a6CedM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1066年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DSugPJPya4G4EXmGi3ZppN
          claim_id: c_pFogdX3TgAGFoBAJGVJNSc
          source_id: s_jnU1wrcswMwACQgeP5fatf
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
        id: c_oCHkVKDLPF4Q5guqftThWt
        subject_person_id: p_35wd94gwG3pzokf4a6CedM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1126年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JGNXzJwPxDQfMZrGmcbdyd
          claim_id: c_oCHkVKDLPF4Q5guqftThWt
          source_id: s_jnU1wrcswMwACQgeP5fatf
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
        id: c_qUQ6SPXrLDR53bNAs2rpkA
        subject_person_id: p_35wd94gwG3pzokf4a6CedM
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
        - id: cs_17FAPg5ekxcYKTZJSczXrw
          claim_id: c_qUQ6SPXrLDR53bNAs2rpkA
          source_id: s_jnU1wrcswMwACQgeP5fatf
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
  descendants:
    - claim:
        id: c_Km3nzbGjOihJYtQghi6KDg
        subject_person_id: p_35wd94gwG3pzokf4a6CedM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ABtiiFw9LGXZnTbrZS68pV
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0HtTgCLVWuEBR8HYxOIu6W
          claim_id: c_Km3nzbGjOihJYtQghi6KDg
          source_id: s_jnU1wrcswMwACQgeP5fatf
          stance: supports
          locator: 全宋文，卷 5677：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ABtiiFw9LGXZnTbrZS68pV
        status: active
        display_name: 王澐
        merged_into_person_id: null
    - claim:
        id: c_XoAN5C9UkyQQPtrzS6La8c
        subject_person_id: p_35wd94gwG3pzokf4a6CedM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Ccs9NajCd62mVKopumCjG5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2OKQFqu5BgHEqa8V9AGgs4
          claim_id: c_XoAN5C9UkyQQPtrzS6La8c
          source_id: s_jnU1wrcswMwACQgeP5fatf
          stance: supports
          locator: 全宋文，卷 5677：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ccs9NajCd62mVKopumCjG5
        status: active
        display_name: 王演
        merged_into_person_id: null
  other: []
---

# 王登

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王登 | accepted |
| birth.date | 1066年 | accepted |
| death.date | 1126年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_ABtiiFw9LGXZnTbrZS68pV | 王澐 | accepted |
| descendants | p_Ccs9NajCd62mVKopumCjG5 | 王演 | accepted |

## 外部来源

- [中国历代人物传记资料库：王登（CBDB 10686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10686&o=json)
