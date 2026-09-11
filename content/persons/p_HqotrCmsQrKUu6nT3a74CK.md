---
schema: wang-person/v1
id: p_HqotrCmsQrKUu6nT3a74CK
status: active
merged_into: null
display_name: 王永
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N7kDDKt5ETGm8ScQmV63VL
        subject_person_id: p_HqotrCmsQrKUu6nT3a74CK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QGUkYnvPFSA77w4FxgKC8Z
          claim_id: c_N7kDDKt5ETGm8ScQmV63VL
          source_id: s_wRHyMYxZqN4HHfPakjQxEN
          stance: supports
          locator: CBDB:37786
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37786）
          source: &a1
            id: s_wRHyMYxZqN4HHfPakjQxEN
            source_type: api_record
            title: 中国历代人物传记资料库：王永（CBDB 37786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37786&o=json
            external_identifier: CBDB:37786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.254Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bPGLs6iqJJpSyFMGt9T2dA
        subject_person_id: p_HqotrCmsQrKUu6nT3a74CK
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
        - id: cs_7cH27zRcS2w4R1UMpQ1pCS
          claim_id: c_bPGLs6iqJJpSyFMGt9T2dA
          source_id: s_wRHyMYxZqN4HHfPakjQxEN
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
        id: c_THR1Pq18mTUNWqepzlUtrN
        subject_person_id: p_HqotrCmsQrKUu6nT3a74CK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jzoHdkm3G8KBKVV3oWtFDE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yRKk6goemIXMkxpzLcbYHL
          claim_id: c_THR1Pq18mTUNWqepzlUtrN
          source_id: s_wRHyMYxZqN4HHfPakjQxEN
          stance: supports
          locator: 宋人傳記資料索引(電子版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jzoHdkm3G8KBKVV3oWtFDE
        status: active
        display_name: 王忠立
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c__YHImL035v-yzsZUgNqlmK
        subject_person_id: p_HqotrCmsQrKUu6nT3a74CK
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_zF9b6MVnyJgFHUvPvKqRU3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fqv2a-VTM0z1C-lH0-OTMH
          claim_id: c__YHImL035v-yzsZUgNqlmK
          source_id: s_5koCWdZQ26PjfayGfba3ey
          stance: supports
          locator: 宋人傳記資料索引(電子版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5koCWdZQ26PjfayGfba3ey
            source_type: api_record
            title: 中国历代人物传记资料库：郭氏(王忠立母)（CBDB 37789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37789&o=json
            external_identifier: CBDB:37789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zF9b6MVnyJgFHUvPvKqRU3
        status: active
        display_name: 郭氏
        merged_into_person_id: null
  ancestors: []
  descendants:
    - claim:
        id: c_nkjcHiQmMRNtE8FLGpfk3S
        subject_person_id: p_HqotrCmsQrKUu6nT3a74CK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9zMW97J7BAC3TDNz5VbWCT
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__lgjkjhHD4CAVTgWhHkByJ
          claim_id: c_nkjcHiQmMRNtE8FLGpfk3S
          source_id: s_wRHyMYxZqN4HHfPakjQxEN
          stance: supports
          locator: 宋人傳記資料索引(電子版)：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9zMW97J7BAC3TDNz5VbWCT
        status: active
        display_name: 王達
        merged_into_person_id: null
    - claim:
        id: c_sUczdk1x5J-oAhGIrR6XgE
        subject_person_id: p_HqotrCmsQrKUu6nT3a74CK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vfZA8CNHYRGPvaenX91t3P
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mXp5TmSYvSfimtvO-SoRro
          claim_id: c_sUczdk1x5J-oAhGIrR6XgE
          source_id: s_wRHyMYxZqN4HHfPakjQxEN
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1192;1193：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vfZA8CNHYRGPvaenX91t3P
        status: active
        display_name: 王德
        merged_into_person_id: null
  other: []
---

# 王永

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_jzoHdkm3G8KBKVV3oWtFDE | 王忠立 | accepted |
| spouses | p_zF9b6MVnyJgFHUvPvKqRU3 | 郭氏 | accepted |
| descendants | p_9zMW97J7BAC3TDNz5VbWCT | 王達 | accepted |
| descendants | p_vfZA8CNHYRGPvaenX91t3P | 王德 | accepted |

## 外部来源

- [中国历代人物传记资料库：郭氏(王忠立母)（CBDB 37789）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37789&o=json)
- [中国历代人物传记资料库：王永（CBDB 37786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37786&o=json)
