---
schema: wang-person/v1
id: p_5CkXEF1NDy1PKe4nFhEVN3
status: active
merged_into: null
display_name: 王和中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kLC1RRvUd9zD59QhFKUiUq
        subject_person_id: p_5CkXEF1NDy1PKe4nFhEVN3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王和中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4EKrivNg2D3criwUKJMZR4
          claim_id: c_kLC1RRvUd9zD59QhFKUiUq
          source_id: s_ydjQmTR79GLQ1YnGRM9qBr
          stance: supports
          locator: CBDB:342380
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342380）
          source: &a1
            id: s_ydjQmTR79GLQ1YnGRM9qBr
            source_type: api_record
            title: 中国历代人物传记资料库：王和中（CBDB 342380）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342380&o=json
            external_identifier: CBDB:342380
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.915Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B2ipwAX2rmPYZGGew1HvRE
        subject_person_id: p_5CkXEF1NDy1PKe4nFhEVN3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王和中，清人物。明清進士進士，籍贯山西省，入仕進士。（中国历代人物传记资料库 CBDB 342380）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JNNQFRDoOVc9Y4Ore5z0qj
          claim_id: c_B2ipwAX2rmPYZGGew1HvRE
          source_id: s_ydjQmTR79GLQ1YnGRM9qBr
          stance: supports
          locator: CBDB:342380
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

# 王和中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王和中 | accepted |
| bio.summary | 王和中，清人物。明清進士進士，籍贯山西省，入仕進士。（中国历代人物传记资料库 CBDB 342380） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王和中（CBDB 342380）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342380&o=json)
