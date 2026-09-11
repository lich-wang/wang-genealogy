---
schema: wang-person/v1
id: p_LNVhdDd5rLqc32MBm6rWB2
status: active
merged_into: null
display_name: 王元昌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rr1WcwvfCPyqJdpaEz5nFC
        subject_person_id: p_LNVhdDd5rLqc32MBm6rWB2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Jrw7JBTuMy22kEENefrufS
          claim_id: c_rr1WcwvfCPyqJdpaEz5nFC
          source_id: s_PGkDW3T6y5w6U53gsLSzC8
          stance: supports
          locator: CBDB:636152
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636152）
          source: &a1
            id: s_PGkDW3T6y5w6U53gsLSzC8
            source_type: api_record
            title: 中国历代人物传记资料库：王元昌（CBDB 636152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636152&o=json
            external_identifier: CBDB:636152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.899Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bz2Pd2LiPYLpw7DqUfD1XV
        subject_person_id: p_LNVhdDd5rLqc32MBm6rWB2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元昌，清人物。籍贯臨安，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 636152）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6_61twC6hCn7d-p48-AEjx
          claim_id: c_bz2Pd2LiPYLpw7DqUfD1XV
          source_id: s_PGkDW3T6y5w6U53gsLSzC8
          stance: supports
          locator: CBDB:636152
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

# 王元昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元昌 | accepted |
| bio.summary | 王元昌，清人物。籍贯臨安，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 636152） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元昌（CBDB 636152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636152&o=json)
