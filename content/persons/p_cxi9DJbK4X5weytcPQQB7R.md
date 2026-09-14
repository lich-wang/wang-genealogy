---
schema: wang-person/v1
id: p_cxi9DJbK4X5weytcPQQB7R
status: active
merged_into: null
display_name: 王琠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eBJhfi9DcUW9YsAfm6GU6Y
        subject_person_id: p_cxi9DJbK4X5weytcPQQB7R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zEwWCNuC5HZnL24NHK5uQT
          claim_id: c_eBJhfi9DcUW9YsAfm6GU6Y
          source_id: s_5k3Xgz7Xsj4DSSXCrDPAJe
          stance: supports
          locator: CBDB:563041
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（563041）
          source: &a1
            id: s_5k3Xgz7Xsj4DSSXCrDPAJe
            source_type: api_record
            title: 中国历代人物传记资料库：王琠（CBDB 563041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563041&o=json
            external_identifier: CBDB:563041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.796Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_skVFjFhcpigeqJcUv7wLXb
        subject_person_id: p_cxi9DJbK4X5weytcPQQB7R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琠，宋人物。籍贯通遠軍。（中国历代人物传记资料库 CBDB 563041）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nVVoQ2yq29L1NiCCnwc1OU
          claim_id: c_skVFjFhcpigeqJcUv7wLXb
          source_id: s_5k3Xgz7Xsj4DSSXCrDPAJe
          stance: supports
          locator: CBDB:563041
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_p5-eDOVDkRGWmTZPv-_YJh
        subject_person_id: p_vfZA8CNHYRGPvaenX91t3P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cxi9DJbK4X5weytcPQQB7R
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PWSeEBNRCe0HdrhaRx14g3
          claim_id: c_p5-eDOVDkRGWmTZPv-_YJh
          source_id: s_PiO42Qec9yD6RrdEInl4Jw
          stance: supports
          locator: CBDB 亲属：父（KinPerson 37768）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_PiO42Qec9yD6RrdEInl4Jw
            source_type: api_record
            title: 中国历代人物传记资料库：王琠（CBDB 563041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563041&o=json
            external_identifier: CBDB:563041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vfZA8CNHYRGPvaenX91t3P
        status: active
        display_name: 王德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琠 | accepted |
| bio.summary | 王琠，宋人物。籍贯通遠軍。（中国历代人物传记资料库 CBDB 563041） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vfZA8CNHYRGPvaenX91t3P | 王德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琠（CBDB 563041）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563041&o=json)
