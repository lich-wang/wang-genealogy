---
schema: wang-person/v1
id: p_8VyuiokV4LEJbF4q2Jtw26
status: active
merged_into: null
display_name: 王至公
cbdb_id: 318562
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oeFjWpLitg7gfZ6H8KNCen
        subject_person_id: p_8VyuiokV4LEJbF4q2Jtw26
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王至公，明人物。嘉靖三十二年進士。（中国历代人物传记资料库 CBDB 318562）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_5NsIv_KX9WL6cvsGfixISy
          claim_id: c_oeFjWpLitg7gfZ6H8KNCen
          source_id: s_SUG5T3ehNN1dT89b75CnjP
          stance: supports
          locator: CBDB:318562
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_SUG5T3ehNN1dT89b75CnjP
            source_type: api_record
            title: 中国历代人物传记资料库：王至公（CBDB 318562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318562&o=json
            external_identifier: CBDB:318562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LDoYdQvDWb6pa1xioBaZsT
        subject_person_id: p_8VyuiokV4LEJbF4q2Jtw26
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王至公
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FLhxfFUj73ghxQkZCq1KvA
          claim_id: c_LDoYdQvDWb6pa1xioBaZsT
          source_id: s_SUG5T3ehNN1dT89b75CnjP
          stance: supports
          locator: CBDB:318562
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
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
        id: c_TUyBs6TO3rA-iImpCz97m5
        subject_person_id: p_8VyuiokV4LEJbF4q2Jtw26
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_iJvJfwUqKTgqcKUSXQkKTK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NbbY1Q0NoTMTUNaLY7G-hB
          claim_id: c_TUyBs6TO3rA-iImpCz97m5
          source_id: s_SUG5T3ehNN1dT89b75CnjP
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百五十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SUG5T3ehNN1dT89b75CnjP
            source_type: api_record
            title: 中国历代人物传记资料库：王至公（CBDB 318562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318562&o=json
            external_identifier: CBDB:318562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_iJvJfwUqKTgqcKUSXQkKTK
        status: active
        display_name: 王大任
        merged_into_person_id: null
  other: []
---

# 王至公

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王至公，明人物。嘉靖三十二年進士。（中国历代人物传记资料库 CBDB 318562） | accepted |
| name.primary | 王至公 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_iJvJfwUqKTgqcKUSXQkKTK | 王大任 | accepted |

## 外部来源

- [中国历代人物传记资料库：王至公（CBDB 318562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318562&o=json)
