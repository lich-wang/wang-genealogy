---
schema: wang-person/v1
id: p_FoxjPe3Mkzu2c8Q5zHSJMz
status: active
merged_into: null
display_name: 王惟善
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7oqDVJJAmUeFD3zcp5sbDL
        subject_person_id: p_FoxjPe3Mkzu2c8Q5zHSJMz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sK3fb34ZGtjg6sW4SiJmar
          claim_id: c_7oqDVJJAmUeFD3zcp5sbDL
          source_id: s_wcduJtDQjAyAJJgFTEphFs
          stance: supports
          locator: CBDB:101347
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101347）
          source: &a1
            id: s_wcduJtDQjAyAJJgFTEphFs
            source_type: api_record
            title: 中国历代人物传记资料库：王惟善（CBDB 101347）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101347&o=json
            external_identifier: CBDB:101347
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.817Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hSt3YvN5R1PDcxt6pAVra9
        subject_person_id: p_FoxjPe3Mkzu2c8Q5zHSJMz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QGBeZ5LUx5hxGZGS7XHHop
          claim_id: c_hSt3YvN5R1PDcxt6pAVra9
          source_id: s_wcduJtDQjAyAJJgFTEphFs
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

# 王惟善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟善 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惟善（CBDB 101347）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101347&o=json)
