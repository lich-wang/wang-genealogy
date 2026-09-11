---
schema: wang-person/v1
id: p_FWGtAJ9vkQUuFUUfRWqrd8
status: active
merged_into: null
display_name: 王樹堂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1BEbm2nmVSF8GVMsWxisGm
        subject_person_id: p_FWGtAJ9vkQUuFUUfRWqrd8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹堂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EXkqXcUkkK1cc2vyF27qxB
          claim_id: c_1BEbm2nmVSF8GVMsWxisGm
          source_id: s_ANXJsrsD8f8TdEUbdxCZzS
          stance: supports
          locator: CBDB:638840
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638840）
          source: &a1
            id: s_ANXJsrsD8f8TdEUbdxCZzS
            source_type: api_record
            title: 中国历代人物传记资料库：王樹堂（CBDB 638840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638840&o=json
            external_identifier: CBDB:638840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.786Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QMB7DCq9as46cEhLu5fc2X
        subject_person_id: p_FWGtAJ9vkQUuFUUfRWqrd8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹堂，清人物。籍贯浙江省，曾任知州。（中国历代人物传记资料库 CBDB 638840）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_c3lZmoXklPLtDaxDdNHvEI
          claim_id: c_QMB7DCq9as46cEhLu5fc2X
          source_id: s_ANXJsrsD8f8TdEUbdxCZzS
          stance: supports
          locator: CBDB:638840
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

# 王樹堂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樹堂 | accepted |
| bio.summary | 王樹堂，清人物。籍贯浙江省，曾任知州。（中国历代人物传记资料库 CBDB 638840） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樹堂（CBDB 638840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638840&o=json)
