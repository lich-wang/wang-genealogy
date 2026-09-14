---
schema: wang-person/v1
id: p_TxHEXLnqR7Hmrn4YZb9SRE
status: active
merged_into: null
display_name: 王璿
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UFk3S8rGFHUTZA1zXjTstL
        subject_person_id: p_TxHEXLnqR7Hmrn4YZb9SRE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o9qNPzYQQTpTgwqBXoctS6
          claim_id: c_UFk3S8rGFHUTZA1zXjTstL
          source_id: s_MYvjWqpPSCXgkHvXhNYVNJ
          stance: supports
          locator: CBDB:199220
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199220）
          source: &a1
            id: s_MYvjWqpPSCXgkHvXhNYVNJ
            source_type: api_record
            title: 中国历代人物传记资料库：王璿（CBDB 199220）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199220&o=json
            external_identifier: CBDB:199220
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.532Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1f4MoZ451GCmQ6uouKVftc
        subject_person_id: p_TxHEXLnqR7Hmrn4YZb9SRE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1437年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WD4DjB8EzuSMS5ciqcKLUZ
          claim_id: c_1f4MoZ451GCmQ6uouKVftc
          source_id: s_MYvjWqpPSCXgkHvXhNYVNJ
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
        id: c_LBZJCBqYAj9reSeciSXtzy
        subject_person_id: p_TxHEXLnqR7Hmrn4YZb9SRE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璿（生于1437年），明人物。明清進士進士，籍贯安岳，入仕進士。（中国历代人物传记资料库 CBDB 199220）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WqBqWjLKqKbHmhkWxGlwJl
          claim_id: c_LBZJCBqYAj9reSeciSXtzy
          source_id: s_MYvjWqpPSCXgkHvXhNYVNJ
          stance: supports
          locator: CBDB:199220
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SVvoZK0xjk8g8Cg5L8JyJn
        subject_person_id: p_8D8JJjvAk9tGe283upkqdk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TxHEXLnqR7Hmrn4YZb9SRE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wVNQZtHXH1DmzuUBiFBxfp
          claim_id: c_SVvoZK0xjk8g8Cg5L8JyJn
          source_id: s_zbDcNK6UaeHRsYDrdL8c8Z
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第一百七十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zbDcNK6UaeHRsYDrdL8c8Z
            source_type: api_record
            title: 中国历代人物传记资料库：王守文（CBDB 241883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241883&o=json
            external_identifier: CBDB:241883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.959Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8D8JJjvAk9tGe283upkqdk
        status: active
        display_name: 王守文
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_FYCP9eFwa3fOg5kiCrUUyx
        subject_person_id: p_EV6is4u6ewBF6CBLVqmq9F
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TxHEXLnqR7Hmrn4YZb9SRE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WwOtKArqKPMfyFB2IK3Icr
          claim_id: c_FYCP9eFwa3fOg5kiCrUUyx
          source_id: s_aQMRWdPrqAUznZr1wES3gC
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第一百七十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aQMRWdPrqAUznZr1wES3gC
            source_type: api_record
            title: 中国历代人物传记资料库：王道玄（CBDB 241882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241882&o=json
            external_identifier: CBDB:241882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.959Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EV6is4u6ewBF6CBLVqmq9F
        status: active
        display_name: 王道玄
        merged_into_person_id: null
    - claim:
        id: c_3LiTJ5QaW1P87x1yjyg-Yh
        subject_person_id: p_i3Pc3S5m7XG8sgJ7aVGwdX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TxHEXLnqR7Hmrn4YZb9SRE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c_WSSLgRh5MMxo1c0r8JKJ
          claim_id: c_3LiTJ5QaW1P87x1yjyg-Yh
          source_id: s_htRFPVwwY3uXUPec7kz9HW
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第一百七十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_htRFPVwwY3uXUPec7kz9HW
            source_type: api_record
            title: 中国历代人物传记资料库：王福順（CBDB 241881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241881&o=json
            external_identifier: CBDB:241881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_i3Pc3S5m7XG8sgJ7aVGwdX
        status: active
        display_name: 王福順
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_8YS2HcT63FfObrbviShnre
        subject_person_id: p_1T1Wke5ggnVnXexwtbxbDR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TxHEXLnqR7Hmrn4YZb9SRE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TsW1_9qLtLEaVSez2TrVTF
          claim_id: c_8YS2HcT63FfObrbviShnre
          source_id: s_UTIZ99l9eglKHydJCsUxTJ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199220 王璿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UTIZ99l9eglKHydJCsUxTJ
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 241891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241891&o=json
            external_identifier: CBDB:241891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1T1Wke5ggnVnXexwtbxbDR
        status: active
        display_name: 王琮
        merged_into_person_id: null
    - claim:
        id: c_iYJhtvxV7rcayavBcB-dHj
        subject_person_id: p_2MXAMeY1VrCakKx7BdFpCV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TxHEXLnqR7Hmrn4YZb9SRE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2YGpoyQt8ApUTLVBwwEo1P
          claim_id: c_iYJhtvxV7rcayavBcB-dHj
          source_id: s_ghvrXuzN66ejNvuk9P6CyY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199220 王璿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ghvrXuzN66ejNvuk9P6CyY
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 241888）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241888&o=json
            external_identifier: CBDB:241888
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2MXAMeY1VrCakKx7BdFpCV
        status: active
        display_name: 王玉
        merged_into_person_id: null
    - claim:
        id: c_f8LHaeEITW-6ox4lpTZZdm
        subject_person_id: p_GKDH6wuGkDu29wkboCLWqr
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TxHEXLnqR7Hmrn4YZb9SRE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8prDWbSwm-EUypDTZ_dlj_
          claim_id: c_f8LHaeEITW-6ox4lpTZZdm
          source_id: s_-UI2vXbXoLnoyMMomueoyJ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199220 王璿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-UI2vXbXoLnoyMMomueoyJ
            source_type: api_record
            title: 中国历代人物传记资料库：王珮（CBDB 241890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241890&o=json
            external_identifier: CBDB:241890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GKDH6wuGkDu29wkboCLWqr
        status: active
        display_name: 王珮
        merged_into_person_id: null
    - claim:
        id: c_Rt1fZbtYUkJIWXQs61np7d
        subject_person_id: p_KdFzQngyh6PD5UJNYTHzVv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TxHEXLnqR7Hmrn4YZb9SRE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xAfrlF5rj5QE2_pSno0eI8
          claim_id: c_Rt1fZbtYUkJIWXQs61np7d
          source_id: s_BYk6T8KSUX-IzPb6rVJ3ws
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199220 王璿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BYk6T8KSUX-IzPb6rVJ3ws
            source_type: api_record
            title: 中国历代人物传记资料库：王珩（CBDB 241889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241889&o=json
            external_identifier: CBDB:241889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KdFzQngyh6PD5UJNYTHzVv
        status: active
        display_name: 王珩
        merged_into_person_id: null
    - claim:
        id: c_i5nVBgBdkOrMxw-0rVi5NK
        subject_person_id: p_TxHEXLnqR7Hmrn4YZb9SRE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dCEZT1WezjPdG9Xoa6Z9bp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SN6O0OLqWivk928V1MIpmY
          claim_id: c_i5nVBgBdkOrMxw-0rVi5NK
          source_id: s_Z4NOYcyhQ9VRO2d-i80c0Q
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199220 王璿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Z4NOYcyhQ9VRO2d-i80c0Q
            source_type: api_record
            title: 中国历代人物传记资料库：王璣（CBDB 241887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241887&o=json
            external_identifier: CBDB:241887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dCEZT1WezjPdG9Xoa6Z9bp
        status: active
        display_name: 王璣
        merged_into_person_id: null
---

# 王璿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璿 | accepted |
| birth.date | 1437年 | accepted |
| bio.summary | 王璿（生于1437年），明人物。明清進士進士，籍贯安岳，入仕進士。（中国历代人物传记资料库 CBDB 199220） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8D8JJjvAk9tGe283upkqdk | 王守文 | accepted |
| ancestors | p_EV6is4u6ewBF6CBLVqmq9F | 王道玄 | accepted |
| ancestors | p_i3Pc3S5m7XG8sgJ7aVGwdX | 王福順 | accepted |
| other | p_1T1Wke5ggnVnXexwtbxbDR | 王琮 | accepted |
| other | p_2MXAMeY1VrCakKx7BdFpCV | 王玉 | accepted |
| other | p_GKDH6wuGkDu29wkboCLWqr | 王珮 | accepted |
| other | p_KdFzQngyh6PD5UJNYTHzVv | 王珩 | accepted |
| other | p_dCEZT1WezjPdG9Xoa6Z9bp | 王璣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 241891）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241891&o=json)
- [中国历代人物传记资料库：王道玄（CBDB 241882）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241882&o=json)
- [中国历代人物传记资料库：王福順（CBDB 241881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241881&o=json)
- [中国历代人物传记资料库：王珩（CBDB 241889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241889&o=json)
- [中国历代人物传记资料库：王璣（CBDB 241887）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241887&o=json)
- [中国历代人物传记资料库：王珮（CBDB 241890）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241890&o=json)
- [中国历代人物传记资料库：王守文（CBDB 241883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241883&o=json)
- [中国历代人物传记资料库：王璿（CBDB 199220）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199220&o=json)
- [中国历代人物传记资料库：王玉（CBDB 241888）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241888&o=json)
