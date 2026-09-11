---
schema: wang-person/v1
id: p_zAxFUW226MfBhnKGmjqbtT
status: active
merged_into: null
display_name: 王萬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LQ5eEM7SzdsANUtjyUZPE8
        subject_person_id: p_zAxFUW226MfBhnKGmjqbtT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qp3hm83K18HHjxpPZXEQRd
          claim_id: c_LQ5eEM7SzdsANUtjyUZPE8
          source_id: s_NvQeskqssGwG8XmbywVs6Y
          stance: supports
          locator: CBDB:38996
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38996）
          source: &a1
            id: s_NvQeskqssGwG8XmbywVs6Y
            source_type: api_record
            title: 中国历代人物传记资料库：王萬（CBDB 38996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38996&o=json
            external_identifier: CBDB:38996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.581Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RoBWG13MpKDNcd7Js28qbD
        subject_person_id: p_zAxFUW226MfBhnKGmjqbtT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1196年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HNa5hLVgNGo7534TehXH4H
          claim_id: c_RoBWG13MpKDNcd7Js28qbD
          source_id: s_NvQeskqssGwG8XmbywVs6Y
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Xgo383CpxMptEoHcGutwDv
        subject_person_id: p_zAxFUW226MfBhnKGmjqbtT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1243年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_97F31phXBQPm2kauYDt7QP
          claim_id: c_Xgo383CpxMptEoHcGutwDv
          source_id: s_NvQeskqssGwG8XmbywVs6Y
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WSJggKwK7wvCGWLcfEb5BB
        subject_person_id: p_zAxFUW226MfBhnKGmjqbtT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬（1196年—1243年），宋人物。籍贯浦江，入仕進士，曾任監察御史、太常寺卿、太常寺少卿。（中国历代人物传记资料库 CBDB 38996）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oOhVTECaqJg9VWyq5xhaMi
          claim_id: c_WSJggKwK7wvCGWLcfEb5BB
          source_id: s_NvQeskqssGwG8XmbywVs6Y
          stance: supports
          locator: CBDB:38996
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

# 王萬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬 | accepted |
| birth.date | 1196年 | accepted |
| death.date | 1243年 | accepted |
| bio.summary | 王萬（1196年—1243年），宋人物。籍贯浦江，入仕進士，曾任監察御史、太常寺卿、太常寺少卿。（中国历代人物传记资料库 CBDB 38996） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萬（CBDB 38996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38996&o=json)
