---
schema: wang-person/v1
id: p_BVWFGMKZ6mBRGgbJEUqY4P
status: active
merged_into: null
display_name: 王珪
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uGBXBGY2HsKhNqUK5M4Dhe
        subject_person_id: p_BVWFGMKZ6mBRGgbJEUqY4P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PMGbPpJu98ixuhgWJ8A1zX
          claim_id: c_uGBXBGY2HsKhNqUK5M4Dhe
          source_id: s_KZ1QFDN99EP1PnuFNHTXLe
          stance: supports
          locator: CBDB:241034
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241034）
          source: &a1
            id: s_KZ1QFDN99EP1PnuFNHTXLe
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 241034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241034&o=json
            external_identifier: CBDB:241034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.939Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GYQf3EojnBbbP34j7mAZwd
        subject_person_id: p_BVWFGMKZ6mBRGgbJEUqY4P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪，明人物。正統十三年進士，籍贯合州。（中国历代人物传记资料库 CBDB 241034）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RI9hRkIoFHeqQHpqermNi2
          claim_id: c_GYQf3EojnBbbP34j7mAZwd
          source_id: s_KZ1QFDN99EP1PnuFNHTXLe
          stance: supports
          locator: CBDB:241034
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qX4HvwwFjXD4C1wtFsdbwm
        subject_person_id: p_kaRFgEVMADyEpNGFyiYQu5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BVWFGMKZ6mBRGgbJEUqY4P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hPHkCua-kqpXkaKCBJB2_Z
          claim_id: c_qX4HvwwFjXD4C1wtFsdbwm
          source_id: s_tH4sfbyti33rX3za6pkEwy
          stance: supports
          locator: CBDB：兄弟 王璧（208145）之父／母 王汝義
          quotation: null
          interpretation_note: 由兄弟关系推断：王珪 与 王璧 为同胞（CBDB 记「兄」），王璧 之父／母即 王珪 之父／母。
          source:
            id: s_tH4sfbyti33rX3za6pkEwy
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 241034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241034&o=json
            external_identifier: CBDB:241034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kaRFgEVMADyEpNGFyiYQu5
        status: active
        display_name: 王汝義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_F8Rrjqh8X-DayJPVc5wnPg
        subject_person_id: p_BVWFGMKZ6mBRGgbJEUqY4P
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yUh5Ys3GsJr5X9EvLigP9m
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G251Stz-H3gwMXGooiguyY
          claim_id: c_F8Rrjqh8X-DayJPVc5wnPg
          source_id: s_tH4sfbyti33rX3za6pkEwy
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 208145 王璧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tH4sfbyti33rX3za6pkEwy
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 241034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241034&o=json
            external_identifier: CBDB:241034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yUh5Ys3GsJr5X9EvLigP9m
        status: active
        display_name: 王璧
        merged_into_person_id: null
---

# 王珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珪 | accepted |
| bio.summary | 王珪，明人物。正統十三年進士，籍贯合州。（中国历代人物传记资料库 CBDB 241034） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kaRFgEVMADyEpNGFyiYQu5 | 王汝義 | accepted |
| other | p_yUh5Ys3GsJr5X9EvLigP9m | 王璧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珪（CBDB 241034）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241034&o=json)
