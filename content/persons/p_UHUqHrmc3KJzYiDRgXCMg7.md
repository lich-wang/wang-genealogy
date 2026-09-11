---
schema: wang-person/v1
id: p_UHUqHrmc3KJzYiDRgXCMg7
status: active
merged_into: null
display_name: 王傅
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qvC4xGQmxCxPt2x2t1MHNs
        subject_person_id: p_UHUqHrmc3KJzYiDRgXCMg7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HBBvKf4rMceFvLZZ6ScJXy
          claim_id: c_qvC4xGQmxCxPt2x2t1MHNs
          source_id: s_fsRMm8fXNQYG8KCA8hT678
          stance: supports
          locator: CBDB:202284
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202284）
          source: &a1
            id: s_fsRMm8fXNQYG8KCA8hT678
            source_type: api_record
            title: 中国历代人物传记资料库：王傅（CBDB 202284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202284&o=json
            external_identifier: CBDB:202284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.736Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8NxMSa93HaUASD5HyAVTtb
        subject_person_id: p_UHUqHrmc3KJzYiDRgXCMg7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1486年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5uDnYbC3GuhfznsLHWUvVd
          claim_id: c_8NxMSa93HaUASD5HyAVTtb
          source_id: s_fsRMm8fXNQYG8KCA8hT678
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
        id: c_hBtJWY2D9BJcwKTCPWURE1
        subject_person_id: p_UHUqHrmc3KJzYiDRgXCMg7
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
        - id: cs_7PxaJLiNeHzKBqdJ3hUnPA
          claim_id: c_hBtJWY2D9BJcwKTCPWURE1
          source_id: s_fsRMm8fXNQYG8KCA8hT678
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
        id: c_ibeI6KZV63buuQLp9TJ3rf
        subject_person_id: p_exNPQqiad19zXtFzRk4E7x
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UHUqHrmc3KJzYiDRgXCMg7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w3jg7aKUVMegM2yCV7Ho8T
          claim_id: c_ibeI6KZV63buuQLp9TJ3rf
          source_id: s_KJ2LiRNY2XexW7aMiZuRKD
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百八十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KJ2LiRNY2XexW7aMiZuRKD
            source_type: api_record
            title: 中国历代人物传记资料库：王琦（CBDB 286065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286065&o=json
            external_identifier: CBDB:286065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.229Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_exNPQqiad19zXtFzRk4E7x
        status: active
        display_name: 王琦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_8xdETBsEDowfh-2fT5kXgp
        subject_person_id: p_iwotRk166CwUddrnrJYHtv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UHUqHrmc3KJzYiDRgXCMg7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cWinOhXdT4vSzaQ6uUwsm8
          claim_id: c_8xdETBsEDowfh-2fT5kXgp
          source_id: s_EfeMtdfrt7rWstHnFdDfVH
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百八十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EfeMtdfrt7rWstHnFdDfVH
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 286063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286063&o=json
            external_identifier: CBDB:286063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.227Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iwotRk166CwUddrnrJYHtv
        status: active
        display_name: 王安
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王傅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傅 | accepted |
| birth.date | 1486年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_exNPQqiad19zXtFzRk4E7x | 王琦 | accepted |
| ancestors | p_iwotRk166CwUddrnrJYHtv | 王安 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安（CBDB 286063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286063&o=json)
- [中国历代人物传记资料库：王傅（CBDB 202284）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202284&o=json)
- [中国历代人物传记资料库：王琦（CBDB 286065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286065&o=json)
