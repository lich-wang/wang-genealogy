---
schema: wang-person/v1
id: p_h1avz726BoZSKsSMLgnMDe
status: active
merged_into: null
display_name: 王和義
cbdb_id: 246478
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mSWjMiiTjpxuy8nyfJeA2V
        subject_person_id: p_h1avz726BoZSKsSMLgnMDe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王和義，史料所见人物。本项目依据《中国历代人物传记资料库：王和義（CBDB 246478）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs__l9HWhR2CVFTef5tDjg5zs
          claim_id: c_mSWjMiiTjpxuy8nyfJeA2V
          source_id: s_A4BUT23o7VSW5KVo1Ta4AR
          stance: supports
          locator: CBDB:246478
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_A4BUT23o7VSW5KVo1Ta4AR
            source_type: api_record
            title: 中国历代人物传记资料库：王和義（CBDB 246478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246478&o=json
            external_identifier: CBDB:246478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TgMNAqyac9AJCSgxthQ2Er
        subject_person_id: p_h1avz726BoZSKsSMLgnMDe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王和義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9f9StqP1Y4yFPLQ1C2egPN
          claim_id: c_TgMNAqyac9AJCSgxthQ2Er
          source_id: s_A4BUT23o7VSW5KVo1Ta4AR
          stance: supports
          locator: CBDB:246478
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
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
  descendants:
    - claim:
        id: c_pHBtH7Z12nRA_eIe5_sjJR
        subject_person_id: p_h1avz726BoZSKsSMLgnMDe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rPERXxEMwZa9gPH43DGT1J
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hLJF4WUHCCnaO3IaKlGOFz
          claim_id: c_pHBtH7Z12nRA_eIe5_sjJR
          source_id: s_A4BUT23o7VSW5KVo1Ta4AR
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第六十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_A4BUT23o7VSW5KVo1Ta4AR
            source_type: api_record
            title: 中国历代人物传记资料库：王和義（CBDB 246478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246478&o=json
            external_identifier: CBDB:246478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_rPERXxEMwZa9gPH43DGT1J
        status: active
        display_name: 王肅
        merged_into_person_id: null
  other: []
---

# 王和義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王和義，史料所见人物。本项目依据《中国历代人物传记资料库：王和義（CBDB 246478）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王和義 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_rPERXxEMwZa9gPH43DGT1J | 王肅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王和義（CBDB 246478）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246478&o=json)
