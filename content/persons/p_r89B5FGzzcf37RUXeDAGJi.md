---
schema: wang-person/v1
id: p_r89B5FGzzcf37RUXeDAGJi
status: active
merged_into: null
display_name: 王瓒之
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5v-FnKBpEIwS1W0-NHN_rS
        subject_person_id: p_r89B5FGzzcf37RUXeDAGJi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓒之，史料所见人物。本项目依据《王瓒之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_m8nyaBzQtqpVIAIU_EEyzw
          claim_id: c_5v-FnKBpEIwS1W0-NHN_rS
          source_id: s_T7QU695AMnNHcJsPzAPCKN
          stance: supports
          locator: Q22815013
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_T7QU695AMnNHcJsPzAPCKN
            source_type: api_record
            title: 维基数据：王瓒之（Q22815013）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22815013
            external_identifier: Q22815013
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:49.354Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1gUa9WfPLJCdRNowE5DiK1
        subject_person_id: p_r89B5FGzzcf37RUXeDAGJi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓒之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FvMCXH9Y46bpKRKvNqXj2U
          claim_id: c_1gUa9WfPLJCdRNowE5DiK1
          source_id: s_T7QU695AMnNHcJsPzAPCKN
          stance: supports
          locator: Q22815013
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2mz7mWVCG3ZEA7rfVDsLRe
        subject_person_id: p_PfgXZYxCc5dBQbZvBHkDAc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r89B5FGzzcf37RUXeDAGJi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_6m3VM8KEAGAfmWv9U4bbnx
          claim_id: c_2mz7mWVCG3ZEA7rfVDsLRe
          source_id: s_msG3gE3n1DSE5q3deppwMN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_msG3gE3n1DSE5q3deppwMN
            source_type: api_record
            title: 维基数据：王敬弘（Q13560629）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q13560629
            external_identifier: Q13560629
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:46.209Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%95%AC%E5%BC%98
        - id: cs_c7esTgGwHSm2oSZxcsuLpB
          claim_id: c_2mz7mWVCG3ZEA7rfVDsLRe
          source_id: s_T7QU695AMnNHcJsPzAPCKN
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_T7QU695AMnNHcJsPzAPCKN
            source_type: api_record
            title: 维基数据：王瓒之（Q22815013）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22815013
            external_identifier: Q22815013
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:49.354Z
            metadata_json: null
      object_person:
        id: p_PfgXZYxCc5dBQbZvBHkDAc
        status: active
        display_name: 王敬弘
        merged_into_person_id: null
  children:
    - claim:
        id: c_vznMbkDZmbMbAFoC2f6gm5
        subject_person_id: p_r89B5FGzzcf37RUXeDAGJi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_d2zCByefg1u3xYEJvrh4AD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_v8PGPsoorV41CX6XNP42Su
          claim_id: c_vznMbkDZmbMbAFoC2f6gm5
          source_id: s_T7QU695AMnNHcJsPzAPCKN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_T7QU695AMnNHcJsPzAPCKN
            source_type: api_record
            title: 维基数据：王瓒之（Q22815013）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q22815013
            external_identifier: Q22815013
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:24:49.354Z
            metadata_json: null
        - id: cs_mjkHZAaZk7nH77b546Cf7W
          claim_id: c_vznMbkDZmbMbAFoC2f6gm5
          source_id: s_Mm7T9pWrxZB411yCw22csg
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Mm7T9pWrxZB411yCw22csg
            source_type: api_record
            title: 维基数据：王秀之（Q11573186）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573186
            external_identifier: Q11573186
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:30:51.108Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A7%80%E4%B9%8B
      object_person:
        id: p_d2zCByefg1u3xYEJvrh4AD
        status: active
        display_name: 王秀之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瓒之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王瓒之，史料所见人物。本项目依据《王瓒之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王瓒之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PfgXZYxCc5dBQbZvBHkDAc | 王敬弘 | accepted |
| children | p_d2zCByefg1u3xYEJvrh4AD | 王秀之 | accepted |

## 外部来源

- [维基数据：王敬弘（Q13560629）](https://www.wikidata.org/wiki/Q13560629)
- [维基数据：王秀之（Q11573186）](https://www.wikidata.org/wiki/Q11573186)
- [维基数据：王瓒之（Q22815013）](https://www.wikidata.org/wiki/Q22815013)
