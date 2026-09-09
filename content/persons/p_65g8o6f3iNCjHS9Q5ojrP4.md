---
schema: wang-person/v1
id: p_65g8o6f3iNCjHS9Q5ojrP4
status: active
merged_into: null
display_name: 王公淑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z92GCgMR3spEACscxEuGFr
        subject_person_id: p_65g8o6f3iNCjHS9Q5ojrP4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公淑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qca5kqkksiu2eN39EuSddx
          claim_id: c_z92GCgMR3spEACscxEuGFr
          source_id: s_CH5cyGnFWoErX6LHxt9G4U
          stance: supports
          locator: CBDB:144996
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（144996）
          source: &a1
            id: s_CH5cyGnFWoErX6LHxt9G4U
            source_type: api_record
            title: 中国历代人物传记资料库：王公淑（CBDB 144996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144996&o=json
            external_identifier: CBDB:144996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.221Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RmUyCDTo5yRz6FBxwrJ3VF
        subject_person_id: p_65g8o6f3iNCjHS9Q5ojrP4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 780年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iPDxxmQNVJf1LxP39S4fLS
          claim_id: c_RmUyCDTo5yRz6FBxwrJ3VF
          source_id: s_CH5cyGnFWoErX6LHxt9G4U
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_fsFo8L5WymzSUFEpnXsFqx
        subject_person_id: p_65g8o6f3iNCjHS9Q5ojrP4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 848年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LZeDRwj1f74YEA91YQUSe4
          claim_id: c_fsFo8L5WymzSUFEpnXsFqx
          source_id: s_CH5cyGnFWoErX6LHxt9G4U
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
        id: c_7V73PiLRPBsff3wvE7izNU
        subject_person_id: p_65g8o6f3iNCjHS9Q5ojrP4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KogA2PMy7JGyR2SJUS9avW
          claim_id: c_7V73PiLRPBsff3wvE7izNU
          source_id: s_CH5cyGnFWoErX6LHxt9G4U
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

# 王公淑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王公淑 | accepted |
| birth.date | 780年 | accepted |
| death.date | 848年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王公淑（CBDB 144996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144996&o=json)
