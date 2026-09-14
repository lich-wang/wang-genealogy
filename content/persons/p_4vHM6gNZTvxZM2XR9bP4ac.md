---
schema: wang-person/v1
id: p_4vHM6gNZTvxZM2XR9bP4ac
status: active
merged_into: null
display_name: 王一經
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6wDoHjTJCHyU4XzdtUwFmi
        subject_person_id: p_4vHM6gNZTvxZM2XR9bP4ac
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nWx2mFLAusZyg27ZPV4bBv
          claim_id: c_6wDoHjTJCHyU4XzdtUwFmi
          source_id: s_sFqY9zifMj3TN9tDGnVFLv
          stance: supports
          locator: CBDB:213990
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213990）
          source: &a1
            id: s_sFqY9zifMj3TN9tDGnVFLv
            source_type: api_record
            title: 中国历代人物传记资料库：王一經（CBDB 213990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213990&o=json
            external_identifier: CBDB:213990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.138Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NMza8r9WqXx5qkbvSGbQaT
        subject_person_id: p_4vHM6gNZTvxZM2XR9bP4ac
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一經，明人物。萬曆二年進士，籍贯南城。（中国历代人物传记资料库 CBDB 213990）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VH9bX9em9BVxp9pX-9-qzF
          claim_id: c_NMza8r9WqXx5qkbvSGbQaT
          source_id: s_sFqY9zifMj3TN9tDGnVFLv
          stance: supports
          locator: CBDB:213990
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_q7kMarYpnv80JuyBBPe5rL
        subject_person_id: p_w5fXASs4g8AzDQ4NHHrEv7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4vHM6gNZTvxZM2XR9bP4ac
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LCDmJyabt9ozeJ1dsA8JXx
          claim_id: c_q7kMarYpnv80JuyBBPe5rL
          source_id: s_wXmxvYxHORYZnLLLD1FM6D
          stance: supports
          locator: CBDB：兄弟 王一言（206148）之父／母 王湧
          quotation: null
          interpretation_note: 由兄弟关系推断：王一經 与 王一言 为同胞（CBDB 记「兄」），王一言 之父／母即 王一經 之父／母。
          source:
            id: s_wXmxvYxHORYZnLLLD1FM6D
            source_type: api_record
            title: 中国历代人物传记资料库：王一經（CBDB 213990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213990&o=json
            external_identifier: CBDB:213990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_w5fXASs4g8AzDQ4NHHrEv7
        status: active
        display_name: 王湧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_9t25WkRa58FowtNek0Q7KW
        subject_person_id: p_4vHM6gNZTvxZM2XR9bP4ac
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HfLk9ptSCZD1pXUYCky88S
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tvK8rkTwPZQFZrg6BtulhQ
          claim_id: c_9t25WkRa58FowtNek0Q7KW
          source_id: s_wXmxvYxHORYZnLLLD1FM6D
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206148 王一言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wXmxvYxHORYZnLLLD1FM6D
            source_type: api_record
            title: 中国历代人物传记资料库：王一經（CBDB 213990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213990&o=json
            external_identifier: CBDB:213990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HfLk9ptSCZD1pXUYCky88S
        status: active
        display_name: 王一言
        merged_into_person_id: null
---

# 王一經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一經 | accepted |
| bio.summary | 王一經，明人物。萬曆二年進士，籍贯南城。（中国历代人物传记资料库 CBDB 213990） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_w5fXASs4g8AzDQ4NHHrEv7 | 王湧 | accepted |
| other | p_HfLk9ptSCZD1pXUYCky88S | 王一言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一經（CBDB 213990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213990&o=json)
