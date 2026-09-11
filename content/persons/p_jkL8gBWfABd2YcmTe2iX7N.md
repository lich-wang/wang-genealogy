---
schema: wang-person/v1
id: p_jkL8gBWfABd2YcmTe2iX7N
status: active
merged_into: null
display_name: 王陽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GfmJrASvMkJDMEkuesGD94
        subject_person_id: p_jkL8gBWfABd2YcmTe2iX7N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nByBe4F2roz8Sa9uZnDuM7
          claim_id: c_GfmJrASvMkJDMEkuesGD94
          source_id: s_ufa6FGyErHC974Ct6nSQVh
          stance: supports
          locator: CBDB:25002
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（25002）
          source: &a1
            id: s_ufa6FGyErHC974Ct6nSQVh
            source_type: api_record
            title: 中国历代人物传记资料库：王陽（CBDB 25002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25002&o=json
            external_identifier: CBDB:25002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.902Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5ZFmLQjbQRtYVhpS1Q6VBQ
        subject_person_id: p_jkL8gBWfABd2YcmTe2iX7N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陽，宋人物。身份为結社、入元祐黨籍者。（中国历代人物传记资料库 CBDB 25002）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Tv2UzaSqwBV9ww9_G_6_vO
          claim_id: c_5ZFmLQjbQRtYVhpS1Q6VBQ
          source_id: s_ufa6FGyErHC974Ct6nSQVh
          stance: supports
          locator: CBDB:25002
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

# 王陽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王陽 | accepted |
| bio.summary | 王陽，宋人物。身份为結社、入元祐黨籍者。（中国历代人物传记资料库 CBDB 25002） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王陽（CBDB 25002）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25002&o=json)
