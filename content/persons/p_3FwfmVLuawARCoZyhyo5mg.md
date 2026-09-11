---
schema: wang-person/v1
id: p_3FwfmVLuawARCoZyhyo5mg
status: active
merged_into: null
display_name: 王審琦
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t94i6XpyCjDzPGpTuPuBuG
        subject_person_id: p_3FwfmVLuawARCoZyhyo5mg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王審琦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bZTCXkqgF612Vm4HxpFzb5
          claim_id: c_t94i6XpyCjDzPGpTuPuBuG
          source_id: s_kXDqY3oX1V5PnHzqot3UVv
          stance: supports
          locator: CBDB:3976
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3976）
          source: &a1
            id: s_kXDqY3oX1V5PnHzqot3UVv
            source_type: api_record
            title: 中国历代人物传记资料库：王審琦（CBDB 3976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3976&o=json
            external_identifier: CBDB:3976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.439Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7voP8auYyyKZHCbt1radf7
        subject_person_id: p_3FwfmVLuawARCoZyhyo5mg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 925年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wudAKmQTC3WKAJCXWSE1nK
          claim_id: c_7voP8auYyyKZHCbt1radf7
          source_id: s_kXDqY3oX1V5PnHzqot3UVv
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
        id: c_HRa1tz8CstFNJE2cGaDABc
        subject_person_id: p_3FwfmVLuawARCoZyhyo5mg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 974年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sFZnUhBLHzwrQEXzP7hu6m
          claim_id: c_HRa1tz8CstFNJE2cGaDABc
          source_id: s_kXDqY3oX1V5PnHzqot3UVv
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
        id: c_gey57KFNMNxYMiAM3XrppD
        subject_person_id: p_3FwfmVLuawARCoZyhyo5mg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EkScVT9ByF8c1AJin7uRfC
          claim_id: c_gey57KFNMNxYMiAM3XrppD
          source_id: s_kXDqY3oX1V5PnHzqot3UVv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_295O3C8YHRuNNp7lRYJFCL
        subject_person_id: p_3FwfmVLuawARCoZyhyo5mg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6MGDJDsMfhoCMpi8TCXnFR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__2hDmf-65EEdRXLhshHofM
          claim_id: c_295O3C8YHRuNNp7lRYJFCL
          source_id: s_kXDqY3oX1V5PnHzqot3UVv
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1707：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6MGDJDsMfhoCMpi8TCXnFR
        status: active
        display_name: 王承衍
        merged_into_person_id: null
    - claim:
        id: c_pVtI2QH4M_wm1_Ikzwj4ha
        subject_person_id: p_3FwfmVLuawARCoZyhyo5mg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nauC3gPyC9F4eNZQfgox1p
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZfmsyEBFXXDYnx00xjokof
          claim_id: c_pVtI2QH4M_wm1_Ikzwj4ha
          source_id: s_kXDqY3oX1V5PnHzqot3UVv
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1715：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nauC3gPyC9F4eNZQfgox1p
        status: active
        display_name: 王承德
        merged_into_person_id: null
    - claim:
        id: c_kOe0ieOxYG7CQ-HZZEZ4ei
        subject_person_id: p_3FwfmVLuawARCoZyhyo5mg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_85EbDNcrsn9ZB6rqXHzzZx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MN60lD5HnEEW_BQY5N2GPy
          claim_id: c_kOe0ieOxYG7CQ-HZZEZ4ei
          source_id: s_kXDqY3oX1V5PnHzqot3UVv
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1710：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_85EbDNcrsn9ZB6rqXHzzZx
        status: active
        display_name: 王承祐
        merged_into_person_id: null
    - claim:
        id: c_B_I8BpMWDJCZYfhfvT8TjD
        subject_person_id: p_3FwfmVLuawARCoZyhyo5mg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wCQ4n6gjkTCPS8LugdRHWA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_djG3bZ6fxFf_sH5jBQuvuY
          claim_id: c_B_I8BpMWDJCZYfhfvT8TjD
          source_id: s_kXDqY3oX1V5PnHzqot3UVv
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1703：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wCQ4n6gjkTCPS8LugdRHWA
        status: active
        display_name: 王承休
        merged_into_person_id: null
    - claim:
        id: c_Gwmjy2PNXcFprWVTaDrWKe
        subject_person_id: p_3FwfmVLuawARCoZyhyo5mg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vCSXWHEEa1hukQBzvMQ9VV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZTjBTzPoI1fRaJB1X3nuM8
          claim_id: c_Gwmjy2PNXcFprWVTaDrWKe
          source_id: s_kXDqY3oX1V5PnHzqot3UVv
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1711：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vCSXWHEEa1hukQBzvMQ9VV
        status: active
        display_name: 王承偓
        merged_into_person_id: null
    - claim:
        id: c_RP--heY41wjTAiv3vgh_93
        subject_person_id: p_3FwfmVLuawARCoZyhyo5mg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9fWZxfRsRL9p9LDDGf3EUt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uShHN7yi54Tn0b8NOQtkqr
          claim_id: c_RP--heY41wjTAiv3vgh_93
          source_id: s_kXDqY3oX1V5PnHzqot3UVv
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1706：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9fWZxfRsRL9p9LDDGf3EUt
        status: active
        display_name: 王承俊
        merged_into_person_id: null
    - claim:
        id: c_Oh7EPPuvuOKtDEapO5vhNd
        subject_person_id: p_3FwfmVLuawARCoZyhyo5mg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CxGK66CGQTocSW3DdK8C5x
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IyZzmPLTJsoyzgXpwQqDrC
          claim_id: c_Oh7EPPuvuOKtDEapO5vhNd
          source_id: s_kXDqY3oX1V5PnHzqot3UVv
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1713：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CxGK66CGQTocSW3DdK8C5x
        status: active
        display_name: 王承仅
        merged_into_person_id: null
    - claim:
        id: c_Yw9-Q9ETzmPpR8cxVwmiTm
        subject_person_id: p_3FwfmVLuawARCoZyhyo5mg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uPz7miu7kSh8ipxJGzwsPq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fvu9iAr58LSrWBlHHzzp2k
          claim_id: c_Yw9-Q9ETzmPpR8cxVwmiTm
          source_id: s_kXDqY3oX1V5PnHzqot3UVv
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1714：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uPz7miu7kSh8ipxJGzwsPq
        status: active
        display_name: 王承僎
        merged_into_person_id: null
    - claim:
        id: c_m4rLsA-mkaohGHX5z1Wx96
        subject_person_id: p_3FwfmVLuawARCoZyhyo5mg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xyPtAQ7AR8yTpy2qwHiGWa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SdL729y47SNbxV8eRL4vrr
          claim_id: c_m4rLsA-mkaohGHX5z1Wx96
          source_id: s_rinUBvPiEE2sXPXgwXBiwm
          stance: supports
          locator: 宋人傳記資料索引(電子版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rinUBvPiEE2sXPXgwXBiwm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（39733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39733&o=json
            external_identifier: CBDB:39733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:09.443Z
            metadata_json: null
      object_person:
        id: p_xyPtAQ7AR8yTpy2qwHiGWa
        status: active
        display_name: 王氏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王審琦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王審琦 | accepted |
| birth.date | 925年 | accepted |
| death.date | 974年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6MGDJDsMfhoCMpi8TCXnFR | 王承衍 | accepted |
| children | p_nauC3gPyC9F4eNZQfgox1p | 王承德 | accepted |
| children | p_85EbDNcrsn9ZB6rqXHzzZx | 王承祐 | accepted |
| children | p_wCQ4n6gjkTCPS8LugdRHWA | 王承休 | accepted |
| children | p_vCSXWHEEa1hukQBzvMQ9VV | 王承偓 | accepted |
| children | p_9fWZxfRsRL9p9LDDGf3EUt | 王承俊 | accepted |
| children | p_CxGK66CGQTocSW3DdK8C5x | 王承仅 | accepted |
| children | p_uPz7miu7kSh8ipxJGzwsPq | 王承僎 | accepted |
| children | p_xyPtAQ7AR8yTpy2qwHiGWa | 王氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王審琦（CBDB 3976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3976&o=json)
- [CBDB 中国历代人物传记资料库：王氏（39733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39733&o=json)
