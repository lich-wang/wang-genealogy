---
schema: wang-person/v1
id: p_8BsUePxg2QCrgfzw28SJ5E
status: active
merged_into: null
display_name: 王濟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6cwL6fjNz5rRfhEogqEKyc
        subject_person_id: p_8BsUePxg2QCrgfzw28SJ5E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YpNG9cgo7HPxhTsLtn2XB2
          claim_id: c_6cwL6fjNz5rRfhEogqEKyc
          source_id: s_HZFR2Ls9b6JASwF7T9t9jL
          stance: supports
          locator: CBDB:71150
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71150）
          source: &a1
            id: s_HZFR2Ls9b6JASwF7T9t9jL
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 71150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71150&o=json
            external_identifier: CBDB:71150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.432Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_iTA13vPU1whQTnShfKeoPw
        subject_person_id: p_8BsUePxg2QCrgfzw28SJ5E
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1820年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nqyDgiZBj3nUHa7ekM8ivu
          claim_id: c_iTA13vPU1whQTnShfKeoPw
          source_id: s_HZFR2Ls9b6JASwF7T9t9jL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vCMVR8gCQFdQZmke4pbG2a
        subject_person_id: p_8BsUePxg2QCrgfzw28SJ5E
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
        - id: cs_sVxkm4yy7PqW75vHjYSWC6
          claim_id: c_vCMVR8gCQFdQZmke4pbG2a
          source_id: s_HZFR2Ls9b6JASwF7T9t9jL
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

# 王濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濟 | accepted |
| birth.date | 1820年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王濟（CBDB 71150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71150&o=json)
