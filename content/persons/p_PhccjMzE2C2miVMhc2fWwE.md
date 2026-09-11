---
schema: wang-person/v1
id: p_PhccjMzE2C2miVMhc2fWwE
status: active
merged_into: null
display_name: 王人隆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sQ9bJ6ZC3sDX9wLnnaC8Sd
        subject_person_id: p_PhccjMzE2C2miVMhc2fWwE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王人隆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FMf56DPuCwhpjCQ2Pvdy29
          claim_id: c_sQ9bJ6ZC3sDX9wLnnaC8Sd
          source_id: s_rFywMYpHpvmpD7WTc9F27w
          stance: supports
          locator: CBDB:71310
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71310）
          source: &a1
            id: s_rFywMYpHpvmpD7WTc9F27w
            source_type: api_record
            title: 中国历代人物传记资料库：王人隆（CBDB 71310）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71310&o=json
            external_identifier: CBDB:71310
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.586Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kTi72SG4LSLcv9UTt3KDdr
        subject_person_id: p_PhccjMzE2C2miVMhc2fWwE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1653年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A7qoNBwUB2B2fnDWfon7J4
          claim_id: c_kTi72SG4LSLcv9UTt3KDdr
          source_id: s_rFywMYpHpvmpD7WTc9F27w
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
        id: c_bjoB8yyNCNp29KoGG9mguF
        subject_person_id: p_PhccjMzE2C2miVMhc2fWwE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王人隆（生于1653年），清人物。籍贯翼城。（中国历代人物传记资料库 CBDB 71310）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_i83A39ec3sW2mbY1i7KNVz
          claim_id: c_bjoB8yyNCNp29KoGG9mguF
          source_id: s_rFywMYpHpvmpD7WTc9F27w
          stance: supports
          locator: CBDB:71310
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

# 王人隆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王人隆 | accepted |
| birth.date | 1653年 | accepted |
| bio.summary | 王人隆（生于1653年），清人物。籍贯翼城。（中国历代人物传记资料库 CBDB 71310） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王人隆（CBDB 71310）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71310&o=json)
