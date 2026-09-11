---
schema: wang-person/v1
id: p_QPRaeJQoYuqwxAe9x5H2aC
status: active
merged_into: null
display_name: 王貽桂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xoNt6HJGa8WecQMQJ7q16L
        subject_person_id: p_QPRaeJQoYuqwxAe9x5H2aC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貽桂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_636Z9X1oz53KTbkvJwH8mr
          claim_id: c_xoNt6HJGa8WecQMQJ7q16L
          source_id: s_pFhPAEa7kYrp5xvaVnTWSj
          stance: supports
          locator: CBDB:466403
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（466403）
          source: &a1
            id: s_pFhPAEa7kYrp5xvaVnTWSj
            source_type: api_record
            title: 中国历代人物传记资料库：王貽桂（CBDB 466403）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466403&o=json
            external_identifier: CBDB:466403
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.963Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UXdYn2jtkgVDM3GwXL2KgX
        subject_person_id: p_QPRaeJQoYuqwxAe9x5H2aC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貽桂，明人物。曾任分巡道。（中国历代人物传记资料库 CBDB 466403）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8GPC_26EKJ_5SEX4QZwZC3
          claim_id: c_UXdYn2jtkgVDM3GwXL2KgX
          source_id: s_pFhPAEa7kYrp5xvaVnTWSj
          stance: supports
          locator: CBDB:466403
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

# 王貽桂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貽桂 | accepted |
| bio.summary | 王貽桂，明人物。曾任分巡道。（中国历代人物传记资料库 CBDB 466403） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王貽桂（CBDB 466403）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=466403&o=json)
