---
schema: wang-person/v1
id: p_oaap5ejq8vcbZ7ipcsZ1Hu
status: active
merged_into: null
display_name: 王經
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pwmpBoPSFK6C33rfvgZ2cY
        subject_person_id: p_oaap5ejq8vcbZ7ipcsZ1Hu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b4xvsj82uFihV7VBwUqAct
          claim_id: c_pwmpBoPSFK6C33rfvgZ2cY
          source_id: s_L4og4kPTQQS3BRWA2CpaMB
          stance: supports
          locator: CBDB:100875
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100875）
          source: &a1
            id: s_L4og4kPTQQS3BRWA2CpaMB
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 100875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100875&o=json
            external_identifier: CBDB:100875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.530Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NMk3EtE3rnu5x5FyBjbAi6
        subject_person_id: p_oaap5ejq8vcbZ7ipcsZ1Hu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經，明人物。籍贯金谿，身份为孝子/孝女，入仕進士，曾任刑部員外郎、縣令。（中国历代人物传记资料库 CBDB 100875）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QjAJTnui8y3XCraedURmdh
          claim_id: c_NMk3EtE3rnu5x5FyBjbAi6
          source_id: s_L4og4kPTQQS3BRWA2CpaMB
          stance: supports
          locator: CBDB:100875
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

# 王經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王經 | accepted |
| bio.summary | 王經，明人物。籍贯金谿，身份为孝子/孝女，入仕進士，曾任刑部員外郎、縣令。（中国历代人物传记资料库 CBDB 100875） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王經（CBDB 100875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100875&o=json)
