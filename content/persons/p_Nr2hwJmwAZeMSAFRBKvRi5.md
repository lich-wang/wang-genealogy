---
schema: wang-person/v1
id: p_Nr2hwJmwAZeMSAFRBKvRi5
status: active
merged_into: null
display_name: 王霓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Pi72cWTNCspx2CFibbtD2g
        subject_person_id: p_Nr2hwJmwAZeMSAFRBKvRi5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_byMBGNygmr28Pc1yhtCepY
          claim_id: c_Pi72cWTNCspx2CFibbtD2g
          source_id: s_7AppEb678VN4vfWU4DAZwr
          stance: supports
          locator: CBDB:270652
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270652）
          source: &a1
            id: s_7AppEb678VN4vfWU4DAZwr
            source_type: api_record
            title: 中国历代人物传记资料库：王霓（CBDB 270652）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270652&o=json
            external_identifier: CBDB:270652
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.843Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ztEG1iK7fTHrrdDc637fqn
        subject_person_id: p_Nr2hwJmwAZeMSAFRBKvRi5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霓，明人物。弘治十五年進士，籍贯諸城。（中国历代人物传记资料库 CBDB 270652）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kCpfFpjjC-zlDfsGhMTLwL
          claim_id: c_ztEG1iK7fTHrrdDc637fqn
          source_id: s_7AppEb678VN4vfWU4DAZwr
          stance: supports
          locator: CBDB:270652
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9y_L5RpmdfV5niKElP_RNq
        subject_person_id: p_SA9Pc7n2AYxZ7RijE7Kt9H
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Nr2hwJmwAZeMSAFRBKvRi5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vdYLt52GWgy8g2diN8Tyvz
          claim_id: c_9y_L5RpmdfV5niKElP_RNq
          source_id: s_5yf1Do-XQ4ahD3JpFqxHmh
          stance: supports
          locator: CBDB：兄弟 王雲（201331）之父／母 王通
          quotation: null
          interpretation_note: 由兄弟关系推断：王霓 与 王雲 为同胞（CBDB 记「兄」），王雲 之父／母即 王霓 之父／母。
          source:
            id: s_5yf1Do-XQ4ahD3JpFqxHmh
            source_type: api_record
            title: 中国历代人物传记资料库：王霓（CBDB 270652）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270652&o=json
            external_identifier: CBDB:270652
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SA9Pc7n2AYxZ7RijE7Kt9H
        status: active
        display_name: 王通
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_pnVB3gYz6B-jl_LkepY3uL
        subject_person_id: p_Nr2hwJmwAZeMSAFRBKvRi5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kuyuiJHgUznyGsvyFU7zw8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aM-eUU5vlSy1Jb2V8P1WgA
          claim_id: c_pnVB3gYz6B-jl_LkepY3uL
          source_id: s_5yf1Do-XQ4ahD3JpFqxHmh
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201331 王雲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5yf1Do-XQ4ahD3JpFqxHmh
            source_type: api_record
            title: 中国历代人物传记资料库：王霓（CBDB 270652）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270652&o=json
            external_identifier: CBDB:270652
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kuyuiJHgUznyGsvyFU7zw8
        status: active
        display_name: 王雲
        merged_into_person_id: null
---

# 王霓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霓 | accepted |
| bio.summary | 王霓，明人物。弘治十五年進士，籍贯諸城。（中国历代人物传记资料库 CBDB 270652） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SA9Pc7n2AYxZ7RijE7Kt9H | 王通 | accepted |
| other | p_kuyuiJHgUznyGsvyFU7zw8 | 王雲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王霓（CBDB 270652）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270652&o=json)
