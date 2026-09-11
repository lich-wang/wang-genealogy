---
schema: wang-person/v1
id: p_Zq8gySfBm3nX8NtqHNdbcP
status: active
merged_into: null
display_name: 王郜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hvBHPN8ceBSSSKB8cDQygz
        subject_person_id: p_Zq8gySfBm3nX8NtqHNdbcP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王郜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PR2kJQSUE3rPB7bUJKzkuz
          claim_id: c_hvBHPN8ceBSSSKB8cDQygz
          source_id: s_iGUa6Yw2vzxHytUzcgc1mt
          stance: supports
          locator: CBDB:380332
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（380332）
          source: &a1
            id: s_iGUa6Yw2vzxHytUzcgc1mt
            source_type: api_record
            title: 中国历代人物传记资料库：王郜（CBDB 380332）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380332&o=json
            external_identifier: CBDB:380332
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.721Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BydHieuttRbHB3yabRNE1o
        subject_person_id: p_Zq8gySfBm3nX8NtqHNdbcP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王郜，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 380332）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_deS7LLq4vdN7Vvb78Zdt-5
          claim_id: c_BydHieuttRbHB3yabRNE1o
          source_id: s_iGUa6Yw2vzxHytUzcgc1mt
          stance: supports
          locator: CBDB:380332
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

# 王郜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王郜 | accepted |
| bio.summary | 王郜，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 380332） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王郜（CBDB 380332）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=380332&o=json)
