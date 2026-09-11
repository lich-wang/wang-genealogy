---
schema: wang-person/v1
id: p_2kxukhXgmcPrZye4v5ZP7j
status: active
merged_into: null
display_name: 尹氏
revision: 1
cbdb_id: 38559
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7EYEDIhbmm3RPtV4NdHhHw
        subject_person_id: p_2kxukhXgmcPrZye4v5ZP7j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 尹氏，後蜀人物。曾任國太夫人。（中国历代人物传记资料库 CBDB 38559）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JCgsGssdJcLlb0cDZ8jFRw
          claim_id: c_7EYEDIhbmm3RPtV4NdHhHw
          source_id: s_dRVZSZAHHLHq7-6BTkLPrV
          stance: supports
          locator: CBDB:38559
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_dRVZSZAHHLHq7-6BTkLPrV
            source_type: api_record
            title: 中国历代人物传记资料库：尹氏(王永妻)（CBDB 38559）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38559&o=json
            external_identifier: CBDB:38559
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zg5_5aQWXhnyhnAM4SLKJX
        subject_person_id: p_2kxukhXgmcPrZye4v5ZP7j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 尹氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ji85x9Kej_kaOoCDVfNFwe
          claim_id: c_Zg5_5aQWXhnyhnAM4SLKJX
          source_id: s_dRVZSZAHHLHq7-6BTkLPrV
          stance: supports
          locator: CBDB:38559
          quotation: null
          interpretation_note: CBDB 明确记录的王永配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_2OTDhqvfi3FDij-uzzMLZi
        subject_person_id: p_PNfmbNyKR2auC4aeL1AuSM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_2kxukhXgmcPrZye4v5ZP7j
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X44HtofrWBWxTe6dk7EwtS
          claim_id: c_2OTDhqvfi3FDij-uzzMLZi
          source_id: s_dRVZSZAHHLHq7-6BTkLPrV
          stance: supports
          locator: 宋人傳記資料索引(電子版)，579;580：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PNfmbNyKR2auC4aeL1AuSM
        status: active
        display_name: 王永
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 尹氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 尹氏，後蜀人物。曾任國太夫人。（中国历代人物传记资料库 CBDB 38559） | accepted |
| name.primary | 尹氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_PNfmbNyKR2auC4aeL1AuSM | 王永 | accepted |

## 外部来源

- [中国历代人物传记资料库：尹氏(王永妻)（CBDB 38559）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38559&o=json)
