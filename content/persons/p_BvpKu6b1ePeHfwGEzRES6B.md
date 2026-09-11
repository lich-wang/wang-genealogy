---
schema: wang-person/v1
id: p_BvpKu6b1ePeHfwGEzRES6B
status: active
merged_into: null
display_name: 王聲鑾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nbe3TjyAoFVw3y4soiURR3
        subject_person_id: p_BvpKu6b1ePeHfwGEzRES6B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聲鑾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mQ6dgDtVoM89CJLfEtp4zh
          claim_id: c_nbe3TjyAoFVw3y4soiURR3
          source_id: s_oq5TNTD42mbZeioDD7dn1e
          stance: supports
          locator: CBDB:639961
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639961）
          source: &a1
            id: s_oq5TNTD42mbZeioDD7dn1e
            source_type: api_record
            title: 中国历代人物传记资料库：王聲鑾（CBDB 639961）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639961&o=json
            external_identifier: CBDB:639961
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.102Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JtUA33LBHGvbrHdFrbbZcy
        subject_person_id: p_BvpKu6b1ePeHfwGEzRES6B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聲鑾，清人物。籍贯敘州府，曾任復設教諭。（中国历代人物传记资料库 CBDB 639961）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hD0eS26yB7t26Df5NqBr10
          claim_id: c_JtUA33LBHGvbrHdFrbbZcy
          source_id: s_oq5TNTD42mbZeioDD7dn1e
          stance: supports
          locator: CBDB:639961
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

# 王聲鑾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聲鑾 | accepted |
| bio.summary | 王聲鑾，清人物。籍贯敘州府，曾任復設教諭。（中国历代人物传记资料库 CBDB 639961） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王聲鑾（CBDB 639961）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639961&o=json)
