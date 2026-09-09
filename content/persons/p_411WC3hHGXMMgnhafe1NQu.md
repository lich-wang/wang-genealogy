---
schema: wang-person/v1
id: p_411WC3hHGXMMgnhafe1NQu
status: active
merged_into: null
display_name: 王大經
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hghpA4XN9JRDsEwY7JAraY
        subject_person_id: p_411WC3hHGXMMgnhafe1NQu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d7f3qPRUogonBAfSoUGaQb
          claim_id: c_hghpA4XN9JRDsEwY7JAraY
          source_id: s_GoVCV5M5JrDWQ64cdGY3hw
          stance: supports
          locator: CBDB:561489
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（561489）
          source: &a1
            id: s_GoVCV5M5JrDWQ64cdGY3hw
            source_type: api_record
            title: 中国历代人物传记资料库：王大經（CBDB 561489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561489&o=json
            external_identifier: CBDB:561489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.745Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X6LUP5BsCs1qkiAMc52eyW
        subject_person_id: p_411WC3hHGXMMgnhafe1NQu
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
        - id: cs_9NqEvK1ZmBAAKhpw39P75G
          claim_id: c_X6LUP5BsCs1qkiAMc52eyW
          source_id: s_GoVCV5M5JrDWQ64cdGY3hw
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

# 王大經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大經 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大經（CBDB 561489）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561489&o=json)
