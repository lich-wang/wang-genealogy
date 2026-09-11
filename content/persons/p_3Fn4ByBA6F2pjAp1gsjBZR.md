---
schema: wang-person/v1
id: p_3Fn4ByBA6F2pjAp1gsjBZR
status: active
merged_into: null
display_name: 王知
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QNrJoykJ5aYNCPFo1PGUYK
        subject_person_id: p_3Fn4ByBA6F2pjAp1gsjBZR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王知
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TsjRGba3ASd8JsjpEPqhWp
          claim_id: c_QNrJoykJ5aYNCPFo1PGUYK
          source_id: s_Ck3mffSvLZrwY7zV1sBMvU
          stance: supports
          locator: CBDB:195041
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（195041）
          source: &a1
            id: s_Ck3mffSvLZrwY7zV1sBMvU
            source_type: api_record
            title: 中国历代人物传记资料库：王知（CBDB 195041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=195041&o=json
            external_identifier: CBDB:195041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.298Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_y87tR4Co1XWHxLoVhhpwwA
        subject_person_id: p_3Fn4ByBA6F2pjAp1gsjBZR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 691年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YZm9vcXqBZmy61KLeE6PxP
          claim_id: c_y87tR4Co1XWHxLoVhhpwwA
          source_id: s_Ck3mffSvLZrwY7zV1sBMvU
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
        id: c_3Za39kRrL4XfDBd2EFU3Lf
        subject_person_id: p_3Fn4ByBA6F2pjAp1gsjBZR
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
        - id: cs_2PVXDjxQ1RwC8NCRSMiWPp
          claim_id: c_3Za39kRrL4XfDBd2EFU3Lf
          source_id: s_Ck3mffSvLZrwY7zV1sBMvU
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
        id: c_dk9DN_Mk3pjFMJ5dzAgAm1
        subject_person_id: p_HgS7cZb3A16c7c921dAmTd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3Fn4ByBA6F2pjAp1gsjBZR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EugipLO_TenD3D2KCU_6Zb
          claim_id: c_dk9DN_Mk3pjFMJ5dzAgAm1
          source_id: s_Ck3mffSvLZrwY7zV1sBMvU
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HgS7cZb3A16c7c921dAmTd
        status: active
        display_name: 王誨之
        merged_into_person_id: null
  children:
    - claim:
        id: c_7M6r3RH8t__Haxha0ZuFtl
        subject_person_id: p_3Fn4ByBA6F2pjAp1gsjBZR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jgind6LWu7AGQf2WTE9JAF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tvqF86P9RKFRoOY880E6yE
          claim_id: c_7M6r3RH8t__Haxha0ZuFtl
          source_id: s_Ck3mffSvLZrwY7zV1sBMvU
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jgind6LWu7AGQf2WTE9JAF
        status: active
        display_name: 王同晊
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王知

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王知 | accepted |
| death.date | 691年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HgS7cZb3A16c7c921dAmTd | 王誨之 | accepted |
| children | p_jgind6LWu7AGQf2WTE9JAF | 王同晊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王知（CBDB 195041）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=195041&o=json)
