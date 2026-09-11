---
schema: wang-person/v1
id: p_bmbwdV3HEBP41vyQnog2Gc
status: active
merged_into: null
display_name: 王君素
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f76P1FSNZAeHcXYvz3PCxN
        subject_person_id: p_bmbwdV3HEBP41vyQnog2Gc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君素
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JyE9ksotmUN1Eai4JY51vc
          claim_id: c_f76P1FSNZAeHcXYvz3PCxN
          source_id: s_85EBvENbuhhCGZsJ7kZAGr
          stance: supports
          locator: CBDB:148173
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（148173）
          source: &a1
            id: s_85EBvENbuhhCGZsJ7kZAGr
            source_type: api_record
            title: 中国历代人物传记资料库：王君素（CBDB 148173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148173&o=json
            external_identifier: CBDB:148173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.758Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6BpkoQ1Quui9Zr5D9mt7M8
        subject_person_id: p_bmbwdV3HEBP41vyQnog2Gc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君素，唐人物。籍贯北芒山，曾任縣丞、縣令。（中国历代人物传记资料库 CBDB 148173）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ij8e_ZAT6SQcMN_T3wQl0O
          claim_id: c_6BpkoQ1Quui9Zr5D9mt7M8
          source_id: s_85EBvENbuhhCGZsJ7kZAGr
          stance: supports
          locator: CBDB:148173
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_DAeVUi90Uo-j-Jng2RhSSQ
        subject_person_id: p_bmbwdV3HEBP41vyQnog2Gc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_a1qoNPMF19KNJJgFTs1t1Y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zFb31wR0Am8D2w0F8WNZtm
          claim_id: c_DAeVUi90Uo-j-Jng2RhSSQ
          source_id: s_85EBvENbuhhCGZsJ7kZAGr
          stance: supports
          locator: 唐代墓誌匯編:二卷，Qianfeng 22：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_a1qoNPMF19KNJJgFTs1t1Y
        status: active
        display_name: 王道智
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_i4FD3J1PC4lR1f5n7V5eg0
        subject_person_id: p_bmbwdV3HEBP41vyQnog2Gc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VNFXwWD4uW7ZZwVXfNErsr
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wMEvcqNJGPkL6mQQLxtfLg
          claim_id: c_i4FD3J1PC4lR1f5n7V5eg0
          source_id: s_85EBvENbuhhCGZsJ7kZAGr
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Jinglong13：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VNFXwWD4uW7ZZwVXfNErsr
        status: active
        display_name: 王晏
        merged_into_person_id: null
  other: []
---

# 王君素

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王君素 | accepted |
| bio.summary | 王君素，唐人物。籍贯北芒山，曾任縣丞、縣令。（中国历代人物传记资料库 CBDB 148173） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_a1qoNPMF19KNJJgFTs1t1Y | 王道智 | accepted |
| descendants | p_VNFXwWD4uW7ZZwVXfNErsr | 王晏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王君素（CBDB 148173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148173&o=json)
