---
schema: wang-person/v1
id: p_6zT1sia2P7t8yDmtCBoxUW
status: active
merged_into: null
display_name: 王彥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FdD6fRKyJiyZeBZVqz8u6W
        subject_person_id: p_6zT1sia2P7t8yDmtCBoxUW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tdhbYeBsnUerD4PBkN33jU
          claim_id: c_FdD6fRKyJiyZeBZVqz8u6W
          source_id: s_3TtrFzzNQVMPDLS6kZ54vR
          stance: supports
          locator: CBDB:304538
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304538）
          source: &a1
            id: s_3TtrFzzNQVMPDLS6kZ54vR
            source_type: api_record
            title: 中国历代人物传记资料库：王彥（CBDB 304538）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304538&o=json
            external_identifier: CBDB:304538
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.725Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JpHG9GbbLhxnBWR2KGJTS6
        subject_person_id: p_6zT1sia2P7t8yDmtCBoxUW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qi3W5X7HeZ8Kpo1JRb8hTn
          claim_id: c_JpHG9GbbLhxnBWR2KGJTS6
          source_id: s_3TtrFzzNQVMPDLS6kZ54vR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王彥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彥（CBDB 304538）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304538&o=json)
