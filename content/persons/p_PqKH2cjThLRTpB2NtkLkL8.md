---
schema: wang-person/v1
id: p_PqKH2cjThLRTpB2NtkLkL8
status: active
merged_into: null
display_name: 王白淑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qFfKjMFQAhreFCV5WXh4t9
        subject_person_id: p_PqKH2cjThLRTpB2NtkLkL8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王白淑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6ucJGRELicMVKS3BDKgA2U
          claim_id: c_qFfKjMFQAhreFCV5WXh4t9
          source_id: s_MjpKm3vvhNEK5PMPx4cU2K
          stance: supports
          locator: CBDB:639521
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639521）
          source: &a1
            id: s_MjpKm3vvhNEK5PMPx4cU2K
            source_type: api_record
            title: 中国历代人物传记资料库：王白淑（CBDB 639521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639521&o=json
            external_identifier: CBDB:639521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.959Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KZx1qkWo9c83F6zbtG2vgX
        subject_person_id: p_PqKH2cjThLRTpB2NtkLkL8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王白淑，清人物。籍贯大名，入仕鄉貢舉人，曾任教諭、復設教諭。（中国历代人物传记资料库 CBDB 639521）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kvPIyp6ElMHl3ELOTE1t8P
          claim_id: c_KZx1qkWo9c83F6zbtG2vgX
          source_id: s_MjpKm3vvhNEK5PMPx4cU2K
          stance: supports
          locator: CBDB:639521
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

# 王白淑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王白淑 | accepted |
| bio.summary | 王白淑，清人物。籍贯大名，入仕鄉貢舉人，曾任教諭、復設教諭。（中国历代人物传记资料库 CBDB 639521） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王白淑（CBDB 639521）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639521&o=json)
