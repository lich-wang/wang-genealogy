---
schema: wang-person/v1
id: p_1bhXJAXaVpf689XsatKT86
status: active
merged_into: null
display_name: 王公冕
cbdb_id: 332833
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_smq1R5GXgQ1LJRsGfCBpRU
        subject_person_id: p_1bhXJAXaVpf689XsatKT86
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公冕，明人物。中国历代人物传记资料库（CBDB）以人物编号 332833 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_K8PcDea7dXHdUrMP-C_0Z4
          claim_id: c_smq1R5GXgQ1LJRsGfCBpRU
          source_id: s_BeCPfxPwTWaNXSBC4aVkaA
          stance: supports
          locator: CBDB:332833
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BeCPfxPwTWaNXSBC4aVkaA
            source_type: api_record
            title: 中国历代人物传记资料库：王公冕（CBDB 332833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332833&o=json
            external_identifier: CBDB:332833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NCbJiMraMdjs5LF7G6TLP9
        subject_person_id: p_1bhXJAXaVpf689XsatKT86
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公冕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aPqiB2UzBYKzW4wdnZRtSw
          claim_id: c_NCbJiMraMdjs5LF7G6TLP9
          source_id: s_BeCPfxPwTWaNXSBC4aVkaA
          stance: supports
          locator: CBDB:332833
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_BeCPfxPwTWaNXSBC4aVkaA
            source_type: api_record
            title: 中国历代人物传记资料库：王公冕（CBDB 332833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332833&o=json
            external_identifier: CBDB:332833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_yZC-wx0xvdiWDsIhDArEw-
        subject_person_id: p_1bhXJAXaVpf689XsatKT86
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3mAauYa8M61LZB5CiRWcsN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EnA3xB0dWd-_vY-E-tf5Sn
          claim_id: c_yZC-wx0xvdiWDsIhDArEw-
          source_id: s_BeCPfxPwTWaNXSBC4aVkaA
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3mAauYa8M61LZB5CiRWcsN
        status: active
        display_name: 王崇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王公冕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王公冕，明人物。中国历代人物传记资料库（CBDB）以人物编号 332833 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王公冕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3mAauYa8M61LZB5CiRWcsN | 王崇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公冕（CBDB 332833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332833&o=json)
