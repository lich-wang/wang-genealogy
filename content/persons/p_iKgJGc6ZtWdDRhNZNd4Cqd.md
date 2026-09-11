---
schema: wang-person/v1
id: p_iKgJGc6ZtWdDRhNZNd4Cqd
status: active
merged_into: null
display_name: 王節
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BSHSBJdsw9dvJNMAEjk7W2
        subject_person_id: p_iKgJGc6ZtWdDRhNZNd4Cqd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王節
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FLerjKHZoawHXNtpfqw384
          claim_id: c_BSHSBJdsw9dvJNMAEjk7W2
          source_id: s_mM6TFrHvcrBetBWdQAfux3
          stance: supports
          locator: CBDB:263249
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（263249）
          source: &a1
            id: s_mM6TFrHvcrBetBWdQAfux3
            source_type: api_record
            title: 中国历代人物传记资料库：王節（CBDB 263249）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263249&o=json
            external_identifier: CBDB:263249
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.619Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a3QN8niDU5mH3A1PWAFRkt
        subject_person_id: p_iKgJGc6ZtWdDRhNZNd4Cqd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王節，明人物。弘治三年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 263249）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EeSSrUzcAlCv-yMw2gVzRQ
          claim_id: c_a3QN8niDU5mH3A1PWAFRkt
          source_id: s_mM6TFrHvcrBetBWdQAfux3
          stance: supports
          locator: CBDB:263249
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

# 王節

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王節 | accepted |
| bio.summary | 王節，明人物。弘治三年進士，籍贯朝邑。（中国历代人物传记资料库 CBDB 263249） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王節（CBDB 263249）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263249&o=json)
