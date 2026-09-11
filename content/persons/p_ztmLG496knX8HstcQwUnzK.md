---
schema: wang-person/v1
id: p_ztmLG496knX8HstcQwUnzK
status: active
merged_into: null
display_name: 王棻
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8sv9J7QEjdC731PS29DB29
        subject_person_id: p_ztmLG496knX8HstcQwUnzK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_22nKYi6VHhjiEUrLDEBELu
          claim_id: c_8sv9J7QEjdC731PS29DB29
          source_id: s_PRTnYNZfs9dpiXwaCFEtWL
          stance: supports
          locator: CBDB:70408
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（70408）
          source: &a1
            id: s_PRTnYNZfs9dpiXwaCFEtWL
            source_type: api_record
            title: 中国历代人物传记资料库：王棻（CBDB 70408）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70408&o=json
            external_identifier: CBDB:70408
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sCS8MQkVHdTTUXBgwdMFLs
        subject_person_id: p_ztmLG496knX8HstcQwUnzK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dr5gj59NCDMU3YUaZLD1rX
          claim_id: c_sCS8MQkVHdTTUXBgwdMFLs
          source_id: s_PRTnYNZfs9dpiXwaCFEtWL
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
  spouses:
    - claim:
        id: c_P3OMzOd7f8XEvm41bGXqAF
        subject_person_id: p_ztmLG496knX8HstcQwUnzK
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_SsMDdjzBhb3hvuPkGjX734
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z9YmmPOAY8HW2BfSxeiP_i
          claim_id: c_P3OMzOd7f8XEvm41bGXqAF
          source_id: s_ffRTgnjI-0ol485XrOQScE
          stance: supports
          locator: CBDB 双向互证（妻子 白香室）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ffRTgnjI-0ol485XrOQScE
            source_type: api_record
            title: 中国历代人物传记资料库：白香室（CBDB 70407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70407&o=json
            external_identifier: CBDB:70407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_SsMDdjzBhb3hvuPkGjX734
        status: active
        display_name: 白香室
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王棻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棻 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_SsMDdjzBhb3hvuPkGjX734 | 白香室 | accepted |

## 外部来源

- [中国历代人物传记资料库：白香室（CBDB 70407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70407&o=json)
- [中国历代人物传记资料库：王棻（CBDB 70408）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70408&o=json)
