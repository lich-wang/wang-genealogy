---
schema: wang-person/v1
id: p_HctE1o2DqGbRCrW5JrQYiH
status: active
merged_into: null
display_name: 王君用
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6rSeWhFDpvqvJEAU6uu2im
        subject_person_id: p_HctE1o2DqGbRCrW5JrQYiH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MYwZa4dsEoRvhwE74MzmMM
          claim_id: c_6rSeWhFDpvqvJEAU6uu2im
          source_id: s_fVkfBK2SSrPNJoe1n1zvuH
          stance: supports
          locator: CBDB:101208
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101208）
          source: &a1
            id: s_fVkfBK2SSrPNJoe1n1zvuH
            source_type: api_record
            title: 中国历代人物传记资料库：王君用（CBDB 101208）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101208&o=json
            external_identifier: CBDB:101208
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.750Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_PuYUTsjBPHBX6ZEYe4Asfy
        subject_person_id: p_HctE1o2DqGbRCrW5JrQYiH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1319年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RvPmHwPUEifq7VN1X3oNgg
          claim_id: c_PuYUTsjBPHBX6ZEYe4Asfy
          source_id: s_fVkfBK2SSrPNJoe1n1zvuH
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
        id: c_LyfB8YSiBvuqk4GuwdXD4w
        subject_person_id: p_HctE1o2DqGbRCrW5JrQYiH
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
        - id: cs_Zc1wMMNAKKHUkt89TrVauk
          claim_id: c_LyfB8YSiBvuqk4GuwdXD4w
          source_id: s_fVkfBK2SSrPNJoe1n1zvuH
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

# 王君用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王君用 | accepted |
| death.date | 1319年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王君用（CBDB 101208）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101208&o=json)
