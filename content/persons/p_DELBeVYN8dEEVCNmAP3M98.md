---
schema: wang-person/v1
id: p_DELBeVYN8dEEVCNmAP3M98
status: active
merged_into: null
display_name: 王儼
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UuULCmA7Qj2f6aeo7XbR3Y
        subject_person_id: p_DELBeVYN8dEEVCNmAP3M98
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_U6p9HbjhsKkkeVA4gevC1L
          claim_id: c_UuULCmA7Qj2f6aeo7XbR3Y
          source_id: s_72W23EkWL54TNiBiPtzPZ1
          stance: supports
          locator: CBDB:242566
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242566）
          source: &a1
            id: s_72W23EkWL54TNiBiPtzPZ1
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 242566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242566&o=json
            external_identifier: CBDB:242566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.978Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9bieKSyFhHNKYZ6SADZgLA
        subject_person_id: p_DELBeVYN8dEEVCNmAP3M98
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儼，明人物。成化二年進士，籍贯寧州。（中国历代人物传记资料库 CBDB 242566）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rvKdlq_0_kLJJx2f56xDs3
          claim_id: c_9bieKSyFhHNKYZ6SADZgLA
          source_id: s_72W23EkWL54TNiBiPtzPZ1
          stance: supports
          locator: CBDB:242566
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_AHOd7lkwPjNGJn4A5LCqjy
        subject_person_id: p_EN3ydiKjRibv3nRcEaCbqj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DELBeVYN8dEEVCNmAP3M98
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g6ziPa8DtGnv070Um3fLBS
          claim_id: c_AHOd7lkwPjNGJn4A5LCqjy
          source_id: s_ZXFNvYElM7VWPDay1yAP4X
          stance: supports
          locator: CBDB：兄弟 王偉（67431）之父／母 王政
          quotation: null
          interpretation_note: 由兄弟关系推断：王儼 与 王偉 为同胞（CBDB 记「弟」），王偉 之父／母即 王儼 之父／母。
          source:
            id: s_ZXFNvYElM7VWPDay1yAP4X
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 242566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242566&o=json
            external_identifier: CBDB:242566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EN3ydiKjRibv3nRcEaCbqj
        status: active
        display_name: 王政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_doCEXIDJ_Xn2RGSTFjcmOz
        subject_person_id: p_DELBeVYN8dEEVCNmAP3M98
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XFNHC3xzSn5PQ61c2MLe3i
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vQfYT6YEgrmHvJu67rpT-J
          claim_id: c_doCEXIDJ_Xn2RGSTFjcmOz
          source_id: s_ZXFNvYElM7VWPDay1yAP4X
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67431 王偉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZXFNvYElM7VWPDay1yAP4X
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 242566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242566&o=json
            external_identifier: CBDB:242566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XFNHC3xzSn5PQ61c2MLe3i
        status: active
        display_name: 王偉
        merged_into_person_id: null
---

# 王儼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儼 | accepted |
| bio.summary | 王儼，明人物。成化二年進士，籍贯寧州。（中国历代人物传记资料库 CBDB 242566） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EN3ydiKjRibv3nRcEaCbqj | 王政 | accepted |
| other | p_XFNHC3xzSn5PQ61c2MLe3i | 王偉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王儼（CBDB 242566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242566&o=json)
