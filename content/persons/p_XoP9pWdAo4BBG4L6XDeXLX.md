---
schema: wang-person/v1
id: p_XoP9pWdAo4BBG4L6XDeXLX
status: active
merged_into: null
display_name: 王日增
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r6B77L9UVGiZhJe5d6GEZS
        subject_person_id: p_XoP9pWdAo4BBG4L6XDeXLX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日增
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PAoebyV38W1cALUSDAAM8E
          claim_id: c_r6B77L9UVGiZhJe5d6GEZS
          source_id: s_TkWMYfKzPd1nECyq6Y9MNJ
          stance: supports
          locator: CBDB:638331
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638331）
          source: &a1
            id: s_TkWMYfKzPd1nECyq6Y9MNJ
            source_type: api_record
            title: 中国历代人物传记资料库：王日增（CBDB 638331）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638331&o=json
            external_identifier: CBDB:638331
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.591Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UVkqri5S5HR9uiLHHNJbAY
        subject_person_id: p_XoP9pWdAo4BBG4L6XDeXLX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日增，清人物。籍贯睢州，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638331）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Je6O2nCCLUpmddFJ3ErsSA
          claim_id: c_UVkqri5S5HR9uiLHHNJbAY
          source_id: s_TkWMYfKzPd1nECyq6Y9MNJ
          stance: supports
          locator: CBDB:638331
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

# 王日增

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王日增 | accepted |
| bio.summary | 王日增，清人物。籍贯睢州，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638331） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王日增（CBDB 638331）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638331&o=json)
