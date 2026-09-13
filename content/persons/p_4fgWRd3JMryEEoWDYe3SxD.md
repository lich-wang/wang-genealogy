---
schema: wang-person/v1
id: p_4fgWRd3JMryEEoWDYe3SxD
status: active
merged_into: null
display_name: 王世達
cbdb_id: 317030
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DEEiWjenn9uH6Ny4gD9Ahu
        subject_person_id: p_4fgWRd3JMryEEoWDYe3SxD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世達，史料所见人物。本项目依据《中国历代人物传记资料库：王世達（CBDB 317030）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_Ok7C0dGo6IaEThTlpg6nmN
          claim_id: c_DEEiWjenn9uH6Ny4gD9Ahu
          source_id: s_9KB5sZ14UAFW49yJmDtzY1
          stance: supports
          locator: CBDB:317030
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_9KB5sZ14UAFW49yJmDtzY1
            source_type: api_record
            title: 中国历代人物传记资料库：王世達（CBDB 317030）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317030&o=json
            external_identifier: CBDB:317030
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mv53EoLzFKgFPBQKaaEJhG
        subject_person_id: p_4fgWRd3JMryEEoWDYe3SxD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世達
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JAiSdkmhbv1PfK287bLEMe
          claim_id: c_mv53EoLzFKgFPBQKaaEJhG
          source_id: s_9KB5sZ14UAFW49yJmDtzY1
          stance: supports
          locator: CBDB:317030
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
        id: c_298_gun6D2m3X_Y0-V1rbN
        subject_person_id: p_4fgWRd3JMryEEoWDYe3SxD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_F4TvNBX2MG96q5zMnLQmVQ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s0CY11ooDL-YQC20uFKJZG
          claim_id: c_298_gun6D2m3X_Y0-V1rbN
          source_id: s_rpD9Xzyu7fDvD4yopAp4vQ
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第二十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rpD9Xzyu7fDvD4yopAp4vQ
            source_type: api_record
            title: 中国历代人物传记资料库：王應奎（CBDB 198790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198790&o=json
            external_identifier: CBDB:198790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.509Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_F4TvNBX2MG96q5zMnLQmVQ
        status: active
        display_name: 王應奎
        merged_into_person_id: null
  other: []
---

# 王世達

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世達，史料所见人物。本项目依据《中国历代人物传记资料库：王世達（CBDB 317030）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王世達 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_F4TvNBX2MG96q5zMnLQmVQ | 王應奎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世達（CBDB 317030）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317030&o=json)
- [中国历代人物传记资料库：王應奎（CBDB 198790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198790&o=json)
