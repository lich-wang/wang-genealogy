---
schema: wang-person/v1
id: p_goFJsNKx9fG3GpNdDB3ZHK
status: active
merged_into: null
display_name: 王鎮川
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_StoFaBJYBy4UPLqKJf2i3F
        subject_person_id: p_goFJsNKx9fG3GpNdDB3ZHK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮川
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ge28cEEMe5LeLp6uMGHPUy
          claim_id: c_StoFaBJYBy4UPLqKJf2i3F
          source_id: s_F26Wnp4C7b2miea3Mfk2it
          stance: supports
          locator: CBDB:640691
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640691）
          source: &a1
            id: s_F26Wnp4C7b2miea3Mfk2it
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮川（CBDB 640691）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640691&o=json
            external_identifier: CBDB:640691
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.334Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Gvr6iJ3psmKNCpQ5ozecVS
        subject_person_id: p_goFJsNKx9fG3GpNdDB3ZHK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮川，清人物。籍贯漢州，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 640691）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Hmb4lpdHOrVwYrDAjRvB9B
          claim_id: c_Gvr6iJ3psmKNCpQ5ozecVS
          source_id: s_F26Wnp4C7b2miea3Mfk2it
          stance: supports
          locator: CBDB:640691
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

# 王鎮川

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎮川 | accepted |
| bio.summary | 王鎮川，清人物。籍贯漢州，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 640691） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎮川（CBDB 640691）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640691&o=json)
