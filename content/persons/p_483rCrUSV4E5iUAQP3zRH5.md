---
schema: wang-person/v1
id: p_483rCrUSV4E5iUAQP3zRH5
status: active
merged_into: null
display_name: 王我繼
cbdb_id: 294347
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UqHjGYxkgraD7ACCtZGGYz
        subject_person_id: p_483rCrUSV4E5iUAQP3zRH5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王我繼，史料所见人物。本项目依据《中国历代人物传记资料库：王我繼（CBDB 294347）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_0U4epmuS5kFNLkbWTuxK4f
          claim_id: c_UqHjGYxkgraD7ACCtZGGYz
          source_id: s_NPCDEyEfZ7G2P6NJMeWQLB
          stance: supports
          locator: CBDB:294347
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_NPCDEyEfZ7G2P6NJMeWQLB
            source_type: api_record
            title: 中国历代人物传记资料库：王我繼（CBDB 294347）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294347&o=json
            external_identifier: CBDB:294347
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kxN3DEV3KkUDvo3jqmY3ah
        subject_person_id: p_483rCrUSV4E5iUAQP3zRH5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王我繼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Zwz5fyqEHJaWQ59prZKTYi
          claim_id: c_kxN3DEV3KkUDvo3jqmY3ah
          source_id: s_NPCDEyEfZ7G2P6NJMeWQLB
          stance: supports
          locator: CBDB:294347
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_8DVogOM0lzIwZUHIpXPNiV
        subject_person_id: p_AKiZ73AHqEtzATAkDq6m9S
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_483rCrUSV4E5iUAQP3zRH5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PL0EOG6R1Lu4KgmZs5BxHC
          claim_id: c_8DVogOM0lzIwZUHIpXPNiV
          source_id: s_GWdGKWBoQ5Yau2CR5qC4YT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百九十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GWdGKWBoQ5Yau2CR5qC4YT
            source_type: api_record
            title: 中国历代人物传记资料库：王瑛（CBDB 126750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126750&o=json
            external_identifier: CBDB:126750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.175Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AKiZ73AHqEtzATAkDq6m9S
        status: active
        display_name: 王瑛
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王我繼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王我繼，史料所见人物。本项目依据《中国历代人物传记资料库：王我繼（CBDB 294347）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王我繼 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_AKiZ73AHqEtzATAkDq6m9S | 王瑛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王我繼（CBDB 294347）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294347&o=json)
- [中国历代人物传记资料库：王瑛（CBDB 126750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126750&o=json)
