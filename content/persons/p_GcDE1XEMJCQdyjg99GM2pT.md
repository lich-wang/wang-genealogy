---
schema: wang-person/v1
id: p_GcDE1XEMJCQdyjg99GM2pT
status: active
merged_into: null
display_name: 王煒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J83RFarz9NAtWBCFVqEg3n
        subject_person_id: p_GcDE1XEMJCQdyjg99GM2pT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A3SvLFXwsC9UT6wt1kakNh
          claim_id: c_J83RFarz9NAtWBCFVqEg3n
          source_id: s_kseoBvX3E9cu99iXbZ6Xx3
          stance: supports
          locator: CBDB:683341
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（683341）
          source: &a1
            id: s_kseoBvX3E9cu99iXbZ6Xx3
            source_type: api_record
            title: 中国历代人物传记资料库：王煒（CBDB 683341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683341&o=json
            external_identifier: CBDB:683341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.298Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6ZiKD2Ss8j9p4QGAckMngL
        subject_person_id: p_GcDE1XEMJCQdyjg99GM2pT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煒，清人物。籍贯歙縣，身份为為善鄉里、商人。（中国历代人物传记资料库 CBDB 683341）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vfwSrnQgR4Np_2AYpTMi06
          claim_id: c_6ZiKD2Ss8j9p4QGAckMngL
          source_id: s_kseoBvX3E9cu99iXbZ6Xx3
          stance: supports
          locator: CBDB:683341
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

# 王煒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煒 | accepted |
| bio.summary | 王煒，清人物。籍贯歙縣，身份为為善鄉里、商人。（中国历代人物传记资料库 CBDB 683341） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王煒（CBDB 683341）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683341&o=json)
