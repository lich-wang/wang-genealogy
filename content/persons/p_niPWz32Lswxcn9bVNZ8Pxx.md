---
schema: wang-person/v1
id: p_niPWz32Lswxcn9bVNZ8Pxx
status: active
merged_into: null
display_name: 王親臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CgsYqrtqVLKQyjY8qUSJg3
        subject_person_id: p_niPWz32Lswxcn9bVNZ8Pxx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王親臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6TYaJV3BEmDDRN9HPUYKHf
          claim_id: c_CgsYqrtqVLKQyjY8qUSJg3
          source_id: s_TcGrvDDZ3sERJK2v9mv9i7
          stance: supports
          locator: CBDB:282046
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282046）
          source: &a1
            id: s_TcGrvDDZ3sERJK2v9mv9i7
            source_type: api_record
            title: 中国历代人物传记资料库：王親臣（CBDB 282046）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282046&o=json
            external_identifier: CBDB:282046
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.077Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7JAg5Zs6GpBcW6iuuZBD4j
        subject_person_id: p_niPWz32Lswxcn9bVNZ8Pxx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王親臣，明人物。正德十二年進士，籍贯渠縣。（中国历代人物传记资料库 CBDB 282046）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D-et0OKFo0mb5nUPk94zIy
          claim_id: c_7JAg5Zs6GpBcW6iuuZBD4j
          source_id: s_TcGrvDDZ3sERJK2v9mv9i7
          stance: supports
          locator: CBDB:282046
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

# 王親臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王親臣 | accepted |
| bio.summary | 王親臣，明人物。正德十二年進士，籍贯渠縣。（中国历代人物传记资料库 CBDB 282046） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王親臣（CBDB 282046）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282046&o=json)
