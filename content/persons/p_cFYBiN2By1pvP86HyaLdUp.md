---
schema: wang-person/v1
id: p_cFYBiN2By1pvP86HyaLdUp
status: active
merged_into: null
display_name: 王曰敏
cbdb_id: 283925
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rHGWzAuSDefzmBVpRGaeu8
        subject_person_id: p_cFYBiN2By1pvP86HyaLdUp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曰敏，明人物。中国历代人物传记资料库（CBDB）以人物编号 283925 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_nLRwbYBj5nSONRg9K1OBG9
          claim_id: c_rHGWzAuSDefzmBVpRGaeu8
          source_id: s_A7mQcDzdZYPVUaQGnRjmgK
          stance: supports
          locator: CBDB:283925
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_A7mQcDzdZYPVUaQGnRjmgK
            source_type: api_record
            title: 中国历代人物传记资料库：王曰敏（CBDB 283925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283925&o=json
            external_identifier: CBDB:283925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vWTxRSd4r4SYDBzt1gQVfv
        subject_person_id: p_cFYBiN2By1pvP86HyaLdUp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曰敏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_D5TKBG2H83H1NDL23uF9sF
          claim_id: c_vWTxRSd4r4SYDBzt1gQVfv
          source_id: s_A7mQcDzdZYPVUaQGnRjmgK
          stance: supports
          locator: CBDB:283925
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_A7mQcDzdZYPVUaQGnRjmgK
            source_type: api_record
            title: 中国历代人物传记资料库：王曰敏（CBDB 283925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283925&o=json
            external_identifier: CBDB:283925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_OGv3XXBEwNJv1a5EFNaqyg
        subject_person_id: p_cFYBiN2By1pvP86HyaLdUp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_uQx6CsD653L6hRpaz3mPf9
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_omqu2RVSLGA68eCG-zMHYZ
          claim_id: c_OGv3XXBEwNJv1a5EFNaqyg
          source_id: s_A7mQcDzdZYPVUaQGnRjmgK
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第八十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uQx6CsD653L6hRpaz3mPf9
        status: active
        display_name: 王同祖
        merged_into_person_id: null
  other: []
---

# 王曰敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王曰敏，明人物。中国历代人物传记资料库（CBDB）以人物编号 283925 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王曰敏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_uQx6CsD653L6hRpaz3mPf9 | 王同祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王曰敏（CBDB 283925）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283925&o=json)
