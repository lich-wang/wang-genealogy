---
schema: wang-person/v1
id: p_oFC3wF68J8VCT2GFg7Cheh
status: active
merged_into: null
display_name: 王晉老
cbdb_id: 22240
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7iFA8Suo7fCN2yV5n7n9PL
        subject_person_id: p_oFC3wF68J8VCT2GFg7Cheh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉老，宋人物。籍贯樂平，入仕恩蔭、蔭補。（中国历代人物传记资料库 CBDB 22240）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_elgaTSUG7YKLRIydW7yCdk
          claim_id: c_7iFA8Suo7fCN2yV5n7n9PL
          source_id: s_Gp5tfpsdLqG7spVLCEp8bM
          stance: supports
          locator: CBDB:22240
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Gp5tfpsdLqG7spVLCEp8bM
            source_type: api_record
            title: 中国历代人物传记资料库：王晉老（CBDB 22240）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22240&o=json
            external_identifier: CBDB:22240
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_viqe3fqfm3EkyYJsbTMtME
        subject_person_id: p_oFC3wF68J8VCT2GFg7Cheh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉老
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6RKNSZdXQU2KQ2Qt9358Ds
          claim_id: c_viqe3fqfm3EkyYJsbTMtME
          source_id: s_Gp5tfpsdLqG7spVLCEp8bM
          stance: supports
          locator: CBDB:22240
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_hM1M3h-IzuYb-AXzTkywTI
        subject_person_id: p_Zvjvgshz6JbJhrGYJFm2uQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oFC3wF68J8VCT2GFg7Cheh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TTP1QeYT9q75p6mAjrCMxs
          claim_id: c_hM1M3h-IzuYb-AXzTkywTI
          source_id: s_eEepmYZas84z15WXEpE1gV
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1824：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eEepmYZas84z15WXEpE1gV
            source_type: api_record
            title: 中国历代人物传记资料库：王剛中（CBDB 8151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8151&o=json
            external_identifier: CBDB:8151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.497Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Zvjvgshz6JbJhrGYJFm2uQ
        status: active
        display_name: 王剛中
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王晉老

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王晉老，宋人物。籍贯樂平，入仕恩蔭、蔭補。（中国历代人物传记资料库 CBDB 22240） | accepted |
| name.primary | 王晉老 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_Zvjvgshz6JbJhrGYJFm2uQ | 王剛中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王剛中（CBDB 8151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8151&o=json)
- [中国历代人物传记资料库：王晉老（CBDB 22240）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22240&o=json)
