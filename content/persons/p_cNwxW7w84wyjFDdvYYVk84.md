---
schema: wang-person/v1
id: p_cNwxW7w84wyjFDdvYYVk84
status: active
merged_into: null
display_name: 王大堃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e16i5ryY236PiJtR1EEb8e
        subject_person_id: p_cNwxW7w84wyjFDdvYYVk84
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大堃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F1VFsgR714F65e8BEvT1Gm
          claim_id: c_e16i5ryY236PiJtR1EEb8e
          source_id: s_xPueJ4fxPGJMBMjF8QKk3a
          stance: supports
          locator: CBDB:636893
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636893）
          source: &a1
            id: s_xPueJ4fxPGJMBMjF8QKk3a
            source_type: api_record
            title: 中国历代人物传记资料库：王大堃（CBDB 636893）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636893&o=json
            external_identifier: CBDB:636893
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.139Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AeQYj16yoDcNHB4UkMV2uj
        subject_person_id: p_cNwxW7w84wyjFDdvYYVk84
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大堃，清人物。籍贯萬泉，入仕監生，曾任縣丞、知縣。（中国历代人物传记资料库 CBDB 636893）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WPS-tjXUmz-BQlPbvBKqis
          claim_id: c_AeQYj16yoDcNHB4UkMV2uj
          source_id: s_xPueJ4fxPGJMBMjF8QKk3a
          stance: supports
          locator: CBDB:636893
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

# 王大堃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大堃 | accepted |
| bio.summary | 王大堃，清人物。籍贯萬泉，入仕監生，曾任縣丞、知縣。（中国历代人物传记资料库 CBDB 636893） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大堃（CBDB 636893）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636893&o=json)
