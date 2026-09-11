---
schema: wang-person/v1
id: p_3HHmqJEpLXSB6PpgNSryHi
status: active
merged_into: null
display_name: 王筵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W4Nyz3EGywwT4Y9UD28wBb
        subject_person_id: p_3HHmqJEpLXSB6PpgNSryHi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王筵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C8NnApkCwBuKtMdQ2f6Hjr
          claim_id: c_W4Nyz3EGywwT4Y9UD28wBb
          source_id: s_5kR7qJNWd5c7idBdDM31qa
          stance: supports
          locator: CBDB:328171
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328171）
          source: &a1
            id: s_5kR7qJNWd5c7idBdDM31qa
            source_type: api_record
            title: 中国历代人物传记资料库：王筵（CBDB 328171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328171&o=json
            external_identifier: CBDB:328171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.293Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FcoZFSU4ToaBHcW4Zt9qFL
        subject_person_id: p_3HHmqJEpLXSB6PpgNSryHi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王筵，明人物。嘉靖四十一年進士，籍贯夷陵州。（中国历代人物传记资料库 CBDB 328171）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gtop4HXRL4GYFniMb9lPER
          claim_id: c_FcoZFSU4ToaBHcW4Zt9qFL
          source_id: s_5kR7qJNWd5c7idBdDM31qa
          stance: supports
          locator: CBDB:328171
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

# 王筵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王筵 | accepted |
| bio.summary | 王筵，明人物。嘉靖四十一年進士，籍贯夷陵州。（中国历代人物传记资料库 CBDB 328171） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王筵（CBDB 328171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328171&o=json)
