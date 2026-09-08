---
schema: wang-person/v1
id: p_vKnTYZkMnhEhgMRQeZWtJ8
status: active
merged_into: null
display_name: 王愿
cbdb_id: 175514
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yy24yNFaWR8BqD1mYfCiAz
        subject_person_id: p_vKnTYZkMnhEhgMRQeZWtJ8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愿（卒于857年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175514 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_VJD492xENKJ8sBXCRJ9ygp
          claim_id: c_yy24yNFaWR8BqD1mYfCiAz
          source_id: s_mem5RhPPkPP2521RDpjpLm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_mem5RhPPkPP2521RDpjpLm
            source_type: api_record
            title: 维基数据：王愿（Q45664104）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664104
            external_identifier: Q45664104
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:51.856Z
            metadata_json: null
        - id: cs_jdReI__dT5mXVZYWXdCRHP
          claim_id: c_yy24yNFaWR8BqD1mYfCiAz
          source_id: s_N7LbjoMaZh3n8EDG2rjRDs
          stance: supports
          locator: CBDB:175514
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_N7LbjoMaZh3n8EDG2rjRDs
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王愿（175514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175514&o=json
            external_identifier: CBDB:175514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:52.017Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5Bvzz2tSF1Nacug2JgULTN
        subject_person_id: p_vKnTYZkMnhEhgMRQeZWtJ8
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 857年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0857-01-01
            latest: 0857-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JzjmoCJJkBqtKoCeZEkEgG
          claim_id: c_5Bvzz2tSF1Nacug2JgULTN
          source_id: s_mem5RhPPkPP2521RDpjpLm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_mem5RhPPkPP2521RDpjpLm
            source_type: api_record
            title: 维基数据：王愿（Q45664104）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664104
            external_identifier: Q45664104
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:51.856Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Yz5b3Tw8zDZFHkD985pUjN
        subject_person_id: p_vKnTYZkMnhEhgMRQeZWtJ8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愿
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3qXwnXjf5Pj5gZDYfSShFM
          claim_id: c_Yz5b3Tw8zDZFHkD985pUjN
          source_id: s_N7LbjoMaZh3n8EDG2rjRDs
          stance: supports
          locator: Q45664104
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_Nr9WxP1pQTShjHQ4kMC9cz
          claim_id: c_Yz5b3Tw8zDZFHkD985pUjN
          source_id: s_mem5RhPPkPP2521RDpjpLm
          stance: supports
          locator: Q45664104
          quotation: null
          interpretation_note: null
          source:
            id: s_mem5RhPPkPP2521RDpjpLm
            source_type: api_record
            title: 维基数据：王愿（Q45664104）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664104
            external_identifier: Q45664104
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:51.856Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ksBzLcBnKf8Y5uNUhPFD2S
        subject_person_id: p_Ang9eiGuniGWoebR7bHwTe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vKnTYZkMnhEhgMRQeZWtJ8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1DdaRmDzDYStwbSpk7uCAb
          claim_id: c_ksBzLcBnKf8Y5uNUhPFD2S
          source_id: s_VCd9i2L3UPKSt61BT7yQco
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_VCd9i2L3UPKSt61BT7yQco
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王源植（175513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175513&o=json
            external_identifier: CBDB:175513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:33.275Z
            metadata_json: null
        - id: cs_Sb8SBpF4G9SvceCFRYYa7x
          claim_id: c_ksBzLcBnKf8Y5uNUhPFD2S
          source_id: s_QpGCg8A8WLovPFGsSEKdz8
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_QpGCg8A8WLovPFGsSEKdz8
            source_type: api_record
            title: 维基数据：王源植（Q45664050）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664050
            external_identifier: Q45664050
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:33.132Z
            metadata_json: null
        - id: cs_srZExKFnJ63i6D368LZKuX
          claim_id: c_ksBzLcBnKf8Y5uNUhPFD2S
          source_id: s_mem5RhPPkPP2521RDpjpLm
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_mem5RhPPkPP2521RDpjpLm
            source_type: api_record
            title: 维基数据：王愿（Q45664104）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45664104
            external_identifier: Q45664104
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:51.856Z
            metadata_json: null
        - id: cs_99hCN5zX3F3scTfqmMQNse
          claim_id: c_ksBzLcBnKf8Y5uNUhPFD2S
          source_id: s_N7LbjoMaZh3n8EDG2rjRDs
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_N7LbjoMaZh3n8EDG2rjRDs
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王愿（175514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175514&o=json
            external_identifier: CBDB:175514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:52.017Z
            metadata_json: null
      object_person:
        id: p_Ang9eiGuniGWoebR7bHwTe
        status: active
        display_name: 王源植
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王愿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王愿（卒于857年），唐人物。CBDB 记录其籍贯记录为咸陽。中国历代人物传记资料库（CBDB）以人物编号 175514 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 857年 | accepted |
| name.primary | 王愿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Ang9eiGuniGWoebR7bHwTe | 王源植 | accepted |

## 外部来源

- [维基数据：王源植（Q45664050）](https://www.wikidata.org/wiki/Q45664050)
- [维基数据：王愿（Q45664104）](https://www.wikidata.org/wiki/Q45664104)
- [CBDB 中国历代人物传记资料库：王源植（175513）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175513&o=json)
- [CBDB 中国历代人物传记资料库：王愿（175514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175514&o=json)
