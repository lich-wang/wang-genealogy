---
schema: wang-person/v1
id: p_LpMHYjMg2BhRe212CnJZY9
status: active
merged_into: null
display_name: 王凱
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cCCw8q5gDyqswFN9iTNBqG
        subject_person_id: p_LpMHYjMg2BhRe212CnJZY9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3ephpS5iJFggmWS8EUMwK5
          claim_id: c_cCCw8q5gDyqswFN9iTNBqG
          source_id: s_4z4EpS12C1HVjAtms92zps
          stance: supports
          locator: CBDB:207962
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207962）
          source: &a1
            id: s_4z4EpS12C1HVjAtms92zps
            source_type: api_record
            title: 中国历代人物传记资料库：王凱（CBDB 207962）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207962&o=json
            external_identifier: CBDB:207962
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1awXLXLohpwQ6jk58mgR5y
        subject_person_id: p_LpMHYjMg2BhRe212CnJZY9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1414年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t5JWnwFLJrdhAJbF2WSDRe
          claim_id: c_1awXLXLohpwQ6jk58mgR5y
          source_id: s_4z4EpS12C1HVjAtms92zps
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
        id: c_wEozxjQkfQPdcyHLsaoZEG
        subject_person_id: p_LpMHYjMg2BhRe212CnJZY9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凱（生于1414年），明人物。明清進士進士，籍贯慶都，入仕進士。（中国历代人物传记资料库 CBDB 207962）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eGWyv-PSWacqb8GD6ABcn4
          claim_id: c_wEozxjQkfQPdcyHLsaoZEG
          source_id: s_4z4EpS12C1HVjAtms92zps
          stance: supports
          locator: CBDB:207962
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__FVpZF2L0Ur4VVrLTRzzzp
        subject_person_id: p_dMddXN9MM9RH4e355Y4XBH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LpMHYjMg2BhRe212CnJZY9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NItobHpLMrtgIomtPky19Z
          claim_id: c__FVpZF2L0Ur4VVrLTRzzzp
          source_id: s_uPdDXSM8huR9LUKmSpywQC
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第六十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uPdDXSM8huR9LUKmSpywQC
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 238510）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238510&o=json
            external_identifier: CBDB:238510
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.883Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dMddXN9MM9RH4e355Y4XBH
        status: active
        display_name: 王俊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Dp76EOQFHEp1oJ8jNPSbR9
        subject_person_id: p_bRutZZe45GNMmTrfNCtLZZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LpMHYjMg2BhRe212CnJZY9
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tJ6l7-DCqqT4AwfsF_vUWX
          claim_id: c_Dp76EOQFHEp1oJ8jNPSbR9
          source_id: s_JiC5RUAx61DF933g9jTTD5
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第六十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JiC5RUAx61DF933g9jTTD5
            source_type: api_record
            title: 中国历代人物传记资料库：王士安（CBDB 238507）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238507&o=json
            external_identifier: CBDB:238507
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.881Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bRutZZe45GNMmTrfNCtLZZ
        status: active
        display_name: 王士安
        merged_into_person_id: null
    - claim:
        id: c_8TXRr477uKuzTG_r39WHRz
        subject_person_id: p_vaqbBTbe1jFUgkiqDsCnTY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LpMHYjMg2BhRe212CnJZY9
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__5oKnUdKU5v0_yFbcBk7Uy
          claim_id: c_8TXRr477uKuzTG_r39WHRz
          source_id: s_6tHNZvZ4F5K2ZV3UwSJN6G
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第六十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6tHNZvZ4F5K2ZV3UwSJN6G
            source_type: api_record
            title: 中国历代人物传记资料库：王郁（CBDB 238508）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238508&o=json
            external_identifier: CBDB:238508
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.882Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vaqbBTbe1jFUgkiqDsCnTY
        status: active
        display_name: 王郁
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_iVSG5d48hgfAjkml-63AIQ
        subject_person_id: p_LpMHYjMg2BhRe212CnJZY9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZEHF2Z9HLeYrfnNXDKL7sN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M0G3Qf4aPxbzhqPck7aVsm
          claim_id: c_iVSG5d48hgfAjkml-63AIQ
          source_id: s__BBXafZC4A0YJ7KVgpqJzU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207962 王凱）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__BBXafZC4A0YJ7KVgpqJzU
            source_type: api_record
            title: 中国历代人物传记资料库：王原（CBDB 238514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238514&o=json
            external_identifier: CBDB:238514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZEHF2Z9HLeYrfnNXDKL7sN
        status: active
        display_name: 王原
        merged_into_person_id: null
    - claim:
        id: c_fOXLI3NvCJy7ZDyLSO1cT7
        subject_person_id: p_LpMHYjMg2BhRe212CnJZY9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mCp2CE5cWVcFX6hFKr6Bi7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UUO6yXARnGKughSaYH39YC
          claim_id: c_fOXLI3NvCJy7ZDyLSO1cT7
          source_id: s_wMj4VmwCKPSQBjBi-vW6Z4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207962 王凱）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wMj4VmwCKPSQBjBi-vW6Z4
            source_type: api_record
            title: 中国历代人物传记资料库：王名（CBDB 238513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238513&o=json
            external_identifier: CBDB:238513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mCp2CE5cWVcFX6hFKr6Bi7
        status: active
        display_name: 王名
        merged_into_person_id: null
---

# 王凱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王凱 | accepted |
| birth.date | 1414年 | accepted |
| bio.summary | 王凱（生于1414年），明人物。明清進士進士，籍贯慶都，入仕進士。（中国历代人物传记资料库 CBDB 207962） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dMddXN9MM9RH4e355Y4XBH | 王俊 | accepted |
| ancestors | p_bRutZZe45GNMmTrfNCtLZZ | 王士安 | accepted |
| ancestors | p_vaqbBTbe1jFUgkiqDsCnTY | 王郁 | accepted |
| other | p_ZEHF2Z9HLeYrfnNXDKL7sN | 王原 | accepted |
| other | p_mCp2CE5cWVcFX6hFKr6Bi7 | 王名 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俊（CBDB 238510）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238510&o=json)
- [中国历代人物传记资料库：王凱（CBDB 207962）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207962&o=json)
- [中国历代人物传记资料库：王名（CBDB 238513）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238513&o=json)
- [中国历代人物传记资料库：王士安（CBDB 238507）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238507&o=json)
- [中国历代人物传记资料库：王郁（CBDB 238508）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238508&o=json)
- [中国历代人物传记资料库：王原（CBDB 238514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238514&o=json)
