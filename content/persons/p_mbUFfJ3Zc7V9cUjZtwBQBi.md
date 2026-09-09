---
schema: wang-person/v1
id: p_mbUFfJ3Zc7V9cUjZtwBQBi
status: active
merged_into: null
display_name: 王應詔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t64b3QKU9TaRGxZBu4uuvy
        subject_person_id: p_mbUFfJ3Zc7V9cUjZtwBQBi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2ssRW7bD5J6KK7CGG4KBxL
          claim_id: c_t64b3QKU9TaRGxZBu4uuvy
          source_id: s_w5itgfPuFnYEz78aKg6Kap
          stance: supports
          locator: CBDB:637998
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637998）
          source: &a1
            id: s_w5itgfPuFnYEz78aKg6Kap
            source_type: api_record
            title: 中国历代人物传记资料库：王應詔（CBDB 637998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637998&o=json
            external_identifier: CBDB:637998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.583Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UaqGH2MsmXeStb998GCpQK
        subject_person_id: p_mbUFfJ3Zc7V9cUjZtwBQBi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cdAVF7PU7p4QVnUYuTpthe
          claim_id: c_UaqGH2MsmXeStb998GCpQK
          source_id: s_w5itgfPuFnYEz78aKg6Kap
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

# 王應詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應詔 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應詔（CBDB 637998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637998&o=json)
