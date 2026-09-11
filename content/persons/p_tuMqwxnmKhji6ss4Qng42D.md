---
schema: wang-person/v1
id: p_tuMqwxnmKhji6ss4Qng42D
status: active
merged_into: null
display_name: 王廷受
cbdb_id: 232995
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C2j7wEdXUyRjEkCApy46h6
        subject_person_id: p_tuMqwxnmKhji6ss4Qng42D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷受，明人物。中国历代人物传记资料库（CBDB）以人物编号 232995 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_OvmTmcjLCQlJxu6WxuAxD9
          claim_id: c_C2j7wEdXUyRjEkCApy46h6
          source_id: s_CVmpNs8Nq2eUFEfwU1h8Hj
          stance: supports
          locator: CBDB:232995
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_CVmpNs8Nq2eUFEfwU1h8Hj
            source_type: api_record
            title: 中国历代人物传记资料库：王廷受（CBDB 232995）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232995&o=json
            external_identifier: CBDB:232995
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QeYBEtyL18cbgYwC72JSGE
        subject_person_id: p_tuMqwxnmKhji6ss4Qng42D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷受
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Hn586VGG4shUfDVKK8JAuK
          claim_id: c_QeYBEtyL18cbgYwC72JSGE
          source_id: s_CVmpNs8Nq2eUFEfwU1h8Hj
          stance: supports
          locator: CBDB:232995
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_CVmpNs8Nq2eUFEfwU1h8Hj
            source_type: api_record
            title: 中国历代人物传记资料库：王廷受（CBDB 232995）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232995&o=json
            external_identifier: CBDB:232995
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
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
        id: c_IcH2ReTnI0sgPl5ijKQIbC
        subject_person_id: p_tuMqwxnmKhji6ss4Qng42D
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xFXiQ1xtVHC3hhy55VEnSX
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bpkKhHYoS1ujkKbDK_qBa-
          claim_id: c_IcH2ReTnI0sgPl5ijKQIbC
          source_id: s_CVmpNs8Nq2eUFEfwU1h8Hj
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xFXiQ1xtVHC3hhy55VEnSX
        status: active
        display_name: 王順行
        merged_into_person_id: null
  other: []
---

# 王廷受

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王廷受，明人物。中国历代人物传记资料库（CBDB）以人物编号 232995 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王廷受 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_xFXiQ1xtVHC3hhy55VEnSX | 王順行 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷受（CBDB 232995）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232995&o=json)
