---
schema: wang-person/v1
id: p_1HkFkTf4tHoX7LaHqLF6KD
status: active
merged_into: null
display_name: 王來聘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4QXAqoDbx3g13qTJAYHrh7
        subject_person_id: p_1HkFkTf4tHoX7LaHqLF6KD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x8hNGHdy6R44GFv7m9SsEp
          claim_id: c_4QXAqoDbx3g13qTJAYHrh7
          source_id: s_p8ds4qhY2XSgtMPZWu5LA9
          stance: supports
          locator: CBDB:336275
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（336275）
          source: &a1
            id: s_p8ds4qhY2XSgtMPZWu5LA9
            source_type: api_record
            title: 中国历代人物传记资料库：王來聘（CBDB 336275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336275&o=json
            external_identifier: CBDB:336275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.478Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u3HVyJt1JvUotJLreP2NGB
        subject_person_id: p_1HkFkTf4tHoX7LaHqLF6KD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來聘，明人物。隆慶二年進士，籍贯博野。（中国历代人物传记资料库 CBDB 336275）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tPTg8q4zahMAe07a55cu7W
          claim_id: c_u3HVyJt1JvUotJLreP2NGB
          source_id: s_p8ds4qhY2XSgtMPZWu5LA9
          stance: supports
          locator: CBDB:336275
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XYG9CQ8Yq2ropKULnX4X_5
        subject_person_id: p_75am3pR1oJY4F4kK4X9iA5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1HkFkTf4tHoX7LaHqLF6KD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HfHR5ezucpuU8ikhKlLFd0
          claim_id: c_XYG9CQ8Yq2ropKULnX4X_5
          source_id: s_qDsIr0aRHjGQ69qg6rP6F4
          stance: supports
          locator: CBDB：兄弟 王詔（205634）之父／母 王崇德
          quotation: null
          interpretation_note: 由兄弟关系推断：王來聘 与 王詔 为同胞（CBDB 记「弟」），王詔 之父／母即 王來聘 之父／母。
          source:
            id: s_qDsIr0aRHjGQ69qg6rP6F4
            source_type: api_record
            title: 中国历代人物传记资料库：王來聘（CBDB 336275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336275&o=json
            external_identifier: CBDB:336275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_75am3pR1oJY4F4kK4X9iA5
        status: active
        display_name: 王崇德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_N6KI6U1gTWGb4kUBCvTW-Q
        subject_person_id: p_1HkFkTf4tHoX7LaHqLF6KD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_4DoEiYtLovxcVEfxd27r2A
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5yULRKaroCbSp33qpgVH4K
          claim_id: c_N6KI6U1gTWGb4kUBCvTW-Q
          source_id: s_qDsIr0aRHjGQ69qg6rP6F4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205634 王詔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qDsIr0aRHjGQ69qg6rP6F4
            source_type: api_record
            title: 中国历代人物传记资料库：王來聘（CBDB 336275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336275&o=json
            external_identifier: CBDB:336275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4DoEiYtLovxcVEfxd27r2A
        status: active
        display_name: 王詔
        merged_into_person_id: null
---

# 王來聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王來聘 | accepted |
| bio.summary | 王來聘，明人物。隆慶二年進士，籍贯博野。（中国历代人物传记资料库 CBDB 336275） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_75am3pR1oJY4F4kK4X9iA5 | 王崇德 | accepted |
| other | p_4DoEiYtLovxcVEfxd27r2A | 王詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王來聘（CBDB 336275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336275&o=json)
