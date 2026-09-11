---
schema: wang-person/v1
id: p_PNfmbNyKR2auC4aeL1AuSM
status: active
merged_into: null
display_name: 王永
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AcHtEVDJwoZW5Ebow6zA5M
        subject_person_id: p_PNfmbNyKR2auC4aeL1AuSM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7CNzTnFwf87ei7pwViSKER
          claim_id: c_AcHtEVDJwoZW5Ebow6zA5M
          source_id: s_sHRCQq4nQnkKPMFBzoveAB
          stance: supports
          locator: CBDB:13516
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（13516）
          source: &a1
            id: s_sHRCQq4nQnkKPMFBzoveAB
            source_type: api_record
            title: 中国历代人物传记资料库：王永（CBDB 13516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13516&o=json
            external_identifier: CBDB:13516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.624Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eeANAjN4HYMEarZqhaK1R7
        subject_person_id: p_PNfmbNyKR2auC4aeL1AuSM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永，後蜀人物。籍贯懷寧，曾任秘書省校書郎、太師、右補闕。（中国历代人物传记资料库 CBDB 13516）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2qmfGdtXLFHIzoXOlEC1hv
          claim_id: c_eeANAjN4HYMEarZqhaK1R7
          source_id: s_sHRCQq4nQnkKPMFBzoveAB
          stance: supports
          locator: CBDB:13516
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_-DpoGU5o0BUXS4v_Pj4ckv
        subject_person_id: p_PNfmbNyKR2auC4aeL1AuSM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QZHN7XBFLhdEfKGuEPQEhp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c9RrnOCy5tQxUkgqd6c_rX
          claim_id: c_-DpoGU5o0BUXS4v_Pj4ckv
          source_id: s_sHRCQq4nQnkKPMFBzoveAB
          stance: supports
          locator: CBDB 双向互证（子 王贄 ⇄ 父 王永）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_QZHN7XBFLhdEfKGuEPQEhp
        status: active
        display_name: 王贄
        merged_into_person_id: null
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
          source:
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
      object_person:
        id: p_2kxukhXgmcPrZye4v5ZP7j
        status: active
        display_name: 尹氏
        merged_into_person_id: null
  ancestors: []
  descendants:
    - claim:
        id: c_vtiUXRLTVfBWNOFR1Nqxvu
        subject_person_id: p_PNfmbNyKR2auC4aeL1AuSM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_KzB2C1aLBuDGmUVnrc9So3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_axQskM6V53IhT6gHYPf8Ff
          claim_id: c_vtiUXRLTVfBWNOFR1Nqxvu
          source_id: s_FNLuB5DJx6UNnRbHaEHKpA
          stance: supports
          locator: 宋人傳記資料索引(電子版)，579：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FNLuB5DJx6UNnRbHaEHKpA
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 1845）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1845&o=json
            external_identifier: CBDB:1845
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.331Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KzB2C1aLBuDGmUVnrc9So3
        status: active
        display_name: 王珪
        merged_into_person_id: null
  other: []
---

# 王永

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永 | accepted |
| bio.summary | 王永，後蜀人物。籍贯懷寧，曾任秘書省校書郎、太師、右補闕。（中国历代人物传记资料库 CBDB 13516） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_QZHN7XBFLhdEfKGuEPQEhp | 王贄 | accepted |
| spouses | p_2kxukhXgmcPrZye4v5ZP7j | 尹氏 | accepted |
| descendants | p_KzB2C1aLBuDGmUVnrc9So3 | 王珪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珪（CBDB 1845）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1845&o=json)
- [中国历代人物传记资料库：王永（CBDB 13516）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13516&o=json)
- [中国历代人物传记资料库：尹氏(王永妻)（CBDB 38559）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38559&o=json)
