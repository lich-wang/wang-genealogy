---
schema: wang-person/v1
id: p_uQx6CsD653L6hRpaz3mPf9
status: active
merged_into: null
display_name: 王同祖
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WkGMJAaLwkUfkHJZhZA4mp
        subject_person_id: p_uQx6CsD653L6hRpaz3mPf9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J7wkTsPCUixmJL49b3FkC7
          claim_id: c_WkGMJAaLwkUfkHJZhZA4mp
          source_id: s_1syMbZKNxAvCUu4pgsdbjQ
          stance: supports
          locator: CBDB:126516
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126516）
          source: &a1
            id: s_1syMbZKNxAvCUu4pgsdbjQ
            source_type: api_record
            title: 中国历代人物传记资料库：王同祖（CBDB 126516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126516&o=json
            external_identifier: CBDB:126516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.995Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9SQsrJBzAQQrSJ2gRnnHeu
        subject_person_id: p_uQx6CsD653L6hRpaz3mPf9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1497年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CD4TrCwCPU7u5fDczUBfMr
          claim_id: c_9SQsrJBzAQQrSJ2gRnnHeu
          source_id: s_1syMbZKNxAvCUu4pgsdbjQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_YHjPKBM7DxgfPz8pG2nL3N
        subject_person_id: p_uQx6CsD653L6hRpaz3mPf9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1551年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QNPDF73GwPwdRuzz7RNiMg
          claim_id: c_YHjPKBM7DxgfPz8pG2nL3N
          source_id: s_1syMbZKNxAvCUu4pgsdbjQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1yQYQVppPXyU3xD3W989jE
        subject_person_id: p_uQx6CsD653L6hRpaz3mPf9
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
        - id: cs_j6xh37CjHEXGDuh376Hn7k
          claim_id: c_1yQYQVppPXyU3xD3W989jE
          source_id: s_1syMbZKNxAvCUu4pgsdbjQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_yd2bB5x4FLIJRA-0Y23OYs
        subject_person_id: p_uQx6CsD653L6hRpaz3mPf9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tXZASZkZUbtAHM4Rg6fiXV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zgSnWnBzxgTRzGobq79NXg
          claim_id: c_yd2bB5x4FLIJRA-0Y23OYs
          source_id: s_2amJnBHLFEU78yAFc6hn52
          stance: supports
          locator: 江南通志，lgid=65724：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2amJnBHLFEU78yAFc6hn52
            source_type: api_record
            title: 中国历代人物传记资料库：王逢年（CBDB 126693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126693&o=json
            external_identifier: CBDB:126693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.130Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tXZASZkZUbtAHM4Rg6fiXV
        status: active
        display_name: 王逢年
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_iYpqsuzferW29ak1RYxJfV
        subject_person_id: p_8u6YwJLN4LLPN3hh45YHPS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_uQx6CsD653L6hRpaz3mPf9
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5Dfp5jqskhGy-EGYDNSbPa
          claim_id: c_iYpqsuzferW29ak1RYxJfV
          source_id: s_QWpxtE3kN6umzCuHgf3aXK
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第八十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QWpxtE3kN6umzCuHgf3aXK
            source_type: api_record
            title: 中国历代人物传记资料库：王復（CBDB 283924）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283924&o=json
            external_identifier: CBDB:283924
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.162Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8u6YwJLN4LLPN3hh45YHPS
        status: active
        display_name: 王復
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王同祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同祖 | accepted |
| birth.date | 1497年 | accepted |
| death.date | 1551年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_tXZASZkZUbtAHM4Rg6fiXV | 王逢年 | accepted |
| ancestors | p_8u6YwJLN4LLPN3hh45YHPS | 王復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王逢年（CBDB 126693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126693&o=json)
- [中国历代人物传记资料库：王復（CBDB 283924）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283924&o=json)
- [中国历代人物传记资料库：王同祖（CBDB 126516）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126516&o=json)
