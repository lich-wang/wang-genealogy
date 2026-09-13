---
schema: wang-person/v1
id: p_dr5THMYZGs7zW675Bw8A4u
status: active
merged_into: null
display_name: 王玉圭
cbdb_id: 221458
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6wAYmsWuqCdb6VDN4xUZzQ
        subject_person_id: p_dr5THMYZGs7zW675Bw8A4u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉圭，明人物。萬曆八年進士，籍贯解州，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 221458）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_QkWX16DGYoLgrxOALbnUM6
          claim_id: c_6wAYmsWuqCdb6VDN4xUZzQ
          source_id: s_pzKa22AK3ZSEDJTFQ71tEE
          stance: supports
          locator: CBDB:221458
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_pzKa22AK3ZSEDJTFQ71tEE
            source_type: api_record
            title: 中国历代人物传记资料库：王玉圭（CBDB 221458）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221458&o=json
            external_identifier: CBDB:221458
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3ZGRatXJZ2UAYsU55VtbxU
        subject_person_id: p_dr5THMYZGs7zW675Bw8A4u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉圭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Hj1ra1uJy7io8Rpgqsn1ng
          claim_id: c_3ZGRatXJZ2UAYsU55VtbxU
          source_id: s_pzKa22AK3ZSEDJTFQ71tEE
          stance: supports
          locator: CBDB:221458
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_UsTPBbNTImd7X05vM8VG4c
        subject_person_id: p_dr5THMYZGs7zW675Bw8A4u
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cdvLWdUT8xwQ2GV4vwbiSj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xdfb6CQ2t0fnM10tUwvFb1
          claim_id: c_UsTPBbNTImd7X05vM8VG4c
          source_id: s_pzKa22AK3ZSEDJTFQ71tEE
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第一百九十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pzKa22AK3ZSEDJTFQ71tEE
            source_type: api_record
            title: 中国历代人物传记资料库：王玉圭（CBDB 221458）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221458&o=json
            external_identifier: CBDB:221458
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_cdvLWdUT8xwQ2GV4vwbiSj
        status: active
        display_name: 王明
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王玉圭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王玉圭，明人物。萬曆八年進士，籍贯解州，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 221458） | accepted |
| name.primary | 王玉圭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_cdvLWdUT8xwQ2GV4vwbiSj | 王明 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玉圭（CBDB 221458）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221458&o=json)
