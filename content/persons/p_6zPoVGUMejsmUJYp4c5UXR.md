---
schema: wang-person/v1
id: p_6zPoVGUMejsmUJYp4c5UXR
status: active
merged_into: null
display_name: 王德政
cbdb_id: 97891
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VpHFnMHQdn3psniHF9CJxT
        subject_person_id: p_6zPoVGUMejsmUJYp4c5UXR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德政，宋人物。中国历代人物传记资料库（CBDB）以人物编号 97891 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_sI2GRKCxqGxtt4Msg1ovTV
          claim_id: c_VpHFnMHQdn3psniHF9CJxT
          source_id: s_W1dVQijyfTxBjJviqoNroP
          stance: supports
          locator: CBDB:97891
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_W1dVQijyfTxBjJviqoNroP
            source_type: api_record
            title: 中国历代人物传记资料库：王德政（CBDB 97891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97891&o=json
            external_identifier: CBDB:97891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:49.564Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GrG5699PkfL51h2BP1BxbJ
        subject_person_id: p_6zPoVGUMejsmUJYp4c5UXR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HXasGJW4N2787azfrPLHtq
          claim_id: c_GrG5699PkfL51h2BP1BxbJ
          source_id: s_W1dVQijyfTxBjJviqoNroP
          stance: supports
          locator: CBDB:97891
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1601-1700）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_W1dVQijyfTxBjJviqoNroP
            source_type: api_record
            title: 中国历代人物传记资料库：王德政（CBDB 97891）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97891&o=json
            external_identifier: CBDB:97891
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:49.564Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_qLKFasjkbLN9UB_IoMJIot
        subject_person_id: p_6zPoVGUMejsmUJYp4c5UXR
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_iZZJeK5n8GCV2ttyXy6Hi4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZfZWP8-DqphdPJdQCXshKS
          claim_id: c_qLKFasjkbLN9UB_IoMJIot
          source_id: s_bLaH_OhKcwnXQUWRn9pVXb
          stance: supports
          locator: 元人傳記資料索引，8105：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bLaH_OhKcwnXQUWRn9pVXb
            source_type: api_record
            title: 中国历代人物传记资料库：郭氏(王德政妻)（CBDB 107711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=107711&o=json
            external_identifier: CBDB:107711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iZZJeK5n8GCV2ttyXy6Hi4
        status: active
        display_name: 郭氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王德政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王德政，宋人物。中国历代人物传记资料库（CBDB）以人物编号 97891 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王德政 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_iZZJeK5n8GCV2ttyXy6Hi4 | 郭氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：郭氏(王德政妻)（CBDB 107711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=107711&o=json)
- [中国历代人物传记资料库：王德政（CBDB 97891）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97891&o=json)
