---
schema: wang-person/v1
id: p_xieJBbUEe54Zq11jNAnR1e
status: active
merged_into: null
display_name: 王煜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AS7RKmCqe34FbbQmx9NqPW
        subject_person_id: p_xieJBbUEe54Zq11jNAnR1e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wVBT2Jyfw9xj8xLtwC5Z9c
          claim_id: c_AS7RKmCqe34FbbQmx9NqPW
          source_id: s_M71U1diS41aiq2JgXdAfFD
          stance: supports
          locator: CBDB:71256
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71256）
          source: &a1
            id: s_M71U1diS41aiq2JgXdAfFD
            source_type: api_record
            title: 中国历代人物传记资料库：王煜（CBDB 71256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71256&o=json
            external_identifier: CBDB:71256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.530Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8nZoEDK9iz45fK3vCazTdY
        subject_person_id: p_xieJBbUEe54Zq11jNAnR1e
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1795年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XVTPCkjM4JzfDAz4jP4gxS
          claim_id: c_8nZoEDK9iz45fK3vCazTdY
          source_id: s_M71U1diS41aiq2JgXdAfFD
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
        id: c_UjKc3JgGuFdj7KYeXD5cZC
        subject_person_id: p_xieJBbUEe54Zq11jNAnR1e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煜（生于1795年），清人物。籍贯滁州直隸州。（中国历代人物传记资料库 CBDB 71256）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OKfFI9hoCKabq7DbdYOdIM
          claim_id: c_UjKc3JgGuFdj7KYeXD5cZC
          source_id: s_M71U1diS41aiq2JgXdAfFD
          stance: supports
          locator: CBDB:71256
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王煜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煜 | accepted |
| birth.date | 1795年 | accepted |
| bio.summary | 王煜（生于1795年），清人物。籍贯滁州直隸州。（中国历代人物传记资料库 CBDB 71256） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王煜（CBDB 71256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71256&o=json)
