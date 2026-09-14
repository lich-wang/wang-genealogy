---
schema: wang-person/v1
id: p_v5Zg5veSk3WFL4Q7CvgAYw
status: active
merged_into: null
display_name: 王翊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LZixrNHujyuZhHzND7B7Ej
        subject_person_id: p_v5Zg5veSk3WFL4Q7CvgAYw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aiwH5GZd2C8UoxbvMni35R
          claim_id: c_LZixrNHujyuZhHzND7B7Ej
          source_id: s_PxWrSSCdkcS6QEQr11GEbb
          stance: supports
          locator: CBDB:252362
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（252362）
          source: &a1
            id: s_PxWrSSCdkcS6QEQr11GEbb
            source_type: api_record
            title: 中国历代人物传记资料库：王翊（CBDB 252362）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252362&o=json
            external_identifier: CBDB:252362
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.266Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WG7ZPf8BsxhU5RuHhJ26zC
        subject_person_id: p_v5Zg5veSk3WFL4Q7CvgAYw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翊，明人物。成化十四年進士，籍贯華亭。（中国历代人物传记资料库 CBDB 252362）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZkLmrZpkpcDbcYtcYJoJoV
          claim_id: c_WG7ZPf8BsxhU5RuHhJ26zC
          source_id: s_PxWrSSCdkcS6QEQr11GEbb
          stance: supports
          locator: CBDB:252362
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UKi2d9Wpnk73kywwR2mVLb
        subject_person_id: p_xG6Uatb4hvJpHFBwk8TY1u
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_v5Zg5veSk3WFL4Q7CvgAYw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8o09QlhyZYaLuDkS5WR78s
          claim_id: c_UKi2d9Wpnk73kywwR2mVLb
          source_id: s_liIQ6WdSf7f2ZVrb085G6K
          stance: supports
          locator: CBDB：兄弟 王屏（199995）之父／母 王祐
          quotation: null
          interpretation_note: 由兄弟关系推断：王翊 与 王屏 为同胞（CBDB 记「兄」），王屏 之父／母即 王翊 之父／母。
          source:
            id: s_liIQ6WdSf7f2ZVrb085G6K
            source_type: api_record
            title: 中国历代人物传记资料库：王翊（CBDB 252362）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252362&o=json
            external_identifier: CBDB:252362
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xG6Uatb4hvJpHFBwk8TY1u
        status: active
        display_name: 王祐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_yyMUIfFsMSO_GN-_p0SDHL
        subject_person_id: p_3BqLdv5ornEQLqdPoknpXE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_v5Zg5veSk3WFL4Q7CvgAYw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mmUpdtZKJAIujCGcdtU23o
          claim_id: c_yyMUIfFsMSO_GN-_p0SDHL
          source_id: s_liIQ6WdSf7f2ZVrb085G6K
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199995 王屏）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_liIQ6WdSf7f2ZVrb085G6K
            source_type: api_record
            title: 中国历代人物传记资料库：王翊（CBDB 252362）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252362&o=json
            external_identifier: CBDB:252362
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3BqLdv5ornEQLqdPoknpXE
        status: active
        display_name: 王屏
        merged_into_person_id: null
---

# 王翊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翊 | accepted |
| bio.summary | 王翊，明人物。成化十四年進士，籍贯華亭。（中国历代人物传记资料库 CBDB 252362） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xG6Uatb4hvJpHFBwk8TY1u | 王祐 | accepted |
| other | p_3BqLdv5ornEQLqdPoknpXE | 王屏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翊（CBDB 252362）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252362&o=json)
