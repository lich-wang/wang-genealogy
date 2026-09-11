---
schema: wang-person/v1
id: p_F6WkfLvaTXQtQE2urkSyas
status: active
merged_into: null
display_name: 王勉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U7owJRbF9Ki42JEvdvAmfp
        subject_person_id: p_F6WkfLvaTXQtQE2urkSyas
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CpQfRRicd1kvEP4nrFcyaU
          claim_id: c_U7owJRbF9Ki42JEvdvAmfp
          source_id: s_q951hWNHaPr7eZicACQT4m
          stance: supports
          locator: CBDB:189497
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（189497）
          source: &a1
            id: s_q951hWNHaPr7eZicACQT4m
            source_type: api_record
            title: 中国历代人物传记资料库：王勉（CBDB 189497）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189497&o=json
            external_identifier: CBDB:189497
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.298Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_9Ps9x75uGiuHf4QHu4rm5s
        subject_person_id: p_F6WkfLvaTXQtQE2urkSyas
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 722年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZreELdMdQ5DF9BeGSyGC5Q
          claim_id: c_9Ps9x75uGiuHf4QHu4rm5s
          source_id: s_q951hWNHaPr7eZicACQT4m
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
        id: c_2iB7uHyDWNs5Tir3myhAQg
        subject_person_id: p_F6WkfLvaTXQtQE2urkSyas
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
        - id: cs_bRCkjS4NEJKN8qxEvQh37y
          claim_id: c_2iB7uHyDWNs5Tir3myhAQg
          source_id: s_q951hWNHaPr7eZicACQT4m
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
        id: c_2x5o1SpTWz6D-1Mq-pt45J
        subject_person_id: p_Sj796DnK3Tgm7RLGsbpMfe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F6WkfLvaTXQtQE2urkSyas
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cv3S1p8eIOor4BzE6AyoSm
          claim_id: c_2x5o1SpTWz6D-1Mq-pt45J
          source_id: s_q951hWNHaPr7eZicACQT4m
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Sj796DnK3Tgm7RLGsbpMfe
        status: active
        display_name: 王福祚
        merged_into_person_id: null
  children:
    - claim:
        id: c_38b0L5HjhdrggfsK2ONoOG
        subject_person_id: p_F6WkfLvaTXQtQE2urkSyas
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LYYtQfR2dKwKWkcANKAwMY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ko8KDW-zV9HrP3s1BuqPgK
          claim_id: c_38b0L5HjhdrggfsK2ONoOG
          source_id: s_q951hWNHaPr7eZicACQT4m
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LYYtQfR2dKwKWkcANKAwMY
        status: active
        display_name: 王怡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王勉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勉 | accepted |
| death.date | 722年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Sj796DnK3Tgm7RLGsbpMfe | 王福祚 | accepted |
| children | p_LYYtQfR2dKwKWkcANKAwMY | 王怡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王勉（CBDB 189497）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189497&o=json)
