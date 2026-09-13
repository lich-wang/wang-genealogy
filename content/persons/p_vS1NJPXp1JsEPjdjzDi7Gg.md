---
schema: wang-person/v1
id: p_vS1NJPXp1JsEPjdjzDi7Gg
status: active
merged_into: null
display_name: 王甫義
cbdb_id: 280963
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p1HLkpC9jGtvcDaJdBo6NL
        subject_person_id: p_vS1NJPXp1JsEPjdjzDi7Gg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王甫義，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 280963）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_fe3QLvtTSVaQ45F9axskN1
          claim_id: c_p1HLkpC9jGtvcDaJdBo6NL
          source_id: s_oUA8wKZLkNeQFDmYHmGoi5
          stance: supports
          locator: CBDB:280963
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_oUA8wKZLkNeQFDmYHmGoi5
            source_type: api_record
            title: 中国历代人物传记资料库：王甫義（CBDB 280963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280963&o=json
            external_identifier: CBDB:280963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CDE1Qpcugr989e5QM1G7hq
        subject_person_id: p_vS1NJPXp1JsEPjdjzDi7Gg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王甫義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_qhSiTaMfBR5C15Xvd8gwgU
          claim_id: c_CDE1Qpcugr989e5QM1G7hq
          source_id: s_oUA8wKZLkNeQFDmYHmGoi5
          stance: supports
          locator: CBDB:280963
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
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
        id: c_0luQz8DWEu8tl3Kx4_hZ9G
        subject_person_id: p_vS1NJPXp1JsEPjdjzDi7Gg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VSNhYvRvJzPMQs1xDCfb9J
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zns7zYEbz0LoGcTJ6ZUNVq
          claim_id: c_0luQz8DWEu8tl3Kx4_hZ9G
          source_id: s_oUA8wKZLkNeQFDmYHmGoi5
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第二百零八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oUA8wKZLkNeQFDmYHmGoi5
            source_type: api_record
            title: 中国历代人物传记资料库：王甫義（CBDB 280963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280963&o=json
            external_identifier: CBDB:280963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_VSNhYvRvJzPMQs1xDCfb9J
        status: active
        display_name: 王詔
        merged_into_person_id: null
  other: []
---

# 王甫義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王甫義，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 280963） | accepted |
| name.primary | 王甫義 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_VSNhYvRvJzPMQs1xDCfb9J | 王詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王甫義（CBDB 280963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280963&o=json)
