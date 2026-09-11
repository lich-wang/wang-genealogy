---
schema: wang-person/v1
id: p_C5nYHfswZqav846EceedPe
status: active
merged_into: null
display_name: 王英
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hJrNXKY5fWUYq6aMewFBPQ
        subject_person_id: p_C5nYHfswZqav846EceedPe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kw4Mz3WUpuxU2VhUHHSEpf
          claim_id: c_hJrNXKY5fWUYq6aMewFBPQ
          source_id: s_PSnBxrnmjkpWrztQvaynNE
          stance: supports
          locator: CBDB:66847
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（66847）
          source: &a1
            id: s_PSnBxrnmjkpWrztQvaynNE
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 66847）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66847&o=json
            external_identifier: CBDB:66847
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.968Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GDm9p1aECBY2GMRA6b8syj
        subject_person_id: p_C5nYHfswZqav846EceedPe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王英，明人物。籍贯長汀，曾任布政使、布政使司右參議、戶部員外郎。（中国历代人物传记资料库 CBDB 66847）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ObMS_zbUjHpm9zE_XigcV1
          claim_id: c_GDm9p1aECBY2GMRA6b8syj
          source_id: s_PSnBxrnmjkpWrztQvaynNE
          stance: supports
          locator: CBDB:66847
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

# 王英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王英 | accepted |
| bio.summary | 王英，明人物。籍贯長汀，曾任布政使、布政使司右參議、戶部員外郎。（中国历代人物传记资料库 CBDB 66847） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王英（CBDB 66847）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66847&o=json)
