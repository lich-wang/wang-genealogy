---
schema: wang-person/v1
id: p_QDP1vqaafP7CqjsKMAr5ry
status: active
merged_into: null
display_name: 王綱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K5bhiwj3ZcN3XLNJUt6tyB
        subject_person_id: p_QDP1vqaafP7CqjsKMAr5ry
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Der8mMHBHZRpJUZ2edZLSQ
          claim_id: c_K5bhiwj3ZcN3XLNJUt6tyB
          source_id: s_FpG3zzh7UASK8gMyxMG6N8
          stance: supports
          locator: CBDB:702778
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（702778）
          source: &a1
            id: s_FpG3zzh7UASK8gMyxMG6N8
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 702778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702778&o=json
            external_identifier: CBDB:702778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.812Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vxdF4dCzEf66jaeGNpMSnC
        subject_person_id: p_QDP1vqaafP7CqjsKMAr5ry
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
        - id: cs_DXGejT8ebQCsPjua2xNPt3
          claim_id: c_vxdF4dCzEf66jaeGNpMSnC
          source_id: s_FpG3zzh7UASK8gMyxMG6N8
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

# 王綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綱 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 702778）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702778&o=json)
