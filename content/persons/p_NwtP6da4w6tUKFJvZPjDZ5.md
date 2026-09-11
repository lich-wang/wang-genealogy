---
schema: wang-person/v1
id: p_NwtP6da4w6tUKFJvZPjDZ5
status: active
merged_into: null
display_name: 王賜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AKjaFsvzD2esGerxMd9v7G
        subject_person_id: p_NwtP6da4w6tUKFJvZPjDZ5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GkWps62F6mFGd596zyKPoM
          claim_id: c_AKjaFsvzD2esGerxMd9v7G
          source_id: s_6ST9SaA9UB9z1c1XnTQAXx
          stance: supports
          locator: CBDB:244061
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244061）
          source: &a1
            id: s_6ST9SaA9UB9z1c1XnTQAXx
            source_type: api_record
            title: 中国历代人物传记资料库：王賜（CBDB 244061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244061&o=json
            external_identifier: CBDB:244061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.020Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UMVsT6rsHfwqQPNRGRPBAo
        subject_person_id: p_NwtP6da4w6tUKFJvZPjDZ5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賜，明人物。成化五年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 244061）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_47BEI2IvMgDQggBZjuIOFd
          claim_id: c_UMVsT6rsHfwqQPNRGRPBAo
          source_id: s_6ST9SaA9UB9z1c1XnTQAXx
          stance: supports
          locator: CBDB:244061
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

# 王賜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賜 | accepted |
| bio.summary | 王賜，明人物。成化五年進士，籍贯餘姚。（中国历代人物传记资料库 CBDB 244061） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王賜（CBDB 244061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244061&o=json)
