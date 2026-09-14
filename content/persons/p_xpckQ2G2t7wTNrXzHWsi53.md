---
schema: wang-person/v1
id: p_xpckQ2G2t7wTNrXzHWsi53
status: active
merged_into: null
display_name: 王霽
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JpS77ge312CPN3REyasbzw
        subject_person_id: p_xpckQ2G2t7wTNrXzHWsi53
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hf2hvvj34i7SbQHm23QkmB
          claim_id: c_JpS77ge312CPN3REyasbzw
          source_id: s_ocd7oUfXfL3b36MEGhirbv
          stance: supports
          locator: CBDB:203388
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203388）
          source: &a1
            id: s_ocd7oUfXfL3b36MEGhirbv
            source_type: api_record
            title: 中国历代人物传记资料库：王霽（CBDB 203388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203388&o=json
            external_identifier: CBDB:203388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.783Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rBbNU8bz2RpzARGe9AJJig
        subject_person_id: p_xpckQ2G2t7wTNrXzHWsi53
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1506年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aF2mzfQG5QMX8MF2wvSJ1D
          claim_id: c_rBbNU8bz2RpzARGe9AJJig
          source_id: s_ocd7oUfXfL3b36MEGhirbv
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
        id: c_EjHs26B1fmFKtjz2TmK8hC
        subject_person_id: p_xpckQ2G2t7wTNrXzHWsi53
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霽（生于1506年），明人物。嘉靖二十年進士，籍贯黃陂，入仕進士。（中国历代人物传记资料库 CBDB 203388）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nJ283sI2aYBF70Eu-5Iaui
          claim_id: c_EjHs26B1fmFKtjz2TmK8hC
          source_id: s_ocd7oUfXfL3b36MEGhirbv
          stance: supports
          locator: CBDB:203388
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wV5kZqG4jm8y4DedXq-CWU
        subject_person_id: p_MrBW6wRCgoY5prUKEsRfTq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xpckQ2G2t7wTNrXzHWsi53
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FnbE6TVi9LCgSCOwwgv9JW
          claim_id: c_wV5kZqG4jm8y4DedXq-CWU
          source_id: s_dcyMTBaaoftzT15eSX7G5D
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第九十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dcyMTBaaoftzT15eSX7G5D
            source_type: api_record
            title: 中国历代人物传记资料库：王廷賓（CBDB 303978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303978&o=json
            external_identifier: CBDB:303978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.698Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MrBW6wRCgoY5prUKEsRfTq
        status: active
        display_name: 王廷賓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_pZktPCA8Qv1SdvIJmksK1r
        subject_person_id: p_oRgQrFftm4F4PSEdJVkRXn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xpckQ2G2t7wTNrXzHWsi53
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_488nRCLHiXX_RprBVspxm6
          claim_id: c_pZktPCA8Qv1SdvIJmksK1r
          source_id: s_BrJkuxJ5DkuUsDTWWZjWeT
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第九十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BrJkuxJ5DkuUsDTWWZjWeT
            source_type: api_record
            title: 中国历代人物传记资料库：王才（CBDB 303976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303976&o=json
            external_identifier: CBDB:303976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.697Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oRgQrFftm4F4PSEdJVkRXn
        status: active
        display_name: 王才
        merged_into_person_id: null
    - claim:
        id: c_UX5X1JJhLlZUM4qFj_cGpt
        subject_person_id: p_uYGRmFNAZgHYXXYcpcrQLS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xpckQ2G2t7wTNrXzHWsi53
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zrMTmA_DfqvoJJNvecdU1a
          claim_id: c_UX5X1JJhLlZUM4qFj_cGpt
          source_id: s_p8HUP8UK7TwGZDE9tGk4iF
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第九十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_p8HUP8UK7TwGZDE9tGk4iF
            source_type: api_record
            title: 中国历代人物传记资料库：王圭（CBDB 303977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303977&o=json
            external_identifier: CBDB:303977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.697Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uYGRmFNAZgHYXXYcpcrQLS
        status: active
        display_name: 王圭
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_tKYvhl6dW_UDHsYvxwC001
        subject_person_id: p_cqJ4sVKG8Fe1fPgngScBnC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xpckQ2G2t7wTNrXzHWsi53
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WTssgbEy0RncQIQtg0TsO0
          claim_id: c_tKYvhl6dW_UDHsYvxwC001
          source_id: s_Z9mWEMgTuWDv3Aty1tVS3K
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203388 王霽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Z9mWEMgTuWDv3Aty1tVS3K
            source_type: api_record
            title: 中国历代人物传记资料库：王霖（CBDB 303982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303982&o=json
            external_identifier: CBDB:303982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cqJ4sVKG8Fe1fPgngScBnC
        status: active
        display_name: 王霖
        merged_into_person_id: null
    - claim:
        id: c_mrSeDFpPzxOKhzGzevwzyt
        subject_person_id: p_i7318u5pAeYET3zL7UMKHH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xpckQ2G2t7wTNrXzHWsi53
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hJZowdwzcv_6Afrd17Zd1M
          claim_id: c_mrSeDFpPzxOKhzGzevwzyt
          source_id: s_IXnNe9Yp0e0H3ng3s2TMTr
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203388 王霽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IXnNe9Yp0e0H3ng3s2TMTr
            source_type: api_record
            title: 中国历代人物传记资料库：王霆（CBDB 303983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303983&o=json
            external_identifier: CBDB:303983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_i7318u5pAeYET3zL7UMKHH
        status: active
        display_name: 王霆
        merged_into_person_id: null
    - claim:
        id: c_d3uIZW9f-ts8hMCJjzaBfH
        subject_person_id: p_vsiJdPHKW5x8uNUbMQB1QX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xpckQ2G2t7wTNrXzHWsi53
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r6jZ8BKVrAfcd1lP1FUd2t
          claim_id: c_d3uIZW9f-ts8hMCJjzaBfH
          source_id: s_-r0LKWtV5Cmg5oU-bl2mM0
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203388 王霽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-r0LKWtV5Cmg5oU-bl2mM0
            source_type: api_record
            title: 中国历代人物传记资料库：王霂（CBDB 303984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303984&o=json
            external_identifier: CBDB:303984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vsiJdPHKW5x8uNUbMQB1QX
        status: active
        display_name: 王霂
        merged_into_person_id: null
---

# 王霽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霽 | accepted |
| birth.date | 1506年 | accepted |
| bio.summary | 王霽（生于1506年），明人物。嘉靖二十年進士，籍贯黃陂，入仕進士。（中国历代人物传记资料库 CBDB 203388） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MrBW6wRCgoY5prUKEsRfTq | 王廷賓 | accepted |
| ancestors | p_oRgQrFftm4F4PSEdJVkRXn | 王才 | accepted |
| ancestors | p_uYGRmFNAZgHYXXYcpcrQLS | 王圭 | accepted |
| other | p_cqJ4sVKG8Fe1fPgngScBnC | 王霖 | accepted |
| other | p_i7318u5pAeYET3zL7UMKHH | 王霆 | accepted |
| other | p_vsiJdPHKW5x8uNUbMQB1QX | 王霂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王才（CBDB 303976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303976&o=json)
- [中国历代人物传记资料库：王圭（CBDB 303977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303977&o=json)
- [中国历代人物传记资料库：王霽（CBDB 203388）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203388&o=json)
- [中国历代人物传记资料库：王霖（CBDB 303982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303982&o=json)
- [中国历代人物传记资料库：王霂（CBDB 303984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303984&o=json)
- [中国历代人物传记资料库：王廷賓（CBDB 303978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303978&o=json)
- [中国历代人物传记资料库：王霆（CBDB 303983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303983&o=json)
