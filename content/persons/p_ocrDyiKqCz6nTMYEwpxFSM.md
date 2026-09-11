---
schema: wang-person/v1
id: p_ocrDyiKqCz6nTMYEwpxFSM
status: active
merged_into: null
display_name: 王紳
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s8wHKb1dd69571dp2WVFj1
        subject_person_id: p_ocrDyiKqCz6nTMYEwpxFSM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hH99RiFvbHeuHqUFzCEBuW
          claim_id: c_s8wHKb1dd69571dp2WVFj1
          source_id: s_e9U5HQQhYRPGA8RoUZBRR2
          stance: supports
          locator: CBDB:329570
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329570）
          source: &a1
            id: s_e9U5HQQhYRPGA8RoUZBRR2
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 329570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329570&o=json
            external_identifier: CBDB:329570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.325Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HkN53k1ruoSRTrU6S6h6Ey
        subject_person_id: p_ocrDyiKqCz6nTMYEwpxFSM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紳，明人物。嘉靖四十四年進士。（中国历代人物传记资料库 CBDB 329570）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KgejkIK-su8o66YLunaFRU
          claim_id: c_HkN53k1ruoSRTrU6S6h6Ey
          source_id: s_e9U5HQQhYRPGA8RoUZBRR2
          stance: supports
          locator: CBDB:329570
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_wG60Qn_RRWLq-bTOR_iWYR
        subject_person_id: p_ocrDyiKqCz6nTMYEwpxFSM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_r3YmXMTMRN1Q6rQ4r6h7aU
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P2e_Po_eaIPT1vQ7vhhp1k
          claim_id: c_wG60Qn_RRWLq-bTOR_iWYR
          source_id: s_e9U5HQQhYRPGA8RoUZBRR2
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_r3YmXMTMRN1Q6rQ4r6h7aU
        status: active
        display_name: 王嘉言
        merged_into_person_id: null
  other: []
---

# 王紳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紳 | accepted |
| bio.summary | 王紳，明人物。嘉靖四十四年進士。（中国历代人物传记资料库 CBDB 329570） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_r3YmXMTMRN1Q6rQ4r6h7aU | 王嘉言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紳（CBDB 329570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329570&o=json)
