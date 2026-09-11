---
schema: wang-person/v1
id: p_sYe9xrWxFzwdPZxDTs8nYq
status: active
merged_into: null
display_name: 王宗培
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FV3ue3shJEMZaxutQqw9Yq
        subject_person_id: p_sYe9xrWxFzwdPZxDTs8nYq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗培
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FquhQcTRxhi92rPwcR9QrQ
          claim_id: c_FV3ue3shJEMZaxutQqw9Yq
          source_id: s_rY2w74C33oPnLFH2PVtAQ3
          stance: supports
          locator: CBDB:637096
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637096）
          source: &a1
            id: s_rY2w74C33oPnLFH2PVtAQ3
            source_type: api_record
            title: 中国历代人物传记资料库：王宗培（CBDB 637096）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637096&o=json
            external_identifier: CBDB:637096
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.205Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jdKH6xvKu79631rbrdoMn8
        subject_person_id: p_sYe9xrWxFzwdPZxDTs8nYq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗培，清人物。籍贯大興，曾任典史。（中国历代人物传记资料库 CBDB 637096）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YsqCC2uXla6B3HYOkf3-bb
          claim_id: c_jdKH6xvKu79631rbrdoMn8
          source_id: s_rY2w74C33oPnLFH2PVtAQ3
          stance: supports
          locator: CBDB:637096
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

# 王宗培

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗培 | accepted |
| bio.summary | 王宗培，清人物。籍贯大興，曾任典史。（中国历代人物传记资料库 CBDB 637096） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗培（CBDB 637096）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637096&o=json)
