---
schema: wang-person/v1
id: p_iWAZbKiNvDPj54EBw5wr61
status: active
merged_into: null
display_name: 王玉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y2zUvQjBNWEkiaUmLxmok2
        subject_person_id: p_iWAZbKiNvDPj54EBw5wr61
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rEzKi1nookxmvMAHvdBQHn
          claim_id: c_Y2zUvQjBNWEkiaUmLxmok2
          source_id: s_G54CcQxXXMLE4LAGwy69xF
          stance: supports
          locator: CBDB:29409
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（29409）
          source: &a1
            id: s_G54CcQxXXMLE4LAGwy69xF
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 29409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29409&o=json
            external_identifier: CBDB:29409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.004Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d2VPPTH6wBMLaLJLKdug2U
        subject_person_id: p_iWAZbKiNvDPj54EBw5wr61
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉，元人物。籍贯安喜。（中国历代人物传记资料库 CBDB 29409）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3EwS7n_vd-ZRK8dbYXqNVN
          claim_id: c_d2VPPTH6wBMLaLJLKdug2U
          source_id: s_G54CcQxXXMLE4LAGwy69xF
          stance: supports
          locator: CBDB:29409
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qrssq6X1QSmbOFR7AQJqqc
        subject_person_id: p_h9MLBYUAZfriwL3TWauN5g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iWAZbKiNvDPj54EBw5wr61
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MUFepEcGQqB1guvZORh1Oc
          claim_id: c_qrssq6X1QSmbOFR7AQJqqc
          source_id: s_Vyd8mB46jTNZGRc41RHnhu
          stance: supports
          locator: CBDB 双向互证（子 王玉 ⇄ 父 王立）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Vyd8mB46jTNZGRc41RHnhu
            source_type: api_record
            title: 中国历代人物传记资料库：王立（CBDB 29410）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29410&o=json
            external_identifier: CBDB:29410
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.006Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_h9MLBYUAZfriwL3TWauN5g
        status: active
        display_name: 王立
        merged_into_person_id: null
  children:
    - claim:
        id: c_UVYAxMtMsrlv52HkuH7Tv9
        subject_person_id: p_iWAZbKiNvDPj54EBw5wr61
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4r434FXidoHPAJv6kFC7qF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__SfguNewRoQuC_sW6QiAyy
          claim_id: c_UVYAxMtMsrlv52HkuH7Tv9
          source_id: s_9dpj8y6yZ7KzHr5sLYBc8V
          stance: supports
          locator: CBDB 双向互证（父 王玉 ⇄ 子 王惟賢）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_9dpj8y6yZ7KzHr5sLYBc8V
            source_type: api_record
            title: 中国历代人物传记资料库：王惟賢（CBDB 29408）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29408&o=json
            external_identifier: CBDB:29408
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4r434FXidoHPAJv6kFC7qF
        status: active
        display_name: 王惟賢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉 | accepted |
| bio.summary | 王玉，元人物。籍贯安喜。（中国历代人物传记资料库 CBDB 29409） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_h9MLBYUAZfriwL3TWauN5g | 王立 | accepted |
| children | p_4r434FXidoHPAJv6kFC7qF | 王惟賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王立（CBDB 29410）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29410&o=json)
- [中国历代人物传记资料库：王惟賢（CBDB 29408）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29408&o=json)
- [中国历代人物传记资料库：王玉（CBDB 29409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29409&o=json)
