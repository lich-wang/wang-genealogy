---
schema: wang-person/v1
id: p_rh6JBcBiKq1pJvxsL8ehvm
status: active
merged_into: null
display_name: 王思節
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RHCcETuD8f7QSRqw7EbCms
        subject_person_id: p_rh6JBcBiKq1pJvxsL8ehvm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思節
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dBtNNVxF4HFxXYYy2TdVt2
          claim_id: c_RHCcETuD8f7QSRqw7EbCms
          source_id: s_3KpKKSuC1EfwB6PV67hAWu
          stance: supports
          locator: CBDB:538723
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（538723）
          source: &a1
            id: s_3KpKKSuC1EfwB6PV67hAWu
            source_type: api_record
            title: 中国历代人物传记资料库：王思節（CBDB 538723）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=538723&o=json
            external_identifier: CBDB:538723
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.418Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QCaEaN1jusYr66cAGybNDM
        subject_person_id: p_rh6JBcBiKq1pJvxsL8ehvm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思節，宋人物。籍贯福州，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 538723）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jszuSAsL8_15EKm9sNaHL3
          claim_id: c_QCaEaN1jusYr66cAGybNDM
          source_id: s_3KpKKSuC1EfwB6PV67hAWu
          stance: supports
          locator: CBDB:538723
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

# 王思節

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思節 | accepted |
| bio.summary | 王思節，宋人物。籍贯福州，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 538723） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思節（CBDB 538723）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=538723&o=json)
