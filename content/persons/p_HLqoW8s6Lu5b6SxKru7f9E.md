---
schema: wang-person/v1
id: p_HLqoW8s6Lu5b6SxKru7f9E
status: active
merged_into: null
display_name: 王建言
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n7cHzxnDKjp5PK6oLRKeqq
        subject_person_id: p_HLqoW8s6Lu5b6SxKru7f9E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iuLwk23G2nZuS3nCkjE1CJ
          claim_id: c_n7cHzxnDKjp5PK6oLRKeqq
          source_id: s_L31Lw2RegRvV2k98CESwiP
          stance: supports
          locator: CBDB:71822
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71822）
          source: &a1
            id: s_L31Lw2RegRvV2k98CESwiP
            source_type: api_record
            title: 中国历代人物传记资料库：王建言（CBDB 71822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71822&o=json
            external_identifier: CBDB:71822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HSsJfSRqbFtSCay5Kw84VE
        subject_person_id: p_HLqoW8s6Lu5b6SxKru7f9E
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1833年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AhZHLN5a7ca1av3N4DRQKz
          claim_id: c_HSsJfSRqbFtSCay5Kw84VE
          source_id: s_L31Lw2RegRvV2k98CESwiP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iGS5BRrQa1vNZkD3sFUfkn
        subject_person_id: p_HLqoW8s6Lu5b6SxKru7f9E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建言（生于1833年），清人物。籍贯博山。（中国历代人物传记资料库 CBDB 71822）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PXZ3Pb7K5BMpnUOmxDS-gf
          claim_id: c_iGS5BRrQa1vNZkD3sFUfkn
          source_id: s_L31Lw2RegRvV2k98CESwiP
          stance: supports
          locator: CBDB:71822
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

# 王建言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建言 | accepted |
| birth.date | 1833年 | accepted |
| bio.summary | 王建言（生于1833年），清人物。籍贯博山。（中国历代人物传记资料库 CBDB 71822） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王建言（CBDB 71822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71822&o=json)
