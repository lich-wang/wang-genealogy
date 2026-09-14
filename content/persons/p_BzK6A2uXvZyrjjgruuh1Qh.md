---
schema: wang-person/v1
id: p_BzK6A2uXvZyrjjgruuh1Qh
status: active
merged_into: null
display_name: 王用汲
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b4Pw18Dz9oNuDxRHGZPnQc
        subject_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用汲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M3sBmgHkMwDQQi94ME6mSA
          claim_id: c_b4Pw18Dz9oNuDxRHGZPnQc
          source_id: s_G5Q12QpxwABQ4p3YD5nNDm
          stance: supports
          locator: CBDB:126494
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126494）
          source: &a1
            id: s_G5Q12QpxwABQ4p3YD5nNDm
            source_type: api_record
            title: 中国历代人物传记资料库：王用汲（CBDB 126494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126494&o=json
            external_identifier: CBDB:126494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8KDid7o4CF2AkhL2YV2wQa
        subject_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1528年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vka2YQMRRovYKX5Pf6x76N
          claim_id: c_8KDid7o4CF2AkhL2YV2wQa
          source_id: s_G5Q12QpxwABQ4p3YD5nNDm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ABQJbShAaoHtFjeNDKA7JF
        subject_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1593年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JCHMuuzY9rvyGQSgh6M8Mg
          claim_id: c_ABQJbShAaoHtFjeNDKA7JF
          source_id: s_G5Q12QpxwABQ4p3YD5nNDm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QE6wPHpqNuEmsy1tFhPAA9
        subject_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用汲（1528年—1593年），明人物。籍贯晉江，入仕進士，曾任尚寶司卿、刑部尚書、右副都御史。（中国历代人物传记资料库 CBDB 126494）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WG_eyaX4nkfgJzYcnzxMer
          claim_id: c_QE6wPHpqNuEmsy1tFhPAA9
          source_id: s_G5Q12QpxwABQ4p3YD5nNDm
          stance: supports
          locator: CBDB:126494
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qFDdvWYIhLFtMrUeSVjmHg
        subject_person_id: p_wFTS9Dws5nhZvJ8pXQTGVc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_imQ0z_A7RdDi6galJCy0Q-
          claim_id: c_qFDdvWYIhLFtMrUeSVjmHg
          source_id: s_G5Q12QpxwABQ4p3YD5nNDm
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百零四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wFTS9Dws5nhZvJ8pXQTGVc
        status: active
        display_name: 王孫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_HEIMWH74PP20UqCzpJTPXf
        subject_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_BNHmdAdaaaA8aHyqThEAJT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O7F5VZ63_th3rpwdYHwQxU
          claim_id: c_HEIMWH74PP20UqCzpJTPXf
          source_id: s_P4FH-W09KCOniSfvMQCxqa
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百零四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_P4FH-W09KCOniSfvMQCxqa
            source_type: api_record
            title: 中国历代人物传记资料库：許氏(王用汲妻)（CBDB 335480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335480&o=json
            external_identifier: CBDB:335480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BNHmdAdaaaA8aHyqThEAJT
        status: active
        display_name: 許氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_olIyo3YMos-CfvRJOHKjiI
        subject_person_id: p_5gxVMxVHEsmyHKD9hjsbp5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WprvJwzSOPmCKVwcxxIoew
          claim_id: c_olIyo3YMos-CfvRJOHKjiI
          source_id: s_G5Q12QpxwABQ4p3YD5nNDm
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百零四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5gxVMxVHEsmyHKD9hjsbp5
        status: active
        display_name: 王晉和
        merged_into_person_id: null
    - claim:
        id: c_jVFZIv0ZsxrDWYe4i3lLuC
        subject_person_id: p_xpo8hw4fvJhVz9XuV1sULD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BL7rj7PHhF7F4oUMfTstQc
          claim_id: c_jVFZIv0ZsxrDWYe4i3lLuC
          source_id: s_G5Q12QpxwABQ4p3YD5nNDm
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百零四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xpo8hw4fvJhVz9XuV1sULD
        status: active
        display_name: 王治
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_d38x7IYROxsmNj9VRRubN-
        subject_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_LiqkD4efNPSpUEDn51rahu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eYgRLSFDE35557Zvo48Cms
          claim_id: c_d38x7IYROxsmNj9VRRubN-
          source_id: s_1nEFzAcaiDeqd0TG4tMhYe
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126494 王用汲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1nEFzAcaiDeqd0TG4tMhYe
            source_type: api_record
            title: 中国历代人物传记资料库：王用榮（CBDB 335481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335481&o=json
            external_identifier: CBDB:335481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LiqkD4efNPSpUEDn51rahu
        status: active
        display_name: 王用榮
        merged_into_person_id: null
    - claim:
        id: c_Kvj2bC3Jvy6YVfXY_nS4QC
        subject_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TXTY7PztPA2krJJxYNSjmn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5qsR-yWIFtP8VAUS9xu92u
          claim_id: c_Kvj2bC3Jvy6YVfXY_nS4QC
          source_id: s_IOHqsj-3am3zALEZZn8Eot
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126494 王用汲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IOHqsj-3am3zALEZZn8Eot
            source_type: api_record
            title: 中国历代人物传记资料库：王用脩（CBDB 335483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335483&o=json
            external_identifier: CBDB:335483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TXTY7PztPA2krJJxYNSjmn
        status: active
        display_name: 王用脩
        merged_into_person_id: null
    - claim:
        id: c_oCLMfNEQlO5QO8f1u1Je3o
        subject_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YEGmKaFkY2XKW39GDxDELP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LX7Nd3W0BhQYrQDf3QpQd3
          claim_id: c_oCLMfNEQlO5QO8f1u1Je3o
          source_id: s_a5kW0gNqQem_TAxCe-SBWY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126494 王用汲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_a5kW0gNqQem_TAxCe-SBWY
            source_type: api_record
            title: 中国历代人物传记资料库：王珊（CBDB 335485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335485&o=json
            external_identifier: CBDB:335485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YEGmKaFkY2XKW39GDxDELP
        status: active
        display_name: 王珊
        merged_into_person_id: null
    - claim:
        id: c_vCOHd9Rtz_4XQdFcc5-dyu
        subject_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tPb4jnJNyBNoZsGAFq5vQF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uvr89W5jNDm3W1pRtSzlnr
          claim_id: c_vCOHd9Rtz_4XQdFcc5-dyu
          source_id: s_JJRe6iQ2FN06a5BJDkIFS4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126494 王用汲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JJRe6iQ2FN06a5BJDkIFS4
            source_type: api_record
            title: 中国历代人物传记资料库：王琚（CBDB 335484）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335484&o=json
            external_identifier: CBDB:335484
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tPb4jnJNyBNoZsGAFq5vQF
        status: active
        display_name: 王琚
        merged_into_person_id: null
    - claim:
        id: c_z1Cq23gQL8UjqrldAaFlZ_
        subject_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zbB7243CZBDeQfXX6v32PE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rR7_UF9IgiGT1Qt39s18iP
          claim_id: c_z1Cq23gQL8UjqrldAaFlZ_
          source_id: s_6A-uSjvHLAbZE3ugAQa3D3
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126494 王用汲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6A-uSjvHLAbZE3ugAQa3D3
            source_type: api_record
            title: 中国历代人物传记资料库：王用華（CBDB 335482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335482&o=json
            external_identifier: CBDB:335482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zbB7243CZBDeQfXX6v32PE
        status: active
        display_name: 王用華
        merged_into_person_id: null
---

# 王用汲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用汲 | accepted |
| birth.date | 1528年 | accepted |
| death.date | 1593年 | accepted |
| bio.summary | 王用汲（1528年—1593年），明人物。籍贯晉江，入仕進士，曾任尚寶司卿、刑部尚書、右副都御史。（中国历代人物传记资料库 CBDB 126494） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wFTS9Dws5nhZvJ8pXQTGVc | 王孫 | accepted |
| spouses | p_BNHmdAdaaaA8aHyqThEAJT | 許氏 | accepted |
| ancestors | p_5gxVMxVHEsmyHKD9hjsbp5 | 王晉和 | accepted |
| ancestors | p_xpo8hw4fvJhVz9XuV1sULD | 王治 | accepted |
| other | p_LiqkD4efNPSpUEDn51rahu | 王用榮 | accepted |
| other | p_TXTY7PztPA2krJJxYNSjmn | 王用脩 | accepted |
| other | p_YEGmKaFkY2XKW39GDxDELP | 王珊 | accepted |
| other | p_tPb4jnJNyBNoZsGAFq5vQF | 王琚 | accepted |
| other | p_zbB7243CZBDeQfXX6v32PE | 王用華 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琚（CBDB 335484）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335484&o=json)
- [中国历代人物传记资料库：王珊（CBDB 335485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335485&o=json)
- [中国历代人物传记资料库：王用華（CBDB 335482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335482&o=json)
- [中国历代人物传记资料库：王用汲（CBDB 126494）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126494&o=json)
- [中国历代人物传记资料库：王用榮（CBDB 335481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335481&o=json)
- [中国历代人物传记资料库：王用脩（CBDB 335483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335483&o=json)
- [中国历代人物传记资料库：許氏(王用汲妻)（CBDB 335480）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335480&o=json)
