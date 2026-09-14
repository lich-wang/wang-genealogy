---
schema: wang-person/v1
id: p_HrkkgqQR2n2D5BStWXVbwx
status: active
merged_into: null
display_name: 王來問
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CvpAX6FfBrVUC1yLx825pC
        subject_person_id: p_HrkkgqQR2n2D5BStWXVbwx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來問
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vqbKAzQaYRT1wC8fEAci8w
          claim_id: c_CvpAX6FfBrVUC1yLx825pC
          source_id: s_qR1RPtD9g3fSKLoWAnha3X
          stance: supports
          locator: CBDB:210619
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210619）
          source: &a1
            id: s_qR1RPtD9g3fSKLoWAnha3X
            source_type: api_record
            title: 中国历代人物传记资料库：王來問（CBDB 210619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210619&o=json
            external_identifier: CBDB:210619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.013Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EHmEaEyNJKJpFfu1Dw3y7r
        subject_person_id: p_HrkkgqQR2n2D5BStWXVbwx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來問，明人物。隆慶五年進士，籍贯壽陽。（中国历代人物传记资料库 CBDB 210619）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0tdYAoqauVEhRA22A_9XaJ
          claim_id: c_EHmEaEyNJKJpFfu1Dw3y7r
          source_id: s_qR1RPtD9g3fSKLoWAnha3X
          stance: supports
          locator: CBDB:210619
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9bFP29iluQiqrfZkykp3eo
        subject_person_id: p_Xfq2hzbf2P25NMCS4qwtRa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HrkkgqQR2n2D5BStWXVbwx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_es2ZhXc44EI0iSYJPSlvqI
          claim_id: c_9bFP29iluQiqrfZkykp3eo
          source_id: s_dCEflOvvJXHyYbDzZpWSo4
          stance: supports
          locator: CBDB：兄弟 王來聘（205915）之父／母 王麟
          quotation: null
          interpretation_note: 由兄弟关系推断：王來問 与 王來聘 为同胞（CBDB 记「兄」），王來聘 之父／母即 王來問 之父／母。
          source:
            id: s_dCEflOvvJXHyYbDzZpWSo4
            source_type: api_record
            title: 中国历代人物传记资料库：王來問（CBDB 210619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210619&o=json
            external_identifier: CBDB:210619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Xfq2hzbf2P25NMCS4qwtRa
        status: active
        display_name: 王麟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_FoMqkKJRezAvrD4bgx57Lt
        subject_person_id: p_HrkkgqQR2n2D5BStWXVbwx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TFTLmHU5uD9CZvePXzWQV6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fz_UtB3qUOlnCbR_UW3VNU
          claim_id: c_FoMqkKJRezAvrD4bgx57Lt
          source_id: s_dCEflOvvJXHyYbDzZpWSo4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205915 王來聘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dCEflOvvJXHyYbDzZpWSo4
            source_type: api_record
            title: 中国历代人物传记资料库：王來問（CBDB 210619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210619&o=json
            external_identifier: CBDB:210619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TFTLmHU5uD9CZvePXzWQV6
        status: active
        display_name: 王來聘
        merged_into_person_id: null
---

# 王來問

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王來問 | accepted |
| bio.summary | 王來問，明人物。隆慶五年進士，籍贯壽陽。（中国历代人物传记资料库 CBDB 210619） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Xfq2hzbf2P25NMCS4qwtRa | 王麟 | accepted |
| other | p_TFTLmHU5uD9CZvePXzWQV6 | 王來聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王來問（CBDB 210619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210619&o=json)
