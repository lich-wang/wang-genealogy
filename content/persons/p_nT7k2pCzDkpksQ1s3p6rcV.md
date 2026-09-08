---
schema: wang-person/v1
id: p_nT7k2pCzDkpksQ1s3p6rcV
status: active
merged_into: null
display_name: 王裕
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FxCYt22oM75WCcX6y44WjJ
        subject_person_id: p_nT7k2pCzDkpksQ1s3p6rcV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裕（567年—625年6月22日），字长弘，出身祁县王氏，王思政之孙，王秉之子，隋唐官员。唐朝初年同安公主的丈夫。 《新》《旧唐书》简略的提及王裕，生平见于当代展出的、其墓誌銘拓片。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_UZiM81PwYb93o5o5eNnAsG
          claim_id: c_FxCYt22oM75WCcX6y44WjJ
          source_id: s_jP68TirswtwKcjvQJfKLb9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a1
            id: s_jP68TirswtwKcjvQJfKLb9
            source_type: api_record
            title: 维基数据：王裕（Q25918183）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q25918183
            external_identifier: Q25918183
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:27.414Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A3%95_(%E9%9A%8F%E5%B7%9E%E5%88%BA%E5%8F%B2)
        - id: cs_o2Aj8QDCXEGGmH8fd62z74
          claim_id: c_FxCYt22oM75WCcX6y44WjJ
          source_id: s_-QPooptzssYWR9ndRGZVD8
          stance: supports
          locator: 导言
          quotation: 王裕（567年—625年6月22日），字长弘，出身祁县王氏，王思
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_-QPooptzssYWR9ndRGZVD8
            source_type: website
            title: 中文维基百科：王裕 (随州刺史)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A3%95_(%E9%9A%8F%E5%B7%9E%E5%88%BA%E5%8F%B2)
            external_identifier: Q25918183
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_96BU1JDUEM4WGDLobYBKKB
        subject_person_id: p_nT7k2pCzDkpksQ1s3p6rcV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裕
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_x5Z1qhHou2wui74TJt1tpY
          claim_id: c_96BU1JDUEM4WGDLobYBKKB
          source_id: s_CEF39ifYGAmgifgRYAsKvk
          stance: supports
          locator: Q25918183
          quotation: null
          interpretation_note: null
          source:
            id: s_CEF39ifYGAmgifgRYAsKvk
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王裕（382610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382610&o=json
            external_identifier: CBDB:382610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:27.591Z
            metadata_json: null
        - id: cs_ziRuxLETB1DErncoGmFVg8
          claim_id: c_96BU1JDUEM4WGDLobYBKKB
          source_id: s_jP68TirswtwKcjvQJfKLb9
          stance: supports
          locator: Q25918183
          quotation: null
          interpretation_note: null
          source:
            id: s_jP68TirswtwKcjvQJfKLb9
            source_type: api_record
            title: 维基数据：王裕（Q25918183）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q25918183
            external_identifier: Q25918183
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:27.414Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A3%95_(%E9%9A%8F%E5%B7%9E%E5%88%BA%E5%8F%B2)
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pvG7iFon4jA8MQoEo8SZJ2
        subject_person_id: p_k8N9fHLfZTuh4xsfFS4VAt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nT7k2pCzDkpksQ1s3p6rcV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ChHXgB6mbHHPYfXFBpAr1a
          claim_id: c_pvG7iFon4jA8MQoEo8SZJ2
          source_id: s_jP68TirswtwKcjvQJfKLb9
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_7oQDsAsKsts2NQmPLn4woB
          claim_id: c_pvG7iFon4jA8MQoEo8SZJ2
          source_id: s_Bap1VHJ7heG8n9aPnRaEcM
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_Bap1VHJ7heG8n9aPnRaEcM
            source_type: api_record
            title: 维基数据：王秉（Q19826406）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q19826406
            external_identifier: Q19826406
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%A7%89_(%E5%A4%AA%E5%8E%9F%E9%83%A1%E5%85%AC)
      object_person:
        id: p_k8N9fHLfZTuh4xsfFS4VAt
        status: active
        display_name: 王秉
        merged_into_person_id: null
  children:
    - claim:
        id: c_4FvQCsW68F2DX6CaoDPJpt
        subject_person_id: p_nT7k2pCzDkpksQ1s3p6rcV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YKgY5PASw5q7sB3GUEPQKx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o3KXorH5cKAg4LLk8mVwid
          claim_id: c_4FvQCsW68F2DX6CaoDPJpt
          source_id: s_KK1Ku18wh3DbxXSfmECsgr
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_KK1Ku18wh3DbxXSfmECsgr
            source_type: api_record
            title: 维基数据：王仁表（Q26121262）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26121262
            external_identifier: Q26121262
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:28.634Z
            metadata_json: null
        - id: cs_qbJrLSNF8iuRF8fkojN49K
          claim_id: c_4FvQCsW68F2DX6CaoDPJpt
          source_id: s_jP68TirswtwKcjvQJfKLb9
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_YKgY5PASw5q7sB3GUEPQKx
        status: active
        display_name: 王仁表
        merged_into_person_id: null
    - claim:
        id: c_BVf6KbuVbevPogTSLcrk5J
        subject_person_id: p_nT7k2pCzDkpksQ1s3p6rcV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aL8r4ijxMz8i3aNoSv54m1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Exb5ZJXkREJMcPdmgNam65
          claim_id: c_BVf6KbuVbevPogTSLcrk5J
          source_id: s_jP68TirswtwKcjvQJfKLb9
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_8V4YrXzgtq9JweNzjyqKDg
          claim_id: c_BVf6KbuVbevPogTSLcrk5J
          source_id: s_Pk8UsTf1S7y3cmMbY6o2rt
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Pk8UsTf1S7y3cmMbY6o2rt
            source_type: api_record
            title: 维基数据：王氏（Q25918179）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q25918179
            external_identifier: Q25918179
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_aL8r4ijxMz8i3aNoSv54m1
        status: active
        display_name: 王氏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_D88ju7RwCyF8T5g5KjHqGH
        subject_person_id: p_nT7k2pCzDkpksQ1s3p6rcV
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_rZ9uC57MV3gY3Boa6rEox6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6ZyGfaepsaPDxQPdJ2EfAF
          claim_id: c_D88ju7RwCyF8T5g5KjHqGH
          source_id: s_jP68TirswtwKcjvQJfKLb9
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_8YKU3dW2143cMHXL3xAF4q
          claim_id: c_D88ju7RwCyF8T5g5KjHqGH
          source_id: s_mSbffPsh7E5HNYBd1cy7gj
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_mSbffPsh7E5HNYBd1cy7gj
            source_type: api_record
            title: 维基数据：同安公主（Q10917554）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10917554
            external_identifier: Q10917554
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%90%8C%E5%AE%89%E5%85%AC%E4%B8%BB
      object_person:
        id: p_rZ9uC57MV3gY3Boa6rEox6
        status: active
        display_name: 同安公主
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王裕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王裕（567年—625年6月22日），字长弘，出身祁县王氏，王思政之孙，王秉之子，隋唐官员。唐朝初年同安公主的丈夫。 《新》《旧唐书》简略的提及王裕，生平见于当代展出的、其墓誌銘拓片。 | accepted |
| name.primary | 王裕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_k8N9fHLfZTuh4xsfFS4VAt | 王秉 | accepted |
| children | p_YKgY5PASw5q7sB3GUEPQKx | 王仁表 | accepted |
| children | p_aL8r4ijxMz8i3aNoSv54m1 | 王氏 | accepted |
| spouses | p_rZ9uC57MV3gY3Boa6rEox6 | 同安公主 | accepted |

## 外部来源

- [维基数据：同安公主（Q10917554）](https://www.wikidata.org/wiki/Q10917554)
- [维基数据：王秉（Q19826406）](https://www.wikidata.org/wiki/Q19826406)
- [维基数据：王仁表（Q26121262）](https://www.wikidata.org/wiki/Q26121262)
- [维基数据：王氏（Q25918179）](https://www.wikidata.org/wiki/Q25918179)
- [维基数据：王裕（Q25918183）](https://www.wikidata.org/wiki/Q25918183)
- [中文维基百科：王裕 (随州刺史)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A3%95_(%E9%9A%8F%E5%B7%9E%E5%88%BA%E5%8F%B2))
- [CBDB 中国历代人物传记资料库：王裕（382610）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382610&o=json)
