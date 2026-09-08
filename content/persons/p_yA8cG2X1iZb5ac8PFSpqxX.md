---
schema: wang-person/v1
id: p_yA8cG2X1iZb5ac8PFSpqxX
status: active
merged_into: null
display_name: 王庇
cbdb_id: 186420
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m1AMHv185Dm57J9uL1myC3
        subject_person_id: p_yA8cG2X1iZb5ac8PFSpqxX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庇（卒于824年），唐人物。CBDB 记录其籍贯记录为洛陽，曾任縣令。中国历代人物传记资料库（CBDB）以人物编号 186420 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_z7dMtjqZTNGjLpqwBPtJJR
          claim_id: c_m1AMHv185Dm57J9uL1myC3
          source_id: s_wv6HMfQqL3pqsceAnYEFDA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_wv6HMfQqL3pqsceAnYEFDA
            source_type: api_record
            title: 维基数据：王庇（Q45678257）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45678257
            external_identifier: Q45678257
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:24.129Z
            metadata_json: null
        - id: cs_3gH7aRfHxhx-vzg2xay_ZJ
          claim_id: c_m1AMHv185Dm57J9uL1myC3
          source_id: s_xLHRAL8Fi9waWrvjEjE7CP
          stance: supports
          locator: CBDB:186420
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_xLHRAL8Fi9waWrvjEjE7CP
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王庇（186420）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186420&o=json
            external_identifier: CBDB:186420
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:24.289Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_nyQyzUrobHE7Cyqr1uHsHK
        subject_person_id: p_yA8cG2X1iZb5ac8PFSpqxX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 824年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0824-01-01
            latest: 0824-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_euYq3jFN1RJKrQSnQGJCNa
          claim_id: c_nyQyzUrobHE7Cyqr1uHsHK
          source_id: s_wv6HMfQqL3pqsceAnYEFDA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_wv6HMfQqL3pqsceAnYEFDA
            source_type: api_record
            title: 维基数据：王庇（Q45678257）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45678257
            external_identifier: Q45678257
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:24.129Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uDXs6qgVsANeUZ7qMFixPJ
        subject_person_id: p_yA8cG2X1iZb5ac8PFSpqxX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庇
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2pB9Ef7QSY7PyX73TZxvkb
          claim_id: c_uDXs6qgVsANeUZ7qMFixPJ
          source_id: s_xLHRAL8Fi9waWrvjEjE7CP
          stance: supports
          locator: Q45678257
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_vE31hKjN1ibBynVHkRHAnC
          claim_id: c_uDXs6qgVsANeUZ7qMFixPJ
          source_id: s_wv6HMfQqL3pqsceAnYEFDA
          stance: supports
          locator: Q45678257
          quotation: null
          interpretation_note: null
          source:
            id: s_wv6HMfQqL3pqsceAnYEFDA
            source_type: api_record
            title: 维基数据：王庇（Q45678257）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45678257
            external_identifier: Q45678257
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:24.129Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HDi6kCndCmKFF4BUqaJPbS
        subject_person_id: p_14x7rGh9oPptwu81wW4v9i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yA8cG2X1iZb5ac8PFSpqxX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_fnrrvMnUZSwa6tw1ePBkY3
          claim_id: c_HDi6kCndCmKFF4BUqaJPbS
          source_id: s_SiC4NcP5NSBvHx8K6zKdsi
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_SiC4NcP5NSBvHx8K6zKdsi
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王緯（92022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92022&o=json
            external_identifier: CBDB:92022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:54.755Z
            metadata_json: null
        - id: cs_qtdtHSX87BB21go7PNS5HX
          claim_id: c_HDi6kCndCmKFF4BUqaJPbS
          source_id: s_GRyeg6rL6E7AMzPoSxs6Qw
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_GRyeg6rL6E7AMzPoSxs6Qw
            source_type: api_record
            title: 维基数据：王纬（Q45441464）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45441464
            external_identifier: Q45441464
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:54.603Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%BA%AC_(%E5%94%90%E6%9C%9D)
        - id: cs_hcp9mWHEQmVDj2TBGDw31D
          claim_id: c_HDi6kCndCmKFF4BUqaJPbS
          source_id: s_wv6HMfQqL3pqsceAnYEFDA
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_wv6HMfQqL3pqsceAnYEFDA
            source_type: api_record
            title: 维基数据：王庇（Q45678257）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45678257
            external_identifier: Q45678257
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:24.129Z
            metadata_json: null
        - id: cs_MprZcgpCdM8b6phJysNpnZ
          claim_id: c_HDi6kCndCmKFF4BUqaJPbS
          source_id: s_xLHRAL8Fi9waWrvjEjE7CP
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_xLHRAL8Fi9waWrvjEjE7CP
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王庇（186420）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186420&o=json
            external_identifier: CBDB:186420
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:24.289Z
            metadata_json: null
      object_person:
        id: p_14x7rGh9oPptwu81wW4v9i
        status: active
        display_name: 王纬
        merged_into_person_id: null
  children:
    - claim:
        id: c_24F47YSfBeNTvMmE9P5Bd3
        subject_person_id: p_yA8cG2X1iZb5ac8PFSpqxX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CxJ6GvnpqUnGgGeRsD8EiU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9PVByT9PZQa2kDKhSWfdBt
          claim_id: c_24F47YSfBeNTvMmE9P5Bd3
          source_id: s_wv6HMfQqL3pqsceAnYEFDA
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_wv6HMfQqL3pqsceAnYEFDA
            source_type: api_record
            title: 维基数据：王庇（Q45678257）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45678257
            external_identifier: Q45678257
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:24.129Z
            metadata_json: null
        - id: cs_B9ZtEgrpPq9bn3caU2mhxy
          claim_id: c_24F47YSfBeNTvMmE9P5Bd3
          source_id: s_xLHRAL8Fi9waWrvjEjE7CP
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_xLHRAL8Fi9waWrvjEjE7CP
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王庇（186420）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186420&o=json
            external_identifier: CBDB:186420
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:24.289Z
            metadata_json: null
        - id: cs_gj1jyJpofYYd1nswekBTEc
          claim_id: c_24F47YSfBeNTvMmE9P5Bd3
          source_id: s_gXFWrwoeWdxXqs9mNV5xu7
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_gXFWrwoeWdxXqs9mNV5xu7
            source_type: api_record
            title: 维基数据：王恭（Q45448520）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45448520
            external_identifier: Q45448520
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:38.390Z
            metadata_json: null
        - id: cs_PTAinhrU9rA9WBnZDM8dpJ
          claim_id: c_24F47YSfBeNTvMmE9P5Bd3
          source_id: s_2LmF8My9n7diUeH3wdDXXe
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_2LmF8My9n7diUeH3wdDXXe
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王恭（145176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145176&o=json
            external_identifier: CBDB:145176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:25:38.537Z
            metadata_json: null
      object_person:
        id: p_CxJ6GvnpqUnGgGeRsD8EiU
        status: active
        display_name: 王恭
        merged_into_person_id: null
    - claim:
        id: c_CfHeDu4To1B1Hvy3z2To53
        subject_person_id: p_yA8cG2X1iZb5ac8PFSpqxX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5dg8UCxKGMkEj2sqY4Uptf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3GmsdaNK43GMuT18yScDas
          claim_id: c_CfHeDu4To1B1Hvy3z2To53
          source_id: s_wv6HMfQqL3pqsceAnYEFDA
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_wv6HMfQqL3pqsceAnYEFDA
            source_type: api_record
            title: 维基数据：王庇（Q45678257）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45678257
            external_identifier: Q45678257
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:18:24.129Z
            metadata_json: null
        - id: cs_qciQt6cEqt4Migsru1Cwv3
          claim_id: c_CfHeDu4To1B1Hvy3z2To53
          source_id: s_xLHRAL8Fi9waWrvjEjE7CP
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_xLHRAL8Fi9waWrvjEjE7CP
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王庇（186420）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186420&o=json
            external_identifier: CBDB:186420
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:18:24.289Z
            metadata_json: null
        - id: cs_B6d6w3aUv1n3HYGJWYto7T
          claim_id: c_CfHeDu4To1B1Hvy3z2To53
          source_id: s_xE2DU25QUQRzNR6GND3EMC
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_xE2DU25QUQRzNR6GND3EMC
            source_type: api_record
            title: 维基数据：王惕（Q45652161）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45652161
            external_identifier: Q45652161
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:25:42.456Z
            metadata_json: null
        - id: cs_JhnQngjzJeNQCheys19ndF
          claim_id: c_CfHeDu4To1B1Hvy3z2To53
          source_id: s_CySLzJ5RCWuCY2qz9f5hWt
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_CySLzJ5RCWuCY2qz9f5hWt
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王惕（191405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191405&o=json
            external_identifier: CBDB:191405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:25:42.600Z
            metadata_json: null
      object_person:
        id: p_5dg8UCxKGMkEj2sqY4Uptf
        status: active
        display_name: 王惕
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王庇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王庇（卒于824年），唐人物。CBDB 记录其籍贯记录为洛陽，曾任縣令。中国历代人物传记资料库（CBDB）以人物编号 186420 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 824年 | accepted |
| name.primary | 王庇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_14x7rGh9oPptwu81wW4v9i | 王纬 | accepted |
| children | p_CxJ6GvnpqUnGgGeRsD8EiU | 王恭 | accepted |
| children | p_5dg8UCxKGMkEj2sqY4Uptf | 王惕 | accepted |

## 外部来源

- [维基数据：王庇（Q45678257）](https://www.wikidata.org/wiki/Q45678257)
- [维基数据：王恭（Q45448520）](https://www.wikidata.org/wiki/Q45448520)
- [维基数据：王惕（Q45652161）](https://www.wikidata.org/wiki/Q45652161)
- [维基数据：王纬（Q45441464）](https://www.wikidata.org/wiki/Q45441464)
- [CBDB 中国历代人物传记资料库：王庇（186420）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186420&o=json)
- [CBDB 中国历代人物传记资料库：王恭（145176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145176&o=json)
- [CBDB 中国历代人物传记资料库：王惕（191405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191405&o=json)
- [CBDB 中国历代人物传记资料库：王緯（92022）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92022&o=json)
