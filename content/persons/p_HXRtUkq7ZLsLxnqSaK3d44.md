---
schema: wang-person/v1
id: p_HXRtUkq7ZLsLxnqSaK3d44
status: active
merged_into: null
display_name: 王庭濟
cbdb_id: 238291
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_74YU84wBcFKVce5ArLqrjn
        subject_person_id: p_HXRtUkq7ZLsLxnqSaK3d44
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭濟，明人物。正统七年進士。（中国历代人物传记资料库 CBDB 238291）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_nSZBQM0QEfGhbzZLZCoVDG
          claim_id: c_74YU84wBcFKVce5ArLqrjn
          source_id: s_WMHDG8g6S2DBBmC6n9R6zt
          stance: supports
          locator: CBDB:238291
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_WMHDG8g6S2DBBmC6n9R6zt
            source_type: api_record
            title: 中国历代人物传记资料库：王庭濟（CBDB 238291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238291&o=json
            external_identifier: CBDB:238291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jLRR9BjMLLeKjrj1Z3bPC5
        subject_person_id: p_HXRtUkq7ZLsLxnqSaK3d44
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MCpQwJ9WqBQtXLVNrcf9Qg
          claim_id: c_jLRR9BjMLLeKjrj1Z3bPC5
          source_id: s_WMHDG8g6S2DBBmC6n9R6zt
          stance: supports
          locator: CBDB:238291
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
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
        id: c_0NYVW5YpKM2xLKhyPG5UGt
        subject_person_id: p_HXRtUkq7ZLsLxnqSaK3d44
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6e5ELnuv2E5KGPsNrAysQX
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mCwuq9Y0PsxkEsri6IYGd2
          claim_id: c_0NYVW5YpKM2xLKhyPG5UGt
          source_id: s_WMHDG8g6S2DBBmC6n9R6zt
          stance: supports
          locator: 正统七年進士登科錄:一卷，第三甲第三十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WMHDG8g6S2DBBmC6n9R6zt
            source_type: api_record
            title: 中国历代人物传记资料库：王庭濟（CBDB 238291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238291&o=json
            external_identifier: CBDB:238291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_6e5ELnuv2E5KGPsNrAysQX
        status: active
        display_name: 王庾
        merged_into_person_id: null
  other: []
---

# 王庭濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王庭濟，明人物。正统七年進士。（中国历代人物传记资料库 CBDB 238291） | accepted |
| name.primary | 王庭濟 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_6e5ELnuv2E5KGPsNrAysQX | 王庾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王庭濟（CBDB 238291）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238291&o=json)
