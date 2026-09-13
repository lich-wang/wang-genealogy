---
schema: wang-person/v1
id: p_xM76Qng99LgyKKPr87QFhC
status: active
merged_into: null
display_name: 王景良
cbdb_id: 38056
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BqMT73wyjA18obcC7j7Gbm
        subject_person_id: p_xM76Qng99LgyKKPr87QFhC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景良，宋人物。曾任大理寺丞、衛尉寺丞。（中国历代人物传记资料库 CBDB 38056）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_X0r2bQnlib2p15RdYhsryC
          claim_id: c_BqMT73wyjA18obcC7j7Gbm
          source_id: s_BX7DcbhUgQ8BuAr6ZHt8rz
          stance: supports
          locator: CBDB:38056
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BX7DcbhUgQ8BuAr6ZHt8rz
            source_type: api_record
            title: 中国历代人物传记资料库：王景良（CBDB 38056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38056&o=json
            external_identifier: CBDB:38056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:46.515Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_M8QmmYCvKDGYUJs2uFdodY
        subject_person_id: p_xM76Qng99LgyKKPr87QFhC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yFU93r2hARtNaMgk5Nmwzp
          claim_id: c_M8QmmYCvKDGYUJs2uFdodY
          source_id: s_BX7DcbhUgQ8BuAr6ZHt8rz
          stance: supports
          locator: CBDB:38056
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1201-1300）｜历史性依据：CBDB 朝代 = 宋
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

# 王景良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王景良，宋人物。曾任大理寺丞、衛尉寺丞。（中国历代人物传记资料库 CBDB 38056） | accepted |
| name.primary | 王景良 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景良（CBDB 38056）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38056&o=json)
