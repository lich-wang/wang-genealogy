---
schema: wang-person/v1
id: p_9mxJEYskQRSMicW5R4QB7f
status: active
merged_into: null
display_name: 王獲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yujQKiiGuwBoqhLbCV7J8h
        subject_person_id: p_9mxJEYskQRSMicW5R4QB7f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JVZza6SFwTCBFRtRkMFNNQ
          claim_id: c_yujQKiiGuwBoqhLbCV7J8h
          source_id: s_SwE13F2JHBKrCUeuGTLHsu
          stance: supports
          locator: CBDB:639368
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639368）
          source: &a1
            id: s_SwE13F2JHBKrCUeuGTLHsu
            source_type: api_record
            title: 中国历代人物传记资料库：王獲（CBDB 639368）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639368&o=json
            external_identifier: CBDB:639368
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.908Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CoTE5BWRed3bdWnznTCcyd
        subject_person_id: p_9mxJEYskQRSMicW5R4QB7f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獲，清人物。籍贯濟南府，入仕廩生，曾任教授。（中国历代人物传记资料库 CBDB 639368）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_l7uqmRp-3NMM_Ko-LuBQG4
          claim_id: c_CoTE5BWRed3bdWnznTCcyd
          source_id: s_SwE13F2JHBKrCUeuGTLHsu
          stance: supports
          locator: CBDB:639368
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

# 王獲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王獲 | accepted |
| bio.summary | 王獲，清人物。籍贯濟南府，入仕廩生，曾任教授。（中国历代人物传记资料库 CBDB 639368） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王獲（CBDB 639368）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639368&o=json)
