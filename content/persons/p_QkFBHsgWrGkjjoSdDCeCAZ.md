---
schema: wang-person/v1
id: p_QkFBHsgWrGkjjoSdDCeCAZ
status: active
merged_into: null
display_name: 王鈵
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E5in7XeNJFKCYvY7gg5faT
        subject_person_id: p_QkFBHsgWrGkjjoSdDCeCAZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a1TCPFbVqFa3tgtJE56ryz
          claim_id: c_E5in7XeNJFKCYvY7gg5faT
          source_id: s_xhpAAsCDfdMFrUgibBKmB9
          stance: supports
          locator: CBDB:558208
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（558208）
          source: &a1
            id: s_xhpAAsCDfdMFrUgibBKmB9
            source_type: api_record
            title: 中国历代人物传记资料库：王鈵（CBDB 558208）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558208&o=json
            external_identifier: CBDB:558208
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.544Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jWML8xiNccS5HPJ14nK3Pc
        subject_person_id: p_QkFBHsgWrGkjjoSdDCeCAZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鈵，清人物。籍贯新野。（中国历代人物传记资料库 CBDB 558208）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UdGxHZkJhY7qaq2exm6bXZ
          claim_id: c_jWML8xiNccS5HPJ14nK3Pc
          source_id: s_xhpAAsCDfdMFrUgibBKmB9
          stance: supports
          locator: CBDB:558208
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZTmnOuI8wMYXVKCcmXk00s
        subject_person_id: p_h3CXNojG2YSiYzwGfbYd94
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QkFBHsgWrGkjjoSdDCeCAZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gAn90afhcoc1poVsgVNwRu
          claim_id: c_ZTmnOuI8wMYXVKCcmXk00s
          source_id: s_pjbohRmn14AmGLZYLtFdvM
          stance: supports
          locator: 南陽府志，lgid=878826：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pjbohRmn14AmGLZYLtFdvM
            source_type: api_record
            title: 中国历代人物传记资料库：王開基（CBDB 558202）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558202&o=json
            external_identifier: CBDB:558202
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.693Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_h3CXNojG2YSiYzwGfbYd94
        status: active
        display_name: 王開基
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鈵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鈵 | accepted |
| bio.summary | 王鈵，清人物。籍贯新野。（中国历代人物传记资料库 CBDB 558208） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_h3CXNojG2YSiYzwGfbYd94 | 王開基 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鈵（CBDB 558208）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558208&o=json)
- [中国历代人物传记资料库：王開基（CBDB 558202）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558202&o=json)
