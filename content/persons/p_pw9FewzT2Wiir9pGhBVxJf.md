---
schema: wang-person/v1
id: p_pw9FewzT2Wiir9pGhBVxJf
status: active
merged_into: null
display_name: 王淦
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cWPCncLVVuT2E8KsFvzx76
        subject_person_id: p_pw9FewzT2Wiir9pGhBVxJf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8kHw4MjCD3NgZFFCLWHfT2
          claim_id: c_cWPCncLVVuT2E8KsFvzx76
          source_id: s_S5cjjAGwxs7oUP24sF9dmx
          stance: supports
          locator: CBDB:703740
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703740）
          source: &a1
            id: s_S5cjjAGwxs7oUP24sF9dmx
            source_type: api_record
            title: 中国历代人物传记资料库：王淦（CBDB 703740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703740&o=json
            external_identifier: CBDB:703740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.829Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K95NwpeKMU4HJYSoj9Sq7A
        subject_person_id: p_pw9FewzT2Wiir9pGhBVxJf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淦，清人物。籍贯上虞。（中国历代人物传记资料库 CBDB 703740）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a-xnwoFmJynkl2vDpuMmXZ
          claim_id: c_K95NwpeKMU4HJYSoj9Sq7A
          source_id: s_S5cjjAGwxs7oUP24sF9dmx
          stance: supports
          locator: CBDB:703740
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
  ancestors:
    - claim:
        id: c_BUrXpRP768MyBRHn_ADSFt
        subject_person_id: p_5qpDQsr3v9pDYmimcziE1B
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_pw9FewzT2Wiir9pGhBVxJf
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LSQEuGRCV5u24G_TyHPNhm
          claim_id: c_BUrXpRP768MyBRHn_ADSFt
          source_id: s_N1VYUSZxDBTRD2pX32aqHT
          stance: supports
          locator: 上虞縣志，lgid=324970：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_N1VYUSZxDBTRD2pX32aqHT
            source_type: api_record
            title: 中国历代人物传记资料库：王望霖（CBDB 703723）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703723&o=json
            external_identifier: CBDB:703723
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.629Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5qpDQsr3v9pDYmimcziE1B
        status: active
        display_name: 王望霖
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王淦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淦 | accepted |
| bio.summary | 王淦，清人物。籍贯上虞。（中国历代人物传记资料库 CBDB 703740） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_5qpDQsr3v9pDYmimcziE1B | 王望霖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淦（CBDB 703740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703740&o=json)
- [中国历代人物传记资料库：王望霖（CBDB 703723）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703723&o=json)
