---
schema: wang-person/v1
id: p_cDKZ9odWpBmQ6RH3xs3UzM
status: active
merged_into: null
display_name: 王勗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T6xz42CBy7Spsh6RP84WEZ
        subject_person_id: p_cDKZ9odWpBmQ6RH3xs3UzM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tbhCQM2ecffKpV5uL6sEHZ
          claim_id: c_T6xz42CBy7Spsh6RP84WEZ
          source_id: s_kud9tGDRR8FuSL6PST6CwA
          stance: supports
          locator: CBDB:151255
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（151255）
          source: &a1
            id: s_kud9tGDRR8FuSL6PST6CwA
            source_type: api_record
            title: 中国历代人物传记资料库：王勗（CBDB 151255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151255&o=json
            external_identifier: CBDB:151255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.836Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SjyiMUeYUz6ab4uiQx63jG
        subject_person_id: p_cDKZ9odWpBmQ6RH3xs3UzM
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
        - id: cs_6nziuy1Ss6pgbjA1u5C2cW
          claim_id: c_SjyiMUeYUz6ab4uiQx63jG
          source_id: s_kud9tGDRR8FuSL6PST6CwA
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

# 王勗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勗 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王勗（CBDB 151255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151255&o=json)
