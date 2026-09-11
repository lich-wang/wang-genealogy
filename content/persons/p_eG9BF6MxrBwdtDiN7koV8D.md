---
schema: wang-person/v1
id: p_eG9BF6MxrBwdtDiN7koV8D
status: active
merged_into: null
display_name: 王墉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tmv6jUqcRkukVW2UPgMQkJ
        subject_person_id: p_eG9BF6MxrBwdtDiN7koV8D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王墉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XmKMwhNmNRDcTMeBK5wbEW
          claim_id: c_tmv6jUqcRkukVW2UPgMQkJ
          source_id: s_zyVEvJhBQzgb6iVXieFSDC
          stance: supports
          locator: CBDB:636765
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636765）
          source: &a1
            id: s_zyVEvJhBQzgb6iVXieFSDC
            source_type: api_record
            title: 中国历代人物传记资料库：王墉（CBDB 636765）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636765&o=json
            external_identifier: CBDB:636765
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.251Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E9dB7hz5R3T518NDRFDnpA
        subject_person_id: p_eG9BF6MxrBwdtDiN7koV8D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王墉，清人物。籍贯冀州直隸州直轄地方，入仕附貢生，曾任復設教諭。（中国历代人物传记资料库 CBDB 636765）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ru7MUPG3OpUjZhmrevbw0B
          claim_id: c_E9dB7hz5R3T518NDRFDnpA
          source_id: s_zyVEvJhBQzgb6iVXieFSDC
          stance: supports
          locator: CBDB:636765
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

# 王墉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王墉 | accepted |
| bio.summary | 王墉，清人物。籍贯冀州直隸州直轄地方，入仕附貢生，曾任復設教諭。（中国历代人物传记资料库 CBDB 636765） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王墉（CBDB 636765）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636765&o=json)
