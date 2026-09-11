---
schema: wang-person/v1
id: p_PQ5GXrNFFKszHyoiiQsPDQ
status: active
merged_into: null
display_name: 王錤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G9tbp6iULcxSW79eDu1HM1
        subject_person_id: p_PQ5GXrNFFKszHyoiiQsPDQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fpPn9Zqc9gTN2MH1mqRhqs
          claim_id: c_G9tbp6iULcxSW79eDu1HM1
          source_id: s_4DfhbCeQ6wZBEeEXZbGtwd
          stance: supports
          locator: CBDB:536934
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（536934）
          source: &a1
            id: s_4DfhbCeQ6wZBEeEXZbGtwd
            source_type: api_record
            title: 中国历代人物传记资料库：王錤（CBDB 536934）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=536934&o=json
            external_identifier: CBDB:536934
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.408Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BfNo6J8MTmbyyZohgTZmfP
        subject_person_id: p_PQ5GXrNFFKszHyoiiQsPDQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錤，宋人物。籍贯莆田，入仕進士。（中国历代人物传记资料库 CBDB 536934）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_v0f9RFsRW2bq-pxuNV7uUR
          claim_id: c_BfNo6J8MTmbyyZohgTZmfP
          source_id: s_4DfhbCeQ6wZBEeEXZbGtwd
          stance: supports
          locator: CBDB:536934
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

# 王錤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錤 | accepted |
| bio.summary | 王錤，宋人物。籍贯莆田，入仕進士。（中国历代人物传记资料库 CBDB 536934） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錤（CBDB 536934）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=536934&o=json)
