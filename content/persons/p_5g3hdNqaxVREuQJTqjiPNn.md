---
schema: wang-person/v1
id: p_5g3hdNqaxVREuQJTqjiPNn
status: active
merged_into: null
display_name: 王賓宰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zkWy5EqFrVVnrG2stE8R93
        subject_person_id: p_5g3hdNqaxVREuQJTqjiPNn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓宰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DNy5wqDAfU2cLN6bJNPB2c
          claim_id: c_zkWy5EqFrVVnrG2stE8R93
          source_id: s_G6Gxsvud1h6GH1MQBf5ajy
          stance: supports
          locator: CBDB:694520
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694520）
          source: &a1
            id: s_G6Gxsvud1h6GH1MQBf5ajy
            source_type: api_record
            title: 中国历代人物传记资料库：王賓宰（CBDB 694520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694520&o=json
            external_identifier: CBDB:694520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.523Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6VPGfuaYJ2sLz5iiSAo9Yy
        subject_person_id: p_5g3hdNqaxVREuQJTqjiPNn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓宰，清人物。籍贯海鹽，身份为為善鄉里。（中国历代人物传记资料库 CBDB 694520）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XK-49EsjwACgxj1EAp2Bim
          claim_id: c_6VPGfuaYJ2sLz5iiSAo9Yy
          source_id: s_G6Gxsvud1h6GH1MQBf5ajy
          stance: supports
          locator: CBDB:694520
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
        id: c_M9xkVy4ckr0GBH4vWzPbGS
        subject_person_id: p_5g3hdNqaxVREuQJTqjiPNn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_uJFxbR4mUxQ4686eYcv41g
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U-ttqoWQItrnZnkCHiIK9b
          claim_id: c_M9xkVy4ckr0GBH4vWzPbGS
          source_id: s_Yuq-XyLep-drPJiC0behFL
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 694519 王公升）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Yuq-XyLep-drPJiC0behFL
            source_type: api_record
            title: 中国历代人物传记资料库：王賓宰（CBDB 694520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694520&o=json
            external_identifier: CBDB:694520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uJFxbR4mUxQ4686eYcv41g
        status: active
        display_name: 王公升
        merged_into_person_id: null
---

# 王賓宰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賓宰 | accepted |
| bio.summary | 王賓宰，清人物。籍贯海鹽，身份为為善鄉里。（中国历代人物传记资料库 CBDB 694520） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_uJFxbR4mUxQ4686eYcv41g | 王公升 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓宰（CBDB 694520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694520&o=json)
