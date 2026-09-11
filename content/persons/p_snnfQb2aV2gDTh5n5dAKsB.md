---
schema: wang-person/v1
id: p_snnfQb2aV2gDTh5n5dAKsB
status: active
merged_into: null
display_name: 王俊曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BLFjuvkLYEqqMhbUCbbPGw
        subject_person_id: p_snnfQb2aV2gDTh5n5dAKsB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kjMDaWp8g38EkS48XB4o99
          claim_id: c_BLFjuvkLYEqqMhbUCbbPGw
          source_id: s_5pKG12gH89cpzcUCDEG9HY
          stance: supports
          locator: CBDB:636041
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636041）
          source: &a1
            id: s_5pKG12gH89cpzcUCDEG9HY
            source_type: api_record
            title: 中国历代人物传记资料库：王俊曾（CBDB 636041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636041&o=json
            external_identifier: CBDB:636041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.867Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jMBQPrvHJRM49hBBuFMhHB
        subject_person_id: p_snnfQb2aV2gDTh5n5dAKsB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊曾，清人物。籍贯輝縣，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636041）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_x571_xRxCjwr3fair4U3jH
          claim_id: c_jMBQPrvHJRM49hBBuFMhHB
          source_id: s_5pKG12gH89cpzcUCDEG9HY
          stance: supports
          locator: CBDB:636041
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王俊曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊曾 | accepted |
| bio.summary | 王俊曾，清人物。籍贯輝縣，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636041） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王俊曾（CBDB 636041）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636041&o=json)
