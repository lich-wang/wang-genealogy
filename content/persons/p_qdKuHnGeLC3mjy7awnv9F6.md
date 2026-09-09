---
schema: wang-person/v1
id: p_qdKuHnGeLC3mjy7awnv9F6
status: active
merged_into: null
display_name: 王玄裕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jAD1HfLyYZqEHQkYQv1J5t
        subject_person_id: p_qdKuHnGeLC3mjy7awnv9F6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玄裕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_axXz1fum1MdA6hStqz1VV5
          claim_id: c_jAD1HfLyYZqEHQkYQv1J5t
          source_id: s_T9WhRSYNLkZVEMMK3L3dmt
          stance: supports
          locator: CBDB:139860
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139860）
          source: &a1
            id: s_T9WhRSYNLkZVEMMK3L3dmt
            source_type: api_record
            title: 中国历代人物传记资料库：王玄裕（CBDB 139860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139860&o=json
            external_identifier: CBDB:139860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.196Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_a82aPHRUsCtz4HPNnLLWXY
        subject_person_id: p_qdKuHnGeLC3mjy7awnv9F6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 611年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JEsZ4UYt2Av3K2BiM5ZwDx
          claim_id: c_a82aPHRUsCtz4HPNnLLWXY
          source_id: s_T9WhRSYNLkZVEMMK3L3dmt
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
        id: c_xrbfokaVdDwvis4yeLpGi9
        subject_person_id: p_qdKuHnGeLC3mjy7awnv9F6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 671年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FNKHASkioz6eAGkE3SK8HK
          claim_id: c_xrbfokaVdDwvis4yeLpGi9
          source_id: s_T9WhRSYNLkZVEMMK3L3dmt
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
        id: c_YYx3Yp5fVxmncqwQEp1Dyt
        subject_person_id: p_qdKuHnGeLC3mjy7awnv9F6
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
        - id: cs_3tZzqFRCCY2nedQxCf9qpV
          claim_id: c_YYx3Yp5fVxmncqwQEp1Dyt
          source_id: s_T9WhRSYNLkZVEMMK3L3dmt
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

# 王玄裕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玄裕 | accepted |
| birth.date | 611年 | accepted |
| death.date | 671年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玄裕（CBDB 139860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139860&o=json)
