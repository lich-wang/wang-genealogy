---
schema: wang-person/v1
id: p_H38dnACbPd9KKJs1xRbQYG
status: active
merged_into: null
display_name: 王汲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4RGaLjDpg6mvuNjmcNc8qt
        subject_person_id: p_H38dnACbPd9KKJs1xRbQYG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iRzqn1peEJy2QofWdWWPH3
          claim_id: c_4RGaLjDpg6mvuNjmcNc8qt
          source_id: s_J4Py4pWqDUdb885HYLfn2W
          stance: supports
          locator: CBDB:35680
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35680）
          source: &a1
            id: s_J4Py4pWqDUdb885HYLfn2W
            source_type: api_record
            title: 中国历代人物传记资料库：王汲（CBDB 35680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35680&o=json
            external_identifier: CBDB:35680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.155Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h1TySZdYRuLJqL1AFHH4BW
        subject_person_id: p_H38dnACbPd9KKJs1xRbQYG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汲，宋人物。籍贯鄞縣，身份为未仕而卒、未參加科舉而卒。（中国历代人物传记资料库 CBDB 35680）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TlulhAVDufOZ3KugVeoFOY
          claim_id: c_h1TySZdYRuLJqL1AFHH4BW
          source_id: s_J4Py4pWqDUdb885HYLfn2W
          stance: supports
          locator: CBDB:35680
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wulpn6aADzO7uvMlY9Ixxx
        subject_person_id: p_WfKGNEwFj8S9f7DUKj8X6D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H38dnACbPd9KKJs1xRbQYG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XXkUREl30dmyKvnKKcvdnh
          claim_id: c_wulpn6aADzO7uvMlY9Ixxx
          source_id: s_B1nj8mR3NAE4mrHv3PcTbr
          stance: supports
          locator: CBDB 亲属：父（KinPerson 3948）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_B1nj8mR3NAE4mrHv3PcTbr
            source_type: api_record
            title: 中国历代人物传记资料库：王汲（CBDB 35680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35680&o=json
            external_identifier: CBDB:35680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WfKGNEwFj8S9f7DUKj8X6D
        status: active
        display_name: 王正己
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王汲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汲 | accepted |
| bio.summary | 王汲，宋人物。籍贯鄞縣，身份为未仕而卒、未參加科舉而卒。（中国历代人物传记资料库 CBDB 35680） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WfKGNEwFj8S9f7DUKj8X6D | 王正己 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汲（CBDB 35680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35680&o=json)
