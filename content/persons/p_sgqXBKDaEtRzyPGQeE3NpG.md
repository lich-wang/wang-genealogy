---
schema: wang-person/v1
id: p_sgqXBKDaEtRzyPGQeE3NpG
status: active
merged_into: null
display_name: 王應命
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MHunfkeP8VMvQGJgny4Wg9
        subject_person_id: p_sgqXBKDaEtRzyPGQeE3NpG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應命
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Au863CFqrhksJzFB39Gb9Z
          claim_id: c_MHunfkeP8VMvQGJgny4Wg9
          source_id: s_58TofntZT2QM7x3cvCw5ho
          stance: supports
          locator: CBDB:221578
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221578）
          source: &a1
            id: s_58TofntZT2QM7x3cvCw5ho
            source_type: api_record
            title: 中国历代人物传记资料库：王應命（CBDB 221578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221578&o=json
            external_identifier: CBDB:221578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.315Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zvKB7HN9X5TYsDHj8kTsj7
        subject_person_id: p_sgqXBKDaEtRzyPGQeE3NpG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應命，明人物。萬曆八年進士，籍贯龍溪。（中国历代人物传记资料库 CBDB 221578）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_22vp5rCLdxJBqdZxAaKPAZ
          claim_id: c_zvKB7HN9X5TYsDHj8kTsj7
          source_id: s_58TofntZT2QM7x3cvCw5ho
          stance: supports
          locator: CBDB:221578
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DzbHyQhjSxalssHDk5GCHL
        subject_person_id: p_MpRHKYQgMhyeJ8uJAKZD2Z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sgqXBKDaEtRzyPGQeE3NpG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1Xfgsn0I9-SSISEpKHPnzW
          claim_id: c_DzbHyQhjSxalssHDk5GCHL
          source_id: s_C5HWilHm5vIk3U4NNaYTFm
          stance: supports
          locator: CBDB：兄弟 王應麟（126851）之父／母 王榮貴
          quotation: null
          interpretation_note: 由兄弟关系推断：王應命 与 王應麟 为同胞（CBDB 记「兄」），王應麟 之父／母即 王應命 之父／母。
          source:
            id: s_C5HWilHm5vIk3U4NNaYTFm
            source_type: api_record
            title: 中国历代人物传记资料库：王應命（CBDB 221578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221578&o=json
            external_identifier: CBDB:221578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MpRHKYQgMhyeJ8uJAKZD2Z
        status: active
        display_name: 王榮貴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Tb1FULonvmtoNzJgm_Vewe
        subject_person_id: p_hnvFbFQMD3qoDJL59kCJv1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sgqXBKDaEtRzyPGQeE3NpG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4C7Lo-jfoxqMSFBlFVGYI-
          claim_id: c_Tb1FULonvmtoNzJgm_Vewe
          source_id: s_C5HWilHm5vIk3U4NNaYTFm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126851 王應麟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_C5HWilHm5vIk3U4NNaYTFm
            source_type: api_record
            title: 中国历代人物传记资料库：王應命（CBDB 221578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221578&o=json
            external_identifier: CBDB:221578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hnvFbFQMD3qoDJL59kCJv1
        status: active
        display_name: 王應麟
        merged_into_person_id: null
---

# 王應命

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應命 | accepted |
| bio.summary | 王應命，明人物。萬曆八年進士，籍贯龍溪。（中国历代人物传记资料库 CBDB 221578） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MpRHKYQgMhyeJ8uJAKZD2Z | 王榮貴 | accepted |
| other | p_hnvFbFQMD3qoDJL59kCJv1 | 王應麟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應命（CBDB 221578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221578&o=json)
