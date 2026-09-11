---
schema: wang-person/v1
id: p_rLC7PUAc3zy8aqLzbNSQL5
status: active
merged_into: null
display_name: 王仲連
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tgLAarTgAAH3QDMDmCVGd2
        subject_person_id: p_rLC7PUAc3zy8aqLzbNSQL5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲連
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PtzESLbJbuQWowNy16MVGZ
          claim_id: c_tgLAarTgAAH3QDMDmCVGd2
          source_id: s_1mXFMGCvX89qEBrYa8RMR6
          stance: supports
          locator: CBDB:157939
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（157939）
          source: &a1
            id: s_1mXFMGCvX89qEBrYa8RMR6
            source_type: api_record
            title: 中国历代人物传记资料库：王仲連（CBDB 157939）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157939&o=json
            external_identifier: CBDB:157939
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.914Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_deqnxSk1PspEs4PykANgNt
        subject_person_id: p_rLC7PUAc3zy8aqLzbNSQL5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q4DhYZC8s4BnzaNxtGoKY5
          claim_id: c_deqnxSk1PspEs4PykANgNt
          source_id: s_1mXFMGCvX89qEBrYa8RMR6
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
        id: c_ltY7mX_Szm9BK8bixKubWH
        subject_person_id: p_nK9apVMeY253DbErnUEdp9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rLC7PUAc3zy8aqLzbNSQL5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LtJZzsX93Oamje9m_zCrq6
          claim_id: c_ltY7mX_Szm9BK8bixKubWH
          source_id: s_bVmbR8kH1i5NZa5gpCFKZi
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dahe 65：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bVmbR8kH1i5NZa5gpCFKZi
            source_type: api_record
            title: 中国历代人物传记资料库：王翼（CBDB 141645）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141645&o=json
            external_identifier: CBDB:141645
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.561Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nK9apVMeY253DbErnUEdp9
        status: active
        display_name: 王翼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲連

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲連 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nK9apVMeY253DbErnUEdp9 | 王翼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翼（CBDB 141645）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141645&o=json)
- [中国历代人物传记资料库：王仲連（CBDB 157939）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=157939&o=json)
