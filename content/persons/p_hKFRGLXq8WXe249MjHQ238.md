---
schema: wang-person/v1
id: p_hKFRGLXq8WXe249MjHQ238
status: active
merged_into: null
display_name: 王晉俗
cbdb_id: 141177
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1Q8AvN8qAs4xeVkPAc1DM6
        subject_person_id: p_hKFRGLXq8WXe249MjHQ238
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉俗，唐人物。中国历代人物传记资料库（CBDB）以人物编号 141177 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_gLsKXmTjKRbOymEMMkLhiM
          claim_id: c_1Q8AvN8qAs4xeVkPAc1DM6
          source_id: s_DTRZ3DmwiPEfvNXguhFYfh
          stance: supports
          locator: CBDB:141177
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_DTRZ3DmwiPEfvNXguhFYfh
            source_type: api_record
            title: 中国历代人物传记资料库：王晉俗（CBDB 141177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141177&o=json
            external_identifier: CBDB:141177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_V3B8NffksPRnDFCqHWvoDK
        subject_person_id: p_hKFRGLXq8WXe249MjHQ238
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉俗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wQiXeeReCfJrXdMMw3iy9q
          claim_id: c_V3B8NffksPRnDFCqHWvoDK
          source_id: s_DTRZ3DmwiPEfvNXguhFYfh
          stance: supports
          locator: CBDB:141177
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_DTRZ3DmwiPEfvNXguhFYfh
            source_type: api_record
            title: 中国历代人物传记资料库：王晉俗（CBDB 141177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141177&o=json
            external_identifier: CBDB:141177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_sBpo8SlWXq0JB5VpfwdbLt
        subject_person_id: p_hKFRGLXq8WXe249MjHQ238
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A3Nub68EqFpWgDf9Bo4NNh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WHe4HjfevV_8D0YtWKs2c9
          claim_id: c_sBpo8SlWXq0JB5VpfwdbLt
          source_id: s_q3avEwiiC8ybCtwy5vRfFf
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dali 24：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_q3avEwiiC8ybCtwy5vRfFf
            source_type: api_record
            title: 中国历代人物传记资料库：王怡（CBDB 140524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140524&o=json
            external_identifier: CBDB:140524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.513Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A3Nub68EqFpWgDf9Bo4NNh
        status: active
        display_name: 王怡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王晉俗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王晉俗，唐人物。中国历代人物传记资料库（CBDB）以人物编号 141177 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王晉俗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_A3Nub68EqFpWgDf9Bo4NNh | 王怡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王晉俗（CBDB 141177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141177&o=json)
- [中国历代人物传记资料库：王怡（CBDB 140524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140524&o=json)
