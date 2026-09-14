---
schema: wang-person/v1
id: p_yzC1268oFcSh27WBMDz2iL
status: active
merged_into: null
display_name: 王楫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QaQygMkPD76uPdKyz5bCB3
        subject_person_id: p_yzC1268oFcSh27WBMDz2iL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XYfDGN5V1tsSyok9FoNe49
          claim_id: c_QaQygMkPD76uPdKyz5bCB3
          source_id: s_F6cpRE3j21KveVz59pafSn
          stance: supports
          locator: CBDB:21975
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（21975）
          source: &a1
            id: s_F6cpRE3j21KveVz59pafSn
            source_type: api_record
            title: 中国历代人物传记资料库：王楫（CBDB 21975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21975&o=json
            external_identifier: CBDB:21975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.786Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8X2qZ5CB4RbGeDBURCEdve
        subject_person_id: p_yzC1268oFcSh27WBMDz2iL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楫，宋人物。籍贯上饒，入仕進士，曾任縣令。（中国历代人物传记资料库 CBDB 21975）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TjIWdLbYSbzkEZe-eqk7H_
          claim_id: c_8X2qZ5CB4RbGeDBURCEdve
          source_id: s_F6cpRE3j21KveVz59pafSn
          stance: supports
          locator: CBDB:21975
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SW_HhLhDu0o8qDlQVuPPwX
        subject_person_id: p_3Ai1qkYjUBdtWJB4qPpmzV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yzC1268oFcSh27WBMDz2iL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H5PuyswOZsTaCqZDO7b8BW
          claim_id: c_SW_HhLhDu0o8qDlQVuPPwX
          source_id: s_SqWN6vAN5R-oaElyY4nzKt
          stance: supports
          locator: CBDB 亲属：父（KinPerson 22015）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_SqWN6vAN5R-oaElyY4nzKt
            source_type: api_record
            title: 中国历代人物传记资料库：王楫（CBDB 21975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21975&o=json
            external_identifier: CBDB:21975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3Ai1qkYjUBdtWJB4qPpmzV
        status: active
        display_name: 王湘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王楫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楫 | accepted |
| bio.summary | 王楫，宋人物。籍贯上饒，入仕進士，曾任縣令。（中国历代人物传记资料库 CBDB 21975） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3Ai1qkYjUBdtWJB4qPpmzV | 王湘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王楫（CBDB 21975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21975&o=json)
