---
schema: wang-person/v1
id: p_46vuDp5qDdtqpcJ6ZkX8YK
status: active
merged_into: null
display_name: 王思訥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RMqxTyNYbkP4Jw86rAzAPh
        subject_person_id: p_46vuDp5qDdtqpcJ6ZkX8YK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思訥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jGtxgyDMYU4GZBtBHtqNCy
          claim_id: c_RMqxTyNYbkP4Jw86rAzAPh
          source_id: s_U99Gg7N16FefkhowDRfv35
          stance: supports
          locator: CBDB:175750
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175750）
          source: &a1
            id: s_U99Gg7N16FefkhowDRfv35
            source_type: api_record
            title: 中国历代人物传记资料库：王思訥（CBDB 175750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175750&o=json
            external_identifier: CBDB:175750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.099Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Jpr4Zg4ZP6N6JNDM5nbQD3
        subject_person_id: p_46vuDp5qDdtqpcJ6ZkX8YK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 743年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GLkiNCFPH6SQ8ZF75G7M88
          claim_id: c_Jpr4Zg4ZP6N6JNDM5nbQD3
          source_id: s_U99Gg7N16FefkhowDRfv35
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
        id: c_QQJk7mCXaLDN77Ktde4C32
        subject_person_id: p_46vuDp5qDdtqpcJ6ZkX8YK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思訥（卒于743年），唐人物。籍贯河南，曾任令。（中国历代人物传记资料库 CBDB 175750）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XSeVotaUDbbJdXz6S_nXrw
          claim_id: c_QQJk7mCXaLDN77Ktde4C32
          source_id: s_U99Gg7N16FefkhowDRfv35
          stance: supports
          locator: CBDB:175750
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hWlbRY8jKkwukua4nJHtvb
        subject_person_id: p_T2JshioRPfxgoYHCxfDYxt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_46vuDp5qDdtqpcJ6ZkX8YK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cNP1oYaknCFrq8HRvql9LW
          claim_id: c_hWlbRY8jKkwukua4nJHtvb
          source_id: s_U99Gg7N16FefkhowDRfv35
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_T2JshioRPfxgoYHCxfDYxt
        status: active
        display_name: 王守忠
        merged_into_person_id: null
  children:
    - claim:
        id: c_1mSp5rlrsqfEvj2umC0HMK
        subject_person_id: p_46vuDp5qDdtqpcJ6ZkX8YK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A2hQUfWqoWFMfuZUTLsrdK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qYI73E95c6Y8bvpT9TCEmW
          claim_id: c_1mSp5rlrsqfEvj2umC0HMK
          source_id: s_U99Gg7N16FefkhowDRfv35
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_A2hQUfWqoWFMfuZUTLsrdK
        status: active
        display_name: 王子遂
        merged_into_person_id: null
    - claim:
        id: c_8alvT15voIDV9q6axfzYnh
        subject_person_id: p_46vuDp5qDdtqpcJ6ZkX8YK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gHooJdYc6LX8SKTwqSMDsm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jYw8--9gi_yb6YcsqhIlJ6
          claim_id: c_8alvT15voIDV9q6axfzYnh
          source_id: s_U99Gg7N16FefkhowDRfv35
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gHooJdYc6LX8SKTwqSMDsm
        status: active
        display_name: 王自勉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王思訥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思訥 | accepted |
| death.date | 743年 | accepted |
| bio.summary | 王思訥（卒于743年），唐人物。籍贯河南，曾任令。（中国历代人物传记资料库 CBDB 175750） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_T2JshioRPfxgoYHCxfDYxt | 王守忠 | accepted |
| children | p_A2hQUfWqoWFMfuZUTLsrdK | 王子遂 | accepted |
| children | p_gHooJdYc6LX8SKTwqSMDsm | 王自勉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思訥（CBDB 175750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175750&o=json)
