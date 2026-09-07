---
schema: wang-person/v1
id: p_b6xBMX6XWhHbr86WPwDHtV
status: active
merged_into: null
display_name: 王敬元
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dXVxCPPazRBMiiN8i3BeMC
        subject_person_id: p_b6xBMX6XWhHbr86WPwDHtV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬元（卒于838年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任散騎常侍。中国历代人物传记资料库（CBDB）以人物编号 175505 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_q55J6uaMVvXb4178ZXsDPf
          claim_id: c_dXVxCPPazRBMiiN8i3BeMC
          source_id: s_YTgme2XM59m3a91BSZ28My
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_YTgme2XM59m3a91BSZ28My
            source_type: api_record
            title: 维基数据：王敬元（Q45663602）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663602
            external_identifier: Q45663602
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:31.447Z
            metadata_json: null
        - id: cs_quzLSwfFGjO238K4LNe-di
          claim_id: c_dXVxCPPazRBMiiN8i3BeMC
          source_id: s_1MdEJxL2XiE4C74myy831p
          stance: supports
          locator: CBDB:175505
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1MdEJxL2XiE4C74myy831p
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王敬元（175505）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175505&o=json
            external_identifier: CBDB:175505
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:31.607Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_bR9KkS3TDHCYB2jDZ58azv
        subject_person_id: p_b6xBMX6XWhHbr86WPwDHtV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 838年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0838-01-01
            latest: 0838-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FXjvDVRVcYKokUDXg9GHcB
          claim_id: c_bR9KkS3TDHCYB2jDZ58azv
          source_id: s_YTgme2XM59m3a91BSZ28My
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_YTgme2XM59m3a91BSZ28My
            source_type: api_record
            title: 维基数据：王敬元（Q45663602）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663602
            external_identifier: Q45663602
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:31.447Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QDGk8jnfUR73erJ6FX8HUt
        subject_person_id: p_b6xBMX6XWhHbr86WPwDHtV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬元
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_B8cQ5rKq2KMKBCzGYxT4tj
          claim_id: c_QDGk8jnfUR73erJ6FX8HUt
          source_id: s_YTgme2XM59m3a91BSZ28My
          stance: supports
          locator: Q45663602
          quotation: null
          interpretation_note: null
          source:
            id: s_YTgme2XM59m3a91BSZ28My
            source_type: api_record
            title: 维基数据：王敬元（Q45663602）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663602
            external_identifier: Q45663602
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:31.447Z
            metadata_json: null
        - id: cs_Nn9R6pFUZb8KNNe8z5jUuD
          claim_id: c_QDGk8jnfUR73erJ6FX8HUt
          source_id: s_1MdEJxL2XiE4C74myy831p
          stance: supports
          locator: Q45663602
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5JMvenEC1dkoGZMw8LnCDa
        subject_person_id: p_nKXmXJSn1SSK6HeL7KRZPW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b6xBMX6XWhHbr86WPwDHtV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Q8uXz6Q726u2KgFABuPiRe
          claim_id: c_5JMvenEC1dkoGZMw8LnCDa
          source_id: s_jz1b2dBq4xEU38JSCGt8LY
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_jz1b2dBq4xEU38JSCGt8LY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王潤（175498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175498&o=json
            external_identifier: CBDB:175498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:57.807Z
            metadata_json: null
        - id: cs_pWoh5SAJthVzriKSUT6kcf
          claim_id: c_5JMvenEC1dkoGZMw8LnCDa
          source_id: s_HePdFjkLovAwhJohuvnL7T
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_HePdFjkLovAwhJohuvnL7T
            source_type: api_record
            title: 维基数据：王润（Q45663208）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663208
            external_identifier: Q45663208
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.666Z
            metadata_json: null
        - id: cs_6yRyJmkS2uBKb4WSaLDS8F
          claim_id: c_5JMvenEC1dkoGZMw8LnCDa
          source_id: s_YTgme2XM59m3a91BSZ28My
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_YTgme2XM59m3a91BSZ28My
            source_type: api_record
            title: 维基数据：王敬元（Q45663602）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663602
            external_identifier: Q45663602
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:31.447Z
            metadata_json: null
        - id: cs_zJDYbzMrwdmfRR795dmn9o
          claim_id: c_5JMvenEC1dkoGZMw8LnCDa
          source_id: s_1MdEJxL2XiE4C74myy831p
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_1MdEJxL2XiE4C74myy831p
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王敬元（175505）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175505&o=json
            external_identifier: CBDB:175505
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:31.607Z
            metadata_json: null
      object_person:
        id: p_nKXmXJSn1SSK6HeL7KRZPW
        status: active
        display_name: 王润
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王敬元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王敬元（卒于838年），唐人物。CBDB 记录其籍贯记录为咸陽，曾任散騎常侍。中国历代人物传记资料库（CBDB）以人物编号 175505 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 838年 | accepted |
| name.primary | 王敬元 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nKXmXJSn1SSK6HeL7KRZPW | 王润 | accepted |

## 外部来源

- [维基数据：王敬元（Q45663602）](https://www.wikidata.org/wiki/Q45663602)
- [维基数据：王润（Q45663208）](https://www.wikidata.org/wiki/Q45663208)
- [CBDB 中国历代人物传记资料库：王敬元（175505）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175505&o=json)
- [CBDB 中国历代人物传记资料库：王潤（175498）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175498&o=json)
