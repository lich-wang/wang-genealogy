---
schema: wang-person/v1
id: p_JoUTGL4n4qhMBq1p3jeu5d
status: active
merged_into: null
display_name: 王家遇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XmEaPzwPFRgkbRosDkZDDC
        subject_person_id: p_JoUTGL4n4qhMBq1p3jeu5d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家遇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h9YHSZe7QYtfnk571E1tFp
          claim_id: c_XmEaPzwPFRgkbRosDkZDDC
          source_id: s_Nn9yH22VJYpRy8MUc9TR7i
          stance: supports
          locator: CBDB:574996
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574996）
          source: &a1
            id: s_Nn9yH22VJYpRy8MUc9TR7i
            source_type: api_record
            title: 中国历代人物传记资料库：王家遇（CBDB 574996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574996&o=json
            external_identifier: CBDB:574996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.689Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jw6NeR9gWbdDZzWHy7yVLS
        subject_person_id: p_JoUTGL4n4qhMBq1p3jeu5d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家遇，清人物。籍贯監利，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任訓導。（中国历代人物传记资料库 CBDB 574996）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SK2_jcr-53YO8IuduA8q1E
          claim_id: c_jw6NeR9gWbdDZzWHy7yVLS
          source_id: s_Nn9yH22VJYpRy8MUc9TR7i
          stance: supports
          locator: CBDB:574996
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

# 王家遇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家遇 | accepted |
| bio.summary | 王家遇，清人物。籍贯監利，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任訓導。（中国历代人物传记资料库 CBDB 574996） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家遇（CBDB 574996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574996&o=json)
