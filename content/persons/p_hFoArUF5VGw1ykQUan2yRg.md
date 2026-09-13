---
schema: wang-person/v1
id: p_hFoArUF5VGw1ykQUan2yRg
status: active
merged_into: null
display_name: 王公塗
cbdb_id: 35527
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Kt5J6mHyz2K2K9G72LW8Cf
        subject_person_id: p_hFoArUF5VGw1ykQUan2yRg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公塗，元人物。籍贯廬陵。（中国历代人物传记资料库 CBDB 35527）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_JRbJKuBVq2bzGyW6tB79lu
          claim_id: c_Kt5J6mHyz2K2K9G72LW8Cf
          source_id: s_tSEQenEL2iQwqLw9FpPi6C
          stance: supports
          locator: CBDB:35527
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_tSEQenEL2iQwqLw9FpPi6C
            source_type: api_record
            title: 中国历代人物传记资料库：王公塗（CBDB 35527）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35527&o=json
            external_identifier: CBDB:35527
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_S8LpT3BezRgFoZTYENBoTY
        subject_person_id: p_hFoArUF5VGw1ykQUan2yRg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公塗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Ex8PMDUBH2gNZato93QjMa
          claim_id: c_S8LpT3BezRgFoZTYENBoTY
          source_id: s_tSEQenEL2iQwqLw9FpPi6C
          stance: supports
          locator: CBDB:35527
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 元
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_33ujoNdsS_FPL8YwVeIhQy
        subject_person_id: p_RhfG4NQKEkamwYKu1ke55x
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hFoArUF5VGw1ykQUan2yRg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_su4-OiWM75rsl2m0EPgaz4
          claim_id: c_33ujoNdsS_FPL8YwVeIhQy
          source_id: s_7JLgPNhLeQp9wJQ9RgLqQR
          stance: supports
          locator: CBDB 双向互证（子 王公塗 ⇄ 父 王維翰）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_7JLgPNhLeQp9wJQ9RgLqQR
            source_type: api_record
            title: 中国历代人物传记资料库：王維翰（CBDB 35528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35528&o=json
            external_identifier: CBDB:35528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.140Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_RhfG4NQKEkamwYKu1ke55x
        status: active
        display_name: 王維翰
        merged_into_person_id: null
  children:
    - claim:
        id: c_q7TSfuIiMffPoKPrG7amCH
        subject_person_id: p_hFoArUF5VGw1ykQUan2yRg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6VfyaJrbVtLEDBvH7EiLTz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yPQuf2PahvWEbOL_ctnjYl
          claim_id: c_q7TSfuIiMffPoKPrG7amCH
          source_id: s_F1TcqvGHdYzK17GykP5oga
          stance: supports
          locator: CBDB 双向互证（父 王公塗 ⇄ 子 王斯覺）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_F1TcqvGHdYzK17GykP5oga
            source_type: api_record
            title: 中国历代人物传记资料库：王斯覺（CBDB 35516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35516&o=json
            external_identifier: CBDB:35516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:05.401Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_6VfyaJrbVtLEDBvH7EiLTz
        status: active
        display_name: 王斯覺
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王公塗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王公塗，元人物。籍贯廬陵。（中国历代人物传记资料库 CBDB 35527） | accepted |
| name.primary | 王公塗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RhfG4NQKEkamwYKu1ke55x | 王維翰 | accepted |
| children | p_6VfyaJrbVtLEDBvH7EiLTz | 王斯覺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公塗（CBDB 35527）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35527&o=json)
- [中国历代人物传记资料库：王斯覺（CBDB 35516）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35516&o=json)
- [中国历代人物传记资料库：王維翰（CBDB 35528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35528&o=json)
