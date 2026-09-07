---
schema: wang-person/v1
id: p_MHnJiH3KT72B1d43pNjdsL
status: active
merged_into: null
display_name: 王昱
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_naup8G9DCHMRdy3EdoY79A
        subject_person_id: p_MHnJiH3KT72B1d43pNjdsL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昱，史料所见人物。本项目依据《維基數據：王昱》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_tRvNbB12pG2b2JhRcUOVSm
          claim_id: c_naup8G9DCHMRdy3EdoY79A
          source_id: s_oHwVLtMeMLGbeix5ABuqZN
          stance: supports
          locator: Q45587071
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_oHwVLtMeMLGbeix5ABuqZN
            source_type: api_record
            title: 維基數據：王昱（Q45587071）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45587071
            external_identifier: Q45587071
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:30.809Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xKRB4jAHMdKPuQJ6ANPSuJ
        subject_person_id: p_MHnJiH3KT72B1d43pNjdsL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昱
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_mMdPcatX1UJK6MSUTa2GRn
          claim_id: c_xKRB4jAHMdKPuQJ6ANPSuJ
          source_id: s_oHwVLtMeMLGbeix5ABuqZN
          stance: supports
          locator: Q45587071
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_e46US9rS8CTR9XeBnFs8K2
        subject_person_id: p_GMCTq5KrktL4A6wV97QsyN
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_MHnJiH3KT72B1d43pNjdsL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NVheJCDxY9SjH5oviMt3xv
          claim_id: c_e46US9rS8CTR9XeBnFs8K2
          source_id: s_CURwrKyQEGB2YySmUVnJvG
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_CURwrKyQEGB2YySmUVnJvG
            source_type: api_record
            title: 维基数据：王德表（Q45447026）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45447026
            external_identifier: Q45447026
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:23.482Z
            metadata_json: null
      object_person:
        id: p_GMCTq5KrktL4A6wV97QsyN
        status: active
        display_name: 王德表
        merged_into_person_id: null
    - claim:
        id: c_Z1W6BXUYWJrn4sRKB3P5D7
        subject_person_id: p_2QzaHREwKpSyXNbQkJ4Bk3
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_MHnJiH3KT72B1d43pNjdsL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iZhLi2TmNci52Jj4DDb8Wt
          claim_id: c_Z1W6BXUYWJrn4sRKB3P5D7
          source_id: s_Uq4LGQJyC9XRsj9FkngQaN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Uq4LGQJyC9XRsj9FkngQaN
            source_type: api_record
            title: 维基数据：王表（Q45587008）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45587008
            external_identifier: Q45587008
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:02.679Z
            metadata_json: null
        - id: cs_jvU4aAdk8JxXBHM29zrtjJ
          claim_id: c_Z1W6BXUYWJrn4sRKB3P5D7
          source_id: s_oHwVLtMeMLGbeix5ABuqZN
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_oHwVLtMeMLGbeix5ABuqZN
            source_type: api_record
            title: 維基數據：王昱（Q45587071）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45587071
            external_identifier: Q45587071
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:30.809Z
            metadata_json: null
      object_person:
        id: p_2QzaHREwKpSyXNbQkJ4Bk3
        status: active
        display_name: 王表
        merged_into_person_id: null
  children:
    - claim:
        id: c_AbE4ebLbCpeSNSfKEnFbWy
        subject_person_id: p_MHnJiH3KT72B1d43pNjdsL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KrXiuuihJGRDJgH856L9a9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_vsW2GZLCCLudJVHQah1CqD
          claim_id: c_AbE4ebLbCpeSNSfKEnFbWy
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
        - id: cs_MvgFCrfp7hyEJ76V3wu9Kz
          claim_id: c_AbE4ebLbCpeSNSfKEnFbWy
          source_id: s_AeboiVEUJhCZQ8vjPrFC5K
          stance: supports
          locator: P22（父）
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
        - id: cs_TKDi8mtt3kAnwtsNuSXjjN
          claim_id: c_AbE4ebLbCpeSNSfKEnFbWy
          source_id: s_oHwVLtMeMLGbeix5ABuqZN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_oHwVLtMeMLGbeix5ABuqZN
            source_type: api_record
            title: 維基數據：王昱（Q45587071）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45587071
            external_identifier: Q45587071
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:30.809Z
            metadata_json: null
        - id: cs_7NeNqaMF98zdVne2Jh5UCy
          claim_id: c_AbE4ebLbCpeSNSfKEnFbWy
          source_id: s_jVmJjiEpWN1LFNLogR9HcB
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_jVmJjiEpWN1LFNLogR9HcB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王之渙（91975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91975&o=json
            external_identifier: CBDB:91975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:51:18.216Z
            metadata_json: null
        - id: cs_ixpAjS1ywJbMfxDkyySedx
          claim_id: c_AbE4ebLbCpeSNSfKEnFbWy
          source_id: s_44jMupckBiipGzHe6DL5V9
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_44jMupckBiipGzHe6DL5V9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昱（153365）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153365&o=json
            external_identifier: CBDB:153365
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:51:18.352Z
            metadata_json: null
      object_person:
        id: p_KrXiuuihJGRDJgH856L9a9
        status: active
        display_name: 王之涣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王昱，史料所见人物。本项目依据《維基數據：王昱》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王昱 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GMCTq5KrktL4A6wV97QsyN | 王德表 | accepted |
| parents | p_2QzaHREwKpSyXNbQkJ4Bk3 | 王表 | accepted |
| children | p_KrXiuuihJGRDJgH856L9a9 | 王之涣 | accepted |

## 外部来源

- [维基数据：王表（Q45587008）](https://www.wikidata.org/wiki/Q45587008)
- [维基数据：王德表（Q45447026）](https://www.wikidata.org/wiki/Q45447026)
- [維基數據：王昱（Q45587071）](https://www.wikidata.org/wiki/Q45587071)
- [維基數據：王之涣（Q707247）](https://www.wikidata.org/wiki/Q707247)
- [中文维基百科：王之涣](https://zh.wikipedia.org/wiki/王之涣)
- [CBDB 中国历代人物传记资料库：王昱（153365）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153365&o=json)
- [CBDB 中国历代人物传记资料库：王之渙（91975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91975&o=json)
