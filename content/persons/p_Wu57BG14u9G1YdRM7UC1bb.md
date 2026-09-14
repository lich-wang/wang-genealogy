---
schema: wang-person/v1
id: p_Wu57BG14u9G1YdRM7UC1bb
status: active
merged_into: null
display_name: 王尚
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3EDNMPYwXDuaRWv7tkGahv
        subject_person_id: p_Wu57BG14u9G1YdRM7UC1bb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pAgVLvP6GwMV5k16YCQ45K
          claim_id: c_3EDNMPYwXDuaRWv7tkGahv
          source_id: s_qzZ7PHaX5fB1YCQn2ehaS7
          stance: supports
          locator: CBDB:305349
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（305349）
          source: &a1
            id: s_qzZ7PHaX5fB1YCQn2ehaS7
            source_type: api_record
            title: 中国历代人物传记资料库：王尚（CBDB 305349）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305349&o=json
            external_identifier: CBDB:305349
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.739Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8gjBmoa3w4pEsSyp2sTW5M
        subject_person_id: p_Wu57BG14u9G1YdRM7UC1bb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚，明人物。嘉靖二十三年進士，籍贯歙縣。（中国历代人物传记资料库 CBDB 305349）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MniXE11ojiKhSz7kV986ky
          claim_id: c_8gjBmoa3w4pEsSyp2sTW5M
          source_id: s_qzZ7PHaX5fB1YCQn2ehaS7
          stance: supports
          locator: CBDB:305349
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_OjBMsPjXBIsu8pJPOSnk_x
        subject_person_id: p_Wu57BG14u9G1YdRM7UC1bb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1w2vyLJVVJajHeDaWVG8Nu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lypBeqNDQKTik3Eccet7nw
          claim_id: c_OjBMsPjXBIsu8pJPOSnk_x
          source_id: s_5CpgTmQ25hsyBcSqVn7Epz
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5CpgTmQ25hsyBcSqVn7Epz
            source_type: api_record
            title: 中国历代人物传记资料库：王之臣（CBDB 203483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203483&o=json
            external_identifier: CBDB:203483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.789Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1w2vyLJVVJajHeDaWVG8Nu
        status: active
        display_name: 王之臣
        merged_into_person_id: null
    - claim:
        id: c_7UrI89oJe8Qb4HQeTbsWuJ
        subject_person_id: p_Wu57BG14u9G1YdRM7UC1bb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EnTLB6WECUZGsyXR39jx7T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FJ97WxveA_-9Dnb8giZaiA
          claim_id: c_7UrI89oJe8Qb4HQeTbsWuJ
          source_id: s_x3ASsSxEnQgqmcv7h-FPIY
          stance: supports
          locator: CBDB：兄弟 王之臣（203483）之父／母 王尚
          quotation: null
          interpretation_note: 由兄弟关系推断：王伯壽 与 王之臣 为同胞（CBDB 记「弟」），王之臣 之父／母即 王伯壽 之父／母。
          source:
            id: s_x3ASsSxEnQgqmcv7h-FPIY
            source_type: api_record
            title: 中国历代人物传记资料库：王伯壽（CBDB 305353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305353&o=json
            external_identifier: CBDB:305353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EnTLB6WECUZGsyXR39jx7T
        status: active
        display_name: 王伯壽
        merged_into_person_id: null
    - claim:
        id: c_uYnyx_5QMxviYpQyKau917
        subject_person_id: p_Wu57BG14u9G1YdRM7UC1bb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i6KqpQkkMiCQtbQJwhMqBc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HT65iiKYy0HvV6-__xvBom
          claim_id: c_uYnyx_5QMxviYpQyKau917
          source_id: s_i9WpXTuAFhoEVEyH2g9pkL
          stance: supports
          locator: CBDB：兄弟 王之臣（203483）之父／母 王尚
          quotation: null
          interpretation_note: 由兄弟关系推断：王之子 与 王之臣 为同胞（CBDB 记「兄」），王之臣 之父／母即 王之子 之父／母。
          source:
            id: s_i9WpXTuAFhoEVEyH2g9pkL
            source_type: api_record
            title: 中国历代人物传记资料库：王之子（CBDB 305354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305354&o=json
            external_identifier: CBDB:305354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_i6KqpQkkMiCQtbQJwhMqBc
        status: active
        display_name: 王之子
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王尚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚 | accepted |
| bio.summary | 王尚，明人物。嘉靖二十三年進士，籍贯歙縣。（中国历代人物传记资料库 CBDB 305349） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_1w2vyLJVVJajHeDaWVG8Nu | 王之臣 | accepted |
| children | p_EnTLB6WECUZGsyXR39jx7T | 王伯壽 | accepted |
| children | p_i6KqpQkkMiCQtbQJwhMqBc | 王之子 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯壽（CBDB 305353）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305353&o=json)
- [中国历代人物传记资料库：王尚（CBDB 305349）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305349&o=json)
- [中国历代人物传记资料库：王之臣（CBDB 203483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203483&o=json)
- [中国历代人物传记资料库：王之子（CBDB 305354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305354&o=json)
