---
schema: wang-person/v1
id: p_47D2mfnLEm7cqCHqRLt6Cz
status: active
merged_into: null
display_name: 王利賓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LRcLB9QFkLMb4pgmMDrhGt
        subject_person_id: p_47D2mfnLEm7cqCHqRLt6Cz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王利賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FkAm84brsoJGVPPbC2PuL6
          claim_id: c_LRcLB9QFkLMb4pgmMDrhGt
          source_id: s_R8r6hNX7KEtdMu7KGRtz5K
          stance: supports
          locator: CBDB:286980
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（286980）
          source: &a1
            id: s_R8r6hNX7KEtdMu7KGRtz5K
            source_type: api_record
            title: 中国历代人物传记资料库：王利賓（CBDB 286980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286980&o=json
            external_identifier: CBDB:286980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.245Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KntJwKtFoE5ormFQfwVy3y
        subject_person_id: p_47D2mfnLEm7cqCHqRLt6Cz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王利賓，明人物。永樂十年進士，籍贯棗陽。（中国历代人物传记资料库 CBDB 286980）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eqogHHfFQp-2dd1uA6KjeH
          claim_id: c_KntJwKtFoE5ormFQfwVy3y
          source_id: s_R8r6hNX7KEtdMu7KGRtz5K
          stance: supports
          locator: CBDB:286980
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_hnJsBrtLd1JZGUx5u8hGVs
        status: active
        display_name: 王觀
        merged_into_person_id: null
---

# 王利賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王利賓 | accepted |
| bio.summary | 王利賓，明人物。永樂十年進士，籍贯棗陽。（中国历代人物传记资料库 CBDB 286980） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MvLt5zTAu6ziWoPGq84GN6 | 王會 | accepted |
| other | p_hnJsBrtLd1JZGUx5u8hGVs | 王觀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王利賓（CBDB 286980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286980&o=json)
