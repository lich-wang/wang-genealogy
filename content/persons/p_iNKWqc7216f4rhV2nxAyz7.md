---
schema: wang-person/v1
id: p_iNKWqc7216f4rhV2nxAyz7
status: active
merged_into: null
display_name: 王守一
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_687UzrAhDgUBmNur47EmWh
        subject_person_id: p_iNKWqc7216f4rhV2nxAyz7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守一
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wqos6Y1AEYdv9HwYjn1jmK
          claim_id: c_687UzrAhDgUBmNur47EmWh
          source_id: s_jFK1nutNqP6dnUo6kczws9
          stance: supports
          locator: CBDB:32343
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（32343）
          source: &a1
            id: s_jFK1nutNqP6dnUo6kczws9
            source_type: api_record
            title: 中国历代人物传记资料库：王守一（CBDB 32343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32343&o=json
            external_identifier: CBDB:32343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.053Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yrbgHrF3NPTMP9HFJDAWkn
        subject_person_id: p_iNKWqc7216f4rhV2nxAyz7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守一，唐人物。籍贯長安，曾任太僕少卿、王府掾。（中国历代人物传记资料库 CBDB 32343）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_us80VwPasGwlGn-vEWGFmi
          claim_id: c_yrbgHrF3NPTMP9HFJDAWkn
          source_id: s_jFK1nutNqP6dnUo6kczws9
          stance: supports
          locator: CBDB:32343
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yHh2pcdBiOz39JkN7duv6b
        subject_person_id: p_sPoBNZqLdGBxQ46ZCBG9Hg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iNKWqc7216f4rhV2nxAyz7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N0Jv2ly-9Ss4auKiKAWIMJ
          claim_id: c_yHh2pcdBiOz39JkN7duv6b
          source_id: s_jFK1nutNqP6dnUo6kczws9
          stance: supports
          locator: CBDB 双向互证（父 王士會 ⇄ 子 王守一）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_sPoBNZqLdGBxQ46ZCBG9Hg
        status: active
        display_name: 王士會
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王守一

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守一 | accepted |
| bio.summary | 王守一，唐人物。籍贯長安，曾任太僕少卿、王府掾。（中国历代人物传记资料库 CBDB 32343） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sPoBNZqLdGBxQ46ZCBG9Hg | 王士會 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守一（CBDB 32343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=32343&o=json)
