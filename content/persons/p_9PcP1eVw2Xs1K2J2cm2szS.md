---
schema: wang-person/v1
id: p_9PcP1eVw2Xs1K2J2cm2szS
status: active
merged_into: null
display_name: 王堯日
cbdb_id: 126715
revision: 7
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q7CEcFHuCr9yNmeNXg9vL4
        subject_person_id: p_9PcP1eVw2Xs1K2J2cm2szS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯日，明人物。籍贯鹿邑，入仕進士，曾任推官。（中国历代人物传记资料库 CBDB 126715）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_NZK5Dda93LnLg5T9igobYm
          claim_id: c_q7CEcFHuCr9yNmeNXg9vL4
          source_id: s_rwsktfJxGf6xMQQTDf9V45
          stance: supports
          locator: CBDB:126715
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_rwsktfJxGf6xMQQTDf9V45
            source_type: api_record
            title: 中国历代人物传记资料库：王堯日（CBDB 126715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126715&o=json
            external_identifier: CBDB:126715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5ui3TZYv4oMaDnPJMdZspf
        subject_person_id: p_9PcP1eVw2Xs1K2J2cm2szS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯日
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7oomgrLD3mcfEqMbzHbVuX
          claim_id: c_5ui3TZYv4oMaDnPJMdZspf
          source_id: s_rwsktfJxGf6xMQQTDf9V45
          stance: supports
          locator: CBDB:126715
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_LGK8kYtLH9s0xlOiiPAaAG
        subject_person_id: p_ETa8uEUn9yz81JQ8eP8GPX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9PcP1eVw2Xs1K2J2cm2szS
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VPfk1gsF7eL3ZeQxTlxe4D
          claim_id: c_LGK8kYtLH9s0xlOiiPAaAG
          source_id: s_55np26azUV2QxQy6R4V2oZ
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第二百零六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_55np26azUV2QxQy6R4V2oZ
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 301843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301843&o=json
            external_identifier: CBDB:301843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.639Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ETa8uEUn9yz81JQ8eP8GPX
        status: active
        display_name: 王紀
        merged_into_person_id: null
    - claim:
        id: c_LjFTvoe4EbNptC_FPgydQO
        subject_person_id: p_fNy995UU23sXA3mHLNxwHr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9PcP1eVw2Xs1K2J2cm2szS
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wv38QVnqy5THedIOtAraN1
          claim_id: c_LjFTvoe4EbNptC_FPgydQO
          source_id: s_ow16wbKimaQ6xpMhu3g9aK
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第二百零六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ow16wbKimaQ6xpMhu3g9aK
            source_type: api_record
            title: 中国历代人物传记资料库：王智（CBDB 301842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301842&o=json
            external_identifier: CBDB:301842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.639Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fNy995UU23sXA3mHLNxwHr
        status: active
        display_name: 王智
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_I7NzpjCha58Qkqvj8voMPe
        subject_person_id: p_9PcP1eVw2Xs1K2J2cm2szS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Ho4NaGcuriVoddi9GfsD62
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ct3eVUxXbdnajF0iIwAWYC
          claim_id: c_I7NzpjCha58Qkqvj8voMPe
          source_id: s_mVp-XloR-BcZhuScdJaNnH
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126715 王堯日）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mVp-XloR-BcZhuScdJaNnH
            source_type: api_record
            title: 中国历代人物传记资料库：王堯時（CBDB 301851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301851&o=json
            external_identifier: CBDB:301851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ho4NaGcuriVoddi9GfsD62
        status: active
        display_name: 王堯時
        merged_into_person_id: null
    - claim:
        id: c_4s0D9fKmkfhKifugbdNf93
        subject_person_id: p_9PcP1eVw2Xs1K2J2cm2szS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_n2iAZLE7BCf58ThDuUbMwY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rHVsiYKvXnX11FIPLbMd-n
          claim_id: c_4s0D9fKmkfhKifugbdNf93
          source_id: s_HVQf7paOj4u3Ufk_WC2K4i
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126715 王堯日）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HVQf7paOj4u3Ufk_WC2K4i
            source_type: api_record
            title: 中国历代人物传记资料库：王堯年（CBDB 301850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301850&o=json
            external_identifier: CBDB:301850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_n2iAZLE7BCf58ThDuUbMwY
        status: active
        display_name: 王堯年
        merged_into_person_id: null
    - claim:
        id: c_iSwP8mdfC2dl5Hq8jq5E_R
        subject_person_id: p_9PcP1eVw2Xs1K2J2cm2szS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nwJRPY9m5PVUYB86Wk7N9k
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v7gbgKe7ZV-Altfk8Mp_ee
          claim_id: c_iSwP8mdfC2dl5Hq8jq5E_R
          source_id: s_WMMPEo0HO6yBIHFelxQ_NJ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126715 王堯日）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WMMPEo0HO6yBIHFelxQ_NJ
            source_type: api_record
            title: 中国历代人物传记资料库：王堯節（CBDB 301853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301853&o=json
            external_identifier: CBDB:301853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nwJRPY9m5PVUYB86Wk7N9k
        status: active
        display_name: 王堯節
        merged_into_person_id: null
    - claim:
        id: c_9Uos9K--FQgJ42gZHcIyLk
        subject_person_id: p_9PcP1eVw2Xs1K2J2cm2szS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oZQKcV8AabqsEHxW8McX3a
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_89B_4rO-URbCgSoYM72xnW
          claim_id: c_9Uos9K--FQgJ42gZHcIyLk
          source_id: s_c-QFFR4CJIlvvt_T9ExY5o
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126715 王堯日）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_c-QFFR4CJIlvvt_T9ExY5o
            source_type: api_record
            title: 中国历代人物传记资料库：王堯臣（CBDB 301852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301852&o=json
            external_identifier: CBDB:301852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oZQKcV8AabqsEHxW8McX3a
        status: active
        display_name: 王堯臣
        merged_into_person_id: null
    - claim:
        id: c_b_wiU2rXQQk7dNPUNjXi_d
        subject_person_id: p_9PcP1eVw2Xs1K2J2cm2szS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_t9MH72fuW9TVKk8Dso6LP5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zV7Ep1onkBAR_hHintZPOa
          claim_id: c_b_wiU2rXQQk7dNPUNjXi_d
          source_id: s_yajHeU-ptFX74kyO7vCjSF
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126715 王堯日）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yajHeU-ptFX74kyO7vCjSF
            source_type: api_record
            title: 中国历代人物传记资料库：王堯春（CBDB 301849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301849&o=json
            external_identifier: CBDB:301849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_t9MH72fuW9TVKk8Dso6LP5
        status: active
        display_name: 王堯春
        merged_into_person_id: null
---

# 王堯日

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王堯日，明人物。籍贯鹿邑，入仕進士，曾任推官。（中国历代人物传记资料库 CBDB 126715） | accepted |
| name.primary | 王堯日 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_ETa8uEUn9yz81JQ8eP8GPX | 王紀 | accepted |
| ancestors | p_fNy995UU23sXA3mHLNxwHr | 王智 | accepted |
| other | p_Ho4NaGcuriVoddi9GfsD62 | 王堯時 | accepted |
| other | p_n2iAZLE7BCf58ThDuUbMwY | 王堯年 | accepted |
| other | p_nwJRPY9m5PVUYB86Wk7N9k | 王堯節 | accepted |
| other | p_oZQKcV8AabqsEHxW8McX3a | 王堯臣 | accepted |
| other | p_t9MH72fuW9TVKk8Dso6LP5 | 王堯春 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紀（CBDB 301843）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301843&o=json)
- [中国历代人物传记资料库：王堯臣（CBDB 301852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301852&o=json)
- [中国历代人物传记资料库：王堯春（CBDB 301849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301849&o=json)
- [中国历代人物传记资料库：王堯節（CBDB 301853）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301853&o=json)
- [中国历代人物传记资料库：王堯年（CBDB 301850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301850&o=json)
- [中国历代人物传记资料库：王堯日（CBDB 126715）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126715&o=json)
- [中国历代人物传记资料库：王堯時（CBDB 301851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301851&o=json)
- [中国历代人物传记资料库：王智（CBDB 301842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301842&o=json)
