---
schema: wang-person/v1
id: p_jifb9cRXxZiRVkuzvrQhyj
status: active
merged_into: null
display_name: 王承憲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7jjd6NorDCyZWGfhMCQJmS
        subject_person_id: p_jifb9cRXxZiRVkuzvrQhyj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承憲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NsCaiep2MimH8FYisLjTsG
          claim_id: c_7jjd6NorDCyZWGfhMCQJmS
          source_id: s_2heQhbzW9qa6MJfWfAq2FN
          stance: supports
          locator: CBDB:126569
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126569）
          source: &a1
            id: s_2heQhbzW9qa6MJfWfAq2FN
            source_type: api_record
            title: 中国历代人物传记资料库：王承憲（CBDB 126569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126569&o=json
            external_identifier: CBDB:126569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.030Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EfKvqPdVBVxnEht4zbJpgN
        subject_person_id: p_jifb9cRXxZiRVkuzvrQhyj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承憲，明人物。籍贯楚雄衛，曾任衛指揮、遊擊將軍。（中国历代人物传记资料库 CBDB 126569）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bvYeGo-o2heAd6S35KJCKQ
          claim_id: c_EfKvqPdVBVxnEht4zbJpgN
          source_id: s_2heQhbzW9qa6MJfWfAq2FN
          stance: supports
          locator: CBDB:126569
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

# 王承憲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承憲 | accepted |
| bio.summary | 王承憲，明人物。籍贯楚雄衛，曾任衛指揮、遊擊將軍。（中国历代人物传记资料库 CBDB 126569） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承憲（CBDB 126569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126569&o=json)
