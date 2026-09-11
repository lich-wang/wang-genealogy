---
schema: wang-person/v1
id: p_RmrcDoAmgScPkz84k5zL6t
status: active
merged_into: null
display_name: 王肇震
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GS8cJRj1pcj7PdGLr3oPNt
        subject_person_id: p_RmrcDoAmgScPkz84k5zL6t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇震
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Xwk6pffFBWoHUesScDdvoG
          claim_id: c_GS8cJRj1pcj7PdGLr3oPNt
          source_id: s_pYyjXBLJkgk1HUsojLkKGb
          stance: supports
          locator: CBDB:639986
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639986）
          source: &a1
            id: s_pYyjXBLJkgk1HUsojLkKGb
            source_type: api_record
            title: 中国历代人物传记资料库：王肇震（CBDB 639986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639986&o=json
            external_identifier: CBDB:639986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.003Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HuSFDySBicCBwQAUaocuHs
        subject_person_id: p_RmrcDoAmgScPkz84k5zL6t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肇震，清人物。籍贯費縣，入仕縣學附生，曾任知縣、知州。（中国历代人物传记资料库 CBDB 639986）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GsbjpbYJaSU2cchh4QAFVU
          claim_id: c_HuSFDySBicCBwQAUaocuHs
          source_id: s_pYyjXBLJkgk1HUsojLkKGb
          stance: supports
          locator: CBDB:639986
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

# 王肇震

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肇震 | accepted |
| bio.summary | 王肇震，清人物。籍贯費縣，入仕縣學附生，曾任知縣、知州。（中国历代人物传记资料库 CBDB 639986） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王肇震（CBDB 639986）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639986&o=json)
