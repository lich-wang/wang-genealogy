---
schema: wang-person/v1
id: p_JEhaoRfj5idkuzddKEqDkC
status: active
merged_into: null
display_name: 王鎮之
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uSTZadb4ID5_ibsc_uhvi9
        subject_person_id: p_JEhaoRfj5idkuzddKEqDkC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮之（357年—422年），字伯重，琅邪臨沂人。東晉平南將軍、荊州刺史王廙曾孫，東晉末年及南朝宋初年官員，擅長當官，在地方甚有治職，在朝中亦秉正執法，嚴厲但不殘酷，得當時人稱許。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_2vQ67bYfxqo7UEIyn5eTTd
          claim_id: c_uSTZadb4ID5_ibsc_uhvi9
          source_id: s_2tExJleEyjfEw4bxuX-s63
          stance: supports
          locator: 导言
          quotation: 王鎮之（357年—422年），字伯重，琅邪臨沂人。東晉平南將軍、
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_2tExJleEyjfEw4bxuX-s63
            source_type: website
            title: 中文维基百科：王鎮之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%8E%AE%E4%B9%8B
            external_identifier: Q13560622
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_oSSTpLpengBDhX41WfgYp9
        subject_person_id: p_JEhaoRfj5idkuzddKEqDkC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 357年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0357-01-01
            latest: 0357-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LC2TJQdVn9LVZjk2KM1B3U
          claim_id: c_oSSTpLpengBDhX41WfgYp9
          source_id: s_5SeCupQqX1hYR4NqJbZFVg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_5SeCupQqX1hYR4NqJbZFVg
            source_type: api_record
            title: 维基数据：王鎮之（Q13560622）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13560622
            external_identifier: Q13560622
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:25.389Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%8E%AE%E4%B9%8B
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JBzGV6q9fHoAJBiCSyUC1B
        subject_person_id: p_JEhaoRfj5idkuzddKEqDkC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_rL7mRQ45XYLi8LzoL2Eecv
          claim_id: c_JBzGV6q9fHoAJBiCSyUC1B
          source_id: s_5SeCupQqX1hYR4NqJbZFVg
          stance: supports
          locator: Q13560622
          quotation: null
          interpretation_note: null
          source:
            id: s_5SeCupQqX1hYR4NqJbZFVg
            source_type: api_record
            title: 维基数据：王鎮之（Q13560622）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13560622
            external_identifier: Q13560622
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:25.389Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%8E%AE%E4%B9%8B
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kUXtA5zuAh76SfDDmuoxu1
        subject_person_id: p_CF5TBeQK8jUMNAF7f5R2Qx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JEhaoRfj5idkuzddKEqDkC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_toV9F2dVccxU7kPk9TEeiy
          claim_id: c_kUXtA5zuAh76SfDDmuoxu1
          source_id: s_PnQSYLsNJXc2upV6EjS29M
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_PnQSYLsNJXc2upV6EjS29M
            source_type: api_record
            title: 维基数据：王随之（Q22814795）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22814795
            external_identifier: Q22814795
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:24.493Z
            metadata_json: null
        - id: cs_NGV4DKaSMrV13Apc6Y7vxr
          claim_id: c_kUXtA5zuAh76SfDDmuoxu1
          source_id: s_2tExJleEyjfEw4bxuX-s63
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_CF5TBeQK8jUMNAF7f5R2Qx
        status: active
        display_name: 王随之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鎮之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鎮之（357年—422年），字伯重，琅邪臨沂人。東晉平南將軍、荊州刺史王廙曾孫，東晉末年及南朝宋初年官員，擅長當官，在地方甚有治職，在朝中亦秉正執法，嚴厲但不殘酷，得當時人稱許。 | accepted |
| birth.date | 357年 | accepted |
| name.primary | 王鎮之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CF5TBeQK8jUMNAF7f5R2Qx | 王随之 | accepted |

## 外部来源

- [维基数据：王随之（Q22814795）](https://www.wikidata.org/wiki/Q22814795)
- [维基数据：王鎮之（Q13560622）](https://www.wikidata.org/wiki/Q13560622)
- [中文维基百科：王鎮之](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%8E%AE%E4%B9%8B)
