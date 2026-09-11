---
schema: wang-person/v1
id: p_g5bi22C4Ho2YzmRhDdv7VD
status: active
merged_into: null
display_name: 王謨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6JLk9nY4zMkdq6FxTa9ALN
        subject_person_id: p_g5bi22C4Ho2YzmRhDdv7VD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C8VGieR65j6qMJfm9nYFvJ
          claim_id: c_6JLk9nY4zMkdq6FxTa9ALN
          source_id: s_v3CFpkR9rwdMMfRgsgT5xc
          stance: supports
          locator: CBDB:313218
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313218）
          source: &a1
            id: s_v3CFpkR9rwdMMfRgsgT5xc
            source_type: api_record
            title: 中国历代人物传记资料库：王謨（CBDB 313218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313218&o=json
            external_identifier: CBDB:313218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.902Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t5u82rP43GWM9tfjkqQG2D
        subject_person_id: p_g5bi22C4Ho2YzmRhDdv7VD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謨，明人物。天順四年進士，籍贯江陰。（中国历代人物传记资料库 CBDB 313218）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CNm5TDJr8wNj7-nZ3rKOXb
          claim_id: c_t5u82rP43GWM9tfjkqQG2D
          source_id: s_v3CFpkR9rwdMMfRgsgT5xc
          stance: supports
          locator: CBDB:313218
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

# 王謨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謨 | accepted |
| bio.summary | 王謨，明人物。天順四年進士，籍贯江陰。（中国历代人物传记资料库 CBDB 313218） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王謨（CBDB 313218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313218&o=json)
