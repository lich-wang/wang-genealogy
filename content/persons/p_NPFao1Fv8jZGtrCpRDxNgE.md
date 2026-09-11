---
schema: wang-person/v1
id: p_NPFao1Fv8jZGtrCpRDxNgE
status: active
merged_into: null
display_name: 王緘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6TCrSStwKiEyhdVMBitsiN
        subject_person_id: p_NPFao1Fv8jZGtrCpRDxNgE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_g7LArLsKQ8iUtm7Hgt81Xr
          claim_id: c_6TCrSStwKiEyhdVMBitsiN
          source_id: s_6p9FvfDje8CL4ERjaWiF4r
          stance: supports
          locator: CBDB:17254
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17254）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pw1paCZj3FS79DMQ92Di3S
        subject_person_id: p_NPFao1Fv8jZGtrCpRDxNgE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緘，宋人物。籍贯長安。（中国历代人物传记资料库 CBDB 17254）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7G8s1X6kA_aXlaNCv4g0cq
          claim_id: c_pw1paCZj3FS79DMQ92Di3S
          source_id: s_6p9FvfDje8CL4ERjaWiF4r
          stance: supports
          locator: CBDB:17254
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NGgEWwRWXKvYLWvDMINyby
        subject_person_id: p_QoJPmnH2p3TN2WeA18wP8z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NPFao1Fv8jZGtrCpRDxNgE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__HN5YgzkLpHljIZsIqnAjP
          claim_id: c_NGgEWwRWXKvYLWvDMINyby
          source_id: s_6p9FvfDje8CL4ERjaWiF4r
          stance: supports
          locator: CBDB 双向互证（父 王凱 ⇄ 子 王緘）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_QoJPmnH2p3TN2WeA18wP8z
        status: active
        display_name: 王凱
        merged_into_person_id: null
  children:
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
          source: *a1
      object_person:
        id: p_te7PsQUmMv5ookHDsggpFw
        status: active
        display_name: 王詵
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王緘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緘 | accepted |
| bio.summary | 王緘，宋人物。籍贯長安。（中国历代人物传记资料库 CBDB 17254） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QoJPmnH2p3TN2WeA18wP8z | 王凱 | accepted |
| children | p_te7PsQUmMv5ookHDsggpFw | 王詵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王緘（CBDB 17254）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17254&o=json)
