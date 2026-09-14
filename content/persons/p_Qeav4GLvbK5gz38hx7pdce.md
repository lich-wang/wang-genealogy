---
schema: wang-person/v1
id: p_Qeav4GLvbK5gz38hx7pdce
status: active
merged_into: null
display_name: 王好學
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UnWFTRNBZHPS3Cvohk7Wgm
        subject_person_id: p_Qeav4GLvbK5gz38hx7pdce
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王好學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oJxBcWH3Y1uMdwVo6sCaoL
          claim_id: c_UnWFTRNBZHPS3Cvohk7Wgm
          source_id: s_6quqGFuEuCgXPsgq288xvn
          stance: supports
          locator: CBDB:306924
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（306924）
          source: &a1
            id: s_6quqGFuEuCgXPsgq288xvn
            source_type: api_record
            title: 中国历代人物传记资料库：王好學（CBDB 306924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306924&o=json
            external_identifier: CBDB:306924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.779Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RhwS6fxK329UPEWqWcgUv9
        subject_person_id: p_Qeav4GLvbK5gz38hx7pdce
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王好學，明人物。嘉靖二十三年進士，籍贯陽朔。（中国历代人物传记资料库 CBDB 306924）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PmDhfOiFU9JSpd6Y6nCYyG
          claim_id: c_RhwS6fxK329UPEWqWcgUv9
          source_id: s_6quqGFuEuCgXPsgq288xvn
          stance: supports
          locator: CBDB:306924
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_43FuC0JAQrQ9ywEFhqrGHw
        subject_person_id: p_XWoQFU6m26umasN1nUqzCk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Qeav4GLvbK5gz38hx7pdce
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L0S4Hxeyg6n5P_dfQUDUNr
          claim_id: c_43FuC0JAQrQ9ywEFhqrGHw
          source_id: s_OjOYAPzRa9VVfe_3RyNPFb
          stance: supports
          locator: CBDB：兄弟 王學（203587）之父／母 王珵
          quotation: null
          interpretation_note: 由兄弟关系推断：王好學 与 王學 为同胞（CBDB 记「弟」），王學 之父／母即 王好學 之父／母。
          source:
            id: s_OjOYAPzRa9VVfe_3RyNPFb
            source_type: api_record
            title: 中国历代人物传记资料库：王好學（CBDB 306924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306924&o=json
            external_identifier: CBDB:306924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XWoQFU6m26umasN1nUqzCk
        status: active
        display_name: 王珵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_TFWfLc_tJ2WftPuPVUzKgo
        subject_person_id: p_Qeav4GLvbK5gz38hx7pdce
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mj43p62dQVDfJdFrwRMJq5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mx5em21YxmOnatKsYCnRsO
          claim_id: c_TFWfLc_tJ2WftPuPVUzKgo
          source_id: s_OjOYAPzRa9VVfe_3RyNPFb
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203587 王學）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OjOYAPzRa9VVfe_3RyNPFb
            source_type: api_record
            title: 中国历代人物传记资料库：王好學（CBDB 306924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306924&o=json
            external_identifier: CBDB:306924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mj43p62dQVDfJdFrwRMJq5
        status: active
        display_name: 王學
        merged_into_person_id: null
---

# 王好學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王好學 | accepted |
| bio.summary | 王好學，明人物。嘉靖二十三年進士，籍贯陽朔。（中国历代人物传记资料库 CBDB 306924） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XWoQFU6m26umasN1nUqzCk | 王珵 | accepted |
| other | p_mj43p62dQVDfJdFrwRMJq5 | 王學 | accepted |

## 外部来源

- [中国历代人物传记资料库：王好學（CBDB 306924）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306924&o=json)
