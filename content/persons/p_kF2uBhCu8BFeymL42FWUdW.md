---
schema: wang-person/v1
id: p_kF2uBhCu8BFeymL42FWUdW
status: active
merged_into: null
display_name: 王舜鼎
cbdb_id: 342107
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aR59RQ7EztHXhTe4VgU6MX
        subject_person_id: p_kF2uBhCu8BFeymL42FWUdW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜鼎，明人物。明清進士進士，籍贯會稽，入仕進士，曾任府尹、工部尚書、工部侍郎。（中国历代人物传记资料库 CBDB 342107）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ekOtqKqDPPGrF5QueMoF6A
          claim_id: c_aR59RQ7EztHXhTe4VgU6MX
          source_id: s_RJ6WcEF4mMY5Jdkx3A7BNX
          stance: supports
          locator: CBDB:342107
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_RJ6WcEF4mMY5Jdkx3A7BNX
            source_type: api_record
            title: 中国历代人物传记资料库：王舜鼎（CBDB 342107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342107&o=json
            external_identifier: CBDB:342107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:10.160Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wxJnf7bCaG1ihK5JL7z4Xf
        subject_person_id: p_kF2uBhCu8BFeymL42FWUdW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kZZF1dQUBhBas1i2zZJgyZ
          claim_id: c_wxJnf7bCaG1ihK5JL7z4Xf
          source_id: s_RJ6WcEF4mMY5Jdkx3A7BNX
          stance: supports
          locator: CBDB:342107
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4201-4300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_JPfI1J79fYSSDn9I1o84K1
        subject_person_id: p_kF2uBhCu8BFeymL42FWUdW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aTm4JhEeSSom8FhiPPYik7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PXBqg0Mf4CzgHmBdI-GgPO
          claim_id: c_JPfI1J79fYSSDn9I1o84K1
          source_id: s_1HhkUA9EQbTLzbbC9F2yc7
          stance: supports
          locator: 紹興府志:八十卷，Igid=316285：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1HhkUA9EQbTLzbbC9F2yc7
            source_type: api_record
            title: 中国历代人物传记资料库：王亹（CBDB 556624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556624&o=json
            external_identifier: CBDB:556624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.655Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aTm4JhEeSSom8FhiPPYik7
        status: active
        display_name: 王亹
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_Wkbq5CK5t_ZA09GmusCkQt
        subject_person_id: p_kF2uBhCu8BFeymL42FWUdW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FJ8kB5ov8PURm7VjHpvGtx
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xsl3W3ooKH9_FBLlWcuLTU
          claim_id: c_Wkbq5CK5t_ZA09GmusCkQt
          source_id: s_RJ6WcEF4mMY5Jdkx3A7BNX
          stance: supports
          locator: 紹興府志:八十卷，Igid=316285：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RJ6WcEF4mMY5Jdkx3A7BNX
            source_type: api_record
            title: 中国历代人物传记资料库：王舜鼎（CBDB 342107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342107&o=json
            external_identifier: CBDB:342107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:10.160Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_FJ8kB5ov8PURm7VjHpvGtx
        status: active
        display_name: 王自超
        merged_into_person_id: null
  other: []
---

# 王舜鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王舜鼎，明人物。明清進士進士，籍贯會稽，入仕進士，曾任府尹、工部尚書、工部侍郎。（中国历代人物传记资料库 CBDB 342107） | accepted |
| name.primary | 王舜鼎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_aTm4JhEeSSom8FhiPPYik7 | 王亹 | accepted |
| descendants | p_FJ8kB5ov8PURm7VjHpvGtx | 王自超 | accepted |

## 外部来源

- [中国历代人物传记资料库：王舜鼎（CBDB 342107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342107&o=json)
- [中国历代人物传记资料库：王亹（CBDB 556624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556624&o=json)
