---
schema: wang-person/v1
id: p_ykr41UEw3NbJSps62ktjHo
status: active
merged_into: null
display_name: 王衮
cbdb_id: 288232
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iZ8eYr951dZUfJP6Z3PM8H
        subject_person_id: p_ykr41UEw3NbJSps62ktjHo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衮，明人物。中国历代人物传记资料库（CBDB）以人物编号 288232 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_zazPRD9cvBiRiuHC2oQ8qt
          claim_id: c_iZ8eYr951dZUfJP6Z3PM8H
          source_id: s_TDLFnsGss2TjAWXKEcVNuf
          stance: supports
          locator: null
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
        - id: cs_i3NVTi-al3Y4G6wUjV6DaY
          claim_id: c_iZ8eYr951dZUfJP6Z3PM8H
          source_id: s_aVEAyH6iiqF9XEyv6DXK6Q
          stance: supports
          locator: CBDB:288232
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_aVEAyH6iiqF9XEyv6DXK6Q
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王袞（288232）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288232&o=json
            external_identifier: CBDB:288232
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:11.188Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pe9DkL4f8g2M9Cn3s1c4Lf
        subject_person_id: p_ykr41UEw3NbJSps62ktjHo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衮
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HNftGYj9ZcP7r7Q4k695Yf
          claim_id: c_pe9DkL4f8g2M9Cn3s1c4Lf
          source_id: s_aVEAyH6iiqF9XEyv6DXK6Q
          stance: supports
          locator: Q45444868
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_M5mj5CC5urD6DKUqKZ4bNp
          claim_id: c_pe9DkL4f8g2M9Cn3s1c4Lf
          source_id: s_TDLFnsGss2TjAWXKEcVNuf
          stance: supports
          locator: Q45444868
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
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_1kZF9QBi4ZCyjKfPjzwHnS
        status: active
        display_name: 王天叙
        merged_into_person_id: null
  children:
    - claim:
        id: c_8XeXmvbJobuj7Nvk16wqLb
        subject_person_id: p_ykr41UEw3NbJSps62ktjHo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HjMSGWaaseFRH9Rnqfpx53
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_VTqdLDtoiY1mB5Yury5rr7
          claim_id: c_8XeXmvbJobuj7Nvk16wqLb
          source_id: s_TDLFnsGss2TjAWXKEcVNuf
          stance: supports
          locator: P40（子女）
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
        - id: cs_qgWUASbbo3T945PhMnjSYq
          claim_id: c_8XeXmvbJobuj7Nvk16wqLb
          source_id: s_6Uh3rMjkBqDnWEwu7o21mM
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_6Uh3rMjkBqDnWEwu7o21mM
            source_type: api_record
            title: 维基数据：王守礼（Q45444931）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45444931
            external_identifier: Q45444931
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:45.400Z
            metadata_json: null
      object_person:
        id: p_HjMSGWaaseFRH9Rnqfpx53
        status: active
        display_name: 王守礼
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_rpAolK0Lk6-h1BByppTlgU
        subject_person_id: p_ykr41UEw3NbJSps62ktjHo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qfyAqTA3PGUUXcgAsCUJEh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dk4t5gZZigvSP_WhQn7vd5
          claim_id: c_rpAolK0Lk6-h1BByppTlgU
          source_id: s_aVEAyH6iiqF9XEyv6DXK6Q
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第八十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qfyAqTA3PGUUXcgAsCUJEh
        status: active
        display_name: 王正思
        merged_into_person_id: null
  other: []
---

# 王衮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王衮，明人物。中国历代人物传记资料库（CBDB）以人物编号 288232 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王衮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1kZF9QBi4ZCyjKfPjzwHnS | 王天叙 | accepted |
| children | p_HjMSGWaaseFRH9Rnqfpx53 | 王守礼 | accepted |
| descendants | p_qfyAqTA3PGUUXcgAsCUJEh | 王正思 | accepted |

## 外部来源

- [维基数据：王衮（Q45444868）](https://www.wikidata.org/wiki/Q45444868)
- [维基数据：王守礼（Q45444931）](https://www.wikidata.org/wiki/Q45444931)
- [维基数据：王天叙（Q45444805）](https://www.wikidata.org/wiki/Q45444805)
- [CBDB 中国历代人物传记资料库：王袞（288232）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288232&o=json)
