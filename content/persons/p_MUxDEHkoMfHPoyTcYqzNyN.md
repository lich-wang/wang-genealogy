---
schema: wang-person/v1
id: p_MUxDEHkoMfHPoyTcYqzNyN
status: active
merged_into: null
display_name: 王閏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dJAay19XbN178Wh6XpbZNm
        subject_person_id: p_MUxDEHkoMfHPoyTcYqzNyN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王閏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_teK7rKva3HGp7utP5t6bUU
          claim_id: c_dJAay19XbN178Wh6XpbZNm
          source_id: s_vYLTfVjT6bPEXJ9gfN3DaW
          stance: supports
          locator: CBDB:244962
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244962）
          source: &a1
            id: s_vYLTfVjT6bPEXJ9gfN3DaW
            source_type: api_record
            title: 中国历代人物传记资料库：王閏（CBDB 244962）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244962&o=json
            external_identifier: CBDB:244962
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.045Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vAcAqvzrFucpEFPE47Fe7s
        subject_person_id: p_MUxDEHkoMfHPoyTcYqzNyN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王閏，明人物。成化五年進士，籍贯武城。（中国历代人物传记资料库 CBDB 244962）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LuTo5xqS3MCWfGY-b8QeKb
          claim_id: c_vAcAqvzrFucpEFPE47Fe7s
          source_id: s_vYLTfVjT6bPEXJ9gfN3DaW
          stance: supports
          locator: CBDB:244962
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

# 王閏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王閏 | accepted |
| bio.summary | 王閏，明人物。成化五年進士，籍贯武城。（中国历代人物传记资料库 CBDB 244962） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王閏（CBDB 244962）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244962&o=json)
