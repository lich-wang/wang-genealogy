---
schema: wang-person/v1
id: p_oDaQsWD728U8dGG2jofSWb
status: active
merged_into: null
display_name: 王雲亮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HfTgGAzMeGkDGAP7V9CS4i
        subject_person_id: p_oDaQsWD728U8dGG2jofSWb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲亮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y6XQ29vzbZyC6mKJcbLaPH
          claim_id: c_HfTgGAzMeGkDGAP7V9CS4i
          source_id: s_GVdHCmPTXUz2umgf1Dwx9T
          stance: supports
          locator: CBDB:640801
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640801）
          source: &a1
            id: s_GVdHCmPTXUz2umgf1Dwx9T
            source_type: api_record
            title: 中国历代人物传记资料库：王雲亮（CBDB 640801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640801&o=json
            external_identifier: CBDB:640801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.374Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CfNdArfdgfddJwVT9FZXKB
        subject_person_id: p_oDaQsWD728U8dGG2jofSWb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲亮，清人物。籍贯保寧府，入仕進士，曾任教授。（中国历代人物传记资料库 CBDB 640801）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CFvNjUycdE3LkRITRrBOnm
          claim_id: c_CfNdArfdgfddJwVT9FZXKB
          source_id: s_GVdHCmPTXUz2umgf1Dwx9T
          stance: supports
          locator: CBDB:640801
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

# 王雲亮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲亮 | accepted |
| bio.summary | 王雲亮，清人物。籍贯保寧府，入仕進士，曾任教授。（中国历代人物传记资料库 CBDB 640801） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雲亮（CBDB 640801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640801&o=json)
