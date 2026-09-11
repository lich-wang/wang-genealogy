---
schema: wang-person/v1
id: p_VuwfpMYNSF5mvNbz85tk89
status: active
merged_into: null
display_name: 王原
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3Mj1aE5CXM7zspPootWQLV
        subject_person_id: p_VuwfpMYNSF5mvNbz85tk89
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王原
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2uWVjF9LLqphiFVTJe4gdC
          claim_id: c_3Mj1aE5CXM7zspPootWQLV
          source_id: s_vWym2UzVRp9RQ2amTL6qAd
          stance: supports
          locator: CBDB:504301
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（504301）
          source: &a1
            id: s_vWym2UzVRp9RQ2amTL6qAd
            source_type: api_record
            title: 中国历代人物传记资料库：王原（CBDB 504301）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=504301&o=json
            external_identifier: CBDB:504301
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.928Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_goW218mDjTtHbWWJqMfc4F
        subject_person_id: p_VuwfpMYNSF5mvNbz85tk89
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王原，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 504301）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IUqVyW0NkL-fXFfR1ZDPSA
          claim_id: c_goW218mDjTtHbWWJqMfc4F
          source_id: s_vWym2UzVRp9RQ2amTL6qAd
          stance: supports
          locator: CBDB:504301
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

# 王原

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王原 | accepted |
| bio.summary | 王原，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 504301） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王原（CBDB 504301）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=504301&o=json)
