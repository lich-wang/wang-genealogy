---
schema: wang-person/v1
id: p_fCmA5DtzvvNP37R71HYqfL
status: active
merged_into: null
display_name: 王祖武
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vjd5FSZEt2diEs97rcDBdj
        subject_person_id: p_fCmA5DtzvvNP37R71HYqfL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖武
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GKfFnoams4njmvg7E9ySaH
          claim_id: c_vjd5FSZEt2diEs97rcDBdj
          source_id: s_6YnLaFeMWC8S3FtdEGGdGu
          stance: supports
          locator: CBDB:342802
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342802）
          source: &a1
            id: s_6YnLaFeMWC8S3FtdEGGdGu
            source_type: api_record
            title: 中国历代人物传记资料库：王祖武（CBDB 342802）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342802&o=json
            external_identifier: CBDB:342802
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.072Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KRorkYRk6j9QEMt3a588pB
        subject_person_id: p_fCmA5DtzvvNP37R71HYqfL
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
        - id: cs_rqnL4zZ7JPeo8KrJ8rLJar
          claim_id: c_KRorkYRk6j9QEMt3a588pB
          source_id: s_6YnLaFeMWC8S3FtdEGGdGu
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

# 王祖武

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祖武 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祖武（CBDB 342802）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342802&o=json)
