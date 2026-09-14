---
schema: wang-person/v1
id: p_ZzfDGmnF6XseMxHGRi7K4t
status: active
merged_into: null
display_name: 王懋德
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r6HgjBF2b1J8ojZdontJGD
        subject_person_id: p_ZzfDGmnF6XseMxHGRi7K4t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hzPDn2iEuGDM6DDkks7T2G
          claim_id: c_r6HgjBF2b1J8ojZdontJGD
          source_id: s_DFKC1b4LENhyibaS1XBC4N
          stance: supports
          locator: CBDB:215053
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（215053）
          source: &a1
            id: s_DFKC1b4LENhyibaS1XBC4N
            source_type: api_record
            title: 中国历代人物传记资料库：王懋德（CBDB 215053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215053&o=json
            external_identifier: CBDB:215053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.175Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1DF1S4kC69gVHFUZtNqxM4
        subject_person_id: p_ZzfDGmnF6XseMxHGRi7K4t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋德，明人物。萬曆二年進士，籍贯南城。（中国历代人物传记资料库 CBDB 215053）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2JDzOEcer7N7EIx9qi6kFF
          claim_id: c_1DF1S4kC69gVHFUZtNqxM4
          source_id: s_DFKC1b4LENhyibaS1XBC4N
          stance: supports
          locator: CBDB:215053
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_b8fQKAYYbAYHHFjXz6cRQu
        subject_person_id: p_ZEKqhiQyVSgqpfakGydWP9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZzfDGmnF6XseMxHGRi7K4t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yr1ixsCrZ7o71r7vWzc7GD
          claim_id: c_b8fQKAYYbAYHHFjXz6cRQu
          source_id: s_r4vS1r34G-GsU54UD4PbAv
          stance: supports
          locator: CBDB：兄弟 王懋中（206224）之父／母 王國顯
          quotation: null
          interpretation_note: 由兄弟关系推断：王懋德 与 王懋中 为同胞（CBDB 记「弟」），王懋中 之父／母即 王懋德 之父／母。
          source:
            id: s_r4vS1r34G-GsU54UD4PbAv
            source_type: api_record
            title: 中国历代人物传记资料库：王懋德（CBDB 215053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215053&o=json
            external_identifier: CBDB:215053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZEKqhiQyVSgqpfakGydWP9
        status: active
        display_name: 王國顯
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c__O185hqqP_dvJcs8oL5IOm
        subject_person_id: p_Rk4ASszNDmrPYo2vAUfdsQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZzfDGmnF6XseMxHGRi7K4t
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BKEcIXUEbdwkgDy6I6Rs4v
          claim_id: c__O185hqqP_dvJcs8oL5IOm
          source_id: s_r4vS1r34G-GsU54UD4PbAv
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206224 王懋中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_r4vS1r34G-GsU54UD4PbAv
            source_type: api_record
            title: 中国历代人物传记资料库：王懋德（CBDB 215053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215053&o=json
            external_identifier: CBDB:215053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Rk4ASszNDmrPYo2vAUfdsQ
        status: active
        display_name: 王懋中
        merged_into_person_id: null
---

# 王懋德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋德 | accepted |
| bio.summary | 王懋德，明人物。萬曆二年進士，籍贯南城。（中国历代人物传记资料库 CBDB 215053） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZEKqhiQyVSgqpfakGydWP9 | 王國顯 | accepted |
| other | p_Rk4ASszNDmrPYo2vAUfdsQ | 王懋中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懋德（CBDB 215053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215053&o=json)
