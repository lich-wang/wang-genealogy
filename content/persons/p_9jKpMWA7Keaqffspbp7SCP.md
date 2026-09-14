---
schema: wang-person/v1
id: p_9jKpMWA7Keaqffspbp7SCP
status: active
merged_into: null
display_name: 王應民
cbdb_id: 312624
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VoAjiM4L3NPdNu3n9D25iL
        subject_person_id: p_9jKpMWA7Keaqffspbp7SCP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應民，明人物。嘉靖二十九年進士，籍贯侯官。（中国历代人物传记资料库 CBDB 312624）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_y4C4g41g3v2LnQTzHGpK4u
          claim_id: c_VoAjiM4L3NPdNu3n9D25iL
          source_id: s_8fFHe8fCKF2cM3JNbR7rfm
          stance: supports
          locator: CBDB:312624
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8fFHe8fCKF2cM3JNbR7rfm
            source_type: api_record
            title: 中国历代人物传记资料库：王應民（CBDB 312624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312624&o=json
            external_identifier: CBDB:312624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Efb28mDwmRoiHGiuomRFtN
        subject_person_id: p_9jKpMWA7Keaqffspbp7SCP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_X35oCNTZDUTXHnGGPrGHrD
          claim_id: c_Efb28mDwmRoiHGiuomRFtN
          source_id: s_8fFHe8fCKF2cM3JNbR7rfm
          stance: supports
          locator: CBDB:312624
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ux14RETojtr8SdPHloET4D
        subject_person_id: p_sMKHNsqNCt9mBLSW4zbVG6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9jKpMWA7Keaqffspbp7SCP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TMlvQBw9AQ6qD9QCSHqUQQ
          claim_id: c_ux14RETojtr8SdPHloET4D
          source_id: s_STpiXg29vUTf0TA4k3u0Tj
          stance: supports
          locator: CBDB：兄弟 王應時（203967）之父／母 王容
          quotation: null
          interpretation_note: 由兄弟关系推断：王應民 与 王應時 为同胞（CBDB 记「兄」），王應時 之父／母即 王應民 之父／母。
          source:
            id: s_STpiXg29vUTf0TA4k3u0Tj
            source_type: api_record
            title: 中国历代人物传记资料库：王應民（CBDB 312624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312624&o=json
            external_identifier: CBDB:312624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sMKHNsqNCt9mBLSW4zbVG6
        status: active
        display_name: 王容
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_vKvB25xatHEVc82-pljond
        subject_person_id: p_9jKpMWA7Keaqffspbp7SCP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rJtRxxSC69LmdREGcBhbeB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wH0yDrDH5hz7UhnrieOVf3
          claim_id: c_vKvB25xatHEVc82-pljond
          source_id: s_STpiXg29vUTf0TA4k3u0Tj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203967 王應時）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_STpiXg29vUTf0TA4k3u0Tj
            source_type: api_record
            title: 中国历代人物传记资料库：王應民（CBDB 312624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312624&o=json
            external_identifier: CBDB:312624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rJtRxxSC69LmdREGcBhbeB
        status: active
        display_name: 王應時
        merged_into_person_id: null
---

# 王應民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王應民，明人物。嘉靖二十九年進士，籍贯侯官。（中国历代人物传记资料库 CBDB 312624） | accepted |
| name.primary | 王應民 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sMKHNsqNCt9mBLSW4zbVG6 | 王容 | accepted |
| other | p_rJtRxxSC69LmdREGcBhbeB | 王應時 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應民（CBDB 312624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312624&o=json)
