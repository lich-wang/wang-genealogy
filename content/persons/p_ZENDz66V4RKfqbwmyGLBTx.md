---
schema: wang-person/v1
id: p_ZENDz66V4RKfqbwmyGLBTx
status: active
merged_into: null
display_name: 王宗德
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aYneNh4GCRoJUzGywZLYRs
        subject_person_id: p_ZENDz66V4RKfqbwmyGLBTx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Sqvbmpd1EW9VGrxPsQZeUJ
          claim_id: c_aYneNh4GCRoJUzGywZLYRs
          source_id: s_hVDDaw6MckCtgPJDrthLWL
          stance: supports
          locator: CBDB:305543
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（305543）
          source: &a1
            id: s_hVDDaw6MckCtgPJDrthLWL
            source_type: api_record
            title: 中国历代人物传记资料库：王宗德（CBDB 305543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305543&o=json
            external_identifier: CBDB:305543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.743Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NLAPdR3PDPGFEmJVB1gB54
        subject_person_id: p_ZENDz66V4RKfqbwmyGLBTx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗德，明人物。嘉靖二十三年進士，籍贯富順。（中国历代人物传记资料库 CBDB 305543）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7gHsI1Y9HQvMwmX8G088ik
          claim_id: c_NLAPdR3PDPGFEmJVB1gB54
          source_id: s_hVDDaw6MckCtgPJDrthLWL
          stance: supports
          locator: CBDB:305543
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9TxFyTNLU2Uge44pjw6QlZ
        subject_person_id: p_3w9KiL5k9du8Z7UbUeRxEe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZENDz66V4RKfqbwmyGLBTx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WeZYcRV5rQZLNu2-7XqBy5
          claim_id: c_9TxFyTNLU2Uge44pjw6QlZ
          source_id: s_3hBvM21FgpHkC0lH5yNMUW
          stance: supports
          locator: CBDB：兄弟 王宗堯（203496）之父／母 王楚鳳
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗德 与 王宗堯 为同胞（CBDB 记「兄」），王宗堯 之父／母即 王宗德 之父／母。
          source:
            id: s_3hBvM21FgpHkC0lH5yNMUW
            source_type: api_record
            title: 中国历代人物传记资料库：王宗德（CBDB 305543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305543&o=json
            external_identifier: CBDB:305543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3w9KiL5k9du8Z7UbUeRxEe
        status: active
        display_name: 王楚鳳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_NXRCmh0hhTenorf-sbrQ4L
        subject_person_id: p_MM7KWyMsCLLasX9X9VAU7R
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZENDz66V4RKfqbwmyGLBTx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LqtAONCMks9J0W7sptnWqM
          claim_id: c_NXRCmh0hhTenorf-sbrQ4L
          source_id: s_3hBvM21FgpHkC0lH5yNMUW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203496 王宗堯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3hBvM21FgpHkC0lH5yNMUW
            source_type: api_record
            title: 中国历代人物传记资料库：王宗德（CBDB 305543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305543&o=json
            external_identifier: CBDB:305543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MM7KWyMsCLLasX9X9VAU7R
        status: active
        display_name: 王宗堯
        merged_into_person_id: null
---

# 王宗德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗德 | accepted |
| bio.summary | 王宗德，明人物。嘉靖二十三年進士，籍贯富順。（中国历代人物传记资料库 CBDB 305543） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3w9KiL5k9du8Z7UbUeRxEe | 王楚鳳 | accepted |
| other | p_MM7KWyMsCLLasX9X9VAU7R | 王宗堯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗德（CBDB 305543）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305543&o=json)
