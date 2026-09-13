---
schema: wang-person/v1
id: p_EnaqHvpCLMTKCVDb1FEE8E
status: active
merged_into: null
display_name: 王公詔
cbdb_id: 23703
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9PaMw6hFYSV1TnGiAxQxKL
        subject_person_id: p_EnaqHvpCLMTKCVDb1FEE8E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公詔，宋人物。籍贯永泰。（中国历代人物传记资料库 CBDB 23703）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_5INr2kIVgZxb1Z688wb2ov
          claim_id: c_9PaMw6hFYSV1TnGiAxQxKL
          source_id: s_dHNmd8vz6QMm535P3sZ5NH
          stance: supports
          locator: CBDB:23703
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qA94nPALp4gvhDanF6XNN8
        subject_person_id: p_EnaqHvpCLMTKCVDb1FEE8E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PhUfCmNE3cKE6A7SfCVQyf
          claim_id: c_qA94nPALp4gvhDanF6XNN8
          source_id: s_dHNmd8vz6QMm535P3sZ5NH
          stance: supports
          locator: CBDB:23703
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_50De_zOkXvBp94plP8l6dD
        subject_person_id: p_f9DmRms8APfAby8NBxEDgt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EnaqHvpCLMTKCVDb1FEE8E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uZWQ6v5UHD667rKriJs1jy
          claim_id: c_50De_zOkXvBp94plP8l6dD
          source_id: s_dHNmd8vz6QMm535P3sZ5NH
          stance: supports
          locator: CBDB 双向互证（父 王子揆 ⇄ 子 王公詔）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: &a2
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
        id: p_f9DmRms8APfAby8NBxEDgt
        status: active
        display_name: 王子揆
        merged_into_person_id: null
  children:
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
          source: *a2
      object_person:
        id: p_Rtoh67ecKEDAjF2PNBDiVv
        status: active
        display_name: 王周惠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王公詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王公詔，宋人物。籍贯永泰。（中国历代人物传记资料库 CBDB 23703） | accepted |
| name.primary | 王公詔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_f9DmRms8APfAby8NBxEDgt | 王子揆 | accepted |
| children | p_Rtoh67ecKEDAjF2PNBDiVv | 王周惠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公詔（CBDB 23703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23703&o=json)
