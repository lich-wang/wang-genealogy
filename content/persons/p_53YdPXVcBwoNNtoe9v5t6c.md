---
schema: wang-person/v1
id: p_53YdPXVcBwoNNtoe9v5t6c
status: active
merged_into: null
display_name: 王衣
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ry4sPgwT4gNAUwjRdurPJH
        subject_person_id: p_53YdPXVcBwoNNtoe9v5t6c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cWCceXPhR6fm41A6c3R2qY
          claim_id: c_ry4sPgwT4gNAUwjRdurPJH
          source_id: s_Sx5NqpKj1KKurm6BUJrCuG
          stance: supports
          locator: CBDB:228829
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（228829）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XfpjT6mKP4vi3g43fDCvSv
        subject_person_id: p_53YdPXVcBwoNNtoe9v5t6c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衣，明人物。萬曆丙戌科進士進士，籍贯濬縣，曾任太醫院醫官。（中国历代人物传记资料库 CBDB 228829）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__1XeFrfacC6zDrq1bK5iS-
          claim_id: c_XfpjT6mKP4vi3g43fDCvSv
          source_id: s_Sx5NqpKj1KKurm6BUJrCuG
          stance: supports
          locator: CBDB:228829
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_oVB52nNYpQKMMkujZuH9Lj
        status: active
        display_name: 王之彥
        merged_into_person_id: null
    - claim:
        id: c_rAJvA-2eZUhbmMBSbWvKf1
        subject_person_id: p_53YdPXVcBwoNNtoe9v5t6c
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NkL6rDLdfan6Ub6o5oytJ9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V-BkQmJLusFs0IOlBxARFH
          claim_id: c_rAJvA-2eZUhbmMBSbWvKf1
          source_id: s_yZfom446gxB9HCRnngfQEQ
          stance: supports
          locator: CBDB：兄弟 王之彥（207166）之父／母 王衣
          quotation: null
          interpretation_note: 由兄弟关系推断：王之言 与 王之彥 为同胞（CBDB 记「弟」），王之彥 之父／母即 王之言 之父／母。
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
        id: c_NlGIXE9tvX5QG5pfh7bAix
        subject_person_id: p_53YdPXVcBwoNNtoe9v5t6c
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sPK6HK73zE1cGGZvHSSCpr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X_Ofwp1zTsLn4YPF-uwcLu
          claim_id: c_NlGIXE9tvX5QG5pfh7bAix
          source_id: s_sHMvjgjM3yVXk5_UZBU4Hi
          stance: supports
          locator: CBDB：兄弟 王之彥（207166）之父／母 王衣
          quotation: null
          interpretation_note: 由兄弟关系推断：王之賓 与 王之彥 为同胞（CBDB 记「弟」），王之彥 之父／母即 王之賓 之父／母。
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
        id: c_XDVbWb4U8B6pxWJSKhoucO
        subject_person_id: p_53YdPXVcBwoNNtoe9v5t6c
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yJ9dRVkDw31LFeFvQaaMCy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u-Wz4YZatQTGnAUPGNwbg3
          claim_id: c_XDVbWb4U8B6pxWJSKhoucO
          source_id: s_gNqc4tjtV0D1ZS1BkxOkJS
          stance: supports
          locator: CBDB：兄弟 王之彥（207166）之父／母 王衣
          quotation: null
          interpretation_note: 由兄弟关系推断：王之佐 与 王之彥 为同胞（CBDB 记「弟」），王之彥 之父／母即 王之佐 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王衣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衣 | accepted |
| bio.summary | 王衣，明人物。萬曆丙戌科進士進士，籍贯濬縣，曾任太醫院醫官。（中国历代人物传记资料库 CBDB 228829） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_oVB52nNYpQKMMkujZuH9Lj | 王之彥 | accepted |
| children | p_NkL6rDLdfan6Ub6o5oytJ9 | 王之言 | accepted |
| children | p_sPK6HK73zE1cGGZvHSSCpr | 王之賓 | accepted |
| children | p_yJ9dRVkDw31LFeFvQaaMCy | 王之佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王衣（CBDB 228829）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228829&o=json)
- [中国历代人物传记资料库：王之賓（CBDB 228835）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228835&o=json)
- [中国历代人物传记资料库：王之言（CBDB 228833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228833&o=json)
- [中国历代人物传记资料库：王之佐（CBDB 228834）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228834&o=json)
