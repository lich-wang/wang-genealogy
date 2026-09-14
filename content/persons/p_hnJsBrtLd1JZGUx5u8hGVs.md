---
schema: wang-person/v1
id: p_hnJsBrtLd1JZGUx5u8hGVs
status: active
merged_into: null
display_name: 王觀
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9k92yERjgEA2YTL1nPjWvx
        subject_person_id: p_hnJsBrtLd1JZGUx5u8hGVs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fMXjcMYxCkGEe3Q9cbV4Ra
          claim_id: c_9k92yERjgEA2YTL1nPjWvx
          source_id: s_DyobPWShM5Z4DDtDfanG4o
          stance: supports
          locator: CBDB:202360
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202360）
          source: &a1
            id: s_DyobPWShM5Z4DDtDfanG4o
            source_type: api_record
            title: 中国历代人物传记资料库：王觀（CBDB 202360）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202360&o=json
            external_identifier: CBDB:202360
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.738Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_hp8X2j8x9JK2VJsMcBMZRU
        subject_person_id: p_hnJsBrtLd1JZGUx5u8hGVs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1384年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MRyYZVkgjvHqEuMY8PxTn6
          claim_id: c_hp8X2j8x9JK2VJsMcBMZRU
          source_id: s_DyobPWShM5Z4DDtDfanG4o
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ksBemLyVN4PKtBUE43XwZ8
        subject_person_id: p_hnJsBrtLd1JZGUx5u8hGVs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀（生于1384年），明人物。明清進士進士，籍贯棗陽，入仕進士。（中国历代人物传记资料库 CBDB 202360）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oJyyQLTHjXny6d2Wsr_Yzz
          claim_id: c_ksBemLyVN4PKtBUE43XwZ8
          source_id: s_DyobPWShM5Z4DDtDfanG4o
          stance: supports
          locator: CBDB:202360
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_MvLt5zTAu6ziWoPGq84GN6
        status: active
        display_name: 王會
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_mZvlvzBSd4rojuQ94Y2IPO
        subject_person_id: p_eGGnfg1ytnKUPpRW58feMs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hnJsBrtLd1JZGUx5u8hGVs
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cy080p7YypE8abpOztxDqX
          claim_id: c_mZvlvzBSd4rojuQ94Y2IPO
          source_id: s_7Jb3UAhaq4AmBbRPxtsXx8
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第二十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7Jb3UAhaq4AmBbRPxtsXx8
            source_type: api_record
            title: 中国历代人物传记资料库：王順（CBDB 286975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286975&o=json
            external_identifier: CBDB:286975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.244Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eGGnfg1ytnKUPpRW58feMs
        status: active
        display_name: 王順
        merged_into_person_id: null
    - claim:
        id: c_CjT-QQVvVUhCtDRHDW-hXX
        subject_person_id: p_hugF54dY3ZL4EvueXh2puD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hnJsBrtLd1JZGUx5u8hGVs
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wAe9raLaZds4oGgDZyI_V5
          claim_id: c_CjT-QQVvVUhCtDRHDW-hXX
          source_id: s_83Hs2b3y8487KQJBwQxr77
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第二十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_83Hs2b3y8487KQJBwQxr77
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 286976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286976&o=json
            external_identifier: CBDB:286976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.244Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hugF54dY3ZL4EvueXh2puD
        status: active
        display_name: 王敬
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_vaBKVIk8F_HX_qNiOHj3rO
        subject_person_id: p_47D2mfnLEm7cqCHqRLt6Cz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hnJsBrtLd1JZGUx5u8hGVs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CL_bOMyJ-kIKqEI6b7ltD5
          claim_id: c_vaBKVIk8F_HX_qNiOHj3rO
          source_id: s_BZMOMuzikla4vwBZPzRBeh
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202360 王觀）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: p_jFKrF75Ab6oDGMYdGQ75xy
        status: active
        display_name: 王用賓
        merged_into_person_id: null
---

# 王觀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王觀 | accepted |
| birth.date | 1384年 | accepted |
| bio.summary | 王觀（生于1384年），明人物。明清進士進士，籍贯棗陽，入仕進士。（中国历代人物传记资料库 CBDB 202360） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MvLt5zTAu6ziWoPGq84GN6 | 王會 | accepted |
| ancestors | p_eGGnfg1ytnKUPpRW58feMs | 王順 | accepted |
| ancestors | p_hugF54dY3ZL4EvueXh2puD | 王敬 | accepted |
| other | p_47D2mfnLEm7cqCHqRLt6Cz | 王利賓 | accepted |
| other | p_jFKrF75Ab6oDGMYdGQ75xy | 王用賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王觀（CBDB 202360）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202360&o=json)
- [中国历代人物传记资料库：王會（CBDB 286977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286977&o=json)
- [中国历代人物传记资料库：王敬（CBDB 286976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286976&o=json)
- [中国历代人物传记资料库：王利賓（CBDB 286980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286980&o=json)
- [中国历代人物传记资料库：王順（CBDB 286975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286975&o=json)
- [中国历代人物传记资料库：王用賓（CBDB 286981）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286981&o=json)
