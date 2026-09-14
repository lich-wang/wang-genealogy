---
schema: wang-person/v1
id: p_X32wGVVhaUUGRFkrujk5PE
status: active
merged_into: null
display_name: 王張榮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Xaeom4B8xLbXTDF8NKfW4d
        subject_person_id: p_X32wGVVhaUUGRFkrujk5PE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王張榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_692sSYDeMp6D2XEqLLDzt2
          claim_id: c_Xaeom4B8xLbXTDF8NKfW4d
          source_id: s_T3ca4cCF3UE1Xs7GZNk8ov
          stance: supports
          locator: CBDB:690955
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（690955）
          source: &a1
            id: s_T3ca4cCF3UE1Xs7GZNk8ov
            source_type: api_record
            title: 中国历代人物传记资料库：王張榮（CBDB 690955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690955&o=json
            external_identifier: CBDB:690955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.487Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wyFsQK9ahHrue5qXi23Asz
        subject_person_id: p_X32wGVVhaUUGRFkrujk5PE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王張榮，明人物。籍贯黟縣。（中国历代人物传记资料库 CBDB 690955）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9ZS72Vl-EFE1_D57tIYuBo
          claim_id: c_wyFsQK9ahHrue5qXi23Asz
          source_id: s_T3ca4cCF3UE1Xs7GZNk8ov
          stance: supports
          locator: CBDB:690955
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  descendants: []
  other:
    - claim:
        id: c_8Bbe4qJ9CfYw5PHP3T6lnJ
        subject_person_id: p_X32wGVVhaUUGRFkrujk5PE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yueT28KmtQMkrhqxZNWfyB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TCO5TUVzDA-ioFq-Yid_aK
          claim_id: c_8Bbe4qJ9CfYw5PHP3T6lnJ
          source_id: s_tyun86djoFHSJiOOPOH9ln
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 690954 王張顯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tyun86djoFHSJiOOPOH9ln
            source_type: api_record
            title: 中国历代人物传记资料库：王張榮（CBDB 690955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690955&o=json
            external_identifier: CBDB:690955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yueT28KmtQMkrhqxZNWfyB
        status: active
        display_name: 王張顯
        merged_into_person_id: null
---

# 王張榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王張榮 | accepted |
| bio.summary | 王張榮，明人物。籍贯黟縣。（中国历代人物传记资料库 CBDB 690955） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_yueT28KmtQMkrhqxZNWfyB | 王張顯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王張榮（CBDB 690955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=690955&o=json)
