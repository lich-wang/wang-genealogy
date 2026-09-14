---
schema: wang-person/v1
id: p_MvLt5zTAu6ziWoPGq84GN6
status: active
merged_into: null
display_name: 王會
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8cHi6Sk11U3XScP1JttPvA
        subject_person_id: p_MvLt5zTAu6ziWoPGq84GN6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3tvRKN1ZGTXXKjFisa89To
          claim_id: c_8cHi6Sk11U3XScP1JttPvA
          source_id: s_WwEQ9J424LKr894LGGAaM3
          stance: supports
          locator: CBDB:286977
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（286977）
          source: &a1
            id: s_WwEQ9J424LKr894LGGAaM3
            source_type: api_record
            title: 中国历代人物传记资料库：王會（CBDB 286977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286977&o=json
            external_identifier: CBDB:286977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.245Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wGvzQ65FEGAFXrTT4dByQU
        subject_person_id: p_MvLt5zTAu6ziWoPGq84GN6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會，明人物。永樂十年進士，籍贯棗陽。（中国历代人物传记资料库 CBDB 286977）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LH7Azr8wTwnaKmqrNiNiwk
          claim_id: c_wGvzQ65FEGAFXrTT4dByQU
          source_id: s_WwEQ9J424LKr894LGGAaM3
          stance: supports
          locator: CBDB:286977
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_7K48Qeoo-KLcY0v8pkT8ka
        subject_person_id: p_MvLt5zTAu6ziWoPGq84GN6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hnJsBrtLd1JZGUx5u8hGVs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VHkDbYOkI-saMBx0BKnu-Y
          claim_id: c_7K48Qeoo-KLcY0v8pkT8ka
          source_id: s_WwEQ9J424LKr894LGGAaM3
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第二十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hnJsBrtLd1JZGUx5u8hGVs
        status: active
        display_name: 王觀
        merged_into_person_id: null
    - claim:
        id: c_lCGnMk-gWPZ18wHRj8lTwt
        subject_person_id: p_MvLt5zTAu6ziWoPGq84GN6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_47D2mfnLEm7cqCHqRLt6Cz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OfShlr6p8ThY79_Hr5UfZW
          claim_id: c_lCGnMk-gWPZ18wHRj8lTwt
          source_id: s_BZMOMuzikla4vwBZPzRBeh
          stance: supports
          locator: CBDB：兄弟 王觀（202360）之父／母 王會
          quotation: null
          interpretation_note: 由兄弟关系推断：王利賓 与 王觀 为同胞（CBDB 记「兄」），王觀 之父／母即 王利賓 之父／母。
          source:
            id: s_BZMOMuzikla4vwBZPzRBeh
            source_type: api_record
            title: 中国历代人物传记资料库：王利賓（CBDB 286980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286980&o=json
            external_identifier: CBDB:286980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_47D2mfnLEm7cqCHqRLt6Cz
        status: active
        display_name: 王利賓
        merged_into_person_id: null
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
        id: p_jFKrF75Ab6oDGMYdGQ75xy
        status: active
        display_name: 王用賓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王會

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王會 | accepted |
| bio.summary | 王會，明人物。永樂十年進士，籍贯棗陽。（中国历代人物传记资料库 CBDB 286977） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_hnJsBrtLd1JZGUx5u8hGVs | 王觀 | accepted |
| children | p_47D2mfnLEm7cqCHqRLt6Cz | 王利賓 | accepted |
| children | p_jFKrF75Ab6oDGMYdGQ75xy | 王用賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王會（CBDB 286977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286977&o=json)
- [中国历代人物传记资料库：王利賓（CBDB 286980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286980&o=json)
- [中国历代人物传记资料库：王用賓（CBDB 286981）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286981&o=json)
