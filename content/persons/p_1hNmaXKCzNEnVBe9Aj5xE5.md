---
schema: wang-person/v1
id: p_1hNmaXKCzNEnVBe9Aj5xE5
status: active
merged_into: null
display_name: 王維楨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ghq5nSMYW49uoggfL9GdMt
        subject_person_id: p_1hNmaXKCzNEnVBe9Aj5xE5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維楨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HXEMPqBSpr7pN4uz1CHGWs
          claim_id: c_Ghq5nSMYW49uoggfL9GdMt
          source_id: s_YkN8VJc3kTi1Uk2UY6kQd6
          stance: supports
          locator: CBDB:639824
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639824）
          source: &a1
            id: s_YkN8VJc3kTi1Uk2UY6kQd6
            source_type: api_record
            title: 中国历代人物传记资料库：王維楨（CBDB 639824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639824&o=json
            external_identifier: CBDB:639824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.983Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6q2N3XVsLNWetGJ9mL8BCU
        subject_person_id: p_1hNmaXKCzNEnVBe9Aj5xE5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王維楨，清人物。籍贯鳳陽，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 639824）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__UlZfjCzg5wLk_jc1XRnN0
          claim_id: c_6q2N3XVsLNWetGJ9mL8BCU
          source_id: s_YkN8VJc3kTi1Uk2UY6kQd6
          stance: supports
          locator: CBDB:639824
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

# 王維楨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維楨 | accepted |
| bio.summary | 王維楨，清人物。籍贯鳳陽，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 639824） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王維楨（CBDB 639824）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639824&o=json)
