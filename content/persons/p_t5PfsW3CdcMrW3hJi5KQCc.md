---
schema: wang-person/v1
id: p_t5PfsW3CdcMrW3hJi5KQCc
status: active
merged_into: null
display_name: 王绹
cbdb_id: 157878
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EkcLXGMWQrKGqdP3PAWfwk
        subject_person_id: p_t5PfsW3CdcMrW3hJi5KQCc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王绹，唐人物。CBDB 记录其籍贯记录为臨沂。中国历代人物传记资料库（CBDB）以人物编号 157878 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_jBEZzW5XEkZH2mWNJjmUPa
          claim_id: c_EkcLXGMWQrKGqdP3PAWfwk
          source_id: s_5psFjBsNG3zPXPjB8KLkkA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_5psFjBsNG3zPXPjB8KLkkA
            source_type: api_record
            title: 维基数据：王绹（Q45538996）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45538996
            external_identifier: Q45538996
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:50.185Z
            metadata_json: null
        - id: cs_1nNZmBQcwhbvKtREy33XKH
          claim_id: c_EkcLXGMWQrKGqdP3PAWfwk
          source_id: s_x9JZCT7EcGPPGa5RyEFv74
          stance: supports
          locator: CBDB:157878
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_x9JZCT7EcGPPGa5RyEFv74
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綯（157878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157878&o=json
            external_identifier: CBDB:157878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:50.367Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7RAFnVjFL2ZEvR4HLQjMwu
        subject_person_id: p_t5PfsW3CdcMrW3hJi5KQCc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王绹
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CX5rDMcFQ7ZoE4J52xoadR
          claim_id: c_7RAFnVjFL2ZEvR4HLQjMwu
          source_id: s_5psFjBsNG3zPXPjB8KLkkA
          stance: supports
          locator: Q45538996
          quotation: null
          interpretation_note: null
          source:
            id: s_5psFjBsNG3zPXPjB8KLkkA
            source_type: api_record
            title: 维基数据：王绹（Q45538996）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45538996
            external_identifier: Q45538996
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:50.185Z
            metadata_json: null
        - id: cs_XcGhKvJwyNmve5rJ8BahcE
          claim_id: c_7RAFnVjFL2ZEvR4HLQjMwu
          source_id: s_x9JZCT7EcGPPGa5RyEFv74
          stance: supports
          locator: Q45538996
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rcwqa2zPGEygUA8qrxmx1f
        subject_person_id: p_Z5BPr9m4u9GFwUQLtaQNNb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_t5PfsW3CdcMrW3hJi5KQCc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_BEPL9MYPb6X3mRvPFN9aD5
          claim_id: c_rcwqa2zPGEygUA8qrxmx1f
          source_id: s_jMfGGAf4XMHLRJzhikBhoq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_jMfGGAf4XMHLRJzhikBhoq
            source_type: api_record
            title: 维基数据：王袞（Q45537271）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45537271
            external_identifier: Q45537271
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:06.374Z
            metadata_json: null
        - id: cs_MAjG5RL2bcgAAGzz5ceK8n
          claim_id: c_rcwqa2zPGEygUA8qrxmx1f
          source_id: s_dE8bRYtyV2HpwTy6Hstwm4
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_dE8bRYtyV2HpwTy6Hstwm4
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王袞（141634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141634&o=json
            external_identifier: CBDB:141634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:06.517Z
            metadata_json: null
        - id: cs_RkskCeepYRAhamceKL8B6i
          claim_id: c_rcwqa2zPGEygUA8qrxmx1f
          source_id: s_5psFjBsNG3zPXPjB8KLkkA
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_5psFjBsNG3zPXPjB8KLkkA
            source_type: api_record
            title: 维基数据：王绹（Q45538996）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45538996
            external_identifier: Q45538996
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:50.185Z
            metadata_json: null
        - id: cs_QHb1cdttrwhq3nFLE6tuJc
          claim_id: c_rcwqa2zPGEygUA8qrxmx1f
          source_id: s_x9JZCT7EcGPPGa5RyEFv74
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐代墓誌匯編:二卷
          source:
            id: s_x9JZCT7EcGPPGa5RyEFv74
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王綯（157878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157878&o=json
            external_identifier: CBDB:157878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:50.367Z
            metadata_json: null
      object_person:
        id: p_Z5BPr9m4u9GFwUQLtaQNNb
        status: active
        display_name: 王袞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王绹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王绹，唐人物。CBDB 记录其籍贯记录为臨沂。中国历代人物传记资料库（CBDB）以人物编号 157878 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王绹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Z5BPr9m4u9GFwUQLtaQNNb | 王袞 | accepted |

## 外部来源

- [维基数据：王袞（Q45537271）](https://www.wikidata.org/wiki/Q45537271)
- [维基数据：王绹（Q45538996）](https://www.wikidata.org/wiki/Q45538996)
- [CBDB 中国历代人物传记资料库：王袞（141634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141634&o=json)
- [CBDB 中国历代人物传记资料库：王綯（157878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157878&o=json)
