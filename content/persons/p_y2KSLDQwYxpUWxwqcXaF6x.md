---
schema: wang-person/v1
id: p_y2KSLDQwYxpUWxwqcXaF6x
status: active
merged_into: null
display_name: 王名馨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vbsXCSTjKu6A26FjXF1RKs
        subject_person_id: p_y2KSLDQwYxpUWxwqcXaF6x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王名馨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YYTzhDJ3QbKN8tH9WygccM
          claim_id: c_vbsXCSTjKu6A26FjXF1RKs
          source_id: s_SU4339bB1bKLC4PBgsoNGJ
          stance: supports
          locator: CBDB:636519
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636519）
          source: &a1
            id: s_SU4339bB1bKLC4PBgsoNGJ
            source_type: api_record
            title: 中国历代人物传记资料库：王名馨（CBDB 636519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636519&o=json
            external_identifier: CBDB:636519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.018Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EBEs6V25LWZ5TpwQMWv3B9
        subject_person_id: p_y2KSLDQwYxpUWxwqcXaF6x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王名馨，清人物。籍贯貴陽府，入仕貢生: 恩貢，曾任教授、復設教諭。（中国历代人物传记资料库 CBDB 636519）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_I9j2xeoXusoF0gZrVSzEgv
          claim_id: c_EBEs6V25LWZ5TpwQMWv3B9
          source_id: s_SU4339bB1bKLC4PBgsoNGJ
          stance: supports
          locator: CBDB:636519
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

# 王名馨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王名馨 | accepted |
| bio.summary | 王名馨，清人物。籍贯貴陽府，入仕貢生: 恩貢，曾任教授、復設教諭。（中国历代人物传记资料库 CBDB 636519） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王名馨（CBDB 636519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636519&o=json)
