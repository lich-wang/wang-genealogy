---
schema: wang-person/v1
id: p_svNoVTBbnvNZLtqQbge32p
status: active
merged_into: null
display_name: 王氏
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HP8oK3qh5JiZ88BdFdKCKM
        subject_person_id: p_svNoVTBbnvNZLtqQbge32p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏，吳安持妻。维基数据以独立条目 Q45431126 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_ohCm8ERL03r3-S9SoFbhYv
          claim_id: c_HP8oK3qh5JiZ88BdFdKCKM
          source_id: s_HtRLK1op2Q3spRP4xb2XJ5
          stance: supports
          locator: Q45431126
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_HtRLK1op2Q3spRP4xb2XJ5
            source_type: api_record
            title: 維基數據：王氏（Q45431126）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45431126
            external_identifier: Q45431126
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:00.890Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_XXJfCGkN3nooPRUxn175EF
        subject_person_id: p_svNoVTBbnvNZLtqQbge32p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_j1uwDW8keVebAuWAckcF21
          claim_id: c_XXJfCGkN3nooPRUxn175EF
          source_id: s_HtRLK1op2Q3spRP4xb2XJ5
          stance: supports
          locator: Q45431126
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Lzfj7XusVjdF2KMBBFCdBy
        subject_person_id: p_fuv1kE3UCBeTFNiA6c9Tuw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_svNoVTBbnvNZLtqQbge32p
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ZCPd1VGzp89qHnD1d8oBfk
          claim_id: c_Lzfj7XusVjdF2KMBBFCdBy
          source_id: s_fLAce8PGeb2eAaVFYTSBka
          stance: supports
          locator: P40（子女）
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
        - id: cs_Ci8oPKX7nN7Ho1fK2hZt3A
          claim_id: c_Lzfj7XusVjdF2KMBBFCdBy
          source_id: s_HtRLK1op2Q3spRP4xb2XJ5
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_HtRLK1op2Q3spRP4xb2XJ5
            source_type: api_record
            title: 維基數據：王氏（Q45431126）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45431126
            external_identifier: Q45431126
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:00.890Z
            metadata_json: null
        - id: cs_FemGcwWyweQ11Aza3SW6UV
          claim_id: c_Lzfj7XusVjdF2KMBBFCdBy
          source_id: s_Gh6euCr2RKfuAXB8kPrVBR
          stance: supports
          locator: 亲属关系：長女
          quotation: null
          interpretation_note: CBDB 注明此条来源：明清婦女著作數據庫
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
        - id: cs_MkPwSMofpw2Krmfvnm9enZ
          claim_id: c_Lzfj7XusVjdF2KMBBFCdBy
          source_id: s_czbWs8rYCWzm9QACSGdwAF
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_czbWs8rYCWzm9QACSGdwAF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（41576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=41576&o=json
            external_identifier: CBDB:41576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:22.452Z
            metadata_json: null
      object_person:
        id: p_fuv1kE3UCBeTFNiA6c9Tuw
        status: active
        display_name: 王安石
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_xhSt8SXtsfKKHjM7wzeYo7
        subject_person_id: p_JnkpTWbJcvJCtHDJoXUsKb
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_svNoVTBbnvNZLtqQbge32p
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_DNn6N5rGkHFWWjaLrxyFhH
          claim_id: c_xhSt8SXtsfKKHjM7wzeYo7
          source_id: s_czbWs8rYCWzm9QACSGdwAF
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_czbWs8rYCWzm9QACSGdwAF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（41576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=41576&o=json
            external_identifier: CBDB:41576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:22.452Z
            metadata_json: null
        - id: cs_dsA6hANRqSz3s7K4JxiCVD
          claim_id: c_xhSt8SXtsfKKHjM7wzeYo7
          source_id: s_HtRLK1op2Q3spRP4xb2XJ5
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_HtRLK1op2Q3spRP4xb2XJ5
            source_type: api_record
            title: 維基數據：王氏（Q45431126）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45431126
            external_identifier: Q45431126
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:00.890Z
            metadata_json: null
        - id: cs_f2FwEcpzc1YSPC3wGjm5hS
          claim_id: c_xhSt8SXtsfKKHjM7wzeYo7
          source_id: s_UUeTk286Aur6M6x9XTkUWi
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_UUeTk286Aur6M6x9XTkUWi
            source_type: api_record
            title: 维基数据：吴安持（Q45359877）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359877
            external_identifier: Q45359877
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:13.923Z
            metadata_json: null
        - id: cs_BAj22YHNCPsKeqk46p1Yut
          claim_id: c_xhSt8SXtsfKKHjM7wzeYo7
          source_id: s_BJA22onh7nirYc7M79ayWe
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_BJA22onh7nirYc7M79ayWe
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：吳安持（1957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1957&o=json
            external_identifier: CBDB:1957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:14.056Z
            metadata_json: null
      object_person:
        id: p_JnkpTWbJcvJCtHDJoXUsKb
        status: active
        display_name: 吴安持
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王氏，吳安持妻。维基数据以独立条目 Q45431126 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fuv1kE3UCBeTFNiA6c9Tuw | 王安石 | accepted |
| spouses | p_JnkpTWbJcvJCtHDJoXUsKb | 吴安持 | accepted |

## 外部来源

- [维基数据：吴安持（Q45359877）](https://www.wikidata.org/wiki/Q45359877)
- [維基數據：王安石（Q319618）](https://www.wikidata.org/wiki/Q319618)
- [維基數據：王氏（Q45431126）](https://www.wikidata.org/wiki/Q45431126)
- [CBDB 中国历代人物传记资料库](https://cbdb.fas.harvard.edu)
- [CBDB 中国历代人物传记资料库：王氏（41576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=41576&o=json)
- [CBDB 中国历代人物传记资料库：吳安持（1957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1957&o=json)
