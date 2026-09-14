---
schema: wang-person/v1
id: p_oUoF6dRdhe6WLHeR9E6Mai
status: active
merged_into: null
display_name: 王鏜
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RCdBiW6xp2cPHkXmaQp8C6
        subject_person_id: p_oUoF6dRdhe6WLHeR9E6Mai
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hHMHhsGkKfqc1aBHHJ9UEX
          claim_id: c_RCdBiW6xp2cPHkXmaQp8C6
          source_id: s_3h9jMp1kkxEm7dHXB3nobM
          stance: supports
          locator: CBDB:201524
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201524）
          source: &a1
            id: s_3h9jMp1kkxEm7dHXB3nobM
            source_type: api_record
            title: 中国历代人物传记资料库：王鏜（CBDB 201524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201524&o=json
            external_identifier: CBDB:201524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.682Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_R8WX5LGxEUHz5owVckX4SN
        subject_person_id: p_oUoF6dRdhe6WLHeR9E6Mai
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1471年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qQuCc1JM7DxNgQ6f8QEzqH
          claim_id: c_R8WX5LGxEUHz5owVckX4SN
          source_id: s_3h9jMp1kkxEm7dHXB3nobM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K44XHuLR124LjoRp92JqD9
        subject_person_id: p_oUoF6dRdhe6WLHeR9E6Mai
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏜（生于1471年），明人物。明清進士進士，籍贯徐州，入仕進士。（中国历代人物传记资料库 CBDB 201524）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wmCBO9imAYhylbEL8OvtOB
          claim_id: c_K44XHuLR124LjoRp92JqD9
          source_id: s_3h9jMp1kkxEm7dHXB3nobM
          stance: supports
          locator: CBDB:201524
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vPRQqc_wHiBK8ibxIv2ECk
        subject_person_id: p_j2iruMugSZPepsD4KQYC8f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oUoF6dRdhe6WLHeR9E6Mai
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q64bGcgGwXR6qtHrStbMTc
          claim_id: c_vPRQqc_wHiBK8ibxIv2ECk
          source_id: s_PUXA73Lg59Kk5Lk53X9HYh
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PUXA73Lg59Kk5Lk53X9HYh
            source_type: api_record
            title: 中国历代人物传记资料库：王林（CBDB 273790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273790&o=json
            external_identifier: CBDB:273790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.907Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_j2iruMugSZPepsD4KQYC8f
        status: active
        display_name: 王林
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Mp-dMgTMNbDIqeyWdBYRg_
        subject_person_id: p_gF9jR9HrMnXcuj8mn5FQbe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oUoF6dRdhe6WLHeR9E6Mai
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xdpA0guw0FfgfMR5fyvAtF
          claim_id: c_Mp-dMgTMNbDIqeyWdBYRg_
          source_id: s_VoRPAM3Yyu6xYQst2Ff3YY
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VoRPAM3Yyu6xYQst2Ff3YY
            source_type: api_record
            title: 中国历代人物传记资料库：王瑁（CBDB 273789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273789&o=json
            external_identifier: CBDB:273789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.906Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gF9jR9HrMnXcuj8mn5FQbe
        status: active
        display_name: 王瑁
        merged_into_person_id: null
    - claim:
        id: c_tKzHhy449Jpn13rmBjG-DH
        subject_person_id: p_Hi3N8mMFaZbqULc5v3FsQ7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oUoF6dRdhe6WLHeR9E6Mai
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h__Q-iy5Dma0xu2EvpyjiX
          claim_id: c_tKzHhy449Jpn13rmBjG-DH
          source_id: s_7pk9CWQSbr58piXrG3hayF
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7pk9CWQSbr58piXrG3hayF
            source_type: api_record
            title: 中国历代人物传记资料库：王春（CBDB 273788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273788&o=json
            external_identifier: CBDB:273788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.906Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Hi3N8mMFaZbqULc5v3FsQ7
        status: active
        display_name: 王春
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c__NtA-jGHZsSe47XW7fX1tC
        subject_person_id: p_M1HQXEBWufASsGiebeytZc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oUoF6dRdhe6WLHeR9E6Mai
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R7PHM6bB1QVdqlRzgKHGIK
          claim_id: c__NtA-jGHZsSe47XW7fX1tC
          source_id: s_gL4eE-vcDXYUJyvIlpHZkK
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201524 王鏜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gL4eE-vcDXYUJyvIlpHZkK
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 273797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273797&o=json
            external_identifier: CBDB:273797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_M1HQXEBWufASsGiebeytZc
        status: active
        display_name: 王英
        merged_into_person_id: null
    - claim:
        id: c_UPl7SMUVu01IAMx_HTPWmE
        subject_person_id: p_au21aH3Df2zzjm3k5PEk7E
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oUoF6dRdhe6WLHeR9E6Mai
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g5rwMmZq8kOIWO0q8mLyFw
          claim_id: c_UPl7SMUVu01IAMx_HTPWmE
          source_id: s_Y01yP6mg2xmtq__u1I-GI1
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201524 王鏜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Y01yP6mg2xmtq__u1I-GI1
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 273796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273796&o=json
            external_identifier: CBDB:273796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_au21aH3Df2zzjm3k5PEk7E
        status: active
        display_name: 王鑑
        merged_into_person_id: null
    - claim:
        id: c_NvhOrakH1fAEACVXK3SlwW
        subject_person_id: p_fy6sHgPB2cKx6gF75nbQZX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oUoF6dRdhe6WLHeR9E6Mai
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OrP2UzVxGiArv0V2fUc0Fa
          claim_id: c_NvhOrakH1fAEACVXK3SlwW
          source_id: s_npLc0tVbQs6i3wf78y0R_r
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201524 王鏜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_npLc0tVbQs6i3wf78y0R_r
            source_type: api_record
            title: 中国历代人物传记资料库：王雄（CBDB 273793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273793&o=json
            external_identifier: CBDB:273793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fy6sHgPB2cKx6gF75nbQZX
        status: active
        display_name: 王雄
        merged_into_person_id: null
    - claim:
        id: c_zRwv1B5FHhWDPofulUGMU_
        subject_person_id: p_oUoF6dRdhe6WLHeR9E6Mai
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pSz1iZp7XDTDmvdPy88wp5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FoA1_drTsefe4a1G-dfK_S
          claim_id: c_zRwv1B5FHhWDPofulUGMU_
          source_id: s_xHj5nOad4yeOQ1n1ilhB-A
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201524 王鏜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xHj5nOad4yeOQ1n1ilhB-A
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 273794）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273794&o=json
            external_identifier: CBDB:273794
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pSz1iZp7XDTDmvdPy88wp5
        status: active
        display_name: 王銳
        merged_into_person_id: null
---

# 王鏜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鏜 | accepted |
| birth.date | 1471年 | accepted |
| bio.summary | 王鏜（生于1471年），明人物。明清進士進士，籍贯徐州，入仕進士。（中国历代人物传记资料库 CBDB 201524） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_j2iruMugSZPepsD4KQYC8f | 王林 | accepted |
| ancestors | p_gF9jR9HrMnXcuj8mn5FQbe | 王瑁 | accepted |
| ancestors | p_Hi3N8mMFaZbqULc5v3FsQ7 | 王春 | accepted |
| other | p_M1HQXEBWufASsGiebeytZc | 王英 | accepted |
| other | p_au21aH3Df2zzjm3k5PEk7E | 王鑑 | accepted |
| other | p_fy6sHgPB2cKx6gF75nbQZX | 王雄 | accepted |
| other | p_pSz1iZp7XDTDmvdPy88wp5 | 王銳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王春（CBDB 273788）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273788&o=json)
- [中国历代人物传记资料库：王鑑（CBDB 273796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273796&o=json)
- [中国历代人物传记资料库：王林（CBDB 273790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273790&o=json)
- [中国历代人物传记资料库：王瑁（CBDB 273789）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273789&o=json)
- [中国历代人物传记资料库：王銳（CBDB 273794）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273794&o=json)
- [中国历代人物传记资料库：王鏜（CBDB 201524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201524&o=json)
- [中国历代人物传记资料库：王雄（CBDB 273793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273793&o=json)
- [中国历代人物传记资料库：王英（CBDB 273797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273797&o=json)
