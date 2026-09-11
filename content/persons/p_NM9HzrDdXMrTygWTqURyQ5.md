---
schema: wang-person/v1
id: p_NM9HzrDdXMrTygWTqURyQ5
status: active
merged_into: null
display_name: 王參元
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DCAy5Gpm842Np3hNg7qMTy
        subject_person_id: p_NM9HzrDdXMrTygWTqURyQ5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王參元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Rb3p9ZPVdJ1SsyATYepNwL
          claim_id: c_DCAy5Gpm842Np3hNg7qMTy
          source_id: s_Y93PxyMQAExXCGZirBBom5
          stance: supports
          locator: CBDB:195426
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（195426）
          source: &a1
            id: s_Y93PxyMQAExXCGZirBBom5
            source_type: api_record
            title: 中国历代人物传记资料库：王參元（CBDB 195426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=195426&o=json
            external_identifier: CBDB:195426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.300Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GMgf39W5vXrvDtvkWKt8Qd
        subject_person_id: p_NM9HzrDdXMrTygWTqURyQ5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 818年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ka4SyqotiSpfV4BpepFYAS
          claim_id: c_GMgf39W5vXrvDtvkWKt8Qd
          source_id: s_Y93PxyMQAExXCGZirBBom5
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
        id: c_y2ABWPtbRPW7Cm4pJnGGY1
        subject_person_id: p_NM9HzrDdXMrTygWTqURyQ5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王參元（卒于818年），唐人物。籍贯濮陽，身份为書法家。（中国历代人物传记资料库 CBDB 195426）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tpo4KysP9gGNzLqqcTbeb-
          claim_id: c_y2ABWPtbRPW7Cm4pJnGGY1
          source_id: s_Y93PxyMQAExXCGZirBBom5
          stance: supports
          locator: CBDB:195426
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_AYgpfi02p2CDzG-w4apQ5t
        subject_person_id: p_LVQYZ3GtoMeNLNRiLNfrkK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NM9HzrDdXMrTygWTqURyQ5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q40B9KEr_G7GY3fdd0atR3
          claim_id: c_AYgpfi02p2CDzG-w4apQ5t
          source_id: s_D1W8yD5PetNe6Lxk4RYza7
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_D1W8yD5PetNe6Lxk4RYza7
            source_type: api_record
            title: 中国历代人物传记资料库：王栖曜（CBDB 189585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189585&o=json
            external_identifier: CBDB:189585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.303Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LVQYZ3GtoMeNLNRiLNfrkK
        status: active
        display_name: 王栖曜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王參元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王參元 | accepted |
| death.date | 818年 | accepted |
| bio.summary | 王參元（卒于818年），唐人物。籍贯濮陽，身份为書法家。（中国历代人物传记资料库 CBDB 195426） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LVQYZ3GtoMeNLNRiLNfrkK | 王栖曜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王參元（CBDB 195426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=195426&o=json)
- [中国历代人物传记资料库：王栖曜（CBDB 189585）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189585&o=json)
