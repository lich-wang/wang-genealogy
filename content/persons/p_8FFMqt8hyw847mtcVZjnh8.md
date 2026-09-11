---
schema: wang-person/v1
id: p_8FFMqt8hyw847mtcVZjnh8
status: active
merged_into: null
display_name: 王宗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vjUJsXZRuSvKBEHhY6fgPg
        subject_person_id: p_8FFMqt8hyw847mtcVZjnh8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eYN9sNvRg3DHx8kSR8ENFR
          claim_id: c_vjUJsXZRuSvKBEHhY6fgPg
          source_id: s_raYEeqSGmMD8un84wKT3eM
          stance: supports
          locator: CBDB:295676
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（295676）
          source: &a1
            id: s_raYEeqSGmMD8un84wKT3eM
            source_type: api_record
            title: 中国历代人物传记资料库：王宗（CBDB 295676）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295676&o=json
            external_identifier: CBDB:295676
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.516Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pr4iyoDnDeJ4v2cgD2HbDP
        subject_person_id: p_8FFMqt8hyw847mtcVZjnh8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗，明人物。天順元年進士，籍贯蠡縣。（中国历代人物传记资料库 CBDB 295676）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gtzEv0I9OYVkNCfWM0gax9
          claim_id: c_pr4iyoDnDeJ4v2cgD2HbDP
          source_id: s_raYEeqSGmMD8un84wKT3eM
          stance: supports
          locator: CBDB:295676
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

# 王宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗 | accepted |
| bio.summary | 王宗，明人物。天順元年進士，籍贯蠡縣。（中国历代人物传记资料库 CBDB 295676） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗（CBDB 295676）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295676&o=json)
