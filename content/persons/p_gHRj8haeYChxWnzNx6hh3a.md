---
schema: wang-person/v1
id: p_gHRj8haeYChxWnzNx6hh3a
status: active
merged_into: null
display_name: 王鏞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iHNX8FTL2X51XAMGWAqD4f
        subject_person_id: p_gHRj8haeYChxWnzNx6hh3a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x8exx6sQ3KXCErQqUVLJ9g
          claim_id: c_iHNX8FTL2X51XAMGWAqD4f
          source_id: s_JmwSj15iXAv34VDeoTrtr3
          stance: supports
          locator: CBDB:466357
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（466357）
          source: &a1
            id: s_JmwSj15iXAv34VDeoTrtr3
            source_type: api_record
            title: 中国历代人物传记资料库：王鏞（CBDB 466357）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466357&o=json
            external_identifier: CBDB:466357
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Gp23KXWQD8wULqhvqAZpgH
        subject_person_id: p_gHRj8haeYChxWnzNx6hh3a
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏞，明人物。入仕進士，曾任分守道。（中国历代人物传记资料库 CBDB 466357）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jYnb_QsqjX0DHKzYDy9CfA
          claim_id: c_Gp23KXWQD8wULqhvqAZpgH
          source_id: s_JmwSj15iXAv34VDeoTrtr3
          stance: supports
          locator: CBDB:466357
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

# 王鏞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鏞 | accepted |
| bio.summary | 王鏞，明人物。入仕進士，曾任分守道。（中国历代人物传记资料库 CBDB 466357） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鏞（CBDB 466357）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466357&o=json)
