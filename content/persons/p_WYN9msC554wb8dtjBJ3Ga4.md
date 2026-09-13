---
schema: wang-person/v1
id: p_WYN9msC554wb8dtjBJ3Ga4
status: active
merged_into: null
display_name: 张氏
cbdb_id: 38576
revision: 3
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
          text: 张氏，宋人物。曾任國夫人、郡夫人。（中国历代人物传记资料库 CBDB 38576）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_gfhx8PpnbJNbEL25uLtYKE
          claim_id: c_-N8cnfPldDE1UZ5QzMJMYl
          source_id: s_ATTtADGT3pRCt1mbAJ8kNB
          stance: supports
          locator: CBDB:38576
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
          source: &a2
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
        - id: cs_oEQn9tSpCXNaSTWuJaJHtN
          claim_id: c_HtJSKuKu3GK5nh25P4fBUb
          source_id: s_ATTtADGT3pRCt1mbAJ8kNB
          stance: supports
          locator: Q45431160
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_5-eSAoOHOYkLQXWAde0z7z
        subject_person_id: p_WYN9msC554wb8dtjBJ3Ga4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yapy3APS2bJCVFq3VNLaKZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lKE8KhEiyTz9d1onANJX-e
          claim_id: c_5-eSAoOHOYkLQXWAde0z7z
          source_id: s_ATTtADGT3pRCt1mbAJ8kNB
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1517;1525：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yapy3APS2bJCVFq3VNLaKZ
        status: active
        display_name: 王次翁
        merged_into_person_id: null
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
          source: *a2
      object_person:
        id: p_hEEpn7U7EKTTeFP3ixWWbm
        status: active
        display_name: 王禔
        merged_into_person_id: null
    - claim:
        id: c_RVbq2zcx5gDp2LCO30A_2-
        subject_person_id: p_WYN9msC554wb8dtjBJ3Ga4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_U8tkbpfhfw15YgFSaq7ZSG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yo0e5gaJGJzE0Samz84vI3
          claim_id: c_RVbq2zcx5gDp2LCO30A_2-
          source_id: s_ATTtADGT3pRCt1mbAJ8kNB
          stance: supports
          locator: 宋人傳記資料索引(電子版)：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_U8tkbpfhfw15YgFSaq7ZSG
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
| bio.summary | 张氏，宋人物。曾任國夫人、郡夫人。（中国历代人物传记资料库 CBDB 38576） | accepted |
| name.primary | 张氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_yapy3APS2bJCVFq3VNLaKZ | 王次翁 | accepted |
| spouses | p_hEEpn7U7EKTTeFP3ixWWbm | 王禔 | accepted |
| spouses | p_U8tkbpfhfw15YgFSaq7ZSG | 王禔 | accepted |

## 外部来源

- [维基数据：王禔（Q45386120）](https://www.wikidata.org/wiki/Q45386120)
- [维基数据：张氏（Q45431160）](https://www.wikidata.org/wiki/Q45431160)
- [CBDB 中国历代人物传记资料库：張氏（38576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38576&o=json)
