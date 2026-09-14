---
schema: wang-person/v1
id: p_Wb6X3GJ8LiDLopymZC6KMh
status: active
merged_into: null
display_name: 王九一
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DuE2TG4VQFFeRLa3V7L3fu
        subject_person_id: p_Wb6X3GJ8LiDLopymZC6KMh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九一
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LeRv2nwNm5jL4J95ChVY7j
          claim_id: c_DuE2TG4VQFFeRLa3V7L3fu
          source_id: s_SM8Xt8NPEh9f2WJbBfjVZD
          stance: supports
          locator: CBDB:221745
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221745）
          source: &a1
            id: s_SM8Xt8NPEh9f2WJbBfjVZD
            source_type: api_record
            title: 中国历代人物传记资料库：王九一（CBDB 221745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221745&o=json
            external_identifier: CBDB:221745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.334Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LpUuCcvAzUP3E9BZPttjDb
        subject_person_id: p_Wb6X3GJ8LiDLopymZC6KMh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九一，明人物。萬曆八年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 221745）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9uU-p0bdzq9c893AekSCz-
          claim_id: c_LpUuCcvAzUP3E9BZPttjDb
          source_id: s_SM8Xt8NPEh9f2WJbBfjVZD
          stance: supports
          locator: CBDB:221745
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ufJUcT7NcrxmwcFIn9yKrz
        subject_person_id: p_Xuy9jPb62VMvUCJM1MazAP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Wb6X3GJ8LiDLopymZC6KMh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uQJRB0c7bgK2y462tlxxYU
          claim_id: c_ufJUcT7NcrxmwcFIn9yKrz
          source_id: s_KxBp1LF1bNdSymS-O-X2Et
          stance: supports
          locator: CBDB：兄弟 王九德（206699）之父／母 王廷相
          quotation: null
          interpretation_note: 由兄弟关系推断：王九一 与 王九德 为同胞（CBDB 记「兄」），王九德 之父／母即 王九一 之父／母。
          source:
            id: s_KxBp1LF1bNdSymS-O-X2Et
            source_type: api_record
            title: 中国历代人物传记资料库：王九一（CBDB 221745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221745&o=json
            external_identifier: CBDB:221745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Xuy9jPb62VMvUCJM1MazAP
        status: active
        display_name: 王廷相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_EvzAnv_mnz1n3MRAciGcwC
        subject_person_id: p_7F2eLtMppfYhb1rX2t5C3R
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Wb6X3GJ8LiDLopymZC6KMh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hmj2WBsjm4sEShiBW4_C7V
          claim_id: c_EvzAnv_mnz1n3MRAciGcwC
          source_id: s_KxBp1LF1bNdSymS-O-X2Et
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206699 王九德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KxBp1LF1bNdSymS-O-X2Et
            source_type: api_record
            title: 中国历代人物传记资料库：王九一（CBDB 221745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221745&o=json
            external_identifier: CBDB:221745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7F2eLtMppfYhb1rX2t5C3R
        status: active
        display_name: 王九德
        merged_into_person_id: null
---

# 王九一

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九一 | accepted |
| bio.summary | 王九一，明人物。萬曆八年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 221745） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Xuy9jPb62VMvUCJM1MazAP | 王廷相 | accepted |
| other | p_7F2eLtMppfYhb1rX2t5C3R | 王九德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王九一（CBDB 221745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221745&o=json)
