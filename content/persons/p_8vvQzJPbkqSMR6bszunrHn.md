---
schema: wang-person/v1
id: p_8vvQzJPbkqSMR6bszunrHn
status: active
merged_into: null
display_name: 王俊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_39MXJhkjKvE5bommYjPoHm
        subject_person_id: p_8vvQzJPbkqSMR6bszunrHn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_acTHD4S3EuNP1i6oEAEU9T
          claim_id: c_39MXJhkjKvE5bommYjPoHm
          source_id: s_jAZ9th1GrvndzKh699UBn7
          stance: supports
          locator: CBDB:271499
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271499）
          source: &a1
            id: s_jAZ9th1GrvndzKh699UBn7
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 271499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271499&o=json
            external_identifier: CBDB:271499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.875Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jwrybZ5o8kfN3MXQHqCvLS
        subject_person_id: p_8vvQzJPbkqSMR6bszunrHn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊，明人物。弘治十五年進士，籍贯三河。（中国历代人物传记资料库 CBDB 271499）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ygEGNVie_T3QkgiLM2K_Jv
          claim_id: c_jwrybZ5o8kfN3MXQHqCvLS
          source_id: s_jAZ9th1GrvndzKh699UBn7
          stance: supports
          locator: CBDB:271499
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3vVxm8xQpTh0wIexInRawA
        subject_person_id: p_zTj1eNcAG3BPvbBjiJxYtN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8vvQzJPbkqSMR6bszunrHn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tZTJTE31nBig_i9yl7ZRWL
          claim_id: c_3vVxm8xQpTh0wIexInRawA
          source_id: s_5h5D9I-YrJAb1Y9uQrXV7B
          stance: supports
          locator: CBDB：兄弟 王俸（201386）之父／母 王文琮
          quotation: null
          interpretation_note: 由兄弟关系推断：王俊 与 王俸 为同胞（CBDB 记「兄」），王俸 之父／母即 王俊 之父／母。
          source:
            id: s_5h5D9I-YrJAb1Y9uQrXV7B
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 271499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271499&o=json
            external_identifier: CBDB:271499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zTj1eNcAG3BPvbBjiJxYtN
        status: active
        display_name: 王文琮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0Wv7PdtTegiyNHOFU1ZUyN
        subject_person_id: p_8vvQzJPbkqSMR6bszunrHn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dz9UYGUCmAwX3qeez8fHjJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eMjw6xVAU0M02R4DgN3ifV
          claim_id: c_0Wv7PdtTegiyNHOFU1ZUyN
          source_id: s_5h5D9I-YrJAb1Y9uQrXV7B
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201386 王俸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5h5D9I-YrJAb1Y9uQrXV7B
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 271499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271499&o=json
            external_identifier: CBDB:271499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dz9UYGUCmAwX3qeez8fHjJ
        status: active
        display_name: 王俸
        merged_into_person_id: null
---

# 王俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊 | accepted |
| bio.summary | 王俊，明人物。弘治十五年進士，籍贯三河。（中国历代人物传记资料库 CBDB 271499） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zTj1eNcAG3BPvbBjiJxYtN | 王文琮 | accepted |
| other | p_dz9UYGUCmAwX3qeez8fHjJ | 王俸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俊（CBDB 271499）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271499&o=json)
