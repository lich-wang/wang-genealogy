---
schema: wang-person/v1
id: p_MM7KWyMsCLLasX9X9VAU7R
status: active
merged_into: null
display_name: 王宗堯
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ieLLEfUwbv68s8qLLrVxFy
        subject_person_id: p_MM7KWyMsCLLasX9X9VAU7R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗堯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qm7Z1Yq47S3da49DvqpoMn
          claim_id: c_ieLLEfUwbv68s8qLLrVxFy
          source_id: s_BCMG9RajAtuuSMjXsFXvkC
          stance: supports
          locator: CBDB:203496
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203496）
          source: &a1
            id: s_BCMG9RajAtuuSMjXsFXvkC
            source_type: api_record
            title: 中国历代人物传记资料库：王宗堯（CBDB 203496）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203496&o=json
            external_identifier: CBDB:203496
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.790Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6VHmoWgJh6zHmnF1J9e8Q2
        subject_person_id: p_MM7KWyMsCLLasX9X9VAU7R
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1499年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Sf34YoShcpHLiV7AC4xQPP
          claim_id: c_6VHmoWgJh6zHmnF1J9e8Q2
          source_id: s_BCMG9RajAtuuSMjXsFXvkC
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
        id: c_1335iqnDTtz9pGDFtkpQjG
        subject_person_id: p_MM7KWyMsCLLasX9X9VAU7R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗堯（生于1499年），明人物。明清進士進士，籍贯富順，入仕進士。（中国历代人物传记资料库 CBDB 203496）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pf1af0bt7qeqwy1zC9bYNp
          claim_id: c_1335iqnDTtz9pGDFtkpQjG
          source_id: s_BCMG9RajAtuuSMjXsFXvkC
          stance: supports
          locator: CBDB:203496
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8avPhPGZPVSH2tSP5IY0eC
        subject_person_id: p_3w9KiL5k9du8Z7UbUeRxEe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MM7KWyMsCLLasX9X9VAU7R
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1fAIecKwn6AhqbzE_CIPBo
          claim_id: c_8avPhPGZPVSH2tSP5IY0eC
          source_id: s_HKsE92Q1zr71u5JPeo8ZE7
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第二十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HKsE92Q1zr71u5JPeo8ZE7
            source_type: api_record
            title: 中国历代人物传记资料库：王楚鳳（CBDB 305534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305534&o=json
            external_identifier: CBDB:305534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_3w9KiL5k9du8Z7UbUeRxEe
        status: active
        display_name: 王楚鳳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_jnP10IjD5Q5fH4FgAdlmxM
        subject_person_id: p_kMXFk2RMgWgsEh7BZJsmpC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MM7KWyMsCLLasX9X9VAU7R
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r9P6tO3c9AbmCBwa3FAS5W
          claim_id: c_jnP10IjD5Q5fH4FgAdlmxM
          source_id: s_YK4xjGbbiqTkzQi1BRGMns
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第二十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YK4xjGbbiqTkzQi1BRGMns
            source_type: api_record
            title: 中国历代人物传记资料库：王聘（CBDB 305533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305533&o=json
            external_identifier: CBDB:305533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.741Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kMXFk2RMgWgsEh7BZJsmpC
        status: active
        display_name: 王聘
        merged_into_person_id: null
    - claim:
        id: c_dirzWBek1Bn9wx3bUFyrtB
        subject_person_id: p_nyHGqvA9YTKT9YQnGQ6pMM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MM7KWyMsCLLasX9X9VAU7R
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_evB7Uc2W8O3oksXv7a6eV6
          claim_id: c_dirzWBek1Bn9wx3bUFyrtB
          source_id: s_HzGWmSex6535AXKT7cDc3R
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第二甲第二十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HzGWmSex6535AXKT7cDc3R
            source_type: api_record
            title: 中国历代人物传记资料库：王大賓（CBDB 305532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305532&o=json
            external_identifier: CBDB:305532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.740Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nyHGqvA9YTKT9YQnGQ6pMM
        status: active
        display_name: 王大賓
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_NXRCmh0hhTenorf-sbrQ4L
        subject_person_id: p_MM7KWyMsCLLasX9X9VAU7R
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZENDz66V4RKfqbwmyGLBTx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LqtAONCMks9J0W7sptnWqM
          claim_id: c_NXRCmh0hhTenorf-sbrQ4L
          source_id: s_3hBvM21FgpHkC0lH5yNMUW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203496 王宗堯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3hBvM21FgpHkC0lH5yNMUW
            source_type: api_record
            title: 中国历代人物传记资料库：王宗德（CBDB 305543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305543&o=json
            external_identifier: CBDB:305543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZENDz66V4RKfqbwmyGLBTx
        status: active
        display_name: 王宗德
        merged_into_person_id: null
    - claim:
        id: c_2b6nIRmiUCY2Kk8_bOnAL8
        subject_person_id: p_MM7KWyMsCLLasX9X9VAU7R
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_i5dG8b9pvYuJ3HDsxVEXt3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OxHWi4qgGjphqtu1egHKZQ
          claim_id: c_2b6nIRmiUCY2Kk8_bOnAL8
          source_id: s_VtBwgtMaKbMT-yonmHiQwm
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203496 王宗堯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VtBwgtMaKbMT-yonmHiQwm
            source_type: api_record
            title: 中国历代人物传记资料库：王宗武（CBDB 305542）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305542&o=json
            external_identifier: CBDB:305542
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_i5dG8b9pvYuJ3HDsxVEXt3
        status: active
        display_name: 王宗武
        merged_into_person_id: null
---

# 王宗堯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗堯 | accepted |
| birth.date | 1499年 | accepted |
| bio.summary | 王宗堯（生于1499年），明人物。明清進士進士，籍贯富順，入仕進士。（中国历代人物传记资料库 CBDB 203496） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3w9KiL5k9du8Z7UbUeRxEe | 王楚鳳 | accepted |
| ancestors | p_kMXFk2RMgWgsEh7BZJsmpC | 王聘 | accepted |
| ancestors | p_nyHGqvA9YTKT9YQnGQ6pMM | 王大賓 | accepted |
| other | p_ZENDz66V4RKfqbwmyGLBTx | 王宗德 | accepted |
| other | p_i5dG8b9pvYuJ3HDsxVEXt3 | 王宗武 | accepted |

## 外部来源

- [中国历代人物传记资料库：王楚鳳（CBDB 305534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305534&o=json)
- [中国历代人物传记资料库：王大賓（CBDB 305532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305532&o=json)
- [中国历代人物传记资料库：王聘（CBDB 305533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305533&o=json)
- [中国历代人物传记资料库：王宗德（CBDB 305543）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305543&o=json)
- [中国历代人物传记资料库：王宗武（CBDB 305542）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305542&o=json)
- [中国历代人物传记资料库：王宗堯（CBDB 203496）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203496&o=json)
