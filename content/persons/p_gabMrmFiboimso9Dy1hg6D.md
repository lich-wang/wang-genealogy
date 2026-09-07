---
schema: wang-person/v1
id: p_gabMrmFiboimso9Dy1hg6D
status: active
merged_into: null
display_name: 王匡
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JgrtMHmLBoZ7WmrR3hPQ5s
        subject_person_id: p_gabMrmFiboimso9Dy1hg6D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王匡，史料所见人物。本项目依据《維基數據：王匡》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_ksoE5n93OikGHH87rf6kzB
          claim_id: c_JgrtMHmLBoZ7WmrR3hPQ5s
          source_id: s_jqYwn6sCp3EEtn4XUs9aAq
          stance: supports
          locator: Q10412750
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_jqYwn6sCp3EEtn4XUs9aAq
            source_type: api_record
            title: 維基數據：王匡（Q10412750）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10412750
            external_identifier: Q10412750
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:38.657Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8C%A1_(%E7%8E%8B%E8%8E%BD%E4%B9%8B%E5%AD%90)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kSmZmL9rPCNJnGa61GGdBU
        subject_person_id: p_gabMrmFiboimso9Dy1hg6D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王匡
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QRscd7ygaymG17K3tdcFbM
          claim_id: c_kSmZmL9rPCNJnGa61GGdBU
          source_id: s_jqYwn6sCp3EEtn4XUs9aAq
          stance: supports
          locator: Q10412750
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RJBNmuHWYLzt6sG9LojFDd
        subject_person_id: p_ftTmaf71Kwzdeaet16S991
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gabMrmFiboimso9Dy1hg6D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Wqa98mVKNuNTWYUyj1Z82x
          claim_id: c_RJBNmuHWYLzt6sG9LojFDd
          source_id: s_EGrTvgmWGEBNKAJcMtkpwp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_EGrTvgmWGEBNKAJcMtkpwp
            source_type: website
            title: 中文维基百科：王莽
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/王莽
            external_identifier: Q7250
            license_code: CC-BY-SA-4.0
            accessed_at: null
            metadata_json: null
        - id: cs_pyrYCVjJvvc7DabAHLzSku
          claim_id: c_RJBNmuHWYLzt6sG9LojFDd
          source_id: s_qaqNC35CuGhESSMxWoCLgu
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_qaqNC35CuGhESSMxWoCLgu
            source_type: api_record
            title: 維基數據：王莽（Q7250）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7250
            external_identifier: Q7250
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:57.290Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%8E%BD
        - id: cs_WW6DxFroud95KbVcE9J2XE
          claim_id: c_RJBNmuHWYLzt6sG9LojFDd
          source_id: s_jqYwn6sCp3EEtn4XUs9aAq
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_jqYwn6sCp3EEtn4XUs9aAq
            source_type: api_record
            title: 維基數據：王匡（Q10412750）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10412750
            external_identifier: Q10412750
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:38.657Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8C%A1_(%E7%8E%8B%E8%8E%BD%E4%B9%8B%E5%AD%90)
      object_person:
        id: p_ftTmaf71Kwzdeaet16S991
        status: active
        display_name: 王莽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王匡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王匡，史料所见人物。本项目依据《維基數據：王匡》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王匡 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ftTmaf71Kwzdeaet16S991 | 王莽 | accepted |

## 外部来源

- [維基數據：王匡（Q10412750）](https://www.wikidata.org/wiki/Q10412750)
- [維基數據：王莽（Q7250）](https://www.wikidata.org/wiki/Q7250)
- [中文维基百科：王莽](https://zh.wikipedia.org/wiki/王莽)
