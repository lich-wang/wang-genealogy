---
schema: wang-person/v1
id: p_8BWrNTmfkZVd5FFiud9k81
status: active
merged_into: null
display_name: 王納諫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dbE4Q7J8ZGrpt1yfs5m232
        subject_person_id: p_8BWrNTmfkZVd5FFiud9k81
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納諫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K6VXLeHjuW8DudyfFknFAF
          claim_id: c_dbE4Q7J8ZGrpt1yfs5m232
          source_id: s_jEFyjMMjjA8xSETCNEj34S
          stance: supports
          locator: CBDB:342343
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342343）
          source: &a1
            id: s_jEFyjMMjjA8xSETCNEj34S
            source_type: api_record
            title: 中国历代人物传记资料库：王納諫（CBDB 342343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342343&o=json
            external_identifier: CBDB:342343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.902Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H4BYYPCJUa2vkknMuMU8BA
        subject_person_id: p_8BWrNTmfkZVd5FFiud9k81
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納諫，明人物。明清進士進士，籍贯肥城，入仕進士。（中国历代人物传记资料库 CBDB 342343）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NZbVd3mqtBAXhJ2RIc3DJD
          claim_id: c_H4BYYPCJUa2vkknMuMU8BA
          source_id: s_jEFyjMMjjA8xSETCNEj34S
          stance: supports
          locator: CBDB:342343
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

# 王納諫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王納諫 | accepted |
| bio.summary | 王納諫，明人物。明清進士進士，籍贯肥城，入仕進士。（中国历代人物传记资料库 CBDB 342343） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王納諫（CBDB 342343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342343&o=json)
