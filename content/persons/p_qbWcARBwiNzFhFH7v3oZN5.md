---
schema: wang-person/v1
id: p_qbWcARBwiNzFhFH7v3oZN5
status: active
merged_into: null
display_name: 王桥
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XQJSKmWTvpr65aSM5d8MQa
        subject_person_id: p_qbWcARBwiNzFhFH7v3oZN5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王桥，明人物。CBDB 记录其籍贯记录为京山，入仕记录为科舉: 進士(籠統)，曾任道御史、左布政使。中国历代人物传记资料库（CBDB）以人物编号 226562 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_oRhWbFHqT3GbszQ7hWdwQH
          claim_id: c_XQJSKmWTvpr65aSM5d8MQa
          source_id: s_eWMTxrWPzyeXTef4AWJDhH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_eWMTxrWPzyeXTef4AWJDhH
            source_type: api_record
            title: 维基数据：王桥（Q16925823）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16925823
            external_identifier: Q16925823
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:46.107Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%A9%8B_(%E5%98%89%E9%9D%96%E9%80%B2%E5%A3%AB)
        - id: cs_3V0nJi0cUNbzmVG8Udlpez
          claim_id: c_XQJSKmWTvpr65aSM5d8MQa
          source_id: s_oto9J6FqGL8SuF6LDBsJau
          stance: supports
          locator: CBDB:226562
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_oto9J6FqGL8SuF6LDBsJau
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王橋（226562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226562&o=json
            external_identifier: CBDB:226562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:46.246Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7yxdHNhQEhyiw1Cgv2PgtE
        subject_person_id: p_qbWcARBwiNzFhFH7v3oZN5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桥
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_18SeVNd18ja4F6HiJhH1wY
          claim_id: c_7yxdHNhQEhyiw1Cgv2PgtE
          source_id: s_eWMTxrWPzyeXTef4AWJDhH
          stance: supports
          locator: Q16925823
          quotation: null
          interpretation_note: null
          source:
            id: s_eWMTxrWPzyeXTef4AWJDhH
            source_type: api_record
            title: 维基数据：王桥（Q16925823）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16925823
            external_identifier: Q16925823
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:46.107Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%A9%8B_(%E5%98%89%E9%9D%96%E9%80%B2%E5%A3%AB)
        - id: cs_kN8MPU1EQEMpPeN7fZUX92
          claim_id: c_7yxdHNhQEhyiw1Cgv2PgtE
          source_id: s_oto9J6FqGL8SuF6LDBsJau
          stance: supports
          locator: Q16925823
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_zRo5wLXtJ2CHg1bdWWeqke
        subject_person_id: p_qbWcARBwiNzFhFH7v3oZN5
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_5MNkBJnN6bmTG5ZPZ7LvWS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5u3dfpZNrJpSn2zMqJaHQw
          claim_id: c_zRo5wLXtJ2CHg1bdWWeqke
          source_id: s_eWMTxrWPzyeXTef4AWJDhH
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_eWMTxrWPzyeXTef4AWJDhH
            source_type: api_record
            title: 维基数据：王桥（Q16925823）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16925823
            external_identifier: Q16925823
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:46.107Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%A9%8B_(%E5%98%89%E9%9D%96%E9%80%B2%E5%A3%AB)
        - id: cs_crCMcU6RUvVNz9Cdo1vPeg
          claim_id: c_zRo5wLXtJ2CHg1bdWWeqke
          source_id: s_NLsGNVpk4Ruefbr7KaeHNT
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_NLsGNVpk4Ruefbr7KaeHNT
            source_type: api_record
            title: 维基数据：王宗茂（Q15915784）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15915784
            external_identifier: Q15915784
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:18.396Z
            metadata_json: null
      object_person:
        id: p_5MNkBJnN6bmTG5ZPZ7LvWS
        status: active
        display_name: 王宗茂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王桥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王桥，明人物。CBDB 记录其籍贯记录为京山，入仕记录为科舉: 進士(籠統)，曾任道御史、左布政使。中国历代人物传记资料库（CBDB）以人物编号 226562 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王桥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_5MNkBJnN6bmTG5ZPZ7LvWS | 王宗茂 | accepted |

## 外部来源

- [维基数据：王桥（Q16925823）](https://www.wikidata.org/wiki/Q16925823)
- [维基数据：王宗茂（Q15915784）](https://www.wikidata.org/wiki/Q15915784)
- [CBDB 中国历代人物传记资料库：王橋（226562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226562&o=json)
