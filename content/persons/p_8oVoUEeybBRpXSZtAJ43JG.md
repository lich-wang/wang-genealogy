---
schema: wang-person/v1
id: p_8oVoUEeybBRpXSZtAJ43JG
status: active
merged_into: null
display_name: 王綗
cbdb_id: 216220
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1mgQxWE9afV63fDW6ne6K1
        subject_person_id: p_8oVoUEeybBRpXSZtAJ43JG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綗，明人物。萬曆五年進士，籍贯惠安。（中国历代人物传记资料库 CBDB 216220）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_HqhugNqv9mvuQnoHl3ARuZ
          claim_id: c_1mgQxWE9afV63fDW6ne6K1
          source_id: s_XUjHuxk28BPD5YK134YyTn
          stance: supports
          locator: CBDB:216220
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_XUjHuxk28BPD5YK134YyTn
            source_type: api_record
            title: 中国历代人物传记资料库：王綗（CBDB 216220）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216220&o=json
            external_identifier: CBDB:216220
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_WA2csocaG2kWE85nCwuQnJ
        subject_person_id: p_8oVoUEeybBRpXSZtAJ43JG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1Vqsy5DNZjc3pkZKCELm7C
          claim_id: c_WA2csocaG2kWE85nCwuQnJ
          source_id: s_XUjHuxk28BPD5YK134YyTn
          stance: supports
          locator: CBDB:216220
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Ue7MXfEO2xN_IK9uv_m5vT
        subject_person_id: p_oJyHrTtA8vuQzWweqp45TE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8oVoUEeybBRpXSZtAJ43JG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2FD1rF48Cv0FS8OyIf45xu
          claim_id: c_Ue7MXfEO2xN_IK9uv_m5vT
          source_id: s_vW4x9VgHconTAOGTW_fYA9
          stance: supports
          locator: CBDB：兄弟 王約（206312）之父／母 王以佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王綗 与 王約 为同胞（CBDB 记「兄」），王約 之父／母即 王綗 之父／母。
          source:
            id: s_vW4x9VgHconTAOGTW_fYA9
            source_type: api_record
            title: 中国历代人物传记资料库：王綗（CBDB 216220）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216220&o=json
            external_identifier: CBDB:216220
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oJyHrTtA8vuQzWweqp45TE
        status: active
        display_name: 王以佐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_VYDbVlu5rfo5ZBVvRwG8Wd
        subject_person_id: p_8oVoUEeybBRpXSZtAJ43JG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_J55afBgCkqtPSYRig4M9VL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iriJC64yGaAFfzfwHapMjI
          claim_id: c_VYDbVlu5rfo5ZBVvRwG8Wd
          source_id: s_vW4x9VgHconTAOGTW_fYA9
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206312 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vW4x9VgHconTAOGTW_fYA9
            source_type: api_record
            title: 中国历代人物传记资料库：王綗（CBDB 216220）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216220&o=json
            external_identifier: CBDB:216220
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_J55afBgCkqtPSYRig4M9VL
        status: active
        display_name: 王約
        merged_into_person_id: null
---

# 王綗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王綗，明人物。萬曆五年進士，籍贯惠安。（中国历代人物传记资料库 CBDB 216220） | accepted |
| name.primary | 王綗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oJyHrTtA8vuQzWweqp45TE | 王以佐 | accepted |
| other | p_J55afBgCkqtPSYRig4M9VL | 王約 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綗（CBDB 216220）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216220&o=json)
