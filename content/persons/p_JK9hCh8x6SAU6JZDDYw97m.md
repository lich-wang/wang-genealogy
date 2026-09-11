---
schema: wang-person/v1
id: p_JK9hCh8x6SAU6JZDDYw97m
status: active
merged_into: null
display_name: 王汝錦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7ML1cRNFmwbXUMi4cSm7Zs
        subject_person_id: p_JK9hCh8x6SAU6JZDDYw97m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝錦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nzXPZNR9xeFtpH5o9BzS1y
          claim_id: c_7ML1cRNFmwbXUMi4cSm7Zs
          source_id: s_x78SUhJPBHTY5XiA7bEG5x
          stance: supports
          locator: CBDB:639039
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639039）
          source: &a1
            id: s_x78SUhJPBHTY5XiA7bEG5x
            source_type: api_record
            title: 中国历代人物传记资料库：王汝錦（CBDB 639039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639039&o=json
            external_identifier: CBDB:639039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.841Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EuU2x3LCSgLgT5TuJcUtg1
        subject_person_id: p_JK9hCh8x6SAU6JZDDYw97m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝錦，清人物。籍贯大興，入仕監生，曾任典史、經歷。（中国历代人物传记资料库 CBDB 639039）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-UVYSNccUDv8N0Ocvk7iqf
          claim_id: c_EuU2x3LCSgLgT5TuJcUtg1
          source_id: s_x78SUhJPBHTY5XiA7bEG5x
          stance: supports
          locator: CBDB:639039
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

# 王汝錦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝錦 | accepted |
| bio.summary | 王汝錦，清人物。籍贯大興，入仕監生，曾任典史、經歷。（中国历代人物传记资料库 CBDB 639039） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝錦（CBDB 639039）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639039&o=json)
