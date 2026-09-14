---
schema: wang-person/v1
id: p_1VJSjVyXEnau58kJ2u5mhW
status: active
merged_into: null
display_name: 王炳輔
cbdb_id: 213346
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T76MQiizeE1Y2RhF95qrg3
        subject_person_id: p_1VJSjVyXEnau58kJ2u5mhW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳輔，明人物。萬曆二年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 213346）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_7TDBCHi8DT4IbTwqz7ONtZ
          claim_id: c_T76MQiizeE1Y2RhF95qrg3
          source_id: s_Ft6LRQnjDMUWHtEaBLESDJ
          stance: supports
          locator: CBDB:213346
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Ft6LRQnjDMUWHtEaBLESDJ
            source_type: api_record
            title: 中国历代人物传记资料库：王炳輔（CBDB 213346）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213346&o=json
            external_identifier: CBDB:213346
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HQVLmaKr6vQ73R6G8qwxMq
        subject_person_id: p_1VJSjVyXEnau58kJ2u5mhW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PVAdotdhxiviL2TqKBrmv5
          claim_id: c_HQVLmaKr6vQ73R6G8qwxMq
          source_id: s_Ft6LRQnjDMUWHtEaBLESDJ
          stance: supports
          locator: CBDB:213346
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bSIrdh7pC7ED8TdRcaDNIn
        subject_person_id: p_rn5bs45vsLNkK5gzRaTQ98
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1VJSjVyXEnau58kJ2u5mhW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Myh02zL0nLRSIbkbaRP8A5
          claim_id: c_bSIrdh7pC7ED8TdRcaDNIn
          source_id: s_QudfHlawyOoc2ViLq6ppn5
          stance: supports
          locator: CBDB：兄弟 王炳璿（126592）之父／母 王法
          quotation: null
          interpretation_note: 由兄弟关系推断：王炳輔 与 王炳璿 为同胞（CBDB 记「兄」），王炳璿 之父／母即 王炳輔 之父／母。
          source:
            id: s_QudfHlawyOoc2ViLq6ppn5
            source_type: api_record
            title: 中国历代人物传记资料库：王炳輔（CBDB 213346）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213346&o=json
            external_identifier: CBDB:213346
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rn5bs45vsLNkK5gzRaTQ98
        status: active
        display_name: 王法
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_wISFKAtJxXaZ1y0l0dCmuT
        subject_person_id: p_1VJSjVyXEnau58kJ2u5mhW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_BSK3JVZbYgKQNPmF9hrz5q
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RftmEOBBW-462J0EnKapT3
          claim_id: c_wISFKAtJxXaZ1y0l0dCmuT
          source_id: s_QudfHlawyOoc2ViLq6ppn5
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126592 王炳璿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QudfHlawyOoc2ViLq6ppn5
            source_type: api_record
            title: 中国历代人物传记资料库：王炳輔（CBDB 213346）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213346&o=json
            external_identifier: CBDB:213346
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BSK3JVZbYgKQNPmF9hrz5q
        status: active
        display_name: 王炳璿
        merged_into_person_id: null
---

# 王炳輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王炳輔，明人物。萬曆二年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 213346） | accepted |
| name.primary | 王炳輔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rn5bs45vsLNkK5gzRaTQ98 | 王法 | accepted |
| other | p_BSK3JVZbYgKQNPmF9hrz5q | 王炳璿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王炳輔（CBDB 213346）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213346&o=json)
