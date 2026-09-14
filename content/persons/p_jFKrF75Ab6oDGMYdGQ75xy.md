---
schema: wang-person/v1
id: p_jFKrF75Ab6oDGMYdGQ75xy
status: active
merged_into: null
display_name: 王用賓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TR6kxfhX7QT2JJyLbf5h2L
        subject_person_id: p_jFKrF75Ab6oDGMYdGQ75xy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CrXvyNN8918ps5B3ssNS69
          claim_id: c_TR6kxfhX7QT2JJyLbf5h2L
          source_id: s_7WqaPDfBGQQ8KWqiwCAwDE
          stance: supports
          locator: CBDB:286981
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（286981）
          source: &a1
            id: s_7WqaPDfBGQQ8KWqiwCAwDE
            source_type: api_record
            title: 中国历代人物传记资料库：王用賓（CBDB 286981）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286981&o=json
            external_identifier: CBDB:286981
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.246Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_diApdC48FcGKzdb6i8iMwx
        subject_person_id: p_jFKrF75Ab6oDGMYdGQ75xy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用賓，明人物。永樂十年進士，籍贯棗陽。（中国历代人物传记资料库 CBDB 286981）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yxp4L8VdOlLaeV59htDL5v
          claim_id: c_diApdC48FcGKzdb6i8iMwx
          source_id: s_7WqaPDfBGQQ8KWqiwCAwDE
          stance: supports
          locator: CBDB:286981
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_z48dgNRWGAXIh61pOZJGfB
        subject_person_id: p_MvLt5zTAu6ziWoPGq84GN6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jFKrF75Ab6oDGMYdGQ75xy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SbETD5vZcnxoe5SqGTJJls
          claim_id: c_z48dgNRWGAXIh61pOZJGfB
          source_id: s_NczWw1d3MIYbu5ODR-RT3X
          stance: supports
          locator: CBDB：兄弟 王觀（202360）之父／母 王會
          quotation: null
          interpretation_note: 由兄弟关系推断：王用賓 与 王觀 为同胞（CBDB 记「兄」），王觀 之父／母即 王用賓 之父／母。
          source:
            id: s_NczWw1d3MIYbu5ODR-RT3X
            source_type: api_record
            title: 中国历代人物传记资料库：王用賓（CBDB 286981）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286981&o=json
            external_identifier: CBDB:286981
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MvLt5zTAu6ziWoPGq84GN6
        status: active
        display_name: 王會
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_e1e_1KX9x99NQZpCJ6bjWD
        subject_person_id: p_hnJsBrtLd1JZGUx5u8hGVs
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jFKrF75Ab6oDGMYdGQ75xy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YxuPRBDElQrUccq-XG9jmz
          claim_id: c_e1e_1KX9x99NQZpCJ6bjWD
          source_id: s_NczWw1d3MIYbu5ODR-RT3X
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202360 王觀）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NczWw1d3MIYbu5ODR-RT3X
            source_type: api_record
            title: 中国历代人物传记资料库：王用賓（CBDB 286981）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286981&o=json
            external_identifier: CBDB:286981
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hnJsBrtLd1JZGUx5u8hGVs
        status: active
        display_name: 王觀
        merged_into_person_id: null
---

# 王用賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用賓 | accepted |
| bio.summary | 王用賓，明人物。永樂十年進士，籍贯棗陽。（中国历代人物传记资料库 CBDB 286981） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MvLt5zTAu6ziWoPGq84GN6 | 王會 | accepted |
| other | p_hnJsBrtLd1JZGUx5u8hGVs | 王觀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王用賓（CBDB 286981）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286981&o=json)
