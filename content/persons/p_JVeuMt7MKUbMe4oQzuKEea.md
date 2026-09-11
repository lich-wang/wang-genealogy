---
schema: wang-person/v1
id: p_JVeuMt7MKUbMe4oQzuKEea
status: active
merged_into: null
display_name: 王潛
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jtzk6fWBgFKBq4fWs7KmEk
        subject_person_id: p_JVeuMt7MKUbMe4oQzuKEea
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_noLvgj7SjZ7RkdxyZV4Cex
          claim_id: c_Jtzk6fWBgFKBq4fWs7KmEk
          source_id: s_WZLwnzxPq2t3RDMdTiBXDp
          stance: supports
          locator: CBDB:175971
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175971）
          source: &a1
            id: s_WZLwnzxPq2t3RDMdTiBXDp
            source_type: api_record
            title: 中国历代人物传记资料库：王潛（CBDB 175971）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175971&o=json
            external_identifier: CBDB:175971
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.226Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8sUVpGXJ8xxbyiMbiAiDGe
        subject_person_id: p_JVeuMt7MKUbMe4oQzuKEea
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 727年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QFkHpWNK1yHFUSF2auL4YZ
          claim_id: c_8sUVpGXJ8xxbyiMbiAiDGe
          source_id: s_WZLwnzxPq2t3RDMdTiBXDp
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
        id: c_XZ17vtfpoVMAkDgtYzR36w
        subject_person_id: p_JVeuMt7MKUbMe4oQzuKEea
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潛（卒于727年），唐人物。籍贯長安，曾任令。（中国历代人物传记资料库 CBDB 175971）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xajN6EGvl--mxqS9DtNp02
          claim_id: c_XZ17vtfpoVMAkDgtYzR36w
          source_id: s_WZLwnzxPq2t3RDMdTiBXDp
          stance: supports
          locator: CBDB:175971
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_G1y6DRnZz3zzvKcy2JXWUV
        subject_person_id: p_ynNczWHnkXrQUYAhMaYFcU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JVeuMt7MKUbMe4oQzuKEea
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ui_Fix90OKWTmCpgbwTlnU
          claim_id: c_G1y6DRnZz3zzvKcy2JXWUV
          source_id: s_WZLwnzxPq2t3RDMdTiBXDp
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ynNczWHnkXrQUYAhMaYFcU
        status: active
        display_name: 王九思
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王潛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潛 | accepted |
| death.date | 727年 | accepted |
| bio.summary | 王潛（卒于727年），唐人物。籍贯長安，曾任令。（中国历代人物传记资料库 CBDB 175971） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ynNczWHnkXrQUYAhMaYFcU | 王九思 | accepted |

## 外部来源

- [中国历代人物传记资料库：王潛（CBDB 175971）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175971&o=json)
