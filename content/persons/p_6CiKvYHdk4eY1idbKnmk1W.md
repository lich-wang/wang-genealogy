---
schema: wang-person/v1
id: p_6CiKvYHdk4eY1idbKnmk1W
status: active
merged_into: null
display_name: 王宮用
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DEqiwBpoSb92DU2f6cQ4Xt
        subject_person_id: p_6CiKvYHdk4eY1idbKnmk1W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宮用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ezMQ7F6CFDvhY5ZDK4PUQC
          claim_id: c_DEqiwBpoSb92DU2f6cQ4Xt
          source_id: s_5p74c5e9HKF4RB5G96u7s4
          stance: supports
          locator: CBDB:204347
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204347）
          source: &a1
            id: s_5p74c5e9HKF4RB5G96u7s4
            source_type: api_record
            title: 中国历代人物传记资料库：王宮用（CBDB 204347）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204347&o=json
            external_identifier: CBDB:204347
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.822Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YYrL5RjRmJuVd1ht6sBfwp
        subject_person_id: p_6CiKvYHdk4eY1idbKnmk1W
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1524年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KhaCy5EhfAL5pqogKKGj7t
          claim_id: c_YYrL5RjRmJuVd1ht6sBfwp
          source_id: s_5p74c5e9HKF4RB5G96u7s4
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
        id: c_PeTN9cTL4qyQLjrgY3tNDp
        subject_person_id: p_6CiKvYHdk4eY1idbKnmk1W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宮用（生于1524年），明人物。明清進士進士，籍贯成安，入仕進士。（中国历代人物传记资料库 CBDB 204347）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wvIp1tnQy0yuvB7IWD2MwE
          claim_id: c_PeTN9cTL4qyQLjrgY3tNDp
          source_id: s_5p74c5e9HKF4RB5G96u7s4
          stance: supports
          locator: CBDB:204347
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rclhUSLzTACbOSvN9LBga-
        subject_person_id: p_gv3jP8cXzjr19Yf1aibXF5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6CiKvYHdk4eY1idbKnmk1W
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-ECxf_iqfnD7_ZZtqgy33Q
          claim_id: c_rclhUSLzTACbOSvN9LBga-
          source_id: s_5p74c5e9HKF4RB5G96u7s4
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第一百七十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gv3jP8cXzjr19Yf1aibXF5
        status: active
        display_name: 王隆
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_EwzvqpYxXiSf0Xtkipmm1b
        subject_person_id: p_6CiKvYHdk4eY1idbKnmk1W
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_JcxJZbBeiX9ni5uV8DKYRZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QFhYWYGqdPyoA2bpO6S-TH
          claim_id: c_EwzvqpYxXiSf0Xtkipmm1b
          source_id: s_g3s4MWTiPVAwZW5nmB3Z1P
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第一百七十六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_g3s4MWTiPVAwZW5nmB3Z1P
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王宮用妻)（CBDB 317782）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317782&o=json
            external_identifier: CBDB:317782
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JcxJZbBeiX9ni5uV8DKYRZ
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_anTJPyJGmeJ-7lO-E6cJGX
        subject_person_id: p_75hb8dHaPJ6PrfY474yWrc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6CiKvYHdk4eY1idbKnmk1W
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HLIVFNopff_UxfHfUCCa30
          claim_id: c_anTJPyJGmeJ-7lO-E6cJGX
          source_id: s_5p74c5e9HKF4RB5G96u7s4
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第一百七十六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_75hb8dHaPJ6PrfY474yWrc
        status: active
        display_name: 王端
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_FOXTEne_B8yIVYisVcKz4E
        subject_person_id: p_6CiKvYHdk4eY1idbKnmk1W
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9oJ79qNMX8CxSfZ1CRrVu1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TXrA220dJft2AyHTLvOCbu
          claim_id: c_FOXTEne_B8yIVYisVcKz4E
          source_id: s_I7URrZkwsfZVANEjLUjPeq
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204347 王宮用）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_I7URrZkwsfZVANEjLUjPeq
            source_type: api_record
            title: 中国历代人物传记资料库：王廷用（CBDB 317786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317786&o=json
            external_identifier: CBDB:317786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9oJ79qNMX8CxSfZ1CRrVu1
        status: active
        display_name: 王廷用
        merged_into_person_id: null
    - claim:
        id: c_SNhoT2s1Zs7pdOM7l3PegL
        subject_person_id: p_6CiKvYHdk4eY1idbKnmk1W
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_X7L62Kzkk53vhzp71GgoTP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yUhSulYDY696pUfQktvoJk
          claim_id: c_SNhoT2s1Zs7pdOM7l3PegL
          source_id: s_dr8QemTBOu2HY61dTYHo10
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204347 王宮用）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dr8QemTBOu2HY61dTYHo10
            source_type: api_record
            title: 中国历代人物传记资料库：王君用（CBDB 317784）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317784&o=json
            external_identifier: CBDB:317784
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_X7L62Kzkk53vhzp71GgoTP
        status: active
        display_name: 王君用
        merged_into_person_id: null
    - claim:
        id: c_jp2xKZ1F3vgSgdW9X9YMvp
        subject_person_id: p_6CiKvYHdk4eY1idbKnmk1W
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dDTf6ZBEvQU9wGCyMFhaRm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wXPOYMZd-wDE73xIRyp0Kh
          claim_id: c_jp2xKZ1F3vgSgdW9X9YMvp
          source_id: s_2bSifL1mxPaoUNlWyxDVjq
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204347 王宮用）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2bSifL1mxPaoUNlWyxDVjq
            source_type: api_record
            title: 中国历代人物传记资料库：王朝用（CBDB 317783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317783&o=json
            external_identifier: CBDB:317783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dDTf6ZBEvQU9wGCyMFhaRm
        status: active
        display_name: 王朝用
        merged_into_person_id: null
---

# 王宮用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宮用 | accepted |
| birth.date | 1524年 | accepted |
| bio.summary | 王宮用（生于1524年），明人物。明清進士進士，籍贯成安，入仕進士。（中国历代人物传记资料库 CBDB 204347） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gv3jP8cXzjr19Yf1aibXF5 | 王隆 | accepted |
| spouses | p_JcxJZbBeiX9ni5uV8DKYRZ | 李氏 | accepted |
| ancestors | p_75hb8dHaPJ6PrfY474yWrc | 王端 | accepted |
| other | p_9oJ79qNMX8CxSfZ1CRrVu1 | 王廷用 | accepted |
| other | p_X7L62Kzkk53vhzp71GgoTP | 王君用 | accepted |
| other | p_dDTf6ZBEvQU9wGCyMFhaRm | 王朝用 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王宮用妻)（CBDB 317782）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317782&o=json)
- [中国历代人物传记资料库：王朝用（CBDB 317783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317783&o=json)
- [中国历代人物传记资料库：王宮用（CBDB 204347）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204347&o=json)
- [中国历代人物传记资料库：王君用（CBDB 317784）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317784&o=json)
- [中国历代人物传记资料库：王廷用（CBDB 317786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317786&o=json)
