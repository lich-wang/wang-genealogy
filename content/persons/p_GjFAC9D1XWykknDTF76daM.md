---
schema: wang-person/v1
id: p_GjFAC9D1XWykknDTF76daM
status: active
merged_into: null
display_name: 王之傑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xDE4XHVMXuTYUyDgc242aC
        subject_person_id: p_GjFAC9D1XWykknDTF76daM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Jj8uLgcczh8mta6iui92bp
          claim_id: c_xDE4XHVMXuTYUyDgc242aC
          source_id: s_PgAnF3SpjCEy6h3ySY5PJU
          stance: supports
          locator: CBDB:684037
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（684037）
          source: &a1
            id: s_PgAnF3SpjCEy6h3ySY5PJU
            source_type: api_record
            title: 中国历代人物传记资料库：王之傑（CBDB 684037）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=684037&o=json
            external_identifier: CBDB:684037
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.305Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B4wWYzeAED8WUs83jaxDLm
        subject_person_id: p_GjFAC9D1XWykknDTF76daM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之傑，明人物。籍贯歙縣。（中国历代人物传记资料库 CBDB 684037）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4-T_rA8dwgjoVWwKEgimRM
          claim_id: c_B4wWYzeAED8WUs83jaxDLm
          source_id: s_PgAnF3SpjCEy6h3ySY5PJU
          stance: supports
          locator: CBDB:684037
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

# 王之傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之傑 | accepted |
| bio.summary | 王之傑，明人物。籍贯歙縣。（中国历代人物传记资料库 CBDB 684037） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之傑（CBDB 684037）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=684037&o=json)
