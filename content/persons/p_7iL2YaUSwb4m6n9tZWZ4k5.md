---
schema: wang-person/v1
id: p_7iL2YaUSwb4m6n9tZWZ4k5
status: active
merged_into: null
display_name: 唐氏
revision: 1
cbdb_id: 386677
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5JxCvfGK53-G71uwtpnz2v
        subject_person_id: p_7iL2YaUSwb4m6n9tZWZ4k5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 唐氏，元人物。籍贯金華。（中国历代人物传记资料库 CBDB 386677）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LctYxHgJb2fcNdH2D6_xSb
          claim_id: c_5JxCvfGK53-G71uwtpnz2v
          source_id: s_7UCTNJaNxmObBFUHvI204B
          stance: supports
          locator: CBDB:386677
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7UCTNJaNxmObBFUHvI204B
            source_type: api_record
            title: 中国历代人物传记资料库：唐氏(王肖翁妻)（CBDB 386677）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386677&o=json
            external_identifier: CBDB:386677
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_y4phDw9FhKI1dTGKdx88u0
        subject_person_id: p_7iL2YaUSwb4m6n9tZWZ4k5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 唐氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NRcO7wpkt_c8lrP-Fe9Dvx
          claim_id: c_y4phDw9FhKI1dTGKdx88u0
          source_id: s_7UCTNJaNxmObBFUHvI204B
          stance: supports
          locator: CBDB:386677
          quotation: null
          interpretation_note: CBDB 明确记录的王肖翁配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_R4jJkfSLcUxfGGpevzNauU
        subject_person_id: p_nTVozGACxLLaWGNjhMQxnM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_7iL2YaUSwb4m6n9tZWZ4k5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jr84YymB7K92_kY6L879C_
          claim_id: c_R4jJkfSLcUxfGGpevzNauU
          source_id: s_7UCTNJaNxmObBFUHvI204B
          stance: supports
          locator: CBDB 双向互证（妻子 唐氏(王肖翁妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nTVozGACxLLaWGNjhMQxnM
        status: active
        display_name: 王肖翁
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 唐氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 唐氏，元人物。籍贯金華。（中国历代人物传记资料库 CBDB 386677） | accepted |
| name.primary | 唐氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_nTVozGACxLLaWGNjhMQxnM | 王肖翁 | accepted |

## 外部来源

- [中国历代人物传记资料库：唐氏(王肖翁妻)（CBDB 386677）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386677&o=json)
