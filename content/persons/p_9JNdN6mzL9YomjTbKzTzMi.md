---
schema: wang-person/v1
id: p_9JNdN6mzL9YomjTbKzTzMi
status: active
merged_into: null
display_name: 王肯為
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VzQMDeoHRTVhX4sYd1oM5K
        subject_person_id: p_9JNdN6mzL9YomjTbKzTzMi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肯為
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YmVHwS1XqK1cCpKyh3AQEe
          claim_id: c_VzQMDeoHRTVhX4sYd1oM5K
          source_id: s_4UJ2JgC8Emt7dJnnd9TBmM
          stance: supports
          locator: CBDB:639992
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639992）
          source: &a1
            id: s_4UJ2JgC8Emt7dJnnd9TBmM
            source_type: api_record
            title: 中国历代人物传记资料库：王肯為（CBDB 639992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639992&o=json
            external_identifier: CBDB:639992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.115Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BAzjE8FeN95CbgWYaN7CEq
        subject_person_id: p_9JNdN6mzL9YomjTbKzTzMi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肯為，清人物。籍贯靈石，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知府。（中国历代人物传记资料库 CBDB 639992）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tI6AEvNNvIySn9pc-GidL3
          claim_id: c_BAzjE8FeN95CbgWYaN7CEq
          source_id: s_4UJ2JgC8Emt7dJnnd9TBmM
          stance: supports
          locator: CBDB:639992
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

# 王肯為

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肯為 | accepted |
| bio.summary | 王肯為，清人物。籍贯靈石，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知府。（中国历代人物传记资料库 CBDB 639992） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王肯為（CBDB 639992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639992&o=json)
