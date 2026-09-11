---
schema: wang-person/v1
id: p_tyaMeFLDyyzL3DtTVsE3uu
status: active
merged_into: null
display_name: 王旦
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p3VJLY5yn61vBfqLbfYzCf
        subject_person_id: p_tyaMeFLDyyzL3DtTVsE3uu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王旦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dsTJPL6SmkjoQMo3HnKt9f
          claim_id: c_p3VJLY5yn61vBfqLbfYzCf
          source_id: s_24cm7qN9caWD3DSVEucPeJ
          stance: supports
          locator: CBDB:8153
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（8153）
          source: &a1
            id: s_24cm7qN9caWD3DSVEucPeJ
            source_type: api_record
            title: 中国历代人物传记资料库：王旦（CBDB 8153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8153&o=json
            external_identifier: CBDB:8153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.499Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_C5KXmivVK6CGRB2PHaUFjF
        subject_person_id: p_tyaMeFLDyyzL3DtTVsE3uu
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 957年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LKeLJ63Yv7XnFQ8QUrgAJ1
          claim_id: c_C5KXmivVK6CGRB2PHaUFjF
          source_id: s_24cm7qN9caWD3DSVEucPeJ
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
        id: c_6mqekceGSudnWZZ1ACsnS9
        subject_person_id: p_tyaMeFLDyyzL3DtTVsE3uu
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1017年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4YptVMY8dmd5BtJMEggUyZ
          claim_id: c_6mqekceGSudnWZZ1ACsnS9
          source_id: s_24cm7qN9caWD3DSVEucPeJ
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
        id: c_BXGQ41FY4x8tF5jjdFAv2U
        subject_person_id: p_tyaMeFLDyyzL3DtTVsE3uu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gay6XxXWNVxU5xDqUKg9KL
          claim_id: c_BXGQ41FY4x8tF5jjdFAv2U
          source_id: s_24cm7qN9caWD3DSVEucPeJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_TXrUrgxP7RYlGnyne5ZmmV
        subject_person_id: p_aeQuz9T27oQ8FHTk36tCX7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tyaMeFLDyyzL3DtTVsE3uu
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9wI1KHW4GaSYYjoRI1-VZ6
          claim_id: c_TXrUrgxP7RYlGnyne5ZmmV
          source_id: s_3bzL7xxo5wfo9JJxb3hVnV
          stance: supports
          locator: 宋史：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3bzL7xxo5wfo9JJxb3hVnV
            source_type: api_record
            title: 中国历代人物传记资料库：王徹（CBDB 37837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37837&o=json
            external_identifier: CBDB:37837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.268Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aeQuz9T27oQ8FHTk36tCX7
        status: active
        display_name: 王徹
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_Caz8eFh3I6XjKgWHQ8lBg9
        subject_person_id: p_tyaMeFLDyyzL3DtTVsE3uu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4RuP1y13HperNdMDJkN6MF
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UlvXNlbtTpPRyShSqLijje
          claim_id: c_Caz8eFh3I6XjKgWHQ8lBg9
          source_id: s_ryXjfBob4D77XXAGUgL5gi
          stance: supports
          locator: 宋人傳記資料索引(電子版)：高祖;四世祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ryXjfBob4D77XXAGUgL5gi
            source_type: api_record
            title: 中国历代人物传记资料库：王震（CBDB 3947）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3947&o=json
            external_identifier: CBDB:3947
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.425Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4RuP1y13HperNdMDJkN6MF
        status: active
        display_name: 王震
        merged_into_person_id: null
  other: []
---

# 王旦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王旦 | accepted |
| birth.date | 957年 | accepted |
| death.date | 1017年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_aeQuz9T27oQ8FHTk36tCX7 | 王徹 | accepted |
| descendants | p_4RuP1y13HperNdMDJkN6MF | 王震 | accepted |

## 外部来源

- [中国历代人物传记资料库：王徹（CBDB 37837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37837&o=json)
- [中国历代人物传记资料库：王旦（CBDB 8153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8153&o=json)
- [中国历代人物传记资料库：王震（CBDB 3947）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3947&o=json)
