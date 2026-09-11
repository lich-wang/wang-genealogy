---
schema: wang-person/v1
id: p_hVES67uW97J2C1hANQD4Uv
status: active
merged_into: null
display_name: 王雨溥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wM4byJ7h9xca1RP92dHQKf
        subject_person_id: p_hVES67uW97J2C1hANQD4Uv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雨溥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o4hd6GGjBQC8mb6KKwkGsG
          claim_id: c_wM4byJ7h9xca1RP92dHQKf
          source_id: s_xvwn3G2d8rv9cHNbFfnRWf
          stance: supports
          locator: CBDB:640798
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640798）
          source: &a1
            id: s_xvwn3G2d8rv9cHNbFfnRWf
            source_type: api_record
            title: 中国历代人物传记资料库：王雨溥（CBDB 640798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640798&o=json
            external_identifier: CBDB:640798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.372Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zJ4ZsNuHGnswMv176Hpzcf
        subject_person_id: p_hVES67uW97J2C1hANQD4Uv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王雨溥，清人物。籍贯交河，入仕貢生: 拔貢，曾任知府、知縣。（中国历代人物传记资料库 CBDB 640798）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LS5xWZArUu4t4ccVbtAqiH
          claim_id: c_zJ4ZsNuHGnswMv176Hpzcf
          source_id: s_xvwn3G2d8rv9cHNbFfnRWf
          stance: supports
          locator: CBDB:640798
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

# 王雨溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雨溥 | accepted |
| bio.summary | 王雨溥，清人物。籍贯交河，入仕貢生: 拔貢，曾任知府、知縣。（中国历代人物传记资料库 CBDB 640798） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雨溥（CBDB 640798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640798&o=json)
