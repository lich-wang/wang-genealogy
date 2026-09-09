---
schema: wang-person/v1
id: p_asR7CUjP1iXKvRkyGBMSJF
status: active
merged_into: null
display_name: 王教
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L3K8G53rssRbTBF3tP5tom
        subject_person_id: p_asR7CUjP1iXKvRkyGBMSJF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王教
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BfSBjAMxUicibFXFp2J2d4
          claim_id: c_L3K8G53rssRbTBF3tP5tom
          source_id: s_jQ1xVhGJBYhR3uYYGyKa7V
          stance: supports
          locator: CBDB:306622
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（306622）
          source: &a1
            id: s_jQ1xVhGJBYhR3uYYGyKa7V
            source_type: api_record
            title: 中国历代人物传记资料库：王教（CBDB 306622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306622&o=json
            external_identifier: CBDB:306622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.772Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zCP3kKHCZF5zK8gVPBJ545
        subject_person_id: p_asR7CUjP1iXKvRkyGBMSJF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z2NPsGmwRWQrvhJK4DD5Fq
          claim_id: c_zCP3kKHCZF5zK8gVPBJ545
          source_id: s_jQ1xVhGJBYhR3uYYGyKa7V
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

# 王教

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王教 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王教（CBDB 306622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306622&o=json)
