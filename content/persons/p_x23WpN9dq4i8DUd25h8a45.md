---
schema: wang-person/v1
id: p_x23WpN9dq4i8DUd25h8a45
status: merged
merged_into: p_bgBMreRfU6UBPxaaHkRLvA
display_name: 王珏
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2pF42UEtnT4ZGREU2STyEW
        subject_person_id: p_x23WpN9dq4i8DUd25h8a45
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gw1PyH6ccayXoatgYbCmeb
          claim_id: c_2pF42UEtnT4ZGREU2STyEW
          source_id: s_cQA8CMBYtUKxq8rQ9hZZvG
          stance: supports
          locator: CBDB:158870
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（158870）
          source: &a1
            id: s_cQA8CMBYtUKxq8rQ9hZZvG
            source_type: api_record
            title: 中国历代人物传记资料库：王珏（CBDB 158870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158870&o=json
            external_identifier: CBDB:158870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.929Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s12VGv4utivaPKAUKvSSpU
        subject_person_id: p_x23WpN9dq4i8DUd25h8a45
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珏，唐人物。籍贯共城。（中国历代人物传记资料库 CBDB 158870）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VQwehm35X0dwO9xZobeqZB
          claim_id: c_s12VGv4utivaPKAUKvSSpU
          source_id: s_cQA8CMBYtUKxq8rQ9hZZvG
          stance: supports
          locator: CBDB:158870
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

# 王珏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珏 | accepted |
| bio.summary | 王珏，唐人物。籍贯共城。（中国历代人物传记资料库 CBDB 158870） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珏（CBDB 158870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158870&o=json)
