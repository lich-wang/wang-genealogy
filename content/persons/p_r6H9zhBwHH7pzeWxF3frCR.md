---
schema: wang-person/v1
id: p_r6H9zhBwHH7pzeWxF3frCR
status: active
merged_into: null
display_name: 王恆中
cbdb_id: 304154
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uityUY4zuAtnVmF8cQn5v5
        subject_person_id: p_r6H9zhBwHH7pzeWxF3frCR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恆中，明人物。嘉靖二十年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 304154）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_sKyXNryuNohho8us0rV7HZ
          claim_id: c_uityUY4zuAtnVmF8cQn5v5
          source_id: s_C5uKZAyo6XgAk8ci88BXiN
          stance: supports
          locator: CBDB:304154
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_C5uKZAyo6XgAk8ci88BXiN
            source_type: api_record
            title: 中国历代人物传记资料库：王恆中（CBDB 304154）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304154&o=json
            external_identifier: CBDB:304154
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UiiSw6K95BhLexA5xQvHin
        subject_person_id: p_r6H9zhBwHH7pzeWxF3frCR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恆中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_erzmskM3xEPVqpBBqYVJmc
          claim_id: c_UiiSw6K95BhLexA5xQvHin
          source_id: s_C5uKZAyo6XgAk8ci88BXiN
          stance: supports
          locator: CBDB:304154
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vBQsfY0QduKWLXQuQ5Sk2f
        subject_person_id: p_EL1xAzh69eBckvCoFLRC2M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r6H9zhBwHH7pzeWxF3frCR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DuNyGQhr3En_RxtFr7WMoh
          claim_id: c_vBQsfY0QduKWLXQuQ5Sk2f
          source_id: s__W-eGFZ0N8GcXxYOxmVeCH
          stance: supports
          locator: CBDB：兄弟 王惟中（203400）之父／母 王紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王恆中 与 王惟中 为同胞（CBDB 记「弟」），王惟中 之父／母即 王恆中 之父／母。
          source:
            id: s__W-eGFZ0N8GcXxYOxmVeCH
            source_type: api_record
            title: 中国历代人物传记资料库：王恆中（CBDB 304154）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304154&o=json
            external_identifier: CBDB:304154
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EL1xAzh69eBckvCoFLRC2M
        status: active
        display_name: 王紀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_4sOh_dp9MlwrKrHFOwyEtg
        subject_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_r6H9zhBwHH7pzeWxF3frCR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FqfSboUIPuZHqVeAAbQMZ8
          claim_id: c_4sOh_dp9MlwrKrHFOwyEtg
          source_id: s__W-eGFZ0N8GcXxYOxmVeCH
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203400 王惟中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__W-eGFZ0N8GcXxYOxmVeCH
            source_type: api_record
            title: 中国历代人物传记资料库：王恆中（CBDB 304154）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304154&o=json
            external_identifier: CBDB:304154
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V5Z6bC9P1YiqepVeP78NQA
        status: active
        display_name: 王惟中
        merged_into_person_id: null
---

# 王恆中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王恆中，明人物。嘉靖二十年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 304154） | accepted |
| name.primary | 王恆中 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EL1xAzh69eBckvCoFLRC2M | 王紀 | accepted |
| other | p_V5Z6bC9P1YiqepVeP78NQA | 王惟中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恆中（CBDB 304154）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304154&o=json)
