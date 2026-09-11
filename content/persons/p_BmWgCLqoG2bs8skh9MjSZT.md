---
schema: wang-person/v1
id: p_BmWgCLqoG2bs8skh9MjSZT
status: active
merged_into: null
display_name: 王寬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k7Vh6fqxuR6vU8DsyixtEx
        subject_person_id: p_BmWgCLqoG2bs8skh9MjSZT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EAbWsGXQePJo2he3VPP7Si
          claim_id: c_k7Vh6fqxuR6vU8DsyixtEx
          source_id: s_pSMxm3LNXknL3ZejDQQ4qe
          stance: supports
          locator: CBDB:245704
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（245704）
          source: &a1
            id: s_pSMxm3LNXknL3ZejDQQ4qe
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 245704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245704&o=json
            external_identifier: CBDB:245704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.074Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7gXM1MYBvmevRXyHX8u9LK
        subject_person_id: p_BmWgCLqoG2bs8skh9MjSZT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寬，明人物。成化八年進士，籍贯文登。（中国历代人物传记资料库 CBDB 245704）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-qfobJjFVEkaaTSXIW98dG
          claim_id: c_7gXM1MYBvmevRXyHX8u9LK
          source_id: s_pSMxm3LNXknL3ZejDQQ4qe
          stance: supports
          locator: CBDB:245704
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

# 王寬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寬 | accepted |
| bio.summary | 王寬，明人物。成化八年進士，籍贯文登。（中国历代人物传记资料库 CBDB 245704） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寬（CBDB 245704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245704&o=json)
