---
schema: wang-person/v1
id: p_xKhBiXSv99m8MhpcWpPyAb
status: active
merged_into: null
display_name: 王益之
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JCUxdQM7khCHtQiPN3yAGU
        subject_person_id: p_xKhBiXSv99m8MhpcWpPyAb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZqBBee3NZ9xRwVeL9i1EBG
          claim_id: c_JCUxdQM7khCHtQiPN3yAGU
          source_id: s_tTbgEeawN3GxB7MZUHVnLK
          stance: supports
          locator: CBDB:134044
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（134044）
          source: &a1
            id: s_tTbgEeawN3GxB7MZUHVnLK
            source_type: api_record
            title: 中国历代人物传记资料库：王益之（CBDB 134044）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134044&o=json
            external_identifier: CBDB:134044
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.300Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rMooMAWaXzm58x6wiMAwSE
        subject_person_id: p_xKhBiXSv99m8MhpcWpPyAb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益之，宋人物。籍贯義烏。（中国历代人物传记资料库 CBDB 134044）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AT20Gdnk-bvvN8XOAFS1FB
          claim_id: c_rMooMAWaXzm58x6wiMAwSE
          source_id: s_tTbgEeawN3GxB7MZUHVnLK
          stance: supports
          locator: CBDB:134044
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Kf8OMuxJs0F-s-IRu1XXBX
        subject_person_id: p_xKhBiXSv99m8MhpcWpPyAb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QLSeisJK24cmFFxc6B9i4K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AffTw_XtQZf8fanf8VAzOy
          claim_id: c_Kf8OMuxJs0F-s-IRu1XXBX
          source_id: s_tTbgEeawN3GxB7MZUHVnLK
          stance: supports
          locator: 宋濂全集，1195：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QLSeisJK24cmFFxc6B9i4K
        status: active
        display_name: 王文繼
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_X1zJkRUw5dmxm1ni7l1Sso
        subject_person_id: p_xKhBiXSv99m8MhpcWpPyAb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gwVUKjMQycQaZ6UR2zvJFs
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tzVZmnP4tu6sHAAY1etTMC
          claim_id: c_X1zJkRUw5dmxm1ni7l1Sso
          source_id: s_oBoM5ZPjLx797LqUayBpbH
          stance: supports
          locator: 宋濂全集，1195：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oBoM5ZPjLx797LqUayBpbH
            source_type: api_record
            title: 中国历代人物传记资料库：王順（CBDB 100852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100852&o=json
            external_identifier: CBDB:100852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.508Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gwVUKjMQycQaZ6UR2zvJFs
        status: active
        display_name: 王順
        merged_into_person_id: null
    - claim:
        id: c_w9kWnxUXGLd1Ab3RB2HajO
        subject_person_id: p_xKhBiXSv99m8MhpcWpPyAb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_E8y1MAzoBqFq8m9SnmCiAn
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ICaevntTdAklq-uRGqPl-P
          claim_id: c_w9kWnxUXGLd1Ab3RB2HajO
          source_id: s_tTbgEeawN3GxB7MZUHVnLK
          stance: supports
          locator: 宋濂全集，1195：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_E8y1MAzoBqFq8m9SnmCiAn
        status: active
        display_name: 王棲
        merged_into_person_id: null
  other: []
---

# 王益之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王益之 | accepted |
| bio.summary | 王益之，宋人物。籍贯義烏。（中国历代人物传记资料库 CBDB 134044） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_QLSeisJK24cmFFxc6B9i4K | 王文繼 | accepted |
| descendants | p_gwVUKjMQycQaZ6UR2zvJFs | 王順 | accepted |
| descendants | p_E8y1MAzoBqFq8m9SnmCiAn | 王棲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王順（CBDB 100852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100852&o=json)
- [中国历代人物传记资料库：王益之（CBDB 134044）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134044&o=json)
