---
schema: wang-person/v1
id: p_Ah3g4yrYYDCrzpBtMYJGQQ
status: active
merged_into: null
display_name: 王嗣宗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eXihdWV4zwNHpGfkwhku1k
        subject_person_id: p_Ah3g4yrYYDCrzpBtMYJGQQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pKpB1qKwX51SQxbdFP1Re3
          claim_id: c_eXihdWV4zwNHpGfkwhku1k
          source_id: s_x9sPPspfnjVpTK8kYG9EC4
          stance: supports
          locator: CBDB:274516
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（274516）
          source: &a1
            id: s_x9sPPspfnjVpTK8kYG9EC4
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣宗（CBDB 274516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274516&o=json
            external_identifier: CBDB:274516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.927Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uv8pUoiGbNCycPJoD4U9z1
        subject_person_id: p_Ah3g4yrYYDCrzpBtMYJGQQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗣宗，明人物。弘治十八年進士。（中国历代人物传记资料库 CBDB 274516）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qZFmRObyzs9Q0qFOWRq876
          claim_id: c_uv8pUoiGbNCycPJoD4U9z1
          source_id: s_x9sPPspfnjVpTK8kYG9EC4
          stance: supports
          locator: CBDB:274516
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_K9IqhLuw48GQh5fvtcLblV
        subject_person_id: p_Ah3g4yrYYDCrzpBtMYJGQQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xQC9jeba1Ur5RLxK29JG6g
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B0L_MQKejsDkZJDnx-dEVE
          claim_id: c_K9IqhLuw48GQh5fvtcLblV
          source_id: s_x9sPPspfnjVpTK8kYG9EC4
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第八十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xQC9jeba1Ur5RLxK29JG6g
        status: active
        display_name: 王韋
        merged_into_person_id: null
  other: []
---

# 王嗣宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嗣宗 | accepted |
| bio.summary | 王嗣宗，明人物。弘治十八年進士。（中国历代人物传记资料库 CBDB 274516） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_xQC9jeba1Ur5RLxK29JG6g | 王韋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嗣宗（CBDB 274516）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274516&o=json)
