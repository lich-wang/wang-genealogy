---
schema: wang-person/v1
id: p_AmK2W1L7X8fpV7KsaPV1ug
status: active
merged_into: null
display_name: 王鐸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AhD1vL9L5QHpeFRfu1ouYd
        subject_person_id: p_AmK2W1L7X8fpV7KsaPV1ug
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Uoe9nWVg7BRiHaAfZ3SaeK
          claim_id: c_AhD1vL9L5QHpeFRfu1ouYd
          source_id: s_FuooZDPJffGV5R5TJBop2K
          stance: supports
          locator: CBDB:101009
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101009）
          source: &a1
            id: s_FuooZDPJffGV5R5TJBop2K
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 101009）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101009&o=json
            external_identifier: CBDB:101009
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.641Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jHE9mdbs1hX86FdmHqhCXd
        subject_person_id: p_AmK2W1L7X8fpV7KsaPV1ug
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
        - id: cs_yEu3VXcdGsFAGoSrqxKeN1
          claim_id: c_jHE9mdbs1hX86FdmHqhCXd
          source_id: s_FuooZDPJffGV5R5TJBop2K
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

# 王鐸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鐸 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鐸（CBDB 101009）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101009&o=json)
