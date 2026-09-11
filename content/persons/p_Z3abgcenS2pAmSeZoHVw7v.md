---
schema: wang-person/v1
id: p_Z3abgcenS2pAmSeZoHVw7v
status: active
merged_into: null
display_name: 王鍾玫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4ss6rzrLMaEwvyLrsFBv9A
        subject_person_id: p_Z3abgcenS2pAmSeZoHVw7v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾玫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wG5z9SMR9aVxC6FA7c8kEc
          claim_id: c_4ss6rzrLMaEwvyLrsFBv9A
          source_id: s_pY7iqFpfdJgivaB536p4tp
          stance: supports
          locator: CBDB:71883
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71883）
          source: &a1
            id: s_pY7iqFpfdJgivaB536p4tp
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾玫（CBDB 71883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71883&o=json
            external_identifier: CBDB:71883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.913Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_fMan4ESkVTGmn3zfXqKjDv
        subject_person_id: p_Z3abgcenS2pAmSeZoHVw7v
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1624年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eFn1Q3UGsQAkEPsVdbBdMJ
          claim_id: c_fMan4ESkVTGmn3zfXqKjDv
          source_id: s_pY7iqFpfdJgivaB536p4tp
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
        id: c_jDc5WxDQa2mdvhWbrcM1k1
        subject_person_id: p_Z3abgcenS2pAmSeZoHVw7v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍾玫（生于1624年），清人物。籍贯淄川。（中国历代人物传记资料库 CBDB 71883）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ONFb_yUJFAakdhVuO5wSPM
          claim_id: c_jDc5WxDQa2mdvhWbrcM1k1
          source_id: s_pY7iqFpfdJgivaB536p4tp
          stance: supports
          locator: CBDB:71883
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

# 王鍾玫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍾玫 | accepted |
| birth.date | 1624年 | accepted |
| bio.summary | 王鍾玫（生于1624年），清人物。籍贯淄川。（中国历代人物传记资料库 CBDB 71883） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鍾玫（CBDB 71883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71883&o=json)
