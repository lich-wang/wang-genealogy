---
schema: wang-person/v1
id: p_CLbsjyXZyJ1cmF54gMKDpM
status: active
merged_into: null
display_name: 王矧陽
cbdb_id: 214165
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K3bAJv3zsAWfka5C17PKy2
        subject_person_id: p_CLbsjyXZyJ1cmF54gMKDpM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王矧陽，明人物。萬曆二年進士，籍贯德州。（中国历代人物传记资料库 CBDB 214165）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_xhbvRycOZtcfgx3sEXWFvQ
          claim_id: c_K3bAJv3zsAWfka5C17PKy2
          source_id: s_B7QGA1FLC3pCP3C9H2rcAP
          stance: supports
          locator: CBDB:214165
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_B7QGA1FLC3pCP3C9H2rcAP
            source_type: api_record
            title: 中国历代人物传记资料库：王矧陽（CBDB 214165）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214165&o=json
            external_identifier: CBDB:214165
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LCKiB9ZMARL1kCPGi68HGF
        subject_person_id: p_CLbsjyXZyJ1cmF54gMKDpM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王矧陽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MESrHwBCowNj9AwGnwxfrb
          claim_id: c_LCKiB9ZMARL1kCPGi68HGF
          source_id: s_B7QGA1FLC3pCP3C9H2rcAP
          stance: supports
          locator: CBDB:214165
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dS2TwGdfLHzvB62f0-n5vp
        subject_person_id: p_4BZEjb4RmSoM8g2SGinzYD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CLbsjyXZyJ1cmF54gMKDpM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fAND5AJJSQ0Ooi78Nn7bnq
          claim_id: c_dS2TwGdfLHzvB62f0-n5vp
          source_id: s_g9zIXTE85vCnqQlTdaG4VW
          stance: supports
          locator: CBDB：兄弟 王毓陽（126796）之父／母 王訓賢
          quotation: null
          interpretation_note: 由兄弟关系推断：王矧陽 与 王毓陽 为同胞（CBDB 记「兄」），王毓陽 之父／母即 王矧陽 之父／母。
          source:
            id: s_g9zIXTE85vCnqQlTdaG4VW
            source_type: api_record
            title: 中国历代人物传记资料库：王矧陽（CBDB 214165）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214165&o=json
            external_identifier: CBDB:214165
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4BZEjb4RmSoM8g2SGinzYD
        status: active
        display_name: 王訓賢
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0mOiktUjO_ejYuso2ZRwel
        subject_person_id: p_CLbsjyXZyJ1cmF54gMKDpM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gsLUVjMxPfhNttK9JjrR4B
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gvzzrij8yt3huuSclKFJTa
          claim_id: c_0mOiktUjO_ejYuso2ZRwel
          source_id: s_g9zIXTE85vCnqQlTdaG4VW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126796 王毓陽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_g9zIXTE85vCnqQlTdaG4VW
            source_type: api_record
            title: 中国历代人物传记资料库：王矧陽（CBDB 214165）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214165&o=json
            external_identifier: CBDB:214165
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gsLUVjMxPfhNttK9JjrR4B
        status: active
        display_name: 王毓陽
        merged_into_person_id: null
---

# 王矧陽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王矧陽，明人物。萬曆二年進士，籍贯德州。（中国历代人物传记资料库 CBDB 214165） | accepted |
| name.primary | 王矧陽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4BZEjb4RmSoM8g2SGinzYD | 王訓賢 | accepted |
| other | p_gsLUVjMxPfhNttK9JjrR4B | 王毓陽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王矧陽（CBDB 214165）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214165&o=json)
