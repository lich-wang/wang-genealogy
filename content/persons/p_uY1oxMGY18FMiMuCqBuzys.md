---
schema: wang-person/v1
id: p_uY1oxMGY18FMiMuCqBuzys
status: active
merged_into: null
display_name: 王景伯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5MeBHpnF1Qx427KJX3MGNK
        subject_person_id: p_uY1oxMGY18FMiMuCqBuzys
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景伯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8N1sYwCQvDECuPaZQbyWfS
          claim_id: c_5MeBHpnF1Qx427KJX3MGNK
          source_id: s_KLCnLLQnhdJni9RAck6YMe
          stance: supports
          locator: CBDB:138150
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（138150）
          source: &a1
            id: s_KLCnLLQnhdJni9RAck6YMe
            source_type: api_record
            title: 中国历代人物传记资料库：王景伯（CBDB 138150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138150&o=json
            external_identifier: CBDB:138150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.356Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hMTGUazx1pAdhsrV8FLn5a
        subject_person_id: p_uY1oxMGY18FMiMuCqBuzys
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景伯，宋人物。寶祐進士，籍贯新建。（中国历代人物传记资料库 CBDB 138150）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8weDc3UtRw8-6T-7ObSu46
          claim_id: c_hMTGUazx1pAdhsrV8FLn5a
          source_id: s_KLCnLLQnhdJni9RAck6YMe
          stance: supports
          locator: CBDB:138150
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

# 王景伯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景伯 | accepted |
| bio.summary | 王景伯，宋人物。寶祐進士，籍贯新建。（中国历代人物传记资料库 CBDB 138150） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景伯（CBDB 138150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138150&o=json)
