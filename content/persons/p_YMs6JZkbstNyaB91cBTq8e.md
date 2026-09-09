---
schema: wang-person/v1
id: p_YMs6JZkbstNyaB91cBTq8e
status: active
merged_into: null
display_name: 王珍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8Ar82y4X7h8vPvSZttWy7Z
        subject_person_id: p_YMs6JZkbstNyaB91cBTq8e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z14aM5YarKJY2yDX1rYaG7
          claim_id: c_8Ar82y4X7h8vPvSZttWy7Z
          source_id: s_DDxcxQL1ev4xkH9RkHws9x
          stance: supports
          locator: CBDB:143099
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（143099）
          source: &a1
            id: s_DDxcxQL1ev4xkH9RkHws9x
            source_type: api_record
            title: 中国历代人物传记资料库：王珍（CBDB 143099）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143099&o=json
            external_identifier: CBDB:143099
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.614Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_egqQBtYfuT3BWRJ3jjHTHu
        subject_person_id: p_YMs6JZkbstNyaB91cBTq8e
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 707年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ePV4iBbVZBSJNfVKHW4Lrb
          claim_id: c_egqQBtYfuT3BWRJ3jjHTHu
          source_id: s_DDxcxQL1ev4xkH9RkHws9x
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
        id: c_FxV4V19mwstMKqJbE5wyog
        subject_person_id: p_YMs6JZkbstNyaB91cBTq8e
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 763年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZaZhRmCiFkUt58Wge4hqW5
          claim_id: c_FxV4V19mwstMKqJbE5wyog
          source_id: s_DDxcxQL1ev4xkH9RkHws9x
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
        id: c_i9V1eLWyKjCyaHqxDyFYDN
        subject_person_id: p_YMs6JZkbstNyaB91cBTq8e
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
        - id: cs_nQzzxqdmaavqQp473v391N
          claim_id: c_i9V1eLWyKjCyaHqxDyFYDN
          source_id: s_DDxcxQL1ev4xkH9RkHws9x
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

# 王珍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珍 | accepted |
| birth.date | 707年 | accepted |
| death.date | 763年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珍（CBDB 143099）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143099&o=json)
