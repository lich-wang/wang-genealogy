---
schema: wang-person/v1
id: p_td4RPq8eExS2WZF67qDKoE
status: active
merged_into: null
display_name: 王淑人
cbdb_id: 30043
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rzwEseZ41EjxtEEBRApPX3
        subject_person_id: p_td4RPq8eExS2WZF67qDKoE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑人，清人物。籍贯寶坻，入仕封贈。（中国历代人物传记资料库 CBDB 30043）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_09OuD_wjvGdniWUgHCx8Gx
          claim_id: c_rzwEseZ41EjxtEEBRApPX3
          source_id: s_jQ4jrZU4p9vFyV9USESaFF
          stance: supports
          locator: CBDB:30043
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_jQ4jrZU4p9vFyV9USESaFF
            source_type: api_record
            title: 中国历代人物传记资料库：王淑人（CBDB 30043）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30043&o=json
            external_identifier: CBDB:30043
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GNSzzefasMwJwD6pfao9jP
        subject_person_id: p_td4RPq8eExS2WZF67qDKoE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑人
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_i69zkdD6n5p8DtY4CLCbAc
          claim_id: c_GNSzzefasMwJwD6pfao9jP
          source_id: s_jQ4jrZU4p9vFyV9USESaFF
          stance: supports
          locator: CBDB:30043
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_ZTqWNaFNgbOwABLjKTEotN
        subject_person_id: p_td4RPq8eExS2WZF67qDKoE
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_QrC9EBvZjHMJGTurfmYvdC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OjazhJx8msgA3lnfPBEDye
          claim_id: c_ZTqWNaFNgbOwABLjKTEotN
          source_id: s_fjQDzDxW8_RyI04L4et_k0
          stance: supports
          locator: CBDB 双向互证（丈夫 朱筠）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fjQDzDxW8_RyI04L4et_k0
            source_type: api_record
            title: 中国历代人物传记资料库：朱筠（CBDB 29951）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29951&o=json
            external_identifier: CBDB:29951
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QrC9EBvZjHMJGTurfmYvdC
        status: active
        display_name: 朱筠
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王淑人

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王淑人，清人物。籍贯寶坻，入仕封贈。（中国历代人物传记资料库 CBDB 30043） | accepted |
| name.primary | 王淑人 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_QrC9EBvZjHMJGTurfmYvdC | 朱筠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淑人（CBDB 30043）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30043&o=json)
- [中国历代人物传记资料库：朱筠（CBDB 29951）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29951&o=json)
