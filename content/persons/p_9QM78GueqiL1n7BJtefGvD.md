---
schema: wang-person/v1
id: p_9QM78GueqiL1n7BJtefGvD
status: active
merged_into: null
display_name: 王鍔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fXssm36aLcCK4AGWqLihGX
        subject_person_id: p_9QM78GueqiL1n7BJtefGvD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n4tKwBToSwkng7XomAYD4z
          claim_id: c_fXssm36aLcCK4AGWqLihGX
          source_id: s_LdSZNBpapSqUq4XVEG5rri
          stance: supports
          locator: CBDB:186698
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186698）
          source: &a1
            id: s_LdSZNBpapSqUq4XVEG5rri
            source_type: api_record
            title: 中国历代人物传记资料库：王鍔（CBDB 186698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186698&o=json
            external_identifier: CBDB:186698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.283Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4uNXRjWs8g1GCDtbbVz1ra
        subject_person_id: p_9QM78GueqiL1n7BJtefGvD
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 739年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WAP7scYmD45ZhQNjD5Mt5X
          claim_id: c_4uNXRjWs8g1GCDtbbVz1ra
          source_id: s_LdSZNBpapSqUq4XVEG5rri
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
        id: c_BoGkbYoZny3y3NSxuJ7CRN
        subject_person_id: p_9QM78GueqiL1n7BJtefGvD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 815年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fs2MQJJ4Zesk2KGe52G55i
          claim_id: c_BoGkbYoZny3y3NSxuJ7CRN
          source_id: s_LdSZNBpapSqUq4XVEG5rri
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
        id: c_tTgjkLamTkVHPLqKaWgov9
        subject_person_id: p_9QM78GueqiL1n7BJtefGvD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍔（739年—815年），唐人物。籍贯河中府，曾任鴻臚少卿、節度使、州刺史。（中国历代人物传记资料库 CBDB 186698）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kgflbMXXJdWkGFaUgyTtTB
          claim_id: c_tTgjkLamTkVHPLqKaWgov9
          source_id: s_LdSZNBpapSqUq4XVEG5rri
          stance: supports
          locator: CBDB:186698
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LaM1voPhnKCKLtIYa-0UBG
        subject_person_id: p_c8C8PQBtyD8TinfV8tVU4U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9QM78GueqiL1n7BJtefGvD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vuv_ZSHGyalGy-lyXyL2Nv
          claim_id: c_LaM1voPhnKCKLtIYa-0UBG
          source_id: s_LdSZNBpapSqUq4XVEG5rri
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_c8C8PQBtyD8TinfV8tVU4U
        status: active
        display_name: 王澄
        merged_into_person_id: null
  children:
    - claim:
        id: c_BlfNXQ6BkGybLiF7WLzyOE
        subject_person_id: p_9QM78GueqiL1n7BJtefGvD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gzNfjAGXGNGgShinLATrJk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9S-nW9EPtJ0sornx7s_Xuu
          claim_id: c_BlfNXQ6BkGybLiF7WLzyOE
          source_id: s_LdSZNBpapSqUq4XVEG5rri
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gzNfjAGXGNGgShinLATrJk
        status: active
        display_name: 王稷
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鍔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍔 | accepted |
| birth.date | 739年 | accepted |
| death.date | 815年 | accepted |
| bio.summary | 王鍔（739年—815年），唐人物。籍贯河中府，曾任鴻臚少卿、節度使、州刺史。（中国历代人物传记资料库 CBDB 186698） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_c8C8PQBtyD8TinfV8tVU4U | 王澄 | accepted |
| children | p_gzNfjAGXGNGgShinLATrJk | 王稷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鍔（CBDB 186698）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186698&o=json)
