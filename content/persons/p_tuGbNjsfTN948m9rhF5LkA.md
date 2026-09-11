---
schema: wang-person/v1
id: p_tuGbNjsfTN948m9rhF5LkA
status: active
merged_into: null
display_name: 王秋揚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BxtfZ1D4LKsByjDQLWCRdB
        subject_person_id: p_tuGbNjsfTN948m9rhF5LkA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秋揚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AM3u8AdkBANFoXgch2DTE1
          claim_id: c_BxtfZ1D4LKsByjDQLWCRdB
          source_id: s_CEPthjs3WzYeeCNHC8862U
          stance: supports
          locator: CBDB:639669
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639669）
          source: &a1
            id: s_CEPthjs3WzYeeCNHC8862U
            source_type: api_record
            title: 中国历代人物传记资料库：王秋揚（CBDB 639669）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639669&o=json
            external_identifier: CBDB:639669
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.010Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AtQuKHz3bD6wUbJFaCJg9J
        subject_person_id: p_tuGbNjsfTN948m9rhF5LkA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秋揚，清人物。籍贯河南省，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 639669）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mLx41PNOn9Sr4Ty-nsFhEF
          claim_id: c_AtQuKHz3bD6wUbJFaCJg9J
          source_id: s_CEPthjs3WzYeeCNHC8862U
          stance: supports
          locator: CBDB:639669
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

# 王秋揚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秋揚 | accepted |
| bio.summary | 王秋揚，清人物。籍贯河南省，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 639669） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秋揚（CBDB 639669）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639669&o=json)
