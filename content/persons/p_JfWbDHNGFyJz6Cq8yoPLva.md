---
schema: wang-person/v1
id: p_JfWbDHNGFyJz6Cq8yoPLva
status: active
merged_into: null
display_name: 王崇基
cbdb_id: 33014
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4NXKm2HjkAp4xnss84eaVM
        subject_person_id: p_JfWbDHNGFyJz6Cq8yoPLva
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇基，唐人物。CBDB 记录其籍贯记录为長安。中国历代人物传记资料库（CBDB）以人物编号 33014 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_dwrqiimn33VLjkpCYN55bK
          claim_id: c_4NXKm2HjkAp4xnss84eaVM
          source_id: s_e6LDhxKxZyo3PzSjXeRfWW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_e6LDhxKxZyo3PzSjXeRfWW
            source_type: api_record
            title: 维基数据：王崇基（Q45422606）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45422606
            external_identifier: Q45422606
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:14.259Z
            metadata_json: null
        - id: cs_e2-LhVD7CesA8IQ1TwVSA7
          claim_id: c_4NXKm2HjkAp4xnss84eaVM
          source_id: s_n3ECn9A39xuG5r2gTrzvhQ
          stance: supports
          locator: CBDB:33014
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_n3ECn9A39xuG5r2gTrzvhQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王崇基（33014）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33014&o=json
            external_identifier: CBDB:33014
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:14.405Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bLBaR4bgakB8HBCfTBwY3Q
        subject_person_id: p_JfWbDHNGFyJz6Cq8yoPLva
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇基
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hJq1ug8QPwDSVPau5aLX8X
          claim_id: c_bLBaR4bgakB8HBCfTBwY3Q
          source_id: s_n3ECn9A39xuG5r2gTrzvhQ
          stance: supports
          locator: Q45422606
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_yZg1D4KidEBNr4LXQvZX89
          claim_id: c_bLBaR4bgakB8HBCfTBwY3Q
          source_id: s_e6LDhxKxZyo3PzSjXeRfWW
          stance: supports
          locator: Q45422606
          quotation: null
          interpretation_note: null
          source:
            id: s_e6LDhxKxZyo3PzSjXeRfWW
            source_type: api_record
            title: 维基数据：王崇基（Q45422606）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45422606
            external_identifier: Q45422606
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:14.259Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zvH7gzuJVabq3n5A8JhkpD
        subject_person_id: p_dpxJ79yjeoZcbwCdkzQmv6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JfWbDHNGFyJz6Cq8yoPLva
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HGT7byZ5xLMCYuRBsxHnvu
          claim_id: c_zvH7gzuJVabq3n5A8JhkpD
          source_id: s_e6LDhxKxZyo3PzSjXeRfWW
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_oMHCa9hEGxjH7hRDztNXLE
          claim_id: c_zvH7gzuJVabq3n5A8JhkpD
          source_id: s_pb1L8DCLiqYrJ4pXTXG8ce
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_pb1L8DCLiqYrJ4pXTXG8ce
            source_type: api_record
            title: 维基数据：王珪（Q1562454）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q1562454
            external_identifier: Q1562454
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:53.404Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%8F%AA_(%E5%94%90%E6%9C%9D)
        - id: cs_MkyFEAj7DPhrXFQJiGF54g
          claim_id: c_zvH7gzuJVabq3n5A8JhkpD
          source_id: s_oDcKaN4z8r7MvCks95jRoK
          stance: supports
          locator: 亲属关系：子 / 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)；CBDB 注明此条来源：未知
          source:
            id: s_oDcKaN4z8r7MvCks95jRoK
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王珪（33013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33013&o=json
            external_identifier: CBDB:33013
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:58:53.710Z
            metadata_json: null
      object_person:
        id: p_dpxJ79yjeoZcbwCdkzQmv6
        status: active
        display_name: 王珪
        merged_into_person_id: null
  children:
    - claim:
        id: c_Lb7x4dqhZRCZSUEaQtWDtH
        subject_person_id: p_JfWbDHNGFyJz6Cq8yoPLva
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZRQGakw1b52uVgFa6TPuo2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EaAFV2pSks9D6jSZDnQ93N
          claim_id: c_Lb7x4dqhZRCZSUEaQtWDtH
          source_id: s_e6LDhxKxZyo3PzSjXeRfWW
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_PaLqemkm9JyzD65xWwroNR
          claim_id: c_Lb7x4dqhZRCZSUEaQtWDtH
          source_id: s_WADNNq9aP2LVf5P8axrJUy
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_WADNNq9aP2LVf5P8axrJUy
            source_type: api_record
            title: 维基数据：王体仁（Q45677609）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45677609
            external_identifier: Q45677609
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_ZRQGakw1b52uVgFa6TPuo2
        status: active
        display_name: 王体仁
        merged_into_person_id: null
    - claim:
        id: c_f9dfopSauTmSEWp71GvfpS
        subject_person_id: p_JfWbDHNGFyJz6Cq8yoPLva
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dWRWFHgxvJBT5TEBKBQG8N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KpCmRjdjb7wJctUyFjawt5
          claim_id: c_f9dfopSauTmSEWp71GvfpS
          source_id: s_e6LDhxKxZyo3PzSjXeRfWW
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_7T16RiuHpcSz8VrFTXUGcp
          claim_id: c_f9dfopSauTmSEWp71GvfpS
          source_id: s_KmcqknQ9fQeRpV5LNFDVcV
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_KmcqknQ9fQeRpV5LNFDVcV
            source_type: api_record
            title: 维基数据：王尚逸（Q45677646）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45677646
            external_identifier: Q45677646
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_dWRWFHgxvJBT5TEBKBQG8N
        status: active
        display_name: 王尚逸
        merged_into_person_id: null
    - claim:
        id: c_2iXexZ9gNwvbhjwnDEUWVF
        subject_person_id: p_JfWbDHNGFyJz6Cq8yoPLva
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6aKQmuB1xaRvMcBNGSGgUM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9iUSZA9TG2QzQpp2ENgTZH
          claim_id: c_2iXexZ9gNwvbhjwnDEUWVF
          source_id: s_e6LDhxKxZyo3PzSjXeRfWW
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_wgwvRHZJCWXF62nZ4Yq2LL
          claim_id: c_2iXexZ9gNwvbhjwnDEUWVF
          source_id: s_Gs49s3KoJikFjSgs8G2jos
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Gs49s3KoJikFjSgs8G2jos
            source_type: api_record
            title: 维基数据：王齐望（Q45677679）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45677679
            external_identifier: Q45677679
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_6aKQmuB1xaRvMcBNGSGgUM
        status: active
        display_name: 王齐望
        merged_into_person_id: null
    - claim:
        id: c_Y6sHDgqxBUXMk5WE5mvyX5
        subject_person_id: p_JfWbDHNGFyJz6Cq8yoPLva
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iu1jFRrXCA8214YaBQfsUS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Et1yyK4pkZFztUFWyEXd1H
          claim_id: c_Y6sHDgqxBUXMk5WE5mvyX5
          source_id: s_e6LDhxKxZyo3PzSjXeRfWW
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_sdiUU4YqxUeL7b3Jm9kWMt
          claim_id: c_Y6sHDgqxBUXMk5WE5mvyX5
          source_id: s_FEDBG1s9tKsBFCA8k6SY8T
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_FEDBG1s9tKsBFCA8k6SY8T
            source_type: api_record
            title: 维基数据：王茂时（Q45422610）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45422610
            external_identifier: Q45422610
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_gZ7iXRa1fgAfbqE31LdiTW
          claim_id: c_Y6sHDgqxBUXMk5WE5mvyX5
          source_id: s_n3ECn9A39xuG5r2gTrzvhQ
          stance: supports
          locator: 亲属关系：四子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source: *a1
      object_person:
        id: p_iu1jFRrXCA8214YaBQfsUS
        status: active
        display_name: 王茂时
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崇基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王崇基，唐人物。CBDB 记录其籍贯记录为長安。中国历代人物传记资料库（CBDB）以人物编号 33014 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王崇基 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dpxJ79yjeoZcbwCdkzQmv6 | 王珪 | accepted |
| children | p_ZRQGakw1b52uVgFa6TPuo2 | 王体仁 | accepted |
| children | p_dWRWFHgxvJBT5TEBKBQG8N | 王尚逸 | accepted |
| children | p_6aKQmuB1xaRvMcBNGSGgUM | 王齐望 | accepted |
| children | p_iu1jFRrXCA8214YaBQfsUS | 王茂时 | accepted |

## 外部来源

- [维基数据：王崇基（Q45422606）](https://www.wikidata.org/wiki/Q45422606)
- [维基数据：王珪（Q1562454）](https://www.wikidata.org/wiki/Q1562454)
- [维基数据：王茂时（Q45422610）](https://www.wikidata.org/wiki/Q45422610)
- [维基数据：王齐望（Q45677679）](https://www.wikidata.org/wiki/Q45677679)
- [维基数据：王尚逸（Q45677646）](https://www.wikidata.org/wiki/Q45677646)
- [维基数据：王体仁（Q45677609）](https://www.wikidata.org/wiki/Q45677609)
- [CBDB 中国历代人物传记资料库：王崇基（33014）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33014&o=json)
- [CBDB 中国历代人物传记资料库：王珪（33013）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=33013&o=json)
