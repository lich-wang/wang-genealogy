---
schema: wang-person/v1
id: p_6mhgF3YZN8dDieYnGS7213
status: active
merged_into: null
display_name: 王希孟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fSkTZtNKN6PDV9awBgFddP
        subject_person_id: p_6mhgF3YZN8dDieYnGS7213
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希孟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rTJbmdxksSWJWePCnZbChr
          claim_id: c_fSkTZtNKN6PDV9awBgFddP
          source_id: s_NCovadrDX4njDJEEGGNHNb
          stance: supports
          locator: CBDB:208936
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208936）
          source: &a1
            id: s_NCovadrDX4njDJEEGGNHNb
            source_type: api_record
            title: 中国历代人物传记资料库：王希孟（CBDB 208936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208936&o=json
            external_identifier: CBDB:208936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.971Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XJQUjWSRe2cg4rDPhbSLQ8
        subject_person_id: p_6mhgF3YZN8dDieYnGS7213
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希孟，明人物。隆慶五年進士，籍贯蘄水，曾任省祭官。（中国历代人物传记资料库 CBDB 208936）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jssCv0UMbVLLwEiCmWsCbB
          claim_id: c_XJQUjWSRe2cg4rDPhbSLQ8
          source_id: s_NCovadrDX4njDJEEGGNHNb
          stance: supports
          locator: CBDB:208936
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

# 王希孟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希孟 | accepted |
| bio.summary | 王希孟，明人物。隆慶五年進士，籍贯蘄水，曾任省祭官。（中国历代人物传记资料库 CBDB 208936） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希孟（CBDB 208936）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208936&o=json)
