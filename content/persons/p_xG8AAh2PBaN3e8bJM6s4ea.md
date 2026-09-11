---
schema: wang-person/v1
id: p_xG8AAh2PBaN3e8bJM6s4ea
status: active
merged_into: null
display_name: 王汝衡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kUA45dXHfxKJg97319zBHo
        subject_person_id: p_xG8AAh2PBaN3e8bJM6s4ea
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝衡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gsk7E5sL6KQV8ABhDYhtEw
          claim_id: c_kUA45dXHfxKJg97319zBHo
          source_id: s_YVv7KHQnggy3DaPe4vKU63
          stance: supports
          locator: CBDB:639033
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639033）
          source: &a1
            id: s_YVv7KHQnggy3DaPe4vKU63
            source_type: api_record
            title: 中国历代人物传记资料库：王汝衡（CBDB 639033）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639033&o=json
            external_identifier: CBDB:639033
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.819Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MP368G2rAY2ZXNYmoE8eR2
        subject_person_id: p_xG8AAh2PBaN3e8bJM6s4ea
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝衡，清人物。籍贯山陰，曾任縣丞。（中国历代人物传记资料库 CBDB 639033）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_u8zc19T_vA9BgQFzVPNx1c
          claim_id: c_MP368G2rAY2ZXNYmoE8eR2
          source_id: s_YVv7KHQnggy3DaPe4vKU63
          stance: supports
          locator: CBDB:639033
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

# 王汝衡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝衡 | accepted |
| bio.summary | 王汝衡，清人物。籍贯山陰，曾任縣丞。（中国历代人物传记资料库 CBDB 639033） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝衡（CBDB 639033）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639033&o=json)
