---
schema: wang-person/v1
id: p_TdCGJkaDBDD2sDaykpJqA5
status: active
merged_into: null
display_name: 王枕
cbdb_id: 211334
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SMg1eC1MTEquVgA53BsvhR
        subject_person_id: p_TdCGJkaDBDD2sDaykpJqA5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王枕，明人物。中国历代人物传记资料库（CBDB）以人物编号 211334 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_-L_wraCvqXAwiE6LBlv_V9
          claim_id: c_SMg1eC1MTEquVgA53BsvhR
          source_id: s_1X4KEBZ8TJ6Lwn7CXtCtjQ
          stance: supports
          locator: CBDB:211334
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1X4KEBZ8TJ6Lwn7CXtCtjQ
            source_type: api_record
            title: 中国历代人物传记资料库：王枕（CBDB 211334）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211334&o=json
            external_identifier: CBDB:211334
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1B4LRKCM5UTFfjR22NKa5f
        subject_person_id: p_TdCGJkaDBDD2sDaykpJqA5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王枕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ypFQA4NpH8qkpm8FCYDEqB
          claim_id: c_1B4LRKCM5UTFfjR22NKa5f
          source_id: s_1X4KEBZ8TJ6Lwn7CXtCtjQ
          stance: supports
          locator: CBDB:211334
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_1X4KEBZ8TJ6Lwn7CXtCtjQ
            source_type: api_record
            title: 中国历代人物传记资料库：王枕（CBDB 211334）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211334&o=json
            external_identifier: CBDB:211334
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_5UZywOhDwgvt4aZd_Sig1x
        subject_person_id: p_TdCGJkaDBDD2sDaykpJqA5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6HcTFXM8o7jGP9HyscW8Hm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PDX9SOqnk4yuQXc4Dq2adX
          claim_id: c_5UZywOhDwgvt4aZd_Sig1x
          source_id: s_1X4KEBZ8TJ6Lwn7CXtCtjQ
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百三十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6HcTFXM8o7jGP9HyscW8Hm
        status: active
        display_name: 王胤祥
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王枕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王枕，明人物。中国历代人物传记资料库（CBDB）以人物编号 211334 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王枕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6HcTFXM8o7jGP9HyscW8Hm | 王胤祥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王枕（CBDB 211334）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=211334&o=json)
