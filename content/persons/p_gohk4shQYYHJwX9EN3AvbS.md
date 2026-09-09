---
schema: wang-person/v1
id: p_gohk4shQYYHJwX9EN3AvbS
status: active
merged_into: null
display_name: 王審邽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XtsPSQQgQ9UoFN3eiENXRG
        subject_person_id: p_gohk4shQYYHJwX9EN3AvbS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王審邽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3kJDsWi8iJfDPFTGyCjGPB
          claim_id: c_XtsPSQQgQ9UoFN3eiENXRG
          source_id: s_ZJ5vmMhE4sU9NXz7iEs8pm
          stance: supports
          locator: CBDB:25838
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（25838）
          source: &a1
            id: s_ZJ5vmMhE4sU9NXz7iEs8pm
            source_type: api_record
            title: 中国历代人物传记资料库：王審邽（CBDB 25838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25838&o=json
            external_identifier: CBDB:25838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.926Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EdM2DtD3J5w2puAAjxSpvZ
        subject_person_id: p_gohk4shQYYHJwX9EN3AvbS
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
        - id: cs_g7gSqfJn8nKpTNsL5Jwo8s
          claim_id: c_EdM2DtD3J5w2puAAjxSpvZ
          source_id: s_ZJ5vmMhE4sU9NXz7iEs8pm
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

# 王審邽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王審邽 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王審邽（CBDB 25838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25838&o=json)
