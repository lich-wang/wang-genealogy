---
schema: wang-person/v1
id: p_1eDGUA4h2MBNDhEo468hA9
status: active
merged_into: null
display_name: 王玘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oVzLrwkw7Y7eNKiiSFRb4Y
        subject_person_id: p_1eDGUA4h2MBNDhEo468hA9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a5DKGnNFncrpX4p3k6mz28
          claim_id: c_oVzLrwkw7Y7eNKiiSFRb4Y
          source_id: s_xeyDUNW7nZ6ZFRaYA3FmGZ
          stance: supports
          locator: CBDB:317014
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（317014）
          source: &a1
            id: s_xeyDUNW7nZ6ZFRaYA3FmGZ
            source_type: api_record
            title: 中国历代人物传记资料库：王玘（CBDB 317014）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317014&o=json
            external_identifier: CBDB:317014
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.965Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8Sfdrpx3xXSzYmCmNmzZm7
        subject_person_id: p_1eDGUA4h2MBNDhEo468hA9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sP7XsCnx1Gt3EtT34LfHHb
          claim_id: c_8Sfdrpx3xXSzYmCmNmzZm7
          source_id: s_xeyDUNW7nZ6ZFRaYA3FmGZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_pWTxftRzAWZb6lSvwW2vYU
        subject_person_id: p_1eDGUA4h2MBNDhEo468hA9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_waicV9Fo2q7nkgGJNdNMWK
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pm3TFIc5An1sGAuG_HI7XA
          claim_id: c_pWTxftRzAWZb6lSvwW2vYU
          source_id: s_xeyDUNW7nZ6ZFRaYA3FmGZ
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第九十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_waicV9Fo2q7nkgGJNdNMWK
        status: active
        display_name: 王察言
        merged_into_person_id: null
  other: []
---

# 王玘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玘 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_waicV9Fo2q7nkgGJNdNMWK | 王察言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王玘（CBDB 317014）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317014&o=json)
