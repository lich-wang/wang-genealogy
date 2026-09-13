---
schema: wang-person/v1
id: p_JMsBmZTJdbYG4P477H3fmS
status: active
merged_into: null
display_name: 王子魯
cbdb_id: 313194
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_13m4nSJSbqB2aZLmKmxFbV
        subject_person_id: p_JMsBmZTJdbYG4P477H3fmS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子魯，明人物。嘉靖二十九年進士。（中国历代人物传记资料库 CBDB 313194）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_gyOH8PMqi9Qyljvnl4hvkS
          claim_id: c_13m4nSJSbqB2aZLmKmxFbV
          source_id: s_JU8zbD2CR5zjTK8rkxHaXQ
          stance: supports
          locator: CBDB:313194
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JU8zbD2CR5zjTK8rkxHaXQ
            source_type: api_record
            title: 中国历代人物传记资料库：王子魯（CBDB 313194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313194&o=json
            external_identifier: CBDB:313194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_N6ti4cw3hNEAVwAMVSvosz
        subject_person_id: p_JMsBmZTJdbYG4P477H3fmS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子魯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hM4Ftknjp3oBpCA855z2G9
          claim_id: c_N6ti4cw3hNEAVwAMVSvosz
          source_id: s_JU8zbD2CR5zjTK8rkxHaXQ
          stance: supports
          locator: CBDB:313194
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_D165zUClYAZoA77Xv3dU6K
        subject_person_id: p_JMsBmZTJdbYG4P477H3fmS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rkwUCxJkarsqGGHssHtTdk
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lFQ8IOo4_FoK2Anr81Gk_u
          claim_id: c_D165zUClYAZoA77Xv3dU6K
          source_id: s_JU8zbD2CR5zjTK8rkxHaXQ
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第五十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JU8zbD2CR5zjTK8rkxHaXQ
            source_type: api_record
            title: 中国历代人物传记资料库：王子魯（CBDB 313194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313194&o=json
            external_identifier: CBDB:313194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_rkwUCxJkarsqGGHssHtTdk
        status: active
        display_name: 王用賢
        merged_into_person_id: null
  other: []
---

# 王子魯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子魯，明人物。嘉靖二十九年進士。（中国历代人物传记资料库 CBDB 313194） | accepted |
| name.primary | 王子魯 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_rkwUCxJkarsqGGHssHtTdk | 王用賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王子魯（CBDB 313194）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313194&o=json)
