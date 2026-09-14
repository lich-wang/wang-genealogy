---
schema: wang-person/v1
id: p_z6jKD949RdAtZDLSM1cjFB
status: active
merged_into: null
display_name: 王家瑄
cbdb_id: 333600
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M8ndr4yBjpQL5X8fXBWww8
        subject_person_id: p_z6jKD949RdAtZDLSM1cjFB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家瑄，明人物。隆慶二年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 333600）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_JaoIeaRSAZgSGcNhDiAOZ_
          claim_id: c_M8ndr4yBjpQL5X8fXBWww8
          source_id: s_aKsXXJ9rCSTZ7Ku6Rdy642
          stance: supports
          locator: CBDB:333600
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_aKsXXJ9rCSTZ7Ku6Rdy642
            source_type: api_record
            title: 中国历代人物传记资料库：王家瑄（CBDB 333600）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333600&o=json
            external_identifier: CBDB:333600
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_WLyXAm9JoLC6sxDQsAW3jQ
        subject_person_id: p_z6jKD949RdAtZDLSM1cjFB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家瑄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cjrkEtdUwcYT23B3bCqJqZ
          claim_id: c_WLyXAm9JoLC6sxDQsAW3jQ
          source_id: s_aKsXXJ9rCSTZ7Ku6Rdy642
          stance: supports
          locator: CBDB:333600
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bmxKkwZub4yx5sw6q5nwc0
        subject_person_id: p_wJnAf1dPfK6NuX3j1aUKFG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_z6jKD949RdAtZDLSM1cjFB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g_Zuh_IBZBZzu5PDdRfI69
          claim_id: c_bmxKkwZub4yx5sw6q5nwc0
          source_id: s_FxLwRwQ9xJykZ4cagsBsLf
          stance: supports
          locator: CBDB：兄弟 王家屛（126627）之父／母 王宪武
          quotation: null
          interpretation_note: 由兄弟关系推断：王家瑄 与 王家屛 为同胞（CBDB 记「弟」），王家屛 之父／母即 王家瑄 之父／母。
          source:
            id: s_FxLwRwQ9xJykZ4cagsBsLf
            source_type: api_record
            title: 中国历代人物传记资料库：王家瑄（CBDB 333600）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333600&o=json
            external_identifier: CBDB:333600
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wJnAf1dPfK6NuX3j1aUKFG
        status: active
        display_name: 王宪武
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_2F7k23PjW7W6KVzF8uTM2-
        subject_person_id: p_92Q8Er9mM6EGgtSMmLeCqJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_z6jKD949RdAtZDLSM1cjFB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E2Qc9tpDcpAMMvJ-GP6VJz
          claim_id: c_2F7k23PjW7W6KVzF8uTM2-
          source_id: s_FxLwRwQ9xJykZ4cagsBsLf
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126627 王家屛）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_FxLwRwQ9xJykZ4cagsBsLf
            source_type: api_record
            title: 中国历代人物传记资料库：王家瑄（CBDB 333600）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333600&o=json
            external_identifier: CBDB:333600
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_92Q8Er9mM6EGgtSMmLeCqJ
        status: active
        display_name: 王家屛
        merged_into_person_id: null
---

# 王家瑄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王家瑄，明人物。隆慶二年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 333600） | accepted |
| name.primary | 王家瑄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wJnAf1dPfK6NuX3j1aUKFG | 王宪武 | accepted |
| other | p_92Q8Er9mM6EGgtSMmLeCqJ | 王家屛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王家瑄（CBDB 333600）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333600&o=json)
