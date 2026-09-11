---
schema: wang-person/v1
id: p_TRB43Z4pqw8yWosXC27Gpz
status: active
merged_into: null
display_name: 王時㐵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z7jjBJ4tBTXkp7ArhMJ3D6
        subject_person_id: p_TRB43Z4pqw8yWosXC27Gpz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時㐵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pUjGLftpKwM88PCcU7ZJom
          claim_id: c_Z7jjBJ4tBTXkp7ArhMJ3D6
          source_id: s_v4sab1o974YXawH26UiVgP
          stance: supports
          locator: CBDB:638439
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638439）
          source: &a1
            id: s_v4sab1o974YXawH26UiVgP
            source_type: api_record
            title: 中国历代人物传记资料库：王時㐵（CBDB 638439）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638439&o=json
            external_identifier: CBDB:638439
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.631Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1MAFU1Vtpzx6vTYFSDKDDD
        subject_person_id: p_TRB43Z4pqw8yWosXC27Gpz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時㐵，清人物。籍贯宜賓，曾任知縣。（中国历代人物传记资料库 CBDB 638439）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5KsbIBBEsJa7Mt1pe3WND4
          claim_id: c_1MAFU1Vtpzx6vTYFSDKDDD
          source_id: s_v4sab1o974YXawH26UiVgP
          stance: supports
          locator: CBDB:638439
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

# 王時㐵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時㐵 | accepted |
| bio.summary | 王時㐵，清人物。籍贯宜賓，曾任知縣。（中国历代人物传记资料库 CBDB 638439） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王時㐵（CBDB 638439）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638439&o=json)
