---
schema: wang-person/v1
id: p_ZsSNiK6UcNHHYbJBdBk4eu
status: active
merged_into: null
display_name: 王滿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tWm5cU5CrGWa637N1njXQd
        subject_person_id: p_ZsSNiK6UcNHHYbJBdBk4eu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dvsWAXH74tuV4X6RHhn8RK
          claim_id: c_tWm5cU5CrGWa637N1njXQd
          source_id: s_yp9GNy2yDMB9wFinXaj23U
          stance: supports
          locator: CBDB:266736
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266736）
          source: &a1
            id: s_yp9GNy2yDMB9wFinXaj23U
            source_type: api_record
            title: 中国历代人物传记资料库：王滿（CBDB 266736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266736&o=json
            external_identifier: CBDB:266736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.732Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QkGpH9CHRixmXeCj5DxrTY
        subject_person_id: p_ZsSNiK6UcNHHYbJBdBk4eu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滿，明人物。弘治六年進士，籍贯邢臺。（中国历代人物传记资料库 CBDB 266736）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CUwjdquHdQGNKwyq6jgQh9
          claim_id: c_QkGpH9CHRixmXeCj5DxrTY
          source_id: s_yp9GNy2yDMB9wFinXaj23U
          stance: supports
          locator: CBDB:266736
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

# 王滿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王滿 | accepted |
| bio.summary | 王滿，明人物。弘治六年進士，籍贯邢臺。（中国历代人物传记资料库 CBDB 266736） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王滿（CBDB 266736）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266736&o=json)
