---
schema: wang-person/v1
id: p_Q9zuFMKzedcz4UHwq7tKH2
status: active
merged_into: null
display_name: 王啟宏
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NkHWNHexNgd39oC2t8RKnK
        subject_person_id: p_Q9zuFMKzedcz4UHwq7tKH2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟宏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n19vEr33h14zJrXCm7QfML
          claim_id: c_NkHWNHexNgd39oC2t8RKnK
          source_id: s_E7TYQ72axWC3jaNBPCtME8
          stance: supports
          locator: CBDB:267887
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（267887）
          source: &a1
            id: s_E7TYQ72axWC3jaNBPCtME8
            source_type: api_record
            title: 中国历代人物传记资料库：王啟宏（CBDB 267887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267887&o=json
            external_identifier: CBDB:267887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.788Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YsaAj9jGiixaRYoaZoExDL
        subject_person_id: p_Q9zuFMKzedcz4UHwq7tKH2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟宏，明人物。弘治九年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 267887）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OZAJoqhMIvff_nfZYQcqzy
          claim_id: c_YsaAj9jGiixaRYoaZoExDL
          source_id: s_E7TYQ72axWC3jaNBPCtME8
          stance: supports
          locator: CBDB:267887
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_907WArwwd9JMVBh9ttafBD
        subject_person_id: p_Q9zuFMKzedcz4UHwq7tKH2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oJbh5LgRt8jeK3L7dfcGm6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g1b_0EsVCA6OlzRuE6IjWx
          claim_id: c_907WArwwd9JMVBh9ttafBD
          source_id: s_E7TYQ72axWC3jaNBPCtME8
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oJbh5LgRt8jeK3L7dfcGm6
        status: active
        display_name: 王鍭
        merged_into_person_id: null
    - claim:
        id: c_lSrJvAODoH98VHqtJxXSHQ
        subject_person_id: p_Q9zuFMKzedcz4UHwq7tKH2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1oqmE3EFBMBm93faeoC6UE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NKboTEST05eOZfJRn9UqsR
          claim_id: c_lSrJvAODoH98VHqtJxXSHQ
          source_id: s_1GIZ1DCoMPyZbkTV2deX8W
          stance: supports
          locator: CBDB：兄弟 王鍭（201147）之父／母 王啟宏
          quotation: null
          interpretation_note: 由兄弟关系推断：王璜 与 王鍭 为同胞（CBDB 记「弟」），王鍭 之父／母即 王璜 之父／母。
          source:
            id: s_1GIZ1DCoMPyZbkTV2deX8W
            source_type: api_record
            title: 中国历代人物传记资料库：王璜（CBDB 267892）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267892&o=json
            external_identifier: CBDB:267892
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1oqmE3EFBMBm93faeoC6UE
        status: active
        display_name: 王璜
        merged_into_person_id: null
    - claim:
        id: c_NR8Eem1-XMqNmbYB_kuWP4
        subject_person_id: p_Q9zuFMKzedcz4UHwq7tKH2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6TQ9ocgexsYtdQQZaj77C1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mMaXRurv8Wm45W8aF1uEjZ
          claim_id: c_NR8Eem1-XMqNmbYB_kuWP4
          source_id: s_9DnY6olHoUxOwMtQEoWFUH
          stance: supports
          locator: CBDB：兄弟 王鍭（201147）之父／母 王啟宏
          quotation: null
          interpretation_note: 由兄弟关系推断：王鐵 与 王鍭 为同胞（CBDB 记「兄」），王鍭 之父／母即 王鐵 之父／母。
          source:
            id: s_9DnY6olHoUxOwMtQEoWFUH
            source_type: api_record
            title: 中国历代人物传记资料库：王鐵（CBDB 267898）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267898&o=json
            external_identifier: CBDB:267898
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6TQ9ocgexsYtdQQZaj77C1
        status: active
        display_name: 王鐵
        merged_into_person_id: null
    - claim:
        id: c_DduFXHWvKu9ZszcfyIc1vY
        subject_person_id: p_Q9zuFMKzedcz4UHwq7tKH2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_95nZsbuk9P1PGgHusUKx9n
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YHzDKl7PDX2wXTVI7rWKF7
          claim_id: c_DduFXHWvKu9ZszcfyIc1vY
          source_id: s_SydldJZUIL39i_-1PjuRI4
          stance: supports
          locator: CBDB：兄弟 王鍭（201147）之父／母 王啟宏
          quotation: null
          interpretation_note: 由兄弟关系推断：王琅 与 王鍭 为同胞（CBDB 记「弟」），王鍭 之父／母即 王琅 之父／母。
          source:
            id: s_SydldJZUIL39i_-1PjuRI4
            source_type: api_record
            title: 中国历代人物传记资料库：王琅（CBDB 267893）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267893&o=json
            external_identifier: CBDB:267893
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_95nZsbuk9P1PGgHusUKx9n
        status: active
        display_name: 王琅
        merged_into_person_id: null
    - claim:
        id: c_-4ZkvCSaV7ZVhF8vtetoP_
        subject_person_id: p_Q9zuFMKzedcz4UHwq7tKH2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q5UjcCFn8KgmKVfcDfRBkY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GQoa0vErgRyfmqC_2L4EKV
          claim_id: c_-4ZkvCSaV7ZVhF8vtetoP_
          source_id: s_uLnJHnIFtQ77Iagy133DA_
          stance: supports
          locator: CBDB：兄弟 王鍭（201147）之父／母 王啟宏
          quotation: null
          interpretation_note: 由兄弟关系推断：王潮 与 王鍭 为同胞（CBDB 记「兄」），王鍭 之父／母即 王潮 之父／母。
          source:
            id: s_uLnJHnIFtQ77Iagy133DA_
            source_type: api_record
            title: 中国历代人物传记资料库：王潮（CBDB 267895）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267895&o=json
            external_identifier: CBDB:267895
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q5UjcCFn8KgmKVfcDfRBkY
        status: active
        display_name: 王潮
        merged_into_person_id: null
    - claim:
        id: c_h6U-L8-kY9FosaNY382BL3
        subject_person_id: p_Q9zuFMKzedcz4UHwq7tKH2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ng9K4jw8g811gdEchkHsHp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vm7nnbIPK_9cRWIvDsiCxg
          claim_id: c_h6U-L8-kY9FosaNY382BL3
          source_id: s_xSxnaICOEJAfcDFZ2N9TbL
          stance: supports
          locator: CBDB：兄弟 王鍭（201147）之父／母 王啟宏
          quotation: null
          interpretation_note: 由兄弟关系推断：王鉞 与 王鍭 为同胞（CBDB 记「兄」），王鍭 之父／母即 王鉞 之父／母。
          source:
            id: s_xSxnaICOEJAfcDFZ2N9TbL
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 267897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267897&o=json
            external_identifier: CBDB:267897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ng9K4jw8g811gdEchkHsHp
        status: active
        display_name: 王鉞
        merged_into_person_id: null
    - claim:
        id: c_eS7iBPe8g_0Pzckx03E2lr
        subject_person_id: p_Q9zuFMKzedcz4UHwq7tKH2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sQSiQnz7Twehf79tPVfVn2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_riFT_ldvZLTDq2m7FY1Js9
          claim_id: c_eS7iBPe8g_0Pzckx03E2lr
          source_id: s_l9NpfdJO5rjzRuwq9njRoU
          stance: supports
          locator: CBDB：兄弟 王鍭（201147）之父／母 王啟宏
          quotation: null
          interpretation_note: 由兄弟关系推断：王璔 与 王鍭 为同胞（CBDB 记「兄」），王鍭 之父／母即 王璔 之父／母。
          source:
            id: s_l9NpfdJO5rjzRuwq9njRoU
            source_type: api_record
            title: 中国历代人物传记资料库：王璔（CBDB 267896）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267896&o=json
            external_identifier: CBDB:267896
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sQSiQnz7Twehf79tPVfVn2
        status: active
        display_name: 王璔
        merged_into_person_id: null
    - claim:
        id: c_bcVWjzojwl9yJTKO7G02HS
        subject_person_id: p_Q9zuFMKzedcz4UHwq7tKH2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yzJ8XfYgm5ZJQsLfbo7gFo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y2yHVfGc80tEOwrjnSWWGk
          claim_id: c_bcVWjzojwl9yJTKO7G02HS
          source_id: s_OB2_r1SLWwr4OwrTdvXYRP
          stance: supports
          locator: CBDB：兄弟 王鍭（201147）之父／母 王啟宏
          quotation: null
          interpretation_note: 由兄弟关系推断：王載 与 王鍭 为同胞（CBDB 记「弟」），王鍭 之父／母即 王載 之父／母。
          source:
            id: s_OB2_r1SLWwr4OwrTdvXYRP
            source_type: api_record
            title: 中国历代人物传记资料库：王載（CBDB 267891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267891&o=json
            external_identifier: CBDB:267891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yzJ8XfYgm5ZJQsLfbo7gFo
        status: active
        display_name: 王載
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王啟宏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟宏 | accepted |
| bio.summary | 王啟宏，明人物。弘治九年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 267887） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_oJbh5LgRt8jeK3L7dfcGm6 | 王鍭 | accepted |
| children | p_1oqmE3EFBMBm93faeoC6UE | 王璜 | accepted |
| children | p_6TQ9ocgexsYtdQQZaj77C1 | 王鐵 | accepted |
| children | p_95nZsbuk9P1PGgHusUKx9n | 王琅 | accepted |
| children | p_Q5UjcCFn8KgmKVfcDfRBkY | 王潮 | accepted |
| children | p_ng9K4jw8g811gdEchkHsHp | 王鉞 | accepted |
| children | p_sQSiQnz7Twehf79tPVfVn2 | 王璔 | accepted |
| children | p_yzJ8XfYgm5ZJQsLfbo7gFo | 王載 | accepted |

## 外部来源

- [中国历代人物传记资料库：王潮（CBDB 267895）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267895&o=json)
- [中国历代人物传记资料库：王璜（CBDB 267892）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267892&o=json)
- [中国历代人物传记资料库：王琅（CBDB 267893）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267893&o=json)
- [中国历代人物传记资料库：王啟宏（CBDB 267887）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267887&o=json)
- [中国历代人物传记资料库：王鐵（CBDB 267898）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267898&o=json)
- [中国历代人物传记资料库：王鉞（CBDB 267897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267897&o=json)
- [中国历代人物传记资料库：王載（CBDB 267891）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267891&o=json)
- [中国历代人物传记资料库：王璔（CBDB 267896）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267896&o=json)
