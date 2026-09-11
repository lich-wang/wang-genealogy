---
schema: wang-person/v1
id: p_cmh993UcaH1fhoZJBKNKT7
status: active
merged_into: null
display_name: 王仲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dzQHV6V4hCGJjfEsTPyWc1
        subject_person_id: p_cmh993UcaH1fhoZJBKNKT7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Kr1Lwh6Khj2TivRjuDMkAB
          claim_id: c_dzQHV6V4hCGJjfEsTPyWc1
          source_id: s_uRQBEQ4aNyVYnteL36rTpk
          stance: supports
          locator: CBDB:293406
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（293406）
          source: &a1
            id: s_uRQBEQ4aNyVYnteL36rTpk
            source_type: api_record
            title: 中国历代人物传记资料库：王仲（CBDB 293406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293406&o=json
            external_identifier: CBDB:293406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.422Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X2d9gR623CridwMBCM7qBM
        subject_person_id: p_cmh993UcaH1fhoZJBKNKT7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲，明人物。天順元年進士。（中国历代人物传记资料库 CBDB 293406）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Y1UlsOTe43Lm8d8xkHUkzV
          claim_id: c_X2d9gR623CridwMBCM7qBM
          source_id: s_uRQBEQ4aNyVYnteL36rTpk
          stance: supports
          locator: CBDB:293406
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
  descendants:
    - claim:
        id: c_yVMVNXZdvcRbPGVRV0wjFP
        subject_person_id: p_cmh993UcaH1fhoZJBKNKT7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AV2ZgKZQXWPMrvp5xNJqFj
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mMLvb0zdiJYR3kChrJaXK1
          claim_id: c_yVMVNXZdvcRbPGVRV0wjFP
          source_id: s_f67YAvJ62hQ7NjsmZ31Sup
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第二十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_f67YAvJ62hQ7NjsmZ31Sup
            source_type: api_record
            title: 中国历代人物传记资料库：王克復（CBDB 126540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126540&o=json
            external_identifier: CBDB:126540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.011Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AV2ZgKZQXWPMrvp5xNJqFj
        status: active
        display_name: 王克復
        merged_into_person_id: null
  other: []
---

# 王仲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲 | accepted |
| bio.summary | 王仲，明人物。天順元年進士。（中国历代人物传记资料库 CBDB 293406） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_AV2ZgKZQXWPMrvp5xNJqFj | 王克復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王克復（CBDB 126540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126540&o=json)
- [中国历代人物传记资料库：王仲（CBDB 293406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293406&o=json)
