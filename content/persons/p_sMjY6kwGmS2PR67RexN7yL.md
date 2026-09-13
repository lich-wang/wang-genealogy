---
schema: wang-person/v1
id: p_sMjY6kwGmS2PR67RexN7yL
status: active
merged_into: null
display_name: 王崇之
cbdb_id: 126685
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GqKFvFfGCbao5XdXms29fB
        subject_person_id: p_sMjY6kwGmS2PR67RexN7yL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇之，史料所见人物。本项目依据《中国历代人物传记资料库：王崇之（CBDB 126685）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_fXKTLT1fqx9w1rp6xeAF94
          claim_id: c_GqKFvFfGCbao5XdXms29fB
          source_id: s_91D4afZcd4UJY89rGZpqvG
          stance: supports
          locator: CBDB:126685
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_91D4afZcd4UJY89rGZpqvG
            source_type: api_record
            title: 中国历代人物传记资料库：王崇之（CBDB 126685）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126685&o=json
            external_identifier: CBDB:126685
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HQnQi9JzS7kkw4LNPcWWN2
        subject_person_id: p_sMjY6kwGmS2PR67RexN7yL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XkZWi48DNjbh3crN4mCCLB
          claim_id: c_HQnQi9JzS7kkw4LNPcWWN2
          source_id: s_91D4afZcd4UJY89rGZpqvG
          stance: supports
          locator: CBDB:126685
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2001-2100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8ZXBaSGMnOCxHoEKA6r8Ui
        subject_person_id: p_efTyspVBuWnU6D3LVRN3aM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sMjY6kwGmS2PR67RexN7yL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WDRjo47WNp13sub5p-vX6K
          claim_id: c_8ZXBaSGMnOCxHoEKA6r8Ui
          source_id: s_k5uqKuA9pNZyhL66BDa72e
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第一百一十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_k5uqKuA9pNZyhL66BDa72e
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 213514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213514&o=json
            external_identifier: CBDB:213514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.117Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_efTyspVBuWnU6D3LVRN3aM
        status: active
        display_name: 王憲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_CSbyCj5V4grsS6RzdXtIX7
        subject_person_id: p_jUoataZ7j2qcdV3Biwj7GJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sMjY6kwGmS2PR67RexN7yL
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zd3NWOf4Ou0S6C6bd1hdOs
          claim_id: c_CSbyCj5V4grsS6RzdXtIX7
          source_id: s_oeEnSgKXHH6CB1KLDjxkUZ
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第一百一十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oeEnSgKXHH6CB1KLDjxkUZ
            source_type: api_record
            title: 中国历代人物传记资料库：王景新（CBDB 213492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213492&o=json
            external_identifier: CBDB:213492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.116Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jUoataZ7j2qcdV3Biwj7GJ
        status: active
        display_name: 王景新
        merged_into_person_id: null
    - claim:
        id: c_g2HGx8TB1gloioqp-HWYdB
        subject_person_id: p_62sxpvvL2SHMNJFhQgKL1f
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sMjY6kwGmS2PR67RexN7yL
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bU3nMgMzvnxGVZ6VtKPWuU
          claim_id: c_g2HGx8TB1gloioqp-HWYdB
          source_id: s_b4cWnTpv8zCcETfDM7x6o4
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第一百一十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_b4cWnTpv8zCcETfDM7x6o4
            source_type: api_record
            title: 中国历代人物传记资料库：王循理（CBDB 213503）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213503&o=json
            external_identifier: CBDB:213503
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_62sxpvvL2SHMNJFhQgKL1f
        status: active
        display_name: 王循理
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王崇之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王崇之，史料所见人物。本项目依据《中国历代人物传记资料库：王崇之（CBDB 126685）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王崇之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_efTyspVBuWnU6D3LVRN3aM | 王憲 | accepted |
| ancestors | p_jUoataZ7j2qcdV3Biwj7GJ | 王景新 | accepted |
| ancestors | p_62sxpvvL2SHMNJFhQgKL1f | 王循理 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇之（CBDB 126685）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126685&o=json)
- [中国历代人物传记资料库：王景新（CBDB 213492）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213492&o=json)
- [中国历代人物传记资料库：王憲（CBDB 213514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213514&o=json)
- [中国历代人物传记资料库：王循理（CBDB 213503）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213503&o=json)
