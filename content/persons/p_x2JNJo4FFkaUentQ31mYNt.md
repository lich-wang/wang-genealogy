---
schema: wang-person/v1
id: p_x2JNJo4FFkaUentQ31mYNt
status: active
merged_into: null
display_name: 王淮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R2Y4Eb9iJZ2QL7Gzk1eDeF
        subject_person_id: p_x2JNJo4FFkaUentQ31mYNt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nWNSxjEKEfNNH1eb19e8ye
          claim_id: c_R2Y4Eb9iJZ2QL7Gzk1eDeF
          source_id: s_FHsFG1CvBMYKHU3aoT5z36
          stance: supports
          locator: CBDB:456456
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（456456）
          source: &a1
            id: s_FHsFG1CvBMYKHU3aoT5z36
            source_type: api_record
            title: 中国历代人物传记资料库：王淮（CBDB 456456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456456&o=json
            external_identifier: CBDB:456456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.578Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kmG4Xeh3S71nW1bb8JHSPh
        subject_person_id: p_x2JNJo4FFkaUentQ31mYNt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淮，明人物。曾任參將。（中国历代人物传记资料库 CBDB 456456）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oV1iaEoW4_Lkg5WQ-6Mb6q
          claim_id: c_kmG4Xeh3S71nW1bb8JHSPh
          source_id: s_FHsFG1CvBMYKHU3aoT5z36
          stance: supports
          locator: CBDB:456456
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

# 王淮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淮 | accepted |
| bio.summary | 王淮，明人物。曾任參將。（中国历代人物传记资料库 CBDB 456456） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淮（CBDB 456456）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=456456&o=json)
