---
schema: wang-person/v1
id: p_mXELR8x6DfcQqAZ9zCdekg
status: active
merged_into: null
display_name: 王岳起
cbdb_id: 123316
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jvRtWTa9DR1B7isUPcEozR
        subject_person_id: p_mXELR8x6DfcQqAZ9zCdekg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王岳起，清人物。CBDB 记录其籍贯记录为宛平。中国历代人物传记资料库（CBDB）以人物编号 123316 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_GNNEiFPhNnvwNBZV5wqDUF
          claim_id: c_jvRtWTa9DR1B7isUPcEozR
          source_id: s_b54JcTircsJBRW3PEgdtX1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_b54JcTircsJBRW3PEgdtX1
            source_type: api_record
            title: 维基数据：王岳起（Q45674638）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45674638
            external_identifier: Q45674638
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:14.435Z
            metadata_json: null
        - id: cs_li30sF1S--e0Ph8KW1FSsT
          claim_id: c_jvRtWTa9DR1B7isUPcEozR
          source_id: s_noG2SPvgX2kHnr9DH4ky9x
          stance: supports
          locator: CBDB:123316
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_noG2SPvgX2kHnr9DH4ky9x
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王岳起（123316）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123316&o=json
            external_identifier: CBDB:123316
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:14.669Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_rAvD4nhHKK4yV6fJYHJTUm
        subject_person_id: p_mXELR8x6DfcQqAZ9zCdekg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王岳起
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JCEwm6dbAAe8uAj13DKS1C
          claim_id: c_rAvD4nhHKK4yV6fJYHJTUm
          source_id: s_b54JcTircsJBRW3PEgdtX1
          stance: supports
          locator: Q45674638
          quotation: null
          interpretation_note: null
          source:
            id: s_b54JcTircsJBRW3PEgdtX1
            source_type: api_record
            title: 维基数据：王岳起（Q45674638）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45674638
            external_identifier: Q45674638
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:14.435Z
            metadata_json: null
        - id: cs_VWnX2BE9CxMnwbs574eGN9
          claim_id: c_rAvD4nhHKK4yV6fJYHJTUm
          source_id: s_noG2SPvgX2kHnr9DH4ky9x
          stance: supports
          locator: Q45674638
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ipTmiHdWJRRbT2PkWxaYdN
        subject_person_id: p_WgJjrR3eV8FZmEbV9t77oX
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_mXELR8x6DfcQqAZ9zCdekg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Cj3Rnf1J718D9uFzxzuNJ5
          claim_id: c_ipTmiHdWJRRbT2PkWxaYdN
          source_id: s_Xiup79Q6rjsrG4SdhBjp36
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：明清婦女著作數據庫
          source:
            id: s_Xiup79Q6rjsrG4SdhBjp36
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王思任（71875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71875&o=json
            external_identifier: CBDB:71875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:52.726Z
            metadata_json: null
        - id: cs_QXyefCwCgyeunzZfHj4yQv
          claim_id: c_ipTmiHdWJRRbT2PkWxaYdN
          source_id: s_tSz5UtgEYXRtEWdwBQvTsR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_tSz5UtgEYXRtEWdwBQvTsR
            source_type: api_record
            title: 维基数据：王思任（Q15938368）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15938368
            external_identifier: Q15938368
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:36.824Z
            metadata_json: null
        - id: cs_i52T8D4Lx7CxaLq5pS3b8K
          claim_id: c_ipTmiHdWJRRbT2PkWxaYdN
          source_id: s_b54JcTircsJBRW3PEgdtX1
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_b54JcTircsJBRW3PEgdtX1
            source_type: api_record
            title: 维基数据：王岳起（Q45674638）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45674638
            external_identifier: Q45674638
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:14.435Z
            metadata_json: null
      object_person:
        id: p_WgJjrR3eV8FZmEbV9t77oX
        status: active
        display_name: 王思任
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_HZXvEUPv4FBLwqX1Sv8VBo
        subject_person_id: p_mXELR8x6DfcQqAZ9zCdekg
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_sHb3y5RnrBeFzb237QLBgR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1dUcLETPr8QvyGsaDtqRYM
          claim_id: c_HZXvEUPv4FBLwqX1Sv8VBo
          source_id: s_b54JcTircsJBRW3PEgdtX1
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_b54JcTircsJBRW3PEgdtX1
            source_type: api_record
            title: 维基数据：王岳起（Q45674638）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45674638
            external_identifier: Q45674638
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:14.435Z
            metadata_json: null
        - id: cs_32Hb5B25Q224xQMvtq1MHf
          claim_id: c_HZXvEUPv4FBLwqX1Sv8VBo
          source_id: s_HNye3KPApoWnhFaoxXaW7k
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_HNye3KPApoWnhFaoxXaW7k
            source_type: api_record
            title: 维基数据：祁德莞（Q45674598）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45674598
            external_identifier: Q45674598
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:21.813Z
            metadata_json: null
        - id: cs_wYKptK9kkwzAwbS5mYhqTj
          claim_id: c_HZXvEUPv4FBLwqX1Sv8VBo
          source_id: s_noG2SPvgX2kHnr9DH4ky9x
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：明清婦女著作數據庫
          source: *a1
      object_person:
        id: p_sHb3y5RnrBeFzb237QLBgR
        status: active
        display_name: 祁德莞
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王岳起

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王岳起，清人物。CBDB 记录其籍贯记录为宛平。中国历代人物传记资料库（CBDB）以人物编号 123316 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王岳起 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WgJjrR3eV8FZmEbV9t77oX | 王思任 | accepted |
| spouses | p_sHb3y5RnrBeFzb237QLBgR | 祁德莞 | accepted |

## 外部来源

- [维基数据：祁德莞（Q45674598）](https://www.wikidata.org/wiki/Q45674598)
- [维基数据：王思任（Q15938368）](https://www.wikidata.org/wiki/Q15938368)
- [维基数据：王岳起（Q45674638）](https://www.wikidata.org/wiki/Q45674638)
- [CBDB 中国历代人物传记资料库：王思任（71875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71875&o=json)
- [CBDB 中国历代人物传记资料库：王岳起（123316）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123316&o=json)
