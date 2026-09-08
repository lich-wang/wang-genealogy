---
schema: wang-person/v1
id: p_WYN9msC554wb8dtjBJ3Ga4
status: active
merged_into: null
display_name: 张氏
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_-N8cnfPldDE1UZ5QzMJMYl
        subject_person_id: p_WYN9msC554wb8dtjBJ3Ga4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 张氏，王禔妻。维基数据以独立条目 Q45431160 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ERdEZetLmPibxbkRCScaGz
          claim_id: c_-N8cnfPldDE1UZ5QzMJMYl
          source_id: s_CPovKVGqVGK8Z54VxMmbzC
          stance: supports
          locator: Q45431160
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_CPovKVGqVGK8Z54VxMmbzC
            source_type: api_record
            title: 维基数据：张氏（Q45431160）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45431160
            external_identifier: Q45431160
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:17.362Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HtJSKuKu3GK5nh25P4fBUb
        subject_person_id: p_WYN9msC554wb8dtjBJ3Ga4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 张氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gfCyosWAVymnAhco7WYALz
          claim_id: c_HtJSKuKu3GK5nh25P4fBUb
          source_id: s_CPovKVGqVGK8Z54VxMmbzC
          stance: supports
          locator: Q45431160
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_oEQn9tSpCXNaSTWuJaJHtN
          claim_id: c_HtJSKuKu3GK5nh25P4fBUb
          source_id: s_ATTtADGT3pRCt1mbAJ8kNB
          stance: supports
          locator: Q45431160
          quotation: null
          interpretation_note: null
          source:
            id: s_ATTtADGT3pRCt1mbAJ8kNB
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：張氏（38576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38576&o=json
            external_identifier: CBDB:38576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:17.511Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_HAnDmrVZUNwksXpr5YRjpK
        subject_person_id: p_hEEpn7U7EKTTeFP3ixWWbm
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_WYN9msC554wb8dtjBJ3Ga4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X5J6JZ9DjQN33jXBCdDqQD
          claim_id: c_HAnDmrVZUNwksXpr5YRjpK
          source_id: s_eNFZcfGseG5DPkoAbM2fBY
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_eNFZcfGseG5DPkoAbM2fBY
            source_type: api_record
            title: 维基数据：王禔（Q45386120）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45386120
            external_identifier: Q45386120
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:59.236Z
            metadata_json: null
        - id: cs_LgUpTvG16cTdoSigEFKEbC
          claim_id: c_HAnDmrVZUNwksXpr5YRjpK
          source_id: s_CPovKVGqVGK8Z54VxMmbzC
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_hEEpn7U7EKTTeFP3ixWWbm
        status: active
        display_name: 王禔
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 张氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 张氏，王禔妻。维基数据以独立条目 Q45431160 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 张氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_hEEpn7U7EKTTeFP3ixWWbm | 王禔 | accepted |

## 外部来源

- [维基数据：王禔（Q45386120）](https://www.wikidata.org/wiki/Q45386120)
- [维基数据：张氏（Q45431160）](https://www.wikidata.org/wiki/Q45431160)
- [CBDB 中国历代人物传记资料库：張氏（38576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38576&o=json)
