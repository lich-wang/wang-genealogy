---
schema: wang-person/v1
id: p_8ZBDQjrPzNEsJHrpRrVWkK
status: active
merged_into: null
display_name: 王仲智
cbdb_id: 240859
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ufKP9G1ojvGApnLxhPqXS3
        subject_person_id: p_8ZBDQjrPzNEsJHrpRrVWkK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲智，明人物。CBDB 记录其籍贯记录为三原。中国历代人物传记资料库（CBDB）以人物编号 240859 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_MveP4NLCPMqXLKpUc88gg2
          claim_id: c_ufKP9G1ojvGApnLxhPqXS3
          source_id: s_FUQz5AGTdZDWThBYY1AEr4
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_FUQz5AGTdZDWThBYY1AEr4
            source_type: api_record
            title: 维基数据：王仲智（Q45459440）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45459440
            external_identifier: Q45459440
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:33.526Z
            metadata_json: null
        - id: cs_3P8N9R0d2ENLCDALDyROqp
          claim_id: c_ufKP9G1ojvGApnLxhPqXS3
          source_id: s_vB51GoqLZdVHHypmKy4CwU
          stance: supports
          locator: CBDB:240859
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_vB51GoqLZdVHHypmKy4CwU
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王仲智（240859）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240859&o=json
            external_identifier: CBDB:240859
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:33.681Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_y3rmJVXsZ6vfmECZ1BM3LL
        subject_person_id: p_8ZBDQjrPzNEsJHrpRrVWkK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲智
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2Ac1UiGPqjX1bjsVpd1R7D
          claim_id: c_y3rmJVXsZ6vfmECZ1BM3LL
          source_id: s_vB51GoqLZdVHHypmKy4CwU
          stance: supports
          locator: Q45459440
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_YtsJu3E4nYrjmWcjgrj8Au
          claim_id: c_y3rmJVXsZ6vfmECZ1BM3LL
          source_id: s_FUQz5AGTdZDWThBYY1AEr4
          stance: supports
          locator: Q45459440
          quotation: null
          interpretation_note: null
          source:
            id: s_FUQz5AGTdZDWThBYY1AEr4
            source_type: api_record
            title: 维基数据：王仲智（Q45459440）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45459440
            external_identifier: Q45459440
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:33.526Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Jv9RULJNH2TaXY9B9HTSqv
        subject_person_id: p_m8pEmRBSH6ayXuTKwEAjBF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8ZBDQjrPzNEsJHrpRrVWkK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5Rehfvm9LbMZSMz8oaoK5e
          claim_id: c_Jv9RULJNH2TaXY9B9HTSqv
          source_id: s_FUQz5AGTdZDWThBYY1AEr4
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_EY8sHiRJV4CnCivKbmBn7j
          claim_id: c_Jv9RULJNH2TaXY9B9HTSqv
          source_id: s_7UCYwv12hL8uoTS1hCGekt
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_7UCYwv12hL8uoTS1hCGekt
            source_type: api_record
            title: 维基数据：王惟真（Q45459375）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45459375
            external_identifier: Q45459375
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:38.809Z
            metadata_json: null
      object_person:
        id: p_m8pEmRBSH6ayXuTKwEAjBF
        status: active
        display_name: 王惟真
        merged_into_person_id: null
  children:
    - claim:
        id: c_L52JNFrutHfMJEb3mv1fZn
        subject_person_id: p_8ZBDQjrPzNEsJHrpRrVWkK
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_e622FY31yMzCRE9JqUsUSG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Lk2D5DJJhCqMcgseX73X6F
          claim_id: c_L52JNFrutHfMJEb3mv1fZn
          source_id: s_FUQz5AGTdZDWThBYY1AEr4
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_FUQz5AGTdZDWThBYY1AEr4
            source_type: api_record
            title: 维基数据：王仲智（Q45459440）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45459440
            external_identifier: Q45459440
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:33.526Z
            metadata_json: null
        - id: cs_yYeERNh4M2HtM1kG5yZ26h
          claim_id: c_L52JNFrutHfMJEb3mv1fZn
          source_id: s_y8cQS6Bt2mgqcJ8DjKNQ1m
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_y8cQS6Bt2mgqcJ8DjKNQ1m
            source_type: api_record
            title: 维基数据：王恕（Q15904547）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15904547
            external_identifier: Q15904547
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:34.053Z
            metadata_json: null
      object_person:
        id: p_e622FY31yMzCRE9JqUsUSG
        status: active
        display_name: 王恕
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲智

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仲智，明人物。CBDB 记录其籍贯记录为三原。中国历代人物传记资料库（CBDB）以人物编号 240859 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王仲智 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_m8pEmRBSH6ayXuTKwEAjBF | 王惟真 | accepted |
| children | p_e622FY31yMzCRE9JqUsUSG | 王恕 | accepted |

## 外部来源

- [维基数据：王恕（Q15904547）](https://www.wikidata.org/wiki/Q15904547)
- [维基数据：王惟真（Q45459375）](https://www.wikidata.org/wiki/Q45459375)
- [维基数据：王仲智（Q45459440）](https://www.wikidata.org/wiki/Q45459440)
- [CBDB 中国历代人物传记资料库：王仲智（240859）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240859&o=json)
