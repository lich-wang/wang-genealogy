---
schema: wang-person/v1
id: p_LFZAtzDCXddVFFQiv5Dh9W
status: active
merged_into: null
display_name: 王聚奎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1x5YC41DG4pyG1k1L6h2bj
        subject_person_id: p_LFZAtzDCXddVFFQiv5Dh9W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聚奎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DKr3rT8jXnJUg471jk2D38
          claim_id: c_1x5YC41DG4pyG1k1L6h2bj
          source_id: s_3WA7crndvq8MhYk5dM8ehi
          stance: supports
          locator: CBDB:342053
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342053）
          source: &a1
            id: s_3WA7crndvq8MhYk5dM8ehi
            source_type: api_record
            title: 中国历代人物传记资料库：王聚奎（CBDB 342053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342053&o=json
            external_identifier: CBDB:342053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.825Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K7XMZL3P1PQU6Eh7snmoir
        subject_person_id: p_LFZAtzDCXddVFFQiv5Dh9W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聚奎，明人物。明清進士進士，籍贯郿縣，入仕進士。（中国历代人物传记资料库 CBDB 342053）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Sa9ohQ2dcppV5eWyZ2gAKq
          claim_id: c_K7XMZL3P1PQU6Eh7snmoir
          source_id: s_3WA7crndvq8MhYk5dM8ehi
          stance: supports
          locator: CBDB:342053
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

# 王聚奎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聚奎 | accepted |
| bio.summary | 王聚奎，明人物。明清進士進士，籍贯郿縣，入仕進士。（中国历代人物传记资料库 CBDB 342053） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王聚奎（CBDB 342053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342053&o=json)
