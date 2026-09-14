---
schema: wang-person/v1
id: p_oVB52nNYpQKMMkujZuH9Lj
status: active
merged_into: null
display_name: 王之彥
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CALU1z1H2MtRMtiVt5gDrA
        subject_person_id: p_oVB52nNYpQKMMkujZuH9Lj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之彥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Awq8hN8bLK116me3zJ9W1j
          claim_id: c_CALU1z1H2MtRMtiVt5gDrA
          source_id: s_4Dq4wC37Kb9iprtQgUat7a
          stance: supports
          locator: CBDB:207166
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207166）
          source: &a1
            id: s_4Dq4wC37Kb9iprtQgUat7a
            source_type: api_record
            title: 中国历代人物传记资料库：王之彥（CBDB 207166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207166&o=json
            external_identifier: CBDB:207166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.912Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_62dAPHWDScjqVmzafHPNEd
        subject_person_id: p_oVB52nNYpQKMMkujZuH9Lj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1559年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TPncsQfx5EJEBGWmRpe3Ew
          claim_id: c_62dAPHWDScjqVmzafHPNEd
          source_id: s_4Dq4wC37Kb9iprtQgUat7a
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
        id: c_wHj2K8io4A8QCDRjDvWh3q
        subject_person_id: p_oVB52nNYpQKMMkujZuH9Lj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之彥（生于1559年），明人物。明清進士進士，籍贯濬縣，入仕進士，曾任知縣、禮部觀政。（中国历代人物传记资料库 CBDB 207166）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qztHMKtGM17hlkEWMvU6QX
          claim_id: c_wHj2K8io4A8QCDRjDvWh3q
          source_id: s_4Dq4wC37Kb9iprtQgUat7a
          stance: supports
          locator: CBDB:207166
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_N5oMqnXh-g3sErhXkOANjC
        subject_person_id: p_53YdPXVcBwoNNtoe9v5t6c
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oVB52nNYpQKMMkujZuH9Lj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t9tm2moOeLK7olqo9Y2VZY
          claim_id: c_N5oMqnXh-g3sErhXkOANjC
          source_id: s_Sx5NqpKj1KKurm6BUJrCuG
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第九十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Sx5NqpKj1KKurm6BUJrCuG
            source_type: api_record
            title: 中国历代人物传记资料库：王衣（CBDB 228829）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228829&o=json
            external_identifier: CBDB:228829
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.565Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_53YdPXVcBwoNNtoe9v5t6c
        status: active
        display_name: 王衣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_gVyE36MLMQ9S3Ywza0gHhX
        subject_person_id: p_dUMsCe5EktacGt61k92yHb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oVB52nNYpQKMMkujZuH9Lj
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_myXCl_bg0nFn7cQMx_STVd
          claim_id: c_gVyE36MLMQ9S3Ywza0gHhX
          source_id: s_wdLi7gVDMzgNyUFFRCSsar
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第九十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wdLi7gVDMzgNyUFFRCSsar
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 228828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228828&o=json
            external_identifier: CBDB:228828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.564Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dUMsCe5EktacGt61k92yHb
        status: active
        display_name: 王儒
        merged_into_person_id: null
    - claim:
        id: c_Theti9Rj2BfE5UVYSe8Yyw
        subject_person_id: p_ojJjpdmR25B7wZcWwgwALq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oVB52nNYpQKMMkujZuH9Lj
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BBDUhIiyb7kr1b8lRWyDCA
          claim_id: c_Theti9Rj2BfE5UVYSe8Yyw
          source_id: s_uA89AiDWUnK1V5C8uETLSG
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第九十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uA89AiDWUnK1V5C8uETLSG
            source_type: api_record
            title: 中国历代人物传记资料库：王瑤（CBDB 228827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228827&o=json
            external_identifier: CBDB:228827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.563Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ojJjpdmR25B7wZcWwgwALq
        status: active
        display_name: 王瑤
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_Bm8xUqX-6cCgq5dYQ-lEQv
        subject_person_id: p_NkL6rDLdfan6Ub6o5oytJ9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oVB52nNYpQKMMkujZuH9Lj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0z1p3vOYMcWi9OEMC-ftYd
          claim_id: c_Bm8xUqX-6cCgq5dYQ-lEQv
          source_id: s_yZfom446gxB9HCRnngfQEQ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207166 王之彥）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yZfom446gxB9HCRnngfQEQ
            source_type: api_record
            title: 中国历代人物传记资料库：王之言（CBDB 228833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228833&o=json
            external_identifier: CBDB:228833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NkL6rDLdfan6Ub6o5oytJ9
        status: active
        display_name: 王之言
        merged_into_person_id: null
    - claim:
        id: c_wYTwRXx78djxrysp_coMVR
        subject_person_id: p_oVB52nNYpQKMMkujZuH9Lj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sPK6HK73zE1cGGZvHSSCpr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7QGREOF5kea0Mq9MuBE27e
          claim_id: c_wYTwRXx78djxrysp_coMVR
          source_id: s_sHMvjgjM3yVXk5_UZBU4Hi
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207166 王之彥）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sHMvjgjM3yVXk5_UZBU4Hi
            source_type: api_record
            title: 中国历代人物传记资料库：王之賓（CBDB 228835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228835&o=json
            external_identifier: CBDB:228835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sPK6HK73zE1cGGZvHSSCpr
        status: active
        display_name: 王之賓
        merged_into_person_id: null
    - claim:
        id: c_YmGBdlsg2qaaHy1rZ0NI9E
        subject_person_id: p_oVB52nNYpQKMMkujZuH9Lj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yJ9dRVkDw31LFeFvQaaMCy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fSP-WCX0f-OyRYQioxr6qB
          claim_id: c_YmGBdlsg2qaaHy1rZ0NI9E
          source_id: s_gNqc4tjtV0D1ZS1BkxOkJS
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207166 王之彥）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gNqc4tjtV0D1ZS1BkxOkJS
            source_type: api_record
            title: 中国历代人物传记资料库：王之佐（CBDB 228834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228834&o=json
            external_identifier: CBDB:228834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yJ9dRVkDw31LFeFvQaaMCy
        status: active
        display_name: 王之佐
        merged_into_person_id: null
---

# 王之彥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之彥 | accepted |
| birth.date | 1559年 | accepted |
| bio.summary | 王之彥（生于1559年），明人物。明清進士進士，籍贯濬縣，入仕進士，曾任知縣、禮部觀政。（中国历代人物传记资料库 CBDB 207166） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_53YdPXVcBwoNNtoe9v5t6c | 王衣 | accepted |
| ancestors | p_dUMsCe5EktacGt61k92yHb | 王儒 | accepted |
| ancestors | p_ojJjpdmR25B7wZcWwgwALq | 王瑤 | accepted |
| other | p_NkL6rDLdfan6Ub6o5oytJ9 | 王之言 | accepted |
| other | p_sPK6HK73zE1cGGZvHSSCpr | 王之賓 | accepted |
| other | p_yJ9dRVkDw31LFeFvQaaMCy | 王之佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王儒（CBDB 228828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228828&o=json)
- [中国历代人物传记资料库：王瑤（CBDB 228827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228827&o=json)
- [中国历代人物传记资料库：王衣（CBDB 228829）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228829&o=json)
- [中国历代人物传记资料库：王之賓（CBDB 228835）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228835&o=json)
- [中国历代人物传记资料库：王之言（CBDB 228833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228833&o=json)
- [中国历代人物传记资料库：王之彥（CBDB 207166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207166&o=json)
- [中国历代人物传记资料库：王之佐（CBDB 228834）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228834&o=json)
