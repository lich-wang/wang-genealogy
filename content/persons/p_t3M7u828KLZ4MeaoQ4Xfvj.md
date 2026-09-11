---
schema: wang-person/v1
id: p_t3M7u828KLZ4MeaoQ4Xfvj
status: active
merged_into: null
display_name: 王興宗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_je4G5uNyNqTFuFwrkYBp2r
        subject_person_id: p_t3M7u828KLZ4MeaoQ4Xfvj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JVYjm3V3DGVyFcqW8zWH5j
          claim_id: c_je4G5uNyNqTFuFwrkYBp2r
          source_id: s_6oW7YLW3MB6joZVbwsmSkC
          stance: supports
          locator: CBDB:101439
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101439）
          source: &a1
            id: s_6oW7YLW3MB6joZVbwsmSkC
            source_type: api_record
            title: 中国历代人物传记资料库：王興宗（CBDB 101439）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101439&o=json
            external_identifier: CBDB:101439
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.847Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PbWN7SyyRQSyBiYAvswwd2
        subject_person_id: p_t3M7u828KLZ4MeaoQ4Xfvj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1249年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aYm18nYZPzzoyZVd8GqiYK
          claim_id: c_PbWN7SyyRQSyBiYAvswwd2
          source_id: s_6oW7YLW3MB6joZVbwsmSkC
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
        id: c_KgE1pmsaH3uZsWFoDcAx5b
        subject_person_id: p_t3M7u828KLZ4MeaoQ4Xfvj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1295年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DgXHz6Vh8m2ExrdLnJkBVr
          claim_id: c_KgE1pmsaH3uZsWFoDcAx5b
          source_id: s_6oW7YLW3MB6joZVbwsmSkC
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
        id: c_jEnxQEDz8Euy4G5cZNZwA5
        subject_person_id: p_t3M7u828KLZ4MeaoQ4Xfvj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興宗（1249年—1295年），元人物。籍贯恩州，入仕薦舉 (保任,保舉)，曾任路儒學正。（中国历代人物传记资料库 CBDB 101439）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JQX84pvwq-Ig0MFiWGoh1S
          claim_id: c_jEnxQEDz8Euy4G5cZNZwA5
          source_id: s_6oW7YLW3MB6joZVbwsmSkC
          stance: supports
          locator: CBDB:101439
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

# 王興宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王興宗 | accepted |
| birth.date | 1249年 | accepted |
| death.date | 1295年 | accepted |
| bio.summary | 王興宗（1249年—1295年），元人物。籍贯恩州，入仕薦舉 (保任,保舉)，曾任路儒學正。（中国历代人物传记资料库 CBDB 101439） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王興宗（CBDB 101439）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101439&o=json)
