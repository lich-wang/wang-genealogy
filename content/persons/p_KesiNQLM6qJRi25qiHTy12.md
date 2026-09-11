---
schema: wang-person/v1
id: p_KesiNQLM6qJRi25qiHTy12
status: active
merged_into: null
display_name: 王命新
cbdb_id: 207714
revision: 6
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CxxodkU5XtbX4XFBb14dTq
        subject_person_id: p_KesiNQLM6qJRi25qiHTy12
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王命新（生于1581年），明人物。中国历代人物传记资料库（CBDB）以人物编号 207714 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_FRi0s7w-xeyTgApI_NpmtG
          claim_id: c_CxxodkU5XtbX4XFBb14dTq
          source_id: s_M5CCwNvLj9G3LrpjDBxTNK
          stance: supports
          locator: CBDB:207714
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_M5CCwNvLj9G3LrpjDBxTNK
            source_type: api_record
            title: 中国历代人物传记资料库：王命新（CBDB 207714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207714&o=json
            external_identifier: CBDB:207714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1cWyudGNkXp7tA2V6e1QyF
        subject_person_id: p_KesiNQLM6qJRi25qiHTy12
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1581年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1581-01-01
            latest: 1581-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZQUTq48CMPK3D3tC8vYVCz
          claim_id: c_1cWyudGNkXp7tA2V6e1QyF
          source_id: s_M5CCwNvLj9G3LrpjDBxTNK
          stance: supports
          locator: CBDB:207714
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1581
          source:
            id: s_M5CCwNvLj9G3LrpjDBxTNK
            source_type: api_record
            title: 中国历代人物传记资料库：王命新（CBDB 207714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207714&o=json
            external_identifier: CBDB:207714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QpzHdkinZbbgLAJY5SJFAZ
        subject_person_id: p_KesiNQLM6qJRi25qiHTy12
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王命新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Cje29i4jFYsgg7M6AnE6Lm
          claim_id: c_QpzHdkinZbbgLAJY5SJFAZ
          source_id: s_M5CCwNvLj9G3LrpjDBxTNK
          stance: supports
          locator: CBDB:207714
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1581
          source:
            id: s_M5CCwNvLj9G3LrpjDBxTNK
            source_type: api_record
            title: 中国历代人物传记资料库：王命新（CBDB 207714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207714&o=json
            external_identifier: CBDB:207714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FIY87YS9brHm8k-ImycOTD
        subject_person_id: p_RBDo1mCVNx525KP3Mg5Mqx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KesiNQLM6qJRi25qiHTy12
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EH9l9zgNhhzXsWPcCcqiFK
          claim_id: c_FIY87YS9brHm8k-ImycOTD
          source_id: s_LvQUHn3wqMLHWJ277GDesV
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百七十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LvQUHn3wqMLHWJ277GDesV
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 234423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234423&o=json
            external_identifier: CBDB:234423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.740Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_RBDo1mCVNx525KP3Mg5Mqx
        status: active
        display_name: 王鉞
        merged_into_person_id: null
  children:
    - claim:
        id: c_SQaKiM5tB3dCrJ-tGVBCrf
        subject_person_id: p_KesiNQLM6qJRi25qiHTy12
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8BV8yv249319uyHRhn3Xd8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JJki1CJ8BnrpyUEWRVvMfI
          claim_id: c_SQaKiM5tB3dCrJ-tGVBCrf
          source_id: s_8hDjf6V79UHfDWtiwWcPcJ
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百七十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8hDjf6V79UHfDWtiwWcPcJ
            source_type: api_record
            title: 中国历代人物传记资料库：王玄彊（CBDB 234438）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234438&o=json
            external_identifier: CBDB:234438
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_8BV8yv249319uyHRhn3Xd8
        status: active
        display_name: 王玄彊
        merged_into_person_id: null
    - claim:
        id: c_k8Ky6Oax8bvCvuhlXzK46P
        subject_person_id: p_KesiNQLM6qJRi25qiHTy12
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BB8ATyYUvngC248UfNZt9Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BHhAxgfjUo1lR5RRyLFTYS
          claim_id: c_k8Ky6Oax8bvCvuhlXzK46P
          source_id: s_HHCZozJKxFF3fjAPbEjFM2
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百七十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HHCZozJKxFF3fjAPbEjFM2
            source_type: api_record
            title: 中国历代人物传记资料库：王玄中（CBDB 234437）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234437&o=json
            external_identifier: CBDB:234437
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_BB8ATyYUvngC248UfNZt9Z
        status: active
        display_name: 王玄中
        merged_into_person_id: null
    - claim:
        id: c__szIYNnxVQ5YsodKf05lFa
        subject_person_id: p_KesiNQLM6qJRi25qiHTy12
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LdVqCEhHhnds8GD99513H9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_isk33dGrCRGt3Ot_CjoKJ0
          claim_id: c__szIYNnxVQ5YsodKf05lFa
          source_id: s_eb8KzEumpzqcRCwhRqx7BD
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百七十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eb8KzEumpzqcRCwhRqx7BD
            source_type: api_record
            title: 中国历代人物传记资料库：王玄恪（CBDB 234439）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234439&o=json
            external_identifier: CBDB:234439
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_LdVqCEhHhnds8GD99513H9
        status: active
        display_name: 王玄恪
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_nqzhHJ7caN23Xzc6_FYL47
        subject_person_id: p_k1nHyvcBW8tbGGmQ6FqZyN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_KesiNQLM6qJRi25qiHTy12
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LH7Uwt6uRn16rxsG3fy2Bp
          claim_id: c_nqzhHJ7caN23Xzc6_FYL47
          source_id: s_5s4eo8aXXcBfTHBTCikryj
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百七十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5s4eo8aXXcBfTHBTCikryj
            source_type: api_record
            title: 中国历代人物传记资料库：王士傑（CBDB 234421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234421&o=json
            external_identifier: CBDB:234421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.736Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_k1nHyvcBW8tbGGmQ6FqZyN
        status: active
        display_name: 王士傑
        merged_into_person_id: null
    - claim:
        id: c_WceAhRlKRdYafEWtRsnQyt
        subject_person_id: p_s7MQmD5cpgcbsyV875LFvH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_KesiNQLM6qJRi25qiHTy12
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mt7A5XbtbvbVm4SF6vsTXT
          claim_id: c_WceAhRlKRdYafEWtRsnQyt
          source_id: s_ShC9PqDZBfjrZKj462sV1Y
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百七十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ShC9PqDZBfjrZKj462sV1Y
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 234422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234422&o=json
            external_identifier: CBDB:234422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.737Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_s7MQmD5cpgcbsyV875LFvH
        status: active
        display_name: 王詔
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王命新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王命新（生于1581年），明人物。中国历代人物传记资料库（CBDB）以人物编号 207714 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1581年 | accepted |
| name.primary | 王命新 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RBDo1mCVNx525KP3Mg5Mqx | 王鉞 | accepted |
| children | p_8BV8yv249319uyHRhn3Xd8 | 王玄彊 | accepted |
| children | p_BB8ATyYUvngC248UfNZt9Z | 王玄中 | accepted |
| children | p_LdVqCEhHhnds8GD99513H9 | 王玄恪 | accepted |
| ancestors | p_k1nHyvcBW8tbGGmQ6FqZyN | 王士傑 | accepted |
| ancestors | p_s7MQmD5cpgcbsyV875LFvH | 王詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王命新（CBDB 207714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207714&o=json)
- [中国历代人物传记资料库：王士傑（CBDB 234421）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234421&o=json)
- [中国历代人物传记资料库：王玄彊（CBDB 234438）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234438&o=json)
- [中国历代人物传记资料库：王玄恪（CBDB 234439）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234439&o=json)
- [中国历代人物传记资料库：王玄中（CBDB 234437）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234437&o=json)
- [中国历代人物传记资料库：王鉞（CBDB 234423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234423&o=json)
- [中国历代人物传记资料库：王詔（CBDB 234422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=234422&o=json)
