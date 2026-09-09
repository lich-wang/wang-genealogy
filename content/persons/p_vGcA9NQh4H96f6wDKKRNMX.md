---
schema: wang-person/v1
id: p_vGcA9NQh4H96f6wDKKRNMX
status: active
merged_into: null
display_name: 王果
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3S8cZJ9rNe2AoX6NYBwwcR
        subject_person_id: p_vGcA9NQh4H96f6wDKKRNMX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王果
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Upb5bkahLX79wkcSv78BZL
          claim_id: c_3S8cZJ9rNe2AoX6NYBwwcR
          source_id: s_BaqKAfvnTC8s3THzUdd77Q
          stance: supports
          locator: CBDB:17817
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17817）
          source: &a1
            id: s_BaqKAfvnTC8s3THzUdd77Q
            source_type: api_record
            title: 中国历代人物传记资料库：王果（CBDB 17817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17817&o=json
            external_identifier: CBDB:17817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.679Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HMENZ1nUcCEScKNq14gcbG
        subject_person_id: p_vGcA9NQh4H96f6wDKKRNMX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为南唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_veYwZVLN3eDEjNcKMkywEZ
          claim_id: c_HMENZ1nUcCEScKNq14gcbG
          source_id: s_BaqKAfvnTC8s3THzUdd77Q
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

# 王果

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王果 | accepted |
| bio.summary | CBDB 记载为南唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王果（CBDB 17817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17817&o=json)
