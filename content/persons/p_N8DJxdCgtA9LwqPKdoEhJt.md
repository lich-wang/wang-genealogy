---
schema: wang-person/v1
id: p_N8DJxdCgtA9LwqPKdoEhJt
status: active
merged_into: null
display_name: 王孫恭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Px7Uh4b4P6Ldu1AyUE36oT
        subject_person_id: p_N8DJxdCgtA9LwqPKdoEhJt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孫恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W52Mkthgu3pLsj99W6Tc9o
          claim_id: c_Px7Uh4b4P6Ldu1AyUE36oT
          source_id: s_zFfDiCoSPR1as9mYyWSuEA
          stance: supports
          locator: CBDB:637022
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637022）
          source: &a1
            id: s_zFfDiCoSPR1as9mYyWSuEA
            source_type: api_record
            title: 中国历代人物传记资料库：王孫恭（CBDB 637022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637022&o=json
            external_identifier: CBDB:637022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.184Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_512imebHFvquey1xFGUPSB
        subject_person_id: p_N8DJxdCgtA9LwqPKdoEhJt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孫恭，清人物。籍贯福鼎，入仕鄉貢舉人，曾任教授、訓導。（中国历代人物传记资料库 CBDB 637022）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6Oq-QQGgE2EnIIefRNJulh
          claim_id: c_512imebHFvquey1xFGUPSB
          source_id: s_zFfDiCoSPR1as9mYyWSuEA
          stance: supports
          locator: CBDB:637022
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

# 王孫恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孫恭 | accepted |
| bio.summary | 王孫恭，清人物。籍贯福鼎，入仕鄉貢舉人，曾任教授、訓導。（中国历代人物传记资料库 CBDB 637022） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王孫恭（CBDB 637022）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637022&o=json)
