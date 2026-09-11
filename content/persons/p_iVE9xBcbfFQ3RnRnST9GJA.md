---
schema: wang-person/v1
id: p_iVE9xBcbfFQ3RnRnST9GJA
status: active
merged_into: null
display_name: 王仕允
cbdb_id: 240891
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h3tsJ6geGX5wyEG5HnaU5n
        subject_person_id: p_iVE9xBcbfFQ3RnRnST9GJA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕允，明人物。中国历代人物传记资料库（CBDB）以人物编号 240891 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_YcODwBAxgLRlcsylpIInAT
          claim_id: c_h3tsJ6geGX5wyEG5HnaU5n
          source_id: s_yqP3KwyfjCa5RHyJuKQqpc
          stance: supports
          locator: CBDB:240891
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_yqP3KwyfjCa5RHyJuKQqpc
            source_type: api_record
            title: 中国历代人物传记资料库：王仕允（CBDB 240891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240891&o=json
            external_identifier: CBDB:240891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_WTWZuxiKmFjzWarC1nQgPz
        subject_person_id: p_iVE9xBcbfFQ3RnRnST9GJA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕允
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aHLdAsxj4jFBAAJ99Fc5b3
          claim_id: c_WTWZuxiKmFjzWarC1nQgPz
          source_id: s_yqP3KwyfjCa5RHyJuKQqpc
          stance: supports
          locator: CBDB:240891
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_yqP3KwyfjCa5RHyJuKQqpc
            source_type: api_record
            title: 中国历代人物传记资料库：王仕允（CBDB 240891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240891&o=json
            external_identifier: CBDB:240891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
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
        id: c_QaX2DYdxZD7vuVPHy4Jtas
        subject_person_id: p_iVE9xBcbfFQ3RnRnST9GJA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oJFhqGsSYkYTeGZ7iNnAnA
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Vf30ZhtSljNM-6rQSX5Mk_
          claim_id: c_QaX2DYdxZD7vuVPHy4Jtas
          source_id: s_scMdA5rQcxqY8W53jNHSqv
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第三十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_scMdA5rQcxqY8W53jNHSqv
            source_type: api_record
            title: 中国历代人物传记资料库：王芳（CBDB 208133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208133&o=json
            external_identifier: CBDB:208133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.946Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oJFhqGsSYkYTeGZ7iNnAnA
        status: active
        display_name: 王芳
        merged_into_person_id: null
  other: []
---

# 王仕允

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仕允，明人物。中国历代人物传记资料库（CBDB）以人物编号 240891 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王仕允 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_oJFhqGsSYkYTeGZ7iNnAnA | 王芳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王芳（CBDB 208133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208133&o=json)
- [中国历代人物传记资料库：王仕允（CBDB 240891）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240891&o=json)
