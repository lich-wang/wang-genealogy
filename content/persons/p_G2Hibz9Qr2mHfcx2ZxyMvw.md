---
schema: wang-person/v1
id: p_G2Hibz9Qr2mHfcx2ZxyMvw
status: active
merged_into: null
display_name: 王介堂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_872ZrBDfD7eYFTH467w7pb
        subject_person_id: p_G2Hibz9Qr2mHfcx2ZxyMvw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王介堂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2PWCz6KAV7AmE67oKd2d27
          claim_id: c_872ZrBDfD7eYFTH467w7pb
          source_id: s_e7ufLGqJvzU9wpAS8Xi3QG
          stance: supports
          locator: CBDB:635897
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635897）
          source: &a1
            id: s_e7ufLGqJvzU9wpAS8Xi3QG
            source_type: api_record
            title: 中国历代人物传记资料库：王介堂（CBDB 635897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635897&o=json
            external_identifier: CBDB:635897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.821Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kNvxhpq78b9LFBqm4bqXUR
        subject_person_id: p_G2Hibz9Qr2mHfcx2ZxyMvw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王介堂，清人物。籍贯陽曲，入仕監生，曾任縣丞、照磨。（中国历代人物传记资料库 CBDB 635897）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_69gTlZ7HwLgsHVsxTUtPAd
          claim_id: c_kNvxhpq78b9LFBqm4bqXUR
          source_id: s_e7ufLGqJvzU9wpAS8Xi3QG
          stance: supports
          locator: CBDB:635897
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

# 王介堂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王介堂 | accepted |
| bio.summary | 王介堂，清人物。籍贯陽曲，入仕監生，曾任縣丞、照磨。（中国历代人物传记资料库 CBDB 635897） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王介堂（CBDB 635897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635897&o=json)
