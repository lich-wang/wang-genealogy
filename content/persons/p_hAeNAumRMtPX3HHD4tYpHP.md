---
schema: wang-person/v1
id: p_hAeNAumRMtPX3HHD4tYpHP
status: active
merged_into: null
display_name: 王滋
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k2QkPN6UKN1c3wybaHsL9M
        subject_person_id: p_hAeNAumRMtPX3HHD4tYpHP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NkA7YNTtmM9PaNqANrFNRQ
          claim_id: c_k2QkPN6UKN1c3wybaHsL9M
          source_id: s_uexmRzKHuP5a3KKm3MwB3m
          stance: supports
          locator: CBDB:297868
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297868）
          source: &a1
            id: s_uexmRzKHuP5a3KKm3MwB3m
            source_type: api_record
            title: 中国历代人物传记资料库：王滋（CBDB 297868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297868&o=json
            external_identifier: CBDB:297868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.581Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_26Fn3j7wHJZCp847GxSpmA
        subject_person_id: p_hAeNAumRMtPX3HHD4tYpHP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滋，明人物。天順元年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 297868）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BoxxWAs8T_9cdndqUgcZtl
          claim_id: c_26Fn3j7wHJZCp847GxSpmA
          source_id: s_uexmRzKHuP5a3KKm3MwB3m
          stance: supports
          locator: CBDB:297868
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_p7clO-N9PllWMieGT8sfRF
        subject_person_id: p_t7N3FS2FJZpX5ZRC4cp82b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hAeNAumRMtPX3HHD4tYpHP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pCOABuekdKxLwV9bbtQuK-
          claim_id: c_p7clO-N9PllWMieGT8sfRF
          source_id: s__XiPUoJowXX10cEXg1QlWl
          stance: supports
          locator: CBDB：兄弟 王淵（67719）之父／母 王鑰
          quotation: null
          interpretation_note: 由兄弟关系推断：王滋 与 王淵 为同胞（CBDB 记「兄」），王淵 之父／母即 王滋 之父／母。
          source:
            id: s__XiPUoJowXX10cEXg1QlWl
            source_type: api_record
            title: 中国历代人物传记资料库：王滋（CBDB 297868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297868&o=json
            external_identifier: CBDB:297868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_t7N3FS2FJZpX5ZRC4cp82b
        status: active
        display_name: 王鑰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_v3JQLzD87tks16rRiNfV5L
        subject_person_id: p_JCqwAkFqCg6AEXKEULaDMW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hAeNAumRMtPX3HHD4tYpHP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u808LAYCUW-AtmJcrmp9Yb
          claim_id: c_v3JQLzD87tks16rRiNfV5L
          source_id: s__XiPUoJowXX10cEXg1QlWl
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67719 王淵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__XiPUoJowXX10cEXg1QlWl
            source_type: api_record
            title: 中国历代人物传记资料库：王滋（CBDB 297868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297868&o=json
            external_identifier: CBDB:297868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JCqwAkFqCg6AEXKEULaDMW
        status: active
        display_name: 王淵
        merged_into_person_id: null
---

# 王滋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王滋 | accepted |
| bio.summary | 王滋，明人物。天順元年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 297868） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_t7N3FS2FJZpX5ZRC4cp82b | 王鑰 | accepted |
| other | p_JCqwAkFqCg6AEXKEULaDMW | 王淵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王滋（CBDB 297868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297868&o=json)
