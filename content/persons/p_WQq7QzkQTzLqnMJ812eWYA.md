---
schema: wang-person/v1
id: p_WQq7QzkQTzLqnMJ812eWYA
status: active
merged_into: null
display_name: 王之誥
revision: 6
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
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UPabchFBKcc2QqZHGGkNrH
          claim_id: c_ibpvMkNHMsjpCGRUMUwYwC
          source_id: s_2sBV48vGZ7B4CSJdGJuhnx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
  other: []
---

# 王之誥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之誥 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HxEM6RL9fRNSLHFJ3ioZEE | 王芳 | accepted |
| children | p_AmqhuDVmsQBqJU7SL3xZMz | 王夢麟 | accepted |
| children | p_XSJW73LZQQ3QSRoYSZBzFt | 王夢舃 | accepted |
| ancestors | p_JQ2MtbSvxnZ2BtVWDiPUDG | 王俸 | accepted |
| ancestors | p_TqbdmyxqR2Ucz5qM82wt26 | 王伯載 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯載（CBDB 307681）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307681&o=json)
- [中国历代人物传记资料库：王芳（CBDB 307682）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307682&o=json)
- [中国历代人物传记资料库：王俸（CBDB 307680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307680&o=json)
- [中国历代人物传记资料库：王夢麟（CBDB 528036）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=528036&o=json)
- [中国历代人物传记资料库：王夢舃（CBDB 528037）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=528037&o=json)
- [中国历代人物传记资料库：王之誥（CBDB 124361）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124361&o=json)
