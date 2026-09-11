---
schema: wang-person/v1
id: p_3yGgeYr8AWKKojb6QYWJCJ
status: active
merged_into: null
display_name: 王宗望
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L5Hq6ewNtnq5uoLYc9KSAR
        subject_person_id: p_3yGgeYr8AWKKojb6QYWJCJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗望
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oG5Yp4WpmUL2V5ZbgfmMHn
          claim_id: c_L5Hq6ewNtnq5uoLYc9KSAR
          source_id: s_5hiHrRziXJszNvjev39kPB
          stance: supports
          locator: CBDB:1904
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1904）
          source: &a1
            id: s_5hiHrRziXJszNvjev39kPB
            source_type: api_record
            title: 中国历代人物传记资料库：王宗望（CBDB 1904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1904&o=json
            external_identifier: CBDB:1904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.384Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8nyAoa7P2pBYhLUXep1hn3
        subject_person_id: p_3yGgeYr8AWKKojb6QYWJCJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗望，宋人物。籍贯須城，入仕恩蔭、蔭補，曾任尚書省工部侍郎、司農寺少卿、左班殿直。（中国历代人物传记资料库 CBDB 1904）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Rj4clMQ7hWPmDG4uyoahdd
          claim_id: c_8nyAoa7P2pBYhLUXep1hn3
          source_id: s_5hiHrRziXJszNvjev39kPB
          stance: supports
          locator: CBDB:1904
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
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
        id: c_wWh2DjnBVDqUyY8RE8oXqs
        subject_person_id: p_89pxyYXCwEKYhMLt29PYoD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3yGgeYr8AWKKojb6QYWJCJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y6YghOrFUjA2VosA4QQbgO
          claim_id: c_wWh2DjnBVDqUyY8RE8oXqs
          source_id: s_5hiHrRziXJszNvjev39kPB
          stance: supports
          locator: CBDB 双向互证（祖父 王彬 ⇄ 孫 王宗望）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_89pxyYXCwEKYhMLt29PYoD
        status: active
        display_name: 王彬
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_gJhKRSyi6Xa-gsUsxKVrLj
        subject_person_id: p_3yGgeYr8AWKKojb6QYWJCJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EXNiuacY5qKu9KTDWZ22XE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_28-HHeNHYH3VB7B6urzH4G
          claim_id: c_gJhKRSyi6Xa-gsUsxKVrLj
          source_id: s_5hiHrRziXJszNvjev39kPB
          stance: supports
          locator: CBDB 双向互证（曾孫; 重孫 王尚智 ⇄ 曾祖 王宗望）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_EXNiuacY5qKu9KTDWZ22XE
        status: active
        display_name: 王尚智
        merged_into_person_id: null
  other: []
---

# 王宗望

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗望 | accepted |
| bio.summary | 王宗望，宋人物。籍贯須城，入仕恩蔭、蔭補，曾任尚書省工部侍郎、司農寺少卿、左班殿直。（中国历代人物传记资料库 CBDB 1904） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_89pxyYXCwEKYhMLt29PYoD | 王彬 | accepted |
| descendants | p_EXNiuacY5qKu9KTDWZ22XE | 王尚智 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗望（CBDB 1904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1904&o=json)
