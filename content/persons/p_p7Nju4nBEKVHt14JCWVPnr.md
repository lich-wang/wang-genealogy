---
schema: wang-person/v1
id: p_p7Nju4nBEKVHt14JCWVPnr
status: active
merged_into: null
display_name: 王直興
cbdb_id: 249594
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b9rBRqD2LWVqJWGCKNR5oV
        subject_person_id: p_p7Nju4nBEKVHt14JCWVPnr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王直興，明人物。成化十一年進士。（中国历代人物传记资料库 CBDB 249594）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_laTdjtqzBt_5-6or5wkvjb
          claim_id: c_b9rBRqD2LWVqJWGCKNR5oV
          source_id: s_rF8e7572D57rAhqb26AHWU
          stance: supports
          locator: CBDB:249594
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_rF8e7572D57rAhqb26AHWU
            source_type: api_record
            title: 中国历代人物传记资料库：王直興（CBDB 249594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249594&o=json
            external_identifier: CBDB:249594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hZDh9G2KUCLRwX6LBsvivv
        subject_person_id: p_p7Nju4nBEKVHt14JCWVPnr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王直興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_D5ti1bv57HKoGzcy9dqbtC
          claim_id: c_hZDh9G2KUCLRwX6LBsvivv
          source_id: s_rF8e7572D57rAhqb26AHWU
          stance: supports
          locator: CBDB:249594
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
        id: c_eMDv4Mz7BR3smqyrcTotXv
        subject_person_id: p_p7Nju4nBEKVHt14JCWVPnr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JEUpyam7C1Pm8JC9r4xGZ3
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Aozcgz3MJRRIqXUituSaNe
          claim_id: c_eMDv4Mz7BR3smqyrcTotXv
          source_id: s_rF8e7572D57rAhqb26AHWU
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第九十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rF8e7572D57rAhqb26AHWU
            source_type: api_record
            title: 中国历代人物传记资料库：王直興（CBDB 249594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249594&o=json
            external_identifier: CBDB:249594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_JEUpyam7C1Pm8JC9r4xGZ3
        status: active
        display_name: 王舉
        merged_into_person_id: null
  other: []
---

# 王直興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王直興，明人物。成化十一年進士。（中国历代人物传记资料库 CBDB 249594） | accepted |
| name.primary | 王直興 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_JEUpyam7C1Pm8JC9r4xGZ3 | 王舉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王直興（CBDB 249594）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249594&o=json)
