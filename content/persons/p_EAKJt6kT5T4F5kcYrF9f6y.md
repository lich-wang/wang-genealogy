---
schema: wang-person/v1
id: p_EAKJt6kT5T4F5kcYrF9f6y
status: active
merged_into: null
display_name: 王玠
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K4vm1DqRe5LQNRG9R4YWk3
        subject_person_id: p_EAKJt6kT5T4F5kcYrF9f6y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4yJU7oL4qgYHrY26QDW5ai
          claim_id: c_K4vm1DqRe5LQNRG9R4YWk3
          source_id: s_E7fmERZ3ZZxhpPFgkGCR6q
          stance: supports
          locator: CBDB:207286
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207286）
          source: &a1
            id: s_E7fmERZ3ZZxhpPFgkGCR6q
            source_type: api_record
            title: 中国历代人物传记资料库：王玠（CBDB 207286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207286&o=json
            external_identifier: CBDB:207286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RDBvjwWRZ8wLW215NLejQ1
        subject_person_id: p_EAKJt6kT5T4F5kcYrF9f6y
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1561年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EbK5Kc23aE3mgcs9EwNXUu
          claim_id: c_RDBvjwWRZ8wLW215NLejQ1
          source_id: s_E7fmERZ3ZZxhpPFgkGCR6q
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
        id: c_kMWH2jSMTN71UaAxDEMSFL
        subject_person_id: p_EAKJt6kT5T4F5kcYrF9f6y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玠（生于1561年），明人物。萬曆丙戌科進士進士，籍贯清遠，入仕進士。（中国历代人物传记资料库 CBDB 207286）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZWoXtBOH4PwIj2nEeRjhcA
          claim_id: c_kMWH2jSMTN71UaAxDEMSFL
          source_id: s_E7fmERZ3ZZxhpPFgkGCR6q
          stance: supports
          locator: CBDB:207286
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yqVBxl6TKrbhv9mN-6Mxrw
        subject_person_id: p_6tdTGr8WHYZiKQmeHZ5QVe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EAKJt6kT5T4F5kcYrF9f6y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H8UDji4tvPsw1D6PXfr_J8
          claim_id: c_yqVBxl6TKrbhv9mN-6Mxrw
          source_id: s_jj2yA4oddQ1UkNSUdd2TXN
          stance: supports
          locator: 萬曆丙戌科進士同年總錄：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jj2yA4oddQ1UkNSUdd2TXN
            source_type: api_record
            title: 中国历代人物传记资料库：王宗源（CBDB 230874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230874&o=json
            external_identifier: CBDB:230874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.624Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6tdTGr8WHYZiKQmeHZ5QVe
        status: active
        display_name: 王宗源
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_V1BDeFlFMX5KnmvxIiq78q
        subject_person_id: p_1BUERPSE2qTiZp6JCwdvN5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EAKJt6kT5T4F5kcYrF9f6y
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cR1Ib8dkcFxX8p4quM4lIq
          claim_id: c_V1BDeFlFMX5KnmvxIiq78q
          source_id: s_i387Vtc8AvgYW6GnRdVjnc
          stance: supports
          locator: 萬曆丙戌科進士同年總錄：曾孫；重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_i387Vtc8AvgYW6GnRdVjnc
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 230872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230872&o=json
            external_identifier: CBDB:230872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.622Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1BUERPSE2qTiZp6JCwdvN5
        status: active
        display_name: 王忠
        merged_into_person_id: null
    - claim:
        id: c_2PcLuDTFA5LHTKfK9OYINh
        subject_person_id: p_npDFcKuVKUC3tBNbjizFd3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_EAKJt6kT5T4F5kcYrF9f6y
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Sn8EvxsB-nWd9VMCHYhqo6
          claim_id: c_2PcLuDTFA5LHTKfK9OYINh
          source_id: s_GfbeE73Cd6cjXZ8D87LduE
          stance: supports
          locator: 萬曆丙戌科進士同年總錄：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GfbeE73Cd6cjXZ8D87LduE
            source_type: api_record
            title: 中国历代人物传记资料库：王高（CBDB 230873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230873&o=json
            external_identifier: CBDB:230873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.623Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_npDFcKuVKUC3tBNbjizFd3
        status: active
        display_name: 王高
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_wZT-QQLIT1b39uDSAI99Su
        subject_person_id: p_EAKJt6kT5T4F5kcYrF9f6y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EXL3GbHFSwjHzEdLSaJPU1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JasWLtOtiqkDfweArFTAsH
          claim_id: c_wZT-QQLIT1b39uDSAI99Su
          source_id: s_oTRnWioMQ9gznlsh9_pYox
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207286 王玠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oTRnWioMQ9gznlsh9_pYox
            source_type: api_record
            title: 中国历代人物传记资料库：王瑚（CBDB 230879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230879&o=json
            external_identifier: CBDB:230879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EXL3GbHFSwjHzEdLSaJPU1
        status: active
        display_name: 王瑚
        merged_into_person_id: null
    - claim:
        id: c_36iSPzdtzHHw4OoeCkBPgX
        subject_person_id: p_EAKJt6kT5T4F5kcYrF9f6y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FxvRZqGsncHQZPb3N2sJP6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CN9ZI8Rrfj-y-bxQDfwGZF
          claim_id: c_36iSPzdtzHHw4OoeCkBPgX
          source_id: s_OoTN-6CFQ5-5RBjuaIYskY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207286 王玠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OoTN-6CFQ5-5RBjuaIYskY
            source_type: api_record
            title: 中国历代人物传记资料库：王球（CBDB 230884）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230884&o=json
            external_identifier: CBDB:230884
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FxvRZqGsncHQZPb3N2sJP6
        status: active
        display_name: 王球
        merged_into_person_id: null
    - claim:
        id: c_w_02jMWyFhlSoRPqf7Bjqk
        subject_person_id: p_EAKJt6kT5T4F5kcYrF9f6y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GBexWpRG714qmm2J7TtZqA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tl1PO9Y0WDuUEfAfpebHTh
          claim_id: c_w_02jMWyFhlSoRPqf7Bjqk
          source_id: s_68TSNj5rXumEMrlY-QIRbZ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207286 王玠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_68TSNj5rXumEMrlY-QIRbZ
            source_type: api_record
            title: 中国历代人物传记资料库：王璞（CBDB 230882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230882&o=json
            external_identifier: CBDB:230882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GBexWpRG714qmm2J7TtZqA
        status: active
        display_name: 王璞
        merged_into_person_id: null
    - claim:
        id: c_XB8tvl3XrNLKrtdToCevOC
        subject_person_id: p_EAKJt6kT5T4F5kcYrF9f6y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fmYNxtA1MNbhpBqp19EFLD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pfj30V3kKKCw4dcVCRninF
          claim_id: c_XB8tvl3XrNLKrtdToCevOC
          source_id: s_UrLkMrsypu_H9CSOSFYmYd
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207286 王玠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UrLkMrsypu_H9CSOSFYmYd
            source_type: api_record
            title: 中国历代人物传记资料库：王玘（CBDB 230880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230880&o=json
            external_identifier: CBDB:230880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fmYNxtA1MNbhpBqp19EFLD
        status: active
        display_name: 王玘
        merged_into_person_id: null
    - claim:
        id: c_JX4y_C9cVVy0vXVI1sT8Rw
        subject_person_id: p_EAKJt6kT5T4F5kcYrF9f6y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jcSR28HVc1YdUmWB2uemAX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ai-j3CvOZCX9LM2K34IwLy
          claim_id: c_JX4y_C9cVVy0vXVI1sT8Rw
          source_id: s_XC1t6F5ot4bPlFdz-h8Iu1
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207286 王玠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XC1t6F5ot4bPlFdz-h8Iu1
            source_type: api_record
            title: 中国历代人物传记资料库：王瑺（CBDB 230881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230881&o=json
            external_identifier: CBDB:230881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jcSR28HVc1YdUmWB2uemAX
        status: active
        display_name: 王瑺
        merged_into_person_id: null
    - claim:
        id: c_ecg0RPUm1nlPJ9KBRyMP5a
        subject_person_id: p_EAKJt6kT5T4F5kcYrF9f6y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xNuBMveoJNbM9ZvyqDs2xz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lP_dcAZfmYQ59O-8egO-1X
          claim_id: c_ecg0RPUm1nlPJ9KBRyMP5a
          source_id: s_KJZaovp98zd5ZUWdAH6Owz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207286 王玠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KJZaovp98zd5ZUWdAH6Owz
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 230883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230883&o=json
            external_identifier: CBDB:230883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xNuBMveoJNbM9ZvyqDs2xz
        status: active
        display_name: 王瓚
        merged_into_person_id: null
---

# 王玠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玠 | accepted |
| birth.date | 1561年 | accepted |
| bio.summary | 王玠（生于1561年），明人物。萬曆丙戌科進士進士，籍贯清遠，入仕進士。（中国历代人物传记资料库 CBDB 207286） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6tdTGr8WHYZiKQmeHZ5QVe | 王宗源 | accepted |
| ancestors | p_1BUERPSE2qTiZp6JCwdvN5 | 王忠 | accepted |
| ancestors | p_npDFcKuVKUC3tBNbjizFd3 | 王高 | accepted |
| other | p_EXL3GbHFSwjHzEdLSaJPU1 | 王瑚 | accepted |
| other | p_FxvRZqGsncHQZPb3N2sJP6 | 王球 | accepted |
| other | p_GBexWpRG714qmm2J7TtZqA | 王璞 | accepted |
| other | p_fmYNxtA1MNbhpBqp19EFLD | 王玘 | accepted |
| other | p_jcSR28HVc1YdUmWB2uemAX | 王瑺 | accepted |
| other | p_xNuBMveoJNbM9ZvyqDs2xz | 王瓚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑺（CBDB 230881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230881&o=json)
- [中国历代人物传记资料库：王高（CBDB 230873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230873&o=json)
- [中国历代人物传记资料库：王瑚（CBDB 230879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230879&o=json)
- [中国历代人物传记资料库：王玠（CBDB 207286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207286&o=json)
- [中国历代人物传记资料库：王璞（CBDB 230882）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230882&o=json)
- [中国历代人物传记资料库：王玘（CBDB 230880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230880&o=json)
- [中国历代人物传记资料库：王球（CBDB 230884）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230884&o=json)
- [中国历代人物传记资料库：王瓚（CBDB 230883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230883&o=json)
- [中国历代人物传记资料库：王忠（CBDB 230872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230872&o=json)
- [中国历代人物传记资料库：王宗源（CBDB 230874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230874&o=json)
