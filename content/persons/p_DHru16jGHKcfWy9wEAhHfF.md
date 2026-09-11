---
schema: wang-person/v1
id: p_DHru16jGHKcfWy9wEAhHfF
status: active
merged_into: null
display_name: 王之麟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_z5RRgfosBp4EgNFcDz4wid
        subject_person_id: p_DHru16jGHKcfWy9wEAhHfF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QpoQFdNiap89Hteen2V1L6
          claim_id: c_z5RRgfosBp4EgNFcDz4wid
          source_id: s_UKkQUb7Zizm8CYjP9c7DgL
          stance: supports
          locator: CBDB:338129
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（338129）
          source: &a1
            id: s_UKkQUb7Zizm8CYjP9c7DgL
            source_type: api_record
            title: 中国历代人物传记资料库：王之麟（CBDB 338129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338129&o=json
            external_identifier: CBDB:338129
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.535Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Gv44CW8KSNU1x4RLLZVr91
        subject_person_id: p_DHru16jGHKcfWy9wEAhHfF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1680年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wMEssAJmMi278sgscyEpDm
          claim_id: c_Gv44CW8KSNU1x4RLLZVr91
          source_id: s_UKkQUb7Zizm8CYjP9c7DgL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_aGG6P4t3GqNyQVUU9b4BkB
        subject_person_id: p_DHru16jGHKcfWy9wEAhHfF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1737年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZtZDb7bxaXLmpvPi8JdWid
          claim_id: c_aGG6P4t3GqNyQVUU9b4BkB
          source_id: s_UKkQUb7Zizm8CYjP9c7DgL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1DFkLUWBToQNkJTFWa5DYG
        subject_person_id: p_DHru16jGHKcfWy9wEAhHfF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之麟（1680年—1737年），清人物。籍贯常熟，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 338129）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pkJvpqruLxR-VFBs66uxY8
          claim_id: c_1DFkLUWBToQNkJTFWa5DYG
          source_id: s_UKkQUb7Zizm8CYjP9c7DgL
          stance: supports
          locator: CBDB:338129
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qbHySUKU1bBjYq3em0oAVp
        subject_person_id: p_T8xHGLm7WH9NkAatFpz26S
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DHru16jGHKcfWy9wEAhHfF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x5Ch1twXTChS4tArBGRJWh
          claim_id: c_qbHySUKU1bBjYq3em0oAVp
          source_id: s_UKkQUb7Zizm8CYjP9c7DgL
          stance: supports
          locator: CBDB 双向互证（父 王世傑 ⇄ 子 王之麟）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_T8xHGLm7WH9NkAatFpz26S
        status: active
        display_name: 王世傑
        merged_into_person_id: null
  children:
    - claim:
        id: c_McVg5hReZntGfZy_22PeBb
        subject_person_id: p_DHru16jGHKcfWy9wEAhHfF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_46XipnUnHFjdtuwtK8Mp3F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ik-GA4K2F_REoK_atka-T8
          claim_id: c_McVg5hReZntGfZy_22PeBb
          source_id: s_fsjGCZ2rKkMN7xm3S6BCSG
          stance: supports
          locator: 明清婦女著作數據庫，4257：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fsjGCZ2rKkMN7xm3S6BCSG
            source_type: api_record
            title: 中国历代人物传记资料库：王蕙貞（CBDB 121811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121811&o=json
            external_identifier: CBDB:121811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_46XipnUnHFjdtuwtK8Mp3F
        status: active
        display_name: 王蕙貞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_O4USDDRVveuZWvCe9ndxDp
        subject_person_id: p_8GmE2mtKXF9gY2iwgPCfjf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DHru16jGHKcfWy9wEAhHfF
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3lG3f-lntkafN3zvjvo04-
          claim_id: c_O4USDDRVveuZWvCe9ndxDp
          source_id: s_6uwC9rto3h6f8eErDmJUR6
          stance: supports
          locator: CBDB 双向互证（曾孫; 重孫 王之麟 ⇄ 曾祖 王俞）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_6uwC9rto3h6f8eErDmJUR6
            source_type: api_record
            title: 中国历代人物传记资料库：王俞（CBDB 338130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338130&o=json
            external_identifier: CBDB:338130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.536Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8GmE2mtKXF9gY2iwgPCfjf
        status: active
        display_name: 王俞
        merged_into_person_id: null
    - claim:
        id: c_5bwJCWzh0MVIm8HIWFTcvm
        subject_person_id: p_xHk7N3AX4R3UJV5CDubwrX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DHru16jGHKcfWy9wEAhHfF
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pFdoCqWdVs8UqbbkpQw_w8
          claim_id: c_5bwJCWzh0MVIm8HIWFTcvm
          source_id: s_UKkQUb7Zizm8CYjP9c7DgL
          stance: supports
          locator: CBDB 双向互证（祖父 王澧 ⇄ 孫 王之麟）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_xHk7N3AX4R3UJV5CDubwrX
        status: active
        display_name: 王澧
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王之麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之麟 | accepted |
| birth.date | 1680年 | accepted |
| death.date | 1737年 | accepted |
| bio.summary | 王之麟（1680年—1737年），清人物。籍贯常熟，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 338129） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_T8xHGLm7WH9NkAatFpz26S | 王世傑 | accepted |
| children | p_46XipnUnHFjdtuwtK8Mp3F | 王蕙貞 | accepted |
| ancestors | p_8GmE2mtKXF9gY2iwgPCfjf | 王俞 | accepted |
| ancestors | p_xHk7N3AX4R3UJV5CDubwrX | 王澧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王蕙貞（CBDB 121811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121811&o=json)
- [中国历代人物传记资料库：王俞（CBDB 338130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338130&o=json)
- [中国历代人物传记资料库：王之麟（CBDB 338129）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338129&o=json)
