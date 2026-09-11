---
schema: wang-person/v1
id: p_19RxZmjh4nZqqWVMFzUmcG
status: active
merged_into: null
display_name: 王德昭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pwYXMPxdmD7vy4WRojvmJ1
        subject_person_id: p_19RxZmjh4nZqqWVMFzUmcG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德昭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TahmpfzZ6quwAvANRnsND1
          claim_id: c_pwYXMPxdmD7vy4WRojvmJ1
          source_id: s_XyxtzhciViX7o5nCo49A9v
          stance: supports
          locator: CBDB:637881
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637881）
          source: &a1
            id: s_XyxtzhciViX7o5nCo49A9v
            source_type: api_record
            title: 中国历代人物传记资料库：王德昭（CBDB 637881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637881&o=json
            external_identifier: CBDB:637881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.553Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EqEKtoNdPr2pc6T9wjkp9G
        subject_person_id: p_19RxZmjh4nZqqWVMFzUmcG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德昭，清人物。籍贯貴陽府，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 637881）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_quMRwLvYwARq6TuilFbq_D
          claim_id: c_EqEKtoNdPr2pc6T9wjkp9G
          source_id: s_XyxtzhciViX7o5nCo49A9v
          stance: supports
          locator: CBDB:637881
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

# 王德昭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德昭 | accepted |
| bio.summary | 王德昭，清人物。籍贯貴陽府，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 637881） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德昭（CBDB 637881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637881&o=json)
