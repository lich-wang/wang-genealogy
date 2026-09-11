---
schema: wang-person/v1
id: p_s86e5Cxbrnn3YRT3731Jiw
status: active
merged_into: null
display_name: 王熙元
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z9erNiGeoLxF9oXzNzgBta
        subject_person_id: p_s86e5Cxbrnn3YRT3731Jiw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熙元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vc5Mbc4953GHnQeAji7sGT
          claim_id: c_Z9erNiGeoLxF9oXzNzgBta
          source_id: s_G4z2NzLBNQ6McuT85FnUCm
          stance: supports
          locator: CBDB:38275
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38275）
          source: &a1
            id: s_G4z2NzLBNQ6McuT85FnUCm
            source_type: api_record
            title: 中国历代人物传记资料库：王熙元（CBDB 38275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38275&o=json
            external_identifier: CBDB:38275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.410Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4gvWK4BvsQLry52oZSTzTp
        subject_person_id: p_s86e5Cxbrnn3YRT3731Jiw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 961年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sAWrbxwJxz6Z6YJv4Lcjoo
          claim_id: c_4gvWK4BvsQLry52oZSTzTp
          source_id: s_G4z2NzLBNQ6McuT85FnUCm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_jVA12Zhrizrtpf7G3GrAze
        subject_person_id: p_s86e5Cxbrnn3YRT3731Jiw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1018年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DWrK5eG7C4MuXdaLJgJibW
          claim_id: c_jVA12Zhrizrtpf7G3GrAze
          source_id: s_G4z2NzLBNQ6McuT85FnUCm
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
        id: c_g459DMdszgM7U3sLuETSew
        subject_person_id: p_s86e5Cxbrnn3YRT3731Jiw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HctsbcvNngx6zmifYeJKzL
          claim_id: c_g459DMdszgM7U3sLuETSew
          source_id: s_G4z2NzLBNQ6McuT85FnUCm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hlhygRj_bpneB4y5Gp4EP6
        subject_person_id: p_49bQCAKsowbC2hDZ6ijnTh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_s86e5Cxbrnn3YRT3731Jiw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aCnHVaIZqVg19L31iesOC0
          claim_id: c_hlhygRj_bpneB4y5Gp4EP6
          source_id: s_6yNGtioborkT4W15oxsKda
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1975：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6yNGtioborkT4W15oxsKda
            source_type: api_record
            title: 中国历代人物传记资料库：王處訥（CBDB 38121）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38121&o=json
            external_identifier: CBDB:38121
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.075Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_49bQCAKsowbC2hDZ6ijnTh
        status: active
        display_name: 王處訥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王熙元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王熙元 | accepted |
| birth.date | 961年 | accepted |
| death.date | 1018年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_49bQCAKsowbC2hDZ6ijnTh | 王處訥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王處訥（CBDB 38121）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38121&o=json)
- [中国历代人物传记资料库：王熙元（CBDB 38275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38275&o=json)
