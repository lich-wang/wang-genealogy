---
schema: wang-person/v1
id: p_sN3PcXnM88ou4acFpbnUWs
status: active
merged_into: null
display_name: 王一成
cbdb_id: 213991
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WqyJRQ5brssmsM8vwjX67N
        subject_person_id: p_sN3PcXnM88ou4acFpbnUWs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一成，明人物。萬曆二年進士，籍贯南城。（中国历代人物传记资料库 CBDB 213991）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_WgXtIXQrfJdFXHsoW6VdCF
          claim_id: c_WqyJRQ5brssmsM8vwjX67N
          source_id: s_NEoH3FLXCLuCcK3ALzAqKg
          stance: supports
          locator: CBDB:213991
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_NEoH3FLXCLuCcK3ALzAqKg
            source_type: api_record
            title: 中国历代人物传记资料库：王一成（CBDB 213991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213991&o=json
            external_identifier: CBDB:213991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FdxCogFfGz1cyncmC5kNCG
        subject_person_id: p_sN3PcXnM88ou4acFpbnUWs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_tghpaHaUPeFryhbfcrLLhP
          claim_id: c_FdxCogFfGz1cyncmC5kNCG
          source_id: s_NEoH3FLXCLuCcK3ALzAqKg
          stance: supports
          locator: CBDB:213991
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uJQmJsU45E3vSDTOBuYQAi
        subject_person_id: p_w5fXASs4g8AzDQ4NHHrEv7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sN3PcXnM88ou4acFpbnUWs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GZIiEpDCiz73_qwHPKX2me
          claim_id: c_uJQmJsU45E3vSDTOBuYQAi
          source_id: s_U3PU8sspWP2_97UTWKTBsk
          stance: supports
          locator: CBDB：兄弟 王一言（206148）之父／母 王湧
          quotation: null
          interpretation_note: 由兄弟关系推断：王一成 与 王一言 为同胞（CBDB 记「兄」），王一言 之父／母即 王一成 之父／母。
          source:
            id: s_U3PU8sspWP2_97UTWKTBsk
            source_type: api_record
            title: 中国历代人物传记资料库：王一成（CBDB 213991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213991&o=json
            external_identifier: CBDB:213991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_w5fXASs4g8AzDQ4NHHrEv7
        status: active
        display_name: 王湧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c__GEltaWnY7FM06TfkrPF-u
        subject_person_id: p_HfLk9ptSCZD1pXUYCky88S
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sN3PcXnM88ou4acFpbnUWs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CL1tsVxkVrqsevljb7RO23
          claim_id: c__GEltaWnY7FM06TfkrPF-u
          source_id: s_U3PU8sspWP2_97UTWKTBsk
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206148 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_U3PU8sspWP2_97UTWKTBsk
            source_type: api_record
            title: 中国历代人物传记资料库：王一成（CBDB 213991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213991&o=json
            external_identifier: CBDB:213991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HfLk9ptSCZD1pXUYCky88S
        status: active
        display_name: 王一言
        merged_into_person_id: null
---

# 王一成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王一成，明人物。萬曆二年進士，籍贯南城。（中国历代人物传记资料库 CBDB 213991） | accepted |
| name.primary | 王一成 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_w5fXASs4g8AzDQ4NHHrEv7 | 王湧 | accepted |
| other | p_HfLk9ptSCZD1pXUYCky88S | 王一言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一成（CBDB 213991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213991&o=json)
