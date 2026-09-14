---
schema: wang-person/v1
id: p_J9NadhxFwxWfp7AyRarwGS
status: active
merged_into: null
display_name: 王義
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YWvYNJGqhfEhcdQhz64P23
        subject_person_id: p_J9NadhxFwxWfp7AyRarwGS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZE4NG8AiFMUt6GbGXEqLb3
          claim_id: c_YWvYNJGqhfEhcdQhz64P23
          source_id: s_bbRqnXQuKPo1U93iT5YxWY
          stance: supports
          locator: CBDB:199241
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199241）
          source: &a1
            id: s_bbRqnXQuKPo1U93iT5YxWY
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 199241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199241&o=json
            external_identifier: CBDB:199241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.535Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_657SxSeQfARS52AL94T144
        subject_person_id: p_J9NadhxFwxWfp7AyRarwGS
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1431年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KDKxpbBNfJ6VxgD95GH5wm
          claim_id: c_657SxSeQfARS52AL94T144
          source_id: s_bbRqnXQuKPo1U93iT5YxWY
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
        id: c_KBM5DUH5HRdK9oZGagUESQ
        subject_person_id: p_J9NadhxFwxWfp7AyRarwGS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義（生于1431年），明人物。成化二年進士，籍贯洛川，入仕進士。（中国历代人物传记资料库 CBDB 199241）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7gqp3r2IXI90PjW9Vto051
          claim_id: c_KBM5DUH5HRdK9oZGagUESQ
          source_id: s_bbRqnXQuKPo1U93iT5YxWY
          stance: supports
          locator: CBDB:199241
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wEExksD47eEVF-MrHpYvO2
        subject_person_id: p_ZSdmaffBtX3DKbv12A8Zie
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J9NadhxFwxWfp7AyRarwGS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qaApADrzH27KZtwE8mT8aA
          claim_id: c_wEExksD47eEVF-MrHpYvO2
          source_id: s_bbRqnXQuKPo1U93iT5YxWY
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第二百零九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZSdmaffBtX3DKbv12A8Zie
        status: active
        display_name: 王輝
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_fMK1SP4fWTZGMdHm9QH4E4
        subject_person_id: p_J9NadhxFwxWfp7AyRarwGS
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_r1BWPRikWTBYXrn9yZQrtw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vzoJIpbzgWxg61NXSNN1Iq
          claim_id: c_fMK1SP4fWTZGMdHm9QH4E4
          source_id: s__cNDzVsUsSsZ4nLbaHupf6
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第二百零九名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s__cNDzVsUsSsZ4nLbaHupf6
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王義妻)（CBDB 242212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242212&o=json
            external_identifier: CBDB:242212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_r1BWPRikWTBYXrn9yZQrtw
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_aEaXfGtnBlr6nXqSs9vzhd
        subject_person_id: p_PjZjP8EDevdHKEtY8FrjQq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_J9NadhxFwxWfp7AyRarwGS
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_REMFSRLZ54VHUYbuVez2mM
          claim_id: c_aEaXfGtnBlr6nXqSs9vzhd
          source_id: s_bbRqnXQuKPo1U93iT5YxWY
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第二百零九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PjZjP8EDevdHKEtY8FrjQq
        status: active
        display_name: 王敏道
        merged_into_person_id: null
    - claim:
        id: c_FvYdqBoUjb3IEmIwkfzaWX
        subject_person_id: p_x5eFQiYNR4age58MLJ5BPQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_J9NadhxFwxWfp7AyRarwGS
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_csj01jAH2QtVEPeArWgfCC
          claim_id: c_FvYdqBoUjb3IEmIwkfzaWX
          source_id: s_bbRqnXQuKPo1U93iT5YxWY
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第二百零九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_x5eFQiYNR4age58MLJ5BPQ
        status: active
        display_name: 王思誠
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_7JhmUap90ywFcaKUvhCloR
        subject_person_id: p_J9NadhxFwxWfp7AyRarwGS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NJ1FnMUfkBY1Q2LFwCXEzP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e5xr4JqQR2Yd8M4NuuzdZK
          claim_id: c_7JhmUap90ywFcaKUvhCloR
          source_id: s_YTck9oFpxjwPryux56cxNS
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199241 王義）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YTck9oFpxjwPryux56cxNS
            source_type: api_record
            title: 中国历代人物传记资料库：王志（CBDB 242213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242213&o=json
            external_identifier: CBDB:242213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NJ1FnMUfkBY1Q2LFwCXEzP
        status: active
        display_name: 王志
        merged_into_person_id: null
    - claim:
        id: c_E23eK_xuV1rc6KYsH89nre
        subject_person_id: p_J9NadhxFwxWfp7AyRarwGS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NMTVa24vHbR4amGvDqLboM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GFdt7kfO741AHXoOQoYxuN
          claim_id: c_E23eK_xuV1rc6KYsH89nre
          source_id: s_JQP_a4FEbcSUbXp0cG08YA
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199241 王義）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JQP_a4FEbcSUbXp0cG08YA
            source_type: api_record
            title: 中国历代人物传记资料库：王勇（CBDB 242215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242215&o=json
            external_identifier: CBDB:242215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NMTVa24vHbR4amGvDqLboM
        status: active
        display_name: 王勇
        merged_into_person_id: null
    - claim:
        id: c_J7wpCcwTGpPiY3wPzHu_yx
        subject_person_id: p_J9NadhxFwxWfp7AyRarwGS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_o8mnqwhxLHXVyozNvVaaCQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xI6KQV4KPrHgvoyeH-yJsA
          claim_id: c_J7wpCcwTGpPiY3wPzHu_yx
          source_id: s_CP0qYXJIKUvv7bPJkEne2f
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199241 王義）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CP0qYXJIKUvv7bPJkEne2f
            source_type: api_record
            title: 中国历代人物传记资料库：王順（CBDB 242216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242216&o=json
            external_identifier: CBDB:242216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_o8mnqwhxLHXVyozNvVaaCQ
        status: active
        display_name: 王順
        merged_into_person_id: null
    - claim:
        id: c_Qd1RaY9AO4IXpNiyIz-Xkh
        subject_person_id: p_J9NadhxFwxWfp7AyRarwGS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vHq5ZkAmuwCp4xKcq1eqBa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TRXQ5XUMZBXq8753q0H0_i
          claim_id: c_Qd1RaY9AO4IXpNiyIz-Xkh
          source_id: s_Ghe_73pGqf_H4XerkY1736
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199241 王義）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Ghe_73pGqf_H4XerkY1736
            source_type: api_record
            title: 中国历代人物传记资料库：王全（CBDB 242214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242214&o=json
            external_identifier: CBDB:242214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vHq5ZkAmuwCp4xKcq1eqBa
        status: active
        display_name: 王全
        merged_into_person_id: null
---

# 王義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義 | accepted |
| birth.date | 1431年 | accepted |
| bio.summary | 王義（生于1431年），明人物。成化二年進士，籍贯洛川，入仕進士。（中国历代人物传记资料库 CBDB 199241） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZSdmaffBtX3DKbv12A8Zie | 王輝 | accepted |
| spouses | p_r1BWPRikWTBYXrn9yZQrtw | 李氏 | accepted |
| ancestors | p_PjZjP8EDevdHKEtY8FrjQq | 王敏道 | accepted |
| ancestors | p_x5eFQiYNR4age58MLJ5BPQ | 王思誠 | accepted |
| other | p_NJ1FnMUfkBY1Q2LFwCXEzP | 王志 | accepted |
| other | p_NMTVa24vHbR4amGvDqLboM | 王勇 | accepted |
| other | p_o8mnqwhxLHXVyozNvVaaCQ | 王順 | accepted |
| other | p_vHq5ZkAmuwCp4xKcq1eqBa | 王全 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王義妻)（CBDB 242212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242212&o=json)
- [中国历代人物传记资料库：王全（CBDB 242214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242214&o=json)
- [中国历代人物传记资料库：王順（CBDB 242216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242216&o=json)
- [中国历代人物传记资料库：王義（CBDB 199241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199241&o=json)
- [中国历代人物传记资料库：王勇（CBDB 242215）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242215&o=json)
- [中国历代人物传记资料库：王志（CBDB 242213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242213&o=json)
