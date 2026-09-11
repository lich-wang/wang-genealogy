---
schema: wang-person/v1
id: p_Hi2pMZGHcEwS8ZkC4zPUSd
status: active
merged_into: null
display_name: 王待價
cbdb_id: 22171
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ovT2ZX8Bkiy3AWazo4ReGh
        subject_person_id: p_Hi2pMZGHcEwS8ZkC4zPUSd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王待價，五代人物。中国历代人物传记资料库（CBDB）以人物编号 22171 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_yEvHziEt6JsJNRaw1Sm_Do
          claim_id: c_ovT2ZX8Bkiy3AWazo4ReGh
          source_id: s_zYB7deVV2FbF2JDajwC7mK
          stance: supports
          locator: CBDB:22171
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_zYB7deVV2FbF2JDajwC7mK
            source_type: api_record
            title: 中国历代人物传记资料库：王待價（CBDB 22171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22171&o=json
            external_identifier: CBDB:22171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PHEFUhX5WzyyoceAe4VyKz
        subject_person_id: p_Hi2pMZGHcEwS8ZkC4zPUSd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王待價
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hzgpWHh3GD7MoZX4Gh9cye
          claim_id: c_PHEFUhX5WzyyoceAe4VyKz
          source_id: s_zYB7deVV2FbF2JDajwC7mK
          stance: supports
          locator: CBDB:22171
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 五代
          source:
            id: s_zYB7deVV2FbF2JDajwC7mK
            source_type: api_record
            title: 中国历代人物传记资料库：王待價（CBDB 22171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22171&o=json
            external_identifier: CBDB:22171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_usoTQE1xQWeRYIjeNpIty-
        subject_person_id: p_Hi2pMZGHcEwS8ZkC4zPUSd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DFWuMPWUstBm3Tr8KacmZf
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JUIEDtmZvN1xmRou6_iNx3
          claim_id: c_usoTQE1xQWeRYIjeNpIty-
          source_id: s_42M1RyqHPGFYMpZ9FeVqji
          stance: supports
          locator: 宋史：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_42M1RyqHPGFYMpZ9FeVqji
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣宗（CBDB 1880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1880&o=json
            external_identifier: CBDB:1880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.370Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DFWuMPWUstBm3Tr8KacmZf
        status: active
        display_name: 王嗣宗
        merged_into_person_id: null
  other: []
---

# 王待價

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王待價，五代人物。中国历代人物传记资料库（CBDB）以人物编号 22171 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王待價 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_DFWuMPWUstBm3Tr8KacmZf | 王嗣宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王待價（CBDB 22171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22171&o=json)
- [中国历代人物传记资料库：王嗣宗（CBDB 1880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1880&o=json)
