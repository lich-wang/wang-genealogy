---
schema: wang-person/v1
id: p_ahSnb56VdFstFn8tAu7bV9
status: active
merged_into: null
display_name: 王益蒙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hahASzXikaVjTGGBGt4fMo
        subject_person_id: p_ahSnb56VdFstFn8tAu7bV9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益蒙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GiC1AAgyMrS3359K8s2kH6
          claim_id: c_hahASzXikaVjTGGBGt4fMo
          source_id: s_rnNR7SgaqbUv24PEedH3Tm
          stance: supports
          locator: CBDB:175785
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175785）
          source: &a1
            id: s_rnNR7SgaqbUv24PEedH3Tm
            source_type: api_record
            title: 中国历代人物传记资料库：王益蒙（CBDB 175785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175785&o=json
            external_identifier: CBDB:175785
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.261Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_hRTTAupvjGHi4aMh1ie6pU
        subject_person_id: p_ahSnb56VdFstFn8tAu7bV9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 789年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2S4yC7SGAQshZ14RbAgUaJ
          claim_id: c_hRTTAupvjGHi4aMh1ie6pU
          source_id: s_rnNR7SgaqbUv24PEedH3Tm
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
        id: c_n93n5DDvUAvG6EJB7PN1c2
        subject_person_id: p_ahSnb56VdFstFn8tAu7bV9
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
        - id: cs_613PFJMtrQUDXAgHjTmt9p
          claim_id: c_n93n5DDvUAvG6EJB7PN1c2
          source_id: s_rnNR7SgaqbUv24PEedH3Tm
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

# 王益蒙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王益蒙 | accepted |
| death.date | 789年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王益蒙（CBDB 175785）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175785&o=json)
