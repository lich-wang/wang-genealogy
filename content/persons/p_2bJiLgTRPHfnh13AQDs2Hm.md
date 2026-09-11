---
schema: wang-person/v1
id: p_2bJiLgTRPHfnh13AQDs2Hm
status: active
merged_into: null
display_name: 王實
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hJkSJekR7ULCQ9phJFcXAq
        subject_person_id: p_2bJiLgTRPHfnh13AQDs2Hm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王實
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jmU9nJALVPjGu8RVDqKE6n
          claim_id: c_hJkSJekR7ULCQ9phJFcXAq
          source_id: s_WhaCCd7mUCRkER8ss3WRhi
          stance: supports
          locator: CBDB:22100
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22100）
          source: &a1
            id: s_WhaCCd7mUCRkER8ss3WRhi
            source_type: api_record
            title: 中国历代人物传记资料库：王實（CBDB 22100）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22100&o=json
            external_identifier: CBDB:22100
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.823Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Cqzqyy38bDboc2nndUD4f2
        subject_person_id: p_2bJiLgTRPHfnh13AQDs2Hm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王實，宋人物。籍贯樂平，身份为地方士人/鄉紳，入仕封贈。（中国历代人物传记资料库 CBDB 22100）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ed1zBn-HzazhCd21MkRZkc
          claim_id: c_Cqzqyy38bDboc2nndUD4f2
          source_id: s_WhaCCd7mUCRkER8ss3WRhi
          stance: supports
          locator: CBDB:22100
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_FAZkwXMqISfjaIUuvWUkow
        subject_person_id: p_2bJiLgTRPHfnh13AQDs2Hm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cHBNeXAarmn6HbRCH6C8tB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i058j-CI6tXs1MOJpTRWzz
          claim_id: c_FAZkwXMqISfjaIUuvWUkow
          source_id: s_WhaCCd7mUCRkER8ss3WRhi
          stance: supports
          locator: CBDB 双向互证（子 王克明 ⇄ 父 王實）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_cHBNeXAarmn6HbRCH6C8tB
        status: active
        display_name: 王克明
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王實

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王實 | accepted |
| bio.summary | 王實，宋人物。籍贯樂平，身份为地方士人/鄉紳，入仕封贈。（中国历代人物传记资料库 CBDB 22100） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_cHBNeXAarmn6HbRCH6C8tB | 王克明 | accepted |

## 外部来源

- [中国历代人物传记资料库：王實（CBDB 22100）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22100&o=json)
