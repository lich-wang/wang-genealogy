---
schema: wang-person/v1
id: p_3M6kuHH9zakyDuQ7sPhqpb
status: active
merged_into: null
display_name: 王承祿
cbdb_id: 264046
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p9WNkZKZEzrWCC8XaAJS5i
        subject_person_id: p_3M6kuHH9zakyDuQ7sPhqpb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承祿，明人物。中国历代人物传记资料库（CBDB）以人物编号 264046 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_VjD8mk_TP3_1ETXPFC3udk
          claim_id: c_p9WNkZKZEzrWCC8XaAJS5i
          source_id: s_SFX3Hp1sAfyFtcdUMTGqiy
          stance: supports
          locator: CBDB:264046
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_SFX3Hp1sAfyFtcdUMTGqiy
            source_type: api_record
            title: 中国历代人物传记资料库：王承祿（CBDB 264046）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264046&o=json
            external_identifier: CBDB:264046
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5iEiw7fzWrTPk8aRpL1ks8
        subject_person_id: p_3M6kuHH9zakyDuQ7sPhqpb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承祿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_uUa3auiwQvkPzGYDF9p5C3
          claim_id: c_5iEiw7fzWrTPk8aRpL1ks8
          source_id: s_SFX3Hp1sAfyFtcdUMTGqiy
          stance: supports
          locator: CBDB:264046
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_SFX3Hp1sAfyFtcdUMTGqiy
            source_type: api_record
            title: 中国历代人物传记资料库：王承祿（CBDB 264046）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264046&o=json
            external_identifier: CBDB:264046
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cPhBxcJ0t2zZqFUoy9FMYb
        subject_person_id: p_T2DCj9d6XKU4djHJMs2kSM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3M6kuHH9zakyDuQ7sPhqpb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PUF8rKUNLMtKmZWOcN9KeU
          claim_id: c_cPhBxcJ0t2zZqFUoy9FMYb
          source_id: s_SFX3Hp1sAfyFtcdUMTGqiy
          stance: supports
          locator: 王端毅公文集:九卷，29.5a：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_T2DCj9d6XKU4djHJMs2kSM
        status: active
        display_name: 王恕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王承祿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王承祿，明人物。中国历代人物传记资料库（CBDB）以人物编号 264046 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王承祿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_T2DCj9d6XKU4djHJMs2kSM | 王恕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承祿（CBDB 264046）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264046&o=json)
