---
schema: wang-person/v1
id: p_NjCutxXs9zS5t3DhqKeWT7
status: active
merged_into: null
display_name: 王仲周
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FmEPEJndsEWVECVbLP19Xm
        subject_person_id: p_NjCutxXs9zS5t3DhqKeWT7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲周
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NdfEyhjuK73ExjY5muNQR9
          claim_id: c_FmEPEJndsEWVECVbLP19Xm
          source_id: s_FQipKMXxJb57Wgd38MHFrH
          stance: supports
          locator: CBDB:168888
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（168888）
          source: &a1
            id: s_FQipKMXxJb57Wgd38MHFrH
            source_type: api_record
            title: 中国历代人物传记资料库：王仲周（CBDB 168888）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168888&o=json
            external_identifier: CBDB:168888
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LN1EA1pHP58DZX1Ag617av
        subject_person_id: p_NjCutxXs9zS5t3DhqKeWT7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲周，唐人物。籍贯咸陽，曾任州刺史、長史。（中国历代人物传记资料库 CBDB 168888）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0Bgix5l7WJF6sx_gNV9tJf
          claim_id: c_LN1EA1pHP58DZX1Ag617av
          source_id: s_FQipKMXxJb57Wgd38MHFrH
          stance: supports
          locator: CBDB:168888
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6K0OMI5gKnS2jH5606bdrQ
        subject_person_id: p_kY6pJ3GE5CREHzY1UejctY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NjCutxXs9zS5t3DhqKeWT7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IB1ZjqtLU4145NEuChiF7Q
          claim_id: c_6K0OMI5gKnS2jH5606bdrQ
          source_id: s_FQipKMXxJb57Wgd38MHFrH
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kY6pJ3GE5CREHzY1UejctY
        status: active
        display_name: 王定
        merged_into_person_id: null
  children:
    - claim:
        id: c_LwQZEhoM3CCNuprWOah3kw
        subject_person_id: p_NjCutxXs9zS5t3DhqKeWT7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DK4CDWVtLrXpSu7JYcDXA1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O5VtMyD3GZjbM-7I0bKixa
          claim_id: c_LwQZEhoM3CCNuprWOah3kw
          source_id: s_A7fNFfzPkYSJLLL8bvGy7d
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_A7fNFfzPkYSJLLL8bvGy7d
            source_type: api_record
            title: 中国历代人物传记资料库：王巘（CBDB 168889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168889&o=json
            external_identifier: CBDB:168889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.003Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DK4CDWVtLrXpSu7JYcDXA1
        status: active
        display_name: 王巘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲周

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲周 | accepted |
| bio.summary | 王仲周，唐人物。籍贯咸陽，曾任州刺史、長史。（中国历代人物传记资料库 CBDB 168888） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kY6pJ3GE5CREHzY1UejctY | 王定 | accepted |
| children | p_DK4CDWVtLrXpSu7JYcDXA1 | 王巘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王巘（CBDB 168889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168889&o=json)
- [中国历代人物传记资料库：王仲周（CBDB 168888）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168888&o=json)
