---
schema: wang-person/v1
id: p_QPU4EEE62CwDMuEj2Sa16w
status: active
merged_into: null
display_name: 王尤恭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L5U1WCntXJACvjkNexnGkn
        subject_person_id: p_QPU4EEE62CwDMuEj2Sa16w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尤恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SN3ikxfq45rESWFt6GARYS
          claim_id: c_L5U1WCntXJACvjkNexnGkn
          source_id: s_59x3wgj6SmW6K21tQ1t3AF
          stance: supports
          locator: CBDB:637296
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637296）
          source: &a1
            id: s_59x3wgj6SmW6K21tQ1t3AF
            source_type: api_record
            title: 中国历代人物传记资料库：王尤恭（CBDB 637296）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637296&o=json
            external_identifier: CBDB:637296
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.272Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Yr28YvsDH6RSUt7uofuG6J
        subject_person_id: p_QPU4EEE62CwDMuEj2Sa16w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尤恭，清人物。籍贯大興，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 637296）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1ltqWaqTqbRCrmtOLtCqJ7
          claim_id: c_Yr28YvsDH6RSUt7uofuG6J
          source_id: s_59x3wgj6SmW6K21tQ1t3AF
          stance: supports
          locator: CBDB:637296
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

# 王尤恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尤恭 | accepted |
| bio.summary | 王尤恭，清人物。籍贯大興，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 637296） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王尤恭（CBDB 637296）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637296&o=json)
