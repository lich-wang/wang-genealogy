---
schema: wang-person/v1
id: p_43nj9ZEJASEReiFxwkqziz
status: active
merged_into: null
display_name: 周前
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uo5v2_Y9F1TASajfP5_OU-
        subject_person_id: p_43nj9ZEJASEReiFxwkqziz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 周前，中国核医学家。维基数据以独立条目 Q109348678 收录该人物。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_32HGggReIfeQuaJlRmRzf3
          claim_id: c_uo5v2_Y9F1TASajfP5_OU-
          source_id: s_cf4ZP1otVdewFdKzTPVgcj
          stance: supports
          locator: Q109348678
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_cf4ZP1otVdewFdKzTPVgcj
            source_type: api_record
            title: 维基数据：周前（Q109348678）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q109348678
            external_identifier: Q109348678
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%91%A8%E5%89%8D
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XpaEcGQfeApA6QkSjuCF2G
        subject_person_id: p_43nj9ZEJASEReiFxwkqziz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 周前
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ynQFjTKFr2h6o8pCmdsQ43
          claim_id: c_XpaEcGQfeApA6QkSjuCF2G
          source_id: s_cf4ZP1otVdewFdKzTPVgcj
          stance: supports
          locator: Q109348678
          quotation: null
          interpretation_note: 导入亲属人物姓名
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
        id: c_N3Ez6BFqb4q2AA8iQRndh7
        subject_person_id: p_43nj9ZEJASEReiFxwkqziz
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xyTKb2grpvEktR1evrrpmS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Eazkyx8vhGseN268VJiaWi
          claim_id: c_N3Ez6BFqb4q2AA8iQRndh7
          source_id: s_cf4ZP1otVdewFdKzTPVgcj
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_R5K2v7Jzk7VMECrWxE6dfp
          claim_id: c_N3Ez6BFqb4q2AA8iQRndh7
          source_id: s_CL7tL6r0eI9SgrOMlR66MF
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_CL7tL6r0eI9SgrOMlR66MF
            source_type: website
            title: 中文维基百科：王世真
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B8%96%E7%9C%9F
            external_identifier: Q9185449
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person:
        id: p_xyTKb2grpvEktR1evrrpmS
        status: active
        display_name: 王世真
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 周前

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 周前，中国核医学家。维基数据以独立条目 Q109348678 收录该人物。 | accepted |
| name.primary | 周前 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_xyTKb2grpvEktR1evrrpmS | 王世真 | accepted |

## 外部来源

- [维基数据：周前（Q109348678）](https://www.wikidata.org/wiki/Q109348678)
- [中文维基百科：王世真](https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B8%96%E7%9C%9F)
