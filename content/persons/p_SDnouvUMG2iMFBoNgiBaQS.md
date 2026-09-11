---
schema: wang-person/v1
id: p_SDnouvUMG2iMFBoNgiBaQS
status: active
merged_into: null
display_name: 王鴻誥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6yLbGz3LFLEdECfXGWnznC
        subject_person_id: p_SDnouvUMG2iMFBoNgiBaQS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻誥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wWHHHjGpQ96b6Jok5a39uE
          claim_id: c_6yLbGz3LFLEdECfXGWnznC
          source_id: s_RaApozvR6FLd1aPCTcup1x
          stance: supports
          locator: CBDB:72016
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72016）
          source: &a1
            id: s_RaApozvR6FLd1aPCTcup1x
            source_type: api_record
            title: 中国历代人物传记资料库：王鴻誥（CBDB 72016）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72016&o=json
            external_identifier: CBDB:72016
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_E25TXCwdnTUhVAjvBD9bXn
        subject_person_id: p_SDnouvUMG2iMFBoNgiBaQS
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1843年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3cDRj8CLbjNqKyhcWfRsuY
          claim_id: c_E25TXCwdnTUhVAjvBD9bXn
          source_id: s_RaApozvR6FLd1aPCTcup1x
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
        id: c_4WqRAFkNf27zN1Gff1t8wt
        subject_person_id: p_SDnouvUMG2iMFBoNgiBaQS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻誥（生于1843年），清人物。籍贯蒙自。（中国历代人物传记资料库 CBDB 72016）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_70DQ1ZsCTwH6DjNNPMAHG3
          claim_id: c_4WqRAFkNf27zN1Gff1t8wt
          source_id: s_RaApozvR6FLd1aPCTcup1x
          stance: supports
          locator: CBDB:72016
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

# 王鴻誥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鴻誥 | accepted |
| birth.date | 1843年 | accepted |
| bio.summary | 王鴻誥（生于1843年），清人物。籍贯蒙自。（中国历代人物传记资料库 CBDB 72016） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鴻誥（CBDB 72016）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72016&o=json)
