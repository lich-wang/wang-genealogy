---
schema: wang-person/v1
id: p_hNiTssWKSB3dSXe3yEWEXC
status: active
merged_into: null
display_name: 王仲基
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s9PshCPHcFuee8oiWF8Ty9
        subject_person_id: p_hNiTssWKSB3dSXe3yEWEXC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TkV7KDPZALo45MGJCdUt5u
          claim_id: c_s9PshCPHcFuee8oiWF8Ty9
          source_id: s_WFjGPYE2nUuFpAbeUYQs83
          stance: supports
          locator: CBDB:635939
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635939）
          source: &a1
            id: s_WFjGPYE2nUuFpAbeUYQs83
            source_type: api_record
            title: 中国历代人物传记资料库：王仲基（CBDB 635939）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635939&o=json
            external_identifier: CBDB:635939
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.838Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2gkTxLYxpHdqge2r7aZrmW
        subject_person_id: p_hNiTssWKSB3dSXe3yEWEXC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲基，清人物。籍贯武安，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 635939）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_teahz41UwuMuroz0kDe6k4
          claim_id: c_2gkTxLYxpHdqge2r7aZrmW
          source_id: s_WFjGPYE2nUuFpAbeUYQs83
          stance: supports
          locator: CBDB:635939
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

# 王仲基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲基 | accepted |
| bio.summary | 王仲基，清人物。籍贯武安，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 635939） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲基（CBDB 635939）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635939&o=json)
