---
schema: wang-person/v1
id: p_eTvd1T7BKcJUbbtKHvenyr
status: active
merged_into: null
display_name: 王克恭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NBkDRt3byp4qHe3Ur4FMuV
        subject_person_id: p_eTvd1T7BKcJUbbtKHvenyr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EGd9y1otdZpC8e73Bw8KH1
          claim_id: c_NBkDRt3byp4qHe3Ur4FMuV
          source_id: s_iRsmJuNJNq5H5AjXU2YCTS
          stance: supports
          locator: CBDB:101196
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101196）
          source: &a1
            id: s_iRsmJuNJNq5H5AjXU2YCTS
            source_type: api_record
            title: 中国历代人物传记资料库：王克恭（CBDB 101196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101196&o=json
            external_identifier: CBDB:101196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.740Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2EB1QKKa94rhmDU83EoWXN
        subject_person_id: p_eTvd1T7BKcJUbbtKHvenyr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克恭，元人物。籍贯福寧州，入仕徵辟，曾任縣主簿、主簿、州判官。（中国历代人物传记资料库 CBDB 101196）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bfkDITIVFybR3THIdbfSj3
          claim_id: c_2EB1QKKa94rhmDU83EoWXN
          source_id: s_iRsmJuNJNq5H5AjXU2YCTS
          stance: supports
          locator: CBDB:101196
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

# 王克恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克恭 | accepted |
| bio.summary | 王克恭，元人物。籍贯福寧州，入仕徵辟，曾任縣主簿、主簿、州判官。（中国历代人物传记资料库 CBDB 101196） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克恭（CBDB 101196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101196&o=json)
