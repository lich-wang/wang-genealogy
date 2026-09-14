---
schema: wang-person/v1
id: p_56QsES6P6H21E1WPJNrDnk
status: active
merged_into: null
display_name: 王廉清
cbdb_id: 22253
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hmzCUyBPoFjzeBkGJYj2gk
        subject_person_id: p_56QsES6P6H21E1WPJNrDnk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廉清，宋人物。籍贯汝陰，身份为藏書家、士人。（中国历代人物传记资料库 CBDB 22253）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_7kWq7FDCDnk9Bu0G656LVb
          claim_id: c_hmzCUyBPoFjzeBkGJYj2gk
          source_id: s_vpiKLDxNcp6JPp4hGbEMm2
          stance: supports
          locator: CBDB:22253
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_vpiKLDxNcp6JPp4hGbEMm2
            source_type: api_record
            title: 中国历代人物传记资料库：王廉清（CBDB 22253）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22253&o=json
            external_identifier: CBDB:22253
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tmtKT5PXE1LqGUBMdKgT8s
        subject_person_id: p_56QsES6P6H21E1WPJNrDnk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廉清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vGJPR8Jck2Z16QwkPGL1Kd
          claim_id: c_tmtKT5PXE1LqGUBMdKgT8s
          source_id: s_vpiKLDxNcp6JPp4hGbEMm2
          stance: supports
          locator: CBDB:22253
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_j37xOzhOZfxonFEBVroyEt
        subject_person_id: p_j8wPuwgWUGTVgAZXhVEGRs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_56QsES6P6H21E1WPJNrDnk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs__3Pkaj2Q_aAiMo5s8jwljC
          claim_id: c_j37xOzhOZfxonFEBVroyEt
          source_id: s_LHnwBKQcEFpy1iXAWJE6pU
          stance: supports
          locator: CBDB 亲属：父（KinPerson 7372）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_LHnwBKQcEFpy1iXAWJE6pU
            source_type: api_record
            title: 中国历代人物传记资料库：王廉清（CBDB 22253）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22253&o=json
            external_identifier: CBDB:22253
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_j8wPuwgWUGTVgAZXhVEGRs
        status: active
        display_name: 王銍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廉清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王廉清，宋人物。籍贯汝陰，身份为藏書家、士人。（中国历代人物传记资料库 CBDB 22253） | accepted |
| name.primary | 王廉清 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_j8wPuwgWUGTVgAZXhVEGRs | 王銍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廉清（CBDB 22253）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22253&o=json)
