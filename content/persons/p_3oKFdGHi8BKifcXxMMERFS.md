---
schema: wang-person/v1
id: p_3oKFdGHi8BKifcXxMMERFS
status: active
merged_into: null
display_name: 王玹
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LyYxFj9kLDi9gzhjy3mwBb
        subject_person_id: p_3oKFdGHi8BKifcXxMMERFS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tL4ui9oyVm9VeKpftvhLi8
          claim_id: c_LyYxFj9kLDi9gzhjy3mwBb
          source_id: s_xwLUvCYcBcqNBGD8AW62Dj
          stance: supports
          locator: CBDB:126600
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126600）
          source: &a1
            id: s_xwLUvCYcBcqNBGD8AW62Dj
            source_type: api_record
            title: 中国历代人物传记资料库：王玹（CBDB 126600）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126600&o=json
            external_identifier: CBDB:126600
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.049Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5tighuQ3YkeHnJHKLmQne1
        subject_person_id: p_3oKFdGHi8BKifcXxMMERFS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玹，明人物。明清進士進士，籍贯陽城，入仕進士。（中国历代人物传记资料库 CBDB 126600）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FQv24r10Titb_WdSAGN-kS
          claim_id: c_5tighuQ3YkeHnJHKLmQne1
          source_id: s_xwLUvCYcBcqNBGD8AW62Dj
          stance: supports
          locator: CBDB:126600
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_URIAKWPjdq3eJREjBEejro
        subject_person_id: p_NpyCf5W5QfEUuJVcAPTPqZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3oKFdGHi8BKifcXxMMERFS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_noYnxOsi-xeVj62Zmsdige
          claim_id: c_URIAKWPjdq3eJREjBEejro
          source_id: s_xwLUvCYcBcqNBGD8AW62Dj
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百三十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NpyCf5W5QfEUuJVcAPTPqZ
        status: active
        display_name: 王幹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_DOMzALYRzPfMnC7bKfYoE1
        subject_person_id: p_3oKFdGHi8BKifcXxMMERFS
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_jJ7oBEfLzsZ8MSWPD485w3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K8Lme5SiFC9qQ6H1b-W35Y
          claim_id: c_DOMzALYRzPfMnC7bKfYoE1
          source_id: s_gi7zpK2UL7sw1Fa0Wvhi4P
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百三十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gi7zpK2UL7sw1Fa0Wvhi4P
            source_type: api_record
            title: 中国历代人物传记资料库：徐氏(王玹妻)（CBDB 244698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244698&o=json
            external_identifier: CBDB:244698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jJ7oBEfLzsZ8MSWPD485w3
        status: active
        display_name: 徐氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_mpklKYXezfPFNLgojVyGGD
        subject_person_id: p_8gwx38wsbwGzuAiuAiCfu7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3oKFdGHi8BKifcXxMMERFS
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4gjd_GEmreFGZa4mrD-Rkw
          claim_id: c_mpklKYXezfPFNLgojVyGGD
          source_id: s_xwLUvCYcBcqNBGD8AW62Dj
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百三十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8gwx38wsbwGzuAiuAiCfu7
        status: active
        display_name: 王能
        merged_into_person_id: null
    - claim:
        id: c_m5uKml18tZ-gAKjYbTPaxP
        subject_person_id: p_unC8WhgeCeKyeGrZqnVzs9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3oKFdGHi8BKifcXxMMERFS
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HGyZf823nazD2a6on_Bc3F
          claim_id: c_m5uKml18tZ-gAKjYbTPaxP
          source_id: s_xwLUvCYcBcqNBGD8AW62Dj
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百三十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_unC8WhgeCeKyeGrZqnVzs9
        status: active
        display_name: 王貴
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_Zo0qfvYcaxYoSO1TE1RLGt
        subject_person_id: p_3oKFdGHi8BKifcXxMMERFS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NpdkdEmAFR4uKTD4g6Qb8L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XX_wgz6b6Vr5Yy8WRO1ZqX
          claim_id: c_Zo0qfvYcaxYoSO1TE1RLGt
          source_id: s_GCP2n8cgjWu01t1uRbUKP-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126600 王玹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GCP2n8cgjWu01t1uRbUKP-
            source_type: api_record
            title: 中国历代人物传记资料库：王瑤（CBDB 244702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244702&o=json
            external_identifier: CBDB:244702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NpdkdEmAFR4uKTD4g6Qb8L
        status: active
        display_name: 王瑤
        merged_into_person_id: null
    - claim:
        id: c_OBq5FzaSFO5nfSLxeZUE1s
        subject_person_id: p_3oKFdGHi8BKifcXxMMERFS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_iD1eJdJgU3JwR1ZJai5CND
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fw2rICwWvSsEpfbK0s5xrS
          claim_id: c_OBq5FzaSFO5nfSLxeZUE1s
          source_id: s_gDFhL-rG9kmPNycIIw2gMB
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126600 王玹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gDFhL-rG9kmPNycIIw2gMB
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 244701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244701&o=json
            external_identifier: CBDB:244701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iD1eJdJgU3JwR1ZJai5CND
        status: active
        display_name: 王瓊
        merged_into_person_id: null
    - claim:
        id: c_2-76y8lezKDCKBvlorjl0a
        subject_person_id: p_3oKFdGHi8BKifcXxMMERFS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_snYzLNGdke6etTGK3ye7s6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zREqV3epc08VWvmNAgay0u
          claim_id: c_2-76y8lezKDCKBvlorjl0a
          source_id: s_zrdcQQwtO4W8f-VbTuIK9V
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126600 王玹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zrdcQQwtO4W8f-VbTuIK9V
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞（CBDB 244700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244700&o=json
            external_identifier: CBDB:244700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_snYzLNGdke6etTGK3ye7s6
        status: active
        display_name: 王瑞
        merged_into_person_id: null
    - claim:
        id: c_Z4Kq7MHTVodsvEdH1hM7ZF
        subject_person_id: p_3oKFdGHi8BKifcXxMMERFS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uAY352QHQTuLgpQWQyqieh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PtT4kEcKQnGgP4AJNBi504
          claim_id: c_Z4Kq7MHTVodsvEdH1hM7ZF
          source_id: s_KhQshS2qmu58c7XsBgU1Un
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126600 王玹）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KhQshS2qmu58c7XsBgU1Un
            source_type: api_record
            title: 中国历代人物传记资料库：王瑀（CBDB 244699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244699&o=json
            external_identifier: CBDB:244699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uAY352QHQTuLgpQWQyqieh
        status: active
        display_name: 王瑀
        merged_into_person_id: null
---

# 王玹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玹 | accepted |
| bio.summary | 王玹，明人物。明清進士進士，籍贯陽城，入仕進士。（中国历代人物传记资料库 CBDB 126600） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NpyCf5W5QfEUuJVcAPTPqZ | 王幹 | accepted |
| spouses | p_jJ7oBEfLzsZ8MSWPD485w3 | 徐氏 | accepted |
| ancestors | p_8gwx38wsbwGzuAiuAiCfu7 | 王能 | accepted |
| ancestors | p_unC8WhgeCeKyeGrZqnVzs9 | 王貴 | accepted |
| other | p_NpdkdEmAFR4uKTD4g6Qb8L | 王瑤 | accepted |
| other | p_iD1eJdJgU3JwR1ZJai5CND | 王瓊 | accepted |
| other | p_snYzLNGdke6etTGK3ye7s6 | 王瑞 | accepted |
| other | p_uAY352QHQTuLgpQWQyqieh | 王瑀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瓊（CBDB 244701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244701&o=json)
- [中国历代人物传记资料库：王瑞（CBDB 244700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244700&o=json)
- [中国历代人物传记资料库：王玹（CBDB 126600）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126600&o=json)
- [中国历代人物传记资料库：王瑤（CBDB 244702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244702&o=json)
- [中国历代人物传记资料库：王瑀（CBDB 244699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244699&o=json)
- [中国历代人物传记资料库：徐氏(王玹妻)（CBDB 244698）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244698&o=json)
