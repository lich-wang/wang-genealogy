---
schema: wang-person/v1
id: p_oScVd3USo11bgDGBWFfek4
status: active
merged_into: null
display_name: 王起麟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fq6GF3vfNMFQb2FcZ6QLK8
        subject_person_id: p_oScVd3USo11bgDGBWFfek4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王起麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XtvNVD99bBgPzS3Fjod2Gs
          claim_id: c_fq6GF3vfNMFQb2FcZ6QLK8
          source_id: s_ApfK1NLZxwSwBk9gETaGrb
          stance: supports
          locator: CBDB:640358
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640358）
          source: &a1
            id: s_ApfK1NLZxwSwBk9gETaGrb
            source_type: api_record
            title: 中国历代人物传记资料库：王起麟（CBDB 640358）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640358&o=json
            external_identifier: CBDB:640358
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.233Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jLMuMSHAfLyYXMS8b4dStv
        subject_person_id: p_oScVd3USo11bgDGBWFfek4
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
        - id: cs_k75SwNukHFEvu9pzckP9bB
          claim_id: c_jLMuMSHAfLyYXMS8b4dStv
          source_id: s_ApfK1NLZxwSwBk9gETaGrb
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

# 王起麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王起麟 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王起麟（CBDB 640358）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640358&o=json)
