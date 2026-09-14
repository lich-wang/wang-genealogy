---
schema: wang-person/v1
id: p_rAM7rFx6bZ55xeMwnEB8Vu
status: active
merged_into: null
display_name: 王志夔
cbdb_id: 235155
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sPLe6W4d6NePd1D7r4FRrp
        subject_person_id: p_rAM7rFx6bZ55xeMwnEB8Vu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志夔，明人物。籍贯崑山，入仕庠生。（中国历代人物传记资料库 CBDB 235155）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ofOIVm5UXE02Gh-Cc9qIZ-
          claim_id: c_sPLe6W4d6NePd1D7r4FRrp
          source_id: s_WJCoRmiVgJz29TbHXgDi12
          stance: supports
          locator: CBDB:235155
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_WJCoRmiVgJz29TbHXgDi12
            source_type: api_record
            title: 中国历代人物传记资料库：王志夔（CBDB 235155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235155&o=json
            external_identifier: CBDB:235155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9BhWWGnP4vHrcGABiJPqo9
        subject_person_id: p_rAM7rFx6bZ55xeMwnEB8Vu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志夔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Xvc9A6heMJtyzsiJZADAHR
          claim_id: c_9BhWWGnP4vHrcGABiJPqo9
          source_id: s_WJCoRmiVgJz29TbHXgDi12
          stance: supports
          locator: CBDB:235155
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mErKWUGA6bJReUI0WxSVrI
        subject_person_id: p_cUEh25oPwuAacU7D2hTAPV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rAM7rFx6bZ55xeMwnEB8Vu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oBwVHeG__tpsr6gbYUF9Mh
          claim_id: c_mErKWUGA6bJReUI0WxSVrI
          source_id: s_UzPZmbgesSMTJJedw710E5
          stance: supports
          locator: CBDB：兄弟 王志堅（126537）之父／母 王臨亨
          quotation: null
          interpretation_note: 由兄弟关系推断：王志夔 与 王志堅 为同胞（CBDB 记「弟」），王志堅 之父／母即 王志夔 之父／母。
          source:
            id: s_UzPZmbgesSMTJJedw710E5
            source_type: api_record
            title: 中国历代人物传记资料库：王志夔（CBDB 235155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235155&o=json
            external_identifier: CBDB:235155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cUEh25oPwuAacU7D2hTAPV
        status: active
        display_name: 王臨亨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_TOEkduTejcutBJiMiolvv1
        subject_person_id: p_WP2TCGKdqkuWFjHVRTiLcW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rAM7rFx6bZ55xeMwnEB8Vu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lD1vNkJEALpYxMx6JXgFga
          claim_id: c_TOEkduTejcutBJiMiolvv1
          source_id: s_UzPZmbgesSMTJJedw710E5
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126537 王志堅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UzPZmbgesSMTJJedw710E5
            source_type: api_record
            title: 中国历代人物传记资料库：王志夔（CBDB 235155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235155&o=json
            external_identifier: CBDB:235155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WP2TCGKdqkuWFjHVRTiLcW
        status: active
        display_name: 王志堅
        merged_into_person_id: null
---

# 王志夔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王志夔，明人物。籍贯崑山，入仕庠生。（中国历代人物传记资料库 CBDB 235155） | accepted |
| name.primary | 王志夔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cUEh25oPwuAacU7D2hTAPV | 王臨亨 | accepted |
| other | p_WP2TCGKdqkuWFjHVRTiLcW | 王志堅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王志夔（CBDB 235155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235155&o=json)
