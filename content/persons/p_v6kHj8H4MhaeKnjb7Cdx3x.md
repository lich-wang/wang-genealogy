---
schema: wang-person/v1
id: p_v6kHj8H4MhaeKnjb7Cdx3x
status: active
merged_into: null
display_name: 王鑑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_S94ByQQ2zgFFmCRUuMLXDG
        subject_person_id: p_v6kHj8H4MhaeKnjb7Cdx3x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AyuTC2MH7x94jbKUhLGV65
          claim_id: c_S94ByQQ2zgFFmCRUuMLXDG
          source_id: s_uAhzJo38kyHxdXaeVxuJ5X
          stance: supports
          locator: CBDB:290441
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（290441）
          source: &a1
            id: s_uAhzJo38kyHxdXaeVxuJ5X
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 290441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290441&o=json
            external_identifier: CBDB:290441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.335Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RLEZH452WPieHJqgtNB7Xi
        subject_person_id: p_v6kHj8H4MhaeKnjb7Cdx3x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑，明人物。嘉靖八年進士，曾任壽官。（中国历代人物传记资料库 CBDB 290441）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Af9np6G9AxWO91NfebMWM_
          claim_id: c_RLEZH452WPieHJqgtNB7Xi
          source_id: s_uAhzJo38kyHxdXaeVxuJ5X
          stance: supports
          locator: CBDB:290441
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
  descendants:
    - claim:
        id: c_4On22WAvJOlkhEJe5sjpMQ
        subject_person_id: p_v6kHj8H4MhaeKnjb7Cdx3x
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_y3ij6WeUEcKDgNeZS3dMHo
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3t87xu0HxkQdBJarTlo1JT
          claim_id: c_4On22WAvJOlkhEJe5sjpMQ
          source_id: s_uAhzJo38kyHxdXaeVxuJ5X
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第二百零二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_y3ij6WeUEcKDgNeZS3dMHo
        status: active
        display_name: 王祚
        merged_into_person_id: null
  other: []
---

# 王鑑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑑 | accepted |
| bio.summary | 王鑑，明人物。嘉靖八年進士，曾任壽官。（中国历代人物传记资料库 CBDB 290441） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_y3ij6WeUEcKDgNeZS3dMHo | 王祚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑑（CBDB 290441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290441&o=json)
