---
schema: wang-person/v1
id: p_d9sSRa7nAqK1TZDEdrGVU4
status: active
merged_into: null
display_name: 王繼芳
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ns8swKNWLqxSKrfGC1PDey
        subject_person_id: p_d9sSRa7nAqK1TZDEdrGVU4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3stGM5e66PQMfN5bBMDM6W
          claim_id: c_ns8swKNWLqxSKrfGC1PDey
          source_id: s_vyJuGxRdhL1amKaz4dYTJj
          stance: supports
          locator: CBDB:202776
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202776）
          source: &a1
            id: s_vyJuGxRdhL1amKaz4dYTJj
            source_type: api_record
            title: 中国历代人物传记资料库：王繼芳（CBDB 202776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202776&o=json
            external_identifier: CBDB:202776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.752Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_54Gzg3PPycWyHJy5pFAHyV
        subject_person_id: p_d9sSRa7nAqK1TZDEdrGVU4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1494年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_avg1vYtVtjswZL4jbbvHHN
          claim_id: c_54Gzg3PPycWyHJy5pFAHyV
          source_id: s_vyJuGxRdhL1amKaz4dYTJj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nYcsKaeqJWRXneAKL61KzE
        subject_person_id: p_d9sSRa7nAqK1TZDEdrGVU4
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
        - id: cs_Mh7SRY4kxh1XLHHCA5NYwU
          claim_id: c_nYcsKaeqJWRXneAKL61KzE
          source_id: s_vyJuGxRdhL1amKaz4dYTJj
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
        id: c_QjVZ7CKwMUj9hyuy9HZmVh
        subject_person_id: p_d9sSRa7nAqK1TZDEdrGVU4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LdfPtAALdpowuFLLEnbqrD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P7tasG1jik05VhipY7-_uR
          claim_id: c_QjVZ7CKwMUj9hyuy9HZmVh
          source_id: s_CkASgK9K9QyE9AgdM64qv8
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百八十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CkASgK9K9QyE9AgdM64qv8
            source_type: api_record
            title: 中国历代人物传记资料库：王政純（CBDB 294123）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294123&o=json
            external_identifier: CBDB:294123
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.433Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LdfPtAALdpowuFLLEnbqrD
        status: active
        display_name: 王政純
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_0LX-3ANymWFEA0VWe8wp-D
        subject_person_id: p_cUD9fcK8ULgbpfiv196f9s
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_d9sSRa7nAqK1TZDEdrGVU4
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ibr_iRIjm9A9vJ5IdeTRcT
          claim_id: c_0LX-3ANymWFEA0VWe8wp-D
          source_id: s_yguBZZZ6oyQMbAG21Md4Uf
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百八十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yguBZZZ6oyQMbAG21Md4Uf
            source_type: api_record
            title: 中国历代人物传记资料库：王貴（CBDB 262418）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262418&o=json
            external_identifier: CBDB:262418
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.584Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cUD9fcK8ULgbpfiv196f9s
        status: active
        display_name: 王貴
        merged_into_person_id: null
    - claim:
        id: c_Gc06i-zTWXyAeqq1IvI52z
        subject_person_id: p_QFDwXVgD2VKJzzMkTbnAUC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_d9sSRa7nAqK1TZDEdrGVU4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ds-IVUiShdUFZO6n8O64C1
          claim_id: c_Gc06i-zTWXyAeqq1IvI52z
          source_id: s_R8Luc9bjcKh8HWSWYA13va
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百八十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_R8Luc9bjcKh8HWSWYA13va
            source_type: api_record
            title: 中国历代人物传记资料库：王端（CBDB 262419）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262419&o=json
            external_identifier: CBDB:262419
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.584Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QFDwXVgD2VKJzzMkTbnAUC
        status: active
        display_name: 王端
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王繼芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼芳 | accepted |
| birth.date | 1494年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_LdfPtAALdpowuFLLEnbqrD | 王政純 | accepted |
| ancestors | p_cUD9fcK8ULgbpfiv196f9s | 王貴 | accepted |
| ancestors | p_QFDwXVgD2VKJzzMkTbnAUC | 王端 | accepted |

## 外部来源

- [中国历代人物传记资料库：王端（CBDB 262419）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262419&o=json)
- [中国历代人物传记资料库：王貴（CBDB 262418）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262418&o=json)
- [中国历代人物传记资料库：王繼芳（CBDB 202776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202776&o=json)
- [中国历代人物传记资料库：王政純（CBDB 294123）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294123&o=json)
