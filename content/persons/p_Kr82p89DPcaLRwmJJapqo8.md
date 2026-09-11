---
schema: wang-person/v1
id: p_Kr82p89DPcaLRwmJJapqo8
status: active
merged_into: null
display_name: 王宣
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eMtzQEPLLggUzuvNpFerdo
        subject_person_id: p_Kr82p89DPcaLRwmJJapqo8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iaN2bMLVWL23VTNTUxR2qp
          claim_id: c_eMtzQEPLLggUzuvNpFerdo
          source_id: s_J1228QDugEWP6w6V1LhQqr
          stance: supports
          locator: CBDB:126596
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126596）
          source: &a1
            id: s_J1228QDugEWP6w6V1LhQqr
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 126596）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126596&o=json
            external_identifier: CBDB:126596
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.047Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GeNXEcLxiTEPgtpVvsEt9A
        subject_person_id: p_Kr82p89DPcaLRwmJJapqo8
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
        - id: cs_1F5v8GzPDFwkCrGfE1h1wA
          claim_id: c_GeNXEcLxiTEPgtpVvsEt9A
          source_id: s_J1228QDugEWP6w6V1LhQqr
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
        id: c_3nGX36Yes17kzbEtJSWx8b
        subject_person_id: p_FDiJqJn77s6sHnYjqwgysR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Kr82p89DPcaLRwmJJapqo8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZnoATCHQegc6GRY5OsEY3B
          claim_id: c_3nGX36Yes17kzbEtJSWx8b
          source_id: s_NEzzTGNyLsjQEr3xW7sFhr
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第七十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NEzzTGNyLsjQEr3xW7sFhr
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 238665）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238665&o=json
            external_identifier: CBDB:238665
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FDiJqJn77s6sHnYjqwgysR
        status: active
        display_name: 王忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_2uInjBmj-ziOr2cHxasWq_
        subject_person_id: p_sqRQj3rACsAggP37o1X4hW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Kr82p89DPcaLRwmJJapqo8
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LFSgOYSaDATZDPNoUyJ44z
          claim_id: c_2uInjBmj-ziOr2cHxasWq_
          source_id: s_MuEk8a8nuWuehDbVVCqs5e
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第七十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MuEk8a8nuWuehDbVVCqs5e
            source_type: api_record
            title: 中国历代人物传记资料库：王賢（CBDB 238662）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238662&o=json
            external_identifier: CBDB:238662
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.885Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_sqRQj3rACsAggP37o1X4hW
        status: active
        display_name: 王賢
        merged_into_person_id: null
    - claim:
        id: c_Pq-0L8356ZEMp9_xv1r3rH
        subject_person_id: p_yJM2VsmdHgJfKLCoMeE4UA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Kr82p89DPcaLRwmJJapqo8
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lkFj7DSgUKIgMwDhuiEWab
          claim_id: c_Pq-0L8356ZEMp9_xv1r3rH
          source_id: s_yRAL4JyGBQUAfb2EW8GJRF
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第七十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yRAL4JyGBQUAfb2EW8GJRF
            source_type: api_record
            title: 中国历代人物传记资料库：王能（CBDB 238663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238663&o=json
            external_identifier: CBDB:238663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.886Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yJM2VsmdHgJfKLCoMeE4UA
        status: active
        display_name: 王能
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宣 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FDiJqJn77s6sHnYjqwgysR | 王忠 | accepted |
| ancestors | p_sqRQj3rACsAggP37o1X4hW | 王賢 | accepted |
| ancestors | p_yJM2VsmdHgJfKLCoMeE4UA | 王能 | accepted |

## 外部来源

- [中国历代人物传记资料库：王能（CBDB 238663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238663&o=json)
- [中国历代人物传记资料库：王賢（CBDB 238662）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238662&o=json)
- [中国历代人物传记资料库：王宣（CBDB 126596）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126596&o=json)
- [中国历代人物传记资料库：王忠（CBDB 238665）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238665&o=json)
