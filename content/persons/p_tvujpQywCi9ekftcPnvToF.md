---
schema: wang-person/v1
id: p_tvujpQywCi9ekftcPnvToF
status: active
merged_into: null
display_name: 王瀆
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mJQWPb5AyCuDfxkmqSswec
        subject_person_id: p_tvujpQywCi9ekftcPnvToF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8fZ5MKogTKMn4C9vgFQAG9
          claim_id: c_mJQWPb5AyCuDfxkmqSswec
          source_id: s_wAATLhhjP8EHuPEXPwg3Lo
          stance: supports
          locator: CBDB:22157
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22157）
          source: &a1
            id: s_wAATLhhjP8EHuPEXPwg3Lo
            source_type: api_record
            title: 中国历代人物传记资料库：王瀆（CBDB 22157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22157&o=json
            external_identifier: CBDB:22157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.839Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Hs2B7zJPxLknucE5JsRXps
        subject_person_id: p_tvujpQywCi9ekftcPnvToF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀆，宋人物。籍贯長安。（中国历代人物传记资料库 CBDB 22157）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XD5d_TjEK7MI_r69QnxJkC
          claim_id: c_Hs2B7zJPxLknucE5JsRXps
          source_id: s_wAATLhhjP8EHuPEXPwg3Lo
          stance: supports
          locator: CBDB:22157
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_z_YRK3ciLmiKNhX0dD4sR2
        subject_person_id: p_sZrzsD25P9qzbgJ8x84rcH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tvujpQywCi9ekftcPnvToF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9x_9ugUe6e9OKouP9sOEsp
          claim_id: c_z_YRK3ciLmiKNhX0dD4sR2
          source_id: s_8XLiqX4MSsF81isCnY87ef
          stance: supports
          locator: CBDB 双向互证（子 王瀆 ⇄ 父 王識）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_8XLiqX4MSsF81isCnY87ef
            source_type: api_record
            title: 中国历代人物传记资料库：王識（CBDB 22156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22156&o=json
            external_identifier: CBDB:22156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.838Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_sZrzsD25P9qzbgJ8x84rcH
        status: active
        display_name: 王識
        merged_into_person_id: null
  children:
    - claim:
        id: c_dyeVezKas8V76AmN00kpUy
        subject_person_id: p_tvujpQywCi9ekftcPnvToF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_igVFetcsD35N9WwgT4pLmG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hfpYgvlwTvT4UGjXj8ydpT
          claim_id: c_dyeVezKas8V76AmN00kpUy
          source_id: s_wh3ePp54c1hM1u9haYiJxg
          stance: supports
          locator: CBDB 双向互证（父 王瀆 ⇄ 子 王紳）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_wh3ePp54c1hM1u9haYiJxg
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 3975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3975&o=json
            external_identifier: CBDB:3975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.439Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_igVFetcsD35N9WwgT4pLmG
        status: active
        display_name: 王紳
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瀆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瀆 | accepted |
| bio.summary | 王瀆，宋人物。籍贯長安。（中国历代人物传记资料库 CBDB 22157） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sZrzsD25P9qzbgJ8x84rcH | 王識 | accepted |
| children | p_igVFetcsD35N9WwgT4pLmG | 王紳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瀆（CBDB 22157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22157&o=json)
- [中国历代人物传记资料库：王紳（CBDB 3975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3975&o=json)
- [中国历代人物传记资料库：王識（CBDB 22156）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22156&o=json)
