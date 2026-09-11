---
schema: wang-person/v1
id: p_DF6kDajYY991HKy2kQ1noM
status: active
merged_into: null
display_name: 王麟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z8t2XLWiJsHkzjiXmPdLvz
        subject_person_id: p_DF6kDajYY991HKy2kQ1noM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TaHbF3arao3pUdxLW6Exu8
          claim_id: c_z8t2XLWiJsHkzjiXmPdLvz
          source_id: s_Q3x14uTU7cyeVNqpwCWY5Q
          stance: supports
          locator: CBDB:462333
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（462333）
          source: &a1
            id: s_Q3x14uTU7cyeVNqpwCWY5Q
            source_type: api_record
            title: 中国历代人物传记资料库：王麟（CBDB 462333）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462333&o=json
            external_identifier: CBDB:462333
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.842Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w2U7wFxzEh1jbKEUg5qSVx
        subject_person_id: p_DF6kDajYY991HKy2kQ1noM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟，清人物。曾任副將。（中国历代人物传记资料库 CBDB 462333）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0Q2V7pzY8ECRpRIimIIorW
          claim_id: c_w2U7wFxzEh1jbKEUg5qSVx
          source_id: s_Q3x14uTU7cyeVNqpwCWY5Q
          stance: supports
          locator: CBDB:462333
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

# 王麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王麟 | accepted |
| bio.summary | 王麟，清人物。曾任副將。（中国历代人物传记资料库 CBDB 462333） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王麟（CBDB 462333）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=462333&o=json)
