---
schema: wang-person/v1
id: p_agSkjZUGH7JQUPyBL3yWkE
status: active
merged_into: null
display_name: 王華封
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8pM8T86Q7ff5NquZMFAjbH
        subject_person_id: p_agSkjZUGH7JQUPyBL3yWkE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王華封
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_65xD23ngdYARwapLSYqoD9
          claim_id: c_8pM8T86Q7ff5NquZMFAjbH
          source_id: s_iSNSCfEp3dEW3Z1sFr3eMB
          stance: supports
          locator: CBDB:640103
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640103）
          source: &a1
            id: s_iSNSCfEp3dEW3Z1sFr3eMB
            source_type: api_record
            title: 中国历代人物传记资料库：王華封（CBDB 640103）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640103&o=json
            external_identifier: CBDB:640103
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.023Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kWJvYFD6r3zXAKV9nfvKzb
        subject_person_id: p_agSkjZUGH7JQUPyBL3yWkE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王華封，清人物。籍贯安陸，入仕貢生: 拔貢，曾任縣丞、知縣。（中国历代人物传记资料库 CBDB 640103）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GIQJlGnMncyNOda9Zls-nE
          claim_id: c_kWJvYFD6r3zXAKV9nfvKzb
          source_id: s_iSNSCfEp3dEW3Z1sFr3eMB
          stance: supports
          locator: CBDB:640103
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

# 王華封

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王華封 | accepted |
| bio.summary | 王華封，清人物。籍贯安陸，入仕貢生: 拔貢，曾任縣丞、知縣。（中国历代人物传记资料库 CBDB 640103） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王華封（CBDB 640103）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640103&o=json)
