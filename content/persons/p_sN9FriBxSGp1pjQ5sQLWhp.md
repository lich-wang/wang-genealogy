---
schema: wang-person/v1
id: p_sN9FriBxSGp1pjQ5sQLWhp
status: active
merged_into: null
display_name: 王叔懋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X8BF5kfx3JrZU2bS93HMfg
        subject_person_id: p_sN9FriBxSGp1pjQ5sQLWhp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔懋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jyXkhSdcSGVUeXeNRP1ezQ
          claim_id: c_X8BF5kfx3JrZU2bS93HMfg
          source_id: s_mDGzu5mFTq23ij8NJ4LqvX
          stance: supports
          locator: CBDB:328620
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328620）
          source: &a1
            id: s_mDGzu5mFTq23ij8NJ4LqvX
            source_type: api_record
            title: 中国历代人物传记资料库：王叔懋（CBDB 328620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328620&o=json
            external_identifier: CBDB:328620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.303Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_14V86YSuUyy2DFNKtDNfr4
        subject_person_id: p_sN9FriBxSGp1pjQ5sQLWhp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔懋，明人物。嘉靖四十一年進士，籍贯永嘉，曾任鴻臚寺署丞。（中国历代人物传记资料库 CBDB 328620）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6UjPN_ufbZ-zhuZ4cRuS1I
          claim_id: c_14V86YSuUyy2DFNKtDNfr4
          source_id: s_mDGzu5mFTq23ij8NJ4LqvX
          stance: supports
          locator: CBDB:328620
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

# 王叔懋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王叔懋 | accepted |
| bio.summary | 王叔懋，明人物。嘉靖四十一年進士，籍贯永嘉，曾任鴻臚寺署丞。（中国历代人物传记资料库 CBDB 328620） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王叔懋（CBDB 328620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328620&o=json)
