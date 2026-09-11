---
schema: wang-person/v1
id: p_25r3CJHZNkQEGEuVBhWUVs
status: active
merged_into: null
display_name: 王孝幹
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PKFwciLMwZ57JLTbbfkuTQ
        subject_person_id: p_25r3CJHZNkQEGEuVBhWUVs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝幹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YYrfDtBfCxfy4KCi73synp
          claim_id: c_PKFwciLMwZ57JLTbbfkuTQ
          source_id: s_CfBgvGA6FYSyfBUU6oAfJj
          stance: supports
          locator: CBDB:175765
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175765）
          source: &a1
            id: s_CfBgvGA6FYSyfBUU6oAfJj
            source_type: api_record
            title: 中国历代人物传记资料库：王孝幹（CBDB 175765）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175765&o=json
            external_identifier: CBDB:175765
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.113Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_EnK712xW5goGzvUVNCFH6f
        subject_person_id: p_25r3CJHZNkQEGEuVBhWUVs
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 643年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2EKvirhYDgUEm1DSMcS3gz
          claim_id: c_EnK712xW5goGzvUVNCFH6f
          source_id: s_CfBgvGA6FYSyfBUU6oAfJj
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
        id: c_PAqy4udxYvozEx22BU6SzS
        subject_person_id: p_25r3CJHZNkQEGEuVBhWUVs
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
        - id: cs_nCbPWCcAnnPQVBAjmUnkfZ
          claim_id: c_PAqy4udxYvozEx22BU6SzS
          source_id: s_CfBgvGA6FYSyfBUU6oAfJj
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
        id: c_UoQGsQnv3zIqjkdvHNrAP8
        subject_person_id: p_EV8fEUrhLwWyvaPQ2UhEec
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_25r3CJHZNkQEGEuVBhWUVs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JfV-xoD9aZ80FUjGVoTy8D
          claim_id: c_UoQGsQnv3zIqjkdvHNrAP8
          source_id: s_CfBgvGA6FYSyfBUU6oAfJj
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EV8fEUrhLwWyvaPQ2UhEec
        status: active
        display_name: 王君儒
        merged_into_person_id: null
  children:
    - claim:
        id: c_PD4K1QXjGHKRyOTXk9kMdK
        subject_person_id: p_25r3CJHZNkQEGEuVBhWUVs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Gn1N7zXWy8dHyMciVcEtJf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bBN2qdnRIAwIKISFjFnYtD
          claim_id: c_PD4K1QXjGHKRyOTXk9kMdK
          source_id: s_CfBgvGA6FYSyfBUU6oAfJj
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Gn1N7zXWy8dHyMciVcEtJf
        status: active
        display_name: 王康壽
        merged_into_person_id: null
    - claim:
        id: c_5PQqOTIOncqIpyuX8K1ylR
        subject_person_id: p_25r3CJHZNkQEGEuVBhWUVs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cF1htpNH6BwT5Bq5UHSRxA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LJks3qJ2y9tYxNMv5PPxZq
          claim_id: c_5PQqOTIOncqIpyuX8K1ylR
          source_id: s_CfBgvGA6FYSyfBUU6oAfJj
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cF1htpNH6BwT5Bq5UHSRxA
        status: active
        display_name: 王玄壽
        merged_into_person_id: null
    - claim:
        id: c_a2TFKbtKER--9GUNTmzNme
        subject_person_id: p_25r3CJHZNkQEGEuVBhWUVs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E64MWNTFSsJ7DHSfPW42AS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3NiEjMb6J2yYLfC8huNcmx
          claim_id: c_a2TFKbtKER--9GUNTmzNme
          source_id: s_CfBgvGA6FYSyfBUU6oAfJj
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_E64MWNTFSsJ7DHSfPW42AS
        status: active
        display_name: 王乾壽
        merged_into_person_id: null
    - claim:
        id: c_k52ZpmXwAgvHuZ5g6gS7ib
        subject_person_id: p_25r3CJHZNkQEGEuVBhWUVs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LPehjNKkq4LDvPu7Xhf9QQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H65hIESCU6qsw840ZxwkKu
          claim_id: c_k52ZpmXwAgvHuZ5g6gS7ib
          source_id: s_CfBgvGA6FYSyfBUU6oAfJj
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LPehjNKkq4LDvPu7Xhf9QQ
        status: active
        display_name: 王神壽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王孝幹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孝幹 | accepted |
| death.date | 643年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EV8fEUrhLwWyvaPQ2UhEec | 王君儒 | accepted |
| children | p_Gn1N7zXWy8dHyMciVcEtJf | 王康壽 | accepted |
| children | p_cF1htpNH6BwT5Bq5UHSRxA | 王玄壽 | accepted |
| children | p_E64MWNTFSsJ7DHSfPW42AS | 王乾壽 | accepted |
| children | p_LPehjNKkq4LDvPu7Xhf9QQ | 王神壽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孝幹（CBDB 175765）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175765&o=json)
