---
schema: wang-person/v1
id: p_w1Ax2kLtBNNNB5KyydQwH9
status: active
merged_into: null
display_name: 王懋誠
cbdb_id: 337972
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NZDRaKxhb9a3sZDN6eb7iy
        subject_person_id: p_w1Ax2kLtBNNNB5KyydQwH9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋誠，明人物。隆慶五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 337972）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_tUp_-9dySYky0FvH1yYA0c
          claim_id: c_NZDRaKxhb9a3sZDN6eb7iy
          source_id: s_PAWYR3AtB3BZKV189ApEB4
          stance: supports
          locator: CBDB:337972
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_PAWYR3AtB3BZKV189ApEB4
            source_type: api_record
            title: 中国历代人物传记资料库：王懋誠（CBDB 337972）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337972&o=json
            external_identifier: CBDB:337972
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZDatLbD3AD34bQMnSvCEoy
        subject_person_id: p_w1Ax2kLtBNNNB5KyydQwH9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yjG8Z2H9XEzMYJM4QCNwW6
          claim_id: c_ZDatLbD3AD34bQMnSvCEoy
          source_id: s_PAWYR3AtB3BZKV189ApEB4
          stance: supports
          locator: CBDB:337972
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mwb5SLLbZZ2DfPm9G26ABH
        subject_person_id: p_kGHRzXtUaYBnJ8wGBJV9RP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_w1Ax2kLtBNNNB5KyydQwH9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ejuNKg_sujaw3VYL2A71XR
          claim_id: c_mwb5SLLbZZ2DfPm9G26ABH
          source_id: s_MJd9tuxurWrD5gK-EOmKwy
          stance: supports
          locator: CBDB：兄弟 王懋德（205756）之父／母 王化
          quotation: null
          interpretation_note: 由兄弟关系推断：王懋誠 与 王懋德 为同胞（CBDB 记「兄」），王懋德 之父／母即 王懋誠 之父／母。
          source:
            id: s_MJd9tuxurWrD5gK-EOmKwy
            source_type: api_record
            title: 中国历代人物传记资料库：王懋誠（CBDB 337972）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337972&o=json
            external_identifier: CBDB:337972
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kGHRzXtUaYBnJ8wGBJV9RP
        status: active
        display_name: 王化
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_T3Skf4nc1ZFv0utaqtNsX-
        subject_person_id: p_aYr3EPQVvfC6NBKDGNLUTL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_w1Ax2kLtBNNNB5KyydQwH9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ycc5iNmrpJbWDJkUPJeFC-
          claim_id: c_T3Skf4nc1ZFv0utaqtNsX-
          source_id: s_MJd9tuxurWrD5gK-EOmKwy
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205756 王懋德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_MJd9tuxurWrD5gK-EOmKwy
            source_type: api_record
            title: 中国历代人物传记资料库：王懋誠（CBDB 337972）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337972&o=json
            external_identifier: CBDB:337972
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aYr3EPQVvfC6NBKDGNLUTL
        status: active
        display_name: 王懋德
        merged_into_person_id: null
---

# 王懋誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王懋誠，明人物。隆慶五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 337972） | accepted |
| name.primary | 王懋誠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kGHRzXtUaYBnJ8wGBJV9RP | 王化 | accepted |
| other | p_aYr3EPQVvfC6NBKDGNLUTL | 王懋德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懋誠（CBDB 337972）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337972&o=json)
