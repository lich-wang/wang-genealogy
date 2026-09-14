---
schema: wang-person/v1
id: p_JEUpyam7C1Pm8JC9r4xGZ3
status: active
merged_into: null
display_name: 王舉
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EdjKzi41rMB2JuACr8UFUL
        subject_person_id: p_JEUpyam7C1Pm8JC9r4xGZ3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_U37YAxph9GN1J77354e4g6
          claim_id: c_EdjKzi41rMB2JuACr8UFUL
          source_id: s_L6P7ygH343rxMdn3XqKfCG
          stance: supports
          locator: CBDB:199783
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199783）
          source: &a1
            id: s_L6P7ygH343rxMdn3XqKfCG
            source_type: api_record
            title: 中国历代人物传记资料库：王舉（CBDB 199783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199783&o=json
            external_identifier: CBDB:199783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.579Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9bKAADo3oq1GMBLA641t45
        subject_person_id: p_JEUpyam7C1Pm8JC9r4xGZ3
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1441年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y6TWHA6ABtMPQ8fcbHT9CE
          claim_id: c_9bKAADo3oq1GMBLA641t45
          source_id: s_L6P7ygH343rxMdn3XqKfCG
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
        id: c_Ajw1Agq5AwyEzn2PBnkv2v
        subject_person_id: p_JEUpyam7C1Pm8JC9r4xGZ3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舉（生于1441年），明人物。明清進士進士，籍贯鄒縣，入仕進士。（中国历代人物传记资料库 CBDB 199783）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xwZUS4rW3bOb8oV4o3UnS-
          claim_id: c_Ajw1Agq5AwyEzn2PBnkv2v
          source_id: s_L6P7ygH343rxMdn3XqKfCG
          stance: supports
          locator: CBDB:199783
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__HKktwuJu5SqDtwQKuGtlB
        subject_person_id: p_uBzLRGUwS4yvUJPvtC7Mfv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JEUpyam7C1Pm8JC9r4xGZ3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y4EYz1BdKWBtX5RAohdwg2
          claim_id: c__HKktwuJu5SqDtwQKuGtlB
          source_id: s_KMw9QPDX84rB4MUKxnL14K
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第九十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KMw9QPDX84rB4MUKxnL14K
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 249596）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249596&o=json
            external_identifier: CBDB:249596
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.182Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uBzLRGUwS4yvUJPvtC7Mfv
        status: active
        display_name: 王傑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_g51xDr4MHoMOD0aVR4QFV2
        subject_person_id: p_hMqJFCXEHXDTPbh4yzS2wD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JEUpyam7C1Pm8JC9r4xGZ3
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tEWabGJys0V3-WKOdZnsMr
          claim_id: c_g51xDr4MHoMOD0aVR4QFV2
          source_id: s_b4agzCPNUJ21EsEzD9Sh8y
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第九十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_b4agzCPNUJ21EsEzD9Sh8y
            source_type: api_record
            title: 中国历代人物传记资料库：王志剛（CBDB 249595）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249595&o=json
            external_identifier: CBDB:249595
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.181Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hMqJFCXEHXDTPbh4yzS2wD
        status: active
        display_name: 王志剛
        merged_into_person_id: null
    - claim:
        id: c_eMDv4Mz7BR3smqyrcTotXv
        subject_person_id: p_p7Nju4nBEKVHt14JCWVPnr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JEUpyam7C1Pm8JC9r4xGZ3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Aozcgz3MJRRIqXUituSaNe
          claim_id: c_eMDv4Mz7BR3smqyrcTotXv
          source_id: s_rF8e7572D57rAhqb26AHWU
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第九十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rF8e7572D57rAhqb26AHWU
            source_type: api_record
            title: 中国历代人物传记资料库：王直興（CBDB 249594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249594&o=json
            external_identifier: CBDB:249594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_p7Nju4nBEKVHt14JCWVPnr
        status: active
        display_name: 王直興
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_EO-fRcRNyy2Rb-tYRU76Z_
        subject_person_id: p_4N2N5gMpcXxSXp9hMVQ3k6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JEUpyam7C1Pm8JC9r4xGZ3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yb5s2WBqNMKihbaFWzDZEw
          claim_id: c_EO-fRcRNyy2Rb-tYRU76Z_
          source_id: s_qiHvoXCi_2AhgIfQvUcEVm
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199783 王舉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qiHvoXCi_2AhgIfQvUcEVm
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 249600）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249600&o=json
            external_identifier: CBDB:249600
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4N2N5gMpcXxSXp9hMVQ3k6
        status: active
        display_name: 王政
        merged_into_person_id: null
    - claim:
        id: c_OMJGMY03L031E-dxc7pdNs
        subject_person_id: p_9E1V2LjENRjPwBXXnGpYEZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JEUpyam7C1Pm8JC9r4xGZ3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sQ8cNDByXSAsw8Z7VrayvX
          claim_id: c_OMJGMY03L031E-dxc7pdNs
          source_id: s_F2kYbfQuDAyZbWMjHOieKq
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199783 王舉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_F2kYbfQuDAyZbWMjHOieKq
            source_type: api_record
            title: 中国历代人物传记资料库：王譽（CBDB 249603）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249603&o=json
            external_identifier: CBDB:249603
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9E1V2LjENRjPwBXXnGpYEZ
        status: active
        display_name: 王譽
        merged_into_person_id: null
    - claim:
        id: c_qICea0ldOE4cpmwB1cBMDJ
        subject_person_id: p_JEUpyam7C1Pm8JC9r4xGZ3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Nhuc9MmgLpwGANEq9M8Q5J
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sAyuNzfvEA3kX3q4Po7Vhb
          claim_id: c_qICea0ldOE4cpmwB1cBMDJ
          source_id: s_w_OlLuIGb-lSzJT9d4aqSI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199783 王舉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_w_OlLuIGb-lSzJT9d4aqSI
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 249602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249602&o=json
            external_identifier: CBDB:249602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Nhuc9MmgLpwGANEq9M8Q5J
        status: active
        display_name: 王鑑
        merged_into_person_id: null
    - claim:
        id: c_UecGxEulcGfAyBSLXZOlbx
        subject_person_id: p_JEUpyam7C1Pm8JC9r4xGZ3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nNE16Q4CMo3d9F4xN4t27X
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zt4W-T69uqe34DjA65nwcf
          claim_id: c_UecGxEulcGfAyBSLXZOlbx
          source_id: s_dldod0T12Gtqr9BbELJT4-
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199783 王舉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dldod0T12Gtqr9BbELJT4-
            source_type: api_record
            title: 中国历代人物传记资料库：王原（CBDB 249601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249601&o=json
            external_identifier: CBDB:249601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nNE16Q4CMo3d9F4xN4t27X
        status: active
        display_name: 王原
        merged_into_person_id: null
---

# 王舉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舉 | accepted |
| birth.date | 1441年 | accepted |
| bio.summary | 王舉（生于1441年），明人物。明清進士進士，籍贯鄒縣，入仕進士。（中国历代人物传记资料库 CBDB 199783） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uBzLRGUwS4yvUJPvtC7Mfv | 王傑 | accepted |
| ancestors | p_hMqJFCXEHXDTPbh4yzS2wD | 王志剛 | accepted |
| ancestors | p_p7Nju4nBEKVHt14JCWVPnr | 王直興 | accepted |
| other | p_4N2N5gMpcXxSXp9hMVQ3k6 | 王政 | accepted |
| other | p_9E1V2LjENRjPwBXXnGpYEZ | 王譽 | accepted |
| other | p_Nhuc9MmgLpwGANEq9M8Q5J | 王鑑 | accepted |
| other | p_nNE16Q4CMo3d9F4xN4t27X | 王原 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑑（CBDB 249602）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249602&o=json)
- [中国历代人物传记资料库：王傑（CBDB 249596）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249596&o=json)
- [中国历代人物传记资料库：王舉（CBDB 199783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199783&o=json)
- [中国历代人物传记资料库：王譽（CBDB 249603）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249603&o=json)
- [中国历代人物传记资料库：王原（CBDB 249601）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249601&o=json)
- [中国历代人物传记资料库：王政（CBDB 249600）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249600&o=json)
- [中国历代人物传记资料库：王直興（CBDB 249594）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249594&o=json)
- [中国历代人物传记资料库：王志剛（CBDB 249595）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249595&o=json)
