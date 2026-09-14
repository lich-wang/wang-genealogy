---
schema: wang-person/v1
id: p_yh8c2xSCHG3efoW3KFKu4e
status: active
merged_into: null
display_name: 王應元
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pTJbDyHRZ5KFDTuvZirbai
        subject_person_id: p_yh8c2xSCHG3efoW3KFKu4e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WKABaWFN5jY1aPbyagnvhS
          claim_id: c_pTJbDyHRZ5KFDTuvZirbai
          source_id: s_jNPrz5yLL1tqSUQhwG1P2J
          stance: supports
          locator: CBDB:334993
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（334993）
          source: &a1
            id: s_jNPrz5yLL1tqSUQhwG1P2J
            source_type: api_record
            title: 中国历代人物传记资料库：王應元（CBDB 334993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334993&o=json
            external_identifier: CBDB:334993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.447Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WcsQBj1U5EpAfiGMnmv8B6
        subject_person_id: p_yh8c2xSCHG3efoW3KFKu4e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應元，明人物。隆慶二年進士，籍贯信陽。（中国历代人物传记资料库 CBDB 334993）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_COX4AfjRpk5ix16ldDGQ3a
          claim_id: c_WcsQBj1U5EpAfiGMnmv8B6
          source_id: s_jNPrz5yLL1tqSUQhwG1P2J
          stance: supports
          locator: CBDB:334993
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jWWtpySfZwo2frNCmr2rvZ
        subject_person_id: p_WUPKdegwzMR62VcQ6XVX6T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yh8c2xSCHG3efoW3KFKu4e
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xs6Z7ahZNINsVKqc3tJCFj
          claim_id: c_jWWtpySfZwo2frNCmr2rvZ
          source_id: s_kyFRCKPTapt0h9OZldHly4
          stance: supports
          locator: CBDB：兄弟 王應辰（205548）之父／母 王省
          quotation: null
          interpretation_note: 由兄弟关系推断：王應元 与 王應辰 为同胞（CBDB 记「弟」），王應辰 之父／母即 王應元 之父／母。
          source:
            id: s_kyFRCKPTapt0h9OZldHly4
            source_type: api_record
            title: 中国历代人物传记资料库：王應元（CBDB 334993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334993&o=json
            external_identifier: CBDB:334993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WUPKdegwzMR62VcQ6XVX6T
        status: active
        display_name: 王省
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Q9SMMzAHke4hTqkWkony71
        subject_person_id: p_Uk3JWD2Whpfr1nbW4yeaJ2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yh8c2xSCHG3efoW3KFKu4e
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pLj-C0HCbrxLCPcqDRr-Ld
          claim_id: c_Q9SMMzAHke4hTqkWkony71
          source_id: s_kyFRCKPTapt0h9OZldHly4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205548 王應辰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kyFRCKPTapt0h9OZldHly4
            source_type: api_record
            title: 中国历代人物传记资料库：王應元（CBDB 334993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334993&o=json
            external_identifier: CBDB:334993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Uk3JWD2Whpfr1nbW4yeaJ2
        status: active
        display_name: 王應辰
        merged_into_person_id: null
---

# 王應元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應元 | accepted |
| bio.summary | 王應元，明人物。隆慶二年進士，籍贯信陽。（中国历代人物传记资料库 CBDB 334993） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WUPKdegwzMR62VcQ6XVX6T | 王省 | accepted |
| other | p_Uk3JWD2Whpfr1nbW4yeaJ2 | 王應辰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應元（CBDB 334993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334993&o=json)
