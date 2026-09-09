---
schema: wang-person/v1
id: p_92Q8Er9mM6EGgtSMmLeCqJ
status: active
merged_into: null
display_name: 王家屛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gQFTYE5hCkYdM7726J9T7E
        subject_person_id: p_92Q8Er9mM6EGgtSMmLeCqJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家屛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JQyRqsz7iD9yiUQEc3qM9X
          claim_id: c_gQFTYE5hCkYdM7726J9T7E
          source_id: s_RZ3fqWGaHLG4UgCtfgP2Lk
          stance: supports
          locator: CBDB:126627
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126627）
          source: &a1
            id: s_RZ3fqWGaHLG4UgCtfgP2Lk
            source_type: api_record
            title: 中国历代人物传记资料库：王家屛（CBDB 126627）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126627&o=json
            external_identifier: CBDB:126627
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.179Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NQByziVWHJN74bnq4tx4US
        subject_person_id: p_92Q8Er9mM6EGgtSMmLeCqJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1536年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mNoSCJjRL7KAr6uk4Uh8XY
          claim_id: c_NQByziVWHJN74bnq4tx4US
          source_id: s_RZ3fqWGaHLG4UgCtfgP2Lk
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
        id: c_FgQMMyWkssVNfb5JgiWKPM
        subject_person_id: p_92Q8Er9mM6EGgtSMmLeCqJ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1603年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i8sWtPXnLfCZuNzXSTUTLz
          claim_id: c_FgQMMyWkssVNfb5JgiWKPM
          source_id: s_RZ3fqWGaHLG4UgCtfgP2Lk
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
        id: c_hj34etLaoKjzea1jD1scF2
        subject_person_id: p_92Q8Er9mM6EGgtSMmLeCqJ
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
        - id: cs_8Uf2pk43S9T1nPx33fzbgG
          claim_id: c_hj34etLaoKjzea1jD1scF2
          source_id: s_RZ3fqWGaHLG4UgCtfgP2Lk
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

# 王家屛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家屛 | accepted |
| birth.date | 1536年 | accepted |
| death.date | 1603年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家屛（CBDB 126627）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126627&o=json)
