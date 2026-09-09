---
schema: wang-person/v1
id: p_raN9TZvzAAY4rSCAop8cXg
status: active
merged_into: null
display_name: 王晞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QdyLcqA1mXB5qLH7tEYs6C
        subject_person_id: p_raN9TZvzAAY4rSCAop8cXg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2Pyf5cbpKitXHMB1URPh81
          claim_id: c_QdyLcqA1mXB5qLH7tEYs6C
          source_id: s_EycDuNkErHNQyz9YmBZLD6
          stance: supports
          locator: CBDB:377762
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（377762）
          source: &a1
            id: s_EycDuNkErHNQyz9YmBZLD6
            source_type: api_record
            title: 中国历代人物传记资料库：王晞（CBDB 377762）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377762&o=json
            external_identifier: CBDB:377762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.638Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E87kv6v5jUEpDCA3xsfTGW
        subject_person_id: p_raN9TZvzAAY4rSCAop8cXg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yNK84G7f2Km5C83DMJ9E7Q
          claim_id: c_E87kv6v5jUEpDCA3xsfTGW
          source_id: s_EycDuNkErHNQyz9YmBZLD6
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

# 王晞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晞 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晞（CBDB 377762）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=377762&o=json)
