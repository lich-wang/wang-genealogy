---
schema: wang-person/v1
id: p_te7PsQUmMv5ookHDsggpFw
status: active
merged_into: null
display_name: 王詵
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P4Ka47ZNJNmRL4eKjFboG6
        subject_person_id: p_te7PsQUmMv5ookHDsggpFw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R3HCmDR64KEiSJV7fsDagC
          claim_id: c_P4Ka47ZNJNmRL4eKjFboG6
          source_id: s_Gm6nUMpAGrhKPcSL4VP8Bh
          stance: supports
          locator: CBDB:7376
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（7376）
          source: &a1
            id: s_Gm6nUMpAGrhKPcSL4VP8Bh
            source_type: api_record
            title: 中国历代人物传记资料库：王詵（CBDB 7376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7376&o=json
            external_identifier: CBDB:7376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.479Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ChsP4EC5KkUks2Who7HfN6
        subject_person_id: p_te7PsQUmMv5ookHDsggpFw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詵，宋人物。籍贯長安，身份为書法家、畫家，入仕軍員轉補，曾任防禦使、駙馬都尉、左衛將軍。（中国历代人物传记资料库 CBDB 7376）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KSRbkOjTn-N7rN_KXS0bit
          claim_id: c_ChsP4EC5KkUks2Who7HfN6
          source_id: s_Gm6nUMpAGrhKPcSL4VP8Bh
          stance: supports
          locator: CBDB:7376
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fjPEVcrtcEy8okvjXZ2tDf
        subject_person_id: p_NPFao1Fv8jZGtrCpRDxNgE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_te7PsQUmMv5ookHDsggpFw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__zGH6mhdEx-mOK_RMjOoLU
          claim_id: c_fjPEVcrtcEy8okvjXZ2tDf
          source_id: s_6p9FvfDje8CL4ERjaWiF4r
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1040;1041：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6p9FvfDje8CL4ERjaWiF4r
            source_type: api_record
            title: 中国历代人物传记资料库：王緘（CBDB 17254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17254&o=json
            external_identifier: CBDB:17254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.658Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NPFao1Fv8jZGtrCpRDxNgE
        status: active
        display_name: 王緘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_jGVjjHq3a5Copwy-L40Jmz
        subject_person_id: p_QoJPmnH2p3TN2WeA18wP8z
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_te7PsQUmMv5ookHDsggpFw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aVlPmQYrQ2J60Jdb8o-gtO
          claim_id: c_jGVjjHq3a5Copwy-L40Jmz
          source_id: s_1Zsci6iF4Arcot2TKBLMBo
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1040：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1Zsci6iF4Arcot2TKBLMBo
            source_type: api_record
            title: 中国历代人物传记资料库：王凱（CBDB 7379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7379&o=json
            external_identifier: CBDB:7379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.481Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QoJPmnH2p3TN2WeA18wP8z
        status: active
        display_name: 王凱
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王詵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詵 | accepted |
| bio.summary | 王詵，宋人物。籍贯長安，身份为書法家、畫家，入仕軍員轉補，曾任防禦使、駙馬都尉、左衛將軍。（中国历代人物传记资料库 CBDB 7376） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NPFao1Fv8jZGtrCpRDxNgE | 王緘 | accepted |
| ancestors | p_QoJPmnH2p3TN2WeA18wP8z | 王凱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王緘（CBDB 17254）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17254&o=json)
- [中国历代人物传记资料库：王凱（CBDB 7379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7379&o=json)
- [中国历代人物传记资料库：王詵（CBDB 7376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7376&o=json)
