---
schema: wang-person/v1
id: p_fZiY6MBG3RY4LR8RRkuHhp
status: active
merged_into: null
display_name: 王敬儀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UCPsMZKfGH7SGkUJcvRRDP
        subject_person_id: p_fZiY6MBG3RY4LR8RRkuHhp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬儀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BxRY5VWupGzh49ACxNnPmV
          claim_id: c_UCPsMZKfGH7SGkUJcvRRDP
          source_id: s_eEaCNuanEKpv1brG6wnFJE
          stance: supports
          locator: CBDB:568760
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568760）
          source: &a1
            id: s_eEaCNuanEKpv1brG6wnFJE
            source_type: api_record
            title: 中国历代人物传记资料库：王敬儀（CBDB 568760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568760&o=json
            external_identifier: CBDB:568760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.619Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iajCYko4mpBNQ7RnCKK6qL
        subject_person_id: p_fZiY6MBG3RY4LR8RRkuHhp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬儀，清人物。籍贯銅山。（中国历代人物传记资料库 CBDB 568760）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KypWCW243cEo63_IlAITVk
          claim_id: c_iajCYko4mpBNQ7RnCKK6qL
          source_id: s_eEaCNuanEKpv1brG6wnFJE
          stance: supports
          locator: CBDB:568760
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

# 王敬儀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬儀 | accepted |
| bio.summary | 王敬儀，清人物。籍贯銅山。（中国历代人物传记资料库 CBDB 568760） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敬儀（CBDB 568760）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568760&o=json)
