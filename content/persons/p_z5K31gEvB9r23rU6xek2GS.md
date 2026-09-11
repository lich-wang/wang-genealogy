---
schema: wang-person/v1
id: p_z5K31gEvB9r23rU6xek2GS
status: active
merged_into: null
display_name: 王庭筠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MNaKLUaC4hqQWJ8UfHeCRZ
        subject_person_id: p_z5K31gEvB9r23rU6xek2GS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭筠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mWpU1b86UbiH2RHhgKFh56
          claim_id: c_MNaKLUaC4hqQWJ8UfHeCRZ
          source_id: s_t74fYJ8EPrRxPMEiTwdTm8
          stance: supports
          locator: CBDB:71901
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71901）
          source: &a1
            id: s_t74fYJ8EPrRxPMEiTwdTm8
            source_type: api_record
            title: 中国历代人物传记资料库：王庭筠（CBDB 71901）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71901&o=json
            external_identifier: CBDB:71901
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.918Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_oGf6jrQNhMMKm7psjFLCQ7
        subject_person_id: p_z5K31gEvB9r23rU6xek2GS
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1729年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sXkudo47EkAwXAvFrbb6YG
          claim_id: c_oGf6jrQNhMMKm7psjFLCQ7
          source_id: s_t74fYJ8EPrRxPMEiTwdTm8
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
        id: c_zkpgj14khiH8uQ4TUv24Kx
        subject_person_id: p_z5K31gEvB9r23rU6xek2GS
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1797年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aQN6ThL7tNrbsq114UVAeU
          claim_id: c_zkpgj14khiH8uQ4TUv24Kx
          source_id: s_t74fYJ8EPrRxPMEiTwdTm8
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
        id: c_Hgaqhf35BEUNQTyi9kgD2V
        subject_person_id: p_z5K31gEvB9r23rU6xek2GS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭筠（1729年—1797年），清人物。籍贯常熟。（中国历代人物传记资料库 CBDB 71901）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YjS0aeRN1ngr1CkSq623p9
          claim_id: c_Hgaqhf35BEUNQTyi9kgD2V
          source_id: s_t74fYJ8EPrRxPMEiTwdTm8
          stance: supports
          locator: CBDB:71901
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

# 王庭筠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭筠 | accepted |
| birth.date | 1729年 | accepted |
| death.date | 1797年 | accepted |
| bio.summary | 王庭筠（1729年—1797年），清人物。籍贯常熟。（中国历代人物传记资料库 CBDB 71901） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王庭筠（CBDB 71901）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71901&o=json)
