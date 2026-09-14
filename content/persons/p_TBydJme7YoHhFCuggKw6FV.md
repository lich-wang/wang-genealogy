---
schema: wang-person/v1
id: p_TBydJme7YoHhFCuggKw6FV
status: active
merged_into: null
display_name: 王一尹
cbdb_id: 308782
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f69qEmhfQ5RyS16Sp33i5F
        subject_person_id: p_TBydJme7YoHhFCuggKw6FV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一尹，明人物。嘉靖二十六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 308782）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_bQDyN69UltgtrqsDlV23Qv
          claim_id: c_f69qEmhfQ5RyS16Sp33i5F
          source_id: s_m4NJpcFsbQTNCyE28SH7J5
          stance: supports
          locator: CBDB:308782
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_m4NJpcFsbQTNCyE28SH7J5
            source_type: api_record
            title: 中国历代人物传记资料库：王一尹（CBDB 308782）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308782&o=json
            external_identifier: CBDB:308782
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qCW2EC6Cg7BUBGJayxZNuU
        subject_person_id: p_TBydJme7YoHhFCuggKw6FV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一尹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_SxHWtoe69qi1f5iSCPtZtp
          claim_id: c_qCW2EC6Cg7BUBGJayxZNuU
          source_id: s_m4NJpcFsbQTNCyE28SH7J5
          stance: supports
          locator: CBDB:308782
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yUxn_uqqB71R0UWJ1RSTUV
        subject_person_id: p_1iSvDHtRHkxhgvj9Gg5W8M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TBydJme7YoHhFCuggKw6FV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dl37dHotQvznT-K8a3K9Y9
          claim_id: c_yUxn_uqqB71R0UWJ1RSTUV
          source_id: s_pO0n08pfcVmCmnvKVUSZ-_
          stance: supports
          locator: CBDB：兄弟 王一夔（203700）之父／母 王仲貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王一尹 与 王一夔 为同胞（CBDB 记「兄」），王一夔 之父／母即 王一尹 之父／母。
          source:
            id: s_pO0n08pfcVmCmnvKVUSZ-_
            source_type: api_record
            title: 中国历代人物传记资料库：王一尹（CBDB 308782）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308782&o=json
            external_identifier: CBDB:308782
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1iSvDHtRHkxhgvj9Gg5W8M
        status: active
        display_name: 王仲貴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_8KdIh7f4ljzI3JqK5Qdh9C
        subject_person_id: p_FDfwTTY5mqzGJCTTHJFcH8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TBydJme7YoHhFCuggKw6FV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-BSNxz56p9oM3GKT7HUeqn
          claim_id: c_8KdIh7f4ljzI3JqK5Qdh9C
          source_id: s_pO0n08pfcVmCmnvKVUSZ-_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203700 王一夔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pO0n08pfcVmCmnvKVUSZ-_
            source_type: api_record
            title: 中国历代人物传记资料库：王一尹（CBDB 308782）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308782&o=json
            external_identifier: CBDB:308782
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FDfwTTY5mqzGJCTTHJFcH8
        status: active
        display_name: 王一夔
        merged_into_person_id: null
---

# 王一尹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王一尹，明人物。嘉靖二十六年進士，籍贯安福。（中国历代人物传记资料库 CBDB 308782） | accepted |
| name.primary | 王一尹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1iSvDHtRHkxhgvj9Gg5W8M | 王仲貴 | accepted |
| other | p_FDfwTTY5mqzGJCTTHJFcH8 | 王一夔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一尹（CBDB 308782）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308782&o=json)
