---
schema: wang-person/v1
id: p_qSQULi927FrNk7P8XB1DdY
status: active
merged_into: null
display_name: 王鉉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wB2jJQwqmmrJKef8YErK7J
        subject_person_id: p_qSQULi927FrNk7P8XB1DdY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_31eCGRg4kjZ2dEBMqu37AD
          claim_id: c_wB2jJQwqmmrJKef8YErK7J
          source_id: s_MPaEP2GkHLuiTnx3UAyH5X
          stance: supports
          locator: CBDB:343716
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343716）
          source: &a1
            id: s_MPaEP2GkHLuiTnx3UAyH5X
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 343716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343716&o=json
            external_identifier: CBDB:343716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.471Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hFQfUtPmypdSL57ej2c57T
        subject_person_id: p_qSQULi927FrNk7P8XB1DdY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉉，清人物。明清進士進士，籍贯歙縣，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 343716）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RSKELhrXh0lE7uUTCIqgoF
          claim_id: c_hFQfUtPmypdSL57ej2c57T
          source_id: s_MPaEP2GkHLuiTnx3UAyH5X
          stance: supports
          locator: CBDB:343716
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

# 王鉉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉉 | accepted |
| bio.summary | 王鉉，清人物。明清進士進士，籍贯歙縣，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 343716） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鉉（CBDB 343716）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343716&o=json)
