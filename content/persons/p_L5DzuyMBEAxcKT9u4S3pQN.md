---
schema: wang-person/v1
id: p_L5DzuyMBEAxcKT9u4S3pQN
status: active
merged_into: null
display_name: 王垣臨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mLFVuwH6EQQqszgfoaSQBg
        subject_person_id: p_L5DzuyMBEAxcKT9u4S3pQN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垣臨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3EbbrLvFxPoKRA4oagPQ68
          claim_id: c_mLFVuwH6EQQqszgfoaSQBg
          source_id: s_gTAWbuA4h1E4Fyh2xbijsY
          stance: supports
          locator: CBDB:636701
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636701）
          source: &a1
            id: s_gTAWbuA4h1E4Fyh2xbijsY
            source_type: api_record
            title: 中国历代人物传记资料库：王垣臨（CBDB 636701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636701&o=json
            external_identifier: CBDB:636701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.075Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8zn8DZPNFKATfcrBLyQyES
        subject_person_id: p_L5DzuyMBEAxcKT9u4S3pQN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垣臨，清人物。籍贯廬陵，入仕監生，曾任知州。（中国历代人物传记资料库 CBDB 636701）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Hvy437mrTrGUobRclPyO_H
          claim_id: c_8zn8DZPNFKATfcrBLyQyES
          source_id: s_gTAWbuA4h1E4Fyh2xbijsY
          stance: supports
          locator: CBDB:636701
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

# 王垣臨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王垣臨 | accepted |
| bio.summary | 王垣臨，清人物。籍贯廬陵，入仕監生，曾任知州。（中国历代人物传记资料库 CBDB 636701） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王垣臨（CBDB 636701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636701&o=json)
