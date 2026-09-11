---
schema: wang-person/v1
id: p_GkhmpB8UTtbQpy8gtbj5PX
status: active
merged_into: null
display_name: 王芳基
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wDTKymbmevMfGDj4yDyPT1
        subject_person_id: p_GkhmpB8UTtbQpy8gtbj5PX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芳基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Dc2BxaBHwY2sVt9EdGcECo
          claim_id: c_wDTKymbmevMfGDj4yDyPT1
          source_id: s_PUjRY5vAVVMjMhf3WP7Mer
          stance: supports
          locator: CBDB:640057
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640057）
          source: &a1
            id: s_PUjRY5vAVVMjMhf3WP7Mer
            source_type: api_record
            title: 中国历代人物传记资料库：王芳基（CBDB 640057）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640057&o=json
            external_identifier: CBDB:640057
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.136Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RCpzkY9QXwGM8E2iKB1g7V
        subject_person_id: p_GkhmpB8UTtbQpy8gtbj5PX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芳基，清人物。籍贯達縣，曾任主事。（中国历代人物传记资料库 CBDB 640057）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SvlOOK9_Tg8hmnPMPslaIB
          claim_id: c_RCpzkY9QXwGM8E2iKB1g7V
          source_id: s_PUjRY5vAVVMjMhf3WP7Mer
          stance: supports
          locator: CBDB:640057
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

# 王芳基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王芳基 | accepted |
| bio.summary | 王芳基，清人物。籍贯達縣，曾任主事。（中国历代人物传记资料库 CBDB 640057） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王芳基（CBDB 640057）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640057&o=json)
