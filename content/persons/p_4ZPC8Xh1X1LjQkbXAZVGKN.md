---
schema: wang-person/v1
id: p_4ZPC8Xh1X1LjQkbXAZVGKN
status: active
merged_into: null
display_name: 王恂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a5ux3AQ3L1aCc7d5UyFs9p
        subject_person_id: p_4ZPC8Xh1X1LjQkbXAZVGKN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qi9ECx4rQWg52xW6gAn1NQ
          claim_id: c_a5ux3AQ3L1aCc7d5UyFs9p
          source_id: s_BsqkCQAkeGvuXZ918jcU6k
          stance: supports
          locator: CBDB:551554
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551554）
          source: &a1
            id: s_BsqkCQAkeGvuXZ918jcU6k
            source_type: api_record
            title: 中国历代人物传记资料库：王恂（CBDB 551554）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551554&o=json
            external_identifier: CBDB:551554
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.610Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_CwdyE3Px2XKU23MtqABnv6
        subject_person_id: p_4ZPC8Xh1X1LjQkbXAZVGKN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1285年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BaRQ4Nz6ayojf1FgXPt72U
          claim_id: c_CwdyE3Px2XKU23MtqABnv6
          source_id: s_BsqkCQAkeGvuXZ918jcU6k
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
        id: c_7SR145XihKEbVD53pQWHMQ
        subject_person_id: p_4ZPC8Xh1X1LjQkbXAZVGKN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为高麗人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xJNJp9K6zndqt7bs8tCEo8
          claim_id: c_7SR145XihKEbVD53pQWHMQ
          source_id: s_BsqkCQAkeGvuXZ918jcU6k
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王恂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恂 | accepted |
| death.date | 1285年 | accepted |
| bio.summary | CBDB 记载为高麗人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恂（CBDB 551554）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551554&o=json)
