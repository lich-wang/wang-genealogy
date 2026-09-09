---
schema: wang-person/v1
id: p_6FXtUzrtWCGD1G1d2zTUQy
status: active
merged_into: null
display_name: 王弘之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pRx5qmYBnAQ597Bm6ZTJpo
        subject_person_id: p_6FXtUzrtWCGD1G1d2zTUQy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9TrM8c8gbPN9uMtn5a2ar6
          claim_id: c_pRx5qmYBnAQ597Bm6ZTJpo
          source_id: s_KMxr1H7VL632tkqCT3jr7D
          stance: supports
          locator: CBDB:414504
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（414504）
          source: &a1
            id: s_KMxr1H7VL632tkqCT3jr7D
            source_type: api_record
            title: 中国历代人物传记资料库：王弘之（CBDB 414504）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414504&o=json
            external_identifier: CBDB:414504
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FuQE7tLFGuL9g27ey5rTNt
        subject_person_id: p_6FXtUzrtWCGD1G1d2zTUQy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为西晉人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5JstP3q6JPhbr3Zmi1Yeuf
          claim_id: c_FuQE7tLFGuL9g27ey5rTNt
          source_id: s_KMxr1H7VL632tkqCT3jr7D
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

# 王弘之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弘之 | accepted |
| bio.summary | CBDB 记载为西晉人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弘之（CBDB 414504）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414504&o=json)
