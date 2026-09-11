---
schema: wang-person/v1
id: p_27mF5u5xVpF2Fhsh1KWgHu
status: active
merged_into: null
display_name: 王天寧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Mz4gBWsxCcCR2Xg5kduFQo
        subject_person_id: p_27mF5u5xVpF2Fhsh1KWgHu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B7arWgnDcKP2L7CLNmiLF3
          claim_id: c_Mz4gBWsxCcCR2Xg5kduFQo
          source_id: s_LiB3CK7FLq5M2wAEEipWCC
          stance: supports
          locator: CBDB:636928
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636928）
          source: &a1
            id: s_LiB3CK7FLq5M2wAEEipWCC
            source_type: api_record
            title: 中国历代人物传记资料库：王天寧（CBDB 636928）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636928&o=json
            external_identifier: CBDB:636928
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.150Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fEhWZvA4KyxwJaA6aSHN5T
        subject_person_id: p_27mF5u5xVpF2Fhsh1KWgHu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王天寧，清人物。籍贯承德，入仕貢生: 拔貢，曾任知縣。（中国历代人物传记资料库 CBDB 636928）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RgQdDU0Ks8buBl8CRqslVa
          claim_id: c_fEhWZvA4KyxwJaA6aSHN5T
          source_id: s_LiB3CK7FLq5M2wAEEipWCC
          stance: supports
          locator: CBDB:636928
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

# 王天寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天寧 | accepted |
| bio.summary | 王天寧，清人物。籍贯承德，入仕貢生: 拔貢，曾任知縣。（中国历代人物传记资料库 CBDB 636928） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王天寧（CBDB 636928）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636928&o=json)
