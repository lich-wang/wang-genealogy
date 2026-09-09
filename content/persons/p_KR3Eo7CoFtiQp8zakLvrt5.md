---
schema: wang-person/v1
id: p_KR3Eo7CoFtiQp8zakLvrt5
status: active
merged_into: null
display_name: 王汝楫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gn9b4jFGKLV8XhMtjuN7Fx
        subject_person_id: p_KR3Eo7CoFtiQp8zakLvrt5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝楫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SeZDjN1TPP2EfBrSQmq4TG
          claim_id: c_Gn9b4jFGKLV8XhMtjuN7Fx
          source_id: s_gLwFYU5Pc9zJstFwSt9ezD
          stance: supports
          locator: CBDB:282878
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282878）
          source: &a1
            id: s_gLwFYU5Pc9zJstFwSt9ezD
            source_type: api_record
            title: 中国历代人物传记资料库：王汝楫（CBDB 282878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282878&o=json
            external_identifier: CBDB:282878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.116Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HY3rE5r8s41f8zF88N9aki
        subject_person_id: p_KR3Eo7CoFtiQp8zakLvrt5
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
        - id: cs_Y27TitTnvGLawitJxajBwH
          claim_id: c_HY3rE5r8s41f8zF88N9aki
          source_id: s_gLwFYU5Pc9zJstFwSt9ezD
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
  descendants: []
  other: []
---

# 王汝楫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝楫 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝楫（CBDB 282878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282878&o=json)
