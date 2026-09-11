---
schema: wang-person/v1
id: p_MidTUhibT32K4Xg5RL8sUj
status: active
merged_into: null
display_name: 王承謙
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AEvLLQJvtEYSYmcUwTSBG9
        subject_person_id: p_MidTUhibT32K4Xg5RL8sUj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wDw9eSpci3SQB7HFknWSLv
          claim_id: c_AEvLLQJvtEYSYmcUwTSBG9
          source_id: s_6EKufrocPKs7r3i2jn8X8W
          stance: supports
          locator: CBDB:21273
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（21273）
          source: &a1
            id: s_6EKufrocPKs7r3i2jn8X8W
            source_type: api_record
            title: 中国历代人物传记资料库：王承謙（CBDB 21273）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21273&o=json
            external_identifier: CBDB:21273
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.767Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yZDWYZn3ncuB2qpCKsHehA
        subject_person_id: p_MidTUhibT32K4Xg5RL8sUj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承謙，宋人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 21273）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_I2Kc_bvnm10pHNNicGMIG9
          claim_id: c_yZDWYZn3ncuB2qpCKsHehA
          source_id: s_6EKufrocPKs7r3i2jn8X8W
          stance: supports
          locator: CBDB:21273
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_l-8_3pbLf2xlo_rVrDEcEX
        subject_person_id: p_3nkdRNwXhSrvEF75CZoPMw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MidTUhibT32K4Xg5RL8sUj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_37l2fbqZPxjfXoJifWj1LQ
          claim_id: c_l-8_3pbLf2xlo_rVrDEcEX
          source_id: s_oUY55k1UJtMUGpWGGzFsAz
          stance: supports
          locator: CBDB 双向互证（子 王承謙 ⇄ 父 王演）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_oUY55k1UJtMUGpWGGzFsAz
            source_type: api_record
            title: 中国历代人物传记资料库：王演（CBDB 21272）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21272&o=json
            external_identifier: CBDB:21272
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.767Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3nkdRNwXhSrvEF75CZoPMw
        status: active
        display_name: 王演
        merged_into_person_id: null
  children:
    - claim:
        id: c_okFn8Jk1azTtCKgMfDd_0R
        subject_person_id: p_MidTUhibT32K4Xg5RL8sUj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zVd6FHzFDzdLE8BP6H1zrd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CsuXqalodCm4SRcONMfXFV
          claim_id: c_okFn8Jk1azTtCKgMfDd_0R
          source_id: s_6EKufrocPKs7r3i2jn8X8W
          stance: supports
          locator: CBDB 双向互证（子 王利 ⇄ 父 王承謙）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_zVd6FHzFDzdLE8BP6H1zrd
        status: active
        display_name: 王利
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王承謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承謙 | accepted |
| bio.summary | 王承謙，宋人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 21273） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3nkdRNwXhSrvEF75CZoPMw | 王演 | accepted |
| children | p_zVd6FHzFDzdLE8BP6H1zrd | 王利 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承謙（CBDB 21273）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21273&o=json)
- [中国历代人物传记资料库：王演（CBDB 21272）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21272&o=json)
