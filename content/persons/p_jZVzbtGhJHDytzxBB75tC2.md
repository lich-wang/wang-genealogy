---
schema: wang-person/v1
id: p_jZVzbtGhJHDytzxBB75tC2
status: active
merged_into: null
display_name: 王寶
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DXz2g7q1Kbx8jZkA2aRiwC
        subject_person_id: p_jZVzbtGhJHDytzxBB75tC2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c6iPPPMPFJwyeWbNuiZz3w
          claim_id: c_DXz2g7q1Kbx8jZkA2aRiwC
          source_id: s_QJkho9yGgixu64AM99rDfY
          stance: supports
          locator: CBDB:331071
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（331071）
          source: &a1
            id: s_QJkho9yGgixu64AM99rDfY
            source_type: api_record
            title: 中国历代人物传记资料库：王寶（CBDB 331071）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331071&o=json
            external_identifier: CBDB:331071
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.359Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_riCrjNqnYoHhTTybyGXBgE
        subject_person_id: p_jZVzbtGhJHDytzxBB75tC2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶，明人物。嘉靖四十四年進士，籍贯南豐。（中国历代人物传记资料库 CBDB 331071）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rw0HTjv3K0jDRrnUbTDwSW
          claim_id: c_riCrjNqnYoHhTTybyGXBgE
          source_id: s_QJkho9yGgixu64AM99rDfY
          stance: supports
          locator: CBDB:331071
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-109cvE3JY93HnH5tIZqWR
        subject_person_id: p_GfRo7ojPV7D16XBUWZ7Rwa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jZVzbtGhJHDytzxBB75tC2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aT3D9JMhGoktJB0XZWoYXY
          claim_id: c_-109cvE3JY93HnH5tIZqWR
          source_id: s_oN5KP1AgDZf7zp_RGyEmLI
          stance: supports
          locator: CBDB：兄弟 王璽（126871）之父／母 王紹
          quotation: null
          interpretation_note: 由兄弟关系推断：王寶 与 王璽 为同胞（CBDB 记「兄」），王璽 之父／母即 王寶 之父／母。
          source:
            id: s_oN5KP1AgDZf7zp_RGyEmLI
            source_type: api_record
            title: 中国历代人物传记资料库：王寶（CBDB 331071）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331071&o=json
            external_identifier: CBDB:331071
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GfRo7ojPV7D16XBUWZ7Rwa
        status: active
        display_name: 王紹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_noDzOj35qr6kMARTPz4Rr5
        subject_person_id: p_jZVzbtGhJHDytzxBB75tC2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_o84m9e1kQDV1djF1562w8T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uH1G6Hvy6QrNAC3uTHpnyY
          claim_id: c_noDzOj35qr6kMARTPz4Rr5
          source_id: s_oN5KP1AgDZf7zp_RGyEmLI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126871 王璽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oN5KP1AgDZf7zp_RGyEmLI
            source_type: api_record
            title: 中国历代人物传记资料库：王寶（CBDB 331071）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331071&o=json
            external_identifier: CBDB:331071
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_o84m9e1kQDV1djF1562w8T
        status: active
        display_name: 王璽
        merged_into_person_id: null
---

# 王寶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寶 | accepted |
| bio.summary | 王寶，明人物。嘉靖四十四年進士，籍贯南豐。（中国历代人物传记资料库 CBDB 331071） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GfRo7ojPV7D16XBUWZ7Rwa | 王紹 | accepted |
| other | p_o84m9e1kQDV1djF1562w8T | 王璽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寶（CBDB 331071）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331071&o=json)
