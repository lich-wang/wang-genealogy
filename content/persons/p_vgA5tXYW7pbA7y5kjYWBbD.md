---
schema: wang-person/v1
id: p_vgA5tXYW7pbA7y5kjYWBbD
status: active
merged_into: null
display_name: 王祁年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8VM2HWB329WQ7MttcRgjHQ
        subject_person_id: p_vgA5tXYW7pbA7y5kjYWBbD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祁年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8JEavmzsQCnHUL29N9mZaA
          claim_id: c_8VM2HWB329WQ7MttcRgjHQ
          source_id: s_wwL2MTWNtj18bAzab3iRHu
          stance: supports
          locator: CBDB:639563
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639563）
          source: &a1
            id: s_wwL2MTWNtj18bAzab3iRHu
            source_type: api_record
            title: 中国历代人物传记资料库：王祁年（CBDB 639563）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639563&o=json
            external_identifier: CBDB:639563
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.972Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z842ucJ5uA8tc7B1xZVDU7
        subject_person_id: p_vgA5tXYW7pbA7y5kjYWBbD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王祁年，清人物。籍贯江寧，入仕監生: 例監(附監生)，曾任典史。（中国历代人物传记资料库 CBDB 639563）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_faiyjovlPAwQL7MY34OdxP
          claim_id: c_z842ucJ5uA8tc7B1xZVDU7
          source_id: s_wwL2MTWNtj18bAzab3iRHu
          stance: supports
          locator: CBDB:639563
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

# 王祁年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祁年 | accepted |
| bio.summary | 王祁年，清人物。籍贯江寧，入仕監生: 例監(附監生)，曾任典史。（中国历代人物传记资料库 CBDB 639563） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祁年（CBDB 639563）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639563&o=json)
