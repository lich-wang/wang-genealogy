---
schema: wang-person/v1
id: p_6YvDmHgBvFoaW63XvQBpN6
status: active
merged_into: null
display_name: 王中虚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ur9j2xrSDD711XJJgGJBFg
        subject_person_id: p_6YvDmHgBvFoaW63XvQBpN6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中虚
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VH1q7614NSBphtfhN2fTPo
          claim_id: c_Ur9j2xrSDD711XJJgGJBFg
          source_id: s_XuZM9xMr8qWAnPnBNX3vFr
          stance: supports
          locator: CBDB:543304
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（543304）
          source: &a1
            id: s_XuZM9xMr8qWAnPnBNX3vFr
            source_type: api_record
            title: 中国历代人物传记资料库：王中虚（CBDB 543304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=543304&o=json
            external_identifier: CBDB:543304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.447Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9Ng37WfaJ5bxBa8dR3sg8J
        subject_person_id: p_6YvDmHgBvFoaW63XvQBpN6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b6nHHszpco3zm3TtxZ52yw
          claim_id: c_9Ng37WfaJ5bxBa8dR3sg8J
          source_id: s_XuZM9xMr8qWAnPnBNX3vFr
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

# 王中虚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王中虚 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王中虚（CBDB 543304）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=543304&o=json)
