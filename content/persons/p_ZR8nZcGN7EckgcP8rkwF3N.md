---
schema: wang-person/v1
id: p_ZR8nZcGN7EckgcP8rkwF3N
status: active
merged_into: null
display_name: 王徹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aChx6BM7QHBv2fVF6UKjDu
        subject_person_id: p_ZR8nZcGN7EckgcP8rkwF3N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iLHp8MYn4NJvRRHkPb6KFn
          claim_id: c_aChx6BM7QHBv2fVF6UKjDu
          source_id: s_6D8fp4RMvb7P9JtPk4KVUN
          stance: supports
          locator: CBDB:445544
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445544）
          source: &a1
            id: s_6D8fp4RMvb7P9JtPk4KVUN
            source_type: api_record
            title: 中国历代人物传记资料库：王徹（CBDB 445544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445544&o=json
            external_identifier: CBDB:445544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.160Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_94116QW25271SJA213h6eN
        subject_person_id: p_ZR8nZcGN7EckgcP8rkwF3N
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
        - id: cs_vLuaRFsc7yHLs1WV3N23wR
          claim_id: c_94116QW25271SJA213h6eN
          source_id: s_6D8fp4RMvb7P9JtPk4KVUN
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

# 王徹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王徹 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王徹（CBDB 445544）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445544&o=json)
