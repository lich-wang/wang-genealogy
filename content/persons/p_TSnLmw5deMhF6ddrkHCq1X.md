---
schema: wang-person/v1
id: p_TSnLmw5deMhF6ddrkHCq1X
status: active
merged_into: null
display_name: 王彥英
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dWgR75s6Dbk8FHf8Hpffrr
        subject_person_id: p_TSnLmw5deMhF6ddrkHCq1X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gu6Z2szfFY8X2F1zpZ4iBm
          claim_id: c_dWgR75s6Dbk8FHf8Hpffrr
          source_id: s_2hRUfr5t1B67KY2QGWLDhm
          stance: supports
          locator: CBDB:22128
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22128）
          source: &a1
            id: s_2hRUfr5t1B67KY2QGWLDhm
            source_type: api_record
            title: 中国历代人物传记资料库：王彥英（CBDB 22128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22128&o=json
            external_identifier: CBDB:22128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.829Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jaA465aqmTcbUDAQYgNm1K
        subject_person_id: p_TSnLmw5deMhF6ddrkHCq1X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为閩國人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LrKTPV7fwCQxqP77wHAJKr
          claim_id: c_jaA465aqmTcbUDAQYgNm1K
          source_id: s_2hRUfr5t1B67KY2QGWLDhm
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

# 王彥英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥英 | accepted |
| bio.summary | CBDB 记载为閩國人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彥英（CBDB 22128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22128&o=json)
