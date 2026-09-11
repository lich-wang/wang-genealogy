---
schema: wang-person/v1
id: p_45FS2Y3DpQPGrLhwwQpDET
status: active
merged_into: null
display_name: 王登贄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zJ5p47pFCkzQ8k667nwiWf
        subject_person_id: p_45FS2Y3DpQPGrLhwwQpDET
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登贄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Zf1EiBJnP4L7mrG3cLHLmB
          claim_id: c_zJ5p47pFCkzQ8k667nwiWf
          source_id: s_K1h3CeMQYjXiUkrevB4ceW
          stance: supports
          locator: CBDB:639513
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639513）
          source: &a1
            id: s_K1h3CeMQYjXiUkrevB4ceW
            source_type: api_record
            title: 中国历代人物传记资料库：王登贄（CBDB 639513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639513&o=json
            external_identifier: CBDB:639513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.956Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Kyf41L1yfa7yS9wHBjdJUg
        subject_person_id: p_45FS2Y3DpQPGrLhwwQpDET
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王登贄，清人物。籍贯西安，入仕貢生: 拔貢，曾任縣丞。（中国历代人物传记资料库 CBDB 639513）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dF7nlNdMHwtRi3r0unKsyC
          claim_id: c_Kyf41L1yfa7yS9wHBjdJUg
          source_id: s_K1h3CeMQYjXiUkrevB4ceW
          stance: supports
          locator: CBDB:639513
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

# 王登贄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王登贄 | accepted |
| bio.summary | 王登贄，清人物。籍贯西安，入仕貢生: 拔貢，曾任縣丞。（中国历代人物传记资料库 CBDB 639513） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王登贄（CBDB 639513）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639513&o=json)
