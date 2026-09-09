---
schema: wang-person/v1
id: p_uGzBCDKHhf3meTaiSrDiew
status: active
merged_into: null
display_name: 王包林
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iZQLkXArkxfaPrFczrJksS
        subject_person_id: p_uGzBCDKHhf3meTaiSrDiew
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王包林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_efZYx6R7qMWkAp5UvnWAaw
          claim_id: c_iZQLkXArkxfaPrFczrJksS
          source_id: s_Qev94AsaDjLDuM421Y4FEx
          stance: supports
          locator: CBDB:636390
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636390）
          source: &a1
            id: s_Qev94AsaDjLDuM421Y4FEx
            source_type: api_record
            title: 中国历代人物传记资料库：王包林（CBDB 636390）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636390&o=json
            external_identifier: CBDB:636390
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.976Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5eDgaXbErz1DCWUdpGixJj
        subject_person_id: p_uGzBCDKHhf3meTaiSrDiew
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QcRLJq7FSpVHCzGtNmBmoJ
          claim_id: c_5eDgaXbErz1DCWUdpGixJj
          source_id: s_Qev94AsaDjLDuM421Y4FEx
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

# 王包林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王包林 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王包林（CBDB 636390）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636390&o=json)
