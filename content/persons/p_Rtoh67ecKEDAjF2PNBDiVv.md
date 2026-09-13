---
schema: wang-person/v1
id: p_Rtoh67ecKEDAjF2PNBDiVv
status: active
merged_into: null
display_name: 王周惠
cbdb_id: 23704
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hPtnZFbSR47jJiXEWPuDWy
        subject_person_id: p_Rtoh67ecKEDAjF2PNBDiVv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王周惠，史料所见人物。本项目依据《中国历代人物传记资料库：王周惠（CBDB 23704）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_KGQAmqE4wItKnm0qxidypm
          claim_id: c_hPtnZFbSR47jJiXEWPuDWy
          source_id: s_QVdpgdeTHw7RUnE7i3vCGN
          stance: supports
          locator: CBDB:23704
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_QVdpgdeTHw7RUnE7i3vCGN
            source_type: api_record
            title: 中国历代人物传记资料库：王周惠（CBDB 23704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23704&o=json
            external_identifier: CBDB:23704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_F9LFNLNTv2kjGBdkzrF9E1
        subject_person_id: p_Rtoh67ecKEDAjF2PNBDiVv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王周惠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DnGM26ivxKAiLKDYD9WtD8
          claim_id: c_F9LFNLNTv2kjGBdkzrF9E1
          source_id: s_QVdpgdeTHw7RUnE7i3vCGN
          stance: supports
          locator: CBDB:23704
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WLAKydIihRXWriYpHHcvF2
        subject_person_id: p_EnaqHvpCLMTKCVDb1FEE8E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Rtoh67ecKEDAjF2PNBDiVv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cCUtZW6XP8tT4hGqkGa_OM
          claim_id: c_WLAKydIihRXWriYpHHcvF2
          source_id: s_dHNmd8vz6QMm535P3sZ5NH
          stance: supports
          locator: CBDB 双向互证（子 王周惠 ⇄ 父 王公詔）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_dHNmd8vz6QMm535P3sZ5NH
            source_type: api_record
            title: 中国历代人物传记资料库：王公詔（CBDB 23703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23703&o=json
            external_identifier: CBDB:23703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_EnaqHvpCLMTKCVDb1FEE8E
        status: active
        display_name: 王公詔
        merged_into_person_id: null
  children:
    - claim:
        id: c_rFUiS-eMQ3pVtIblh9FJ9H
        subject_person_id: p_Rtoh67ecKEDAjF2PNBDiVv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wzceF6tWVJ83AhpMAq5D52
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SQyqJrpb0O9PHis-X2Pmmo
          claim_id: c_rFUiS-eMQ3pVtIblh9FJ9H
          source_id: s_zB3THQr2NaoXdG7eQBmwgq
          stance: supports
          locator: CBDB 双向互证（父 王周惠 ⇄ 子 王傑）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_zB3THQr2NaoXdG7eQBmwgq
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 21604）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21604&o=json
            external_identifier: CBDB:21604
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.770Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wzceF6tWVJ83AhpMAq5D52
        status: active
        display_name: 王傑
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王周惠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王周惠，史料所见人物。本项目依据《中国历代人物传记资料库：王周惠（CBDB 23704）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王周惠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EnaqHvpCLMTKCVDb1FEE8E | 王公詔 | accepted |
| children | p_wzceF6tWVJ83AhpMAq5D52 | 王傑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公詔（CBDB 23703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23703&o=json)
- [中国历代人物传记资料库：王傑（CBDB 21604）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21604&o=json)
- [中国历代人物传记资料库：王周惠（CBDB 23704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23704&o=json)
