---
schema: wang-person/v1
id: p_woVBtYjYH41Tdzkh8YPme2
status: active
merged_into: null
display_name: 王汝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5hfmi6cVbGhwDoYzcrQAqm
        subject_person_id: p_woVBtYjYH41Tdzkh8YPme2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b7BjY79Jk49SzXGBM83vXf
          claim_id: c_5hfmi6cVbGhwDoYzcrQAqm
          source_id: s_JNRf957scab81PLASDN742
          stance: supports
          locator: CBDB:216210
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（216210）
          source: &a1
            id: s_JNRf957scab81PLASDN742
            source_type: api_record
            title: 中国历代人物传记资料库：王汝（CBDB 216210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216210&o=json
            external_identifier: CBDB:216210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.221Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ljv6duWgzK7qLzFNhfF6Mx
        subject_person_id: p_woVBtYjYH41Tdzkh8YPme2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝，明人物。萬曆五年進士，籍贯惠安。（中国历代人物传记资料库 CBDB 216210）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tpiN2MD-8x7xbBGmZNUy5e
          claim_id: c_Ljv6duWgzK7qLzFNhfF6Mx
          source_id: s_JNRf957scab81PLASDN742
          stance: supports
          locator: CBDB:216210
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

# 王汝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝 | accepted |
| bio.summary | 王汝，明人物。萬曆五年進士，籍贯惠安。（中国历代人物传记资料库 CBDB 216210） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝（CBDB 216210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216210&o=json)
