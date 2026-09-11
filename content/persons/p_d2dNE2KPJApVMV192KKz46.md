---
schema: wang-person/v1
id: p_d2dNE2KPJApVMV192KKz46
status: active
merged_into: null
display_name: 王弼
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MkXPr4ibwgKiKMKFX73SEw
        subject_person_id: p_d2dNE2KPJApVMV192KKz46
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bE3r7dUynvGt8xEBXKL8zV
          claim_id: c_MkXPr4ibwgKiKMKFX73SEw
          source_id: s_sosYMT5657c7UPt4YakZzU
          stance: supports
          locator: CBDB:126707
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126707）
          source: &a1
            id: s_sosYMT5657c7UPt4YakZzU
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 126707）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126707&o=json
            external_identifier: CBDB:126707
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.141Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GV9B91bEAnWDEi4Vf8NXZb
        subject_person_id: p_d2dNE2KPJApVMV192KKz46
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1449年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9pV6cLMz1F31ZEzwgLNUCM
          claim_id: c_GV9B91bEAnWDEi4Vf8NXZb
          source_id: s_sosYMT5657c7UPt4YakZzU
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
        id: c_J9WvKHBXzdqzfSYep29b9W
        subject_person_id: p_d2dNE2KPJApVMV192KKz46
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1498年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dYTL58EMKx6wk2KMD8kbyw
          claim_id: c_J9WvKHBXzdqzfSYep29b9W
          source_id: s_sosYMT5657c7UPt4YakZzU
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
        id: c_1UNAKD83miJLnvyQCJZyN4
        subject_person_id: p_d2dNE2KPJApVMV192KKz46
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
        - id: cs_gXhvDMb9V5Y1NRw3MkdbFJ
          claim_id: c_1UNAKD83miJLnvyQCJZyN4
          source_id: s_sosYMT5657c7UPt4YakZzU
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
        id: c_CUz8j38JtFraw4UyTUWQYi
        subject_person_id: p_9zxU3PwVVJu39inB7KkFEQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_d2dNE2KPJApVMV192KKz46
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FxqeHlkWQqgIHLLGsBLEJV
          claim_id: c_CUz8j38JtFraw4UyTUWQYi
          source_id: s_5G7tLMiNvwp8Riqus74tj2
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百二十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5G7tLMiNvwp8Riqus74tj2
            source_type: api_record
            title: 中国历代人物传记资料库：王伯永（CBDB 249892）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249892&o=json
            external_identifier: CBDB:249892
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.194Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9zxU3PwVVJu39inB7KkFEQ
        status: active
        display_name: 王伯永
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弼 | accepted |
| birth.date | 1449年 | accepted |
| death.date | 1498年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_9zxU3PwVVJu39inB7KkFEQ | 王伯永 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 126707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126707&o=json)
- [中国历代人物传记资料库：王伯永（CBDB 249892）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249892&o=json)
