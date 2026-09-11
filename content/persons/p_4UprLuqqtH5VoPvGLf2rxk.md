---
schema: wang-person/v1
id: p_4UprLuqqtH5VoPvGLf2rxk
status: active
merged_into: null
display_name: 王彥中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qeBFQ9wazPxCEbVftinsYZ
        subject_person_id: p_4UprLuqqtH5VoPvGLf2rxk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mS8zqjTzjqmqCWiGexsVWa
          claim_id: c_qeBFQ9wazPxCEbVftinsYZ
          source_id: s_ygfuguT9zEp3F7NDLGe9wx
          stance: supports
          locator: CBDB:537290
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（537290）
          source: &a1
            id: s_ygfuguT9zEp3F7NDLGe9wx
            source_type: api_record
            title: 中国历代人物传记资料库：王彥中（CBDB 537290）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=537290&o=json
            external_identifier: CBDB:537290
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.412Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NRdX7De3ZfvMD4PDByNHHh
        subject_person_id: p_4UprLuqqtH5VoPvGLf2rxk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥中，宋人物。籍贯睦州，入仕進士。（中国历代人物传记资料库 CBDB 537290）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PI_iDUxW7Ne4cL2pAHyPMA
          claim_id: c_NRdX7De3ZfvMD4PDByNHHh
          source_id: s_ygfuguT9zEp3F7NDLGe9wx
          stance: supports
          locator: CBDB:537290
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

# 王彥中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥中 | accepted |
| bio.summary | 王彥中，宋人物。籍贯睦州，入仕進士。（中国历代人物传记资料库 CBDB 537290） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彥中（CBDB 537290）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=537290&o=json)
