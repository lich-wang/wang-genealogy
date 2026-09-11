---
schema: wang-person/v1
id: p_WVeXpq1K3PnxjzRHbEd4KM
status: active
merged_into: null
display_name: 王世瓏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FwMDg3BZivopvE5GJcx6Rt
        subject_person_id: p_WVeXpq1K3PnxjzRHbEd4KM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世瓏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2hgHN8Va23rajmKb2cjy5R
          claim_id: c_FwMDg3BZivopvE5GJcx6Rt
          source_id: s_k3QMhVFuXmG1u5EhamYrdh
          stance: supports
          locator: CBDB:635702
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635702）
          source: &a1
            id: s_k3QMhVFuXmG1u5EhamYrdh
            source_type: api_record
            title: 中国历代人物传记资料库：王世瓏（CBDB 635702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635702&o=json
            external_identifier: CBDB:635702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.003Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KFUNfBpS6LPNaWcK8sZEu2
        subject_person_id: p_WVeXpq1K3PnxjzRHbEd4KM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世瓏，清人物。籍贯清苑，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 635702）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JP_AjWHek3ywIzOCW4nEhJ
          claim_id: c_KFUNfBpS6LPNaWcK8sZEu2
          source_id: s_k3QMhVFuXmG1u5EhamYrdh
          stance: supports
          locator: CBDB:635702
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

# 王世瓏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世瓏 | accepted |
| bio.summary | 王世瓏，清人物。籍贯清苑，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 635702） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世瓏（CBDB 635702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635702&o=json)
