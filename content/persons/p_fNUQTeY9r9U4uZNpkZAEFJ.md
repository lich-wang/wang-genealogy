---
schema: wang-person/v1
id: p_fNUQTeY9r9U4uZNpkZAEFJ
status: active
merged_into: null
display_name: 王對揚
cbdb_id: 216912
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5wXed9g45Ci5CVwqRmMaAh
        subject_person_id: p_fNUQTeY9r9U4uZNpkZAEFJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王對揚，明人物。萬曆五年進士，籍贯廣平。（中国历代人物传记资料库 CBDB 216912）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_PZ4Myy2CdWm9fM4zN5Djha
          claim_id: c_5wXed9g45Ci5CVwqRmMaAh
          source_id: s_26jE2Au3FZGSmfESMLBBKy
          stance: supports
          locator: CBDB:216912
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_26jE2Au3FZGSmfESMLBBKy
            source_type: api_record
            title: 中国历代人物传记资料库：王對揚（CBDB 216912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216912&o=json
            external_identifier: CBDB:216912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_H4omSpydZbB9Xgd4dh4wbT
        subject_person_id: p_fNUQTeY9r9U4uZNpkZAEFJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王對揚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kAzzzbGLBTts4SKqyWNamx
          claim_id: c_H4omSpydZbB9Xgd4dh4wbT
          source_id: s_26jE2Au3FZGSmfESMLBBKy
          stance: supports
          locator: CBDB:216912
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KVClixQP_gau1muHK_8RJJ
        subject_person_id: p_xpiQNZoQgcWtNfoW2kc14W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fNUQTeY9r9U4uZNpkZAEFJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mm3JkVCCAOUuskGSw60dtS
          claim_id: c_KVClixQP_gau1muHK_8RJJ
          source_id: s_uBI38ltTyIsqHEx4Lf4e1t
          stance: supports
          locator: CBDB：兄弟 王世揚（126490）之父／母 王允武
          quotation: null
          interpretation_note: 由兄弟关系推断：王對揚 与 王世揚 为同胞（CBDB 记「弟」），王世揚 之父／母即 王對揚 之父／母。
          source:
            id: s_uBI38ltTyIsqHEx4Lf4e1t
            source_type: api_record
            title: 中国历代人物传记资料库：王對揚（CBDB 216912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216912&o=json
            external_identifier: CBDB:216912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xpiQNZoQgcWtNfoW2kc14W
        status: active
        display_name: 王允武
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_VY2bCJe4SF-AhXmrQRcf-y
        subject_person_id: p_9yrh3LG22eDzqwJQoBMgVx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fNUQTeY9r9U4uZNpkZAEFJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MhM_liZMY8XmqPUEBbL-ia
          claim_id: c_VY2bCJe4SF-AhXmrQRcf-y
          source_id: s_uBI38ltTyIsqHEx4Lf4e1t
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126490 王世揚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uBI38ltTyIsqHEx4Lf4e1t
            source_type: api_record
            title: 中国历代人物传记资料库：王對揚（CBDB 216912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216912&o=json
            external_identifier: CBDB:216912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9yrh3LG22eDzqwJQoBMgVx
        status: active
        display_name: 王世揚
        merged_into_person_id: null
---

# 王對揚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王對揚，明人物。萬曆五年進士，籍贯廣平。（中国历代人物传记资料库 CBDB 216912） | accepted |
| name.primary | 王對揚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xpiQNZoQgcWtNfoW2kc14W | 王允武 | accepted |
| other | p_9yrh3LG22eDzqwJQoBMgVx | 王世揚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王對揚（CBDB 216912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216912&o=json)
