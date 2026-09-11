---
schema: wang-person/v1
id: p_GBfHvW9j1wmH7AtQd6s7JQ
status: active
merged_into: null
display_name: 王化
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AiTHVJvbnV7ZenGGkFQ1vb
        subject_person_id: p_GBfHvW9j1wmH7AtQd6s7JQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vZ2qUMjpZoRHPuyVTAi4Lm
          claim_id: c_AiTHVJvbnV7ZenGGkFQ1vb
          source_id: s_9YKRu97xF4S9qXwoCZA3WP
          stance: supports
          locator: CBDB:202136
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202136）
          source: &a1
            id: s_9YKRu97xF4S9qXwoCZA3WP
            source_type: api_record
            title: 中国历代人物传记资料库：王化（CBDB 202136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202136&o=json
            external_identifier: CBDB:202136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.723Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_H3JNG9fWtXpYEhpW23Q6XQ
        subject_person_id: p_GBfHvW9j1wmH7AtQd6s7JQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1485年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kPD3HixNZJH4rEqGrEa6ub
          claim_id: c_H3JNG9fWtXpYEhpW23Q6XQ
          source_id: s_9YKRu97xF4S9qXwoCZA3WP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1MQCD1VtrPQEBHaBLMAvX9
        subject_person_id: p_GBfHvW9j1wmH7AtQd6s7JQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化（生于1485年），明人物。正德十六年進士，籍贯濱州，入仕進士。（中国历代人物传记资料库 CBDB 202136）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_18-F2MpF6EbE_EJlnOZMG_
          claim_id: c_1MQCD1VtrPQEBHaBLMAvX9
          source_id: s_9YKRu97xF4S9qXwoCZA3WP
          stance: supports
          locator: CBDB:202136
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_R0cYgkI_nsoETsRmyKWa9j
        subject_person_id: p_8RMMck1DAhfReSxN8nPCYS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GBfHvW9j1wmH7AtQd6s7JQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fFhJDNSDsgwd1pPaS_HOHr
          claim_id: c_R0cYgkI_nsoETsRmyKWa9j
          source_id: s_8Nab8qKc8iudZ5tVYtDwwf
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第一百零四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8Nab8qKc8iudZ5tVYtDwwf
            source_type: api_record
            title: 中国历代人物传记资料库：王琰（CBDB 284119）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284119&o=json
            external_identifier: CBDB:284119
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.176Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8RMMck1DAhfReSxN8nPCYS
        status: active
        display_name: 王琰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_t0PZhuLkHp9wwHD_xqpMCy
        subject_person_id: p_GDF8GGeEC92U99D6Cq7svx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GBfHvW9j1wmH7AtQd6s7JQ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R4KxtYgvLEEdwk4Mp4v_xF
          claim_id: c_t0PZhuLkHp9wwHD_xqpMCy
          source_id: s_z53XWpYshRPUC7mMJ3bnzv
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第一百零四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_z53XWpYshRPUC7mMJ3bnzv
            source_type: api_record
            title: 中国历代人物传记资料库：王克端（CBDB 284117）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284117&o=json
            external_identifier: CBDB:284117
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.174Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GDF8GGeEC92U99D6Cq7svx
        status: active
        display_name: 王克端
        merged_into_person_id: null
    - claim:
        id: c_VLg-aFC50pQDxnbYkkKQtz
        subject_person_id: p_ksjS329pr4V6amyET32UQT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GBfHvW9j1wmH7AtQd6s7JQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zwhiHacvm18OlY5lc8wmQi
          claim_id: c_VLg-aFC50pQDxnbYkkKQtz
          source_id: s_N1h2byjUksBvBJgaQN9RXj
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第一百零四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_N1h2byjUksBvBJgaQN9RXj
            source_type: api_record
            title: 中国历代人物传记资料库：王貴（CBDB 284118）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284118&o=json
            external_identifier: CBDB:284118
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.175Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ksjS329pr4V6amyET32UQT
        status: active
        display_name: 王貴
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王化

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王化 | accepted |
| birth.date | 1485年 | accepted |
| bio.summary | 王化（生于1485年），明人物。正德十六年進士，籍贯濱州，入仕進士。（中国历代人物传记资料库 CBDB 202136） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8RMMck1DAhfReSxN8nPCYS | 王琰 | accepted |
| ancestors | p_GDF8GGeEC92U99D6Cq7svx | 王克端 | accepted |
| ancestors | p_ksjS329pr4V6amyET32UQT | 王貴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貴（CBDB 284118）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284118&o=json)
- [中国历代人物传记资料库：王化（CBDB 202136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202136&o=json)
- [中国历代人物传记资料库：王克端（CBDB 284117）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284117&o=json)
- [中国历代人物传记资料库：王琰（CBDB 284119）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284119&o=json)
