---
schema: wang-person/v1
id: p_e8bXSz4GNvW4GQBY9EosiG
status: active
merged_into: null
display_name: 王英
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nWYnr6WoZmU9TsyvcHDNEb
        subject_person_id: p_e8bXSz4GNvW4GQBY9EosiG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n9Kr8Qkme3tMTa9B3a8W9p
          claim_id: c_nWYnr6WoZmU9TsyvcHDNEb
          source_id: s_pweSSvVFt9oRXh1DB5io9A
          stance: supports
          locator: CBDB:231745
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（231745）
          source: &a1
            id: s_pweSSvVFt9oRXh1DB5io9A
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 231745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231745&o=json
            external_identifier: CBDB:231745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.653Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MuEGXFQnSH8v5qMvcALTWg
        subject_person_id: p_e8bXSz4GNvW4GQBY9EosiG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英，明人物。宣德八年進士，籍贯棲霞。（中国历代人物传记资料库 CBDB 231745）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FMsPNWkE8Y4TJzGgf9BjfL
          claim_id: c_MuEGXFQnSH8v5qMvcALTWg
          source_id: s_pweSSvVFt9oRXh1DB5io9A
          stance: supports
          locator: CBDB:231745
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_-wqagVcfjzCVRnF3mUBNIE
        subject_person_id: p_e8bXSz4GNvW4GQBY9EosiG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CABq3rPfMpkNs8qeT4KNGJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aGNCLTYof-7pPLLbiP4Nl8
          claim_id: c_-wqagVcfjzCVRnF3mUBNIE
          source_id: s_pweSSvVFt9oRXh1DB5io9A
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第三甲第六十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CABq3rPfMpkNs8qeT4KNGJ
        status: active
        display_name: 王頤
        merged_into_person_id: null
    - claim:
        id: c_AQXsl5fERf2EVJxx1K-5ma
        subject_person_id: p_e8bXSz4GNvW4GQBY9EosiG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EPWZZZ9U8porfk84fLjYZ5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v2kpFgosEj4YHVng0PpYYO
          claim_id: c_AQXsl5fERf2EVJxx1K-5ma
          source_id: s_y308HRyNsLTi_7IThFUFiS
          stance: supports
          locator: CBDB：兄弟 王頤（207361）之父／母 王英
          quotation: null
          interpretation_note: 由兄弟关系推断：王福某 与 王頤 为同胞（CBDB 记「弟」），王頤 之父／母即 王福某 之父／母。
          source:
            id: s_y308HRyNsLTi_7IThFUFiS
            source_type: api_record
            title: 中国历代人物传记资料库：王福某（CBDB 231748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231748&o=json
            external_identifier: CBDB:231748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EPWZZZ9U8porfk84fLjYZ5
        status: active
        display_name: 王福某
        merged_into_person_id: null
    - claim:
        id: c_sLElfZRRaJKBrgvhpxvoLK
        subject_person_id: p_e8bXSz4GNvW4GQBY9EosiG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NAaPBxJBF838WRQ2HrM6dg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_raN9aK2zn-8NQdF3HSVFRg
          claim_id: c_sLElfZRRaJKBrgvhpxvoLK
          source_id: s_UqCg2CFPaZ8avhF_USo0qZ
          stance: supports
          locator: CBDB：兄弟 王頤（207361）之父／母 王英
          quotation: null
          interpretation_note: 由兄弟关系推断：王世祥 与 王頤 为同胞（CBDB 记「兄」），王頤 之父／母即 王世祥 之父／母。
          source:
            id: s_UqCg2CFPaZ8avhF_USo0qZ
            source_type: api_record
            title: 中国历代人物传记资料库：王世祥（CBDB 231749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231749&o=json
            external_identifier: CBDB:231749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NAaPBxJBF838WRQ2HrM6dg
        status: active
        display_name: 王世祥
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王英 | accepted |
| bio.summary | 王英，明人物。宣德八年進士，籍贯棲霞。（中国历代人物传记资料库 CBDB 231745） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_CABq3rPfMpkNs8qeT4KNGJ | 王頤 | accepted |
| children | p_EPWZZZ9U8porfk84fLjYZ5 | 王福某 | accepted |
| children | p_NAaPBxJBF838WRQ2HrM6dg | 王世祥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福某（CBDB 231748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231748&o=json)
- [中国历代人物传记资料库：王世祥（CBDB 231749）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231749&o=json)
- [中国历代人物传记资料库：王英（CBDB 231745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231745&o=json)
