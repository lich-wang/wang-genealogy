---
schema: wang-person/v1
id: p_uRhJ3zUxj3BgXiNNHrDupu
status: active
merged_into: null
display_name: 王秉鐸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_17q39UZR6BzEAGoD15RJHy
        subject_person_id: p_uRhJ3zUxj3BgXiNNHrDupu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉鐸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H9EAa2DKqCzfWirDgZHEhK
          claim_id: c_17q39UZR6BzEAGoD15RJHy
          source_id: s_RXei18b3aky2wjAnUdE4YX
          stance: supports
          locator: CBDB:639665
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639665）
          source: &a1
            id: s_RXei18b3aky2wjAnUdE4YX
            source_type: api_record
            title: 中国历代人物传记资料库：王秉鐸（CBDB 639665）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639665&o=json
            external_identifier: CBDB:639665
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.010Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vNZQsHe3YS77PZumLoeu37
        subject_person_id: p_uRhJ3zUxj3BgXiNNHrDupu
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
        - id: cs_W7QXHhqvL17iS4CM8xU4kZ
          claim_id: c_vNZQsHe3YS77PZumLoeu37
          source_id: s_RXei18b3aky2wjAnUdE4YX
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

# 王秉鐸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秉鐸 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秉鐸（CBDB 639665）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639665&o=json)
