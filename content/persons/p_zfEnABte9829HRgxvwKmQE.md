---
schema: wang-person/v1
id: p_zfEnABte9829HRgxvwKmQE
status: active
merged_into: null
display_name: 王應奎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mGp3mALsUvkxfLZRtVXwo1
        subject_person_id: p_zfEnABte9829HRgxvwKmQE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應奎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZSKkw2D52J5n48rZeL8PM4
          claim_id: c_mGp3mALsUvkxfLZRtVXwo1
          source_id: s_KF4UjoxiWAVWNqKhxjuZTZ
          stance: supports
          locator: CBDB:71699
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71699）
          source: &a1
            id: s_KF4UjoxiWAVWNqKhxjuZTZ
            source_type: api_record
            title: 中国历代人物传记资料库：王應奎（CBDB 71699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71699&o=json
            external_identifier: CBDB:71699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.837Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_iL9V8A8dwECBU9jTvpREoD
        subject_person_id: p_zfEnABte9829HRgxvwKmQE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1684年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E1QCxJMttKJQyA6iSDVcqR
          claim_id: c_iL9V8A8dwECBU9jTvpREoD
          source_id: s_KF4UjoxiWAVWNqKhxjuZTZ
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
        id: c_JcCQjmWgq5XznN4i8kR9md
        subject_person_id: p_zfEnABte9829HRgxvwKmQE
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
        - id: cs_zL9Zhr5P7DMBeGV7zFw92t
          claim_id: c_JcCQjmWgq5XznN4i8kR9md
          source_id: s_KF4UjoxiWAVWNqKhxjuZTZ
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
        id: c_qG6jWruKpm5HybRrTwkgG1
        subject_person_id: p_zfEnABte9829HRgxvwKmQE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應奎（1684年—1757年），清人物。籍贯常熟。（中国历代人物传记资料库 CBDB 71699）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZUfP9FqVdBhC2cRSJeaTGu
          claim_id: c_qG6jWruKpm5HybRrTwkgG1
          source_id: s_KF4UjoxiWAVWNqKhxjuZTZ
          stance: supports
          locator: CBDB:71699
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

# 王應奎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應奎 | accepted |
| birth.date | 1684年 | accepted |
| death.date | 1757年 | accepted |
| bio.summary | 王應奎（1684年—1757年），清人物。籍贯常熟。（中国历代人物传记资料库 CBDB 71699） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應奎（CBDB 71699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71699&o=json)
