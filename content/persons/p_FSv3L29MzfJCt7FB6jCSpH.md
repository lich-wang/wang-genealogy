---
schema: wang-person/v1
id: p_FSv3L29MzfJCt7FB6jCSpH
status: active
merged_into: null
display_name: 王教炳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MNA8aHuWxUNzy4oYkALpEZ
        subject_person_id: p_FSv3L29MzfJCt7FB6jCSpH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王教炳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GEDmFpq6NC53RA3vpPGaA5
          claim_id: c_MNA8aHuWxUNzy4oYkALpEZ
          source_id: s_AEGH9Ltj3Y22nFRdXbS5rB
          stance: supports
          locator: CBDB:638175
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638175）
          source: &a1
            id: s_AEGH9Ltj3Y22nFRdXbS5rB
            source_type: api_record
            title: 中国历代人物传记资料库：王教炳（CBDB 638175）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638175&o=json
            external_identifier: CBDB:638175
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.552Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QUL84HTuA57jqy3JQFx4Lr
        subject_person_id: p_FSv3L29MzfJCt7FB6jCSpH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王教炳，清人物。籍贯平陽，入仕貢生: 恩貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 638175）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Sjh4-Vu2R8kdlmb6GLNSyS
          claim_id: c_QUL84HTuA57jqy3JQFx4Lr
          source_id: s_AEGH9Ltj3Y22nFRdXbS5rB
          stance: supports
          locator: CBDB:638175
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

# 王教炳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王教炳 | accepted |
| bio.summary | 王教炳，清人物。籍贯平陽，入仕貢生: 恩貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 638175） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王教炳（CBDB 638175）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638175&o=json)
