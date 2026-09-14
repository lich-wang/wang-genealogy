---
schema: wang-person/v1
id: p_2Td8Va1G7ufHJJBPdgJzEy
status: active
merged_into: null
display_name: 王之紀
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h94uwtYb7ZkXDA9RncPeFy
        subject_person_id: p_2Td8Va1G7ufHJJBPdgJzEy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之紀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V6uY2SatyFCNXzomiKrfZr
          claim_id: c_h94uwtYb7ZkXDA9RncPeFy
          source_id: s_2Vh2P6FTQq7tx5PtCz49yA
          stance: supports
          locator: CBDB:307688
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（307688）
          source: &a1
            id: s_2Vh2P6FTQq7tx5PtCz49yA
            source_type: api_record
            title: 中国历代人物传记资料库：王之紀（CBDB 307688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307688&o=json
            external_identifier: CBDB:307688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.794Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WnokJ6AH3ac4Z54d2nVFwa
        subject_person_id: p_2Td8Va1G7ufHJJBPdgJzEy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之紀，明人物。嘉靖二十三年進士，籍贯石首。（中国历代人物传记资料库 CBDB 307688）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vVYOZcfqqQ4pLhwGOTJRXE
          claim_id: c_WnokJ6AH3ac4Z54d2nVFwa
          source_id: s_2Vh2P6FTQq7tx5PtCz49yA
          stance: supports
          locator: CBDB:307688
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Z5EMUxNjIfPENCETXhIcvR
        subject_person_id: p_HxEM6RL9fRNSLHFJ3ioZEE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2Td8Va1G7ufHJJBPdgJzEy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I8wg_j5xvZETIXVYxkBBgZ
          claim_id: c_Z5EMUxNjIfPENCETXhIcvR
          source_id: s_yyt36bk1FU74jRToflPcRf
          stance: supports
          locator: CBDB：兄弟 王之誥（124361）之父／母 王芳
          quotation: null
          interpretation_note: 由兄弟关系推断：王之紀 与 王之誥 为同胞（CBDB 记「兄」），王之誥 之父／母即 王之紀 之父／母。
          source:
            id: s_yyt36bk1FU74jRToflPcRf
            source_type: api_record
            title: 中国历代人物传记资料库：王之紀（CBDB 307688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307688&o=json
            external_identifier: CBDB:307688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HxEM6RL9fRNSLHFJ3ioZEE
        status: active
        display_name: 王芳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_zXcKdhw_anVAFzcxgzCRFC
        subject_person_id: p_2Td8Va1G7ufHJJBPdgJzEy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WQq7QzkQTzLqnMJ812eWYA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3TNlp5yNmFmuPWtTMuvkJV
          claim_id: c_zXcKdhw_anVAFzcxgzCRFC
          source_id: s_yyt36bk1FU74jRToflPcRf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 124361 王之誥）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yyt36bk1FU74jRToflPcRf
            source_type: api_record
            title: 中国历代人物传记资料库：王之紀（CBDB 307688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307688&o=json
            external_identifier: CBDB:307688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WQq7QzkQTzLqnMJ812eWYA
        status: active
        display_name: 王之誥
        merged_into_person_id: null
---

# 王之紀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之紀 | accepted |
| bio.summary | 王之紀，明人物。嘉靖二十三年進士，籍贯石首。（中国历代人物传记资料库 CBDB 307688） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HxEM6RL9fRNSLHFJ3ioZEE | 王芳 | accepted |
| other | p_WQq7QzkQTzLqnMJ812eWYA | 王之誥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之紀（CBDB 307688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307688&o=json)
