---
schema: wang-person/v1
id: p_CjPAUgQ79UCV7hnFx1eT69
status: active
merged_into: null
display_name: 王子明
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZRhm9afXgoqLxqaFSD1PVx
        subject_person_id: p_CjPAUgQ79UCV7hnFx1eT69
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LBq2c5Ki3bFuM5nD1z5fEU
          claim_id: c_ZRhm9afXgoqLxqaFSD1PVx
          source_id: s_Wh8xeRB4urrFxNMHJT5TR9
          stance: supports
          locator: CBDB:282039
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282039）
          source: &a1
            id: s_Wh8xeRB4urrFxNMHJT5TR9
            source_type: api_record
            title: 中国历代人物传记资料库：王子明（CBDB 282039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282039&o=json
            external_identifier: CBDB:282039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.076Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ox8zQXM6bD8jT7pQJvcFA3
        subject_person_id: p_CjPAUgQ79UCV7hnFx1eT69
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iJAdg4npxzpzJXd6k8tq5v
          claim_id: c_ox8zQXM6bD8jT7pQJvcFA3
          source_id: s_Wh8xeRB4urrFxNMHJT5TR9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_T10DmJOwEpQLIO7nmRPZ7v
        subject_person_id: p_CjPAUgQ79UCV7hnFx1eT69
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Mm4Feno3TMRLDtespKCU2Q
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2UaeV0Vbs7hUzkf4Nw8V3_
          claim_id: c_T10DmJOwEpQLIO7nmRPZ7v
          source_id: s_Wh8xeRB4urrFxNMHJT5TR9
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百三十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Mm4Feno3TMRLDtespKCU2Q
        status: active
        display_name: 王翰臣
        merged_into_person_id: null
  other: []
---

# 王子明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子明 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Mm4Feno3TMRLDtespKCU2Q | 王翰臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王子明（CBDB 282039）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282039&o=json)
