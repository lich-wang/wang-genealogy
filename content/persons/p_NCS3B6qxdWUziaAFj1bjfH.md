---
schema: wang-person/v1
id: p_NCS3B6qxdWUziaAFj1bjfH
status: active
merged_into: null
display_name: 王綸
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2gwkz5RL7dWdq6MXf7ocCA
        subject_person_id: p_NCS3B6qxdWUziaAFj1bjfH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u5bz7MuuBXU6BVM6Qs7RRj
          claim_id: c_2gwkz5RL7dWdq6MXf7ocCA
          source_id: s_h76RXgE6j43ZbKhRTQwCHP
          stance: supports
          locator: CBDB:126787
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126787）
          source: &a1
            id: s_h76RXgE6j43ZbKhRTQwCHP
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 126787）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126787&o=json
            external_identifier: CBDB:126787
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.204Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YnU3KnKgPWt7VN1SeHr3o3
        subject_person_id: p_NCS3B6qxdWUziaAFj1bjfH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J85aVjxvptkNH5HJFHm423
          claim_id: c_YnU3KnKgPWt7VN1SeHr3o3
          source_id: s_h76RXgE6j43ZbKhRTQwCHP
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_h8XmA2-0Y67VNooX8P6p22
        subject_person_id: p_mJNJQFE9z1VKCuzwAbNY9W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NCS3B6qxdWUziaAFj1bjfH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z1DaXzBpq-xHj2yik4IwPu
          claim_id: c_h8XmA2-0Y67VNooX8P6p22
          source_id: s_ijLiG1JpcMMKHCdWa2Gv1L
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第二十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ijLiG1JpcMMKHCdWa2Gv1L
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 257671）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257671&o=json
            external_identifier: CBDB:257671
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.427Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mJNJQFE9z1VKCuzwAbNY9W
        status: active
        display_name: 王信
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_snd-1P9gBi6wh2uPGM-hnF
        subject_person_id: p_qEZ5XAZtELsh4xjqgKuUd6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NCS3B6qxdWUziaAFj1bjfH
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fpCwSNc_rwwlpasv0SlvRV
          claim_id: c_snd-1P9gBi6wh2uPGM-hnF
          source_id: s_ive934eT1oYiGVyXd3ETSt
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第二十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ive934eT1oYiGVyXd3ETSt
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 257670）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257670&o=json
            external_identifier: CBDB:257670
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qEZ5XAZtELsh4xjqgKuUd6
        status: active
        display_name: 王英
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王綸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綸 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mJNJQFE9z1VKCuzwAbNY9W | 王信 | accepted |
| ancestors | p_qEZ5XAZtELsh4xjqgKuUd6 | 王英 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綸（CBDB 126787）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126787&o=json)
- [中国历代人物传记资料库：王信（CBDB 257671）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257671&o=json)
- [中国历代人物传记资料库：王英（CBDB 257670）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257670&o=json)
