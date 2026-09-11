---
schema: wang-person/v1
id: p_JMbPeGNpCjfYq9S6BGhYj8
status: active
merged_into: null
display_name: 王定
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_15r9yBNp41J4f6uxJaDWSt
        subject_person_id: p_JMbPeGNpCjfYq9S6BGhYj8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vHKph579bt235CJYbd1WZs
          claim_id: c_15r9yBNp41J4f6uxJaDWSt
          source_id: s_4TWdK2CcLDtGk7A7EP4NUE
          stance: supports
          locator: CBDB:379580
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（379580）
          source: &a1
            id: s_4TWdK2CcLDtGk7A7EP4NUE
            source_type: api_record
            title: 中国历代人物传记资料库：王定（CBDB 379580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=379580&o=json
            external_identifier: CBDB:379580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.688Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mcjb3979FnHrwLBuvJpKyd
        subject_person_id: p_JMbPeGNpCjfYq9S6BGhYj8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 379580）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_m4nox2S3QwAuIh_w15T2Ax
          claim_id: c_mcjb3979FnHrwLBuvJpKyd
          source_id: s_4TWdK2CcLDtGk7A7EP4NUE
          stance: supports
          locator: CBDB:379580
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

# 王定

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王定 | accepted |
| bio.summary | 王定，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 379580） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王定（CBDB 379580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=379580&o=json)
