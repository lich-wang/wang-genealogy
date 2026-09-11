---
schema: wang-person/v1
id: p_LDmXaMojC2t4TRFSjgQmH6
status: active
merged_into: null
display_name: 王嘉福
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YEoLcH5tZpn4VZNRNzzhzU
        subject_person_id: p_LDmXaMojC2t4TRFSjgQmH6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_32AamNN3TN3C3szvDzAWK1
          claim_id: c_YEoLcH5tZpn4VZNRNzzhzU
          source_id: s_oRkAFQLgXR7Aff3xh8HDLG
          stance: supports
          locator: CBDB:636623
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636623）
          source: &a1
            id: s_oRkAFQLgXR7Aff3xh8HDLG
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉福（CBDB 636623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636623&o=json
            external_identifier: CBDB:636623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.206Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_juksj4QADoH92SvHz4A8TX
        subject_person_id: p_LDmXaMojC2t4TRFSjgQmH6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉福，清人物。籍贯長洲，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 636623）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3THZ6g7krh2clT7Ej-6O5Y
          claim_id: c_juksj4QADoH92SvHz4A8TX
          source_id: s_oRkAFQLgXR7Aff3xh8HDLG
          stance: supports
          locator: CBDB:636623
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

# 王嘉福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉福 | accepted |
| bio.summary | 王嘉福，清人物。籍贯長洲，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 636623） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嘉福（CBDB 636623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636623&o=json)
