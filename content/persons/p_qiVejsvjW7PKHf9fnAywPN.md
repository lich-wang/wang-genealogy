---
schema: wang-person/v1
id: p_qiVejsvjW7PKHf9fnAywPN
status: active
merged_into: null
display_name: 王玘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4Dfdn5vGvLf2HBgbnobtnb
        subject_person_id: p_qiVejsvjW7PKHf9fnAywPN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5jZHgyybiECRe6Fn9TM1mX
          claim_id: c_4Dfdn5vGvLf2HBgbnobtnb
          source_id: s_JnVfeY1b8kX24WpPPJFuMH
          stance: supports
          locator: CBDB:300352
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（300352）
          source: &a1
            id: s_JnVfeY1b8kX24WpPPJFuMH
            source_type: api_record
            title: 中国历代人物传记资料库：王玘（CBDB 300352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300352&o=json
            external_identifier: CBDB:300352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.621Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MsvSfKq2t65ToGiQxBFUt8
        subject_person_id: p_qiVejsvjW7PKHf9fnAywPN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玘，明人物。嘉靖十七年進士。（中国历代人物传记资料库 CBDB 300352）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yKVSe_ALEX1chC-5o-hvHc
          claim_id: c_MsvSfKq2t65ToGiQxBFUt8
          source_id: s_JnVfeY1b8kX24WpPPJFuMH
          stance: supports
          locator: CBDB:300352
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
  descendants:
    - claim:
        id: c_8_UI0cvB7TQfFsV0KDE-oM
        subject_person_id: p_qiVejsvjW7PKHf9fnAywPN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PBPvLNJEK4jPNCWDSKfDp5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y6ZO9Ws07b3QewAyCDWCKm
          claim_id: c_8_UI0cvB7TQfFsV0KDE-oM
          source_id: s_JnVfeY1b8kX24WpPPJFuMH
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第六十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PBPvLNJEK4jPNCWDSKfDp5
        status: active
        display_name: 王春復
        merged_into_person_id: null
  other: []
---

# 王玘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玘 | accepted |
| bio.summary | 王玘，明人物。嘉靖十七年進士。（中国历代人物传记资料库 CBDB 300352） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_PBPvLNJEK4jPNCWDSKfDp5 | 王春復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玘（CBDB 300352）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300352&o=json)
