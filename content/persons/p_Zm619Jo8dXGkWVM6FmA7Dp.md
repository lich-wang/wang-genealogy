---
schema: wang-person/v1
id: p_Zm619Jo8dXGkWVM6FmA7Dp
status: active
merged_into: null
display_name: 王有年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_33bKkGh3QWSMqUnYB1tEPz
        subject_person_id: p_Zm619Jo8dXGkWVM6FmA7Dp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MLvs12ngF9g4SVM3TFGbf3
          claim_id: c_33bKkGh3QWSMqUnYB1tEPz
          source_id: s_696ENTJdknAJJu9mDL11aP
          stance: supports
          locator: CBDB:576157
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576157）
          source: &a1
            id: s_696ENTJdknAJJu9mDL11aP
            source_type: api_record
            title: 中国历代人物传记资料库：王有年（CBDB 576157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576157&o=json
            external_identifier: CBDB:576157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.952Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_raYzWJGd9ouWm8zTqXyq9H
        subject_person_id: p_Zm619Jo8dXGkWVM6FmA7Dp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有年，清人物。籍贯天津，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576157）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UEwkWB5FYjWh-PbIxGK4uk
          claim_id: c_raYzWJGd9ouWm8zTqXyq9H
          source_id: s_696ENTJdknAJJu9mDL11aP
          stance: supports
          locator: CBDB:576157
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

# 王有年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有年 | accepted |
| bio.summary | 王有年，清人物。籍贯天津，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576157） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王有年（CBDB 576157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576157&o=json)
