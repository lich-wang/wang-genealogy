---
schema: wang-person/v1
id: p_nQfdKa3waNMqsCz4G6Sup2
status: active
merged_into: null
display_name: 王效曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vPbCNwCMA59je5na34Um4X
        subject_person_id: p_nQfdKa3waNMqsCz4G6Sup2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王效曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4S2XPDNCM2U2Gx22LUJ5nY
          claim_id: c_vPbCNwCMA59je5na34Um4X
          source_id: s_P3mSwFExcNbAPB4v8Z4oiS
          stance: supports
          locator: CBDB:638170
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638170）
          source: &a1
            id: s_P3mSwFExcNbAPB4v8Z4oiS
            source_type: api_record
            title: 中国历代人物传记资料库：王效曾（CBDB 638170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638170&o=json
            external_identifier: CBDB:638170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.550Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aGG6526TCyho2Bf7dbM6n1
        subject_person_id: p_nQfdKa3waNMqsCz4G6Sup2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王效曾，清人物。籍贯宛平，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 638170）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kQwdnACY8o_DBE6JbNKlq4
          claim_id: c_aGG6526TCyho2Bf7dbM6n1
          source_id: s_P3mSwFExcNbAPB4v8Z4oiS
          stance: supports
          locator: CBDB:638170
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

# 王效曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王效曾 | accepted |
| bio.summary | 王效曾，清人物。籍贯宛平，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 638170） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王效曾（CBDB 638170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638170&o=json)
