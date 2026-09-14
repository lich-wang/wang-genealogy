---
schema: wang-person/v1
id: p_U7JNj2nXJh2KN7f9tg3Czd
status: active
merged_into: null
display_name: 王學柳
cbdb_id: 203329
revision: 10
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8FK9sS4JktxUCAUaZTQP9w
        subject_person_id: p_U7JNj2nXJh2KN7f9tg3Czd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學柳（生于1505年），明人物。明清進士進士，籍贯澤州，入仕進士。（中国历代人物传记资料库 CBDB 203329）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_gO5Fvxf_EDcSJoZ625ZIkB
          claim_id: c_8FK9sS4JktxUCAUaZTQP9w
          source_id: s_E1mV2Lyv3qKVumDfDCia8R
          stance: supports
          locator: CBDB:203329
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_E1mV2Lyv3qKVumDfDCia8R
            source_type: api_record
            title: 中国历代人物传记资料库：王學柳（CBDB 203329）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203329&o=json
            external_identifier: CBDB:203329
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_TShGkWZ3KyHvSJGBdE8PEF
        subject_person_id: p_U7JNj2nXJh2KN7f9tg3Czd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1505年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1505-01-01
            latest: 1505-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JgjtH5o4pNjYu3ovY8rAnA
          claim_id: c_TShGkWZ3KyHvSJGBdE8PEF
          source_id: s_E1mV2Lyv3qKVumDfDCia8R
          stance: supports
          locator: CBDB:203329
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1505
          source:
            id: s_E1mV2Lyv3qKVumDfDCia8R
            source_type: api_record
            title: 中国历代人物传记资料库：王學柳（CBDB 203329）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203329&o=json
            external_identifier: CBDB:203329
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7nN8TUgGHxW1yxY71Z9e7z
        subject_person_id: p_U7JNj2nXJh2KN7f9tg3Czd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學柳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nr6RrAC5vcMVHZWU7nwn7E
          claim_id: c_7nN8TUgGHxW1yxY71Z9e7z
          source_id: s_E1mV2Lyv3qKVumDfDCia8R
          stance: supports
          locator: CBDB:203329
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1505
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Qx9Sp0Hf81seqfTTxuy0VW
        subject_person_id: p_xnVNk7Yn6e863HGsnbGHpw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_U7JNj2nXJh2KN7f9tg3Czd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R66lxO4RIt-IQB_-bv4WTk
          claim_id: c_Qx9Sp0Hf81seqfTTxuy0VW
          source_id: s_qNaDCfmQnvJunyf2HgH913
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qNaDCfmQnvJunyf2HgH913
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 303176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303176&o=json
            external_identifier: CBDB:303176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.676Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xnVNk7Yn6e863HGsnbGHpw
        status: active
        display_name: 王相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_-f5hJczdAc0LjjpKLkUKxX
        subject_person_id: p_8soDsxuD7vc2FJ5LWfkDHD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_U7JNj2nXJh2KN7f9tg3Czd
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lNFIEoaIu_LgoL0SIAUv7n
          claim_id: c_-f5hJczdAc0LjjpKLkUKxX
          source_id: s_CCstDy9U9WGRsgjywfu9M8
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CCstDy9U9WGRsgjywfu9M8
            source_type: api_record
            title: 中国历代人物传记资料库：王進（CBDB 303174）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303174&o=json
            external_identifier: CBDB:303174
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.675Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8soDsxuD7vc2FJ5LWfkDHD
        status: active
        display_name: 王進
        merged_into_person_id: null
    - claim:
        id: c_kK8KtJd7SU7JScennrL5wL
        subject_person_id: p_vFLWfzBg9b8Q6PZLkFhwVr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_U7JNj2nXJh2KN7f9tg3Czd
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e5KfJAhnTsFeW90dvdnDKI
          claim_id: c_kK8KtJd7SU7JScennrL5wL
          source_id: s_TXgks3sAWAAsH3ZjmG1yEG
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TXgks3sAWAAsH3ZjmG1yEG
            source_type: api_record
            title: 中国历代人物传记资料库：王原（CBDB 303175）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303175&o=json
            external_identifier: CBDB:303175
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.675Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vFLWfzBg9b8Q6PZLkFhwVr
        status: active
        display_name: 王原
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_BrXgSoVc3qeX14ycysgPko
        subject_person_id: p_44KAP5Fb5E2otJ3zj8FAG8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_U7JNj2nXJh2KN7f9tg3Czd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FbkMEhvQRL6tFE5_qh_HL_
          claim_id: c_BrXgSoVc3qeX14ycysgPko
          source_id: s_0EDjuPF0MS3aQ_Z-EUJpr6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203329 王學柳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0EDjuPF0MS3aQ_Z-EUJpr6
            source_type: api_record
            title: 中国历代人物传记资料库：王學蘇（CBDB 303182）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303182&o=json
            external_identifier: CBDB:303182
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_44KAP5Fb5E2otJ3zj8FAG8
        status: active
        display_name: 王學蘇
        merged_into_person_id: null
    - claim:
        id: c_yV8QqpUGQWLUuKouGj9MgL
        subject_person_id: p_Rfnk7QJ1hjkREGbsjm5ALY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_U7JNj2nXJh2KN7f9tg3Czd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AxQfQqk_Xts0aw06Ins4Vh
          claim_id: c_yV8QqpUGQWLUuKouGj9MgL
          source_id: s_LiX8t7vAudH8QsxSfUnvR6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203329 王學柳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_LiX8t7vAudH8QsxSfUnvR6
            source_type: api_record
            title: 中国历代人物传记资料库：王學召（CBDB 303184）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303184&o=json
            external_identifier: CBDB:303184
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Rfnk7QJ1hjkREGbsjm5ALY
        status: active
        display_name: 王學召
        merged_into_person_id: null
    - claim:
        id: c_f-3Py1jpzZJjqjEXr2a2yQ
        subject_person_id: p_TcEgoCK92NB84dZ85NVqLx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_U7JNj2nXJh2KN7f9tg3Czd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9veLsvUX6E_FF9fxqKWhMi
          claim_id: c_f-3Py1jpzZJjqjEXr2a2yQ
          source_id: s_im7g2HnV-UHUt7S6IguDX3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203329 王學柳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_im7g2HnV-UHUt7S6IguDX3
            source_type: api_record
            title: 中国历代人物传记资料库：王學歐（CBDB 303180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303180&o=json
            external_identifier: CBDB:303180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TcEgoCK92NB84dZ85NVqLx
        status: active
        display_name: 王學歐
        merged_into_person_id: null
    - claim:
        id: c_IHiRbGSSjIUYc9bE6HA8K8
        subject_person_id: p_U7JNj2nXJh2KN7f9tg3Czd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XMZWa26MMC6LxMpQ7MWtzL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FAnYlYoQmKBupVO1Vj4tkZ
          claim_id: c_IHiRbGSSjIUYc9bE6HA8K8
          source_id: s_23p0juV1A8QC5aIrRU67SB
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203329 王學柳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_23p0juV1A8QC5aIrRU67SB
            source_type: api_record
            title: 中国历代人物传记资料库：王學周（CBDB 303183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303183&o=json
            external_identifier: CBDB:303183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XMZWa26MMC6LxMpQ7MWtzL
        status: active
        display_name: 王學周
        merged_into_person_id: null
    - claim:
        id: c_JR0Ad-iyWcAzUkhxsNUCKX
        subject_person_id: p_U7JNj2nXJh2KN7f9tg3Czd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XgL2sfSoL9QfrcNrDCpzew
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_78gI1tKvw7tWp4wX399XmM
          claim_id: c_JR0Ad-iyWcAzUkhxsNUCKX
          source_id: s_zyNSUOPhscSQdINM7953E_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203329 王學柳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zyNSUOPhscSQdINM7953E_
            source_type: api_record
            title: 中国历代人物传记资料库：王學曾（CBDB 303185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303185&o=json
            external_identifier: CBDB:303185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XgL2sfSoL9QfrcNrDCpzew
        status: active
        display_name: 王學曾
        merged_into_person_id: null
    - claim:
        id: c_EReL0yxj1kPDv1RNjN0-o2
        subject_person_id: p_U7JNj2nXJh2KN7f9tg3Czd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gxH82HCdGJ63PfR4sqqsLs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kvbzYNpR_C6lg-hhX-4h0Q
          claim_id: c_EReL0yxj1kPDv1RNjN0-o2
          source_id: s_IJz3PLQYaBUEVf-OU6tGgG
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203329 王學柳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IJz3PLQYaBUEVf-OU6tGgG
            source_type: api_record
            title: 中国历代人物传记资料库：王學韓（CBDB 303179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303179&o=json
            external_identifier: CBDB:303179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gxH82HCdGJ63PfR4sqqsLs
        status: active
        display_name: 王學韓
        merged_into_person_id: null
---

# 王學柳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王學柳（生于1505年），明人物。明清進士進士，籍贯澤州，入仕進士。（中国历代人物传记资料库 CBDB 203329） | accepted |
| birth.date | 1505年 | accepted |
| name.primary | 王學柳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xnVNk7Yn6e863HGsnbGHpw | 王相 | accepted |
| ancestors | p_8soDsxuD7vc2FJ5LWfkDHD | 王進 | accepted |
| ancestors | p_vFLWfzBg9b8Q6PZLkFhwVr | 王原 | accepted |
| other | p_44KAP5Fb5E2otJ3zj8FAG8 | 王學蘇 | accepted |
| other | p_Rfnk7QJ1hjkREGbsjm5ALY | 王學召 | accepted |
| other | p_TcEgoCK92NB84dZ85NVqLx | 王學歐 | accepted |
| other | p_XMZWa26MMC6LxMpQ7MWtzL | 王學周 | accepted |
| other | p_XgL2sfSoL9QfrcNrDCpzew | 王學曾 | accepted |
| other | p_gxH82HCdGJ63PfR4sqqsLs | 王學韓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王進（CBDB 303174）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303174&o=json)
- [中国历代人物传记资料库：王相（CBDB 303176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303176&o=json)
- [中国历代人物传记资料库：王學曾（CBDB 303185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303185&o=json)
- [中国历代人物传记资料库：王學韓（CBDB 303179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303179&o=json)
- [中国历代人物传记资料库：王學柳（CBDB 203329）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203329&o=json)
- [中国历代人物传记资料库：王學歐（CBDB 303180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303180&o=json)
- [中国历代人物传记资料库：王學蘇（CBDB 303182）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303182&o=json)
- [中国历代人物传记资料库：王學召（CBDB 303184）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303184&o=json)
- [中国历代人物传记资料库：王學周（CBDB 303183）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303183&o=json)
- [中国历代人物传记资料库：王原（CBDB 303175）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303175&o=json)
