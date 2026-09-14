---
schema: wang-person/v1
id: p_Q6iBUnc9MSyRL9jUSfA87V
status: active
merged_into: null
display_name: 王鎬
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T8mRCjJHmXDr5qxKxtfGUA
        subject_person_id: p_Q6iBUnc9MSyRL9jUSfA87V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MU51X5urUDvrrF5e8QdnZM
          claim_id: c_T8mRCjJHmXDr5qxKxtfGUA
          source_id: s_Zy8YyDa4w9K9VEQpwLPMeh
          stance: supports
          locator: CBDB:329597
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（329597）
          source: &a1
            id: s_Zy8YyDa4w9K9VEQpwLPMeh
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 329597）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329597&o=json
            external_identifier: CBDB:329597
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.333Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MZLvtEkujETkwXKpV2QnBp
        subject_person_id: p_Q6iBUnc9MSyRL9jUSfA87V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎬，明人物。嘉靖四十四年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 329597）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1S-mMTENbML9z3wFyfTJ7n
          claim_id: c_MZLvtEkujETkwXKpV2QnBp
          source_id: s_Zy8YyDa4w9K9VEQpwLPMeh
          stance: supports
          locator: CBDB:329597
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ScHqcR2OFC61i1xQ9YLQqX
        subject_person_id: p_yBv5FsmN9BCFNm7cQbu6uG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q6iBUnc9MSyRL9jUSfA87V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xVWHqmhYALBu9r0r0_BXvm
          claim_id: c_ScHqcR2OFC61i1xQ9YLQqX
          source_id: s_iuCb5we0gisvmADCe6F3vY
          stance: supports
          locator: CBDB：兄弟 王鑑（126886）之父／母 王問
          quotation: null
          interpretation_note: 由兄弟关系推断：王鎬 与 王鑑 为同胞（CBDB 记「兄」），王鑑 之父／母即 王鎬 之父／母。
          source:
            id: s_iuCb5we0gisvmADCe6F3vY
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 329597）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329597&o=json
            external_identifier: CBDB:329597
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yBv5FsmN9BCFNm7cQbu6uG
        status: active
        display_name: 王問
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_gV2Ult7jwaiWvFFa5H3h65
        subject_person_id: p_Q6iBUnc9MSyRL9jUSfA87V
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_e8Z59Em5hbj5KfsGE7UhVQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fpc5xzpmtIBi2EOZrR4Ib3
          claim_id: c_gV2Ult7jwaiWvFFa5H3h65
          source_id: s_iuCb5we0gisvmADCe6F3vY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126886 王鑑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iuCb5we0gisvmADCe6F3vY
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 329597）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329597&o=json
            external_identifier: CBDB:329597
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e8Z59Em5hbj5KfsGE7UhVQ
        status: active
        display_name: 王鑑
        merged_into_person_id: null
---

# 王鎬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎬 | accepted |
| bio.summary | 王鎬，明人物。嘉靖四十四年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 329597） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yBv5FsmN9BCFNm7cQbu6uG | 王問 | accepted |
| other | p_e8Z59Em5hbj5KfsGE7UhVQ | 王鑑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎬（CBDB 329597）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329597&o=json)
