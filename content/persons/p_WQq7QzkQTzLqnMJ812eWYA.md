---
schema: wang-person/v1
id: p_WQq7QzkQTzLqnMJ812eWYA
status: active
merged_into: null
display_name: 王之誥
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WGsGEXnFUNq1w4DBXBQDKn
        subject_person_id: p_WQq7QzkQTzLqnMJ812eWYA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之誥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2H4xoxttMpibXot7xq77iZ
          claim_id: c_WGsGEXnFUNq1w4DBXBQDKn
          source_id: s_2sBV48vGZ7B4CSJdGJuhnx
          stance: supports
          locator: CBDB:124361
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（124361）
          source: &a1
            id: s_2sBV48vGZ7B4CSJdGJuhnx
            source_type: api_record
            title: 中国历代人物传记资料库：王之誥（CBDB 124361）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124361&o=json
            external_identifier: CBDB:124361
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.943Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ibpvMkNHMsjpCGRUMUwYwC
        subject_person_id: p_WQq7QzkQTzLqnMJ812eWYA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之誥，明人物。籍贯石首，入仕進士，曾任兵備副使、知縣、副使。（中国历代人物传记资料库 CBDB 124361）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__DhCM0Jqh7a1GLOWNTC9Nz
          claim_id: c_ibpvMkNHMsjpCGRUMUwYwC
          source_id: s_2sBV48vGZ7B4CSJdGJuhnx
          stance: supports
          locator: CBDB:124361
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mzxwFqo8ED-JhdfMdquKK8
        subject_person_id: p_HxEM6RL9fRNSLHFJ3ioZEE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WQq7QzkQTzLqnMJ812eWYA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iFi0i-e-BPr1nSZ-bsp5HJ
          claim_id: c_mzxwFqo8ED-JhdfMdquKK8
          source_id: s_5PL8msvmn7vX5Z5ZQZUfJH
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第一百四十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5PL8msvmn7vX5Z5ZQZUfJH
            source_type: api_record
            title: 中国历代人物传记资料库：王芳（CBDB 307682）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307682&o=json
            external_identifier: CBDB:307682
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.793Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HxEM6RL9fRNSLHFJ3ioZEE
        status: active
        display_name: 王芳
        merged_into_person_id: null
  children:
    - claim:
        id: c_Onixoe-y2zAhla8sR79-A3
        subject_person_id: p_WQq7QzkQTzLqnMJ812eWYA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AmqhuDVmsQBqJU7SL3xZMz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ISpf3rLuMHdlI_ciGOMZPy
          claim_id: c_Onixoe-y2zAhla8sR79-A3
          source_id: s_f2RSbsW7A8nknAgTQTBNtR
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），14137：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_f2RSbsW7A8nknAgTQTBNtR
            source_type: api_record
            title: 中国历代人物传记资料库：王夢麟（CBDB 528036）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=528036&o=json
            external_identifier: CBDB:528036
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.349Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AmqhuDVmsQBqJU7SL3xZMz
        status: active
        display_name: 王夢麟
        merged_into_person_id: null
    - claim:
        id: c_PlCn8zHT_-8pI02KPfl-_d
        subject_person_id: p_WQq7QzkQTzLqnMJ812eWYA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XSJW73LZQQ3QSRoYSZBzFt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EVDywTmvrN9rnyikDoiBju
          claim_id: c_PlCn8zHT_-8pI02KPfl-_d
          source_id: s_yqbW9ZjhR1qvMP3vpJxysm
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），14137：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yqbW9ZjhR1qvMP3vpJxysm
            source_type: api_record
            title: 中国历代人物传记资料库：王夢舃（CBDB 528037）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=528037&o=json
            external_identifier: CBDB:528037
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.349Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_XSJW73LZQQ3QSRoYSZBzFt
        status: active
        display_name: 王夢舃
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_3cxC_OItnyEDAraJ3Itjfi
        subject_person_id: p_JQ2MtbSvxnZ2BtVWDiPUDG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WQq7QzkQTzLqnMJ812eWYA
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5Rwr4J5rL0nDYHy1Ljqz4v
          claim_id: c_3cxC_OItnyEDAraJ3Itjfi
          source_id: s_JwMpqMiLa7hEmmJ6KKpRvo
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第一百四十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JwMpqMiLa7hEmmJ6KKpRvo
            source_type: api_record
            title: 中国历代人物传记资料库：王俸（CBDB 307680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307680&o=json
            external_identifier: CBDB:307680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.792Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JQ2MtbSvxnZ2BtVWDiPUDG
        status: active
        display_name: 王俸
        merged_into_person_id: null
    - claim:
        id: c_R1zNe7YvZifHIpLsYBF33d
        subject_person_id: p_TqbdmyxqR2Ucz5qM82wt26
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WQq7QzkQTzLqnMJ812eWYA
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I3AoGPVCUSO85_2DGWq4zu
          claim_id: c_R1zNe7YvZifHIpLsYBF33d
          source_id: s_G2oEBAvKvvVxWb8a4y2nhC
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第一百四十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_G2oEBAvKvvVxWb8a4y2nhC
            source_type: api_record
            title: 中国历代人物传记资料库：王伯載（CBDB 307681）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307681&o=json
            external_identifier: CBDB:307681
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.793Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_TqbdmyxqR2Ucz5qM82wt26
        status: active
        display_name: 王伯載
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_zXcKdhw_anVAFzcxgzCRFC
        subject_person_id: p_2Td8Va1G7ufHJJBPdgJzEy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WQq7QzkQTzLqnMJ812eWYA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3TNlp5yNmFmuPWtTMuvkJV
          claim_id: c_zXcKdhw_anVAFzcxgzCRFC
          source_id: s_yyt36bk1FU74jRToflPcRf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 124361 王之誥）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yyt36bk1FU74jRToflPcRf
            source_type: api_record
            title: 中国历代人物传记资料库：王之紀（CBDB 307688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307688&o=json
            external_identifier: CBDB:307688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2Td8Va1G7ufHJJBPdgJzEy
        status: active
        display_name: 王之紀
        merged_into_person_id: null
    - claim:
        id: c_YjYov0nLZ_-7ruhbf2wPlT
        subject_person_id: p_2kqeoUNHtuY3VkNyjL441X
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WQq7QzkQTzLqnMJ812eWYA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VlgM5uMj6eXjs8UrQ00Z3g
          claim_id: c_YjYov0nLZ_-7ruhbf2wPlT
          source_id: s_2_zNRQAzXD1_kH14kVEi_l
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 124361 王之誥）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2_zNRQAzXD1_kH14kVEi_l
            source_type: api_record
            title: 中国历代人物传记资料库：王之誠（CBDB 307686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307686&o=json
            external_identifier: CBDB:307686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2kqeoUNHtuY3VkNyjL441X
        status: active
        display_name: 王之誠
        merged_into_person_id: null
    - claim:
        id: c_B9o3PVqci8w1BG7AovHNoh
        subject_person_id: p_7qYFGLzUZinwHFrnuom2wb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WQq7QzkQTzLqnMJ812eWYA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KBlfQEKHBvbepJY8urGQP8
          claim_id: c_B9o3PVqci8w1BG7AovHNoh
          source_id: s_GcPixvkPzApY0JuO2ZfIMk
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 124361 王之誥）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GcPixvkPzApY0JuO2ZfIMk
            source_type: api_record
            title: 中国历代人物传记资料库：王之惠（CBDB 307690）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307690&o=json
            external_identifier: CBDB:307690
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7qYFGLzUZinwHFrnuom2wb
        status: active
        display_name: 王之惠
        merged_into_person_id: null
    - claim:
        id: c_oP8GFPMOty69iJRqHXrQvR
        subject_person_id: p_WQq7QzkQTzLqnMJ812eWYA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Yh8cHEvSYh3boSfisEe3f6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_06okx4APjQesNKfVGRvW1o
          claim_id: c_oP8GFPMOty69iJRqHXrQvR
          source_id: s_WuiYvegFVVEYuA06muG3gc
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 124361 王之誥）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WuiYvegFVVEYuA06muG3gc
            source_type: api_record
            title: 中国历代人物传记资料库：王之綱（CBDB 307689）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307689&o=json
            external_identifier: CBDB:307689
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Yh8cHEvSYh3boSfisEe3f6
        status: active
        display_name: 王之綱
        merged_into_person_id: null
    - claim:
        id: c_PQDzWpkbsJBrCPCUAKNiPE
        subject_person_id: p_WQq7QzkQTzLqnMJ812eWYA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dWcZ38uBoPToBcS8pzjFDV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MV-1mDTIBawQNa8uAUDjGE
          claim_id: c_PQDzWpkbsJBrCPCUAKNiPE
          source_id: s_iEO15MX2MfjNze83NqvXVI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 124361 王之誥）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iEO15MX2MfjNze83NqvXVI
            source_type: api_record
            title: 中国历代人物传记资料库：王之度（CBDB 307687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307687&o=json
            external_identifier: CBDB:307687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dWcZ38uBoPToBcS8pzjFDV
        status: active
        display_name: 王之度
        merged_into_person_id: null
---

# 王之誥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之誥 | accepted |
| bio.summary | 王之誥，明人物。籍贯石首，入仕進士，曾任兵備副使、知縣、副使。（中国历代人物传记资料库 CBDB 124361） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HxEM6RL9fRNSLHFJ3ioZEE | 王芳 | accepted |
| children | p_AmqhuDVmsQBqJU7SL3xZMz | 王夢麟 | accepted |
| children | p_XSJW73LZQQ3QSRoYSZBzFt | 王夢舃 | accepted |
| ancestors | p_JQ2MtbSvxnZ2BtVWDiPUDG | 王俸 | accepted |
| ancestors | p_TqbdmyxqR2Ucz5qM82wt26 | 王伯載 | accepted |
| other | p_2Td8Va1G7ufHJJBPdgJzEy | 王之紀 | accepted |
| other | p_2kqeoUNHtuY3VkNyjL441X | 王之誠 | accepted |
| other | p_7qYFGLzUZinwHFrnuom2wb | 王之惠 | accepted |
| other | p_Yh8cHEvSYh3boSfisEe3f6 | 王之綱 | accepted |
| other | p_dWcZ38uBoPToBcS8pzjFDV | 王之度 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯載（CBDB 307681）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307681&o=json)
- [中国历代人物传记资料库：王芳（CBDB 307682）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307682&o=json)
- [中国历代人物传记资料库：王俸（CBDB 307680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307680&o=json)
- [中国历代人物传记资料库：王夢麟（CBDB 528036）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=528036&o=json)
- [中国历代人物传记资料库：王夢舃（CBDB 528037）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=528037&o=json)
- [中国历代人物传记资料库：王之誠（CBDB 307686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307686&o=json)
- [中国历代人物传记资料库：王之度（CBDB 307687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307687&o=json)
- [中国历代人物传记资料库：王之綱（CBDB 307689）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307689&o=json)
- [中国历代人物传记资料库：王之誥（CBDB 124361）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124361&o=json)
- [中国历代人物传记资料库：王之惠（CBDB 307690）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307690&o=json)
- [中国历代人物传记资料库：王之紀（CBDB 307688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307688&o=json)
