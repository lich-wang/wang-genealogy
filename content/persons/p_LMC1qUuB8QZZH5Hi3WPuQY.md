---
schema: wang-person/v1
id: p_LMC1qUuB8QZZH5Hi3WPuQY
status: active
merged_into: null
display_name: 王蔭槐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NXafYYy3N2xCipJNj8pUpk
        subject_person_id: p_LMC1qUuB8QZZH5Hi3WPuQY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蔭槐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jNS1Dxypiu16vhxtESmgaQ
          claim_id: c_NXafYYy3N2xCipJNj8pUpk
          source_id: s_6Ks7imgCmGHRfVcXQiTVSq
          stance: supports
          locator: CBDB:71851
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71851）
          source: &a1
            id: s_6Ks7imgCmGHRfVcXQiTVSq
            source_type: api_record
            title: 中国历代人物传记资料库：王蔭槐（CBDB 71851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71851&o=json
            external_identifier: CBDB:71851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.899Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qkcB8pSQ4QkGoWn3DFBy4v
        subject_person_id: p_LMC1qUuB8QZZH5Hi3WPuQY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1851年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FAtEdyeiDUuj1oUTAnEfQk
          claim_id: c_qkcB8pSQ4QkGoWn3DFBy4v
          source_id: s_6Ks7imgCmGHRfVcXQiTVSq
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FeyAa5YTBdC5Qy43gSpUNP
        subject_person_id: p_LMC1qUuB8QZZH5Hi3WPuQY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蔭槐（生于1851年），清人物。籍贯威遠。（中国历代人物传记资料库 CBDB 71851）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TxExULL4HOIDWb4yyTtlVe
          claim_id: c_FeyAa5YTBdC5Qy43gSpUNP
          source_id: s_6Ks7imgCmGHRfVcXQiTVSq
          stance: supports
          locator: CBDB:71851
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

# 王蔭槐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蔭槐 | accepted |
| birth.date | 1851年 | accepted |
| bio.summary | 王蔭槐（生于1851年），清人物。籍贯威遠。（中国历代人物传记资料库 CBDB 71851） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蔭槐（CBDB 71851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71851&o=json)
