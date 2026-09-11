---
schema: wang-person/v1
id: p_KdnEK5JvxzCLuhzpo1b35X
status: active
merged_into: null
display_name: 王鈇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y9NADMAh6L7jWWt7ZFEWta
        subject_person_id: p_KdnEK5JvxzCLuhzpo1b35X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KrDSUzGkYJgdBumF5WkkYS
          claim_id: c_Y9NADMAh6L7jWWt7ZFEWta
          source_id: s_PFzSq6kQwtCdVXYvMpdpPB
          stance: supports
          locator: CBDB:67912
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67912）
          source: &a1
            id: s_PFzSq6kQwtCdVXYvMpdpPB
            source_type: api_record
            title: 中国历代人物传记资料库：王鈇（CBDB 67912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67912&o=json
            external_identifier: CBDB:67912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.029Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JZp2nTqK4DCBcHBTG8HweJ
        subject_person_id: p_KdnEK5JvxzCLuhzpo1b35X
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1514年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8Au9jyHzJ8kBXXzL8ytzPi
          claim_id: c_JZp2nTqK4DCBcHBTG8HweJ
          source_id: s_PFzSq6kQwtCdVXYvMpdpPB
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
        id: c_XNUvmtHNy8pbaHAnzXpWG6
        subject_person_id: p_KdnEK5JvxzCLuhzpo1b35X
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1555年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PBbM6zovNDgDH38zAyhEKg
          claim_id: c_XNUvmtHNy8pbaHAnzXpWG6
          source_id: s_PFzSq6kQwtCdVXYvMpdpPB
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
        id: c_sRywHsWdtMbioB7wT3pgPQ
        subject_person_id: p_KdnEK5JvxzCLuhzpo1b35X
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
        - id: cs_2PZ6HSigp1qRqkwbZKWhHv
          claim_id: c_sRywHsWdtMbioB7wT3pgPQ
          source_id: s_PFzSq6kQwtCdVXYvMpdpPB
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
        id: c__HIUS8DGQzeSb_nlbeBtBd
        subject_person_id: p_ajPx8SrP67WXjyut5BBExs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KdnEK5JvxzCLuhzpo1b35X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zPKLBMGVifz3pyF9TqlAVk
          claim_id: c__HIUS8DGQzeSb_nlbeBtBd
          source_id: s_PFzSq6kQwtCdVXYvMpdpPB
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第二百名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ajPx8SrP67WXjyut5BBExs
        status: active
        display_name: 王睿
        merged_into_person_id: null
  children:
    - claim:
        id: c_X8riASv9ktXfS8okRFaptu
        subject_person_id: p_KdnEK5JvxzCLuhzpo1b35X
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HQy7vtEDUTxgNWHNN2RZwr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vnfugyYVcZiCoGA3XpyXll
          claim_id: c_X8riASv9ktXfS8okRFaptu
          source_id: s_PFzSq6kQwtCdVXYvMpdpPB
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11558：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HQy7vtEDUTxgNWHNN2RZwr
        status: active
        display_name: 王汝祐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_wxgeZsxcJtaANAbgWooUTX
        subject_person_id: p_KdnEK5JvxzCLuhzpo1b35X
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_s5jeSj6i8t44D1EUSMCh8C
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Nj75v2o_-Gn_2S8NRDBbl8
          claim_id: c_wxgeZsxcJtaANAbgWooUTX
          source_id: s_PFzSq6kQwtCdVXYvMpdpPB
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第二百名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_s5jeSj6i8t44D1EUSMCh8C
        status: active
        display_name: 董氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_NKyWt6MX2EKGnybfQ7OuJq
        subject_person_id: p_DVNNLPmEVGyTSGBSmMLJfi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_KdnEK5JvxzCLuhzpo1b35X
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rco0DqrLM3TGonvbILpURt
          claim_id: c_NKyWt6MX2EKGnybfQ7OuJq
          source_id: s_PFzSq6kQwtCdVXYvMpdpPB
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第二百名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DVNNLPmEVGyTSGBSmMLJfi
        status: active
        display_name: 王邦治
        merged_into_person_id: null
    - claim:
        id: c_UTzNepnLEnqQx1eT2mQXrR
        subject_person_id: p_XafvmbqFiWanFhRfKjJh1p
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_KdnEK5JvxzCLuhzpo1b35X
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zT6pIp5esj3WCVsKcNLruV
          claim_id: c_UTzNepnLEnqQx1eT2mQXrR
          source_id: s_PFzSq6kQwtCdVXYvMpdpPB
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第二百名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XafvmbqFiWanFhRfKjJh1p
        status: active
        display_name: 王通
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鈇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鈇 | accepted |
| birth.date | 1514年 | accepted |
| death.date | 1555年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ajPx8SrP67WXjyut5BBExs | 王睿 | accepted |
| children | p_HQy7vtEDUTxgNWHNN2RZwr | 王汝祐 | accepted |
| spouses | p_s5jeSj6i8t44D1EUSMCh8C | 董氏 | accepted |
| ancestors | p_DVNNLPmEVGyTSGBSmMLJfi | 王邦治 | accepted |
| ancestors | p_XafvmbqFiWanFhRfKjJh1p | 王通 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鈇（CBDB 67912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67912&o=json)
