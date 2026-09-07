---
schema: wang-person/v1
id: p_hNsjFK5zLQMnAN2YvRPhJe
status: active
merged_into: null
display_name: 王忠君
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kG8q59Y6yXFXUycKwfPCou
        subject_person_id: p_hNsjFK5zLQMnAN2YvRPhJe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠君（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任丞。中国历代人物传记资料库（CBDB）以人物编号 175574 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3f4attxt9e4EVzFhULNP4R
          claim_id: c_kG8q59Y6yXFXUycKwfPCou
          source_id: s_zSiEwWe75zTx9MuTFHDR4K
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_zSiEwWe75zTx9MuTFHDR4K
            source_type: api_record
            title: 维基数据：王忠君（Q45667302）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667302
            external_identifier: Q45667302
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:50.185Z
            metadata_json: null
        - id: cs_CpGBoEzXcFjEre7Cask_fM
          claim_id: c_kG8q59Y6yXFXUycKwfPCou
          source_id: s_QfnruTSWwXPNQnBU8cQ9Vf
          stance: supports
          locator: CBDB:175574
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QfnruTSWwXPNQnBU8cQ9Vf
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王忠君（175574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175574&o=json
            external_identifier: CBDB:175574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:50.374Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_C6FYEdd4drgUpCxbtMHKrM
        subject_person_id: p_hNsjFK5zLQMnAN2YvRPhJe
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 820年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0820-01-01
            latest: 0820-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XiVgZrmkEUUsPGDC6z42xW
          claim_id: c_C6FYEdd4drgUpCxbtMHKrM
          source_id: s_zSiEwWe75zTx9MuTFHDR4K
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_zSiEwWe75zTx9MuTFHDR4K
            source_type: api_record
            title: 维基数据：王忠君（Q45667302）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667302
            external_identifier: Q45667302
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:50.185Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EkV25vGH3MfU1WL3TQ73FV
        subject_person_id: p_hNsjFK5zLQMnAN2YvRPhJe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠君
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9y9ZBq3SkhV5w4GZJwW1m7
          claim_id: c_EkV25vGH3MfU1WL3TQ73FV
          source_id: s_QfnruTSWwXPNQnBU8cQ9Vf
          stance: supports
          locator: Q45667302
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_YQJKbqESvNbYGhpM1Q4VVX
          claim_id: c_EkV25vGH3MfU1WL3TQ73FV
          source_id: s_zSiEwWe75zTx9MuTFHDR4K
          stance: supports
          locator: Q45667302
          quotation: null
          interpretation_note: null
          source:
            id: s_zSiEwWe75zTx9MuTFHDR4K
            source_type: api_record
            title: 维基数据：王忠君（Q45667302）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667302
            external_identifier: Q45667302
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:50.185Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fxtLqMUog94dwZoyj6USoY
        subject_person_id: p_hUphvs7h4ExD4D4EJkKZ61
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hNsjFK5zLQMnAN2YvRPhJe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_iPN6guHiNf8EjUJqbV2ufE
          claim_id: c_fxtLqMUog94dwZoyj6USoY
          source_id: s_fbx5dbZ3NnyS61Gv3iaW9S
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fbx5dbZ3NnyS61Gv3iaW9S
            source_type: api_record
            title: 维基数据：王仲文（Q45667250）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667250
            external_identifier: Q45667250
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:06.374Z
            metadata_json: null
        - id: cs_skuJS4GFKHT9YnJ8MAASsA
          claim_id: c_fxtLqMUog94dwZoyj6USoY
          source_id: s_y8rQfU3JLW6ZBfxLSEyRcE
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_y8rQfU3JLW6ZBfxLSEyRcE
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王仲文（175573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175573&o=json
            external_identifier: CBDB:175573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:06.536Z
            metadata_json: null
        - id: cs_eEnvF6wGeKxp9JjX9fRhKC
          claim_id: c_fxtLqMUog94dwZoyj6USoY
          source_id: s_zSiEwWe75zTx9MuTFHDR4K
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_zSiEwWe75zTx9MuTFHDR4K
            source_type: api_record
            title: 维基数据：王忠君（Q45667302）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45667302
            external_identifier: Q45667302
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:50.185Z
            metadata_json: null
        - id: cs_DXNC33LWeA7S5fDHiiTG26
          claim_id: c_fxtLqMUog94dwZoyj6USoY
          source_id: s_QfnruTSWwXPNQnBU8cQ9Vf
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_QfnruTSWwXPNQnBU8cQ9Vf
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王忠君（175574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175574&o=json
            external_identifier: CBDB:175574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:50.374Z
            metadata_json: null
      object_person:
        id: p_hUphvs7h4ExD4D4EJkKZ61
        status: active
        display_name: 王仲文
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王忠君

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王忠君（卒于820年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任丞。中国历代人物传记资料库（CBDB）以人物编号 175574 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 820年 | accepted |
| name.primary | 王忠君 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hUphvs7h4ExD4D4EJkKZ61 | 王仲文 | accepted |

## 外部来源

- [维基数据：王忠君（Q45667302）](https://www.wikidata.org/wiki/Q45667302)
- [维基数据：王仲文（Q45667250）](https://www.wikidata.org/wiki/Q45667250)
- [CBDB 中国历代人物传记资料库：王忠君（175574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175574&o=json)
- [CBDB 中国历代人物传记资料库：王仲文（175573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175573&o=json)
