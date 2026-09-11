---
schema: wang-person/v1
id: p_cDGNLrH9qka32eGwoACvNY
status: active
merged_into: null
display_name: 王啟祒
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cEqiSEmrTV8ZF5LPQqQB8M
        subject_person_id: p_cDGNLrH9qka32eGwoACvNY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟祒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3WQXwedaYudeucrmb84e6p
          claim_id: c_cEqiSEmrTV8ZF5LPQqQB8M
          source_id: s_qLD2dy9SQx17ZBwc81b6P4
          stance: supports
          locator: CBDB:700774
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700774）
          source: &a1
            id: s_qLD2dy9SQx17ZBwc81b6P4
            source_type: api_record
            title: 中国历代人物传记资料库：王啟祒（CBDB 700774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700774&o=json
            external_identifier: CBDB:700774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.597Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3hPok3LzjKN8ETBbic7ocQ
        subject_person_id: p_cDGNLrH9qka32eGwoACvNY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王啟祒，清人物。籍贯平陰，入仕貢生: 歲貢、常貢、挨貢，曾任教授、教諭。（中国历代人物传记资料库 CBDB 700774）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U2VHB7q827gas84Gf5ptff
          claim_id: c_3hPok3LzjKN8ETBbic7ocQ
          source_id: s_qLD2dy9SQx17ZBwc81b6P4
          stance: supports
          locator: CBDB:700774
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KZdUotfIl-gjum1WAiPhwZ
        subject_person_id: p_HqKNQxKx5pE3EjygcutNH6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cDGNLrH9qka32eGwoACvNY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1kPrKZvCJz4SSIK2dBib3J
          claim_id: c_KZdUotfIl-gjum1WAiPhwZ
          source_id: s_qLD2dy9SQx17ZBwc81b6P4
          stance: supports
          locator: 平陰縣志，lgid=630824：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HqKNQxKx5pE3EjygcutNH6
        status: active
        display_name: 王朝屏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王啟祒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟祒 | accepted |
| bio.summary | 王啟祒，清人物。籍贯平陰，入仕貢生: 歲貢、常貢、挨貢，曾任教授、教諭。（中国历代人物传记资料库 CBDB 700774） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HqKNQxKx5pE3EjygcutNH6 | 王朝屏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王啟祒（CBDB 700774）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700774&o=json)
