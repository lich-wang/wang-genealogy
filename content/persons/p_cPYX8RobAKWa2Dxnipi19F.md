---
schema: wang-person/v1
id: p_cPYX8RobAKWa2Dxnipi19F
status: active
merged_into: null
display_name: 王浩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yTLQkCm76hvqujj5PThaqj
        subject_person_id: p_cPYX8RobAKWa2Dxnipi19F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FzT4K9Ln5MS6a5hJgfP3Te
          claim_id: c_yTLQkCm76hvqujj5PThaqj
          source_id: s_8eSavieiyWFQaVwwsaqK2J
          stance: supports
          locator: CBDB:261013
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261013）
          source: &a1
            id: s_8eSavieiyWFQaVwwsaqK2J
            source_type: api_record
            title: 中国历代人物传记资料库：王浩（CBDB 261013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261013&o=json
            external_identifier: CBDB:261013
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.534Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XW7Kk7K3HPeoXjxkbZZXCX
        subject_person_id: p_cPYX8RobAKWa2Dxnipi19F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浩，明人物。弘治三年進士，曾任知縣。（中国历代人物传记资料库 CBDB 261013）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HI1qC8ezJFUTdyH9NytbRS
          claim_id: c_XW7Kk7K3HPeoXjxkbZZXCX
          source_id: s_8eSavieiyWFQaVwwsaqK2J
          stance: supports
          locator: CBDB:261013
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
        id: c_M8hf5x2AYUWg_XLAs6i9UY
        subject_person_id: p_cPYX8RobAKWa2Dxnipi19F
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WfV9B4ZNGa1u8RHNsdFJs6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0tBbg4lemD69bbIIIHb4Vf
          claim_id: c_M8hf5x2AYUWg_XLAs6i9UY
          source_id: s_8eSavieiyWFQaVwwsaqK2J
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第二甲第十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WfV9B4ZNGa1u8RHNsdFJs6
        status: active
        display_name: 王瑩
        merged_into_person_id: null
  other: []
---

# 王浩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浩 | accepted |
| bio.summary | 王浩，明人物。弘治三年進士，曾任知縣。（中国历代人物传记资料库 CBDB 261013） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_WfV9B4ZNGa1u8RHNsdFJs6 | 王瑩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王浩（CBDB 261013）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261013&o=json)
