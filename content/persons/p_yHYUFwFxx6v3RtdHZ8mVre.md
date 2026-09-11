---
schema: wang-person/v1
id: p_yHYUFwFxx6v3RtdHZ8mVre
status: active
merged_into: null
display_name: 王其昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r1KfgFfMqxCcfHTD2StGEK
        subject_person_id: p_yHYUFwFxx6v3RtdHZ8mVre
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王其昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KfhvpxS3auTH5T8r68EzSa
          claim_id: c_r1KfgFfMqxCcfHTD2StGEK
          source_id: s_YHFeGwFAQjMSQjafvSE9Ro
          stance: supports
          locator: CBDB:69250
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69250）
          source: &a1
            id: s_YHFeGwFAQjMSQjafvSE9Ro
            source_type: api_record
            title: 中国历代人物传记资料库：王其昌（CBDB 69250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69250&o=json
            external_identifier: CBDB:69250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.174Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_sQYkhEPpWEbqoNBTXu2sYr
        subject_person_id: p_yHYUFwFxx6v3RtdHZ8mVre
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1862年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4d2Uo12GEJUt2RjV33ymYr
          claim_id: c_sQYkhEPpWEbqoNBTXu2sYr
          source_id: s_YHFeGwFAQjMSQjafvSE9Ro
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
        id: c_YaPSKwAU5wsVtiN2juCZqb
        subject_person_id: p_yHYUFwFxx6v3RtdHZ8mVre
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王其昌（卒于1862年），清人物。籍贯通州，入仕廩貢生。（中国历代人物传记资料库 CBDB 69250）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7cqKbWFF4HrRDt7qRA61Jv
          claim_id: c_YaPSKwAU5wsVtiN2juCZqb
          source_id: s_YHFeGwFAQjMSQjafvSE9Ro
          stance: supports
          locator: CBDB:69250
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

# 王其昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王其昌 | accepted |
| death.date | 1862年 | accepted |
| bio.summary | 王其昌（卒于1862年），清人物。籍贯通州，入仕廩貢生。（中国历代人物传记资料库 CBDB 69250） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王其昌（CBDB 69250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69250&o=json)
