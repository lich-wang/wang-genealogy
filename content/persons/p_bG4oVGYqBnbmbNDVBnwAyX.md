---
schema: wang-person/v1
id: p_bG4oVGYqBnbmbNDVBnwAyX
status: active
merged_into: null
display_name: 王德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3L4qEaLpSp73Q8fwrTX7KM
        subject_person_id: p_bG4oVGYqBnbmbNDVBnwAyX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jNMFaZ28ddo6JmGbrzP95P
          claim_id: c_3L4qEaLpSp73Q8fwrTX7KM
          source_id: s_r9nnfNe73dEU6NvkuJh5wN
          stance: supports
          locator: CBDB:460893
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（460893）
          source: &a1
            id: s_r9nnfNe73dEU6NvkuJh5wN
            source_type: api_record
            title: 中国历代人物传记资料库：王德（CBDB 460893）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460893&o=json
            external_identifier: CBDB:460893
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.793Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dYc8uE9MmmsAr31SqZsNYW
        subject_person_id: p_bG4oVGYqBnbmbNDVBnwAyX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德，明人物。曾任副千戶。（中国历代人物传记资料库 CBDB 460893）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ygx96ZwKF2XjfjDtOfeXFt
          claim_id: c_dYc8uE9MmmsAr31SqZsNYW
          source_id: s_r9nnfNe73dEU6NvkuJh5wN
          stance: supports
          locator: CBDB:460893
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

# 王德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德 | accepted |
| bio.summary | 王德，明人物。曾任副千戶。（中国历代人物传记资料库 CBDB 460893） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德（CBDB 460893）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460893&o=json)
