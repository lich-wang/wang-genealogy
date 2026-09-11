---
schema: wang-person/v1
id: p_cwKzjBMKcPC1s1jgGcgBVa
status: active
merged_into: null
display_name: 王璿
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sdpaYEqoNSJyr3nyixsAH6
        subject_person_id: p_cwKzjBMKcPC1s1jgGcgBVa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B4G1yvrm354PUsGZS6BVvo
          claim_id: c_sdpaYEqoNSJyr3nyixsAH6
          source_id: s_nd6ttgrtn13qAwN7NSGjcu
          stance: supports
          locator: CBDB:152190
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（152190）
          source: &a1
            id: s_nd6ttgrtn13qAwN7NSGjcu
            source_type: api_record
            title: 中国历代人物传记资料库：王璿（CBDB 152190）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152190&o=json
            external_identifier: CBDB:152190
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.847Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CorQ7mvLc7ncpecaLHroo3
        subject_person_id: p_cwKzjBMKcPC1s1jgGcgBVa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璿，唐人物。籍贯泗州，曾任未詳。（中国历代人物传记资料库 CBDB 152190）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ON-WifBuHXXK8idG58TXl2
          claim_id: c_CorQ7mvLc7ncpecaLHroo3
          source_id: s_nd6ttgrtn13qAwN7NSGjcu
          stance: supports
          locator: CBDB:152190
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kGYSsDo0yBuzPtyaqD3Dy6
        subject_person_id: p_BbVptP39ZfzK25qw7xJj6P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cwKzjBMKcPC1s1jgGcgBVa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xyFVeCxjWgb4kF1sMj5QOb
          claim_id: c_kGYSsDo0yBuzPtyaqD3Dy6
          source_id: s_nd6ttgrtn13qAwN7NSGjcu
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BbVptP39ZfzK25qw7xJj6P
        status: active
        display_name: 王德儉
        merged_into_person_id: null
  children:
    - claim:
        id: c_DDFXQVWX-UraRlWEtsLX3a
        subject_person_id: p_cwKzjBMKcPC1s1jgGcgBVa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NCcpGv1P1CiTE2pLU2KQhf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-U15ELO8790gJc0yV_6Xb-
          claim_id: c_DDFXQVWX-UraRlWEtsLX3a
          source_id: s_nd6ttgrtn13qAwN7NSGjcu
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 292：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NCcpGv1P1CiTE2pLU2KQhf
        status: active
        display_name: 王同人
        merged_into_person_id: null
    - claim:
        id: c_qiPlba_AFwUSWWl-JJzSx1
        subject_person_id: p_cwKzjBMKcPC1s1jgGcgBVa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sLKMuYnCqjP6E6jfkqaR54
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aMAVJ-LOtj5ym-rdieWMdB
          claim_id: c_qiPlba_AFwUSWWl-JJzSx1
          source_id: s_nd6ttgrtn13qAwN7NSGjcu
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sLKMuYnCqjP6E6jfkqaR54
        status: active
        display_name: 王大有
        merged_into_person_id: null
    - claim:
        id: c_mTQm6PCATIriInuHtnZSjE
        subject_person_id: p_cwKzjBMKcPC1s1jgGcgBVa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wNhEPsmPfJo5iX13jFhyZ1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_13TbLEKLPtX40e-DahV3Wc
          claim_id: c_mTQm6PCATIriInuHtnZSjE
          source_id: s_nd6ttgrtn13qAwN7NSGjcu
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wNhEPsmPfJo5iX13jFhyZ1
        status: active
        display_name: 王既濟
        merged_into_person_id: null
    - claim:
        id: c_5TyQOVYGVMWTpXv1ijXorr
        subject_person_id: p_cwKzjBMKcPC1s1jgGcgBVa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RfvZiyMH4Wpda2JGDdgScj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zlCXrpQyYIozCjnEe7LS_H
          claim_id: c_5TyQOVYGVMWTpXv1ijXorr
          source_id: s_nd6ttgrtn13qAwN7NSGjcu
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RfvZiyMH4Wpda2JGDdgScj
        status: active
        display_name: 王休明
        merged_into_person_id: null
    - claim:
        id: c_1GDX1_GIhSd1PvvvkIX-3u
        subject_person_id: p_cwKzjBMKcPC1s1jgGcgBVa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i126YBB52ZvGNce69E3X1h
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lMV2VD1WbzlBQ43fHBiims
          claim_id: c_1GDX1_GIhSd1PvvvkIX-3u
          source_id: s_nd6ttgrtn13qAwN7NSGjcu
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_i126YBB52ZvGNce69E3X1h
        status: active
        display_name: 王休光
        merged_into_person_id: null
    - claim:
        id: c_CL7K3woeSXe_vuQo2jjkkM
        subject_person_id: p_cwKzjBMKcPC1s1jgGcgBVa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5K1RZ3HGov28XM4JQ75pu8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YbmSoqYsV6Qyu9s0-sQcuM
          claim_id: c_CL7K3woeSXe_vuQo2jjkkM
          source_id: s_nd6ttgrtn13qAwN7NSGjcu
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5K1RZ3HGov28XM4JQ75pu8
        status: active
        display_name: 王休名
        merged_into_person_id: null
    - claim:
        id: c_z2pR1yULmzMsMS3TKkV8WC
        subject_person_id: p_cwKzjBMKcPC1s1jgGcgBVa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e3h1zmFg1PnVJNzFCAKikC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9nYfoXtRDpOcK_5h6PYfMb
          claim_id: c_z2pR1yULmzMsMS3TKkV8WC
          source_id: s_nd6ttgrtn13qAwN7NSGjcu
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_e3h1zmFg1PnVJNzFCAKikC
        status: active
        display_name: 王休言
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璿 | accepted |
| bio.summary | 王璿，唐人物。籍贯泗州，曾任未詳。（中国历代人物传记资料库 CBDB 152190） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BbVptP39ZfzK25qw7xJj6P | 王德儉 | accepted |
| children | p_NCcpGv1P1CiTE2pLU2KQhf | 王同人 | accepted |
| children | p_sLKMuYnCqjP6E6jfkqaR54 | 王大有 | accepted |
| children | p_wNhEPsmPfJo5iX13jFhyZ1 | 王既濟 | accepted |
| children | p_RfvZiyMH4Wpda2JGDdgScj | 王休明 | accepted |
| children | p_i126YBB52ZvGNce69E3X1h | 王休光 | accepted |
| children | p_5K1RZ3HGov28XM4JQ75pu8 | 王休名 | accepted |
| children | p_e3h1zmFg1PnVJNzFCAKikC | 王休言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璿（CBDB 152190）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152190&o=json)
