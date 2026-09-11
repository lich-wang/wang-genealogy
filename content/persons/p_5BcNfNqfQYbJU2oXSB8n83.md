---
schema: wang-person/v1
id: p_5BcNfNqfQYbJU2oXSB8n83
status: active
merged_into: null
display_name: 王玉良
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VnvmciX2iPJjvHCFMhBCfv
        subject_person_id: p_5BcNfNqfQYbJU2oXSB8n83
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vMZgiExQhMZMWQRE4pQ22m
          claim_id: c_VnvmciX2iPJjvHCFMhBCfv
          source_id: s_1D8MC3VJno3dWAQ9ddu955
          stance: supports
          locator: CBDB:639386
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639386）
          source: &a1
            id: s_1D8MC3VJno3dWAQ9ddu955
            source_type: api_record
            title: 中国历代人物传记资料库：王玉良（CBDB 639386）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639386&o=json
            external_identifier: CBDB:639386
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.927Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7A9CcAiE2A9MHyLg5BQWBt
        subject_person_id: p_5BcNfNqfQYbJU2oXSB8n83
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉良，清人物。籍贯山東省，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 639386）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xl02uX_I_zAcWLFQn-mbA8
          claim_id: c_7A9CcAiE2A9MHyLg5BQWBt
          source_id: s_1D8MC3VJno3dWAQ9ddu955
          stance: supports
          locator: CBDB:639386
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

# 王玉良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉良 | accepted |
| bio.summary | 王玉良，清人物。籍贯山東省，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 639386） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玉良（CBDB 639386）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639386&o=json)
