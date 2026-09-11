---
schema: wang-person/v1
id: p_DF5f3BpuwMwBFDLpFCT3zQ
status: active
merged_into: null
display_name: 王有方
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L1ccQ7zokg32oeCBmquzwf
        subject_person_id: p_DF5f3BpuwMwBFDLpFCT3zQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有方
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zPgqLVvip1Je1g3ck71PNn
          claim_id: c_L1ccQ7zokg32oeCBmquzwf
          source_id: s_Kwyn6u7TFdyJrjcAhH7MB6
          stance: supports
          locator: CBDB:150804
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（150804）
          source: &a1
            id: s_Kwyn6u7TFdyJrjcAhH7MB6
            source_type: api_record
            title: 中国历代人物传记资料库：王有方（CBDB 150804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150804&o=json
            external_identifier: CBDB:150804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.820Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5WhETgNSJMSxDTgr5s6pjo
        subject_person_id: p_DF5f3BpuwMwBFDLpFCT3zQ
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
        - id: cs_VepVwez59TaPWKM5LFArBH
          claim_id: c_5WhETgNSJMSxDTgr5s6pjo
          source_id: s_Kwyn6u7TFdyJrjcAhH7MB6
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
        id: c_O2qxOjW_q0feGPVbq_G1y0
        subject_person_id: p_M4YBTQCHyro2Kzp6DGJmjw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DF5f3BpuwMwBFDLpFCT3zQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3w_-yTAVPB7zXHewAUbTYe
          claim_id: c_O2qxOjW_q0feGPVbq_G1y0
          source_id: s_Kwyn6u7TFdyJrjcAhH7MB6
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_M4YBTQCHyro2Kzp6DGJmjw
        status: active
        display_name: 王元季
        merged_into_person_id: null
  children:
    - claim:
        id: c_w7_IWpvtZ8Rrz2gvHZ7Sc7
        subject_person_id: p_DF5f3BpuwMwBFDLpFCT3zQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KRJzmY18UWZPSeL3isfUAa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aCGfvD-n5pcer5VrsKR41h
          claim_id: c_w7_IWpvtZ8Rrz2gvHZ7Sc7
          source_id: s_Kwyn6u7TFdyJrjcAhH7MB6
          stance: supports
          locator: 唐代墓誌匯編:二卷，Jinglong 27：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KRJzmY18UWZPSeL3isfUAa
        status: active
        display_name: 王行果
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王有方

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有方 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_M4YBTQCHyro2Kzp6DGJmjw | 王元季 | accepted |
| children | p_KRJzmY18UWZPSeL3isfUAa | 王行果 | accepted |

## 外部来源

- [中国历代人物传记资料库：王有方（CBDB 150804）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150804&o=json)
