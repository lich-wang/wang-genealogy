---
schema: wang-person/v1
id: p_sHb3y5RnrBeFzb237QLBgR
status: active
merged_into: null
display_name: 祁德莞
cbdb_id: 123315
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JrYFNqTZgMYDc5_Qnkidby
        subject_person_id: p_sHb3y5RnrBeFzb237QLBgR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 祁德莞，清人物。CBDB 记录其籍贯记录为山陰。中国历代人物传记资料库（CBDB）以人物编号 123315 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qnid5b2fDXAEmombKegboo
          claim_id: c_JrYFNqTZgMYDc5_Qnkidby
          source_id: s_jdfzgj8mY946x86qEj174o
          stance: supports
          locator: CBDB:123315
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_jdfzgj8mY946x86qEj174o
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：祁德莞（123315）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123315&o=json
            external_identifier: CBDB:123315
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:21.983Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xHiKknBMHPFK2dXoB66CSg
        subject_person_id: p_sHb3y5RnrBeFzb237QLBgR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 祁德莞
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_78CMnD6mGcKoPsqHT2zchw
          claim_id: c_xHiKknBMHPFK2dXoB66CSg
          source_id: s_jdfzgj8mY946x86qEj174o
          stance: supports
          locator: Q45674598
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_hDfCwiNUiuCm3DK5J1819F
          claim_id: c_xHiKknBMHPFK2dXoB66CSg
          source_id: s_HNye3KPApoWnhFaoxXaW7k
          stance: supports
          locator: Q45674598
          quotation: null
          interpretation_note: null
          source: &a2
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
      object_person: null
    alternatives: []
relationships:
  parents: []
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
          source: *a2
        - id: cs_wYKptK9kkwzAwbS5mYhqTj
          claim_id: c_HZXvEUPv4FBLwqX1Sv8VBo
          source_id: s_noG2SPvgX2kHnr9DH4ky9x
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：明清婦女著作數據庫
          source:
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
      object_person:
        id: p_mXELR8x6DfcQqAZ9zCdekg
        status: active
        display_name: 王岳起
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 祁德莞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 祁德莞，清人物。CBDB 记录其籍贯记录为山陰。中国历代人物传记资料库（CBDB）以人物编号 123315 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 祁德莞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_mXELR8x6DfcQqAZ9zCdekg | 王岳起 | accepted |

## 外部来源

- [维基数据：祁德莞（Q45674598）](https://www.wikidata.org/wiki/Q45674598)
- [维基数据：王岳起（Q45674638）](https://www.wikidata.org/wiki/Q45674638)
- [CBDB 中国历代人物传记资料库：祁德莞（123315）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123315&o=json)
- [CBDB 中国历代人物传记资料库：王岳起（123316）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123316&o=json)
