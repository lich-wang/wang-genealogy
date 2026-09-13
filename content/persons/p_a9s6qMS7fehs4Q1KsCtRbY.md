---
schema: wang-person/v1
id: p_a9s6qMS7fehs4Q1KsCtRbY
status: active
merged_into: null
display_name: 王代恕
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CCM3ijYx888SmYemzJtf_0
        subject_person_id: p_a9s6qMS7fehs4Q1KsCtRbY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王代恕（973年—1041年），史料所见人物。本项目依据《王代恕》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SuFLEJPtI3jK5snxkmbUm9
          claim_id: c_CCM3ijYx888SmYemzJtf_0
          source_id: s_FzTeTYi39DpiCN8KWWcGqD
          stance: supports
          locator: Q45375705
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_FzTeTYi39DpiCN8KWWcGqD
            source_type: api_record
            title: 维基数据：王代恕（Q45375705）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45375705
            external_identifier: Q45375705
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:17.656Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Mm8qrcFghwvTDCLNWXHdMe
        subject_person_id: p_a9s6qMS7fehs4Q1KsCtRbY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 973年
            calendar_note: 维基数据 P569 结构化日期，精度：年
            earliest: 0973-01-01
            latest: 0973-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3VS8ASBxdn9a2EJ9QB33Ft
          claim_id: c_Mm8qrcFghwvTDCLNWXHdMe
          source_id: s_FzTeTYi39DpiCN8KWWcGqD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_FzTeTYi39DpiCN8KWWcGqD
            source_type: api_record
            title: 维基数据：王代恕（Q45375705）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45375705
            external_identifier: Q45375705
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:17.656Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_mKcMWxMfjxqcTKnGPPYFR8
        subject_person_id: p_a9s6qMS7fehs4Q1KsCtRbY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1041年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 1041-01-01
            latest: 1041-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1WfwRvkb6cAtByhJdQ5G2X
          claim_id: c_mKcMWxMfjxqcTKnGPPYFR8
          source_id: s_FzTeTYi39DpiCN8KWWcGqD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_FzTeTYi39DpiCN8KWWcGqD
            source_type: api_record
            title: 维基数据：王代恕（Q45375705）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45375705
            external_identifier: Q45375705
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:17.656Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zRaG7cSjV1pvswahch9tV9
        subject_person_id: p_a9s6qMS7fehs4Q1KsCtRbY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王代恕
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_RGLkPzFnTaXJAAuPyuTXiZ
          claim_id: c_zRaG7cSjV1pvswahch9tV9
          source_id: s_FzTeTYi39DpiCN8KWWcGqD
          stance: supports
          locator: Q45375705
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qh-g-48aF3oaXZd7DilhzV
        subject_person_id: p_NuT9NrbF95GBrUJnPKKH1H
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_a9s6qMS7fehs4Q1KsCtRbY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zn9SZNI3k2BsO0_E0IOksT
          claim_id: c_qh-g-48aF3oaXZd7DilhzV
          source_id: s_2Uy9LcTEbqt4ThFXCehGaG
          stance: supports
          locator: CBDB 双向互证（父 王銳 ⇄ 子 王代恕）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_2Uy9LcTEbqt4ThFXCehGaG
            source_type: api_record
            title: 中国历代人物传记资料库：王代恕（CBDB 12850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12850&o=json
            external_identifier: CBDB:12850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.608Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NuT9NrbF95GBrUJnPKKH1H
        status: active
        display_name: 王銳
        merged_into_person_id: null
  children:
    - claim:
        id: c_DGvnSYHML8rcuCu59rpkoE
        subject_person_id: p_a9s6qMS7fehs4Q1KsCtRbY
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Hy3oL9P7FfBor4frFk5Jm5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5rkDf3XexRBj6okpdoMEdq
          claim_id: c_DGvnSYHML8rcuCu59rpkoE
          source_id: s_k4sES6DQb3wrUV1XHp4bBj
          stance: supports
          locator: 亲属关系：七子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_k4sES6DQb3wrUV1XHp4bBj
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王代恕（12850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12850&o=json
            external_identifier: CBDB:12850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:46.745Z
            metadata_json: null
        - id: cs_TkTH5ZXUgq4Lyyt5LK1xQz
          claim_id: c_DGvnSYHML8rcuCu59rpkoE
          source_id: s_KaWCfUWNUAhuBv5aBM1qS9
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_KaWCfUWNUAhuBv5aBM1qS9
            source_type: api_record
            title: 维基数据：王拱辰（Q15932959）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15932959
            external_identifier: Q15932959
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:26.978Z
            metadata_json: null
        - id: cs_Xz97DLxNyhi725727YoEVH
          claim_id: c_DGvnSYHML8rcuCu59rpkoE
          source_id: s_FzTeTYi39DpiCN8KWWcGqD
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_FzTeTYi39DpiCN8KWWcGqD
            source_type: api_record
            title: 维基数据：王代恕（Q45375705）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45375705
            external_identifier: Q45375705
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:17.656Z
            metadata_json: null
      object_person:
        id: p_Hy3oL9P7FfBor4frFk5Jm5
        status: active
        display_name: 王拱辰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_ZzxJHFASBooMDDw1trMegg
        subject_person_id: p_JFQHkPEwEAq8jJVUaH1sob
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_a9s6qMS7fehs4Q1KsCtRbY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C22UBmwTmT48UJAtH7hnFN
          claim_id: c_ZzxJHFASBooMDDw1trMegg
          source_id: s_FzTeTYi39DpiCN8KWWcGqD
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_FzTeTYi39DpiCN8KWWcGqD
            source_type: api_record
            title: 维基数据：王代恕（Q45375705）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45375705
            external_identifier: Q45375705
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:17.656Z
            metadata_json: null
        - id: cs_PzcAt5bT9qFfY7qmAYraap
          claim_id: c_ZzxJHFASBooMDDw1trMegg
          source_id: s_k4sES6DQb3wrUV1XHp4bBj
          stance: supports
          locator: 亲属关系：第二任妻
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_k4sES6DQb3wrUV1XHp4bBj
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王代恕（12850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12850&o=json
            external_identifier: CBDB:12850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:46.745Z
            metadata_json: null
        - id: cs_eXesxdPMzyLaQP2zWWcDmE
          claim_id: c_ZzxJHFASBooMDDw1trMegg
          source_id: s_4jmgQkE9YE83WSJTSSGnn5
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_4jmgQkE9YE83WSJTSSGnn5
            source_type: api_record
            title: 维基数据：李氏（Q45364337）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364337
            external_identifier: Q45364337
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:00.249Z
            metadata_json: null
      object_person:
        id: p_JFQHkPEwEAq8jJVUaH1sob
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王代恕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王代恕（973年—1041年），史料所见人物。本项目依据《王代恕》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 973年 | accepted |
| death.date | 1041年 | accepted |
| name.primary | 王代恕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NuT9NrbF95GBrUJnPKKH1H | 王銳 | accepted |
| children | p_Hy3oL9P7FfBor4frFk5Jm5 | 王拱辰 | accepted |
| spouses | p_JFQHkPEwEAq8jJVUaH1sob | 李氏 | accepted |

## 外部来源

- [维基数据：李氏（Q45364337）](https://www.wikidata.org/wiki/Q45364337)
- [维基数据：王代恕（Q45375705）](https://www.wikidata.org/wiki/Q45375705)
- [维基数据：王拱辰（Q15932959）](https://www.wikidata.org/wiki/Q15932959)
- [CBDB 中国历代人物传记资料库：王代恕（12850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12850&o=json)
