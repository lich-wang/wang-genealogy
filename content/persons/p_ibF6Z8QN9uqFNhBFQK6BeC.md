---
schema: wang-person/v1
id: p_ibF6Z8QN9uqFNhBFQK6BeC
status: active
merged_into: null
display_name: 王貴宗
cbdb_id: 257943
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NcEgFXb2FnQjvvgkhmENzD
        subject_person_id: p_ibF6Z8QN9uqFNhBFQK6BeC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴宗，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 257943）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_WoTgld-K07GbWityPylAj8
          claim_id: c_NcEgFXb2FnQjvvgkhmENzD
          source_id: s_4EV2bnshVA5MWgJj5CF9Gb
          stance: supports
          locator: CBDB:257943
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4EV2bnshVA5MWgJj5CF9Gb
            source_type: api_record
            title: 中国历代人物传记资料库：王貴宗（CBDB 257943）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257943&o=json
            external_identifier: CBDB:257943
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pAB7Q6c7cNtSoKZ2SxTwjS
        subject_person_id: p_ibF6Z8QN9uqFNhBFQK6BeC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7gmpk1vHhQM95FsCqiuQXC
          claim_id: c_pAB7Q6c7cNtSoKZ2SxTwjS
          source_id: s_4EV2bnshVA5MWgJj5CF9Gb
          stance: supports
          locator: CBDB:257943
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
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
        id: c_JUThWPy80RHhUEYiJmiXNu
        subject_person_id: p_ibF6Z8QN9uqFNhBFQK6BeC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Yi63SwvU3iiXw7LYSrnJmq
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z02exJA7wYKoENUvPhZlj1
          claim_id: c_JUThWPy80RHhUEYiJmiXNu
          source_id: s_4EV2bnshVA5MWgJj5CF9Gb
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第五十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4EV2bnshVA5MWgJj5CF9Gb
            source_type: api_record
            title: 中国历代人物传记资料库：王貴宗（CBDB 257943）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257943&o=json
            external_identifier: CBDB:257943
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Yi63SwvU3iiXw7LYSrnJmq
        status: active
        display_name: 王迪
        merged_into_person_id: null
  other: []
---

# 王貴宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王貴宗，明人物。成化二十三年進士。（中国历代人物传记资料库 CBDB 257943） | accepted |
| name.primary | 王貴宗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Yi63SwvU3iiXw7LYSrnJmq | 王迪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貴宗（CBDB 257943）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257943&o=json)
