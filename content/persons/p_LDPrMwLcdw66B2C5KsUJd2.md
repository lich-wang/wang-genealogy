---
schema: wang-person/v1
id: p_LDPrMwLcdw66B2C5KsUJd2
status: active
merged_into: null
display_name: 王朝岡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jf69L8C92f2iju23RfUxaC
        subject_person_id: p_LDPrMwLcdw66B2C5KsUJd2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝岡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G1wLaCJ4FnYkUXcgUCnKuC
          claim_id: c_Jf69L8C92f2iju23RfUxaC
          source_id: s_ACp1B3pfU39CHH1W8AYbsc
          stance: supports
          locator: CBDB:638615
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638615）
          source: &a1
            id: s_ACp1B3pfU39CHH1W8AYbsc
            source_type: api_record
            title: 中国历代人物传记资料库：王朝岡（CBDB 638615）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638615&o=json
            external_identifier: CBDB:638615
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.695Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Df1uZyASVLbCGka5uNCGLF
        subject_person_id: p_LDPrMwLcdw66B2C5KsUJd2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝岡，清人物。籍贯通州，曾任典史。（中国历代人物传记资料库 CBDB 638615）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JQWQqSD4G2_cP8raoRB-zb
          claim_id: c_Df1uZyASVLbCGka5uNCGLF
          source_id: s_ACp1B3pfU39CHH1W8AYbsc
          stance: supports
          locator: CBDB:638615
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

# 王朝岡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝岡 | accepted |
| bio.summary | 王朝岡，清人物。籍贯通州，曾任典史。（中国历代人物传记资料库 CBDB 638615） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝岡（CBDB 638615）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638615&o=json)
