---
schema: wang-person/v1
id: p_NGEjkN6rXMxTTPFZFq8Knw
status: active
merged_into: null
display_name: 王𨹘
cbdb_id: 526875
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1VeHGyhtXUPuzGgAU2QUsA
        subject_person_id: p_NGEjkN6rXMxTTPFZFq8Knw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王𨹘，清人物。中国历代人物传记资料库（CBDB）以人物编号 526875 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_vYQFf7933qsT7JkXKsn6gR
          claim_id: c_1VeHGyhtXUPuzGgAU2QUsA
          source_id: s_fkJvF57E9q89DPjx4RnZPd
          stance: supports
          locator: CBDB:526875
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_fkJvF57E9q89DPjx4RnZPd
            source_type: api_record
            title: 中国历代人物传记资料库：王𨹘（CBDB 526875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526875&o=json
            external_identifier: CBDB:526875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:19.665Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_P5LBYGJvQUsXdGaGKMrUne
        subject_person_id: p_NGEjkN6rXMxTTPFZFq8Knw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王𨹘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DZoSnYy2DM4Pb5yoVkyx3r
          claim_id: c_P5LBYGJvQUsXdGaGKMrUne
          source_id: s_fkJvF57E9q89DPjx4RnZPd
          stance: supports
          locator: CBDB:526875
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7201-7229）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_fkJvF57E9q89DPjx4RnZPd
            source_type: api_record
            title: 中国历代人物传记资料库：王𨹘（CBDB 526875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526875&o=json
            external_identifier: CBDB:526875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:19.665Z
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
        id: c_L1oomx-I6gKPJ7x7UpdP3y
        subject_person_id: p_NGEjkN6rXMxTTPFZFq8Knw
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_QaX91zDL1ybGQV5xhYa8gJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JyE1KXgeRIbUrYLrbMfwKu
          claim_id: c_L1oomx-I6gKPJ7x7UpdP3y
          source_id: s_a3SeBAa1ZuS2LQEwQYm8m9
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13044：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_a3SeBAa1ZuS2LQEwQYm8m9
            source_type: api_record
            title: 中国历代人物传记资料库：王啟緒（CBDB 69340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69340&o=json
            external_identifier: CBDB:69340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.218Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QaX91zDL1ybGQV5xhYa8gJ
        status: active
        display_name: 王啟緒
        merged_into_person_id: null
  other: []
---

# 王𨹘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王𨹘，清人物。中国历代人物传记资料库（CBDB）以人物编号 526875 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王𨹘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_QaX91zDL1ybGQV5xhYa8gJ | 王啟緒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王啟緒（CBDB 69340）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69340&o=json)
- [中国历代人物传记资料库：王𨹘（CBDB 526875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526875&o=json)
