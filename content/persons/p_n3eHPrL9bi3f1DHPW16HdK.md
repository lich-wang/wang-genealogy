---
schema: wang-person/v1
id: p_n3eHPrL9bi3f1DHPW16HdK
status: active
merged_into: null
display_name: 王清榳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d8JQQ8Ryj5W1opt7M8epYP
        subject_person_id: p_n3eHPrL9bi3f1DHPW16HdK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清榳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jcEEGgdPc98Ut5zsdRLSTf
          claim_id: c_d8JQQ8Ryj5W1opt7M8epYP
          source_id: s_awYBzuJB2d6NYp91nYvmA7
          stance: supports
          locator: CBDB:639139
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639139）
          source: &a1
            id: s_awYBzuJB2d6NYp91nYvmA7
            source_type: api_record
            title: 中国历代人物传记资料库：王清榳（CBDB 639139）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639139&o=json
            external_identifier: CBDB:639139
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.855Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pj1YdEuxHWKFbyPJhAN88y
        subject_person_id: p_n3eHPrL9bi3f1DHPW16HdK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清榳，清人物。籍贯高密，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 639139）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_h8YcB4BX011UKn7UypCmmG
          claim_id: c_pj1YdEuxHWKFbyPJhAN88y
          source_id: s_awYBzuJB2d6NYp91nYvmA7
          stance: supports
          locator: CBDB:639139
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

# 王清榳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王清榳 | accepted |
| bio.summary | 王清榳，清人物。籍贯高密，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 639139） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王清榳（CBDB 639139）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639139&o=json)
