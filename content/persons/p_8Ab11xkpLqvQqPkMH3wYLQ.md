---
schema: wang-person/v1
id: p_8Ab11xkpLqvQqPkMH3wYLQ
status: active
merged_into: null
display_name: 王恂
cbdb_id: 36880
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SSmLdMgLasmMFeWYnGspvT
        subject_person_id: p_8Ab11xkpLqvQqPkMH3wYLQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恂，宋人物。CBDB 记录其籍贯记录为開封。中国历代人物传记资料库（CBDB）以人物编号 36880 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Abah2wXabV1LjcdhP6pP4x
          claim_id: c_SSmLdMgLasmMFeWYnGspvT
          source_id: s_eJxpWTQx59zWYxKKrFK9mB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_eJxpWTQx59zWYxKKrFK9mB
            source_type: api_record
            title: 维基数据：王恂（Q45426288）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426288
            external_identifier: Q45426288
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:02.834Z
            metadata_json: null
        - id: cs_K3qIPsQ8OwEtq-q4ITjy1b
          claim_id: c_SSmLdMgLasmMFeWYnGspvT
          source_id: s_auWxLAjruR3itcown37EoL
          stance: supports
          locator: CBDB:36880
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_auWxLAjruR3itcown37EoL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王恂（36880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36880&o=json
            external_identifier: CBDB:36880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:03.028Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BRZUK8G83FqLHnn1y4wqNL
        subject_person_id: p_8Ab11xkpLqvQqPkMH3wYLQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恂
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MF7LdcxkdDmaaZSVAkhsb1
          claim_id: c_BRZUK8G83FqLHnn1y4wqNL
          source_id: s_eJxpWTQx59zWYxKKrFK9mB
          stance: supports
          locator: Q45426288
          quotation: null
          interpretation_note: null
          source:
            id: s_eJxpWTQx59zWYxKKrFK9mB
            source_type: api_record
            title: 维基数据：王恂（Q45426288）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426288
            external_identifier: Q45426288
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:02.834Z
            metadata_json: null
        - id: cs_WZaADbAF9NfiFYvT1JWH9s
          claim_id: c_BRZUK8G83FqLHnn1y4wqNL
          source_id: s_auWxLAjruR3itcown37EoL
          stance: supports
          locator: Q45426288
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4K9g7uu352UuyFgJhTDJM2
        subject_person_id: p_Nm2iJSX6JvN22S8n42tuCU
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_8Ab11xkpLqvQqPkMH3wYLQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VbkqpLraYY5JtSU3cwj8h3
          claim_id: c_4K9g7uu352UuyFgJhTDJM2
          source_id: s_eJxpWTQx59zWYxKKrFK9mB
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_eJxpWTQx59zWYxKKrFK9mB
            source_type: api_record
            title: 维基数据：王恂（Q45426288）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426288
            external_identifier: Q45426288
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:02.834Z
            metadata_json: null
        - id: cs_bgNUzqXb5KybECUHDpNBWT
          claim_id: c_4K9g7uu352UuyFgJhTDJM2
          source_id: s_i7o4wkRHMa3TMYJFGG8z6R
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_i7o4wkRHMa3TMYJFGG8z6R
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王直方（13798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13798&o=json
            external_identifier: CBDB:13798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:37.269Z
            metadata_json: null
        - id: cs_dMvN997nS8z44e6zPXTjMG
          claim_id: c_4K9g7uu352UuyFgJhTDJM2
          source_id: s_WZxztQ1X5HrUXThqKTPoT4
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_WZxztQ1X5HrUXThqKTPoT4
            source_type: api_record
            title: 维基数据：王直方（Q10415993）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10415993
            external_identifier: Q10415993
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:48.321Z
            metadata_json: null
      object_person:
        id: p_Nm2iJSX6JvN22S8n42tuCU
        status: active
        display_name: 王直方
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王恂，宋人物。CBDB 记录其籍贯记录为開封。中国历代人物传记资料库（CBDB）以人物编号 36880 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王恂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Nm2iJSX6JvN22S8n42tuCU | 王直方 | accepted |

## 外部来源

- [维基数据：王恂（Q45426288）](https://www.wikidata.org/wiki/Q45426288)
- [维基数据：王直方（Q10415993）](https://www.wikidata.org/wiki/Q10415993)
- [CBDB 中国历代人物传记资料库：王恂（36880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36880&o=json)
- [CBDB 中国历代人物传记资料库：王直方（13798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13798&o=json)
