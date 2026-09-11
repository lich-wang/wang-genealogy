---
schema: wang-person/v1
id: p_BbCkLEm6dMxpYfs2i2AZTe
status: active
merged_into: null
display_name: 王樸
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FDxJ3yBHAjJzX6zJbBVxjf
        subject_person_id: p_BbCkLEm6dMxpYfs2i2AZTe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Lzfso76usK9HFWo1ymi9PS
          claim_id: c_FDxJ3yBHAjJzX6zJbBVxjf
          source_id: s_hnnNXWtr3fLs6Lwb2TY7ea
          stance: supports
          locator: CBDB:260232
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260232）
          source: &a1
            id: s_hnnNXWtr3fLs6Lwb2TY7ea
            source_type: api_record
            title: 中国历代人物传记资料库：王樸（CBDB 260232）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260232&o=json
            external_identifier: CBDB:260232
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.485Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZzD4hP9979N5eoorvuNEWe
        subject_person_id: p_BbCkLEm6dMxpYfs2i2AZTe
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
        - id: cs_LQfdYC4RD7m947USLZXsUs
          claim_id: c_ZzD4hP9979N5eoorvuNEWe
          source_id: s_hnnNXWtr3fLs6Lwb2TY7ea
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
        id: c__h5DXIb7AZQnZ5ud3-t1Tk
        subject_person_id: p_BbCkLEm6dMxpYfs2i2AZTe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_v3b97W1yi7J7kSEqJr8m4E
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xyMc5Ls9CqjjXZ2qY3-MlR
          claim_id: c__h5DXIb7AZQnZ5ud3-t1Tk
          source_id: s_hnnNXWtr3fLs6Lwb2TY7ea
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第一百六十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_v3b97W1yi7J7kSEqJr8m4E
        status: active
        display_name: 王玹
        merged_into_person_id: null
  other: []
---

# 王樸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樸 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_v3b97W1yi7J7kSEqJr8m4E | 王玹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王樸（CBDB 260232）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260232&o=json)
