---
schema: wang-person/v1
id: p_8zdhFcJaj2xiZ1YqbE7Uir
status: active
merged_into: null
display_name: 王裕堂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WkPwY6LXAeUoPanKAQEc7G
        subject_person_id: p_8zdhFcJaj2xiZ1YqbE7Uir
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裕堂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QCEpJoR1Nkyapde3j49RAc
          claim_id: c_WkPwY6LXAeUoPanKAQEc7G
          source_id: s_YR6jkVNeo2QF7BdXUKcfTH
          stance: supports
          locator: CBDB:640213
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640213）
          source: &a1
            id: s_YR6jkVNeo2QF7BdXUKcfTH
            source_type: api_record
            title: 中国历代人物传记资料库：王裕堂（CBDB 640213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640213&o=json
            external_identifier: CBDB:640213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.186Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q64sd6qxdM7eafZAGfJ4sP
        subject_person_id: p_8zdhFcJaj2xiZ1YqbE7Uir
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裕堂，清人物。籍贯錦縣，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 640213）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JJ--i4_nDLOy9vmea55OcA
          claim_id: c_q64sd6qxdM7eafZAGfJ4sP
          source_id: s_YR6jkVNeo2QF7BdXUKcfTH
          stance: supports
          locator: CBDB:640213
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

# 王裕堂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王裕堂 | accepted |
| bio.summary | 王裕堂，清人物。籍贯錦縣，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 640213） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王裕堂（CBDB 640213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640213&o=json)
