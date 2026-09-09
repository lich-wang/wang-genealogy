---
schema: wang-person/v1
id: p_e6Vr1B46t7PA8D6C13wsSF
status: active
merged_into: null
display_name: 王凱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7wwvxNjAkBRp675k16yWvu
        subject_person_id: p_e6Vr1B46t7PA8D6C13wsSF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CAbBpwEieHoy5zZ5iV6a1p
          claim_id: c_7wwvxNjAkBRp675k16yWvu
          source_id: s_jtUyANT2QpkmKTGQoPVmG3
          stance: supports
          locator: CBDB:69377
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69377）
          source: &a1
            id: s_jtUyANT2QpkmKTGQoPVmG3
            source_type: api_record
            title: 中国历代人物传记资料库：王凱（CBDB 69377）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69377&o=json
            external_identifier: CBDB:69377
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.234Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_W4ebLeTPDcPV3zNPyGu1WY
        subject_person_id: p_e6Vr1B46t7PA8D6C13wsSF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1800年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DyfZHWQwqDT3Lm8xYBg4J9
          claim_id: c_W4ebLeTPDcPV3zNPyGu1WY
          source_id: s_jtUyANT2QpkmKTGQoPVmG3
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
        id: c_x9LroTu4k8ESppB81EU1Ls
        subject_person_id: p_e6Vr1B46t7PA8D6C13wsSF
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
        - id: cs_LKAnbvrLJgMTTbDHKYBezS
          claim_id: c_x9LroTu4k8ESppB81EU1Ls
          source_id: s_jtUyANT2QpkmKTGQoPVmG3
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

# 王凱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王凱 | accepted |
| death.date | 1800年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王凱（CBDB 69377）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69377&o=json)
