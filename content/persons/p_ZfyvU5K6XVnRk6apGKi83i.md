---
schema: wang-person/v1
id: p_ZfyvU5K6XVnRk6apGKi83i
status: active
merged_into: null
display_name: 王光復
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XJaKC9Q87W1Fy5XgqttMZM
        subject_person_id: p_ZfyvU5K6XVnRk6apGKi83i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光復
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5X1qc9F5bzpPiTf5z8CmEX
          claim_id: c_XJaKC9Q87W1Fy5XgqttMZM
          source_id: s_6J5Nuo54V25aJCf972XPQV
          stance: supports
          locator: CBDB:175740
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175740）
          source: &a1
            id: s_6J5Nuo54V25aJCf972XPQV
            source_type: api_record
            title: 中国历代人物传记资料库：王光復（CBDB 175740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175740&o=json
            external_identifier: CBDB:175740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.253Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GLQhdZqGvb7cqygKNqres8
        subject_person_id: p_ZfyvU5K6XVnRk6apGKi83i
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 732年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U1jrmXiehULC6LUi3WaGNC
          claim_id: c_GLQhdZqGvb7cqygKNqres8
          source_id: s_6J5Nuo54V25aJCf972XPQV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9rmj7HvdDh4dSVQiwdXFpw
        subject_person_id: p_ZfyvU5K6XVnRk6apGKi83i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光復（卒于732年），唐人物。籍贯北芒山。（中国历代人物传记资料库 CBDB 175740）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4lcaSW2uEt09wP4fEvXXxV
          claim_id: c_9rmj7HvdDh4dSVQiwdXFpw
          source_id: s_6J5Nuo54V25aJCf972XPQV
          stance: supports
          locator: CBDB:175740
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fsUkESRGkW-pb9SLwA9Jmb
        subject_person_id: p_UK93VBS5BK4cKhhMFBCUAP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZfyvU5K6XVnRk6apGKi83i
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cL1fyvzLCGQHy4hhiv_TGD
          claim_id: c_fsUkESRGkW-pb9SLwA9Jmb
          source_id: s_UeiE3hdZpqdouSCGZnUwFd
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UeiE3hdZpqdouSCGZnUwFd
            source_type: api_record
            title: 中国历代人物传记资料库：王慶玄（CBDB 175739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175739&o=json
            external_identifier: CBDB:175739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.253Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UK93VBS5BK4cKhhMFBCUAP
        status: active
        display_name: 王慶玄
        merged_into_person_id: null
  children:
    - claim:
        id: c_rB2eyv8_jiZ9RaVsSIx0L7
        subject_person_id: p_ZfyvU5K6XVnRk6apGKi83i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FgNdna5jbkSjPaChaqn4uq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fR0mgKELuAuP6IbYkaYGIH
          claim_id: c_rB2eyv8_jiZ9RaVsSIx0L7
          source_id: s_uPCPzGSjaQ1Jkg91ZKh1Y9
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uPCPzGSjaQ1Jkg91ZKh1Y9
            source_type: api_record
            title: 中国历代人物传记资料库：王邕（CBDB 175741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175741&o=json
            external_identifier: CBDB:175741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.090Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FgNdna5jbkSjPaChaqn4uq
        status: active
        display_name: 王邕
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王光復

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光復 | accepted |
| death.date | 732年 | accepted |
| bio.summary | 王光復（卒于732年），唐人物。籍贯北芒山。（中国历代人物传记资料库 CBDB 175740） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UK93VBS5BK4cKhhMFBCUAP | 王慶玄 | accepted |
| children | p_FgNdna5jbkSjPaChaqn4uq | 王邕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王光復（CBDB 175740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175740&o=json)
- [中国历代人物传记资料库：王慶玄（CBDB 175739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175739&o=json)
- [中国历代人物传记资料库：王邕（CBDB 175741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175741&o=json)
