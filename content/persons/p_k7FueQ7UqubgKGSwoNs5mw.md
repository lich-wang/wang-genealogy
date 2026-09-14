---
schema: wang-person/v1
id: p_k7FueQ7UqubgKGSwoNs5mw
status: active
merged_into: null
display_name: 王輔
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uQLpieudnvsEdL6znxoZuX
        subject_person_id: p_k7FueQ7UqubgKGSwoNs5mw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8capH8bw4dipf5CYjPJkEM
          claim_id: c_uQLpieudnvsEdL6znxoZuX
          source_id: s_1VVwS29EQMeZpt1CnvdDAc
          stance: supports
          locator: CBDB:10597
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10597）
          source: &a1
            id: s_1VVwS29EQMeZpt1CnvdDAc
            source_type: api_record
            title: 中国历代人物传记资料库：王輔（CBDB 10597）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10597&o=json
            external_identifier: CBDB:10597
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.536Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xifx4PQ8rV9vSmDSgNjh9A
        subject_person_id: p_k7FueQ7UqubgKGSwoNs5mw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔，宋人物。籍贯樂清，身份为士人，入仕封贈。（中国历代人物传记资料库 CBDB 10597）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_c1AgYmxZv8e-98pDQ9GJkB
          claim_id: c_xifx4PQ8rV9vSmDSgNjh9A
          source_id: s_1VVwS29EQMeZpt1CnvdDAc
          stance: supports
          locator: CBDB:10597
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_X0T7wJWtZpVIkDVQ41nKD_
        subject_person_id: p_J3kNgcmfksKaeMJdBmVRbE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_k7FueQ7UqubgKGSwoNs5mw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rquI9FLL51WPKJytrNJVxw
          claim_id: c_X0T7wJWtZpVIkDVQ41nKD_
          source_id: s_Qm3UQQ6PtS8pEZfJaP5BDE
          stance: supports
          locator: CBDB 双向互证（子 王輔 ⇄ 父 王格）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Qm3UQQ6PtS8pEZfJaP5BDE
            source_type: api_record
            title: 中国历代人物传记资料库：王格（CBDB 18819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18819&o=json
            external_identifier: CBDB:18819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.717Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_J3kNgcmfksKaeMJdBmVRbE
        status: active
        display_name: 王格
        merged_into_person_id: null
  children:
    - claim:
        id: c_rbgEksldaBoWLOQIzye97u
        subject_person_id: p_k7FueQ7UqubgKGSwoNs5mw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rDLCqXC8sFot2X9WGy3gyb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K-WsEKeDlC74yl666SMtfG
          claim_id: c_rbgEksldaBoWLOQIzye97u
          source_id: s_m9AkuXL52Y3JTiCItyIr7P
          stance: supports
          locator: CBDB 亲属：父（KinPerson 10597）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_m9AkuXL52Y3JTiCItyIr7P
            source_type: api_record
            title: 中国历代人物传记资料库：王百朋（CBDB 37341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37341&o=json
            external_identifier: CBDB:37341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rDLCqXC8sFot2X9WGy3gyb
        status: active
        display_name: 王百朋
        merged_into_person_id: null
    - claim:
        id: c_kdC9A0L7USb2ET2Bpx2hkC
        subject_person_id: p_k7FueQ7UqubgKGSwoNs5mw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wEcw3km21hYReL1ypv6aei
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F0N24POYinuzLkXTIrgEfq
          claim_id: c_kdC9A0L7USb2ET2Bpx2hkC
          source_id: s_oMGvstFSBv9bhSTHG5UlBB
          stance: supports
          locator: CBDB 亲属：父（KinPerson 10597）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_oMGvstFSBv9bhSTHG5UlBB
            source_type: api_record
            title: 中国历代人物传记资料库：王壽朋（CBDB 18813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18813&o=json
            external_identifier: CBDB:18813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wEcw3km21hYReL1ypv6aei
        status: active
        display_name: 王壽朋
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_tRVdX5dze3VRksi73upW0s
        subject_person_id: p_k7FueQ7UqubgKGSwoNs5mw
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_GCuVZJGdeJ4XQFBELA4ifC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2JNpejrYT-GQDNd7bcxUZe
          claim_id: c_tRVdX5dze3VRksi73upW0s
          source_id: s_9FztjilX9WXqmHdDZJl_Rl
          stance: supports
          locator: CBDB 双向互证（妻子 萬氏(王十朋母)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9FztjilX9WXqmHdDZJl_Rl
            source_type: api_record
            title: 中国历代人物传记资料库：萬氏(王十朋母)（CBDB 5172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5172&o=json
            external_identifier: CBDB:5172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GCuVZJGdeJ4XQFBELA4ifC
        status: active
        display_name: 萬氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輔 | accepted |
| bio.summary | 王輔，宋人物。籍贯樂清，身份为士人，入仕封贈。（中国历代人物传记资料库 CBDB 10597） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_J3kNgcmfksKaeMJdBmVRbE | 王格 | accepted |
| children | p_rDLCqXC8sFot2X9WGy3gyb | 王百朋 | accepted |
| children | p_wEcw3km21hYReL1ypv6aei | 王壽朋 | accepted |
| spouses | p_GCuVZJGdeJ4XQFBELA4ifC | 萬氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：萬氏(王十朋母)（CBDB 5172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5172&o=json)
- [中国历代人物传记资料库：王百朋（CBDB 37341）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37341&o=json)
- [中国历代人物传记资料库：王輔（CBDB 10597）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10597&o=json)
- [中国历代人物传记资料库：王格（CBDB 18819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18819&o=json)
- [中国历代人物传记资料库：王壽朋（CBDB 18813）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=18813&o=json)
