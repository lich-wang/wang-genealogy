---
schema: wang-person/v1
id: p_VpTXLYKtcE5gfCUDvvsRuC
status: active
merged_into: null
display_name: 王斗樞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sMa6ZGHSjSQSfjNu6wkg5m
        subject_person_id: p_VpTXLYKtcE5gfCUDvvsRuC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斗樞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_giD9EMTeRQJbNpWP4JsCkb
          claim_id: c_sMa6ZGHSjSQSfjNu6wkg5m
          source_id: s_A2ZaYx4jZB9KfB3xG613Py
          stance: supports
          locator: CBDB:472055
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（472055）
          source: &a1
            id: s_A2ZaYx4jZB9KfB3xG613Py
            source_type: api_record
            title: 中国历代人物传记资料库：王斗樞（CBDB 472055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472055&o=json
            external_identifier: CBDB:472055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.229Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tf5XGbVW96zqiUoJuP1THK
        subject_person_id: p_VpTXLYKtcE5gfCUDvvsRuC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斗樞，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 472055）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4-Y5h5Qwo16_boNmFG2Yte
          claim_id: c_tf5XGbVW96zqiUoJuP1THK
          source_id: s_A2ZaYx4jZB9KfB3xG613Py
          stance: supports
          locator: CBDB:472055
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

# 王斗樞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王斗樞 | accepted |
| bio.summary | 王斗樞，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 472055） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王斗樞（CBDB 472055）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472055&o=json)
