---
schema: wang-person/v1
id: p_4xrT4auYPhfo7nPM4qHRLt
status: active
merged_into: null
display_name: 吴氏
cbdb_id: 38653
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u1NPMUCHfw1c6fdYZ8kPM3
        subject_person_id: p_4xrT4auYPhfo7nPM4qHRLt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 吴氏，王安石妻。维基数据以独立条目 Q45429732 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_9S8Cj1jBFcjzTUCE0Tt5cq
          claim_id: c_u1NPMUCHfw1c6fdYZ8kPM3
          source_id: s_oJR9fF5Z8BvPZJNP7SLAtc
          stance: supports
          locator: Q45429732
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_oJR9fF5Z8BvPZJNP7SLAtc
            source_type: api_record
            title: 维基数据：吴氏（Q45429732）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45429732
            external_identifier: Q45429732
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:29.511Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_R9Zt2EopDqm8BkVMe86yfN
        subject_person_id: p_4xrT4auYPhfo7nPM4qHRLt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 吴氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_RiDyu1hKkB7rY3ibZ8p7BE
          claim_id: c_R9Zt2EopDqm8BkVMe86yfN
          source_id: s_oJR9fF5Z8BvPZJNP7SLAtc
          stance: supports
          locator: Q45429732
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_e8a4cFqN5moYKWd4dZU4U5
          claim_id: c_R9Zt2EopDqm8BkVMe86yfN
          source_id: s_RbaW1YdkRtPWeAGfeiozBb
          stance: supports
          locator: Q45429732
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_RbaW1YdkRtPWeAGfeiozBb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：吳氏（38653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38653&o=json
            external_identifier: CBDB:38653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:29.644Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_oOrBfi43cDmd7Gr5hDy-JC
        subject_person_id: p_4xrT4auYPhfo7nPM4qHRLt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xx9vuxYeyGz3S9KNvmjGws
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GibLDct9VPz_XCp0zVthnA
          claim_id: c_oOrBfi43cDmd7Gr5hDy-JC
          source_id: s_RbaW1YdkRtPWeAGfeiozBb
          stance: supports
          locator: 宋人傳記資料索引(電子版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_xx9vuxYeyGz3S9KNvmjGws
        status: active
        display_name: 王雱
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_67579qLDBMcLneNaetsuD1
        subject_person_id: p_4xrT4auYPhfo7nPM4qHRLt
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_fuv1kE3UCBeTFNiA6c9Tuw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_T2UWi3PuAZfv1oGZZq7AyT
          claim_id: c_67579qLDBMcLneNaetsuD1
          source_id: s_fLAce8PGeb2eAaVFYTSBka
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_fLAce8PGeb2eAaVFYTSBka
            source_type: api_record
            title: 維基數據：王安石（Q319618）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q319618
            external_identifier: Q319618
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:55.261Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%89%E7%9F%B3
        - id: cs_eHVFiBKsU22GVHxn6kPeeE
          claim_id: c_67579qLDBMcLneNaetsuD1
          source_id: s_Gh6euCr2RKfuAXB8kPrVBR
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_Gh6euCr2RKfuAXB8kPrVBR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库
            creator: null
            publisher: null
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu
            external_identifier: CBDB:1762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: null
            metadata_json: null
        - id: cs_ezHr5HbYj42ou4J4MKTGTQ
          claim_id: c_67579qLDBMcLneNaetsuD1
          source_id: s_oJR9fF5Z8BvPZJNP7SLAtc
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_oJR9fF5Z8BvPZJNP7SLAtc
            source_type: api_record
            title: 维基数据：吴氏（Q45429732）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45429732
            external_identifier: Q45429732
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:29.511Z
            metadata_json: null
        - id: cs_VM4xDMq8uKpBu7aKG33en5
          claim_id: c_67579qLDBMcLneNaetsuD1
          source_id: s_RbaW1YdkRtPWeAGfeiozBb
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_RbaW1YdkRtPWeAGfeiozBb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：吳氏（38653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38653&o=json
            external_identifier: CBDB:38653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:29.644Z
            metadata_json: null
      object_person:
        id: p_fuv1kE3UCBeTFNiA6c9Tuw
        status: active
        display_name: 王安石
        merged_into_person_id: null
    - claim:
        id: c_lfJqBnYPLCW9PlGPKhclLB
        subject_person_id: p_fuv1kE3UCBeTFNiA6c9Tuw
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_4xrT4auYPhfo7nPM4qHRLt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RlX_ibmMfn4w_xSU9836df
          claim_id: c_lfJqBnYPLCW9PlGPKhclLB
          source_id: s_Gh6euCr2RKfuAXB8kPrVBR
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1536;1537：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Gh6euCr2RKfuAXB8kPrVBR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库
            creator: null
            publisher: null
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu
            external_identifier: CBDB:1762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: null
            metadata_json: null
      object_person:
        id: p_fuv1kE3UCBeTFNiA6c9Tuw
        status: active
        display_name: 王安石
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 吴氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 吴氏，王安石妻。维基数据以独立条目 Q45429732 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 吴氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_xx9vuxYeyGz3S9KNvmjGws | 王雱 | accepted |
| spouses | p_fuv1kE3UCBeTFNiA6c9Tuw | 王安石 | accepted |
| spouses | p_fuv1kE3UCBeTFNiA6c9Tuw | 王安石 | accepted |

## 外部来源

- [维基数据：吴氏（Q45429732）](https://www.wikidata.org/wiki/Q45429732)
- [維基數據：王安石（Q319618）](https://www.wikidata.org/wiki/Q319618)
- [CBDB 中国历代人物传记资料库](https://cbdb.fas.harvard.edu)
- [CBDB 中国历代人物传记资料库：吳氏（38653）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38653&o=json)
