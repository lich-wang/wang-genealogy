---
schema: wang-person/v1
id: p_N8VeHKkRJBXUZc2iB2TQ63
status: active
merged_into: null
display_name: 王鏜
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Bb9RoPr5nEMSfazjUS1MT8
        subject_person_id: p_N8VeHKkRJBXUZc2iB2TQ63
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
        - id: cs_g1HnKG9jYKeGretiyaacHh
          claim_id: c_Bb9RoPr5nEMSfazjUS1MT8
          source_id: s_WfHtK8xA9tUFki77VkPKKj
          stance: supports
          locator: CBDB:320897
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（320897）
          source: &a1
            id: s_WfHtK8xA9tUFki77VkPKKj
            source_type: api_record
            title: 中国历代人物传记资料库：王鏜（CBDB 320897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320897&o=json
            external_identifier: CBDB:320897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.074Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qRT3ctBsgDTT6Hq1Dd4skd
        subject_person_id: p_N8VeHKkRJBXUZc2iB2TQ63
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏜，明人物。嘉靖三十五年進士，籍贯徐州，曾任提刑按察使司副使。（中国历代人物传记资料库 CBDB 320897）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SLoG7V56VNXhJ6IbeeDekN
          claim_id: c_qRT3ctBsgDTT6Hq1Dd4skd
          source_id: s_WfHtK8xA9tUFki77VkPKKj
          stance: supports
          locator: CBDB:320897
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_jAbBTe2HHwaJh1KwJUVQnh
        subject_person_id: p_N8VeHKkRJBXUZc2iB2TQ63
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7xVa8ivPDPteJR7tikUd4a
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PSHR8HpiXTdaPpmEgY_wW0
          claim_id: c_jAbBTe2HHwaJh1KwJUVQnh
          source_id: s_7bsj37JpqqDWGgSYnYJuhe
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第八十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7bsj37JpqqDWGgSYnYJuhe
            source_type: api_record
            title: 中国历代人物传记资料库：王洀（CBDB 204567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204567&o=json
            external_identifier: CBDB:204567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7xVa8ivPDPteJR7tikUd4a
        status: active
        display_name: 王洀
        merged_into_person_id: null
    - claim:
        id: c_fBhtdc7bzNZqiPZ43tzQ-C
        subject_person_id: p_N8VeHKkRJBXUZc2iB2TQ63
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2yXRDyrqgrTNwtaMBvJ67v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PMGvLN3FdyFbF9swdOOoM5
          claim_id: c_fBhtdc7bzNZqiPZ43tzQ-C
          source_id: s_AoayxgMtibSrfy1n2tewxC
          stance: supports
          locator: CBDB：兄弟 王洀（204567）之父／母 王鏜
          quotation: null
          interpretation_note: 由兄弟关系推断：王瀾 与 王洀 为同胞（CBDB 记「弟」），王洀 之父／母即 王瀾 之父／母。
          source:
            id: s_AoayxgMtibSrfy1n2tewxC
            source_type: api_record
            title: 中国历代人物传记资料库：王瀾（CBDB 320900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320900&o=json
            external_identifier: CBDB:320900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2yXRDyrqgrTNwtaMBvJ67v
        status: active
        display_name: 王瀾
        merged_into_person_id: null
    - claim:
        id: c_UwAulQSK7JBDjVFNcWe_jd
        subject_person_id: p_N8VeHKkRJBXUZc2iB2TQ63
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4Y8hLUWJA3e6MBy6Kd5HAa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k9MpDwhDZfUKymXMIQNMA6
          claim_id: c_UwAulQSK7JBDjVFNcWe_jd
          source_id: s_d8YFEoJoqJSA-n_dYSWzb0
          stance: supports
          locator: CBDB：兄弟 王洀（204567）之父／母 王鏜
          quotation: null
          interpretation_note: 由兄弟关系推断：王沐 与 王洀 为同胞（CBDB 记「弟」），王洀 之父／母即 王沐 之父／母。
          source:
            id: s_d8YFEoJoqJSA-n_dYSWzb0
            source_type: api_record
            title: 中国历代人物传记资料库：王沐（CBDB 320901）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320901&o=json
            external_identifier: CBDB:320901
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4Y8hLUWJA3e6MBy6Kd5HAa
        status: active
        display_name: 王沐
        merged_into_person_id: null
    - claim:
        id: c_-VwkyblD3Wsu4Y_S96SstL
        subject_person_id: p_N8VeHKkRJBXUZc2iB2TQ63
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H5iLpyjcA3HVMMjgcV5Lam
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5KNqACRsV7jfP_QDYXQBXE
          claim_id: c_-VwkyblD3Wsu4Y_S96SstL
          source_id: s_JvU6U1AYllZ2FhlMxodFmh
          stance: supports
          locator: CBDB：兄弟 王洀（204567）之父／母 王鏜
          quotation: null
          interpretation_note: 由兄弟关系推断：王沂 与 王洀 为同胞（CBDB 记「弟」），王洀 之父／母即 王沂 之父／母。
          source:
            id: s_JvU6U1AYllZ2FhlMxodFmh
            source_type: api_record
            title: 中国历代人物传记资料库：王沂（CBDB 320903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320903&o=json
            external_identifier: CBDB:320903
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_H5iLpyjcA3HVMMjgcV5Lam
        status: active
        display_name: 王沂
        merged_into_person_id: null
    - claim:
        id: c_mRrND-iBCh1Frf4WopCzsU
        subject_person_id: p_N8VeHKkRJBXUZc2iB2TQ63
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HVUHn1RgUFDuxAMunAWj2H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3NuCvSXSfwxfapNir9R3nQ
          claim_id: c_mRrND-iBCh1Frf4WopCzsU
          source_id: s_3QTlj9oMMyNP4G3d-8S2Rm
          stance: supports
          locator: CBDB：兄弟 王洀（204567）之父／母 王鏜
          quotation: null
          interpretation_note: 由兄弟关系推断：王滄 与 王洀 为同胞（CBDB 记「弟」），王洀 之父／母即 王滄 之父／母。
          source:
            id: s_3QTlj9oMMyNP4G3d-8S2Rm
            source_type: api_record
            title: 中国历代人物传记资料库：王滄（CBDB 320902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320902&o=json
            external_identifier: CBDB:320902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HVUHn1RgUFDuxAMunAWj2H
        status: active
        display_name: 王滄
        merged_into_person_id: null
    - claim:
        id: c_bLxBXagln2RcZTmOj-JNHO
        subject_person_id: p_N8VeHKkRJBXUZc2iB2TQ63
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_csYuyunLVP9FsCw9VG24Y9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ooC2OfgIvawRjCYXMHFiVE
          claim_id: c_bLxBXagln2RcZTmOj-JNHO
          source_id: s_G9IPwcUY7GWiEYa5bRXtvl
          stance: supports
          locator: CBDB：兄弟 王洀（204567）之父／母 王鏜
          quotation: null
          interpretation_note: 由兄弟关系推断：王治 与 王洀 为同胞（CBDB 记「弟」），王洀 之父／母即 王治 之父／母。
          source:
            id: s_G9IPwcUY7GWiEYa5bRXtvl
            source_type: api_record
            title: 中国历代人物传记资料库：王治（CBDB 320905）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320905&o=json
            external_identifier: CBDB:320905
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_csYuyunLVP9FsCw9VG24Y9
        status: active
        display_name: 王治
        merged_into_person_id: null
    - claim:
        id: c_0qnBmWSOsJrxudS1hDXfgu
        subject_person_id: p_N8VeHKkRJBXUZc2iB2TQ63
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vwN9BZnTiyGxCXs8XWz8C1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Chfa9PHjN-qz00iKcw6988
          claim_id: c_0qnBmWSOsJrxudS1hDXfgu
          source_id: s_I3tru9udYO31PkAjoWNQVA
          stance: supports
          locator: CBDB：兄弟 王洀（204567）之父／母 王鏜
          quotation: null
          interpretation_note: 由兄弟关系推断：王澍 与 王洀 为同胞（CBDB 记「弟」），王洀 之父／母即 王澍 之父／母。
          source:
            id: s_I3tru9udYO31PkAjoWNQVA
            source_type: api_record
            title: 中国历代人物传记资料库：王澍（CBDB 320904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320904&o=json
            external_identifier: CBDB:320904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vwN9BZnTiyGxCXs8XWz8C1
        status: active
        display_name: 王澍
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鏜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鏜 | accepted |
| bio.summary | 王鏜，明人物。嘉靖三十五年進士，籍贯徐州，曾任提刑按察使司副使。（中国历代人物传记资料库 CBDB 320897） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7xVa8ivPDPteJR7tikUd4a | 王洀 | accepted |
| children | p_2yXRDyrqgrTNwtaMBvJ67v | 王瀾 | accepted |
| children | p_4Y8hLUWJA3e6MBy6Kd5HAa | 王沐 | accepted |
| children | p_H5iLpyjcA3HVMMjgcV5Lam | 王沂 | accepted |
| children | p_HVUHn1RgUFDuxAMunAWj2H | 王滄 | accepted |
| children | p_csYuyunLVP9FsCw9VG24Y9 | 王治 | accepted |
| children | p_vwN9BZnTiyGxCXs8XWz8C1 | 王澍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王滄（CBDB 320902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320902&o=json)
- [中国历代人物传记资料库：王瀾（CBDB 320900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320900&o=json)
- [中国历代人物传记资料库：王沐（CBDB 320901）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320901&o=json)
- [中国历代人物传记资料库：王洀（CBDB 204567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204567&o=json)
- [中国历代人物传记资料库：王澍（CBDB 320904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320904&o=json)
- [中国历代人物传记资料库：王鏜（CBDB 320897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320897&o=json)
- [中国历代人物传记资料库：王沂（CBDB 320903）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320903&o=json)
- [中国历代人物传记资料库：王治（CBDB 320905）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320905&o=json)
