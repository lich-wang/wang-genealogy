---
schema: wang-person/v1
id: p_dsSbo8ATzTUkFNHmzJTKdW
status: active
merged_into: null
display_name: 王觀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EHTG1PaLUHDYK9D61AN2NZ
        subject_person_id: p_dsSbo8ATzTUkFNHmzJTKdW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WebF1yZX7aeN1uanHk9W3n
          claim_id: c_EHTG1PaLUHDYK9D61AN2NZ
          source_id: s_V85fVD2s4hS46bKsKaCo2y
          stance: supports
          locator: CBDB:35517
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35517）
          source: &a1
            id: s_V85fVD2s4hS46bKsKaCo2y
            source_type: api_record
            title: 中国历代人物传记资料库：王觀（CBDB 35517）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35517&o=json
            external_identifier: CBDB:35517
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.136Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uxtZiTs7Mp6Qfi8pBVXnq2
        subject_person_id: p_dsSbo8ATzTUkFNHmzJTKdW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀，明人物。籍贯廬陵。（中国历代人物传记资料库 CBDB 35517）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AmJ3Wpq0wTrXj5bPC1c5RM
          claim_id: c_uxtZiTs7Mp6Qfi8pBVXnq2
          source_id: s_V85fVD2s4hS46bKsKaCo2y
          stance: supports
          locator: CBDB:35517
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_E8C9PtpAklwCUUOexDTl2L
        subject_person_id: p_6VfyaJrbVtLEDBvH7EiLTz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dsSbo8ATzTUkFNHmzJTKdW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YX1IubRvmibYdpt0OpPD64
          claim_id: c_E8C9PtpAklwCUUOexDTl2L
          source_id: s_qvWcva9Q_Kf0LKKf0JtRiP
          stance: supports
          locator: CBDB 亲属：父（KinPerson 35516）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_qvWcva9Q_Kf0LKKf0JtRiP
            source_type: api_record
            title: 中国历代人物传记资料库：王觀（CBDB 35517）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35517&o=json
            external_identifier: CBDB:35517
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6VfyaJrbVtLEDBvH7EiLTz
        status: active
        display_name: 王斯覺
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王觀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王觀 | accepted |
| bio.summary | 王觀，明人物。籍贯廬陵。（中国历代人物传记资料库 CBDB 35517） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6VfyaJrbVtLEDBvH7EiLTz | 王斯覺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王觀（CBDB 35517）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35517&o=json)
