---
schema: wang-person/v1
id: p_rzWVYhxBK9oeQF6on3qVdy
status: active
merged_into: null
display_name: 王延索
cbdb_id: 34588
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3AycoAErVqdzffNadVz4Ca
        subject_person_id: p_rzWVYhxBK9oeQF6on3qVdy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延索，明人物。CBDB 记录其籍贯记录为吳縣，入仕记录为恩蔭、蔭補(籠統)。中国历代人物传记资料库（CBDB）以人物编号 34588 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Ld8TfMwwCPAqHL5Xd8CoKh
          claim_id: c_3AycoAErVqdzffNadVz4Ca
          source_id: s_wozPE4kTSPW8z42x8Mj9Hr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_wozPE4kTSPW8z42x8Mj9Hr
            source_type: api_record
            title: 维基数据：王延索（Q45426587）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426587
            external_identifier: Q45426587
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:32.124Z
            metadata_json: null
        - id: cs_CmRk_U5VRuiyjpPDZtn5g9
          claim_id: c_3AycoAErVqdzffNadVz4Ca
          source_id: s_2vna4WaozGUuCdYF13LLMw
          stance: supports
          locator: CBDB:34588
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2vna4WaozGUuCdYF13LLMw
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王延索（34588）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34588&o=json
            external_identifier: CBDB:34588
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:32.266Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9eUgtRNhpo2YDgcxKfoySL
        subject_person_id: p_rzWVYhxBK9oeQF6on3qVdy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延索
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2GDaaEZuLhDMCta37X12nR
          claim_id: c_9eUgtRNhpo2YDgcxKfoySL
          source_id: s_wozPE4kTSPW8z42x8Mj9Hr
          stance: supports
          locator: Q45426587
          quotation: null
          interpretation_note: null
          source:
            id: s_wozPE4kTSPW8z42x8Mj9Hr
            source_type: api_record
            title: 维基数据：王延索（Q45426587）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426587
            external_identifier: Q45426587
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:32.124Z
            metadata_json: null
        - id: cs_NNG7xkSeCFWPFYou3qzHAv
          claim_id: c_9eUgtRNhpo2YDgcxKfoySL
          source_id: s_2vna4WaozGUuCdYF13LLMw
          stance: supports
          locator: Q45426587
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NRx8ZXiXRgTEnL6VYvyPLH
        subject_person_id: p_Wp6B6oFJWureDLbUWC4XTo
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_rzWVYhxBK9oeQF6on3qVdy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7KKV1sCkomZfD2NtpaUS5W
          claim_id: c_NRx8ZXiXRgTEnL6VYvyPLH
          source_id: s_wozPE4kTSPW8z42x8Mj9Hr
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_wozPE4kTSPW8z42x8Mj9Hr
            source_type: api_record
            title: 维基数据：王延索（Q45426587）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426587
            external_identifier: Q45426587
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:32.124Z
            metadata_json: null
        - id: cs_egvEL4NrzcXPZri6UUxj63
          claim_id: c_NRx8ZXiXRgTEnL6VYvyPLH
          source_id: s_5F5Mp5wNXSLuYE7mo8tsT9
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_5F5Mp5wNXSLuYE7mo8tsT9
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王鏊（34579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34579&o=json
            external_identifier: CBDB:34579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:08.975Z
            metadata_json: null
        - id: cs_tP61oDMadj3t8KKH3PC3Lh
          claim_id: c_NRx8ZXiXRgTEnL6VYvyPLH
          source_id: s_dWRCcR6daat23BeqA6jHUm
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_dWRCcR6daat23BeqA6jHUm
            source_type: api_record
            title: 维基数据：王鏊（Q15904946）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15904946
            external_identifier: Q15904946
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:46:35.973Z
            metadata_json: null
      object_person:
        id: p_Wp6B6oFJWureDLbUWC4XTo
        status: active
        display_name: 王鏊
        merged_into_person_id: null
    - claim:
        id: c_tlA_IssITE6rK4WMNQsu_7
        subject_person_id: p_D4z9mWRZWdetNdzRfwASCL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rzWVYhxBK9oeQF6on3qVdy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X6tiGBAgkfjY3O_j7xxm-R
          claim_id: c_tlA_IssITE6rK4WMNQsu_7
          source_id: s_2vna4WaozGUuCdYF13LLMw
          stance: supports
          locator: CBDB 双向互证（父 王鏊 ⇄ 子 王延索）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_D4z9mWRZWdetNdzRfwASCL
        status: active
        display_name: 王鏊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王延索

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王延索，明人物。CBDB 记录其籍贯记录为吳縣，入仕记录为恩蔭、蔭補(籠統)。中国历代人物传记资料库（CBDB）以人物编号 34588 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王延索 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Wp6B6oFJWureDLbUWC4XTo | 王鏊 | accepted |
| parents | p_D4z9mWRZWdetNdzRfwASCL | 王鏊 | accepted |

## 外部来源

- [维基数据：王鏊（Q15904946）](https://www.wikidata.org/wiki/Q15904946)
- [维基数据：王延索（Q45426587）](https://www.wikidata.org/wiki/Q45426587)
- [CBDB 中国历代人物传记资料库：王鏊（34579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34579&o=json)
- [CBDB 中国历代人物传记资料库：王延索（34588）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34588&o=json)
