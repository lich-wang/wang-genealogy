---
schema: wang-person/v1
id: p_LDAvDXeJSzwR3HFvGsLwNg
status: active
merged_into: null
display_name: 王增生
cbdb_id: 526879
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CdEHtNFdMgtBH1oVpFMnb1
        subject_person_id: p_LDAvDXeJSzwR3HFvGsLwNg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王增生，史料所见人物。本项目依据《中国历代人物传记资料库：王增生（CBDB 526879）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_cT0ytucHkR_BB9SwnY_jvy
          claim_id: c_CdEHtNFdMgtBH1oVpFMnb1
          source_id: s_Ufx2MHcwPVxciJ4vhJkKbN
          stance: supports
          locator: CBDB:526879
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Ufx2MHcwPVxciJ4vhJkKbN
            source_type: api_record
            title: 中国历代人物传记资料库：王增生（CBDB 526879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526879&o=json
            external_identifier: CBDB:526879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:19.665Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8XJrR6tMzi4MDqQZZwDpSK
        subject_person_id: p_LDAvDXeJSzwR3HFvGsLwNg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王增生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZALG3mN5MxM8VEtqFFynGw
          claim_id: c_8XJrR6tMzi4MDqQZZwDpSK
          source_id: s_Ufx2MHcwPVxciJ4vhJkKbN
          stance: supports
          locator: CBDB:526879
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7201-7229）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c__ze41v7xZR1g-yt7vUyLRM
        subject_person_id: p_LDAvDXeJSzwR3HFvGsLwNg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uBQSNz6265pj7jQUYJU3TJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SaKfvuEXBWu8yO48smw5GX
          claim_id: c__ze41v7xZR1g-yt7vUyLRM
          source_id: s_Ufx2MHcwPVxciJ4vhJkKbN
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13047：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Ufx2MHcwPVxciJ4vhJkKbN
            source_type: api_record
            title: 中国历代人物传记资料库：王增生（CBDB 526879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526879&o=json
            external_identifier: CBDB:526879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:19.665Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_uBQSNz6265pj7jQUYJU3TJ
        status: active
        display_name: 王孫蔚
        merged_into_person_id: null
    - claim:
        id: c_luj4AQcoyWTgEogqZJW4bo
        subject_person_id: p_LDAvDXeJSzwR3HFvGsLwNg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sQ4rNhd6jagMcrL9HLTeu8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JVjmqho053xVeWL_0XpS_W
          claim_id: c_luj4AQcoyWTgEogqZJW4bo
          source_id: s_m5yAUq2qMQ2t1_CnQaZFC1
          stance: supports
          locator: CBDB：兄弟 王孫蔚（69343）之父／母 王增生
          quotation: null
          interpretation_note: 由兄弟关系推断：王孫麟 与 王孫蔚 为同胞（CBDB 记「弟」），王孫蔚 之父／母即 王孫麟 之父／母。
          source:
            id: s_m5yAUq2qMQ2t1_CnQaZFC1
            source_type: api_record
            title: 中国历代人物传记资料库：王孫麟（CBDB 526878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526878&o=json
            external_identifier: CBDB:526878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sQ4rNhd6jagMcrL9HLTeu8
        status: active
        display_name: 王孫麟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王增生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王增生，史料所见人物。本项目依据《中国历代人物传记资料库：王增生（CBDB 526879）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王增生 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_uBQSNz6265pj7jQUYJU3TJ | 王孫蔚 | accepted |
| children | p_sQ4rNhd6jagMcrL9HLTeu8 | 王孫麟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孫麟（CBDB 526878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526878&o=json)
- [中国历代人物传记资料库：王增生（CBDB 526879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526879&o=json)
