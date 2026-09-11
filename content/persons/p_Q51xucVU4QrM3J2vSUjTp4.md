---
schema: wang-person/v1
id: p_Q51xucVU4QrM3J2vSUjTp4
status: active
merged_into: null
display_name: 王立鰲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PfUjXQWDLDKs8Nh7i7tvhD
        subject_person_id: p_Q51xucVU4QrM3J2vSUjTp4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立鰲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qdrToj2AbYmEKiGX8qPCRT
          claim_id: c_PfUjXQWDLDKs8Nh7i7tvhD
          source_id: s_8fMDsci9ZxqHBtS51KekFa
          stance: supports
          locator: CBDB:415209
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（415209）
          source: &a1
            id: s_8fMDsci9ZxqHBtS51KekFa
            source_type: api_record
            title: 中国历代人物传记资料库：王立鰲（CBDB 415209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415209&o=json
            external_identifier: CBDB:415209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.995Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GX36V6TBmaDm2JXB2ns4u2
        subject_person_id: p_Q51xucVU4QrM3J2vSUjTp4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立鰲，清人物。曾任教諭。（中国历代人物传记资料库 CBDB 415209）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_My8jn38XhMQkOwVmmT5MLz
          claim_id: c_GX36V6TBmaDm2JXB2ns4u2
          source_id: s_8fMDsci9ZxqHBtS51KekFa
          stance: supports
          locator: CBDB:415209
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

# 王立鰲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王立鰲 | accepted |
| bio.summary | 王立鰲，清人物。曾任教諭。（中国历代人物传记资料库 CBDB 415209） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王立鰲（CBDB 415209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415209&o=json)
