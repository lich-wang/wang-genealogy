---
schema: wang-person/v1
id: p_MRZ1VCcvFqN11gBWUafm3Y
status: active
merged_into: null
display_name: 王守正
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MZXoGFtLj7n6b5HMM3yz1A
        subject_person_id: p_MRZ1VCcvFqN11gBWUafm3Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V6Fbswc8RRVAwYaPUoYuYG
          claim_id: c_MZXoGFtLj7n6b5HMM3yz1A
          source_id: s_jJL1xVkBvvH68Lg2zyvjPp
          stance: supports
          locator: CBDB:101161
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101161）
          source: &a1
            id: s_jJL1xVkBvvH68Lg2zyvjPp
            source_type: api_record
            title: 中国历代人物传记资料库：王守正（CBDB 101161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101161&o=json
            external_identifier: CBDB:101161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.710Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_H9XQsBkb98Buht4xyAByAz
        subject_person_id: p_MRZ1VCcvFqN11gBWUafm3Y
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1240年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UuFQXoRtwfMHDREmTGipi9
          claim_id: c_H9XQsBkb98Buht4xyAByAz
          source_id: s_jJL1xVkBvvH68Lg2zyvjPp
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
        id: c_X5xjvBFw6oEAwS2VQbgpYg
        subject_person_id: p_MRZ1VCcvFqN11gBWUafm3Y
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1316年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t9czr29JTbgTqt31U1MbWq
          claim_id: c_X5xjvBFw6oEAwS2VQbgpYg
          source_id: s_jJL1xVkBvvH68Lg2zyvjPp
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
        id: c_hLAb2j7ba9fsNTJiN2eLYK
        subject_person_id: p_MRZ1VCcvFqN11gBWUafm3Y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守正（1240年—1316年），元人物。籍贯南豐州，曾任太學生。（中国历代人物传记资料库 CBDB 101161）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Tv_-hFByKksLS4gKO3cHFb
          claim_id: c_hLAb2j7ba9fsNTJiN2eLYK
          source_id: s_jJL1xVkBvvH68Lg2zyvjPp
          stance: supports
          locator: CBDB:101161
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王守正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守正 | accepted |
| birth.date | 1240年 | accepted |
| death.date | 1316年 | accepted |
| bio.summary | 王守正（1240年—1316年），元人物。籍贯南豐州，曾任太學生。（中国历代人物传记资料库 CBDB 101161） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守正（CBDB 101161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101161&o=json)
