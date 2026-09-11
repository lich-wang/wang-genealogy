---
schema: wang-person/v1
id: p_CiavY9FgLRgynpsfpgGJSQ
status: active
merged_into: null
display_name: 王贊農
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w31JD7jAXGjmMzmUXfE7DH
        subject_person_id: p_CiavY9FgLRgynpsfpgGJSQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贊農
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sMNubQbmYWLMQGjFBYBF9e
          claim_id: c_w31JD7jAXGjmMzmUXfE7DH
          source_id: s_RwQ6C9r4mhXHnrcSNpoQLW
          stance: supports
          locator: CBDB:640348
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640348）
          source: &a1
            id: s_RwQ6C9r4mhXHnrcSNpoQLW
            source_type: api_record
            title: 中国历代人物传记资料库：王贊農（CBDB 640348）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640348&o=json
            external_identifier: CBDB:640348
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.229Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V3ros3LMbXJGBBnB3Z4EN3
        subject_person_id: p_CiavY9FgLRgynpsfpgGJSQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贊農，清人物。籍贯甘肅省，入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 640348）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_e_28aBZnAeTNRRBxVqti5U
          claim_id: c_V3ros3LMbXJGBBnB3Z4EN3
          source_id: s_RwQ6C9r4mhXHnrcSNpoQLW
          stance: supports
          locator: CBDB:640348
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

# 王贊農

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王贊農 | accepted |
| bio.summary | 王贊農，清人物。籍贯甘肅省，入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 640348） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王贊農（CBDB 640348）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640348&o=json)
