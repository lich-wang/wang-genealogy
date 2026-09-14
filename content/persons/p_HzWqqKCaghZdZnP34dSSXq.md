---
schema: wang-person/v1
id: p_HzWqqKCaghZdZnP34dSSXq
status: active
merged_into: null
display_name: 王維麟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W9hL22f8i57pNEc5i2L1y9
        subject_person_id: p_HzWqqKCaghZdZnP34dSSXq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P2Vaazt9S3Wm632jfQBs1D
          claim_id: c_W9hL22f8i57pNEc5i2L1y9
          source_id: s_NpmnnpKms58o5hSCEZ7k2n
          stance: supports
          locator: CBDB:696202
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（696202）
          source: &a1
            id: s_NpmnnpKms58o5hSCEZ7k2n
            source_type: api_record
            title: 中国历代人物传记资料库：王維麟（CBDB 696202）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696202&o=json
            external_identifier: CBDB:696202
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.547Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qL1pc7YSLYmVgou1uh9XAA
        subject_person_id: p_HzWqqKCaghZdZnP34dSSXq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維麟，清人物。籍贯仙居，入仕武舉進士，曾任都司、守備。（中国历代人物传记资料库 CBDB 696202）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DSj5oYsXI2X2TVBPBtMEUz
          claim_id: c_qL1pc7YSLYmVgou1uh9XAA
          source_id: s_NpmnnpKms58o5hSCEZ7k2n
          stance: supports
          locator: CBDB:696202
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dYdI5pfUoZrUAta8nIv6PF
        subject_person_id: p_fRN6tNW95MgvLQ7yDRApoS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HzWqqKCaghZdZnP34dSSXq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1loru96ZeUCg12wiT_YXuL
          claim_id: c_dYdI5pfUoZrUAta8nIv6PF
          source_id: s_mZkIuBpdxAjaMHc9V1S7jX
          stance: supports
          locator: CBDB：兄弟 王維鶴（639833）之父／母 王振侯
          quotation: null
          interpretation_note: 由兄弟关系推断：王維麟 与 王維鶴 为同胞（CBDB 记「弟」），王維鶴 之父／母即 王維麟 之父／母。
          source:
            id: s_mZkIuBpdxAjaMHc9V1S7jX
            source_type: api_record
            title: 中国历代人物传记资料库：王維麟（CBDB 696202）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696202&o=json
            external_identifier: CBDB:696202
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fRN6tNW95MgvLQ7yDRApoS
        status: active
        display_name: 王振侯
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_pSEQVayqEvR97s4Pv61pji
        subject_person_id: p_HzWqqKCaghZdZnP34dSSXq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pNAV6nKLPRpaVTa4tHS3kC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D0U_bki4tW_FyXVV7jiH2X
          claim_id: c_pSEQVayqEvR97s4Pv61pji
          source_id: s_mZkIuBpdxAjaMHc9V1S7jX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 639833 王維鶴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mZkIuBpdxAjaMHc9V1S7jX
            source_type: api_record
            title: 中国历代人物传记资料库：王維麟（CBDB 696202）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696202&o=json
            external_identifier: CBDB:696202
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pNAV6nKLPRpaVTa4tHS3kC
        status: active
        display_name: 王維鶴
        merged_into_person_id: null
---

# 王維麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維麟 | accepted |
| bio.summary | 王維麟，清人物。籍贯仙居，入仕武舉進士，曾任都司、守備。（中国历代人物传记资料库 CBDB 696202） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fRN6tNW95MgvLQ7yDRApoS | 王振侯 | accepted |
| other | p_pNAV6nKLPRpaVTa4tHS3kC | 王維鶴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王維麟（CBDB 696202）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696202&o=json)
