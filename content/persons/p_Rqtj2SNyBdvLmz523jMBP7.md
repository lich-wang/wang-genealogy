---
schema: wang-person/v1
id: p_Rqtj2SNyBdvLmz523jMBP7
status: active
merged_into: null
display_name: 王氏
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c__XaRoQwSoXf3ZJTdyoqm1Y
        subject_person_id: p_Rqtj2SNyBdvLmz523jMBP7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏，史料所见人物。本项目依据《王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r0untEhqevKk2ByQFUbQDG
          claim_id: c__XaRoQwSoXf3ZJTdyoqm1Y
          source_id: s_6RNWqL19YxdULNCXE7RTBw
          stance: supports
          locator: Q13688975
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_6RNWqL19YxdULNCXE7RTBw
            source_type: api_record
            title: 维基数据：王氏（Q13688975）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13688975
            external_identifier: Q13688975
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:29.703Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CuB6h9ZVM8ujRJPsVqi3Lx
        subject_person_id: p_Rqtj2SNyBdvLmz523jMBP7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yahoqwTe2LwUKknarWqHPq
          claim_id: c_CuB6h9ZVM8ujRJPsVqi3Lx
          source_id: s_6RNWqL19YxdULNCXE7RTBw
          stance: supports
          locator: Q13688975
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vb8RGGay4VYwNP7cBf1QHM
        subject_person_id: p_x9CQGixzEkUnA7H8VckBPu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Rqtj2SNyBdvLmz523jMBP7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iqMDF2u83EoNUXuURU7A6v
          claim_id: c_vb8RGGay4VYwNP7cBf1QHM
          source_id: s_SwHU4SeGpPq4puTdYE17fn
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_SwHU4SeGpPq4puTdYE17fn
            source_type: api_record
            title: 维基数据：王引之（Q11573061）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573061
            external_identifier: Q11573061
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:19.447Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BC%95%E4%B9%8B
        - id: cs_27UgPkcWJ9x9GHy5ES63qN
          claim_id: c_vb8RGGay4VYwNP7cBf1QHM
          source_id: s_6RNWqL19YxdULNCXE7RTBw
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_x9CQGixzEkUnA7H8VckBPu
        status: active
        display_name: 王引之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_6Eq8HbLk4QcLgULavW2vbW
        subject_person_id: p_mX3GhtHPCXiAf4LBu5o6P4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Rqtj2SNyBdvLmz523jMBP7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VRMyakkwDvEPU12DNYEyNd
          claim_id: c_6Eq8HbLk4QcLgULavW2vbW
          source_id: s_6RNWqL19YxdULNCXE7RTBw
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_BVGJbFLEyLW9kYvS7kvGPB
          claim_id: c_6Eq8HbLk4QcLgULavW2vbW
          source_id: s_CC7x2cYhAh7m1CUb8G1iVZ
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_CC7x2cYhAh7m1CUb8G1iVZ
            source_type: api_record
            title: 维基数据：史致蕃（Q13688950）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13688950
            external_identifier: Q13688950
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%8F%B2%E8%87%B4%E8%95%83
      object_person:
        id: p_mX3GhtHPCXiAf4LBu5o6P4
        status: active
        display_name: 史致蕃
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王氏，史料所见人物。本项目依据《王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_x9CQGixzEkUnA7H8VckBPu | 王引之 | accepted |
| spouses | p_mX3GhtHPCXiAf4LBu5o6P4 | 史致蕃 | accepted |

## 外部来源

- [维基数据：史致蕃（Q13688950）](https://www.wikidata.org/wiki/Q13688950)
- [维基数据：王氏（Q13688975）](https://www.wikidata.org/wiki/Q13688975)
- [维基数据：王引之（Q11573061）](https://www.wikidata.org/wiki/Q11573061)
