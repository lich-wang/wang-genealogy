---
schema: wang-person/v1
id: p_qGcgjetyzP3K3Bq2Gw8v4X
status: active
merged_into: null
display_name: 王嵩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_874G54hgmw8AJPwb95REDd
        subject_person_id: p_qGcgjetyzP3K3Bq2Gw8v4X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QATAxPs3ABbL8XPCTpjMCB
          claim_id: c_874G54hgmw8AJPwb95REDd
          source_id: s_TKjs8MJV6hgJ4BDbTzrXN2
          stance: supports
          locator: CBDB:332889
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（332889）
          source: &a1
            id: s_TKjs8MJV6hgJ4BDbTzrXN2
            source_type: api_record
            title: 中国历代人物传记资料库：王嵩（CBDB 332889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332889&o=json
            external_identifier: CBDB:332889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.387Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3pqMWyWozL9FGLQH19MdqA
        subject_person_id: p_qGcgjetyzP3K3Bq2Gw8v4X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵩，明人物。天順八年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 332889）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G9qpxHXvgSpAe55ZXbH6oX
          claim_id: c_3pqMWyWozL9FGLQH19MdqA
          source_id: s_TKjs8MJV6hgJ4BDbTzrXN2
          stance: supports
          locator: CBDB:332889
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

# 王嵩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嵩 | accepted |
| bio.summary | 王嵩，明人物。天順八年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 332889） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嵩（CBDB 332889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332889&o=json)
