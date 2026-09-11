---
schema: wang-person/v1
id: p_1XfmH96rus6XktGKczN57P
status: active
merged_into: null
display_name: 王海
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z45j5smECq6BQx6RRFU1Cj
        subject_person_id: p_1XfmH96rus6XktGKczN57P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王海
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mzRytDpFr61m1zCJp1iPyh
          claim_id: c_z45j5smECq6BQx6RRFU1Cj
          source_id: s_dPAMr3mhRyG59FEd97QDmH
          stance: supports
          locator: CBDB:41865
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（41865）
          source: &a1
            id: s_dPAMr3mhRyG59FEd97QDmH
            source_type: api_record
            title: 中国历代人物传记资料库：王海（CBDB 41865）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=41865&o=json
            external_identifier: CBDB:41865
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.647Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_DAs6bmXin7cgnzBrfoNG6G
        subject_person_id: p_1XfmH96rus6XktGKczN57P
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1275年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6gCDDNWFyVouhrNQmmvsPA
          claim_id: c_DAs6bmXin7cgnzBrfoNG6G
          source_id: s_dPAMr3mhRyG59FEd97QDmH
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
        id: c_BrNjqmC9sJqTN1inK5ihnD
        subject_person_id: p_1XfmH96rus6XktGKczN57P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王海（卒于1275年），宋人物。身份为武將、死國難。（中国历代人物传记资料库 CBDB 41865）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_j-M27Apw3gPQOfl1MHjA4P
          claim_id: c_BrNjqmC9sJqTN1inK5ihnD
          source_id: s_dPAMr3mhRyG59FEd97QDmH
          stance: supports
          locator: CBDB:41865
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王海

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王海 | accepted |
| death.date | 1275年 | accepted |
| bio.summary | 王海（卒于1275年），宋人物。身份为武將、死國難。（中国历代人物传记资料库 CBDB 41865） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王海（CBDB 41865）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=41865&o=json)
