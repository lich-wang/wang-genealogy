---
schema: wang-person/v1
id: p_v1JUdEZP1E6udJKU98Fsgn
status: active
merged_into: null
display_name: 王振聲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xg569cPq5sdV5wfJHQM8J6
        subject_person_id: p_v1JUdEZP1E6udJKU98Fsgn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振聲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FvBKxnB8xE6sMLurqDRw68
          claim_id: c_xg569cPq5sdV5wfJHQM8J6
          source_id: s_zBUxUPPi9dxctw5kq4YSbQ
          stance: supports
          locator: CBDB:71949
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71949）
          source: &a1
            id: s_zBUxUPPi9dxctw5kq4YSbQ
            source_type: api_record
            title: 中国历代人物传记资料库：王振聲（CBDB 71949）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71949&o=json
            external_identifier: CBDB:71949
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_p3fzmw5Vk5VDGDC3a9qFKR
        subject_person_id: p_v1JUdEZP1E6udJKU98Fsgn
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1836年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nYoBTVwU4vPHuq4n2uCGa9
          claim_id: c_p3fzmw5Vk5VDGDC3a9qFKR
          source_id: s_zBUxUPPi9dxctw5kq4YSbQ
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
        id: c_tCJQAUmVerrKzbbDZqXiM7
        subject_person_id: p_v1JUdEZP1E6udJKU98Fsgn
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1913年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f45JcvDAAo6ANGAJuAoQV4
          claim_id: c_tCJQAUmVerrKzbbDZqXiM7
          source_id: s_zBUxUPPi9dxctw5kq4YSbQ
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
        id: c_uBCEkXwdJoWhSSVhhELB5q
        subject_person_id: p_v1JUdEZP1E6udJKU98Fsgn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为中華民國人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5ZAzBsDwX6z8C2qhzfTRyk
          claim_id: c_uBCEkXwdJoWhSSVhhELB5q
          source_id: s_zBUxUPPi9dxctw5kq4YSbQ
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

# 王振聲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王振聲 | accepted |
| birth.date | 1836年 | accepted |
| death.date | 1913年 | accepted |
| bio.summary | CBDB 记载为中華民國人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王振聲（CBDB 71949）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71949&o=json)
