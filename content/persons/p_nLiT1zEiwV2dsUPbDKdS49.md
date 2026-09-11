---
schema: wang-person/v1
id: p_nLiT1zEiwV2dsUPbDKdS49
status: active
merged_into: null
display_name: 王岳
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a1ZJwAndfVFMJZ9rfNRWd5
        subject_person_id: p_nLiT1zEiwV2dsUPbDKdS49
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王岳
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qDvjbPChXP1fCMDfDNi6Gd
          claim_id: c_a1ZJwAndfVFMJZ9rfNRWd5
          source_id: s_GcteQKM4PHg5fMVxee24tt
          stance: supports
          locator: CBDB:186737
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186737）
          source: &a1
            id: s_GcteQKM4PHg5fMVxee24tt
            source_type: api_record
            title: 中国历代人物传记资料库：王岳（CBDB 186737）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186737&o=json
            external_identifier: CBDB:186737
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.285Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_oVBHHu8AS2haL4L7AJcD4u
        subject_person_id: p_nLiT1zEiwV2dsUPbDKdS49
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 833年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kyYJRwPWuFbSk6NYADLFbJ
          claim_id: c_oVBHHu8AS2haL4L7AJcD4u
          source_id: s_GcteQKM4PHg5fMVxee24tt
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
        id: c_CCz2UEnA4kYse8yoGAVkGz
        subject_person_id: p_nLiT1zEiwV2dsUPbDKdS49
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王岳（卒于833年），史料所见人物。本项目依据《中国历代人物传记资料库：王岳（CBDB 186737）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_slkRwSHQlPdvgxLwqM7qVm
          claim_id: c_CCz2UEnA4kYse8yoGAVkGz
          source_id: s_GcteQKM4PHg5fMVxee24tt
          stance: supports
          locator: CBDB:186737
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gm5EHxrIV6e_yP1YUN8j-Q
        subject_person_id: p_XLANjjKCBK7qVKBrPKgEcS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nLiT1zEiwV2dsUPbDKdS49
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t1Umf4q2L330SrEve4sD1z
          claim_id: c_gm5EHxrIV6e_yP1YUN8j-Q
          source_id: s_GcteQKM4PHg5fMVxee24tt
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XLANjjKCBK7qVKBrPKgEcS
        status: active
        display_name: 王堅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王岳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王岳 | accepted |
| death.date | 833年 | accepted |
| bio.summary | 王岳（卒于833年），史料所见人物。本项目依据《中国历代人物传记资料库：王岳（CBDB 186737）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XLANjjKCBK7qVKBrPKgEcS | 王堅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王岳（CBDB 186737）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186737&o=json)
