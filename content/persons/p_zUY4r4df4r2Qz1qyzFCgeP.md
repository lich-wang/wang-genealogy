---
schema: wang-person/v1
id: p_zUY4r4df4r2Qz1qyzFCgeP
status: active
merged_into: null
display_name: 王觀光
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5XJaA5jsnpMTkAvekyNKQ2
        subject_person_id: p_zUY4r4df4r2Qz1qyzFCgeP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9Tvh3ezmkhDJVJHvYUAWGJ
          claim_id: c_5XJaA5jsnpMTkAvekyNKQ2
          source_id: s_ZdhRTX9bMwDe2NA4KvkGUL
          stance: supports
          locator: CBDB:302580
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（302580）
          source: &a1
            id: s_ZdhRTX9bMwDe2NA4KvkGUL
            source_type: api_record
            title: 中国历代人物传记资料库：王觀光（CBDB 302580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302580&o=json
            external_identifier: CBDB:302580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.654Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aGtoMVPGRxyBNfX7DH2gBq
        subject_person_id: p_zUY4r4df4r2Qz1qyzFCgeP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王觀光，明人物。嘉靖二十年進士，籍贯新城。（中国历代人物传记资料库 CBDB 302580）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YIXkFuEsOsZf9H8qqgiZbi
          claim_id: c_aGtoMVPGRxyBNfX7DH2gBq
          source_id: s_ZdhRTX9bMwDe2NA4KvkGUL
          stance: supports
          locator: CBDB:302580
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EHHNoc6WB5TJ0VFSfj6YMs
        subject_person_id: p_dFBcsKbnFVcHN4YTvXeRwY
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_zUY4r4df4r2Qz1qyzFCgeP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZrZcgHV_yNxI9u-irmc3Py
          claim_id: c_EHHNoc6WB5TJ0VFSfj6YMs
          source_id: s_1dDPRHCbuXntFarwIutTVW
          stance: supports
          locator: CBDB：兄弟 王重光（126622）之父／母 王麟
          quotation: null
          interpretation_note: 由兄弟关系推断：王觀光 与 王重光 为同胞（CBDB 记「兄」），王重光 之父／母即 王觀光 之父／母。
          source:
            id: s_1dDPRHCbuXntFarwIutTVW
            source_type: api_record
            title: 中国历代人物传记资料库：王觀光（CBDB 302580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302580&o=json
            external_identifier: CBDB:302580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dFBcsKbnFVcHN4YTvXeRwY
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
        id: c_SiTIVp3T_6O519LHmowXam
        subject_person_id: p_2XaF6KrMwGSDeaU76DAGrz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zUY4r4df4r2Qz1qyzFCgeP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NpWeTQEsY-aMHxNbUkPLKu
          claim_id: c_SiTIVp3T_6O519LHmowXam
          source_id: s_1dDPRHCbuXntFarwIutTVW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126622 王重光）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1dDPRHCbuXntFarwIutTVW
            source_type: api_record
            title: 中国历代人物传记资料库：王觀光（CBDB 302580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302580&o=json
            external_identifier: CBDB:302580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2XaF6KrMwGSDeaU76DAGrz
        status: active
        display_name: 王重光
        merged_into_person_id: null
---

# 王觀光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王觀光 | accepted |
| bio.summary | 王觀光，明人物。嘉靖二十年進士，籍贯新城。（中国历代人物传记资料库 CBDB 302580） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dFBcsKbnFVcHN4YTvXeRwY | 王麟 | accepted |
| other | p_2XaF6KrMwGSDeaU76DAGrz | 王重光 | accepted |

## 外部来源

- [中国历代人物传记资料库：王觀光（CBDB 302580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302580&o=json)
