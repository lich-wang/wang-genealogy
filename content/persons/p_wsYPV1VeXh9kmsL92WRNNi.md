---
schema: wang-person/v1
id: p_wsYPV1VeXh9kmsL92WRNNi
status: active
merged_into: null
display_name: 王克忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p1iLsnALZ81EDpxpA2jb2s
        subject_person_id: p_wsYPV1VeXh9kmsL92WRNNi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e1k2vXWKGZzggKw6XLubZ1
          claim_id: c_p1iLsnALZ81EDpxpA2jb2s
          source_id: s_RNXHFgcdPPpZ3cUuAGHEhy
          stance: supports
          locator: CBDB:636295
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636295）
          source: &a1
            id: s_RNXHFgcdPPpZ3cUuAGHEhy
            source_type: api_record
            title: 中国历代人物传记资料库：王克忠（CBDB 636295）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636295&o=json
            external_identifier: CBDB:636295
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.149Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jxn48LvtB1tgYbvzvS1L9e
        subject_person_id: p_wsYPV1VeXh9kmsL92WRNNi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克忠，清人物。籍贯海康，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 636295）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oq1NKz58xe2JSy1rNeli2I
          claim_id: c_jxn48LvtB1tgYbvzvS1L9e
          source_id: s_RNXHFgcdPPpZ3cUuAGHEhy
          stance: supports
          locator: CBDB:636295
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

# 王克忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克忠 | accepted |
| bio.summary | 王克忠，清人物。籍贯海康，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 636295） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克忠（CBDB 636295）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636295&o=json)
