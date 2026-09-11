---
schema: wang-person/v1
id: p_FadYatBRiczDPMbHd7FoDD
status: active
merged_into: null
display_name: 王覺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_29XBwWYHryJW8otFGZuknq
        subject_person_id: p_FadYatBRiczDPMbHd7FoDD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王覺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vejSL7K5WmgodHY3b8M7hA
          claim_id: c_29XBwWYHryJW8otFGZuknq
          source_id: s_d9sGtB5km9evoGfrdAvXUW
          stance: supports
          locator: CBDB:45839
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45839）
          source: &a1
            id: s_d9sGtB5km9evoGfrdAvXUW
            source_type: api_record
            title: 中国历代人物传记资料库：王覺（CBDB 45839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45839&o=json
            external_identifier: CBDB:45839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.690Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_k75oZXUfrfnB4U4hcLPkto
        subject_person_id: p_FadYatBRiczDPMbHd7FoDD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王覺，宋人物。籍贯兗州，入仕進士，曾任上輕車都尉。（中国历代人物传记资料库 CBDB 45839）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fCNWGAmHp-Xo6Eqit6dapv
          claim_id: c_k75oZXUfrfnB4U4hcLPkto
          source_id: s_d9sGtB5km9evoGfrdAvXUW
          stance: supports
          locator: CBDB:45839
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

# 王覺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王覺 | accepted |
| bio.summary | 王覺，宋人物。籍贯兗州，入仕進士，曾任上輕車都尉。（中国历代人物传记资料库 CBDB 45839） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王覺（CBDB 45839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45839&o=json)
