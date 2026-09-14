---
schema: wang-person/v1
id: p_92VF1iW6JXEt2qbBTL6utd
status: active
merged_into: null
display_name: 王蘭
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bE73UoaXuLEV9QcMZk8Cge
        subject_person_id: p_92VF1iW6JXEt2qbBTL6utd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SveXDSYD42618juf7EC7wW
          claim_id: c_bE73UoaXuLEV9QcMZk8Cge
          source_id: s_BsXFxD6CCLETLcv756MN8M
          stance: supports
          locator: CBDB:386680
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（386680）
          source: &a1
            id: s_BsXFxD6CCLETLcv756MN8M
            source_type: api_record
            title: 中国历代人物传记资料库：王蘭（CBDB 386680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386680&o=json
            external_identifier: CBDB:386680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.900Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gfShH7CFhn6fTBNUBiTTQm
        subject_person_id: p_92VF1iW6JXEt2qbBTL6utd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘭，元人物。籍贯金華，曾任錄事司判官、錄事判官。（中国历代人物传记资料库 CBDB 386680）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DjjRBiL910nb0ctinsegAf
          claim_id: c_gfShH7CFhn6fTBNUBiTTQm
          source_id: s_BsXFxD6CCLETLcv756MN8M
          stance: supports
          locator: CBDB:386680
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aHnlY00-B2tL9GHIgflIJt
        subject_person_id: p_7iL2YaUSwb4m6n9tZWZ4k5
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_92VF1iW6JXEt2qbBTL6utd
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2QnDOURmPnlhbQ-ANtzHm3
          claim_id: c_aHnlY00-B2tL9GHIgflIJt
          source_id: s_s1FJpUbp_y_-Tt31-0JWls
          stance: supports
          locator: CBDB 亲属：母（KinPerson 386677）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_s1FJpUbp_y_-Tt31-0JWls
            source_type: api_record
            title: 中国历代人物传记资料库：王蘭（CBDB 386680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386680&o=json
            external_identifier: CBDB:386680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7iL2YaUSwb4m6n9tZWZ4k5
        status: active
        display_name: 唐氏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘭 | accepted |
| bio.summary | 王蘭，元人物。籍贯金華，曾任錄事司判官、錄事判官。（中国历代人物传记资料库 CBDB 386680） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7iL2YaUSwb4m6n9tZWZ4k5 | 唐氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王蘭（CBDB 386680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386680&o=json)
