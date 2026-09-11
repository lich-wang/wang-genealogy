---
schema: wang-person/v1
id: p_ZQ28XAC2QhSxqFPvBrBFDU
status: active
merged_into: null
display_name: 王文贊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UcEMfVyqE14BDiZh3EYBUs
        subject_person_id: p_ZQ28XAC2QhSxqFPvBrBFDU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文贊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8hpWd4qEpAt577sb5LWdvk
          claim_id: c_UcEMfVyqE14BDiZh3EYBUs
          source_id: s_PfjQ6BUe4YHCUL2QfELm5c
          stance: supports
          locator: CBDB:638286
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638286）
          source: &a1
            id: s_PfjQ6BUe4YHCUL2QfELm5c
            source_type: api_record
            title: 中国历代人物传记资料库：王文贊（CBDB 638286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638286&o=json
            external_identifier: CBDB:638286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.579Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YhLQQX3meDmspPyUaVPRwx
        subject_person_id: p_ZQ28XAC2QhSxqFPvBrBFDU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文贊，清人物。籍贯施南府，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 638286）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4UcvMB2bI05HpOrNnOfULv
          claim_id: c_YhLQQX3meDmspPyUaVPRwx
          source_id: s_PfjQ6BUe4YHCUL2QfELm5c
          stance: supports
          locator: CBDB:638286
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

# 王文贊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文贊 | accepted |
| bio.summary | 王文贊，清人物。籍贯施南府，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 638286） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文贊（CBDB 638286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638286&o=json)
