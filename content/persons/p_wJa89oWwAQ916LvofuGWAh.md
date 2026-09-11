---
schema: wang-person/v1
id: p_wJa89oWwAQ916LvofuGWAh
status: active
merged_into: null
display_name: 王桐
cbdb_id: 21969
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2idng2cHF86itunk2GMr1E
        subject_person_id: p_wJa89oWwAQ916LvofuGWAh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桐，宋人物。CBDB 记录其籍贯记录为臨川。中国历代人物传记资料库（CBDB）以人物编号 21969 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_fj5nLr18tJHpqF57PP1huz
          claim_id: c_2idng2cHF86itunk2GMr1E
          source_id: s_tGLvV5YgqKR7aDjAPfxb6m
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_tGLvV5YgqKR7aDjAPfxb6m
            source_type: api_record
            title: 维基数据：王桐（Q45401607）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401607
            external_identifier: Q45401607
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:21.380Z
            metadata_json: null
        - id: cs_OjAeWodcg5cJ-xxK8UCQPk
          claim_id: c_2idng2cHF86itunk2GMr1E
          source_id: s_1uru69BA1H1mJty4vCCNAm
          stance: supports
          locator: CBDB:21969
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1uru69BA1H1mJty4vCCNAm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王桐（21969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21969&o=json
            external_identifier: CBDB:21969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:21.512Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GjsfBAWJ66d6eAuqQG45Fy
        subject_person_id: p_wJa89oWwAQ916LvofuGWAh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桐
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Wo3pNDMBi5oGZRJ6prXibY
          claim_id: c_GjsfBAWJ66d6eAuqQG45Fy
          source_id: s_1uru69BA1H1mJty4vCCNAm
          stance: supports
          locator: Q45401607
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_qHScbVLmyGHyC9LLohqwVD
          claim_id: c_GjsfBAWJ66d6eAuqQG45Fy
          source_id: s_tGLvV5YgqKR7aDjAPfxb6m
          stance: supports
          locator: Q45401607
          quotation: null
          interpretation_note: null
          source:
            id: s_tGLvV5YgqKR7aDjAPfxb6m
            source_type: api_record
            title: 维基数据：王桐（Q45401607）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401607
            external_identifier: Q45401607
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:21.380Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sFR8gn6qcD7MQ9yXLzrc8q
        subject_person_id: p_LSdPThzG5tshqXfyGSe2wD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wJa89oWwAQ916LvofuGWAh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CvcZxFUhqTA5CAxB1Mp4tH
          claim_id: c_sFR8gn6qcD7MQ9yXLzrc8q
          source_id: s_RbUEShUjFKPZpokBjxPA8y
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_RbUEShUjFKPZpokBjxPA8y
            source_type: api_record
            title: 維基數據：王滂（Q45401605）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401605
            external_identifier: Q45401605
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:59.912Z
            metadata_json: null
        - id: cs_NMbEoq2TbDFsc3MGuVPRgd
          claim_id: c_sFR8gn6qcD7MQ9yXLzrc8q
          source_id: s_ZFrTH5LnJhapBoosuYtaid
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_ZFrTH5LnJhapBoosuYtaid
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王滂（21968）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21968&o=json
            external_identifier: CBDB:21968
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:21.359Z
            metadata_json: null
        - id: cs_hDvC5Y4e8j1z9SokRf2def
          claim_id: c_sFR8gn6qcD7MQ9yXLzrc8q
          source_id: s_tGLvV5YgqKR7aDjAPfxb6m
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_tGLvV5YgqKR7aDjAPfxb6m
            source_type: api_record
            title: 维基数据：王桐（Q45401607）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401607
            external_identifier: Q45401607
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:21.380Z
            metadata_json: null
        - id: cs_av3poJYsTcpA9356fZAnTt
          claim_id: c_sFR8gn6qcD7MQ9yXLzrc8q
          source_id: s_1uru69BA1H1mJty4vCCNAm
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_1uru69BA1H1mJty4vCCNAm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王桐（21969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21969&o=json
            external_identifier: CBDB:21969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:21.512Z
            metadata_json: null
      object_person:
        id: p_LSdPThzG5tshqXfyGSe2wD
        status: active
        display_name: 王滂
        merged_into_person_id: null
    - claim:
        id: c_GEVlJiTgDm1M14Kx4BCrAK
        subject_person_id: p_XsUszSCs1dVMgp82WbKVPU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wJa89oWwAQ916LvofuGWAh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tvtq3KKVGQNHEn7EYqyUDi
          claim_id: c_GEVlJiTgDm1M14Kx4BCrAK
          source_id: s_1uru69BA1H1mJty4vCCNAm
          stance: supports
          locator: CBDB 双向互证（父 王滂 ⇄ 子 王桐）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_XsUszSCs1dVMgp82WbKVPU
        status: active
        display_name: 王滂
        merged_into_person_id: null
  children:
    - claim:
        id: c_nPfBdx7C6AMYW91BU2XJ8i
        subject_person_id: p_wJa89oWwAQ916LvofuGWAh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sJJf5iLL8jKATB3SGymAEh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_A8fU5twcSM8Nqc7dUUfGxA
          claim_id: c_nPfBdx7C6AMYW91BU2XJ8i
          source_id: s_1uru69BA1H1mJty4vCCNAm
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_1uru69BA1H1mJty4vCCNAm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王桐（21969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21969&o=json
            external_identifier: CBDB:21969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:21.512Z
            metadata_json: null
        - id: cs_KnCwMew3mHwa2LwHdh6FBS
          claim_id: c_nPfBdx7C6AMYW91BU2XJ8i
          source_id: s_tGLvV5YgqKR7aDjAPfxb6m
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_tGLvV5YgqKR7aDjAPfxb6m
            source_type: api_record
            title: 维基数据：王桐（Q45401607）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45401607
            external_identifier: Q45401607
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:21.380Z
            metadata_json: null
        - id: cs_hgnsigEU13wNL8DvjYcWUn
          claim_id: c_nPfBdx7C6AMYW91BU2XJ8i
          source_id: s_mEBYMH5kdjjtRC5hDznzCe
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_mEBYMH5kdjjtRC5hDznzCe
            source_type: api_record
            title: 维基数据：王珏（Q45359441）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359441
            external_identifier: Q45359441
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:02.686Z
            metadata_json: null
        - id: cs_of2aad5w8RpMUjFyBGpg9a
          claim_id: c_nPfBdx7C6AMYW91BU2XJ8i
          source_id: s_oouDz44Q7KDuVLqbnpogG7
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_oouDz44Q7KDuVLqbnpogG7
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王珏（1796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1796&o=json
            external_identifier: CBDB:1796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:02.855Z
            metadata_json: null
      object_person:
        id: p_sJJf5iLL8jKATB3SGymAEh
        status: active
        display_name: 王珏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王桐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王桐，宋人物。CBDB 记录其籍贯记录为臨川。中国历代人物传记资料库（CBDB）以人物编号 21969 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王桐 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LSdPThzG5tshqXfyGSe2wD | 王滂 | accepted |
| parents | p_XsUszSCs1dVMgp82WbKVPU | 王滂 | accepted |
| children | p_sJJf5iLL8jKATB3SGymAEh | 王珏 | accepted |

## 外部来源

- [维基数据：王珏（Q45359441）](https://www.wikidata.org/wiki/Q45359441)
- [维基数据：王桐（Q45401607）](https://www.wikidata.org/wiki/Q45401607)
- [維基數據：王滂（Q45401605）](https://www.wikidata.org/wiki/Q45401605)
- [CBDB 中国历代人物传记资料库：王珏（1796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1796&o=json)
- [CBDB 中国历代人物传记资料库：王滂（21968）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21968&o=json)
- [CBDB 中国历代人物传记资料库：王桐（21969）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21969&o=json)
