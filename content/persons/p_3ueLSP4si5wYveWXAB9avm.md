---
schema: wang-person/v1
id: p_3ueLSP4si5wYveWXAB9avm
status: active
merged_into: null
display_name: 王中立
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3GH3zzc9w4ALJfiB37AX44
        subject_person_id: p_3ueLSP4si5wYveWXAB9avm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中立
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jUyAUsH1gB3zPU7B4B4uGE
          claim_id: c_3GH3zzc9w4ALJfiB37AX44
          source_id: s_oi5XzAc99BYEdLzJYYsCP1
          stance: supports
          locator: CBDB:38141
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38141）
          source: &a1
            id: s_oi5XzAc99BYEdLzJYYsCP1
            source_type: api_record
            title: 中国历代人物传记资料库：王中立（CBDB 38141）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38141&o=json
            external_identifier: CBDB:38141
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.372Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Hk3iCfmoyTEAVfGRC3LMVL
        subject_person_id: p_3ueLSP4si5wYveWXAB9avm
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
        - id: cs_je7EZyKd9FtoePHH9wQLQb
          claim_id: c_Hk3iCfmoyTEAVfGRC3LMVL
          source_id: s_oi5XzAc99BYEdLzJYYsCP1
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

# 王中立

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王中立 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王中立（CBDB 38141）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38141&o=json)
