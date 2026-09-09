---
schema: wang-person/v1
id: p_bGA4pqvo668fxojh5LpgEB
status: active
merged_into: null
display_name: 王淑京
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hSHzZv8TpQV4Z47wLMyezj
        subject_person_id: p_bGA4pqvo668fxojh5LpgEB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑京
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1PKA69xMXaK8kNsXzko12W
          claim_id: c_hSHzZv8TpQV4Z47wLMyezj
          source_id: s_Gzd8Hkg4KfKvMbKLcsMwMk
          stance: supports
          locator: CBDB:72019
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72019）
          source: &a1
            id: s_Gzd8Hkg4KfKvMbKLcsMwMk
            source_type: api_record
            title: 中国历代人物传记资料库：王淑京（CBDB 72019）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72019&o=json
            external_identifier: CBDB:72019
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.960Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2kB9tUmEZwmFE4GroDtbTb
        subject_person_id: p_bGA4pqvo668fxojh5LpgEB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1681年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4gos1xLB7yqyzAZsgCj2FF
          claim_id: c_2kB9tUmEZwmFE4GroDtbTb
          source_id: s_Gzd8Hkg4KfKvMbKLcsMwMk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7BACm6PjQqJHV9dGmn5oYv
        subject_person_id: p_bGA4pqvo668fxojh5LpgEB
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
        - id: cs_ajs1tc7TAcNH4ksb34fgtM
          claim_id: c_7BACm6PjQqJHV9dGmn5oYv
          source_id: s_Gzd8Hkg4KfKvMbKLcsMwMk
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

# 王淑京

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淑京 | accepted |
| birth.date | 1681年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淑京（CBDB 72019）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72019&o=json)
