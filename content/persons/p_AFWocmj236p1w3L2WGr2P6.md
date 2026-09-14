---
schema: wang-person/v1
id: p_AFWocmj236p1w3L2WGr2P6
status: active
merged_into: null
display_name: 王來召
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8cNyDh1P51qUYLdNkFSx3h
        subject_person_id: p_AFWocmj236p1w3L2WGr2P6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來召
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XaZBK75SkCZFdfRSwjC452
          claim_id: c_8cNyDh1P51qUYLdNkFSx3h
          source_id: s_mpTXnGCn5NKUQEzAC5Qokh
          stance: supports
          locator: CBDB:210618
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210618）
          source: &a1
            id: s_mpTXnGCn5NKUQEzAC5Qokh
            source_type: api_record
            title: 中国历代人物传记资料库：王來召（CBDB 210618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210618&o=json
            external_identifier: CBDB:210618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.012Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t8EHLA7beZHwV1um2ZxvBf
        subject_person_id: p_AFWocmj236p1w3L2WGr2P6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來召，明人物。隆慶五年進士，籍贯壽陽。（中国历代人物传记资料库 CBDB 210618）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kvcNSjDkjtFkMjaCiEb2vQ
          claim_id: c_t8EHLA7beZHwV1um2ZxvBf
          source_id: s_mpTXnGCn5NKUQEzAC5Qokh
          stance: supports
          locator: CBDB:210618
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vrAmVqms3gcmsMFz0rwKhw
        subject_person_id: p_Xfq2hzbf2P25NMCS4qwtRa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AFWocmj236p1w3L2WGr2P6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rywQdsJVJwMw_7n3_Zm1xl
          claim_id: c_vrAmVqms3gcmsMFz0rwKhw
          source_id: s_2D3R0sEbS_EMV6Fpl1Jm63
          stance: supports
          locator: CBDB：兄弟 王來聘（205915）之父／母 王麟
          quotation: null
          interpretation_note: 由兄弟关系推断：王來召 与 王來聘 为同胞（CBDB 记「兄」），王來聘 之父／母即 王來召 之父／母。
          source:
            id: s_2D3R0sEbS_EMV6Fpl1Jm63
            source_type: api_record
            title: 中国历代人物传记资料库：王來召（CBDB 210618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210618&o=json
            external_identifier: CBDB:210618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Xfq2hzbf2P25NMCS4qwtRa
        status: active
        display_name: 王麟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_MDKNfT3M6mN8wes2UhBITn
        subject_person_id: p_AFWocmj236p1w3L2WGr2P6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TFTLmHU5uD9CZvePXzWQV6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GsPDh5PdrbuWUVtGmnswGJ
          claim_id: c_MDKNfT3M6mN8wes2UhBITn
          source_id: s_2D3R0sEbS_EMV6Fpl1Jm63
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205915 王來聘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2D3R0sEbS_EMV6Fpl1Jm63
            source_type: api_record
            title: 中国历代人物传记资料库：王來召（CBDB 210618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210618&o=json
            external_identifier: CBDB:210618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TFTLmHU5uD9CZvePXzWQV6
        status: active
        display_name: 王來聘
        merged_into_person_id: null
---

# 王來召

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王來召 | accepted |
| bio.summary | 王來召，明人物。隆慶五年進士，籍贯壽陽。（中国历代人物传记资料库 CBDB 210618） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Xfq2hzbf2P25NMCS4qwtRa | 王麟 | accepted |
| other | p_TFTLmHU5uD9CZvePXzWQV6 | 王來聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王來召（CBDB 210618）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210618&o=json)
