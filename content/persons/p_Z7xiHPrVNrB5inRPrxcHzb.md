---
schema: wang-person/v1
id: p_Z7xiHPrVNrB5inRPrxcHzb
status: active
merged_into: null
display_name: 王學弼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nu5FEtV2rEYoUe2ogzEyjN
        subject_person_id: p_Z7xiHPrVNrB5inRPrxcHzb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4HEachk4vTUGEEvqKG92vr
          claim_id: c_Nu5FEtV2rEYoUe2ogzEyjN
          source_id: s_obZJwKXo65ZbtfFJoy8YDq
          stance: supports
          locator: CBDB:637032
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637032）
          source: &a1
            id: s_obZJwKXo65ZbtfFJoy8YDq
            source_type: api_record
            title: 中国历代人物传记资料库：王學弼（CBDB 637032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637032&o=json
            external_identifier: CBDB:637032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.189Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_61CXssELx7J1fQzKRAvbFA
        subject_person_id: p_Z7xiHPrVNrB5inRPrxcHzb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學弼，清人物。籍贯大荔，入仕鄉貢舉人，曾任教授、學正。（中国历代人物传记资料库 CBDB 637032）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0S5U410LMR4hLAt4qRIP7r
          claim_id: c_61CXssELx7J1fQzKRAvbFA
          source_id: s_obZJwKXo65ZbtfFJoy8YDq
          stance: supports
          locator: CBDB:637032
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

# 王學弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學弼 | accepted |
| bio.summary | 王學弼，清人物。籍贯大荔，入仕鄉貢舉人，曾任教授、學正。（中国历代人物传记资料库 CBDB 637032） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王學弼（CBDB 637032）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637032&o=json)
