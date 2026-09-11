---
schema: wang-person/v1
id: p_Wr6W2GYyd3CGqL1V2htAHM
status: active
merged_into: null
display_name: 王肇光
cbdb_id: 521761
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4v2VL9XXDj1ofuchn6pFCB
        subject_person_id: p_Wr6W2GYyd3CGqL1V2htAHM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇光，清人物。中国历代人物传记资料库（CBDB）以人物编号 521761 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_OFKINhpUhRVWChN6nis3X-
          claim_id: c_4v2VL9XXDj1ofuchn6pFCB
          source_id: s_dLUhgeMM9wfHdaMxkq7Qyv
          stance: supports
          locator: CBDB:521761
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_dLUhgeMM9wfHdaMxkq7Qyv
            source_type: api_record
            title: 中国历代人物传记资料库：王肇光（CBDB 521761）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=521761&o=json
            external_identifier: CBDB:521761
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PDAzNSLWeEBRRCRiUHwiwU
        subject_person_id: p_Wr6W2GYyd3CGqL1V2htAHM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Kmxnntbwrk92pwpzj6A4x1
          claim_id: c_PDAzNSLWeEBRRCRiUHwiwU
          source_id: s_dLUhgeMM9wfHdaMxkq7Qyv
          stance: supports
          locator: CBDB:521761
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_dLUhgeMM9wfHdaMxkq7Qyv
            source_type: api_record
            title: 中国历代人物传记资料库：王肇光（CBDB 521761）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=521761&o=json
            external_identifier: CBDB:521761
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ArnRoNDazaql5hUYwupu4s
        subject_person_id: p_Kai7hnCKfzRaEwztM2bAd5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Wr6W2GYyd3CGqL1V2htAHM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yIpBuAYL1sD1ZXX0WsPwlU
          claim_id: c_ArnRoNDazaql5hUYwupu4s
          source_id: s_3jG4r3SaSNosAQn5tUXs3g
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），8697：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3jG4r3SaSNosAQn5tUXs3g
            source_type: api_record
            title: 中国历代人物传记资料库：王文雄（CBDB 65274）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65274&o=json
            external_identifier: CBDB:65274
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.933Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Kai7hnCKfzRaEwztM2bAd5
        status: active
        display_name: 王文雄
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王肇光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王肇光，清人物。中国历代人物传记资料库（CBDB）以人物编号 521761 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王肇光 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_Kai7hnCKfzRaEwztM2bAd5 | 王文雄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文雄（CBDB 65274）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65274&o=json)
- [中国历代人物传记资料库：王肇光（CBDB 521761）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=521761&o=json)
