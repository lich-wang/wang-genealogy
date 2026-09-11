---
schema: wang-person/v1
id: p_QdLTCn3uQWf8jvos233cZk
status: active
merged_into: null
display_name: 王胄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BjfALrJ4wXutW4jPDedWeY
        subject_person_id: p_QdLTCn3uQWf8jvos233cZk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王胄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qbM2b2e8E1mhA97UvzHRJh
          claim_id: c_BjfALrJ4wXutW4jPDedWeY
          source_id: s_Bj2LbYGo4XM8H2BnzEFSYr
          stance: supports
          locator: CBDB:381026
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（381026）
          source: &a1
            id: s_Bj2LbYGo4XM8H2BnzEFSYr
            source_type: api_record
            title: 中国历代人物传记资料库：王胄（CBDB 381026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=381026&o=json
            external_identifier: CBDB:381026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.755Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_grSePqXpZpjPEGuDJSZEeu
        subject_person_id: p_QdLTCn3uQWf8jvos233cZk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王胄，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 381026）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MMUyEkmPM_6vpBtYF0HEQE
          claim_id: c_grSePqXpZpjPEGuDJSZEeu
          source_id: s_Bj2LbYGo4XM8H2BnzEFSYr
          stance: supports
          locator: CBDB:381026
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

# 王胄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王胄 | accepted |
| bio.summary | 王胄，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 381026） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王胄（CBDB 381026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=381026&o=json)
