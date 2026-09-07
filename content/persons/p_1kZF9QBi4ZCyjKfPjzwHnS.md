---
schema: wang-person/v1
id: p_1kZF9QBi4ZCyjKfPjzwHnS
status: active
merged_into: null
display_name: 王天叙
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5cnKDQUz5rLzWdEX8ZRZXi
        subject_person_id: p_1kZF9QBi4ZCyjKfPjzwHnS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天叙，明人物。CBDB 记录其籍贯记录为餘姚。中国历代人物传记资料库（CBDB）以人物编号 254715 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_LAt8Y3w8x1NYmtAF8KPR7u
          claim_id: c_5cnKDQUz5rLzWdEX8ZRZXi
          source_id: s_ZGpfWcofycxnGtfH3jJ7yg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ZGpfWcofycxnGtfH3jJ7yg
            source_type: api_record
            title: 维基数据：王天叙（Q45444805）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45444805
            external_identifier: Q45444805
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:50:01.554Z
            metadata_json: null
        - id: cs_bt0WhomlE9xIGlcGhc78Sr
          claim_id: c_5cnKDQUz5rLzWdEX8ZRZXi
          source_id: s_bnBhHsnejyK1mq65RAK1Vf
          stance: supports
          locator: CBDB:254715
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_bnBhHsnejyK1mq65RAK1Vf
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王天敘（254715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254715&o=json
            external_identifier: CBDB:254715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:01.685Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TAxw229AsJLCWCgGVDQ3Nu
        subject_person_id: p_1kZF9QBi4ZCyjKfPjzwHnS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天叙
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1KMebq9isSvDCGF2nUYhNH
          claim_id: c_TAxw229AsJLCWCgGVDQ3Nu
          source_id: s_bnBhHsnejyK1mq65RAK1Vf
          stance: supports
          locator: Q45444805
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_xNK85MukgPQTMt7GPJBbiH
          claim_id: c_TAxw229AsJLCWCgGVDQ3Nu
          source_id: s_ZGpfWcofycxnGtfH3jJ7yg
          stance: supports
          locator: Q45444805
          quotation: null
          interpretation_note: null
          source:
            id: s_ZGpfWcofycxnGtfH3jJ7yg
            source_type: api_record
            title: 维基数据：王天叙（Q45444805）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45444805
            external_identifier: Q45444805
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:50:01.554Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yFmNoKYmD4q1qajPK1mXy8
        subject_person_id: p_5tGaG9aQ657ZJ62g62UKUJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1kZF9QBi4ZCyjKfPjzwHnS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_h2yXgWLW6TLSqy8hMuXEfH
          claim_id: c_yFmNoKYmD4q1qajPK1mXy8
          source_id: s_ZGpfWcofycxnGtfH3jJ7yg
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ZGpfWcofycxnGtfH3jJ7yg
            source_type: api_record
            title: 维基数据：王天叙（Q45444805）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45444805
            external_identifier: Q45444805
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:50:01.554Z
            metadata_json: null
        - id: cs_ZebAVBZjr99mgqiZ1urnYJ
          claim_id: c_yFmNoKYmD4q1qajPK1mXy8
          source_id: s_afnBHwMfAJQHEjwJDZXUds
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_afnBHwMfAJQHEjwJDZXUds
            source_type: api_record
            title: 维基数据：王杰（Q45601328）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45601328
            external_identifier: Q45601328
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:13.176Z
            metadata_json: null
      object_person:
        id: p_5tGaG9aQ657ZJ62g62UKUJ
        status: active
        display_name: 王杰
        merged_into_person_id: null
  children:
    - claim:
        id: c_HGXy6qfcJwrZ5HKCKw2Ap9
        subject_person_id: p_1kZF9QBi4ZCyjKfPjzwHnS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NbC2Uf3vWCE2LtQoDVqumA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_PhFTsmDk8qJWHSnxUumRP3
          claim_id: c_HGXy6qfcJwrZ5HKCKw2Ap9
          source_id: s_MS8MKyScQ3U4ija1uLMsVk
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_MS8MKyScQ3U4ija1uLMsVk
            source_type: api_record
            title: 維基數據：王华（Q15924849）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15924849
            external_identifier: Q15924849
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:10.302Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%8E_(%E6%98%8E%E6%9C%9D)
        - id: cs_pWdjVDegKHSeDiWE6rBVBA
          claim_id: c_HGXy6qfcJwrZ5HKCKw2Ap9
          source_id: s_ZGpfWcofycxnGtfH3jJ7yg
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_ZGpfWcofycxnGtfH3jJ7yg
            source_type: api_record
            title: 维基数据：王天叙（Q45444805）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45444805
            external_identifier: Q45444805
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:50:01.554Z
            metadata_json: null
      object_person:
        id: p_NbC2Uf3vWCE2LtQoDVqumA
        status: active
        display_name: 王华
        merged_into_person_id: null
    - claim:
        id: c_GhzdYjrQkGKRCGs3WarxTa
        subject_person_id: p_1kZF9QBi4ZCyjKfPjzwHnS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ykr41UEw3NbJSps62ktjHo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_suhTvZJMnxCNzab8F2DHH3
          claim_id: c_GhzdYjrQkGKRCGs3WarxTa
          source_id: s_ZGpfWcofycxnGtfH3jJ7yg
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_ZGpfWcofycxnGtfH3jJ7yg
            source_type: api_record
            title: 维基数据：王天叙（Q45444805）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45444805
            external_identifier: Q45444805
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:50:01.554Z
            metadata_json: null
        - id: cs_PopAK9GH7HuMAS3E9ZP8a1
          claim_id: c_GhzdYjrQkGKRCGs3WarxTa
          source_id: s_TDLFnsGss2TjAWXKEcVNuf
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_TDLFnsGss2TjAWXKEcVNuf
            source_type: api_record
            title: 维基数据：王衮（Q45444868）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45444868
            external_identifier: Q45444868
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:11.042Z
            metadata_json: null
      object_person:
        id: p_ykr41UEw3NbJSps62ktjHo
        status: active
        display_name: 王衮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_mR8a4fgP14jXpTRFXszZ1C
        subject_person_id: p_1kZF9QBi4ZCyjKfPjzwHnS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qfyAqTA3PGUUXcgAsCUJEh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dRUWqoVgD6C2VMwec9B8E1
          claim_id: c_mR8a4fgP14jXpTRFXszZ1C
          source_id: s_TSfso3FrCBgfNR2hHscAz3
          stance: supports
          locator: 条文：条文识读（曾祖）（3世）
          quotation: 曾祖王天敘，以孫王守仁贈禮部右侍郎追封特進光祿大夫柱國新建伯兼南京兵部尚書；祖父王袞；父王守禮，母華氏
          interpretation_note: null
          source:
            id: s_TSfso3FrCBgfNR2hHscAz3
            source_type: website
            title: 中文维基百科：王正思
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%AD%A3%E6%80%9D
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:27:22.455Z
            metadata_json: null
      object_person:
        id: p_qfyAqTA3PGUUXcgAsCUJEh
        status: active
        display_name: 王正思
        merged_into_person_id: null
    - claim:
        id: c_r1vkxt7TYu6aMwjMDX5nJd
        subject_person_id: p_1kZF9QBi4ZCyjKfPjzwHnS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TQiMhGLRXGBc7HWBFHEr7P
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kotk5enBe2EL7sKN9EELeA
          claim_id: c_r1vkxt7TYu6aMwjMDX5nJd
          source_id: s_JztmEnfZGFhb6RGHDcNuiu
          stance: supports
          locator: 条文：信息框 親屬（祖父）（2世）
          quotation: 王天叙（祖父）
          interpretation_note: null
          source:
            id: s_JztmEnfZGFhb6RGHDcNuiu
            source_type: website
            title: 中文维基百科：王陽明
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%99%BD%E6%98%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:06.835Z
            metadata_json: null
      object_person:
        id: p_TQiMhGLRXGBc7HWBFHEr7P
        status: active
        display_name: 王守仁
        merged_into_person_id: null
  other: []
---

# 王天叙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王天叙，明人物。CBDB 记录其籍贯记录为餘姚。中国历代人物传记资料库（CBDB）以人物编号 254715 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王天叙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5tGaG9aQ657ZJ62g62UKUJ | 王杰 | accepted |
| children | p_NbC2Uf3vWCE2LtQoDVqumA | 王华 | accepted |
| children | p_ykr41UEw3NbJSps62ktjHo | 王衮 | accepted |
| descendants | p_qfyAqTA3PGUUXcgAsCUJEh | 王正思 | accepted |
| descendants | p_TQiMhGLRXGBc7HWBFHEr7P | 王守仁 | accepted |

## 外部来源

- [维基数据：王衮（Q45444868）](https://www.wikidata.org/wiki/Q45444868)
- [维基数据：王杰（Q45601328）](https://www.wikidata.org/wiki/Q45601328)
- [维基数据：王天叙（Q45444805）](https://www.wikidata.org/wiki/Q45444805)
- [維基數據：王华（Q15924849）](https://www.wikidata.org/wiki/Q15924849)
- [中文维基百科：王陽明](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%99%BD%E6%98%8E)
- [中文维基百科：王正思](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%AD%A3%E6%80%9D)
- [CBDB 中国历代人物传记资料库：王天敘（254715）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254715&o=json)
