---
schema: wang-person/v1
id: p_pqMBieMoHH8cezpPjZy2Fu
status: active
merged_into: null
display_name: 王承時
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cPStF4wAJrF3EqM4BN8g6A
        subject_person_id: p_pqMBieMoHH8cezpPjZy2Fu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承時
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W6TJmWXVMJbMfaQKg2C2Kh
          claim_id: c_cPStF4wAJrF3EqM4BN8g6A
          source_id: s_GbcLcGRZPfEEAC5KK4aMrC
          stance: supports
          locator: CBDB:574461
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574461）
          source: &a1
            id: s_GbcLcGRZPfEEAC5KK4aMrC
            source_type: api_record
            title: 中国历代人物传记资料库：王承時（CBDB 574461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574461&o=json
            external_identifier: CBDB:574461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.680Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_85Gx8nxwtMVgVkBUg4DYe1
        subject_person_id: p_pqMBieMoHH8cezpPjZy2Fu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承時，清人物。籍贯麻城，入仕明經，曾任知縣。（中国历代人物传记资料库 CBDB 574461）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KVTK854oOhZOOkqY1t6i5A
          claim_id: c_85Gx8nxwtMVgVkBUg4DYe1
          source_id: s_GbcLcGRZPfEEAC5KK4aMrC
          stance: supports
          locator: CBDB:574461
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

# 王承時

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承時 | accepted |
| bio.summary | 王承時，清人物。籍贯麻城，入仕明經，曾任知縣。（中国历代人物传记资料库 CBDB 574461） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承時（CBDB 574461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574461&o=json)
