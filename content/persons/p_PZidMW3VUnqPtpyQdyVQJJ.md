---
schema: wang-person/v1
id: p_PZidMW3VUnqPtpyQdyVQJJ
status: active
merged_into: null
display_name: 王采
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BkzNDrFNhgBCdfvnhQRzjM
        subject_person_id: p_PZidMW3VUnqPtpyQdyVQJJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王采
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5x3jRPoXUyDsUFWtynVb6j
          claim_id: c_BkzNDrFNhgBCdfvnhQRzjM
          source_id: s_Z4V8cEifPaXbNvhE6MSM7N
          stance: supports
          locator: CBDB:38633
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38633）
          source: &a1
            id: s_Z4V8cEifPaXbNvhE6MSM7N
            source_type: api_record
            title: 中国历代人物传记资料库：王采（CBDB 38633）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38633&o=json
            external_identifier: CBDB:38633
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.521Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9by9G221R7BGXNB41y6DQi
        subject_person_id: p_PZidMW3VUnqPtpyQdyVQJJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王采，宋人物。籍贯臨江，入仕進士。（中国历代人物传记资料库 CBDB 38633）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_83iR7g1OCgkYQkAXZuMRws
          claim_id: c_9by9G221R7BGXNB41y6DQi
          source_id: s_Z4V8cEifPaXbNvhE6MSM7N
          stance: supports
          locator: CBDB:38633
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

# 王采

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王采 | accepted |
| bio.summary | 王采，宋人物。籍贯臨江，入仕進士。（中国历代人物传记资料库 CBDB 38633） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王采（CBDB 38633）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38633&o=json)
