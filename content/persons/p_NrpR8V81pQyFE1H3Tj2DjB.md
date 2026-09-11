---
schema: wang-person/v1
id: p_NrpR8V81pQyFE1H3Tj2DjB
status: active
merged_into: null
display_name: 王鳳椿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ULo8kAYQ5QzA2n3zx7A1vy
        subject_person_id: p_NrpR8V81pQyFE1H3Tj2DjB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳椿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oyG6ZKjiPgWTyS3uFX3Eb8
          claim_id: c_ULo8kAYQ5QzA2n3zx7A1vy
          source_id: s_yyuip5QvUxJjJB9G7zwQQD
          stance: supports
          locator: CBDB:640959
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640959）
          source: &a1
            id: s_yyuip5QvUxJjJB9G7zwQQD
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳椿（CBDB 640959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640959&o=json
            external_identifier: CBDB:640959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.427Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9kSV2Gy4gULACdmnQaT283
        subject_person_id: p_NrpR8V81pQyFE1H3Tj2DjB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王鳳椿，清人物。籍贯山東省，入仕科舉制舉: 武舉科，曾任千總、守備。（中国历代人物传记资料库 CBDB 640959）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AN04MBJ60IJHSsZSd7IEhe
          claim_id: c_9kSV2Gy4gULACdmnQaT283
          source_id: s_yyuip5QvUxJjJB9G7zwQQD
          stance: supports
          locator: CBDB:640959
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

# 王鳳椿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳椿 | accepted |
| bio.summary | 王鳳椿，清人物。籍贯山東省，入仕科舉制舉: 武舉科，曾任千總、守備。（中国历代人物传记资料库 CBDB 640959） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鳳椿（CBDB 640959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640959&o=json)
