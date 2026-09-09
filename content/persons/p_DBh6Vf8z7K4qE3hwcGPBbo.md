---
schema: wang-person/v1
id: p_DBh6Vf8z7K4qE3hwcGPBbo
status: active
merged_into: null
display_name: 王萃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_znxvKb7FNphmVUkiF9vMF2
        subject_person_id: p_DBh6Vf8z7K4qE3hwcGPBbo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YyGTTXSwzk6DYFvT8AepLr
          claim_id: c_znxvKb7FNphmVUkiF9vMF2
          source_id: s_ygSK85SQ5KK3Y5yAwK2z41
          stance: supports
          locator: CBDB:155342
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（155342）
          source: &a1
            id: s_ygSK85SQ5KK3Y5yAwK2z41
            source_type: api_record
            title: 中国历代人物传记资料库：王萃（CBDB 155342）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155342&o=json
            external_identifier: CBDB:155342
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.876Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SMCbsANFyzmEGpVCN4SqXt
        subject_person_id: p_DBh6Vf8z7K4qE3hwcGPBbo
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
        - id: cs_JJbDd4JAL9RferqE2NcuGi
          claim_id: c_SMCbsANFyzmEGpVCN4SqXt
          source_id: s_ygSK85SQ5KK3Y5yAwK2z41
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

# 王萃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萃 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萃（CBDB 155342）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155342&o=json)
