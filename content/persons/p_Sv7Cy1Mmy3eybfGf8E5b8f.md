---
schema: wang-person/v1
id: p_Sv7Cy1Mmy3eybfGf8E5b8f
status: active
merged_into: null
display_name: 王猷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1NbFd5yLsY2ERQfucD2F8p
        subject_person_id: p_Sv7Cy1Mmy3eybfGf8E5b8f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王猷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vFvwoB4nM3E2DJEFoNKZnf
          claim_id: c_1NbFd5yLsY2ERQfucD2F8p
          source_id: s_4ET4yCfkG6Y4m9NA7vzrDG
          stance: supports
          locator: CBDB:100866
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100866）
          source: &a1
            id: s_4ET4yCfkG6Y4m9NA7vzrDG
            source_type: api_record
            title: 中国历代人物传记资料库：王猷（CBDB 100866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100866&o=json
            external_identifier: CBDB:100866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.520Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v2d1hB9ebkEqSE3wAQRbzv
        subject_person_id: p_Sv7Cy1Mmy3eybfGf8E5b8f
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
        - id: cs_6LRaAc6RHmAjYK3s2d1HBP
          claim_id: c_v2d1hB9ebkEqSE3wAQRbzv
          source_id: s_4ET4yCfkG6Y4m9NA7vzrDG
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

# 王猷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王猷 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王猷（CBDB 100866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100866&o=json)
