---
schema: wang-person/v1
id: p_qtbxt55gw7F1hTWtEuCisP
status: active
merged_into: null
display_name: 王準
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cdF1nfSwvem4uZVPnNfCe5
        subject_person_id: p_qtbxt55gw7F1hTWtEuCisP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王準
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TQCsmbHq2k9UkF162gCK4X
          claim_id: c_cdF1nfSwvem4uZVPnNfCe5
          source_id: s_VXQwondBEJA6cahGcFikd7
          stance: supports
          locator: CBDB:13515
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（13515）
          source: &a1
            id: s_VXQwondBEJA6cahGcFikd7
            source_type: api_record
            title: 中国历代人物传记资料库：王準（CBDB 13515）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13515&o=json
            external_identifier: CBDB:13515
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.623Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D97aaXJd9WcC95sevdt9uq
        subject_person_id: p_qtbxt55gw7F1hTWtEuCisP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王準，宋人物。籍贯東明，曾任國公、三司判官、防禦使。（中国历代人物传记资料库 CBDB 13515）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-2pfN6UMa0wzBG7CjXptr-
          claim_id: c_D97aaXJd9WcC95sevdt9uq
          source_id: s_VXQwondBEJA6cahGcFikd7
          stance: supports
          locator: CBDB:13515
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UITUD_ZjnZqdKqm9JjBgYY
        subject_person_id: p_QZHN7XBFLhdEfKGuEPQEhp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qtbxt55gw7F1hTWtEuCisP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__mAZB2tWuAQHdyF0znmTHn
          claim_id: c_UITUD_ZjnZqdKqm9JjBgYY
          source_id: s_VXQwondBEJA6cahGcFikd7
          stance: supports
          locator: CBDB 双向互证（父 王贄 ⇄ 子 王準）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_QZHN7XBFLhdEfKGuEPQEhp
        status: active
        display_name: 王贄
        merged_into_person_id: null
  children:
    - claim:
        id: c_W4c3PUGTp0N-oifDQReK-B
        subject_person_id: p_qtbxt55gw7F1hTWtEuCisP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KzB2C1aLBuDGmUVnrc9So3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zI80h0k7-q0gnJau-wFUHp
          claim_id: c_W4c3PUGTp0N-oifDQReK-B
          source_id: s_FNLuB5DJx6UNnRbHaEHKpA
          stance: supports
          locator: 宋人傳記資料索引(電子版)，833;836：父
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
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_zy9nwCMdxH5o8WuB3AysK7
        subject_person_id: p_qtbxt55gw7F1hTWtEuCisP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_99HFCHADP2DwMuiybuX1uf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EUrX0VX8GtzOunDHh1R_3x
          claim_id: c_zy9nwCMdxH5o8WuB3AysK7
          source_id: s_aerMs_IlV7mAoGbv3JU46h
          stance: supports
          locator: 宋人傳記資料索引(電子版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aerMs_IlV7mAoGbv3JU46h
            source_type: api_record
            title: 中国历代人物传记资料库：薛氏(王準妻)（CBDB 37965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37965&o=json
            external_identifier: CBDB:37965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_99HFCHADP2DwMuiybuX1uf
        status: active
        display_name: 薛氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王準

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王準 | accepted |
| bio.summary | 王準，宋人物。籍贯東明，曾任國公、三司判官、防禦使。（中国历代人物传记资料库 CBDB 13515） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QZHN7XBFLhdEfKGuEPQEhp | 王贄 | accepted |
| children | p_KzB2C1aLBuDGmUVnrc9So3 | 王珪 | accepted |
| spouses | p_99HFCHADP2DwMuiybuX1uf | 薛氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珪（CBDB 1845）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1845&o=json)
- [中国历代人物传记资料库：王準（CBDB 13515）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13515&o=json)
- [中国历代人物传记资料库：薛氏(王準妻)（CBDB 37965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37965&o=json)
