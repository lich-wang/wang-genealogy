---
schema: wang-person/v1
id: p_vECvu4PrbhTNUTMJRckP9C
status: active
merged_into: null
display_name: 王輔運
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_19ZauWoWm24mHH46CLicMs
        subject_person_id: p_vECvu4PrbhTNUTMJRckP9C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔運
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dLeXCyUJmFExdHMFvtekkK
          claim_id: c_19ZauWoWm24mHH46CLicMs
          source_id: s_QZBkD39gw9xGNCPK1D1WBq
          stance: supports
          locator: CBDB:56877
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（56877）
          source: &a1
            id: s_QZBkD39gw9xGNCPK1D1WBq
            source_type: api_record
            title: 中国历代人物传记资料库：王輔運（CBDB 56877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56877&o=json
            external_identifier: CBDB:56877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.772Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Dr3PV182PskGzvSaBadQ8Z
        subject_person_id: p_vECvu4PrbhTNUTMJRckP9C
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1607年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5V4JPnQL73xdYG8oZSvn7H
          claim_id: c_Dr3PV182PskGzvSaBadQ8Z
          source_id: s_QZBkD39gw9xGNCPK1D1WBq
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
        id: c_Ys61FwQV1NDESBFLoa4tRN
        subject_person_id: p_vECvu4PrbhTNUTMJRckP9C
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1666年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8GphCGvSdrDarz3uQmNtjb
          claim_id: c_Ys61FwQV1NDESBFLoa4tRN
          source_id: s_QZBkD39gw9xGNCPK1D1WBq
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
        id: c_EoihNiot3GCHnLr49raHbN
        subject_person_id: p_vECvu4PrbhTNUTMJRckP9C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yBuGQrS3e32LtDoMEevkuH
          claim_id: c_EoihNiot3GCHnLr49raHbN
          source_id: s_QZBkD39gw9xGNCPK1D1WBq
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
        id: c_jRzOPEVrX-C_r5VweX0yfF
        subject_person_id: p_VMqCzPgXHkKRKBD5CdCTWf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vECvu4PrbhTNUTMJRckP9C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rw7b0yfm-dbaYKLwElXa2p
          claim_id: c_jRzOPEVrX-C_r5VweX0yfF
          source_id: s_QZBkD39gw9xGNCPK1D1WBq
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），75：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VMqCzPgXHkKRKBD5CdCTWf
        status: active
        display_name: 王榮寵
        merged_into_person_id: null
  children:
    - claim:
        id: c_8iiHtzc7FDlTODEzrpUCZX
        subject_person_id: p_vECvu4PrbhTNUTMJRckP9C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_h5NiBzkFZ2Bw82imDtrCYS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MAjGa8yY_xmxQO6zT-AkoX
          claim_id: c_8iiHtzc7FDlTODEzrpUCZX
          source_id: s_QZBkD39gw9xGNCPK1D1WBq
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），75：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_h5NiBzkFZ2Bw82imDtrCYS
        status: active
        display_name: 王𨫷
        merged_into_person_id: null
    - claim:
        id: c_FfkR8nHF5R_MJrQ309E211
        subject_person_id: p_vECvu4PrbhTNUTMJRckP9C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BFnDPf2o2PQX1hHsCJfiHU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iV96vxwPYVDNH1p0Qa5DMD
          claim_id: c_FfkR8nHF5R_MJrQ309E211
          source_id: s_QZBkD39gw9xGNCPK1D1WBq
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），75：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BFnDPf2o2PQX1hHsCJfiHU
        status: active
        display_name: 王錙
        merged_into_person_id: null
    - claim:
        id: c_6k6Sx1dGXZuVQgHwJOc8uJ
        subject_person_id: p_vECvu4PrbhTNUTMJRckP9C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9GgUsvJ54gU2v8pmaaTiuM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_veFuIXVeMbVIPOupeq9EeK
          claim_id: c_6k6Sx1dGXZuVQgHwJOc8uJ
          source_id: s_QZBkD39gw9xGNCPK1D1WBq
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），75：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9GgUsvJ54gU2v8pmaaTiuM
        status: active
        display_name: 王鑥
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_xYxxBot3xzuHBEqmQV_-tb
        subject_person_id: p_SyKJGHt2T3DjXjHEbFmEV4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vECvu4PrbhTNUTMJRckP9C
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_62F_LD9IFGNg2QFnI7yg9U
          claim_id: c_xYxxBot3xzuHBEqmQV_-tb
          source_id: s_QZBkD39gw9xGNCPK1D1WBq
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），75：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SyKJGHt2T3DjXjHEbFmEV4
        status: active
        display_name: 王汝化
        merged_into_person_id: null
    - claim:
        id: c_e0EsrcRUfcTN7QIEWqI7OB
        subject_person_id: p_dhLw5ZYZGp3S49Qpkah6r2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vECvu4PrbhTNUTMJRckP9C
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RcUPQaGGLhw97Q6rYCatR3
          claim_id: c_e0EsrcRUfcTN7QIEWqI7OB
          source_id: s_QZBkD39gw9xGNCPK1D1WBq
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），75：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dhLw5ZYZGp3S49Qpkah6r2
        status: active
        display_name: 王來麟
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_o5qjS2NC0xGDnhwiSDJELc
        subject_person_id: p_vECvu4PrbhTNUTMJRckP9C
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Jd7fSU93gNFnUBPdNVuXGY
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X1lTolVsgZhSqU0_v1yx8s
          claim_id: c_o5qjS2NC0xGDnhwiSDJELc
          source_id: s_QZBkD39gw9xGNCPK1D1WBq
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），75：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Jd7fSU93gNFnUBPdNVuXGY
        status: active
        display_name: 王尺水
        merged_into_person_id: null
    - claim:
        id: c_23G9H492_0lpJ73c3ewTm5
        subject_person_id: p_vECvu4PrbhTNUTMJRckP9C
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Ac7UH2xcWY3aDjbY3yku8B
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_242dcWIcJgnGLjDQ3n4kU2
          claim_id: c_23G9H492_0lpJ73c3ewTm5
          source_id: s_QZBkD39gw9xGNCPK1D1WBq
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），75：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ac7UH2xcWY3aDjbY3yku8B
        status: active
        display_name: 王止水
        merged_into_person_id: null
    - claim:
        id: c_DkqTyFxk0hRhe-p4CUyhEd
        subject_person_id: p_vECvu4PrbhTNUTMJRckP9C
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Wft3MqkARxabMc8JuLMegQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SRUyW-bg8x8U9z_V_dt9BX
          claim_id: c_DkqTyFxk0hRhe-p4CUyhEd
          source_id: s_QZBkD39gw9xGNCPK1D1WBq
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），75：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Wft3MqkARxabMc8JuLMegQ
        status: active
        display_name: 王如水
        merged_into_person_id: null
  other: []
---

# 王輔運

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輔運 | accepted |
| birth.date | 1607年 | accepted |
| death.date | 1666年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VMqCzPgXHkKRKBD5CdCTWf | 王榮寵 | accepted |
| children | p_h5NiBzkFZ2Bw82imDtrCYS | 王𨫷 | accepted |
| children | p_BFnDPf2o2PQX1hHsCJfiHU | 王錙 | accepted |
| children | p_9GgUsvJ54gU2v8pmaaTiuM | 王鑥 | accepted |
| ancestors | p_SyKJGHt2T3DjXjHEbFmEV4 | 王汝化 | accepted |
| ancestors | p_dhLw5ZYZGp3S49Qpkah6r2 | 王來麟 | accepted |
| descendants | p_Jd7fSU93gNFnUBPdNVuXGY | 王尺水 | accepted |
| descendants | p_Ac7UH2xcWY3aDjbY3yku8B | 王止水 | accepted |
| descendants | p_Wft3MqkARxabMc8JuLMegQ | 王如水 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輔運（CBDB 56877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56877&o=json)
