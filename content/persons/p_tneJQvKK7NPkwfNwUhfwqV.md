---
schema: wang-person/v1
id: p_tneJQvKK7NPkwfNwUhfwqV
status: active
merged_into: null
display_name: 王孝倫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R1qWo3kvpWg5GFs9aH57yR
        subject_person_id: p_tneJQvKK7NPkwfNwUhfwqV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝倫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9Amq22t6HHS3DqCmw2LDr4
          claim_id: c_R1qWo3kvpWg5GFs9aH57yR
          source_id: s_P4PcPxcheiEx26Wv36v5Mk
          stance: supports
          locator: CBDB:175773
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175773）
          source: &a1
            id: s_P4PcPxcheiEx26Wv36v5Mk
            source_type: api_record
            title: 中国历代人物传记资料库：王孝倫（CBDB 175773）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175773&o=json
            external_identifier: CBDB:175773
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.259Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_mDzT8iWygewYgcp33UzYWp
        subject_person_id: p_tneJQvKK7NPkwfNwUhfwqV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 662年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CdEMMu9SWhq3PhBHHZottn
          claim_id: c_mDzT8iWygewYgcp33UzYWp
          source_id: s_P4PcPxcheiEx26Wv36v5Mk
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
        id: c_n4o9j2bAqAn91MoQuqf6KH
        subject_person_id: p_tneJQvKK7NPkwfNwUhfwqV
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
        - id: cs_D2zZi6DZoo7b4FazFg4hJW
          claim_id: c_n4o9j2bAqAn91MoQuqf6KH
          source_id: s_P4PcPxcheiEx26Wv36v5Mk
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
        id: c_dGWJRNuD7va9hcBePjLK_h
        subject_person_id: p_EV8fEUrhLwWyvaPQ2UhEec
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tneJQvKK7NPkwfNwUhfwqV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ttxqd7rZEqGh12irY-7o68
          claim_id: c_dGWJRNuD7va9hcBePjLK_h
          source_id: s_P4PcPxcheiEx26Wv36v5Mk
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
        id: c_JGhf4n6ydoqBud817hyWkk
        subject_person_id: p_tneJQvKK7NPkwfNwUhfwqV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zuufXjtyAjy8GSAVLJySPz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9O_WoRxUkqEl-n24KcleSY
          claim_id: c_JGhf4n6ydoqBud817hyWkk
          source_id: s_P4PcPxcheiEx26Wv36v5Mk
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zuufXjtyAjy8GSAVLJySPz
        status: active
        display_name: 王嶔
        merged_into_person_id: null
    - claim:
        id: c_z-MoRyUhGGSTmDnXV1Y8-x
        subject_person_id: p_tneJQvKK7NPkwfNwUhfwqV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_raJNU9XFaTjQCkPaDGyZMr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z80aFoBVR02KI2g24nlPmR
          claim_id: c_z-MoRyUhGGSTmDnXV1Y8-x
          source_id: s_P4PcPxcheiEx26Wv36v5Mk
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_raJNU9XFaTjQCkPaDGyZMr
        status: active
        display_name: 王仁表
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王孝倫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孝倫 | accepted |
| death.date | 662年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EV8fEUrhLwWyvaPQ2UhEec | 王君儒 | accepted |
| children | p_zuufXjtyAjy8GSAVLJySPz | 王嶔 | accepted |
| children | p_raJNU9XFaTjQCkPaDGyZMr | 王仁表 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孝倫（CBDB 175773）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175773&o=json)
