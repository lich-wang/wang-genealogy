---
schema: wang-person/v1
id: p_F8QaR6b2L4Fc6Rk9U8LUuX
status: active
merged_into: null
display_name: 王自申
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PMrzp3EDqj5Miio2eRSwhk
        subject_person_id: p_F8QaR6b2L4Fc6Rk9U8LUuX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王自申
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6AfrbrjvicZJSnhMErVo6M
          claim_id: c_PMrzp3EDqj5Miio2eRSwhk
          source_id: s_xyvuU57Tdi4xuZ44Kq8N4T
          stance: supports
          locator: CBDB:640008
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640008）
          source: &a1
            id: s_xyvuU57Tdi4xuZ44Kq8N4T
            source_type: api_record
            title: 中国历代人物传记资料库：王自申（CBDB 640008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640008&o=json
            external_identifier: CBDB:640008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.122Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L6dhh3L715vNBpxCBBRE9M
        subject_person_id: p_F8QaR6b2L4Fc6Rk9U8LUuX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王自申，清人物。籍贯衛輝府，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 640008）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ded_YZiO0JD1GCeMyZ2orI
          claim_id: c_L6dhh3L715vNBpxCBBRE9M
          source_id: s_xyvuU57Tdi4xuZ44Kq8N4T
          stance: supports
          locator: CBDB:640008
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

# 王自申

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王自申 | accepted |
| bio.summary | 王自申，清人物。籍贯衛輝府，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 640008） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王自申（CBDB 640008）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640008&o=json)
