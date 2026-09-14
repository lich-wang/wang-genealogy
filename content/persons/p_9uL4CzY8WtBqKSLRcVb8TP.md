---
schema: wang-person/v1
id: p_9uL4CzY8WtBqKSLRcVb8TP
status: active
merged_into: null
display_name: 王銳
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NWFPKCNhJNjGGnyxf4zwWC
        subject_person_id: p_9uL4CzY8WtBqKSLRcVb8TP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mb8w8MF7Bk7FP9yzajgJFA
          claim_id: c_NWFPKCNhJNjGGnyxf4zwWC
          source_id: s_YLAaNeVEveDrzsSbZWJD1r
          stance: supports
          locator: CBDB:202497
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202497）
          source: &a1
            id: s_YLAaNeVEveDrzsSbZWJD1r
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 202497）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202497&o=json
            external_identifier: CBDB:202497
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.744Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_A3F1e4dC3afDFgb4TQpcgM
        subject_person_id: p_9uL4CzY8WtBqKSLRcVb8TP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1490年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FQpgVgQUn3WHV9iFdoDPVa
          claim_id: c_A3F1e4dC3afDFgb4TQpcgM
          source_id: s_YLAaNeVEveDrzsSbZWJD1r
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
        id: c_6D3NmCBoTTSsLBkNomirWZ
        subject_person_id: p_9uL4CzY8WtBqKSLRcVb8TP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳（生于1490年），明人物。明清進士進士，籍贯信陽衛，入仕進士。（中国历代人物传记资料库 CBDB 202497）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_l9RtLqPIZoRSEA8bZH-SM1
          claim_id: c_6D3NmCBoTTSsLBkNomirWZ
          source_id: s_YLAaNeVEveDrzsSbZWJD1r
          stance: supports
          locator: CBDB:202497
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yGTd76_JNOr3ncLpqcl9at
        subject_person_id: p_J6vGZQ2XeYqBCDgqSMhjF4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9uL4CzY8WtBqKSLRcVb8TP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SDOK1P1G1GkIhSkAk9swor
          claim_id: c_yGTd76_JNOr3ncLpqcl9at
          source_id: s_YLAaNeVEveDrzsSbZWJD1r
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第七十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_J6vGZQ2XeYqBCDgqSMhjF4
        status: active
        display_name: 王虎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_tbVwEJ1dgVO_IOCNGx9hCz
        subject_person_id: p_9uL4CzY8WtBqKSLRcVb8TP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Gad2k716vZQqpDzRBx1f9z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__WU7ZrW3eXdAHbq8BzqVVH
          claim_id: c_tbVwEJ1dgVO_IOCNGx9hCz
          source_id: s_sMM9MsC1kqJp29gZyWqZwy
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第七十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sMM9MsC1kqJp29gZyWqZwy
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王銳妻)（CBDB 289106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289106&o=json
            external_identifier: CBDB:289106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Gad2k716vZQqpDzRBx1f9z
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_K0FATZp32lw_lt8-Rpy8h7
        subject_person_id: p_CKCFhcenmNXzf2AQ9a64SJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9uL4CzY8WtBqKSLRcVb8TP
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c7EG9g58Y1UiqnS1IJk1M4
          claim_id: c_K0FATZp32lw_lt8-Rpy8h7
          source_id: s_YLAaNeVEveDrzsSbZWJD1r
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第七十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CKCFhcenmNXzf2AQ9a64SJ
        status: active
        display_name: 王均
        merged_into_person_id: null
    - claim:
        id: c_aJZHQ9KcyCz1KHAVzuAEJT
        subject_person_id: p_Z8vCMLeNT2g5YmJFNkF61s
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9uL4CzY8WtBqKSLRcVb8TP
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xr-MbxSICs84SeClM4uOwA
          claim_id: c_aJZHQ9KcyCz1KHAVzuAEJT
          source_id: s_YLAaNeVEveDrzsSbZWJD1r
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第七十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Z8vCMLeNT2g5YmJFNkF61s
        status: active
        display_name: 王智
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_I2ex-No2-LKmYzNH9IeUSx
        subject_person_id: p_1EzGtciQSLScFhEaW9PEDN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9uL4CzY8WtBqKSLRcVb8TP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_giO7dMRq4MftCZncWehPT5
          claim_id: c_I2ex-No2-LKmYzNH9IeUSx
          source_id: s_rHBKXBJi6ex2B7MHPBttM5
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202497 王銳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rHBKXBJi6ex2B7MHPBttM5
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 289111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289111&o=json
            external_identifier: CBDB:289111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1EzGtciQSLScFhEaW9PEDN
        status: active
        display_name: 王欽
        merged_into_person_id: null
    - claim:
        id: c_J5Pp-Z_n77TpNZ_WEqbzH0
        subject_person_id: p_1KA5BPyWZ9rF3W6ZZb6AAu
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9uL4CzY8WtBqKSLRcVb8TP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vGfucBDlHltzds5ymOgpNB
          claim_id: c_J5Pp-Z_n77TpNZ_WEqbzH0
          source_id: s_3XFutn7gcGfUdiX2wC8jr7
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202497 王銳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3XFutn7gcGfUdiX2wC8jr7
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 289113）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289113&o=json
            external_identifier: CBDB:289113
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1KA5BPyWZ9rF3W6ZZb6AAu
        status: active
        display_name: 王鎬
        merged_into_person_id: null
    - claim:
        id: c_zgBJea6iN0iomaLTudthda
        subject_person_id: p_33ZUjDM98sTpJyFuwEB6kH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9uL4CzY8WtBqKSLRcVb8TP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lTqGao41uqoKPris3mDhbh
          claim_id: c_zgBJea6iN0iomaLTudthda
          source_id: s_75qfqMA5reVNvBOlKZNI-P
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202497 王銳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_75qfqMA5reVNvBOlKZNI-P
            source_type: api_record
            title: 中国历代人物传记资料库：王鑰（CBDB 289112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289112&o=json
            external_identifier: CBDB:289112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_33ZUjDM98sTpJyFuwEB6kH
        status: active
        display_name: 王鑰
        merged_into_person_id: null
    - claim:
        id: c_ZeO05NA3vktHztFGdwt1oz
        subject_person_id: p_9uL4CzY8WtBqKSLRcVb8TP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EcZ8K3NpsAyZJ1itBhH1Uh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AuP9LXfdqU3zCQ542T9A8D
          claim_id: c_ZeO05NA3vktHztFGdwt1oz
          source_id: s_KP1nMpGoUo_b6XAi9f6-pR
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202497 王銳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KP1nMpGoUo_b6XAi9f6-pR
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 289110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289110&o=json
            external_identifier: CBDB:289110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EcZ8K3NpsAyZJ1itBhH1Uh
        status: active
        display_name: 王鎮
        merged_into_person_id: null
    - claim:
        id: c_lhx55WY1H0e9Sac7EbSTRT
        subject_person_id: p_9uL4CzY8WtBqKSLRcVb8TP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_c9HasGQAJcZL79pSwEnjNd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mit5vyEvsp6jWaemEWzbks
          claim_id: c_lhx55WY1H0e9Sac7EbSTRT
          source_id: s_lcgnBn09oIDRnGz2UJCQZ6
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202497 王銳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lcgnBn09oIDRnGz2UJCQZ6
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 289108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289108&o=json
            external_identifier: CBDB:289108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_c9HasGQAJcZL79pSwEnjNd
        status: active
        display_name: 王鑑
        merged_into_person_id: null
---

# 王銳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銳 | accepted |
| birth.date | 1490年 | accepted |
| bio.summary | 王銳（生于1490年），明人物。明清進士進士，籍贯信陽衛，入仕進士。（中国历代人物传记资料库 CBDB 202497） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_J6vGZQ2XeYqBCDgqSMhjF4 | 王虎 | accepted |
| spouses | p_Gad2k716vZQqpDzRBx1f9z | 張氏 | accepted |
| ancestors | p_CKCFhcenmNXzf2AQ9a64SJ | 王均 | accepted |
| ancestors | p_Z8vCMLeNT2g5YmJFNkF61s | 王智 | accepted |
| other | p_1EzGtciQSLScFhEaW9PEDN | 王欽 | accepted |
| other | p_1KA5BPyWZ9rF3W6ZZb6AAu | 王鎬 | accepted |
| other | p_33ZUjDM98sTpJyFuwEB6kH | 王鑰 | accepted |
| other | p_EcZ8K3NpsAyZJ1itBhH1Uh | 王鎮 | accepted |
| other | p_c9HasGQAJcZL79pSwEnjNd | 王鑑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎬（CBDB 289113）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289113&o=json)
- [中国历代人物传记资料库：王鑑（CBDB 289108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289108&o=json)
- [中国历代人物传记资料库：王欽（CBDB 289111）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289111&o=json)
- [中国历代人物传记资料库：王銳（CBDB 202497）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202497&o=json)
- [中国历代人物传记资料库：王鑰（CBDB 289112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289112&o=json)
- [中国历代人物传记资料库：王鎮（CBDB 289110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289110&o=json)
- [中国历代人物传记资料库：張氏(王銳妻)（CBDB 289106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=289106&o=json)
