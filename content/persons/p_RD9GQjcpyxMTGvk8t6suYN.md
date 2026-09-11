---
schema: wang-person/v1
id: p_RD9GQjcpyxMTGvk8t6suYN
status: active
merged_into: null
display_name: 王增
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LM7Vq4dBkFYEg5nd5u4SNZ
        subject_person_id: p_RD9GQjcpyxMTGvk8t6suYN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王增
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9TBi142e29krTxzijzQ4WJ
          claim_id: c_LM7Vq4dBkFYEg5nd5u4SNZ
          source_id: s_uEe6f9voPa8YKy9ZWJdcG3
          stance: supports
          locator: CBDB:343305
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343305）
          source: &a1
            id: s_uEe6f9voPa8YKy9ZWJdcG3
            source_type: api_record
            title: 中国历代人物传记资料库：王增（CBDB 343305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343305&o=json
            external_identifier: CBDB:343305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.283Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SdtLScoiTapDUjES3S7sz9
        subject_person_id: p_RD9GQjcpyxMTGvk8t6suYN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王增，清人物。明清進士進士，籍贯會稽，入仕進士，曾任編修、同考官。（中国历代人物传记资料库 CBDB 343305）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oeBeir0y_ugsGaedjCSaoK
          claim_id: c_SdtLScoiTapDUjES3S7sz9
          source_id: s_uEe6f9voPa8YKy9ZWJdcG3
          stance: supports
          locator: CBDB:343305
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

# 王增

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王增 | accepted |
| bio.summary | 王增，清人物。明清進士進士，籍贯會稽，入仕進士，曾任編修、同考官。（中国历代人物传记资料库 CBDB 343305） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王增（CBDB 343305）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343305&o=json)
