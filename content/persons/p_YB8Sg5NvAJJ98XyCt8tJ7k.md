---
schema: wang-person/v1
id: p_YB8Sg5NvAJJ98XyCt8tJ7k
status: active
merged_into: null
display_name: 王簪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N5QYx3WAu4fPFTByogTDJp
        subject_person_id: p_YB8Sg5NvAJJ98XyCt8tJ7k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王簪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QzgLBWYJnmR9RJ3HWVD7ar
          claim_id: c_N5QYx3WAu4fPFTByogTDJp
          source_id: s_AbYggFYY1wiC6nymuAzCgn
          stance: supports
          locator: CBDB:294139
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294139）
          source: &a1
            id: s_AbYggFYY1wiC6nymuAzCgn
            source_type: api_record
            title: 中国历代人物传记资料库：王簪（CBDB 294139）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294139&o=json
            external_identifier: CBDB:294139
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.434Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Zdp997SGS3NddSt52hnMKu
        subject_person_id: p_YB8Sg5NvAJJ98XyCt8tJ7k
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
        - id: cs_C4dy19eZddctQcJEUh9fR5
          claim_id: c_Zdp997SGS3NddSt52hnMKu
          source_id: s_AbYggFYY1wiC6nymuAzCgn
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

# 王簪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王簪 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王簪（CBDB 294139）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294139&o=json)
