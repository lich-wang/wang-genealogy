---
schema: wang-person/v1
id: p_z4j8LoQ8NTJQQgm43sS2h7
status: active
merged_into: null
display_name: 王功墉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fjWpCMh8uKhG6jGvrtCAmK
        subject_person_id: p_z4j8LoQ8NTJQQgm43sS2h7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王功墉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rpjyChg4719VGw4zMaY9V6
          claim_id: c_fjWpCMh8uKhG6jGvrtCAmK
          source_id: s_rEqFH82iFMCdYPxGqmVYQn
          stance: supports
          locator: CBDB:636370
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636370）
          source: &a1
            id: s_rEqFH82iFMCdYPxGqmVYQn
            source_type: api_record
            title: 中国历代人物传记资料库：王功墉（CBDB 636370）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636370&o=json
            external_identifier: CBDB:636370
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.969Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v6nopLVkHoim47F1wPmHDe
        subject_person_id: p_z4j8LoQ8NTJQQgm43sS2h7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王功墉，清人物。籍贯沂州府，入仕附貢生，曾任訓導。（中国历代人物传记资料库 CBDB 636370）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3cGy-_stJHGicIdwjSB4Wm
          claim_id: c_v6nopLVkHoim47F1wPmHDe
          source_id: s_rEqFH82iFMCdYPxGqmVYQn
          stance: supports
          locator: CBDB:636370
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

# 王功墉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王功墉 | accepted |
| bio.summary | 王功墉，清人物。籍贯沂州府，入仕附貢生，曾任訓導。（中国历代人物传记资料库 CBDB 636370） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王功墉（CBDB 636370）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636370&o=json)
