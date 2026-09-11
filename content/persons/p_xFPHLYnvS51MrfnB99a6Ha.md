---
schema: wang-person/v1
id: p_xFPHLYnvS51MrfnB99a6Ha
status: active
merged_into: null
display_name: 王廷瑞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_96UJoHgnzDNUTWBCu12vfT
        subject_person_id: p_xFPHLYnvS51MrfnB99a6Ha
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VosdyemB1DjDVPa8YLQcpk
          claim_id: c_96UJoHgnzDNUTWBCu12vfT
          source_id: s_nB7kcTXJuFBGyMKy6Km5HL
          stance: supports
          locator: CBDB:486602
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（486602）
          source: &a1
            id: s_nB7kcTXJuFBGyMKy6Km5HL
            source_type: api_record
            title: 中国历代人物传记资料库：王廷瑞（CBDB 486602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=486602&o=json
            external_identifier: CBDB:486602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BEqWZJ5WMx86mKn3FBCQ2T
        subject_person_id: p_xFPHLYnvS51MrfnB99a6Ha
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷瑞，明人物。曾任參將、副將軍。（中国历代人物传记资料库 CBDB 486602）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lBRY-mlXKdMdtE4yJ9UOmI
          claim_id: c_BEqWZJ5WMx86mKn3FBCQ2T
          source_id: s_nB7kcTXJuFBGyMKy6Km5HL
          stance: supports
          locator: CBDB:486602
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

# 王廷瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷瑞 | accepted |
| bio.summary | 王廷瑞，明人物。曾任參將、副將軍。（中国历代人物传记资料库 CBDB 486602） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷瑞（CBDB 486602）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=486602&o=json)
