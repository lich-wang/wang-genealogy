---
schema: wang-person/v1
id: p_BGxzmdTTzAs8ajx7MiJJNt
status: active
merged_into: null
display_name: 王之杲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hF7ppSRSw9YE7JgZ7PR11n
        subject_person_id: p_BGxzmdTTzAs8ajx7MiJJNt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之杲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bH1weaLFPssr7Z2S5xC7jQ
          claim_id: c_hF7ppSRSw9YE7JgZ7PR11n
          source_id: s_PuRXAnQi4LGV98KUMuiJsW
          stance: supports
          locator: CBDB:635790
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635790）
          source: &a1
            id: s_PuRXAnQi4LGV98KUMuiJsW
            source_type: api_record
            title: 中国历代人物传记资料库：王之杲（CBDB 635790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635790&o=json
            external_identifier: CBDB:635790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.793Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yhPAjofR4xd5ys3spZ8VA5
        subject_person_id: p_BGxzmdTTzAs8ajx7MiJJNt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之杲，清人物。籍贯盧氏，入仕鄉貢舉人，曾任知縣、知州。（中国历代人物传记资料库 CBDB 635790）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AFh1s6ixuUr7yg4fxXv5lg
          claim_id: c_yhPAjofR4xd5ys3spZ8VA5
          source_id: s_PuRXAnQi4LGV98KUMuiJsW
          stance: supports
          locator: CBDB:635790
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

# 王之杲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之杲 | accepted |
| bio.summary | 王之杲，清人物。籍贯盧氏，入仕鄉貢舉人，曾任知縣、知州。（中国历代人物传记资料库 CBDB 635790） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之杲（CBDB 635790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635790&o=json)
