---
schema: wang-person/v1
id: p_ACi8NzyjV71EbFtqW3ywKg
status: active
merged_into: null
display_name: 王敦厚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1i84G2jDjc74DqKWGxaTLy
        subject_person_id: p_ACi8NzyjV71EbFtqW3ywKg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敦厚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LBc3AL5hvmLU9r74J7Ruf6
          claim_id: c_1i84G2jDjc74DqKWGxaTLy
          source_id: s_D1FkwdB46wQnf9JJ4UZDD4
          stance: supports
          locator: CBDB:638181
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638181）
          source: &a1
            id: s_D1FkwdB46wQnf9JJ4UZDD4
            source_type: api_record
            title: 中国历代人物传记资料库：王敦厚（CBDB 638181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638181&o=json
            external_identifier: CBDB:638181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.553Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M4iT1wM3FBDf7sAYuKDEb4
        subject_person_id: p_ACi8NzyjV71EbFtqW3ywKg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敦厚，清人物。籍贯寧夏，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 638181）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5_-xBI4xcIYrlJ9_LvriJ5
          claim_id: c_M4iT1wM3FBDf7sAYuKDEb4
          source_id: s_D1FkwdB46wQnf9JJ4UZDD4
          stance: supports
          locator: CBDB:638181
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

# 王敦厚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敦厚 | accepted |
| bio.summary | 王敦厚，清人物。籍贯寧夏，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 638181） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敦厚（CBDB 638181）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638181&o=json)
