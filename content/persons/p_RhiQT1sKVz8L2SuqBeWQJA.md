---
schema: wang-person/v1
id: p_RhiQT1sKVz8L2SuqBeWQJA
status: active
merged_into: null
display_name: 王晉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QpMyfm37Myb7cxtGonyvaH
        subject_person_id: p_RhiQT1sKVz8L2SuqBeWQJA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zeGWhpoM2TerQLfJYkzx2D
          claim_id: c_QpMyfm37Myb7cxtGonyvaH
          source_id: s_x1pJinhk7Z7aVDhLJ39Fed
          stance: supports
          locator: CBDB:498236
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（498236）
          source: &a1
            id: s_x1pJinhk7Z7aVDhLJ39Fed
            source_type: api_record
            title: 中国历代人物传记资料库：王晉（CBDB 498236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=498236&o=json
            external_identifier: CBDB:498236
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.690Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g1jSm8H7BvP6V8TCeNRf27
        subject_person_id: p_RhiQT1sKVz8L2SuqBeWQJA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉，清人物。入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 498236）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xDtwHn5KlyMW6J50z2C4cp
          claim_id: c_g1jSm8H7BvP6V8TCeNRf27
          source_id: s_x1pJinhk7Z7aVDhLJ39Fed
          stance: supports
          locator: CBDB:498236
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

# 王晉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晉 | accepted |
| bio.summary | 王晉，清人物。入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 498236） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晉（CBDB 498236）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=498236&o=json)
