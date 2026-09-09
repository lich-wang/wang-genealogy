---
schema: wang-person/v1
id: p_wg9SbiU6iuiiEMCXTr6z5i
status: active
merged_into: null
display_name: 王野父
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_u4NDuEDyiNw7QNR2Mj4JnH
        subject_person_id: p_wg9SbiU6iuiiEMCXTr6z5i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王野父
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t1JKMMY2vHadCRjhbLsmEB
          claim_id: c_u4NDuEDyiNw7QNR2Mj4JnH
          source_id: s_CTNCjcySEhGkAV1E7H6ZGF
          stance: supports
          locator: CBDB:175763
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175763）
          source: &a1
            id: s_CTNCjcySEhGkAV1E7H6ZGF
            source_type: api_record
            title: 中国历代人物传记资料库：王野父（CBDB 175763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175763&o=json
            external_identifier: CBDB:175763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.257Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_BuKPx6GKChbDK85VM9EZRG
        subject_person_id: p_wg9SbiU6iuiiEMCXTr6z5i
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 569年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mDaC1DHuYrmVKiUVZjwMTM
          claim_id: c_BuKPx6GKChbDK85VM9EZRG
          source_id: s_CTNCjcySEhGkAV1E7H6ZGF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PNutXgCwgHhDkRK83JrWCK
        subject_person_id: p_wg9SbiU6iuiiEMCXTr6z5i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为南北朝人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X5P2P8MoJ7dBdaEBjRo93Q
          claim_id: c_PNutXgCwgHhDkRK83JrWCK
          source_id: s_CTNCjcySEhGkAV1E7H6ZGF
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

# 王野父

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王野父 | accepted |
| death.date | 569年 | accepted |
| bio.summary | CBDB 记载为南北朝人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王野父（CBDB 175763）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175763&o=json)
