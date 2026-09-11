---
schema: wang-person/v1
id: p_xbNbP8jo136Y4sdQGL1AN6
status: active
merged_into: null
display_name: 王玠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7AgBF2B64TuNjzyNXU2Mxn
        subject_person_id: p_xbNbP8jo136Y4sdQGL1AN6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7wvgNCDKa79yKKu5Nenmnd
          claim_id: c_7AgBF2B64TuNjzyNXU2Mxn
          source_id: s_M3CpGDcvP3cQACmvZVd14R
          stance: supports
          locator: CBDB:22151
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22151）
          source: &a1
            id: s_M3CpGDcvP3cQACmvZVd14R
            source_type: api_record
            title: 中国历代人物传记资料库：王玠（CBDB 22151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22151&o=json
            external_identifier: CBDB:22151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.837Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ntx2QbJ1zMEWcgiwaDGQa5
        subject_person_id: p_xbNbP8jo136Y4sdQGL1AN6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玠，閩國人物。籍贯沙縣，身份为地方士人/鄉紳。（中国历代人物传记资料库 CBDB 22151）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_31BdImFD_L28OlRkAtLioV
          claim_id: c_Ntx2QbJ1zMEWcgiwaDGQa5
          source_id: s_M3CpGDcvP3cQACmvZVd14R
          stance: supports
          locator: CBDB:22151
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3Yv8qdG_l8BnpIjCBL_dAQ
        subject_person_id: p_kGmZkZTqi9Pw3P7xEMWL5g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xbNbP8jo136Y4sdQGL1AN6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FggJBQz9UfGo8euRLIYt12
          claim_id: c_3Yv8qdG_l8BnpIjCBL_dAQ
          source_id: s_ktLrvcyVbaNe6Z4aJbFa2b
          stance: supports
          locator: CBDB 双向互证（子 王玠 ⇄ 父 王延嗣）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_ktLrvcyVbaNe6Z4aJbFa2b
            source_type: api_record
            title: 中国历代人物传记资料库：王延嗣（CBDB 22150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22150&o=json
            external_identifier: CBDB:22150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.836Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kGmZkZTqi9Pw3P7xEMWL5g
        status: active
        display_name: 王延嗣
        merged_into_person_id: null
  children:
    - claim:
        id: c_WpB8Hm0MY5tjhrmgjrAHug
        subject_person_id: p_xbNbP8jo136Y4sdQGL1AN6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pNPbpJhQnwrM9E5wAvzhxs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PuqNenOv8B5UA30CxAaXas
          claim_id: c_WpB8Hm0MY5tjhrmgjrAHug
          source_id: s_M3CpGDcvP3cQACmvZVd14R
          stance: supports
          locator: CBDB 双向互证（子 王餘卿 ⇄ 父 王玠）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_pNPbpJhQnwrM9E5wAvzhxs
        status: active
        display_name: 王餘卿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王玠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玠 | accepted |
| bio.summary | 王玠，閩國人物。籍贯沙縣，身份为地方士人/鄉紳。（中国历代人物传记资料库 CBDB 22151） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kGmZkZTqi9Pw3P7xEMWL5g | 王延嗣 | accepted |
| children | p_pNPbpJhQnwrM9E5wAvzhxs | 王餘卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玠（CBDB 22151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22151&o=json)
- [中国历代人物传记资料库：王延嗣（CBDB 22150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22150&o=json)
