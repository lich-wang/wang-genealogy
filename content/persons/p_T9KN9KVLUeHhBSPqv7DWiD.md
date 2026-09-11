---
schema: wang-person/v1
id: p_T9KN9KVLUeHhBSPqv7DWiD
status: active
merged_into: null
display_name: 王元章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_juZAxEiG1BZkGLGhmWSVQs
        subject_person_id: p_T9KN9KVLUeHhBSPqv7DWiD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pooPT9XaAbkj24yLMFFvVr
          claim_id: c_juZAxEiG1BZkGLGhmWSVQs
          source_id: s_HQePfngzDY75zC7oQAD96z
          stance: supports
          locator: CBDB:636175
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636175）
          source: &a1
            id: s_HQePfngzDY75zC7oQAD96z
            source_type: api_record
            title: 中国历代人物传记资料库：王元章（CBDB 636175）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636175&o=json
            external_identifier: CBDB:636175
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.117Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uWR7eWbGJoHz7TmzzCsZMF
        subject_person_id: p_T9KN9KVLUeHhBSPqv7DWiD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元章，清人物。籍贯秦州直隸州直轄地方，曾任復設訓導。（中国历代人物传记资料库 CBDB 636175）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cQvOsqq4kIPdPLNz5oPF7g
          claim_id: c_uWR7eWbGJoHz7TmzzCsZMF
          source_id: s_HQePfngzDY75zC7oQAD96z
          stance: supports
          locator: CBDB:636175
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

# 王元章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元章 | accepted |
| bio.summary | 王元章，清人物。籍贯秦州直隸州直轄地方，曾任復設訓導。（中国历代人物传记资料库 CBDB 636175） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元章（CBDB 636175）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636175&o=json)
