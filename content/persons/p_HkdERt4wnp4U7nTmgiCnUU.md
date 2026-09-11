---
schema: wang-person/v1
id: p_HkdERt4wnp4U7nTmgiCnUU
status: active
merged_into: null
display_name: 王紹緒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H2mvF25g4BvkYdCi1MmCHZ
        subject_person_id: p_HkdERt4wnp4U7nTmgiCnUU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹緒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j9dmNfEYDMfPzSucn8EvMd
          claim_id: c_H2mvF25g4BvkYdCi1MmCHZ
          source_id: s_RP9gYKoxpnszWnttuG9eL5
          stance: supports
          locator: CBDB:71838
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71838）
          source: &a1
            id: s_RP9gYKoxpnszWnttuG9eL5
            source_type: api_record
            title: 中国历代人物传记资料库：王紹緒（CBDB 71838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71838&o=json
            external_identifier: CBDB:71838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.893Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PwhR5Wob5frxUFM1TfJxbU
        subject_person_id: p_HkdERt4wnp4U7nTmgiCnUU
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1731年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zxQqZKnc5cdV3tUvDrgWYF
          claim_id: c_PwhR5Wob5frxUFM1TfJxbU
          source_id: s_RP9gYKoxpnszWnttuG9eL5
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
        id: c_TSMutosf9ZECGY5CsheWBs
        subject_person_id: p_HkdERt4wnp4U7nTmgiCnUU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹緒（生于1731年），清人物。籍贯高密。（中国历代人物传记资料库 CBDB 71838）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2Jkv1SnPj-QutqG1WwEwBV
          claim_id: c_TSMutosf9ZECGY5CsheWBs
          source_id: s_RP9gYKoxpnszWnttuG9eL5
          stance: supports
          locator: CBDB:71838
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

# 王紹緒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹緒 | accepted |
| birth.date | 1731年 | accepted |
| bio.summary | 王紹緒（生于1731年），清人物。籍贯高密。（中国历代人物传记资料库 CBDB 71838） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹緒（CBDB 71838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71838&o=json)
