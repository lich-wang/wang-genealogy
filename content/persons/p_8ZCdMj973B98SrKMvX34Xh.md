---
schema: wang-person/v1
id: p_8ZCdMj973B98SrKMvX34Xh
status: active
merged_into: null
display_name: 王恭宇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_j1M1xqGNfwafqgBBtNUUUa
        subject_person_id: p_8ZCdMj973B98SrKMvX34Xh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭宇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D8GEyr3MFcNzDYbgQ62Bgo
          claim_id: c_j1M1xqGNfwafqgBBtNUUUa
          source_id: s_q19LxZJdBanPG3ma2zPRgJ
          stance: supports
          locator: CBDB:637875
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637875）
          source: &a1
            id: s_q19LxZJdBanPG3ma2zPRgJ
            source_type: api_record
            title: 中国历代人物传记资料库：王恭宇（CBDB 637875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637875&o=json
            external_identifier: CBDB:637875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.444Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hBsZ6jy3bQPsb6k7hAu3Sa
        subject_person_id: p_8ZCdMj973B98SrKMvX34Xh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭宇，清人物。籍贯敘州府，曾任訓導。（中国历代人物传记资料库 CBDB 637875）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wdnffh_Ua0KnByUt7u3B4u
          claim_id: c_hBsZ6jy3bQPsb6k7hAu3Sa
          source_id: s_q19LxZJdBanPG3ma2zPRgJ
          stance: supports
          locator: CBDB:637875
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

# 王恭宇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恭宇 | accepted |
| bio.summary | 王恭宇，清人物。籍贯敘州府，曾任訓導。（中国历代人物传记资料库 CBDB 637875） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恭宇（CBDB 637875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637875&o=json)
