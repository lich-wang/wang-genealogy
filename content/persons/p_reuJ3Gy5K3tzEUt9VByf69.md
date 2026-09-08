---
schema: wang-person/v1
id: p_reuJ3Gy5K3tzEUt9VByf69
status: active
merged_into: null
display_name: 王理
cbdb_id: 232113
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Wbrdb4aLeuNGfgCdkcQoAL
        subject_person_id: p_reuJ3Gy5K3tzEUt9VByf69
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王理，明人物。CBDB 记录其曾任監察御史、知縣。中国历代人物传记资料库（CBDB）以人物编号 232113 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Vx42eZQLghfswX17ENX6yC
          claim_id: c_Wbrdb4aLeuNGfgCdkcQoAL
          source_id: s_c1k2mMQxS2K1rhz5KsbitG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_c1k2mMQxS2K1rhz5KsbitG
            source_type: api_record
            title: 维基数据：王理（Q45448352）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45448352
            external_identifier: Q45448352
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:18.752Z
            metadata_json: null
        - id: cs_BsEWwsS3IvM_wUzi-rCjiN
          claim_id: c_Wbrdb4aLeuNGfgCdkcQoAL
          source_id: s_jC7QVg7b9xMaKB5QAPhZP2
          stance: supports
          locator: CBDB:232113
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_jC7QVg7b9xMaKB5QAPhZP2
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王理（232113）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232113&o=json
            external_identifier: CBDB:232113
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:18.936Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_usbGBRmkJ7mNBkDJTCJsNA
        subject_person_id: p_reuJ3Gy5K3tzEUt9VByf69
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王理
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7tKatTSvtxKYAyH2uGc9z7
          claim_id: c_usbGBRmkJ7mNBkDJTCJsNA
          source_id: s_c1k2mMQxS2K1rhz5KsbitG
          stance: supports
          locator: Q45448352
          quotation: null
          interpretation_note: null
          source:
            id: s_c1k2mMQxS2K1rhz5KsbitG
            source_type: api_record
            title: 维基数据：王理（Q45448352）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45448352
            external_identifier: Q45448352
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:18.752Z
            metadata_json: null
        - id: cs_kzUTKf56t4Ed9QdS3MxCU4
          claim_id: c_usbGBRmkJ7mNBkDJTCJsNA
          source_id: s_jC7QVg7b9xMaKB5QAPhZP2
          stance: supports
          locator: Q45448352
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ngkWz582EVfMx4c8h8sDGE
        subject_person_id: p_GSmwJBLeFLbzGBorXyeZgE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_reuJ3Gy5K3tzEUt9VByf69
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XnGL7tJeadWcYHu8o5iRSd
          claim_id: c_ngkWz582EVfMx4c8h8sDGE
          source_id: s_c1k2mMQxS2K1rhz5KsbitG
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_GZui9hEY4hcuor5Xuk7xWR
          claim_id: c_ngkWz582EVfMx4c8h8sDGE
          source_id: s_iQg9CJRmeBebeQvY5eD82F
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_iQg9CJRmeBebeQvY5eD82F
            source_type: api_record
            title: 维基数据：王可旺（Q45448288）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45448288
            external_identifier: Q45448288
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_GSmwJBLeFLbzGBorXyeZgE
        status: active
        display_name: 王可旺
        merged_into_person_id: null
  children:
    - claim:
        id: c_iu6s5QWBeF2xcBFZ5HHdLV
        subject_person_id: p_reuJ3Gy5K3tzEUt9VByf69
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_38MrYsNYkPoBeMisQP7Sof
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kh2bSe5gJD8xckrQs3CpNj
          claim_id: c_iu6s5QWBeF2xcBFZ5HHdLV
          source_id: s_FdcsjYhgoT5aEMKGbVeF8a
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_FdcsjYhgoT5aEMKGbVeF8a
            source_type: api_record
            title: 维基数据：王经（Q45553378）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45553378
            external_identifier: Q45553378
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:13.205Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%B6%93_(%E5%BC%98%E6%B2%BB%E9%80%B2%E5%A3%AB)
        - id: cs_1nY5exnsx7k87Pvg9ggsT6
          claim_id: c_iu6s5QWBeF2xcBFZ5HHdLV
          source_id: s_c1k2mMQxS2K1rhz5KsbitG
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_38MrYsNYkPoBeMisQP7Sof
        status: active
        display_name: 王经
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王理

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王理，明人物。CBDB 记录其曾任監察御史、知縣。中国历代人物传记资料库（CBDB）以人物编号 232113 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王理 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GSmwJBLeFLbzGBorXyeZgE | 王可旺 | accepted |
| children | p_38MrYsNYkPoBeMisQP7Sof | 王经 | accepted |

## 外部来源

- [维基数据：王经（Q45553378）](https://www.wikidata.org/wiki/Q45553378)
- [维基数据：王可旺（Q45448288）](https://www.wikidata.org/wiki/Q45448288)
- [维基数据：王理（Q45448352）](https://www.wikidata.org/wiki/Q45448352)
- [CBDB 中国历代人物传记资料库：王理（232113）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232113&o=json)
