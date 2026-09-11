---
schema: wang-person/v1
id: p_hxVy9GuvBhgUDTTAZXG1QY
status: active
merged_into: null
display_name: 王琯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vgSSR8VQj9Wo4uFk3YdJ5T
        subject_person_id: p_hxVy9GuvBhgUDTTAZXG1QY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GPkHQu82u5ZDR21PFxoXar
          claim_id: c_vgSSR8VQj9Wo4uFk3YdJ5T
          source_id: s_tdJ5VjgKdkKRenCss4NaZC
          stance: supports
          locator: CBDB:341969
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341969）
          source: &a1
            id: s_tdJ5VjgKdkKRenCss4NaZC
            source_type: api_record
            title: 中国历代人物传记资料库：王琯（CBDB 341969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341969&o=json
            external_identifier: CBDB:341969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.790Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MzsDUKDCCak27KSiL1KB3V
        subject_person_id: p_hxVy9GuvBhgUDTTAZXG1QY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琯，清人物。明清進士進士，籍贯交河，入仕進士，曾任學政。（中国历代人物传记资料库 CBDB 341969）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YDGpCbk72S5uTnSDAcdjVq
          claim_id: c_MzsDUKDCCak27KSiL1KB3V
          source_id: s_tdJ5VjgKdkKRenCss4NaZC
          stance: supports
          locator: CBDB:341969
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

# 王琯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琯 | accepted |
| bio.summary | 王琯，清人物。明清進士進士，籍贯交河，入仕進士，曾任學政。（中国历代人物传记资料库 CBDB 341969） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琯（CBDB 341969）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341969&o=json)
