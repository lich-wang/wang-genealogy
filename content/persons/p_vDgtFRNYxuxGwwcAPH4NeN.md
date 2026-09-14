---
schema: wang-person/v1
id: p_vDgtFRNYxuxGwwcAPH4NeN
status: active
merged_into: null
display_name: 王繼
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_42c2TWioD6iH9gMBPYmawc
        subject_person_id: p_vDgtFRNYxuxGwwcAPH4NeN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oniZ7qwXk6hDnG1u1nbtB9
          claim_id: c_42c2TWioD6iH9gMBPYmawc
          source_id: s_RkYxDgQ7bX2RRphJ58VJEJ
          stance: supports
          locator: CBDB:314478
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（314478）
          source: &a1
            id: s_RkYxDgQ7bX2RRphJ58VJEJ
            source_type: api_record
            title: 中国历代人物传记资料库：王繼（CBDB 314478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314478&o=json
            external_identifier: CBDB:314478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.928Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SSXgqLtuBaHEo8yeNQxUFk
        subject_person_id: p_vDgtFRNYxuxGwwcAPH4NeN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼，明人物。嘉靖二十九年進士，籍贯蒙城，曾任壽官。（中国历代人物传记资料库 CBDB 314478）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hWAo2NNC2a7YYVCi4wRGL8
          claim_id: c_SSXgqLtuBaHEo8yeNQxUFk
          source_id: s_RkYxDgQ7bX2RRphJ58VJEJ
          stance: supports
          locator: CBDB:314478
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_iIlKtm2fR0TNEPXXD0V93l
        subject_person_id: p_vDgtFRNYxuxGwwcAPH4NeN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ukJ2qr82oEuCTM4WYW3F7J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_raUkica93QdA3WbBnwigSt
          claim_id: c_iIlKtm2fR0TNEPXXD0V93l
          source_id: s_RkYxDgQ7bX2RRphJ58VJEJ
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百八十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ukJ2qr82oEuCTM4WYW3F7J
        status: active
        display_name: 王文翰
        merged_into_person_id: null
    - claim:
        id: c_Svtdczd61rb5TfX7j2gkvz
        subject_person_id: p_vDgtFRNYxuxGwwcAPH4NeN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6UgmescXfbbBRdbEZSjX5d
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xoWL6KS1nHmwNlIWCVngJk
          claim_id: c_Svtdczd61rb5TfX7j2gkvz
          source_id: s_2x0eoR7kNVdLFQTa14LvuT
          stance: supports
          locator: CBDB：兄弟 王文翰（204105）之父／母 王繼
          quotation: null
          interpretation_note: 由兄弟关系推断：王文華 与 王文翰 为同胞（CBDB 记「弟」），王文翰 之父／母即 王文華 之父／母。
          source:
            id: s_2x0eoR7kNVdLFQTa14LvuT
            source_type: api_record
            title: 中国历代人物传记资料库：王文華（CBDB 314486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314486&o=json
            external_identifier: CBDB:314486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6UgmescXfbbBRdbEZSjX5d
        status: active
        display_name: 王文華
        merged_into_person_id: null
    - claim:
        id: c__vgc8RrmolOyD7uxaep6eM
        subject_person_id: p_vDgtFRNYxuxGwwcAPH4NeN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fbm1nnS7D3rk8g2aY9pykX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CAb9Zk8t_XUSg2TxBFnkuI
          claim_id: c__vgc8RrmolOyD7uxaep6eM
          source_id: s_QoGtNYlKGLBftfR3qwE5Nv
          stance: supports
          locator: CBDB：兄弟 王文翰（204105）之父／母 王繼
          quotation: null
          interpretation_note: 由兄弟关系推断：王文宣 与 王文翰 为同胞（CBDB 记「弟」），王文翰 之父／母即 王文宣 之父／母。
          source:
            id: s_QoGtNYlKGLBftfR3qwE5Nv
            source_type: api_record
            title: 中国历代人物传记资料库：王文宣（CBDB 314483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314483&o=json
            external_identifier: CBDB:314483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fbm1nnS7D3rk8g2aY9pykX
        status: active
        display_name: 王文宣
        merged_into_person_id: null
    - claim:
        id: c_W6y3lLfw8ZtHMEo5eduLxz
        subject_person_id: p_vDgtFRNYxuxGwwcAPH4NeN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kWzhWb3Nuj81n5vgmHJdDD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b2t3SpIri73dQlgUXG3iQW
          claim_id: c_W6y3lLfw8ZtHMEo5eduLxz
          source_id: s_rSRllFbpE3vWNEGXIfCcvK
          stance: supports
          locator: CBDB：兄弟 王文翰（204105）之父／母 王繼
          quotation: null
          interpretation_note: 由兄弟关系推断：王文宗 与 王文翰 为同胞（CBDB 记「弟」），王文翰 之父／母即 王文宗 之父／母。
          source:
            id: s_rSRllFbpE3vWNEGXIfCcvK
            source_type: api_record
            title: 中国历代人物传记资料库：王文宗（CBDB 314482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314482&o=json
            external_identifier: CBDB:314482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kWzhWb3Nuj81n5vgmHJdDD
        status: active
        display_name: 王文宗
        merged_into_person_id: null
    - claim:
        id: c_VRjED0ToOfIrr-kv7t1WAH
        subject_person_id: p_vDgtFRNYxuxGwwcAPH4NeN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wxnRoaVPFW8NVuD7PYEjHn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YAdreKIbWJDsFnbxU-KBlU
          claim_id: c_VRjED0ToOfIrr-kv7t1WAH
          source_id: s_BZcn5zeAFT4_WaOXP6ntyW
          stance: supports
          locator: CBDB：兄弟 王文翰（204105）之父／母 王繼
          quotation: null
          interpretation_note: 由兄弟关系推断：王文榮 与 王文翰 为同胞（CBDB 记「弟」），王文翰 之父／母即 王文榮 之父／母。
          source:
            id: s_BZcn5zeAFT4_WaOXP6ntyW
            source_type: api_record
            title: 中国历代人物传记资料库：王文榮（CBDB 314485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314485&o=json
            external_identifier: CBDB:314485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wxnRoaVPFW8NVuD7PYEjHn
        status: active
        display_name: 王文榮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王繼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼 | accepted |
| bio.summary | 王繼，明人物。嘉靖二十九年進士，籍贯蒙城，曾任壽官。（中国历代人物传记资料库 CBDB 314478） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ukJ2qr82oEuCTM4WYW3F7J | 王文翰 | accepted |
| children | p_6UgmescXfbbBRdbEZSjX5d | 王文華 | accepted |
| children | p_fbm1nnS7D3rk8g2aY9pykX | 王文宣 | accepted |
| children | p_kWzhWb3Nuj81n5vgmHJdDD | 王文宗 | accepted |
| children | p_wxnRoaVPFW8NVuD7PYEjHn | 王文榮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼（CBDB 314478）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314478&o=json)
- [中国历代人物传记资料库：王文華（CBDB 314486）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314486&o=json)
- [中国历代人物传记资料库：王文榮（CBDB 314485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314485&o=json)
- [中国历代人物传记资料库：王文宣（CBDB 314483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314483&o=json)
- [中国历代人物传记资料库：王文宗（CBDB 314482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314482&o=json)
