---
schema: wang-person/v1
id: p_hLC7KGkfmVQ6FH9R6Ly45j
status: active
merged_into: null
display_name: 王勝宗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YhmkGXR25GA8VqSgwzBtFx
        subject_person_id: p_hLC7KGkfmVQ6FH9R6Ly45j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勝宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_79d49NimySynT9A1sgwJ9k
          claim_id: c_YhmkGXR25GA8VqSgwzBtFx
          source_id: s_WVaT3PGcf433PQDR58B4hW
          stance: supports
          locator: CBDB:253488
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253488）
          source: &a1
            id: s_WVaT3PGcf433PQDR58B4hW
            source_type: api_record
            title: 中国历代人物传记资料库：王勝宗（CBDB 253488）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253488&o=json
            external_identifier: CBDB:253488
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.301Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u7AUEpVSNhxPs73Dy19gU5
        subject_person_id: p_hLC7KGkfmVQ6FH9R6Ly45j
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
        - id: cs_T3EmDmbzf16CS4P3L8wcuq
          claim_id: c_u7AUEpVSNhxPs73Dy19gU5
          source_id: s_WVaT3PGcf433PQDR58B4hW
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
        id: c_D6HdwMGmFJ6NjoEbZ0_TTK
        subject_person_id: p_hLC7KGkfmVQ6FH9R6Ly45j
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_A98pt7vCX7HThyxCGgsD4R
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_742vGZKYQgatXENWCVrvgr
          claim_id: c_D6HdwMGmFJ6NjoEbZ0_TTK
          source_id: s_WVaT3PGcf433PQDR58B4hW
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百九十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_A98pt7vCX7HThyxCGgsD4R
        status: active
        display_name: 王賓
        merged_into_person_id: null
  other: []
---

# 王勝宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勝宗 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_A98pt7vCX7HThyxCGgsD4R | 王賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王勝宗（CBDB 253488）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253488&o=json)
