---
schema: wang-person/v1
id: p_rPRmaqo4oLKHXSRP3Nx3he
status: active
merged_into: null
display_name: 王良臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4bFNN963XPj48s1rZLetmk
        subject_person_id: p_rPRmaqo4oLKHXSRP3Nx3he
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CN16uWvZndbM4u5mgc28tF
          claim_id: c_4bFNN963XPj48s1rZLetmk
          source_id: s_4PBygVY6e9FfTCN5tgUBxC
          stance: supports
          locator: CBDB:460602
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（460602）
          source: &a1
            id: s_4PBygVY6e9FfTCN5tgUBxC
            source_type: api_record
            title: 中国历代人物传记资料库：王良臣（CBDB 460602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460602&o=json
            external_identifier: CBDB:460602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.777Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZQXBkEfdfX9GPgEYaTmWi4
        subject_person_id: p_rPRmaqo4oLKHXSRP3Nx3he
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良臣，明人物。入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 460602）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1tGYXBIPW-3SmTHI35qKsd
          claim_id: c_ZQXBkEfdfX9GPgEYaTmWi4
          source_id: s_4PBygVY6e9FfTCN5tgUBxC
          stance: supports
          locator: CBDB:460602
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

# 王良臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良臣 | accepted |
| bio.summary | 王良臣，明人物。入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 460602） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王良臣（CBDB 460602）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=460602&o=json)
