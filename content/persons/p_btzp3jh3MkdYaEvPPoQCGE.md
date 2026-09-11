---
schema: wang-person/v1
id: p_btzp3jh3MkdYaEvPPoQCGE
status: active
merged_into: null
display_name: 王政
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ak43R7kXeNKCSty3sv8rpn
        subject_person_id: p_btzp3jh3MkdYaEvPPoQCGE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FyhXL6681p7gbeMo8V3BcK
          claim_id: c_Ak43R7kXeNKCSty3sv8rpn
          source_id: s_NU2QjDL6j7fzSB2bFmy1QM
          stance: supports
          locator: CBDB:309996
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309996）
          source: &a1
            id: s_NU2QjDL6j7fzSB2bFmy1QM
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 309996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309996&o=json
            external_identifier: CBDB:309996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.838Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pFUW8UxkBMbDVEPQvFV9GB
        subject_person_id: p_btzp3jh3MkdYaEvPPoQCGE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政，明人物。天順四年進士，籍贯南京錦衣衛。（中国历代人物传记资料库 CBDB 309996）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_glyahnEiI7LsK059B-c6Nl
          claim_id: c_pFUW8UxkBMbDVEPQvFV9GB
          source_id: s_NU2QjDL6j7fzSB2bFmy1QM
          stance: supports
          locator: CBDB:309996
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

# 王政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政 | accepted |
| bio.summary | 王政，明人物。天順四年進士，籍贯南京錦衣衛。（中国历代人物传记资料库 CBDB 309996） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王政（CBDB 309996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309996&o=json)
