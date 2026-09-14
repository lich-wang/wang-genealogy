---
schema: wang-person/v1
id: p_NCS3B6qxdWUziaAFj1bjfH
status: active
merged_into: null
display_name: 王綸
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2gwkz5RL7dWdq6MXf7ocCA
        subject_person_id: p_NCS3B6qxdWUziaAFj1bjfH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u5bz7MuuBXU6BVM6Qs7RRj
          claim_id: c_2gwkz5RL7dWdq6MXf7ocCA
          source_id: s_h76RXgE6j43ZbKhRTQwCHP
          stance: supports
          locator: CBDB:126787
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126787）
          source: &a1
            id: s_h76RXgE6j43ZbKhRTQwCHP
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 126787）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126787&o=json
            external_identifier: CBDB:126787
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.204Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YnU3KnKgPWt7VN1SeHr3o3
        subject_person_id: p_NCS3B6qxdWUziaAFj1bjfH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綸，明人物。明清進士進士，籍贯濱州，入仕進士，曾任禮部右侍郎、禮科給事中、右布政使。（中国历代人物传记资料库 CBDB 126787）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GhkWjVmpp15uCxAU7VxWAE
          claim_id: c_YnU3KnKgPWt7VN1SeHr3o3
          source_id: s_h76RXgE6j43ZbKhRTQwCHP
          stance: supports
          locator: CBDB:126787
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_h8XmA2-0Y67VNooX8P6p22
        subject_person_id: p_mJNJQFE9z1VKCuzwAbNY9W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NCS3B6qxdWUziaAFj1bjfH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z1DaXzBpq-xHj2yik4IwPu
          claim_id: c_h8XmA2-0Y67VNooX8P6p22
          source_id: s_ijLiG1JpcMMKHCdWa2Gv1L
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第二十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ijLiG1JpcMMKHCdWa2Gv1L
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 257671）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257671&o=json
            external_identifier: CBDB:257671
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.427Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mJNJQFE9z1VKCuzwAbNY9W
        status: active
        display_name: 王信
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_snd-1P9gBi6wh2uPGM-hnF
        subject_person_id: p_qEZ5XAZtELsh4xjqgKuUd6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NCS3B6qxdWUziaAFj1bjfH
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fpCwSNc_rwwlpasv0SlvRV
          claim_id: c_snd-1P9gBi6wh2uPGM-hnF
          source_id: s_ive934eT1oYiGVyXd3ETSt
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第二十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ive934eT1oYiGVyXd3ETSt
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 257670）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257670&o=json
            external_identifier: CBDB:257670
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qEZ5XAZtELsh4xjqgKuUd6
        status: active
        display_name: 王英
        merged_into_person_id: null
    - claim:
        id: c_4XcxIjFLYOfRL6WVldVE9R
        subject_person_id: p_Zu5bSg24vCFXjaKQH6XPbF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NCS3B6qxdWUziaAFj1bjfH
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_opvzJHu55VaqEHhwua9Xbf
          claim_id: c_4XcxIjFLYOfRL6WVldVE9R
          source_id: s_GVTk8rDEN1gqHJfHF8jhaF
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第二十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GVTk8rDEN1gqHJfHF8jhaF
            source_type: api_record
            title: 中国历代人物传记资料库：王思誠（CBDB 257668）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257668&o=json
            external_identifier: CBDB:257668
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Zu5bSg24vCFXjaKQH6XPbF
        status: active
        display_name: 王思誠
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_EQqKbGHnXJKjPdDLtuEXf-
        subject_person_id: p_1Ba2LCP7E1K6otVRAxgBiz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NCS3B6qxdWUziaAFj1bjfH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jtSJ_iN4Mv3Ucs15KkV2nb
          claim_id: c_EQqKbGHnXJKjPdDLtuEXf-
          source_id: s_c0tb3D9kmi6s_r-Dc3VC1p
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126787 王綸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_c0tb3D9kmi6s_r-Dc3VC1p
            source_type: api_record
            title: 中国历代人物传记资料库：王緒（CBDB 257676）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257676&o=json
            external_identifier: CBDB:257676
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1Ba2LCP7E1K6otVRAxgBiz
        status: active
        display_name: 王緒
        merged_into_person_id: null
    - claim:
        id: c_IVVxNzKmW9sPD6XXVV2ZiM
        subject_person_id: p_AY7ex96vYmbghtsFu4fsEb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NCS3B6qxdWUziaAFj1bjfH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5UmQw2tTA6YFDIEJD3qaKA
          claim_id: c_IVVxNzKmW9sPD6XXVV2ZiM
          source_id: s_d3XegUWLeQW307OyN0BW66
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126787 王綸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_d3XegUWLeQW307OyN0BW66
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 257677）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257677&o=json
            external_identifier: CBDB:257677
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AY7ex96vYmbghtsFu4fsEb
        status: active
        display_name: 王紳
        merged_into_person_id: null
    - claim:
        id: c_6U_TnUc6tCb1OliVjtz07O
        subject_person_id: p_DiUjnBUrVdppFuT1xGUKRn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NCS3B6qxdWUziaAFj1bjfH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1UQfOuWRKjgX89Hm4mdNb1
          claim_id: c_6U_TnUc6tCb1OliVjtz07O
          source_id: s_qNjn5RUq9Gih_o0ItChffY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126787 王綸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qNjn5RUq9Gih_o0ItChffY
            source_type: api_record
            title: 中国历代人物传记资料库：王績（CBDB 257675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257675&o=json
            external_identifier: CBDB:257675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DiUjnBUrVdppFuT1xGUKRn
        status: active
        display_name: 王績
        merged_into_person_id: null
---

# 王綸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綸 | accepted |
| bio.summary | 王綸，明人物。明清進士進士，籍贯濱州，入仕進士，曾任禮部右侍郎、禮科給事中、右布政使。（中国历代人物传记资料库 CBDB 126787） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mJNJQFE9z1VKCuzwAbNY9W | 王信 | accepted |
| ancestors | p_qEZ5XAZtELsh4xjqgKuUd6 | 王英 | accepted |
| ancestors | p_Zu5bSg24vCFXjaKQH6XPbF | 王思誠 | accepted |
| other | p_1Ba2LCP7E1K6otVRAxgBiz | 王緒 | accepted |
| other | p_AY7ex96vYmbghtsFu4fsEb | 王紳 | accepted |
| other | p_DiUjnBUrVdppFuT1xGUKRn | 王績 | accepted |

## 外部来源

- [中国历代人物传记资料库：王績（CBDB 257675）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257675&o=json)
- [中国历代人物传记资料库：王綸（CBDB 126787）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126787&o=json)
- [中国历代人物传记资料库：王紳（CBDB 257677）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257677&o=json)
- [中国历代人物传记资料库：王思誠（CBDB 257668）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257668&o=json)
- [中国历代人物传记资料库：王信（CBDB 257671）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257671&o=json)
- [中国历代人物传记资料库：王緒（CBDB 257676）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257676&o=json)
- [中国历代人物传记资料库：王英（CBDB 257670）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257670&o=json)
