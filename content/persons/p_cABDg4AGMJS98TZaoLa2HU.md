---
schema: wang-person/v1
id: p_cABDg4AGMJS98TZaoLa2HU
status: active
merged_into: null
display_name: 王佑
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KFfJMy72rVd7PksNzUuUbU
        subject_person_id: p_cABDg4AGMJS98TZaoLa2HU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MN1FUhR3ik5273VGsX9eRS
          claim_id: c_KFfJMy72rVd7PksNzUuUbU
          source_id: s_56Pt143yiZ578FsUUdFHTb
          stance: supports
          locator: CBDB:67865
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67865）
          source: &a1
            id: s_56Pt143yiZ578FsUUdFHTb
            source_type: api_record
            title: 中国历代人物传记资料库：王佑（CBDB 67865）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67865&o=json
            external_identifier: CBDB:67865
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.026Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jHrfHNZQYQXwTXWD1hcwZP
        subject_person_id: p_cABDg4AGMJS98TZaoLa2HU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佑，明人物。明清進士進士，籍贯山陰，入仕進士，曾任兵部武選司主事、工部郎中、工部右侍郎。（中国历代人物传记资料库 CBDB 67865）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rwDIHAksjq19fEQ6mabYkx
          claim_id: c_jHrfHNZQYQXwTXWD1hcwZP
          source_id: s_56Pt143yiZ578FsUUdFHTb
          stance: supports
          locator: CBDB:67865
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DlDNd3N0USEPI8FHrTW4u9
        subject_person_id: p_Wyqe2QSiKh31LC5bvKcMQt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cABDg4AGMJS98TZaoLa2HU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FJJ0CaD13OFLRowvBQGDsO
          claim_id: c_DlDNd3N0USEPI8FHrTW4u9
          source_id: s_56Pt143yiZ578FsUUdFHTb
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百九十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Wyqe2QSiKh31LC5bvKcMQt
        status: active
        display_name: 王敬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_UV6cwvovPm6YJLNPg-jvqr
        subject_person_id: p_cABDg4AGMJS98TZaoLa2HU
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_GqXdixiMXrUodSbD5Ca64R
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H2nnnEEX2s4AxMQKlOqUyd
          claim_id: c_UV6cwvovPm6YJLNPg-jvqr
          source_id: s_qWfdh-0Enxv4t4CVgNumKn
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百九十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qWfdh-0Enxv4t4CVgNumKn
            source_type: api_record
            title: 中国历代人物传记资料库：朱氏(王佑妻)（CBDB 257377）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257377&o=json
            external_identifier: CBDB:257377
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GqXdixiMXrUodSbD5Ca64R
        status: active
        display_name: 朱氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_BCiw2ERALZOYFap5wu0UXb
        subject_person_id: p_jMxby9DRySDmWrADAt51uc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cABDg4AGMJS98TZaoLa2HU
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jwhqy2maFeilgwVoC_axjd
          claim_id: c_BCiw2ERALZOYFap5wu0UXb
          source_id: s_56Pt143yiZ578FsUUdFHTb
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百九十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jMxby9DRySDmWrADAt51uc
        status: active
        display_name: 王新
        merged_into_person_id: null
    - claim:
        id: c_p6xY8LL2x4prQRxhjqqAVR
        subject_person_id: p_gJBDbRBCxbnfxx3U6Meh48
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cABDg4AGMJS98TZaoLa2HU
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JRQW3d5WhLnec0UMTWEgqg
          claim_id: c_p6xY8LL2x4prQRxhjqqAVR
          source_id: s_56Pt143yiZ578FsUUdFHTb
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百九十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gJBDbRBCxbnfxx3U6Meh48
        status: active
        display_name: 王士賢
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_8bF3TrUpXacngjtHJRuRce
        subject_person_id: p_9pfN7HQck1wEnEWHqXuPzH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cABDg4AGMJS98TZaoLa2HU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_km9enPsaiWwjjLq3zDetjE
          claim_id: c_8bF3TrUpXacngjtHJRuRce
          source_id: s_1m1JC1OWYhVtS5xECuZHcY
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67865 王佑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1m1JC1OWYhVtS5xECuZHcY
            source_type: api_record
            title: 中国历代人物传记资料库：王禮（CBDB 257379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257379&o=json
            external_identifier: CBDB:257379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9pfN7HQck1wEnEWHqXuPzH
        status: active
        display_name: 王禮
        merged_into_person_id: null
    - claim:
        id: c_vibJoilqRtuuPQP38fHniA
        subject_person_id: p_GbM7KNG9ynVntNheWxVriM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cABDg4AGMJS98TZaoLa2HU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_17vKR-lDJzBBGOusrzth5r
          claim_id: c_vibJoilqRtuuPQP38fHniA
          source_id: s_Wjq-Psz6chR3QuhArdnIeS
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67865 王佑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Wjq-Psz6chR3QuhArdnIeS
            source_type: api_record
            title: 中国历代人物传记资料库：王智（CBDB 257381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257381&o=json
            external_identifier: CBDB:257381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GbM7KNG9ynVntNheWxVriM
        status: active
        display_name: 王智
        merged_into_person_id: null
    - claim:
        id: c_Qe6lJF48LTEhedw0lHHxUZ
        subject_person_id: p_cABDg4AGMJS98TZaoLa2HU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_e6VSnZaHMKRSrJ5MbnY2r6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_feSAf_2djYjgE4tgRkq9Rc
          claim_id: c_Qe6lJF48LTEhedw0lHHxUZ
          source_id: s_hTjcMsEjBCwUegdbm8rFVm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67865 王佑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hTjcMsEjBCwUegdbm8rFVm
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 257382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257382&o=json
            external_identifier: CBDB:257382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e6VSnZaHMKRSrJ5MbnY2r6
        status: active
        display_name: 王信
        merged_into_person_id: null
    - claim:
        id: c_rma-bUazLI4fsmcCT3Po8v
        subject_person_id: p_cABDg4AGMJS98TZaoLa2HU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jyzLeB9zL3EFtRn9LCbhNW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZsqyPIt-mCpv9CA1WxAWft
          claim_id: c_rma-bUazLI4fsmcCT3Po8v
          source_id: s_9ntURg3DpPvGF5QX6iNBsE
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67865 王佑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9ntURg3DpPvGF5QX6iNBsE
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 257378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257378&o=json
            external_identifier: CBDB:257378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jyzLeB9zL3EFtRn9LCbhNW
        status: active
        display_name: 王義
        merged_into_person_id: null
---

# 王佑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佑 | accepted |
| bio.summary | 王佑，明人物。明清進士進士，籍贯山陰，入仕進士，曾任兵部武選司主事、工部郎中、工部右侍郎。（中国历代人物传记资料库 CBDB 67865） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Wyqe2QSiKh31LC5bvKcMQt | 王敬 | accepted |
| spouses | p_GqXdixiMXrUodSbD5Ca64R | 朱氏 | accepted |
| ancestors | p_jMxby9DRySDmWrADAt51uc | 王新 | accepted |
| ancestors | p_gJBDbRBCxbnfxx3U6Meh48 | 王士賢 | accepted |
| other | p_9pfN7HQck1wEnEWHqXuPzH | 王禮 | accepted |
| other | p_GbM7KNG9ynVntNheWxVriM | 王智 | accepted |
| other | p_e6VSnZaHMKRSrJ5MbnY2r6 | 王信 | accepted |
| other | p_jyzLeB9zL3EFtRn9LCbhNW | 王義 | accepted |

## 外部来源

- [中国历代人物传记资料库：王禮（CBDB 257379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257379&o=json)
- [中国历代人物传记资料库：王信（CBDB 257382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257382&o=json)
- [中国历代人物传记资料库：王義（CBDB 257378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257378&o=json)
- [中国历代人物传记资料库：王佑（CBDB 67865）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67865&o=json)
- [中国历代人物传记资料库：王智（CBDB 257381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257381&o=json)
- [中国历代人物传记资料库：朱氏(王佑妻)（CBDB 257377）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257377&o=json)
