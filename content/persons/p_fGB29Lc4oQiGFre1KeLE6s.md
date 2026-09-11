---
schema: wang-person/v1
id: p_fGB29Lc4oQiGFre1KeLE6s
status: active
merged_into: null
display_name: 王會同
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_heua5zKtJ2wMKDvLUpaPFD
        subject_person_id: p_fGB29Lc4oQiGFre1KeLE6s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會同
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HHcXjQ5QTAg4jx5mXomoqs
          claim_id: c_heua5zKtJ2wMKDvLUpaPFD
          source_id: s_cZNU6gHZXHmL6ZzrMpVgCJ
          stance: supports
          locator: CBDB:638569
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638569）
          source: &a1
            id: s_cZNU6gHZXHmL6ZzrMpVgCJ
            source_type: api_record
            title: 中国历代人物传记资料库：王會同（CBDB 638569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638569&o=json
            external_identifier: CBDB:638569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.677Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UqQmG38yQeguqXaJuBWQZS
        subject_person_id: p_fGB29Lc4oQiGFre1KeLE6s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王會同，清人物。籍贯山陰，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 638569）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Y1LkNg6oEeQPCkSg4axK3Q
          claim_id: c_UqQmG38yQeguqXaJuBWQZS
          source_id: s_cZNU6gHZXHmL6ZzrMpVgCJ
          stance: supports
          locator: CBDB:638569
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

# 王會同

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王會同 | accepted |
| bio.summary | 王會同，清人物。籍贯山陰，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 638569） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王會同（CBDB 638569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638569&o=json)
