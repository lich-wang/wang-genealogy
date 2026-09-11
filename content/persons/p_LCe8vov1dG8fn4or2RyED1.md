---
schema: wang-person/v1
id: p_LCe8vov1dG8fn4or2RyED1
status: active
merged_into: null
display_name: 趙氏
revision: 1
cbdb_id: 699441
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cb_Lfgh3TF8H1VuYYZulee
        subject_person_id: p_LCe8vov1dG8fn4or2RyED1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 趙氏，史料所见人物。本项目依据《中国历代人物传记资料库：趙氏(王習妻)（CBDB 699441）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_njyA84X_2nF52zMrbzmCT5
          claim_id: c_cb_Lfgh3TF8H1VuYYZulee
          source_id: s_JZbTuk2K4Yg_sWC4d2CwVD
          stance: supports
          locator: CBDB:699441
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_JZbTuk2K4Yg_sWC4d2CwVD
            source_type: api_record
            title: 中国历代人物传记资料库：趙氏(王習妻)（CBDB 699441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699441&o=json
            external_identifier: CBDB:699441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q1oTOwVOs78GgIDvgbUfRF
        subject_person_id: p_LCe8vov1dG8fn4or2RyED1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 趙氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yo3wjskBDrAwrArrhBQ729
          claim_id: c_Q1oTOwVOs78GgIDvgbUfRF
          source_id: s_JZbTuk2K4Yg_sWC4d2CwVD
          stance: supports
          locator: CBDB:699441
          quotation: null
          interpretation_note: CBDB 明确记录的王習配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_J9OOPlDrEJ1RLc00IgkH5j
        subject_person_id: p_kss91KaUX2qsiS3UfcBtty
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_LCe8vov1dG8fn4or2RyED1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a-yx3gVUtsF6Zng_lHX7MM
          claim_id: c_J9OOPlDrEJ1RLc00IgkH5j
          source_id: s_JZbTuk2K4Yg_sWC4d2CwVD
          stance: supports
          locator: CBDB 双向互证（妻子 趙氏(王習妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kss91KaUX2qsiS3UfcBtty
        status: active
        display_name: 王習
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 趙氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 趙氏，史料所见人物。本项目依据《中国历代人物传记资料库：趙氏(王習妻)（CBDB 699441）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 趙氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_kss91KaUX2qsiS3UfcBtty | 王習 | accepted |

## 外部来源

- [中国历代人物传记资料库：趙氏(王習妻)（CBDB 699441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699441&o=json)
