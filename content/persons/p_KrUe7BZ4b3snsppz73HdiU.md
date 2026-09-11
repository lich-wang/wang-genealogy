---
schema: wang-person/v1
id: p_KrUe7BZ4b3snsppz73HdiU
status: active
merged_into: null
display_name: 王曾禮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gHFDTf82yaKK5WFnFRDUaf
        subject_person_id: p_KrUe7BZ4b3snsppz73HdiU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曾禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8F6ynNFPurQcFk7ETD3s4r
          claim_id: c_gHFDTf82yaKK5WFnFRDUaf
          source_id: s_x2RjvShpPoVNDWjSbfGeW8
          stance: supports
          locator: CBDB:638560
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638560）
          source: &a1
            id: s_x2RjvShpPoVNDWjSbfGeW8
            source_type: api_record
            title: 中国历代人物传记资料库：王曾禮（CBDB 638560）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638560&o=json
            external_identifier: CBDB:638560
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.673Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7eAPMFYRJFrwETpM2wezMt
        subject_person_id: p_KrUe7BZ4b3snsppz73HdiU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曾禮，清人物。籍贯甯都直隸州甯都直隸州前鋪，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 638560）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_I8i1LJmzW5r5iJY87Y0YoU
          claim_id: c_7eAPMFYRJFrwETpM2wezMt
          source_id: s_x2RjvShpPoVNDWjSbfGeW8
          stance: supports
          locator: CBDB:638560
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

# 王曾禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曾禮 | accepted |
| bio.summary | 王曾禮，清人物。籍贯甯都直隸州甯都直隸州前鋪，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 638560） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王曾禮（CBDB 638560）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638560&o=json)
