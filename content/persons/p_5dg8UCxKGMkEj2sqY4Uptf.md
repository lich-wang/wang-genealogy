---
schema: wang-person/v1
id: p_5dg8UCxKGMkEj2sqY4Uptf
status: active
merged_into: null
display_name: 王惕
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GsCFAV1xawtMijDJEMAv6Z
        subject_person_id: p_5dg8UCxKGMkEj2sqY4Uptf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惕（卒于861年），唐人物。CBDB 记录其籍贯记录为洛陽。中国历代人物传记资料库（CBDB）以人物编号 191405 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_5PJyBqzCrQu8BaTcRR1b2k
          claim_id: c_GsCFAV1xawtMijDJEMAv6Z
          source_id: s_xE2DU25QUQRzNR6GND3EMC
          stance: supports
          locator: null
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
        - id: cs_nRIEpPY_k24AswMpu7j2iD
          claim_id: c_GsCFAV1xawtMijDJEMAv6Z
          source_id: s_CySLzJ5RCWuCY2qz9f5hWt
          stance: supports
          locator: CBDB:191405
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_vkXXsWzjzRdAGsAGXRuf7w
        subject_person_id: p_5dg8UCxKGMkEj2sqY4Uptf
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 861年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0861-01-01
            latest: 0861-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7grHzQ1z4yMXyszCSntwov
          claim_id: c_vkXXsWzjzRdAGsAGXRuf7w
          source_id: s_xE2DU25QUQRzNR6GND3EMC
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CFi73sHSJLxumpH4eDSzyX
        subject_person_id: p_5dg8UCxKGMkEj2sqY4Uptf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惕
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2u3DiHmkCqPozLxLyGPpGS
          claim_id: c_CFi73sHSJLxumpH4eDSzyX
          source_id: s_xE2DU25QUQRzNR6GND3EMC
          stance: supports
          locator: Q45652161
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
        - id: cs_FLFhG6Kn8XyLArnFgaWpKu
          claim_id: c_CFi73sHSJLxumpH4eDSzyX
          source_id: s_CySLzJ5RCWuCY2qz9f5hWt
          stance: supports
          locator: Q45652161
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_yA8cG2X1iZb5ac8PFSpqxX
        status: active
        display_name: 王庇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王惕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王惕（卒于861年），唐人物。CBDB 记录其籍贯记录为洛陽。中国历代人物传记资料库（CBDB）以人物编号 191405 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 861年 | accepted |
| name.primary | 王惕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yA8cG2X1iZb5ac8PFSpqxX | 王庇 | accepted |

## 外部来源

- [维基数据：王庇（Q45678257）](https://www.wikidata.org/wiki/Q45678257)
- [维基数据：王惕（Q45652161）](https://www.wikidata.org/wiki/Q45652161)
- [CBDB 中国历代人物传记资料库：王庇（186420）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186420&o=json)
- [CBDB 中国历代人物传记资料库：王惕（191405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191405&o=json)
