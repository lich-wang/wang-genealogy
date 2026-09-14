---
schema: wang-person/v1
id: p_Z6vCWYnkMUoH1H52LSJS5y
status: active
merged_into: null
display_name: 王俸
revision: 12
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5bee7XmTfuuiczJnZjCf37
        subject_person_id: p_Z6vCWYnkMUoH1H52LSJS5y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ceoD3XqLd1HU6sexpfPxun
          claim_id: c_5bee7XmTfuuiczJnZjCf37
          source_id: s_6K74T1tyQaEKKN5CtCjLJ7
          stance: supports
          locator: CBDB:203437
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203437）
          source: &a1
            id: s_6K74T1tyQaEKKN5CtCjLJ7
            source_type: api_record
            title: 中国历代人物传记资料库：王俸（CBDB 203437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203437&o=json
            external_identifier: CBDB:203437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.786Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_bJ2M1g6dx6g36JMDsrZN1b
        subject_person_id: p_Z6vCWYnkMUoH1H52LSJS5y
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1515年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t4FJgcrZEM842L5Qc34QBt
          claim_id: c_bJ2M1g6dx6g36JMDsrZN1b
          source_id: s_6K74T1tyQaEKKN5CtCjLJ7
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
        id: c_x98L2LYkU9kvQmFM3xrssP
        subject_person_id: p_Z6vCWYnkMUoH1H52LSJS5y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俸（生于1515年），明人物。嘉靖二十年進士，籍贯宿州，入仕進士。（中国历代人物传记资料库 CBDB 203437）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Cg5qubN5BnPMfuPXG5KOVy
          claim_id: c_x98L2LYkU9kvQmFM3xrssP
          source_id: s_6K74T1tyQaEKKN5CtCjLJ7
          stance: supports
          locator: CBDB:203437
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_N4f5w6qE-csJzv_mqoMhbv
        subject_person_id: p_1vXBcYgVQiVxBH61v91xXQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z6vCWYnkMUoH1H52LSJS5y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LI2grqW6rhQH6tKv1bdAjA
          claim_id: c_N4f5w6qE-csJzv_mqoMhbv
          source_id: s_LCWsS3btiTdj2aM5MXxBoq
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百五十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LCWsS3btiTdj2aM5MXxBoq
            source_type: api_record
            title: 中国历代人物传记资料库：王廉（CBDB 304722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304722&o=json
            external_identifier: CBDB:304722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.727Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1vXBcYgVQiVxBH61v91xXQ
        status: active
        display_name: 王廉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_CKXjNBXEFxa_GIt5m32zIg
        subject_person_id: p_B9MBDhzV1N8hQ37qMA9DB5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Z6vCWYnkMUoH1H52LSJS5y
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u3vm3lO_9zP_hhfuPb8RI_
          claim_id: c_CKXjNBXEFxa_GIt5m32zIg
          source_id: s_oe7B5Gw6ApPt7ZhUTRzoV5
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百五十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oe7B5Gw6ApPt7ZhUTRzoV5
            source_type: api_record
            title: 中国历代人物传记资料库：王埜（CBDB 304721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304721&o=json
            external_identifier: CBDB:304721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.727Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_B9MBDhzV1N8hQ37qMA9DB5
        status: active
        display_name: 王埜
        merged_into_person_id: null
    - claim:
        id: c_n0V3yXg0QVJ_NZcfz4DDtU
        subject_person_id: p_xH9SLCYpqBrjCXHYBnFfAY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Z6vCWYnkMUoH1H52LSJS5y
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I2Pi-1IfiR1s2_QmLrGwS0
          claim_id: c_n0V3yXg0QVJ_NZcfz4DDtU
          source_id: s_1T4KroKndFrf38D2c2MAUA
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第一百五十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1T4KroKndFrf38D2c2MAUA
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 304720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304720&o=json
            external_identifier: CBDB:304720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.726Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xH9SLCYpqBrjCXHYBnFfAY
        status: active
        display_name: 王澤
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_E-XWnzuHcExzyMS9vvk5vq
        subject_person_id: p_37YctnLjYvAXFedpxMFvr1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Z6vCWYnkMUoH1H52LSJS5y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WRYbsvzdcyWdAVr2yqH4vo
          claim_id: c_E-XWnzuHcExzyMS9vvk5vq
          source_id: s_B4InzFC6CVZ5DT3HRTbpw3
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203437 王俸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_B4InzFC6CVZ5DT3HRTbpw3
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 304727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304727&o=json
            external_identifier: CBDB:304727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_37YctnLjYvAXFedpxMFvr1
        status: active
        display_name: 王儒
        merged_into_person_id: null
    - claim:
        id: c_ftHbVmelZXSax2P2z4p25m
        subject_person_id: p_5CYSbLcrhUroKmDmuaFhCJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Z6vCWYnkMUoH1H52LSJS5y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cEGgjgdXQLPqnyfMshgvvN
          claim_id: c_ftHbVmelZXSax2P2z4p25m
          source_id: s_2ZgfdYsGlfTYoXo6xff5Vl
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203437 王俸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2ZgfdYsGlfTYoXo6xff5Vl
            source_type: api_record
            title: 中国历代人物传记资料库：王佶（CBDB 304729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304729&o=json
            external_identifier: CBDB:304729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5CYSbLcrhUroKmDmuaFhCJ
        status: active
        display_name: 王佶
        merged_into_person_id: null
    - claim:
        id: c_NBoRWmCgWHPTzlgaYq2dmX
        subject_person_id: p_Bzj2a8hKNQx4JMEGjEBMNh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Z6vCWYnkMUoH1H52LSJS5y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0Os-pvW1P62t6jsQJrMB4v
          claim_id: c_NBoRWmCgWHPTzlgaYq2dmX
          source_id: s_jxFV9atsVLJ6yzI3y4PcjL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203437 王俸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jxFV9atsVLJ6yzI3y4PcjL
            source_type: api_record
            title: 中国历代人物传记资料库：王仲（CBDB 304733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304733&o=json
            external_identifier: CBDB:304733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Bzj2a8hKNQx4JMEGjEBMNh
        status: active
        display_name: 王仲
        merged_into_person_id: null
    - claim:
        id: c_k4iK0FesvFyMqAfKE6-I2L
        subject_person_id: p_Krk9KgADV1VDvSxNzrf8pY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Z6vCWYnkMUoH1H52LSJS5y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vRDNbin0j6YVVfpC-C5G2V
          claim_id: c_k4iK0FesvFyMqAfKE6-I2L
          source_id: s_EQQ4gfoJ12jxJUemjraw67
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203437 王俸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EQQ4gfoJ12jxJUemjraw67
            source_type: api_record
            title: 中国历代人物传记资料库：王化（CBDB 304728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304728&o=json
            external_identifier: CBDB:304728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Krk9KgADV1VDvSxNzrf8pY
        status: active
        display_name: 王化
        merged_into_person_id: null
    - claim:
        id: c_wcRyxL5enTDUuGtcVG_2k-
        subject_person_id: p_V15WZryB1Do7iJ8HXNmG4K
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Z6vCWYnkMUoH1H52LSJS5y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hpWUX0CyzBJVPS43Q5TPMX
          claim_id: c_wcRyxL5enTDUuGtcVG_2k-
          source_id: s_-wcQ-jwjOs2mLk3aSmwckz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203437 王俸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-wcQ-jwjOs2mLk3aSmwckz
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 304732）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304732&o=json
            external_identifier: CBDB:304732
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V15WZryB1Do7iJ8HXNmG4K
        status: active
        display_name: 王俊
        merged_into_person_id: null
    - claim:
        id: c_OYp1rCfMkEL-Zv__vKcThv
        subject_person_id: p_XriFRwbMuazo6ZKheezBNi
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Z6vCWYnkMUoH1H52LSJS5y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HoUFzl312fdTn3HV5sMiRj
          claim_id: c_OYp1rCfMkEL-Zv__vKcThv
          source_id: s_gITyUh5CrZIeMRfMAndVM4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203437 王俸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gITyUh5CrZIeMRfMAndVM4
            source_type: api_record
            title: 中国历代人物传记资料库：王佃（CBDB 304730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304730&o=json
            external_identifier: CBDB:304730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XriFRwbMuazo6ZKheezBNi
        status: active
        display_name: 王佃
        merged_into_person_id: null
    - claim:
        id: c_p_1nZ-CuN1mlUymSsO4nXO
        subject_person_id: p_Z6vCWYnkMUoH1H52LSJS5y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_atUCs7ZH7FNCtL52HJnWN8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5DPaqwoBYEBtN1cjpRklDh
          claim_id: c_p_1nZ-CuN1mlUymSsO4nXO
          source_id: s_Nqn1LtIQvft_ZyP_q9awsR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203437 王俸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Nqn1LtIQvft_ZyP_q9awsR
            source_type: api_record
            title: 中国历代人物传记资料库：王儀（CBDB 304731）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304731&o=json
            external_identifier: CBDB:304731
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_atUCs7ZH7FNCtL52HJnWN8
        status: active
        display_name: 王儀
        merged_into_person_id: null
    - claim:
        id: c_utgWDRyHw55R-n3i829ln1
        subject_person_id: p_Z6vCWYnkMUoH1H52LSJS5y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_h2qiA12QTpUJHWVpf23KM6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L0IimjoMopGp9W35hVdDWW
          claim_id: c_utgWDRyHw55R-n3i829ln1
          source_id: s_6Wbf463YvADn6GdG4Xpaof
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203437 王俸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6Wbf463YvADn6GdG4Xpaof
            source_type: api_record
            title: 中国历代人物传记资料库：王佩（CBDB 304734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304734&o=json
            external_identifier: CBDB:304734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_h2qiA12QTpUJHWVpf23KM6
        status: active
        display_name: 王佩
        merged_into_person_id: null
---

# 王俸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俸 | accepted |
| birth.date | 1515年 | accepted |
| bio.summary | 王俸（生于1515年），明人物。嘉靖二十年進士，籍贯宿州，入仕進士。（中国历代人物传记资料库 CBDB 203437） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1vXBcYgVQiVxBH61v91xXQ | 王廉 | accepted |
| ancestors | p_B9MBDhzV1N8hQ37qMA9DB5 | 王埜 | accepted |
| ancestors | p_xH9SLCYpqBrjCXHYBnFfAY | 王澤 | accepted |
| other | p_37YctnLjYvAXFedpxMFvr1 | 王儒 | accepted |
| other | p_5CYSbLcrhUroKmDmuaFhCJ | 王佶 | accepted |
| other | p_Bzj2a8hKNQx4JMEGjEBMNh | 王仲 | accepted |
| other | p_Krk9KgADV1VDvSxNzrf8pY | 王化 | accepted |
| other | p_V15WZryB1Do7iJ8HXNmG4K | 王俊 | accepted |
| other | p_XriFRwbMuazo6ZKheezBNi | 王佃 | accepted |
| other | p_atUCs7ZH7FNCtL52HJnWN8 | 王儀 | accepted |
| other | p_h2qiA12QTpUJHWVpf23KM6 | 王佩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佃（CBDB 304730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304730&o=json)
- [中国历代人物传记资料库：王俸（CBDB 203437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203437&o=json)
- [中国历代人物传记资料库：王化（CBDB 304728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304728&o=json)
- [中国历代人物传记资料库：王佶（CBDB 304729）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304729&o=json)
- [中国历代人物传记资料库：王俊（CBDB 304732）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304732&o=json)
- [中国历代人物传记资料库：王廉（CBDB 304722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304722&o=json)
- [中国历代人物传记资料库：王佩（CBDB 304734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304734&o=json)
- [中国历代人物传记资料库：王儒（CBDB 304727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304727&o=json)
- [中国历代人物传记资料库：王埜（CBDB 304721）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304721&o=json)
- [中国历代人物传记资料库：王儀（CBDB 304731）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304731&o=json)
- [中国历代人物传记资料库：王澤（CBDB 304720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304720&o=json)
- [中国历代人物传记资料库：王仲（CBDB 304733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304733&o=json)
