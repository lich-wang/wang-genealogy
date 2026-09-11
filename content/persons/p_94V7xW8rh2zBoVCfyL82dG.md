---
schema: wang-person/v1
id: p_94V7xW8rh2zBoVCfyL82dG
status: active
merged_into: null
display_name: 王三重
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ouUgDcFZS4TZThSWxEdas7
        subject_person_id: p_94V7xW8rh2zBoVCfyL82dG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三重
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YfeFYz9W6u2J1cA1SuLRqv
          claim_id: c_ouUgDcFZS4TZThSWxEdas7
          source_id: s_Y4usM3BHN1KM2zKazsAeFi
          stance: supports
          locator: CBDB:509856
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（509856）
          source: &a1
            id: s_Y4usM3BHN1KM2zKazsAeFi
            source_type: api_record
            title: 中国历代人物传记资料库：王三重（CBDB 509856）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509856&o=json
            external_identifier: CBDB:509856
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.181Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fMKUPMUkz75DmTdCP6tCgi
        subject_person_id: p_94V7xW8rh2zBoVCfyL82dG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三重，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 509856）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_smq1LdpUBz-H0adRV3WWaL
          claim_id: c_fMKUPMUkz75DmTdCP6tCgi
          source_id: s_Y4usM3BHN1KM2zKazsAeFi
          stance: supports
          locator: CBDB:509856
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

# 王三重

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三重 | accepted |
| bio.summary | 王三重，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 509856） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三重（CBDB 509856）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509856&o=json)
