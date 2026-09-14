---
schema: wang-person/v1
id: p_6uLL9tX2S4GHFSeMBfu12M
status: active
merged_into: null
display_name: 王大化
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KKADSbzDxc2rHXiKhsh7Ck
        subject_person_id: p_6uLL9tX2S4GHFSeMBfu12M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大化
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1X8jHYZjAoVM6vkuHuEBhA
          claim_id: c_KKADSbzDxc2rHXiKhsh7Ck
          source_id: s_1zeeQifuZzSvhrReqaq489
          stance: supports
          locator: CBDB:311225
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（311225）
          source: &a1
            id: s_1zeeQifuZzSvhrReqaq489
            source_type: api_record
            title: 中国历代人物传记资料库：王大化（CBDB 311225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311225&o=json
            external_identifier: CBDB:311225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QG6AmNkkjv4WmkzK1kT7Zm
        subject_person_id: p_6uLL9tX2S4GHFSeMBfu12M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大化，明人物。嘉靖二十六年進士，籍贯海鹽。（中国历代人物传记资料库 CBDB 311225）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YashDmcRgXtgv0s2fpdpj_
          claim_id: c_QG6AmNkkjv4WmkzK1kT7Zm
          source_id: s_1zeeQifuZzSvhrReqaq489
          stance: supports
          locator: CBDB:311225
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Huj7ROuPPEAFJk1UXeWP1F
        subject_person_id: p_ddWY4cKu36BYCB9sUmQGQH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6uLL9tX2S4GHFSeMBfu12M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mL0Rv0XrY9wA9Wt7Jkwf7d
          claim_id: c_Huj7ROuPPEAFJk1UXeWP1F
          source_id: s_ENPQcaFOAX5GpHE4yegLat
          stance: supports
          locator: CBDB：兄弟 王大猷（203868）之父／母 王勇
          quotation: null
          interpretation_note: 由兄弟关系推断：王大化 与 王大猷 为同胞（CBDB 记「兄」），王大猷 之父／母即 王大化 之父／母。
          source:
            id: s_ENPQcaFOAX5GpHE4yegLat
            source_type: api_record
            title: 中国历代人物传记资料库：王大化（CBDB 311225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311225&o=json
            external_identifier: CBDB:311225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ddWY4cKu36BYCB9sUmQGQH
        status: active
        display_name: 王勇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_8N-0JwefLymYZcMrjyq6Ft
        subject_person_id: p_6uLL9tX2S4GHFSeMBfu12M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dBDSp35EhkaWHCV6D81q6n
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ie9fck0BnV7ACKrIV4ZCCZ
          claim_id: c_8N-0JwefLymYZcMrjyq6Ft
          source_id: s_ENPQcaFOAX5GpHE4yegLat
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203868 王大猷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ENPQcaFOAX5GpHE4yegLat
            source_type: api_record
            title: 中国历代人物传记资料库：王大化（CBDB 311225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311225&o=json
            external_identifier: CBDB:311225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dBDSp35EhkaWHCV6D81q6n
        status: active
        display_name: 王大猷
        merged_into_person_id: null
---

# 王大化

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大化 | accepted |
| bio.summary | 王大化，明人物。嘉靖二十六年進士，籍贯海鹽。（中国历代人物传记资料库 CBDB 311225） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ddWY4cKu36BYCB9sUmQGQH | 王勇 | accepted |
| other | p_dBDSp35EhkaWHCV6D81q6n | 王大猷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大化（CBDB 311225）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311225&o=json)
