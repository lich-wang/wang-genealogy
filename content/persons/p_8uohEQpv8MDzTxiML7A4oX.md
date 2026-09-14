---
schema: wang-person/v1
id: p_8uohEQpv8MDzTxiML7A4oX
status: active
merged_into: null
display_name: 王賓清
cbdb_id: 278550
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9n2FKLSjA7GMdRgUaPXHP1
        subject_person_id: p_8uohEQpv8MDzTxiML7A4oX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓清，明人物。正德六年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 278550）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_TYdhx-479OZgIpL5uEYsy4
          claim_id: c_9n2FKLSjA7GMdRgUaPXHP1
          source_id: s_jFy2V9T6Zwdv66fZ5gkXZJ
          stance: supports
          locator: CBDB:278550
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_jFy2V9T6Zwdv66fZ5gkXZJ
            source_type: api_record
            title: 中国历代人物传记资料库：王賓清（CBDB 278550）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278550&o=json
            external_identifier: CBDB:278550
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AegTCc6eP3ctBjktQkm3EZ
        subject_person_id: p_8uohEQpv8MDzTxiML7A4oX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_tiwE5RJDDCSdrzRGyAZwXK
          claim_id: c_AegTCc6eP3ctBjktQkm3EZ
          source_id: s_jFy2V9T6Zwdv66fZ5gkXZJ
          stance: supports
          locator: CBDB:278550
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3JOV4vo1RJEOzTLbU2LKxn
        subject_person_id: p_NfVYYG7aC993nZohPs46Tb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8uohEQpv8MDzTxiML7A4oX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lzZ6uoEbyqHf3srXXdyBy4
          claim_id: c_3JOV4vo1RJEOzTLbU2LKxn
          source_id: s_Gznr6nm8ZXLIPQ0pP8TqIF
          stance: supports
          locator: CBDB：兄弟 王宗源（126561）之父／母 王綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王賓清 与 王宗源 为同胞（CBDB 记「兄」），王宗源 之父／母即 王賓清 之父／母。
          source:
            id: s_Gznr6nm8ZXLIPQ0pP8TqIF
            source_type: api_record
            title: 中国历代人物传记资料库：王賓清（CBDB 278550）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278550&o=json
            external_identifier: CBDB:278550
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NfVYYG7aC993nZohPs46Tb
        status: active
        display_name: 王綱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_06ZcDxPIy6wK6rBuK7F2s2
        subject_person_id: p_8uohEQpv8MDzTxiML7A4oX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tshCVJf6Qj8yS4xtgdzQp5
          claim_id: c_06ZcDxPIy6wK6rBuK7F2s2
          source_id: s_Gznr6nm8ZXLIPQ0pP8TqIF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126561 王宗源）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Gznr6nm8ZXLIPQ0pP8TqIF
            source_type: api_record
            title: 中国历代人物传记资料库：王賓清（CBDB 278550）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278550&o=json
            external_identifier: CBDB:278550
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tuf6Y9AXWQN6kvcQsy6Eb8
        status: active
        display_name: 王宗源
        merged_into_person_id: null
---

# 王賓清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王賓清，明人物。正德六年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 278550） | accepted |
| name.primary | 王賓清 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NfVYYG7aC993nZohPs46Tb | 王綱 | accepted |
| other | p_tuf6Y9AXWQN6kvcQsy6Eb8 | 王宗源 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓清（CBDB 278550）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278550&o=json)
