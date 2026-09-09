---
schema: wang-person/v1
id: p_LfSJ6e9XsMFtMLtvQoDMFX
status: active
merged_into: null
display_name: 王樵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Qw255eYGDNnutsqCHYALdM
        subject_person_id: p_LfSJ6e9XsMFtMLtvQoDMFX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4mX87D2VdcgfyKn15SaD41
          claim_id: c_Qw255eYGDNnutsqCHYALdM
          source_id: s_AS7VJcA315X5Jpus2aX84k
          stance: supports
          locator: CBDB:22120
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22120）
          source: &a1
            id: s_AS7VJcA315X5Jpus2aX84k
            source_type: api_record
            title: 中国历代人物传记资料库：王樵（CBDB 22120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22120&o=json
            external_identifier: CBDB:22120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.825Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZHSeTLa7C2Ft7KbkSrdFin
        subject_person_id: p_LfSJ6e9XsMFtMLtvQoDMFX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tVpUjvxEt8J2mXmBHrBsG1
          claim_id: c_ZHSeTLa7C2Ft7KbkSrdFin
          source_id: s_AS7VJcA315X5Jpus2aX84k
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

# 王樵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樵 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樵（CBDB 22120）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22120&o=json)
