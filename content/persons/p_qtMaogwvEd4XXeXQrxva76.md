---
schema: wang-person/v1
id: p_qtMaogwvEd4XXeXQrxva76
status: active
merged_into: null
display_name: 王豫徵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aUnRi4r1Y98hXRigVnoFyU
        subject_person_id: p_qtMaogwvEd4XXeXQrxva76
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豫徵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_72PvXb2JRbcoMjNfczNg5v
          claim_id: c_aUnRi4r1Y98hXRigVnoFyU
          source_id: s_E7YrwfoC51799BFk4QYwrn
          stance: supports
          locator: CBDB:640303
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640303）
          source: &a1
            id: s_E7YrwfoC51799BFk4QYwrn
            source_type: api_record
            title: 中国历代人物传记资料库：王豫徵（CBDB 640303）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640303&o=json
            external_identifier: CBDB:640303
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.210Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3p1STrB1Zcss6GPTWWw98j
        subject_person_id: p_qtMaogwvEd4XXeXQrxva76
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豫徵，清人物。籍贯青州府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 640303）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LYJlOuEGEIVNr-IKOJB0TV
          claim_id: c_3p1STrB1Zcss6GPTWWw98j
          source_id: s_E7YrwfoC51799BFk4QYwrn
          stance: supports
          locator: CBDB:640303
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

# 王豫徵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王豫徵 | accepted |
| bio.summary | 王豫徵，清人物。籍贯青州府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 640303） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王豫徵（CBDB 640303）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640303&o=json)
