---
schema: wang-person/v1
id: p_mMY12XRD3bF1QVvU8DTJoh
status: active
merged_into: null
display_name: 王大椿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jh1F15BjweSN3aMW5YShnh
        subject_person_id: p_mMY12XRD3bF1QVvU8DTJoh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大椿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3CSz45qWBT6xppunUX2dYs
          claim_id: c_Jh1F15BjweSN3aMW5YShnh
          source_id: s_4LKoYGC6iLF58RW1UJfHK3
          stance: supports
          locator: CBDB:71337
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71337）
          source: &a1
            id: s_4LKoYGC6iLF58RW1UJfHK3
            source_type: api_record
            title: 中国历代人物传记资料库：王大椿（CBDB 71337）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71337&o=json
            external_identifier: CBDB:71337
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.150Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_R2n9xcCAG87ffCKPuYT1zN
        subject_person_id: p_mMY12XRD3bF1QVvU8DTJoh
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1717年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G6icADjTqMhBXBCVMbAPjY
          claim_id: c_R2n9xcCAG87ffCKPuYT1zN
          source_id: s_4LKoYGC6iLF58RW1UJfHK3
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
        id: c_Ywo5QAm1syiWwbQC6kjrUR
        subject_person_id: p_mMY12XRD3bF1QVvU8DTJoh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1757年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VJ5kZBDDa7UB3sKCQk4qyR
          claim_id: c_Ywo5QAm1syiWwbQC6kjrUR
          source_id: s_4LKoYGC6iLF58RW1UJfHK3
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
        id: c_s8r5oUgp6C3bVfsHHMvumB
        subject_person_id: p_mMY12XRD3bF1QVvU8DTJoh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大椿（1717年—1757年），清人物。籍贯常熟。（中国历代人物传记资料库 CBDB 71337）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O_Bv77ds79FQtemwMgrQKH
          claim_id: c_s8r5oUgp6C3bVfsHHMvumB
          source_id: s_4LKoYGC6iLF58RW1UJfHK3
          stance: supports
          locator: CBDB:71337
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

# 王大椿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大椿 | accepted |
| birth.date | 1717年 | accepted |
| death.date | 1757年 | accepted |
| bio.summary | 王大椿（1717年—1757年），清人物。籍贯常熟。（中国历代人物传记资料库 CBDB 71337） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大椿（CBDB 71337）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71337&o=json)
