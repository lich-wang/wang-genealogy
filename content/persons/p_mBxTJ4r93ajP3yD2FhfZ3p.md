---
schema: wang-person/v1
id: p_mBxTJ4r93ajP3yD2FhfZ3p
status: active
merged_into: null
display_name: 王璿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MD9D2dDahhn56Ka4bEadmH
        subject_person_id: p_mBxTJ4r93ajP3yD2FhfZ3p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_82EaG3u9jp32dW4K52eC4r
          claim_id: c_MD9D2dDahhn56Ka4bEadmH
          source_id: s_M9JjeCBnWsf7aujLWw5FMf
          stance: supports
          locator: CBDB:503489
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（503489）
          source: &a1
            id: s_M9JjeCBnWsf7aujLWw5FMf
            source_type: api_record
            title: 中国历代人物传记资料库：王璿（CBDB 503489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=503489&o=json
            external_identifier: CBDB:503489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.904Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7K4V6Ac3WK7yTGxECXb3BD
        subject_person_id: p_mBxTJ4r93ajP3yD2FhfZ3p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璿，明人物。入仕進士，曾任同知。（中国历代人物传记资料库 CBDB 503489）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3lX99tNxBud3YwOqyaQOkK
          claim_id: c_7K4V6Ac3WK7yTGxECXb3BD
          source_id: s_M9JjeCBnWsf7aujLWw5FMf
          stance: supports
          locator: CBDB:503489
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

# 王璿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璿 | accepted |
| bio.summary | 王璿，明人物。入仕進士，曾任同知。（中国历代人物传记资料库 CBDB 503489） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璿（CBDB 503489）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=503489&o=json)
