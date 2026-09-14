---
schema: wang-person/v1
id: p_5HQu23jcME6zt69ukr6bAw
status: active
merged_into: null
display_name: 王訟之
cbdb_id: 209585
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DcUKNomRsU6gfvsBSTHstg
        subject_person_id: p_5HQu23jcME6zt69ukr6bAw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訟之，明人物。隆慶五年進士，籍贯高安。（中国历代人物传记资料库 CBDB 209585）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_HfYKxW1HZBz5ysBWrPUGVF
          claim_id: c_DcUKNomRsU6gfvsBSTHstg
          source_id: s_1Lo9n9cL6dQm3Gugn35v3i
          stance: supports
          locator: CBDB:209585
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1Lo9n9cL6dQm3Gugn35v3i
            source_type: api_record
            title: 中国历代人物传记资料库：王訟之（CBDB 209585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209585&o=json
            external_identifier: CBDB:209585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ccXU9LSQXq2JZKc2g9oxHA
        subject_person_id: p_5HQu23jcME6zt69ukr6bAw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訟之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CNpgDmFLTkLHLAzWLA8AHG
          claim_id: c_ccXU9LSQXq2JZKc2g9oxHA
          source_id: s_1Lo9n9cL6dQm3Gugn35v3i
          stance: supports
          locator: CBDB:209585
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_IuUUNmDmaIJg_teWYRiS4T
        subject_person_id: p_Q7ze7pnk6x88hZDm3ZFKt3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5HQu23jcME6zt69ukr6bAw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AvxGJCr-yQEAF25gfz8Y7Y
          claim_id: c_IuUUNmDmaIJg_teWYRiS4T
          source_id: s_P9g4SE9kQ58Ys_DEbQRSiP
          stance: supports
          locator: CBDB：兄弟 王許之（205842）之父／母 王湯相
          quotation: null
          interpretation_note: 由兄弟关系推断：王訟之 与 王許之 为同胞（CBDB 记「兄」），王許之 之父／母即 王訟之 之父／母。
          source:
            id: s_P9g4SE9kQ58Ys_DEbQRSiP
            source_type: api_record
            title: 中国历代人物传记资料库：王訟之（CBDB 209585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209585&o=json
            external_identifier: CBDB:209585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q7ze7pnk6x88hZDm3ZFKt3
        status: active
        display_name: 王湯相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_O0ew9UufIrrplCE7Yyqz8Y
        subject_person_id: p_5HQu23jcME6zt69ukr6bAw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fR2N3ddMBUUG3UGxzAGX1L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5h9ZGTR8nzCHOYR9mUA7uY
          claim_id: c_O0ew9UufIrrplCE7Yyqz8Y
          source_id: s_P9g4SE9kQ58Ys_DEbQRSiP
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205842 王許之）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_P9g4SE9kQ58Ys_DEbQRSiP
            source_type: api_record
            title: 中国历代人物传记资料库：王訟之（CBDB 209585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209585&o=json
            external_identifier: CBDB:209585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fR2N3ddMBUUG3UGxzAGX1L
        status: active
        display_name: 王許之
        merged_into_person_id: null
---

# 王訟之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王訟之，明人物。隆慶五年進士，籍贯高安。（中国历代人物传记资料库 CBDB 209585） | accepted |
| name.primary | 王訟之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Q7ze7pnk6x88hZDm3ZFKt3 | 王湯相 | accepted |
| other | p_fR2N3ddMBUUG3UGxzAGX1L | 王許之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王訟之（CBDB 209585）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209585&o=json)
