---
schema: wang-person/v1
id: p_Je1o2mVdfZbZ5br4teNV7A
status: active
merged_into: null
display_name: 王守憲
cbdb_id: 290443
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_321xCEbL5wU8rSe4Hwz2g7
        subject_person_id: p_Je1o2mVdfZbZ5br4teNV7A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守憲，明人物。中国历代人物传记资料库（CBDB）以人物编号 290443 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_2REPxenTP_C6ZUyadCwF2I
          claim_id: c_321xCEbL5wU8rSe4Hwz2g7
          source_id: s_6KPe1cr3pLCqBLXj4NAHCu
          stance: supports
          locator: CBDB:290443
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_6KPe1cr3pLCqBLXj4NAHCu
            source_type: api_record
            title: 中国历代人物传记资料库：王守憲（CBDB 290443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290443&o=json
            external_identifier: CBDB:290443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zajLUXihtL4JpMqSoCHGur
        subject_person_id: p_Je1o2mVdfZbZ5br4teNV7A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守憲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_mZozM2KwTBtKRoASLGHE6Y
          claim_id: c_zajLUXihtL4JpMqSoCHGur
          source_id: s_6KPe1cr3pLCqBLXj4NAHCu
          stance: supports
          locator: CBDB:290443
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_6KPe1cr3pLCqBLXj4NAHCu
            source_type: api_record
            title: 中国历代人物传记资料库：王守憲（CBDB 290443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290443&o=json
            external_identifier: CBDB:290443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_0QCUpiDZ4mRyQqJ06Ud37G
        subject_person_id: p_Je1o2mVdfZbZ5br4teNV7A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_y3ij6WeUEcKDgNeZS3dMHo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_662fUoxo8kv8DCWVs8hMAr
          claim_id: c_0QCUpiDZ4mRyQqJ06Ud37G
          source_id: s_6KPe1cr3pLCqBLXj4NAHCu
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第二百零二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_y3ij6WeUEcKDgNeZS3dMHo
        status: active
        display_name: 王祚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王守憲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王守憲，明人物。中国历代人物传记资料库（CBDB）以人物编号 290443 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王守憲 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_y3ij6WeUEcKDgNeZS3dMHo | 王祚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守憲（CBDB 290443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290443&o=json)
