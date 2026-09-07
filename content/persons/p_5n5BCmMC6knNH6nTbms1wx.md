---
schema: wang-person/v1
id: p_5n5BCmMC6knNH6nTbms1wx
status: active
merged_into: null
display_name: 王靖
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gapVnm5LDzCgzD4ryQ6NBm
        subject_person_id: p_5n5BCmMC6knNH6nTbms1wx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靖，金人物。CBDB 记录其籍贯记录为槁城，身份包括農民。中国历代人物传记资料库（CBDB）以人物编号 29508 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_cbHsWMc9AiPidS5rbkKuar
          claim_id: c_gapVnm5LDzCgzD4ryQ6NBm
          source_id: s_YHRoir3GbWsFC4aCHfeCcL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_YHRoir3GbWsFC4aCHfeCcL
            source_type: api_record
            title: 维基数据：王靖（Q45416099）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45416099
            external_identifier: Q45416099
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:00.696Z
            metadata_json: null
        - id: cs_9tfxVijNrL2-Xhfa5QhB3v
          claim_id: c_gapVnm5LDzCgzD4ryQ6NBm
          source_id: s_xDQNKjT8QiHHGbkoVcvCL4
          stance: supports
          locator: CBDB:29508
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_xDQNKjT8QiHHGbkoVcvCL4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王靖（29508）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29508&o=json
            external_identifier: CBDB:29508
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:00.881Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2EqnBASw6cj4YE2gngWGko
        subject_person_id: p_5n5BCmMC6knNH6nTbms1wx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靖
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_eMdk5t6geNPnXxemqFny4w
          claim_id: c_2EqnBASw6cj4YE2gngWGko
          source_id: s_YHRoir3GbWsFC4aCHfeCcL
          stance: supports
          locator: Q45416099
          quotation: null
          interpretation_note: null
          source:
            id: s_YHRoir3GbWsFC4aCHfeCcL
            source_type: api_record
            title: 维基数据：王靖（Q45416099）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45416099
            external_identifier: Q45416099
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:00.696Z
            metadata_json: null
        - id: cs_fYPzadq155C1cbhLA2U8Gj
          claim_id: c_2EqnBASw6cj4YE2gngWGko
          source_id: s_xDQNKjT8QiHHGbkoVcvCL4
          stance: supports
          locator: Q45416099
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_JBFZsEk9ZmggqNTnFgNi5M
        subject_person_id: p_5n5BCmMC6knNH6nTbms1wx
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_bzAQKjWizMdy4cRiMEN5wC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WFRh37G6dUvNHb27GjEdgn
          claim_id: c_JBFZsEk9ZmggqNTnFgNi5M
          source_id: s_q3DfY227GV45awewhA8Nrq
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_q3DfY227GV45awewhA8Nrq
            source_type: api_record
            title: 维基数据：王若虚（Q10416678）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10416678
            external_identifier: Q10416678
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:50.282Z
            metadata_json: null
        - id: cs_oPdN9HPDdEKnLvhf3Cd7tR
          claim_id: c_JBFZsEk9ZmggqNTnFgNi5M
          source_id: s_YHRoir3GbWsFC4aCHfeCcL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_YHRoir3GbWsFC4aCHfeCcL
            source_type: api_record
            title: 维基数据：王靖（Q45416099）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45416099
            external_identifier: Q45416099
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:00.696Z
            metadata_json: null
      object_person:
        id: p_bzAQKjWizMdy4cRiMEN5wC
        status: active
        display_name: 王若虚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王靖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王靖，金人物。CBDB 记录其籍贯记录为槁城，身份包括農民。中国历代人物传记资料库（CBDB）以人物编号 29508 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王靖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_bzAQKjWizMdy4cRiMEN5wC | 王若虚 | accepted |

## 外部来源

- [维基数据：王靖（Q45416099）](https://www.wikidata.org/wiki/Q45416099)
- [维基数据：王若虚（Q10416678）](https://www.wikidata.org/wiki/Q10416678)
- [CBDB 中国历代人物传记资料库：王靖（29508）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29508&o=json)
