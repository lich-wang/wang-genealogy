---
schema: wang-person/v1
id: p_TP1Ex1VEusLFsBT8p2qNEB
status: active
merged_into: null
display_name: 王璟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qXqkdvmdrwKiBuSrYfhb5M
        subject_person_id: p_TP1Ex1VEusLFsBT8p2qNEB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bmbnPxj2G2q8hR73sVkd8J
          claim_id: c_qXqkdvmdrwKiBuSrYfhb5M
          source_id: s_em39yFkmaPCqciBDnu8riM
          stance: supports
          locator: CBDB:304805
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304805）
          source: &a1
            id: s_em39yFkmaPCqciBDnu8riM
            source_type: api_record
            title: 中国历代人物传记资料库：王璟（CBDB 304805）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304805&o=json
            external_identifier: CBDB:304805
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.735Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jMyMXjdc3yfbgFhSg2S5qa
        subject_person_id: p_TP1Ex1VEusLFsBT8p2qNEB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璟，明人物。天順元年進士，籍贯陝州。（中国历代人物传记资料库 CBDB 304805）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cSbxK7nzbkPYbE-J1rsjP7
          claim_id: c_jMyMXjdc3yfbgFhSg2S5qa
          source_id: s_em39yFkmaPCqciBDnu8riM
          stance: supports
          locator: CBDB:304805
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

# 王璟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璟 | accepted |
| bio.summary | 王璟，明人物。天順元年進士，籍贯陝州。（中国历代人物传记资料库 CBDB 304805） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璟（CBDB 304805）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304805&o=json)
