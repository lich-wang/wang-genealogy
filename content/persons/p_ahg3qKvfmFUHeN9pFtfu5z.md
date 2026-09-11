---
schema: wang-person/v1
id: p_ahg3qKvfmFUHeN9pFtfu5z
status: active
merged_into: null
display_name: 王智溥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ekFLZJNRHFXajwuwG4FdYk
        subject_person_id: p_ahg3qKvfmFUHeN9pFtfu5z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智溥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LNQChQLQhL6dzG6X44Ea1i
          claim_id: c_ekFLZJNRHFXajwuwG4FdYk
          source_id: s_V5fVpmA13Avs3PkW5uXnpw
          stance: supports
          locator: CBDB:638519
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638519）
          source: &a1
            id: s_V5fVpmA13Avs3PkW5uXnpw
            source_type: api_record
            title: 中国历代人物传记资料库：王智溥（CBDB 638519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638519&o=json
            external_identifier: CBDB:638519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.659Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HvVEMgieTYB2YPRbPezorw
        subject_person_id: p_ahg3qKvfmFUHeN9pFtfu5z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智溥，清人物。籍贯開封府，入仕廩生，曾任教授、復設教諭。（中国历代人物传记资料库 CBDB 638519）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8BbOCeVOIrRO_2u6h5jTKs
          claim_id: c_HvVEMgieTYB2YPRbPezorw
          source_id: s_V5fVpmA13Avs3PkW5uXnpw
          stance: supports
          locator: CBDB:638519
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

# 王智溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王智溥 | accepted |
| bio.summary | 王智溥，清人物。籍贯開封府，入仕廩生，曾任教授、復設教諭。（中国历代人物传记资料库 CBDB 638519） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王智溥（CBDB 638519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638519&o=json)
