---
schema: wang-person/v1
id: p_wu3RJLf9zL8Fdddm53xV1K
status: active
merged_into: null
display_name: 王士骕
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Got7fuM1ZrJKLUs7U85XGa
        subject_person_id: p_wu3RJLf9zL8Fdddm53xV1K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士骕，史料所见人物。本项目依据《維基數據：王士骕》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_utCD556MkRaW8AhBRCckb0
          claim_id: c_Got7fuM1ZrJKLUs7U85XGa
          source_id: s_YcKNN7SJdWPWZRLdfg9JP4
          stance: supports
          locator: Q45446442
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_YcKNN7SJdWPWZRLdfg9JP4
            source_type: api_record
            title: 維基數據：王士骕（Q45446442）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45446442
            external_identifier: Q45446442
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:26.104Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_C1NT4VJ4bgDcsfSYxFYWtv
        subject_person_id: p_wu3RJLf9zL8Fdddm53xV1K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士骕
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wA8GGMRiibYcXGAYs4tVUb
          claim_id: c_C1NT4VJ4bgDcsfSYxFYWtv
          source_id: s_YcKNN7SJdWPWZRLdfg9JP4
          stance: supports
          locator: Q45446442
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_G2JUr4LJPTjQjEA21FR7Ud
        subject_person_id: p_g5KSSBRpZ9iAzVfbXmLaWQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wu3RJLf9zL8Fdddm53xV1K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ABiTkk6mY5PL6rPjNAxTHt
          claim_id: c_G2JUr4LJPTjQjEA21FR7Ud
          source_id: s_HmqFFuegxFne6fARS2kU7w
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_HmqFFuegxFne6fARS2kU7w
            source_type: website
            title: 中文维基百科：王世贞
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/王世贞
            external_identifier: Q6127545
            license_code: CC-BY-SA-4.0
            accessed_at: null
            metadata_json: null
        - id: cs_t5YQTjwDPmoLR933YMCLLS
          claim_id: c_G2JUr4LJPTjQjEA21FR7Ud
          source_id: s_PV6LjnAVB1mi771cCJQAMq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_PV6LjnAVB1mi771cCJQAMq
            source_type: api_record
            title: 維基數據：王世贞（Q6127545）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q6127545
            external_identifier: Q6127545
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:50.038Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B8%96%E8%B4%9E
        - id: cs_NpwdQP9Ewa6PmatHJuFU52
          claim_id: c_G2JUr4LJPTjQjEA21FR7Ud
          source_id: s_YcKNN7SJdWPWZRLdfg9JP4
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_YcKNN7SJdWPWZRLdfg9JP4
            source_type: api_record
            title: 維基數據：王士骕（Q45446442）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45446442
            external_identifier: Q45446442
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:26.104Z
            metadata_json: null
        - id: cs_eYcjdXpZB2XH9PfFckZf1N
          claim_id: c_G2JUr4LJPTjQjEA21FR7Ud
          source_id: s_76fbCaqkpYRJdb6E1UzNap
          stance: supports
          locator: 亲属关系：次子
          quotation: null
          interpretation_note: CBDB 注明此条来源：明史
          source:
            id: s_76fbCaqkpYRJdb6E1UzNap
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王世貞（34717）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34717&o=json
            external_identifier: CBDB:34717
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:44.815Z
            metadata_json: null
        - id: cs_YrvNdQ9sZ3zMkzbFAQGmcT
          claim_id: c_G2JUr4LJPTjQjEA21FR7Ud
          source_id: s_hntQXCN2PyGmwaMHMmrvTn
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：明史
          source:
            id: s_hntQXCN2PyGmwaMHMmrvTn
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王士驌（134660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134660&o=json
            external_identifier: CBDB:134660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:51:16.132Z
            metadata_json: null
        - id: cs_6FLZKdC861by4c8AFEZyN2
          claim_id: c_G2JUr4LJPTjQjEA21FR7Ud
          source_id: s_E6h9jdxebBKJtgq5x8chCs
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 子王士騏；王士骕；王士骏。
          interpretation_note: null
          source:
            id: s_E6h9jdxebBKJtgq5x8chCs
            source_type: website
            title: 中文维基百科：王世贞
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B8%96%E8%B4%9E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:13.415Z
            metadata_json: null
      object_person:
        id: p_g5KSSBRpZ9iAzVfbXmLaWQ
        status: active
        display_name: 王世贞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士骕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王士骕，史料所见人物。本项目依据《維基數據：王士骕》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王士骕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_g5KSSBRpZ9iAzVfbXmLaWQ | 王世贞 | accepted |

## 外部来源

- [維基數據：王士骕（Q45446442）](https://www.wikidata.org/wiki/Q45446442)
- [維基數據：王世贞（Q6127545）](https://www.wikidata.org/wiki/Q6127545)
- [中文维基百科：王世贞](https://zh.wikipedia.org/wiki/王世贞)
- [中文维基百科：王世贞](https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B8%96%E8%B4%9E)
- [CBDB 中国历代人物传记资料库：王士驌（134660）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134660&o=json)
- [CBDB 中国历代人物传记资料库：王世貞（34717）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34717&o=json)
