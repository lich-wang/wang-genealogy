---
schema: wang-person/v1
id: p_tdX8aT3u5znQ3z4tHKtVu8
status: active
merged_into: null
display_name: 王吉兆
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SQFKAXUSHxFq4MMUqH6TvM
        subject_person_id: p_tdX8aT3u5znQ3z4tHKtVu8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吉兆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HJuFrebjZN8gQPi5oYG1Xa
          claim_id: c_SQFKAXUSHxFq4MMUqH6TvM
          source_id: s_pH3WFxf23vUASbM57bFQxH
          stance: supports
          locator: CBDB:218639
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（218639）
          source: &a1
            id: s_pH3WFxf23vUASbM57bFQxH
            source_type: api_record
            title: 中国历代人物传记资料库：王吉兆（CBDB 218639）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218639&o=json
            external_identifier: CBDB:218639
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.266Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hUKCUUYSqFT47JMsLjFhBz
        subject_person_id: p_tdX8aT3u5znQ3z4tHKtVu8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吉兆，明人物。萬曆八年進士，籍贯華州，曾任教諭、禮部員外郎。（中国历代人物传记资料库 CBDB 218639）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qbNDSqmkPxxUreoNY8YeRB
          claim_id: c_hUKCUUYSqFT47JMsLjFhBz
          source_id: s_pH3WFxf23vUASbM57bFQxH
          stance: supports
          locator: CBDB:218639
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_cLZ2R3MEAcl2Xq_i0k06Q9
        subject_person_id: p_tdX8aT3u5znQ3z4tHKtVu8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9KoQkJpzmuFGWSKkeqbZoc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d7Q5_IWKr4KwMRAOikyIvT
          claim_id: c_cLZ2R3MEAcl2Xq_i0k06Q9
          source_id: s_pH3WFxf23vUASbM57bFQxH
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第一甲第三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9KoQkJpzmuFGWSKkeqbZoc
        status: active
        display_name: 王庭譔
        merged_into_person_id: null
    - claim:
        id: c_dW19XMouA8PksEGnLdlUuV
        subject_person_id: p_tdX8aT3u5znQ3z4tHKtVu8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BehY6enP6cGJBMEXqAzGFc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QZSkJoYVUXYQnwHqWOQ7pE
          claim_id: c_dW19XMouA8PksEGnLdlUuV
          source_id: s_pH3WFxf23vUASbM57bFQxH
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第一百三十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BehY6enP6cGJBMEXqAzGFc
        status: active
        display_name: 王庭諭
        merged_into_person_id: null
    - claim:
        id: c_5tpAiqX07CuqdtpiVTiVxh
        subject_person_id: p_tdX8aT3u5znQ3z4tHKtVu8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AzHbFDisRRKkMao2Tmvw7Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KhNgT0xGZJU9krq7bzfFS3
          claim_id: c_5tpAiqX07CuqdtpiVTiVxh
          source_id: s_e7FwaFP2_oNAUMba5Q8btV
          stance: supports
          locator: CBDB：兄弟 王庭譔（126634）之父／母 王吉兆
          quotation: null
          interpretation_note: 由兄弟关系推断：王庭諫 与 王庭譔 为同胞（CBDB 记「兄」），王庭譔 之父／母即 王庭諫 之父／母。
          source:
            id: s_e7FwaFP2_oNAUMba5Q8btV
            source_type: api_record
            title: 中国历代人物传记资料库：王庭諫（CBDB 218644）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218644&o=json
            external_identifier: CBDB:218644
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AzHbFDisRRKkMao2Tmvw7Z
        status: active
        display_name: 王庭諫
        merged_into_person_id: null
    - claim:
        id: c_MQbv3Yt2zWWAVmhag-CYKK
        subject_person_id: p_tdX8aT3u5znQ3z4tHKtVu8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gE3QbBN9fCD2PUuxgRRX1T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x5UeFwMkqgmzaXKM19DKrG
          claim_id: c_MQbv3Yt2zWWAVmhag-CYKK
          source_id: s_ebgxPuInHfu4IzmJvZhOyc
          stance: supports
          locator: CBDB：兄弟 王庭譔（126634）之父／母 王吉兆
          quotation: null
          interpretation_note: 由兄弟关系推断：王庭詩 与 王庭譔 为同胞（CBDB 记「弟」），王庭譔 之父／母即 王庭詩 之父／母。
          source:
            id: s_ebgxPuInHfu4IzmJvZhOyc
            source_type: api_record
            title: 中国历代人物传记资料库：王庭詩（CBDB 218642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218642&o=json
            external_identifier: CBDB:218642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gE3QbBN9fCD2PUuxgRRX1T
        status: active
        display_name: 王庭詩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王吉兆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王吉兆 | accepted |
| bio.summary | 王吉兆，明人物。萬曆八年進士，籍贯華州，曾任教諭、禮部員外郎。（中国历代人物传记资料库 CBDB 218639） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_9KoQkJpzmuFGWSKkeqbZoc | 王庭譔 | accepted |
| children | p_BehY6enP6cGJBMEXqAzGFc | 王庭諭 | accepted |
| children | p_AzHbFDisRRKkMao2Tmvw7Z | 王庭諫 | accepted |
| children | p_gE3QbBN9fCD2PUuxgRRX1T | 王庭詩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王吉兆（CBDB 218639）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218639&o=json)
- [中国历代人物传记资料库：王庭諫（CBDB 218644）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218644&o=json)
- [中国历代人物传记资料库：王庭詩（CBDB 218642）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218642&o=json)
