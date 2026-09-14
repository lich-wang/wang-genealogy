---
schema: wang-person/v1
id: p_mJNJQFE9z1VKCuzwAbNY9W
status: active
merged_into: null
display_name: 王信
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1is7QawxppzWNUenEms8xb
        subject_person_id: p_mJNJQFE9z1VKCuzwAbNY9W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DiiTyeXLMbQ3Uum1VvErE9
          claim_id: c_1is7QawxppzWNUenEms8xb
          source_id: s_ijLiG1JpcMMKHCdWa2Gv1L
          stance: supports
          locator: CBDB:257671
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257671）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_koSNDADGgZyhWwjnW2irX9
        subject_person_id: p_mJNJQFE9z1VKCuzwAbNY9W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信，明人物。成化二十三年進士，籍贯濱州，曾任禮科給事中。（中国历代人物传记资料库 CBDB 257671）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ib9vaw4jqFrFqMGRkbk-aW
          claim_id: c_koSNDADGgZyhWwjnW2irX9
          source_id: s_ijLiG1JpcMMKHCdWa2Gv1L
          stance: supports
          locator: CBDB:257671
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_NCS3B6qxdWUziaAFj1bjfH
        status: active
        display_name: 王綸
        merged_into_person_id: null
    - claim:
        id: c_sz0HM6FhYRHmKLTOZr5k_8
        subject_person_id: p_mJNJQFE9z1VKCuzwAbNY9W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ppyWLxr8Sp6zZ7s3LPugbF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eKOFEZpC_DsGnbS8Tu670n
          claim_id: c_sz0HM6FhYRHmKLTOZr5k_8
          source_id: s_ijLiG1JpcMMKHCdWa2Gv1L
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第六十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ppyWLxr8Sp6zZ7s3LPugbF
        status: active
        display_name: 王綬
        merged_into_person_id: null
    - claim:
        id: c_2rlFsF-iH8YA2fenULAVDk
        subject_person_id: p_mJNJQFE9z1VKCuzwAbNY9W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1Ba2LCP7E1K6otVRAxgBiz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QyuJcbVO65KAwwQbjvZH3x
          claim_id: c_2rlFsF-iH8YA2fenULAVDk
          source_id: s_c0tb3D9kmi6s_r-Dc3VC1p
          stance: supports
          locator: CBDB：兄弟 王綸（126787）之父／母 王信
          quotation: null
          interpretation_note: 由兄弟关系推断：王緒 与 王綸 为同胞（CBDB 记「兄」），王綸 之父／母即 王緒 之父／母。
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
        id: c_8U3vk7YOrt5QM01198DWi5
        subject_person_id: p_mJNJQFE9z1VKCuzwAbNY9W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AY7ex96vYmbghtsFu4fsEb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WISIs6jlnyEYSs7ESEdXNQ
          claim_id: c_8U3vk7YOrt5QM01198DWi5
          source_id: s_d3XegUWLeQW307OyN0BW66
          stance: supports
          locator: CBDB：兄弟 王綸（126787）之父／母 王信
          quotation: null
          interpretation_note: 由兄弟关系推断：王紳 与 王綸 为同胞（CBDB 记「兄」），王綸 之父／母即 王紳 之父／母。
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
        id: c_Zc8uKmIsDTQZyzAEyyKu7H
        subject_person_id: p_mJNJQFE9z1VKCuzwAbNY9W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DiUjnBUrVdppFuT1xGUKRn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fm-RMrFfCqmh8np4k1FNbH
          claim_id: c_Zc8uKmIsDTQZyzAEyyKu7H
          source_id: s_qNjn5RUq9Gih_o0ItChffY
          stance: supports
          locator: CBDB：兄弟 王綸（126787）之父／母 王信
          quotation: null
          interpretation_note: 由兄弟关系推断：王績 与 王綸 为同胞（CBDB 记「兄」），王綸 之父／母即 王績 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信 | accepted |
| bio.summary | 王信，明人物。成化二十三年進士，籍贯濱州，曾任禮科給事中。（中国历代人物传记资料库 CBDB 257671） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_NCS3B6qxdWUziaAFj1bjfH | 王綸 | accepted |
| children | p_ppyWLxr8Sp6zZ7s3LPugbF | 王綬 | accepted |
| children | p_1Ba2LCP7E1K6otVRAxgBiz | 王緒 | accepted |
| children | p_AY7ex96vYmbghtsFu4fsEb | 王紳 | accepted |
| children | p_DiUjnBUrVdppFuT1xGUKRn | 王績 | accepted |

## 外部来源

- [中国历代人物传记资料库：王績（CBDB 257675）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257675&o=json)
- [中国历代人物传记资料库：王紳（CBDB 257677）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257677&o=json)
- [中国历代人物传记资料库：王信（CBDB 257671）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257671&o=json)
- [中国历代人物传记资料库：王緒（CBDB 257676）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257676&o=json)
