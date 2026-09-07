---
schema: wang-person/v1
id: p_vECY2RWC8NFBnoES7y7LdB
status: active
merged_into: null
display_name: 王羽
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E9Z8aHViFjFyDCN8rTyuR2
        subject_person_id: p_vECY2RWC8NFBnoES7y7LdB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王羽，史料所见人物。本项目依据《維基數據：王羽》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_XaK2bzXJ4_r48jWjcQ04r0
          claim_id: c_E9Z8aHViFjFyDCN8rTyuR2
          source_id: s_vogvNSh2CTNwfH7vhv8cYh
          stance: supports
          locator: Q45587200
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_vogvNSh2CTNwfH7vhv8cYh
            source_type: api_record
            title: 維基數據：王羽（Q45587200）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45587200
            external_identifier: Q45587200
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:32.785Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8Cf6UEfQqZjQaz7zxFAUMg
        subject_person_id: p_vECY2RWC8NFBnoES7y7LdB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王羽
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GMGBmh3Cq9HsFQDEnS3sZv
          claim_id: c_8Cf6UEfQqZjQaz7zxFAUMg
          source_id: s_vogvNSh2CTNwfH7vhv8cYh
          stance: supports
          locator: Q45587200
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1mTWCx2cXAU2cQcXEejmsc
        subject_person_id: p_KrXiuuihJGRDJgH856L9a9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vECY2RWC8NFBnoES7y7LdB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_39QJuYvAjcJXpmhmNCKFJo
          claim_id: c_1mTWCx2cXAU2cQcXEejmsc
          source_id: s_dXaw5BQq5h8whc85LQk5NX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_dXaw5BQq5h8whc85LQk5NX
            source_type: website
            title: 中文维基百科：王之涣
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/王之涣
            external_identifier: Q707247
            license_code: CC-BY-SA-4.0
            accessed_at: null
            metadata_json: null
        - id: cs_awPa1tFAQ9z9zAz7RTpLRN
          claim_id: c_1mTWCx2cXAU2cQcXEejmsc
          source_id: s_AeboiVEUJhCZQ8vjPrFC5K
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_AeboiVEUJhCZQ8vjPrFC5K
            source_type: api_record
            title: 維基數據：王之涣（Q707247）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q707247
            external_identifier: Q707247
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:53.898Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B9%8B%E6%B6%A3
        - id: cs_pEHFuk57X9dRYSSJdUv2hy
          claim_id: c_1mTWCx2cXAU2cQcXEejmsc
          source_id: s_vogvNSh2CTNwfH7vhv8cYh
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_vogvNSh2CTNwfH7vhv8cYh
            source_type: api_record
            title: 維基數據：王羽（Q45587200）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45587200
            external_identifier: Q45587200
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:32.785Z
            metadata_json: null
        - id: cs_jPxCevBR5agoifTiXxoDkd
          claim_id: c_1mTWCx2cXAU2cQcXEejmsc
          source_id: s_ro2BQ8An4MUCixni7Q6nBN
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_ro2BQ8An4MUCixni7Q6nBN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王羽（153367）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153367&o=json
            external_identifier: CBDB:153367
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:51:20.413Z
            metadata_json: null
      object_person:
        id: p_KrXiuuihJGRDJgH856L9a9
        status: active
        display_name: 王之涣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王羽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王羽，史料所见人物。本项目依据《維基數據：王羽》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王羽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KrXiuuihJGRDJgH856L9a9 | 王之涣 | accepted |

## 外部来源

- [維基數據：王羽（Q45587200）](https://www.wikidata.org/wiki/Q45587200)
- [維基數據：王之涣（Q707247）](https://www.wikidata.org/wiki/Q707247)
- [中文维基百科：王之涣](https://zh.wikipedia.org/wiki/王之涣)
- [CBDB 中国历代人物传记资料库：王羽（153367）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153367&o=json)
