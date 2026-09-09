---
schema: wang-person/v1
id: p_uFUfejU6EkAT2Z72LggL4C
status: active
merged_into: null
display_name: 王摶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4ZvUDBE9ZqtE9djb2DtF2A
        subject_person_id: p_uFUfejU6EkAT2Z72LggL4C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王摶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BBsJVGodE56742LrbbSKBS
          claim_id: c_4ZvUDBE9ZqtE9djb2DtF2A
          source_id: s_1JNnPt5wd4SLonJ68wWB1i
          stance: supports
          locator: CBDB:382487
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（382487）
          source: &a1
            id: s_1JNnPt5wd4SLonJ68wWB1i
            source_type: api_record
            title: 中国历代人物传记资料库：王摶（CBDB 382487）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382487&o=json
            external_identifier: CBDB:382487
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.802Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8pGfvoMTSay6JSMXRvBqQL
        subject_person_id: p_uFUfejU6EkAT2Z72LggL4C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h6CD1NtGQsgKpftcCUveLA
          claim_id: c_8pGfvoMTSay6JSMXRvBqQL
          source_id: s_1JNnPt5wd4SLonJ68wWB1i
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
  ancestors: []
  descendants: []
  other: []
---

# 王摶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王摶 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王摶（CBDB 382487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=382487&o=json)
