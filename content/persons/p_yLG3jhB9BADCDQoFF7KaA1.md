---
schema: wang-person/v1
id: p_yLG3jhB9BADCDQoFF7KaA1
status: active
merged_into: null
display_name: 王欽哉
cbdb_id: 35026
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hihSStcpp9SeCM7YzXeSdt
        subject_person_id: p_yLG3jhB9BADCDQoFF7KaA1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽哉，金人物。籍贯玉田。（中国历代人物传记资料库 CBDB 35026）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Wt_YPYrDqUloHid6YA8i4s
          claim_id: c_hihSStcpp9SeCM7YzXeSdt
          source_id: s_fhp8rFwbJrVQmoQiwepwMr
          stance: supports
          locator: CBDB:35026
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_fhp8rFwbJrVQmoQiwepwMr
            source_type: api_record
            title: 中国历代人物传记资料库：王欽哉（CBDB 35026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35026&o=json
            external_identifier: CBDB:35026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_b3ogEGpimx3jHaFQ7fCF2o
        subject_person_id: p_yLG3jhB9BADCDQoFF7KaA1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽哉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ARJfFP7TzPGLj79pXk89SU
          claim_id: c_b3ogEGpimx3jHaFQ7fCF2o
          source_id: s_fhp8rFwbJrVQmoQiwepwMr
          stance: supports
          locator: CBDB:35026
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 金
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hy2BvckSdFqOxXlRb1ZUzX
        subject_person_id: p_k32g45q5JsQaD65qkta3Hz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yLG3jhB9BADCDQoFF7KaA1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wv7xQYwxn03jXmOZhU5Q1i
          claim_id: c_hy2BvckSdFqOxXlRb1ZUzX
          source_id: s_5LsJfdPr6rua-8WJcrv0eo
          stance: supports
          locator: CBDB 亲属：父（KinPerson 35022）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_5LsJfdPr6rua-8WJcrv0eo
            source_type: api_record
            title: 中国历代人物传记资料库：王欽哉（CBDB 35026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35026&o=json
            external_identifier: CBDB:35026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_k32g45q5JsQaD65qkta3Hz
        status: active
        display_name: 王寂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王欽哉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王欽哉，金人物。籍贯玉田。（中国历代人物传记资料库 CBDB 35026） | accepted |
| name.primary | 王欽哉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_k32g45q5JsQaD65qkta3Hz | 王寂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王欽哉（CBDB 35026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35026&o=json)
