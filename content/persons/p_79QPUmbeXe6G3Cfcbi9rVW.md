---
schema: wang-person/v1
id: p_79QPUmbeXe6G3Cfcbi9rVW
status: active
merged_into: null
display_name: 王應箕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9C29xZM2DD3Y43BjHnhzqy
        subject_person_id: p_79QPUmbeXe6G3Cfcbi9rVW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應箕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SUexdtFmDLJeYGBckCxW19
          claim_id: c_9C29xZM2DD3Y43BjHnhzqy
          source_id: s_6QcwQNE97CCBfRwiorDevJ
          stance: supports
          locator: CBDB:574695
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574695）
          source: &a1
            id: s_6QcwQNE97CCBfRwiorDevJ
            source_type: api_record
            title: 中国历代人物传记资料库：王應箕（CBDB 574695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574695&o=json
            external_identifier: CBDB:574695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.922Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vXCcP1ZYDXnYirUd5GA3Zt
        subject_person_id: p_79QPUmbeXe6G3Cfcbi9rVW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應箕，明人物。籍贯京山。（中国历代人物传记资料库 CBDB 574695）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cVSPe-6UgGupn_f1WBl8X2
          claim_id: c_vXCcP1ZYDXnYirUd5GA3Zt
          source_id: s_6QcwQNE97CCBfRwiorDevJ
          stance: supports
          locator: CBDB:574695
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

# 王應箕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應箕 | accepted |
| bio.summary | 王應箕，明人物。籍贯京山。（中国历代人物传记资料库 CBDB 574695） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應箕（CBDB 574695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574695&o=json)
