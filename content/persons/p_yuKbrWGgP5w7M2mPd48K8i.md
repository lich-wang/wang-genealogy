---
schema: wang-person/v1
id: p_yuKbrWGgP5w7M2mPd48K8i
status: active
merged_into: null
display_name: 王延年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oQBTFdz5GeZWvUN2dUVLwA
        subject_person_id: p_yuKbrWGgP5w7M2mPd48K8i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_poCMHH9ZjstZrZ1ugSMeHC
          claim_id: c_oQBTFdz5GeZWvUN2dUVLwA
          source_id: s_A8TFg38ezrJU9w3GUnVZap
          stance: supports
          locator: CBDB:71577
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71577）
          source: &a1
            id: s_A8TFg38ezrJU9w3GUnVZap
            source_type: api_record
            title: 中国历代人物传记资料库：王延年（CBDB 71577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71577&o=json
            external_identifier: CBDB:71577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.759Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QdSyUhw67bfnGELPurDjzf
        subject_person_id: p_yuKbrWGgP5w7M2mPd48K8i
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1779年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cTfCffySmSj5eTyFgWEvxd
          claim_id: c_QdSyUhw67bfnGELPurDjzf
          source_id: s_A8TFg38ezrJU9w3GUnVZap
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
        id: c_dsgn4iD6N82ruTckkyjcdq
        subject_person_id: p_yuKbrWGgP5w7M2mPd48K8i
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1851年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mC11BS4yqFoA8mHEKw7kxF
          claim_id: c_dsgn4iD6N82ruTckkyjcdq
          source_id: s_A8TFg38ezrJU9w3GUnVZap
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
        id: c_J2K6YDhgnJDhw2teBhAFa5
        subject_person_id: p_yuKbrWGgP5w7M2mPd48K8i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延年（1779年—1851年），清人物。籍贯濰縣。（中国历代人物传记资料库 CBDB 71577）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZHEkALIw_bBikw_uT10K1_
          claim_id: c_J2K6YDhgnJDhw2teBhAFa5
          source_id: s_A8TFg38ezrJU9w3GUnVZap
          stance: supports
          locator: CBDB:71577
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

# 王延年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王延年 | accepted |
| birth.date | 1779年 | accepted |
| death.date | 1851年 | accepted |
| bio.summary | 王延年（1779年—1851年），清人物。籍贯濰縣。（中国历代人物传记资料库 CBDB 71577） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王延年（CBDB 71577）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71577&o=json)
