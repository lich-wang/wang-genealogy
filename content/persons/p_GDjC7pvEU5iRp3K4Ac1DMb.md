---
schema: wang-person/v1
id: p_GDjC7pvEU5iRp3K4Ac1DMb
status: active
merged_into: null
display_name: 王玉和
cbdb_id: 280406
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BZ2i9hN1t9Hey2Frrm27JJ
        subject_person_id: p_GDjC7pvEU5iRp3K4Ac1DMb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉和，明人物。中国历代人物传记资料库（CBDB）以人物编号 280406 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_ysevCl_zSUqIn4YV0BZVJ9
          claim_id: c_BZ2i9hN1t9Hey2Frrm27JJ
          source_id: s_tQDR8kLta8UJwatD8TKTEv
          stance: supports
          locator: CBDB:280406
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_tQDR8kLta8UJwatD8TKTEv
            source_type: api_record
            title: 中国历代人物传记资料库：王玉和（CBDB 280406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280406&o=json
            external_identifier: CBDB:280406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iaPcGwWFFfg39UbyjVXTaj
        subject_person_id: p_GDjC7pvEU5iRp3K4Ac1DMb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_y6DJAHcDX8azQKqVRfFBPQ
          claim_id: c_iaPcGwWFFfg39UbyjVXTaj
          source_id: s_tQDR8kLta8UJwatD8TKTEv
          stance: supports
          locator: CBDB:280406
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_tQDR8kLta8UJwatD8TKTEv
            source_type: api_record
            title: 中国历代人物传记资料库：王玉和（CBDB 280406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280406&o=json
            external_identifier: CBDB:280406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_YZJ3uU_492z3ZJIRXSExs8
        subject_person_id: p_GDjC7pvEU5iRp3K4Ac1DMb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZyrbUQzJSc8r8t3Ud7TNAC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XMu48gew6kDx1QAYd13I1Q
          claim_id: c_YZJ3uU_492z3ZJIRXSExs8
          source_id: s_tQDR8kLta8UJwatD8TKTEv
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第九十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZyrbUQzJSc8r8t3Ud7TNAC
        status: active
        display_name: 王鳳靈
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王玉和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王玉和，明人物。中国历代人物传记资料库（CBDB）以人物编号 280406 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王玉和 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ZyrbUQzJSc8r8t3Ud7TNAC | 王鳳靈 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玉和（CBDB 280406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280406&o=json)
