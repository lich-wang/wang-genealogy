---
schema: wang-person/v1
id: p_5rHGpGBCFoFL3QgPEzj8DQ
status: active
merged_into: null
display_name: 王定簡
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NnEawkWAoPhRFNCfq2H1Hd
        subject_person_id: p_5rHGpGBCFoFL3QgPEzj8DQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定簡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mzAkQeAsr8CuoiPYCJot87
          claim_id: c_NnEawkWAoPhRFNCfq2H1Hd
          source_id: s_VFU25PWG4H6FKkEgGPLWVr
          stance: supports
          locator: CBDB:186152
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186152）
          source: &a1
            id: s_VFU25PWG4H6FKkEgGPLWVr
            source_type: api_record
            title: 中国历代人物传记资料库：王定簡（CBDB 186152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186152&o=json
            external_identifier: CBDB:186152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.269Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_oH3JJ76PB7gK6FBY4kQtAx
        subject_person_id: p_5rHGpGBCFoFL3QgPEzj8DQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 909年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_59peKxSLRNvyEPh1JSEeq7
          claim_id: c_oH3JJ76PB7gK6FBY4kQtAx
          source_id: s_VFU25PWG4H6FKkEgGPLWVr
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
        id: c_seDPap6izW13aNLYR2987p
        subject_person_id: p_5rHGpGBCFoFL3QgPEzj8DQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定簡（卒于909年），唐人物。曾任親事。（中国历代人物传记资料库 CBDB 186152）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LENjoSsZ4rTsWfxaddEdcH
          claim_id: c_seDPap6izW13aNLYR2987p
          source_id: s_VFU25PWG4H6FKkEgGPLWVr
          stance: supports
          locator: CBDB:186152
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_m5MpwUEo-kUnkYPEX_ObTF
        subject_person_id: p_PaQ5yP1i6ggstQ3reseLJo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5rHGpGBCFoFL3QgPEzj8DQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_79O_20rZGor0Suw_8zgYLT
          claim_id: c_m5MpwUEo-kUnkYPEX_ObTF
          source_id: s_VFU25PWG4H6FKkEgGPLWVr
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PaQ5yP1i6ggstQ3reseLJo
        status: active
        display_name: 王尚準
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王定簡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王定簡 | accepted |
| death.date | 909年 | accepted |
| bio.summary | 王定簡（卒于909年），唐人物。曾任親事。（中国历代人物传记资料库 CBDB 186152） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PaQ5yP1i6ggstQ3reseLJo | 王尚準 | accepted |

## 外部来源

- [中国历代人物传记资料库：王定簡（CBDB 186152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186152&o=json)
