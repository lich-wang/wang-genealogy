---
schema: wang-person/v1
id: p_bgBMreRfU6UBPxaaHkRLvA
status: active
merged_into: null
display_name: 王珏
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Mz5XE1wosDBkTxLVbgyDqD
        subject_person_id: p_bgBMreRfU6UBPxaaHkRLvA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jdkpRCt4TuiJ7xychouHSi
          claim_id: c_Mz5XE1wosDBkTxLVbgyDqD
          source_id: s_38AQFUfBCMsPeHFEemGXVJ
          stance: supports
          locator: CBDB:185218
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（185218）
          source: &a1
            id: s_38AQFUfBCMsPeHFEemGXVJ
            source_type: api_record
            title: 中国历代人物传记资料库：王珏（CBDB 185218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185218&o=json
            external_identifier: CBDB:185218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.239Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_trr73SNna8db67MEVsf4R7
        subject_person_id: p_bgBMreRfU6UBPxaaHkRLvA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 885年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bCaiYvTntvj9YNLHmA51gL
          claim_id: c_trr73SNna8db67MEVsf4R7
          source_id: s_38AQFUfBCMsPeHFEemGXVJ
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
        id: c_mdAA5WhERV5VvBweGFoTe2
        subject_person_id: p_bgBMreRfU6UBPxaaHkRLvA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珏（卒于885年），唐人物。籍贯共城。（中国历代人物传记资料库 CBDB 185218）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gJThVdbHyxb0yl_uNSMupl
          claim_id: c_mdAA5WhERV5VvBweGFoTe2
          source_id: s_38AQFUfBCMsPeHFEemGXVJ
          stance: supports
          locator: CBDB:185218
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Oas3DG4hzdhxCcCyVfxEAE
        subject_person_id: p_JbrJcaN3MdnZ95DCfhnHwS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bgBMreRfU6UBPxaaHkRLvA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LubTaXPsbfoTUT3cJah2Mv
          claim_id: c_Oas3DG4hzdhxCcCyVfxEAE
          source_id: s_38AQFUfBCMsPeHFEemGXVJ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JbrJcaN3MdnZ95DCfhnHwS
        status: active
        display_name: 王惲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珏 | accepted |
| death.date | 885年 | accepted |
| bio.summary | 王珏（卒于885年），唐人物。籍贯共城。（中国历代人物传记资料库 CBDB 185218） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JbrJcaN3MdnZ95DCfhnHwS | 王惲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珏（CBDB 185218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185218&o=json)
