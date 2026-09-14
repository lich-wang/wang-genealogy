---
schema: wang-person/v1
id: p_xbae9uYHimaaUVgfERem7w
status: active
merged_into: null
display_name: 王仲春
cbdb_id: 320869
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XFHCFQ6Z132Gyf2ZQFHdGp
        subject_person_id: p_xbae9uYHimaaUVgfERem7w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲春，明人物。嘉靖三十五年進士，籍贯安邑。（中国历代人物传记资料库 CBDB 320869）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ziCCqDQGUofQYhv3msf3h5
          claim_id: c_XFHCFQ6Z132Gyf2ZQFHdGp
          source_id: s_m1h8NfbPapajiNfL7nK3YG
          stance: supports
          locator: CBDB:320869
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_m1h8NfbPapajiNfL7nK3YG
            source_type: api_record
            title: 中国历代人物传记资料库：王仲春（CBDB 320869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320869&o=json
            external_identifier: CBDB:320869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_yMXUMB7yACGUtNV2hLQf2R
        subject_person_id: p_xbae9uYHimaaUVgfERem7w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VmmKzvc396omjmKDdbdLxX
          claim_id: c_yMXUMB7yACGUtNV2hLQf2R
          source_id: s_m1h8NfbPapajiNfL7nK3YG
          stance: supports
          locator: CBDB:320869
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0rKkV-tdx5QdpWpysm1Lwa
        subject_person_id: p_MU2tTmhiuXd4gZeWVvtKyQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xbae9uYHimaaUVgfERem7w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_no2O8tYajQcH6froxabuXB
          claim_id: c_0rKkV-tdx5QdpWpysm1Lwa
          source_id: s_uvDJFloOxECPHA5QIbBWZ7
          stance: supports
          locator: CBDB：兄弟 王得春（204563）之父／母 王惟
          quotation: null
          interpretation_note: 由兄弟关系推断：王仲春 与 王得春 为同胞（CBDB 记「兄」），王得春 之父／母即 王仲春 之父／母。
          source:
            id: s_uvDJFloOxECPHA5QIbBWZ7
            source_type: api_record
            title: 中国历代人物传记资料库：王仲春（CBDB 320869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320869&o=json
            external_identifier: CBDB:320869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MU2tTmhiuXd4gZeWVvtKyQ
        status: active
        display_name: 王惟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_6dZVnz0wuvLBiNGXnYuOSR
        subject_person_id: p_W2D9MwuPsN8G7PZXkTNBD2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xbae9uYHimaaUVgfERem7w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__sxHMlUvAOMDPRro5Gg3-B
          claim_id: c_6dZVnz0wuvLBiNGXnYuOSR
          source_id: s_uvDJFloOxECPHA5QIbBWZ7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204563 王得春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uvDJFloOxECPHA5QIbBWZ7
            source_type: api_record
            title: 中国历代人物传记资料库：王仲春（CBDB 320869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320869&o=json
            external_identifier: CBDB:320869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_W2D9MwuPsN8G7PZXkTNBD2
        status: active
        display_name: 王得春
        merged_into_person_id: null
---

# 王仲春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仲春，明人物。嘉靖三十五年進士，籍贯安邑。（中国历代人物传记资料库 CBDB 320869） | accepted |
| name.primary | 王仲春 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MU2tTmhiuXd4gZeWVvtKyQ | 王惟 | accepted |
| other | p_W2D9MwuPsN8G7PZXkTNBD2 | 王得春 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仲春（CBDB 320869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320869&o=json)
