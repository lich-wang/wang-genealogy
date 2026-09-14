---
schema: wang-person/v1
id: p_2Dpq8kjKgyyFFtwkDVGZtY
status: active
merged_into: null
display_name: 王汝愚
cbdb_id: 334087
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Kd73xZrmYSh5WSTKY1nhRd
        subject_person_id: p_2Dpq8kjKgyyFFtwkDVGZtY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝愚，明人物。隆慶二年進士，籍贯南陽。（中国历代人物传记资料库 CBDB 334087）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_PGC6hYA8piQ8Dnyn2DZW66
          claim_id: c_Kd73xZrmYSh5WSTKY1nhRd
          source_id: s_Mnj1EXSxLu8C6BEgNNHs6G
          stance: supports
          locator: CBDB:334087
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Mnj1EXSxLu8C6BEgNNHs6G
            source_type: api_record
            title: 中国历代人物传记资料库：王汝愚（CBDB 334087）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334087&o=json
            external_identifier: CBDB:334087
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_WoYdisPa6J2amnYwTqa7cE
        subject_person_id: p_2Dpq8kjKgyyFFtwkDVGZtY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝愚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_qByJNCWRkZdKDQJCHR1G6H
          claim_id: c_WoYdisPa6J2amnYwTqa7cE
          source_id: s_Mnj1EXSxLu8C6BEgNNHs6G
          stance: supports
          locator: CBDB:334087
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hKPTR3GG1EwqNs4z2Q5vZQ
        subject_person_id: p_51Pca5wdng4NB9T2FpYuFX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2Dpq8kjKgyyFFtwkDVGZtY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-NWFI_cNvzZ_-vEh4gSoWI
          claim_id: c_hKPTR3GG1EwqNs4z2Q5vZQ
          source_id: s_wG9BY6AsA0FJhHQj93Pr1R
          stance: supports
          locator: CBDB：兄弟 王汝鲁（126502）之父／母 王可
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝愚 与 王汝鲁 为同胞（CBDB 记「弟」），王汝鲁 之父／母即 王汝愚 之父／母。
          source:
            id: s_wG9BY6AsA0FJhHQj93Pr1R
            source_type: api_record
            title: 中国历代人物传记资料库：王汝愚（CBDB 334087）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334087&o=json
            external_identifier: CBDB:334087
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_51Pca5wdng4NB9T2FpYuFX
        status: active
        display_name: 王可
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_I2O3wTQ88BZcuJqHEydhnU
        subject_person_id: p_2Dpq8kjKgyyFFtwkDVGZtY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_iRoPCMQGG7T8QWQEfbMdBx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZQcZQtImMaIdRFsl31pZ5c
          claim_id: c_I2O3wTQ88BZcuJqHEydhnU
          source_id: s_wG9BY6AsA0FJhHQj93Pr1R
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126502 王汝魯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wG9BY6AsA0FJhHQj93Pr1R
            source_type: api_record
            title: 中国历代人物传记资料库：王汝愚（CBDB 334087）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334087&o=json
            external_identifier: CBDB:334087
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iRoPCMQGG7T8QWQEfbMdBx
        status: active
        display_name: 王汝鲁
        merged_into_person_id: null
---

# 王汝愚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝愚，明人物。隆慶二年進士，籍贯南陽。（中国历代人物传记资料库 CBDB 334087） | accepted |
| name.primary | 王汝愚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_51Pca5wdng4NB9T2FpYuFX | 王可 | accepted |
| other | p_iRoPCMQGG7T8QWQEfbMdBx | 王汝鲁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝愚（CBDB 334087）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334087&o=json)
