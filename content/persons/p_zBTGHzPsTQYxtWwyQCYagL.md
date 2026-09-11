---
schema: wang-person/v1
id: p_zBTGHzPsTQYxtWwyQCYagL
status: active
merged_into: null
display_name: 王仲亨
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3kFZvG6GrB97peFwx1VrhH
        subject_person_id: p_zBTGHzPsTQYxtWwyQCYagL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_m6nWD1izYXEtSNUMYiU1ta
          claim_id: c_3kFZvG6GrB97peFwx1VrhH
          source_id: s_NqKKUuek3wV79FuXBkFhHK
          stance: supports
          locator: CBDB:253489
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253489）
          source: &a1
            id: s_NqKKUuek3wV79FuXBkFhHK
            source_type: api_record
            title: 中国历代人物传记资料库：王仲亨（CBDB 253489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253489&o=json
            external_identifier: CBDB:253489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.301Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kR2PqDDT4sHXd8ELXb86A8
        subject_person_id: p_zBTGHzPsTQYxtWwyQCYagL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲亨，明人物。成化十四年進士，曾任知府。（中国历代人物传记资料库 CBDB 253489）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SsdKBGIwJvD84ZvUv3pJ3Q
          claim_id: c_kR2PqDDT4sHXd8ELXb86A8
          source_id: s_NqKKUuek3wV79FuXBkFhHK
          stance: supports
          locator: CBDB:253489
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
  descendants:
    - claim:
        id: c_Qzwr02lV6JE7nhufkMwgmp
        subject_person_id: p_zBTGHzPsTQYxtWwyQCYagL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_A98pt7vCX7HThyxCGgsD4R
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Sw0p7o9YjTOrsvL6Qz7Tz6
          claim_id: c_Qzwr02lV6JE7nhufkMwgmp
          source_id: s_NqKKUuek3wV79FuXBkFhHK
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第一百九十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_A98pt7vCX7HThyxCGgsD4R
        status: active
        display_name: 王賓
        merged_into_person_id: null
  other: []
---

# 王仲亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲亨 | accepted |
| bio.summary | 王仲亨，明人物。成化十四年進士，曾任知府。（中国历代人物传记资料库 CBDB 253489） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_A98pt7vCX7HThyxCGgsD4R | 王賓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仲亨（CBDB 253489）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253489&o=json)
