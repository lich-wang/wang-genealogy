---
schema: wang-person/v1
id: p_6pR9MaE3n75cPDMUX85Lth
status: active
merged_into: null
display_name: 王炎
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1w2RJVFPud5Q66Cnyw5uxa
        subject_person_id: p_6pR9MaE3n75cPDMUX85Lth
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炎，史料所见人物。本项目依据《維基數據：王炎》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_FekBgFYSGYpwKBklEY7Kh4
          claim_id: c_1w2RJVFPud5Q66Cnyw5uxa
          source_id: s_gEZHqb1X2r5ftxahGPe1D2
          stance: supports
          locator: Q45587135
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_gEZHqb1X2r5ftxahGPe1D2
            source_type: api_record
            title: 維基數據：王炎（Q45587135）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45587135
            external_identifier: Q45587135
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:31.798Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HKAPC5CghJ82rKNJw9sLPN
        subject_person_id: p_6pR9MaE3n75cPDMUX85Lth
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炎
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_32qfohPvGTDxwkzPoF6BoT
          claim_id: c_HKAPC5CghJ82rKNJw9sLPN
          source_id: s_gEZHqb1X2r5ftxahGPe1D2
          stance: supports
          locator: Q45587135
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tgDz1YAa1A6qtknzXY4Tvw
        subject_person_id: p_KrXiuuihJGRDJgH856L9a9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6pR9MaE3n75cPDMUX85Lth
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_bPtxBka5yjKhnCiFMu8tAH
          claim_id: c_tgDz1YAa1A6qtknzXY4Tvw
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
        - id: cs_A2WK6y7kpG6JDXPiPQDyDc
          claim_id: c_tgDz1YAa1A6qtknzXY4Tvw
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
        - id: cs_UjkXQsZ8NgqcxxXwuBLYMC
          claim_id: c_tgDz1YAa1A6qtknzXY4Tvw
          source_id: s_gEZHqb1X2r5ftxahGPe1D2
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_gEZHqb1X2r5ftxahGPe1D2
            source_type: api_record
            title: 維基數據：王炎（Q45587135）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45587135
            external_identifier: Q45587135
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:31.798Z
            metadata_json: null
        - id: cs_QWKdePXQL2JEUjpQafjCLH
          claim_id: c_tgDz1YAa1A6qtknzXY4Tvw
          source_id: s_aczpT6d99jLZS3LK33dYX2
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_aczpT6d99jLZS3LK33dYX2
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王炎（153366）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153366&o=json
            external_identifier: CBDB:153366
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:51:19.406Z
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

# 王炎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王炎，史料所见人物。本项目依据《維基數據：王炎》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王炎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KrXiuuihJGRDJgH856L9a9 | 王之涣 | accepted |

## 外部来源

- [維基數據：王炎（Q45587135）](https://www.wikidata.org/wiki/Q45587135)
- [維基數據：王之涣（Q707247）](https://www.wikidata.org/wiki/Q707247)
- [中文维基百科：王之涣](https://zh.wikipedia.org/wiki/王之涣)
- [CBDB 中国历代人物传记资料库：王炎（153366）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153366&o=json)
