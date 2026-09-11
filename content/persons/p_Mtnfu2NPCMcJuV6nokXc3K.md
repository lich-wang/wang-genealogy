---
schema: wang-person/v1
id: p_Mtnfu2NPCMcJuV6nokXc3K
status: active
merged_into: null
display_name: 王演
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zdPTHNKVdXYrn7DGuQeFA8
        subject_person_id: p_Mtnfu2NPCMcJuV6nokXc3K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王演
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KAByT82SSf3J5Geyej4HxU
          claim_id: c_zdPTHNKVdXYrn7DGuQeFA8
          source_id: s_mQCjbcVNg4qV3dk1J8gwk3
          stance: supports
          locator: CBDB:157703
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（157703）
          source: &a1
            id: s_mQCjbcVNg4qV3dk1J8gwk3
            source_type: api_record
            title: 中国历代人物传记资料库：王演（CBDB 157703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157703&o=json
            external_identifier: CBDB:157703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.912Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t9AnemSBk4o3sAbpC455Qd
        subject_person_id: p_Mtnfu2NPCMcJuV6nokXc3K
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
        - id: cs_NGvaKdQx5VeyVjJ6UEiMhY
          claim_id: c_t9AnemSBk4o3sAbpC455Qd
          source_id: s_mQCjbcVNg4qV3dk1J8gwk3
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
        id: c_Pb9k5W8MnsTa0hvHA72JNS
        subject_person_id: p_KzAj6xaVy8V6z6Ty9mttBC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Mtnfu2NPCMcJuV6nokXc3K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_01n3-DGd5HMdr0Pxv2SX_3
          claim_id: c_Pb9k5W8MnsTa0hvHA72JNS
          source_id: s_GnG5jBjHDr2pFhzcogZtD9
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GnG5jBjHDr2pFhzcogZtD9
            source_type: api_record
            title: 中国历代人物传记资料库：王惟忠（CBDB 157702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157702&o=json
            external_identifier: CBDB:157702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.912Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KzAj6xaVy8V6z6Ty9mttBC
        status: active
        display_name: 王惟忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王演

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王演 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KzAj6xaVy8V6z6Ty9mttBC | 王惟忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惟忠（CBDB 157702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157702&o=json)
- [中国历代人物传记资料库：王演（CBDB 157703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157703&o=json)
