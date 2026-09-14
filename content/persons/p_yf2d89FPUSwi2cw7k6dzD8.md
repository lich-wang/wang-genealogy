---
schema: wang-person/v1
id: p_yf2d89FPUSwi2cw7k6dzD8
status: active
merged_into: null
display_name: 王君賜
cbdb_id: 325024
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1KG9hfY35ybyPC6M1ZVcTg
        subject_person_id: p_yf2d89FPUSwi2cw7k6dzD8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君賜，明人物。嘉靖三十八年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 325024）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_nvgxtkkRUmHO3aqBVGkfA1
          claim_id: c_1KG9hfY35ybyPC6M1ZVcTg
          source_id: s_tDzSZ2BTykiGe5kx4cJBrj
          stance: supports
          locator: CBDB:325024
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_tDzSZ2BTykiGe5kx4cJBrj
            source_type: api_record
            title: 中国历代人物传记资料库：王君賜（CBDB 325024）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325024&o=json
            external_identifier: CBDB:325024
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CrxrseZMK2kAVYaNZyLD8m
        subject_person_id: p_yf2d89FPUSwi2cw7k6dzD8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君賜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DktoHvQaQgooL57Lrs8cRm
          claim_id: c_CrxrseZMK2kAVYaNZyLD8m
          source_id: s_tDzSZ2BTykiGe5kx4cJBrj
          stance: supports
          locator: CBDB:325024
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Q3Us6f1ptWdBU1k1a0XBQn
        subject_person_id: p_3UKbRHPbQbqFq84iP2CGsh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yf2d89FPUSwi2cw7k6dzD8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__2oNqiJeeNxeAqecnfp5Hu
          claim_id: c_Q3Us6f1ptWdBU1k1a0XBQn
          source_id: s_kQIt41xqkxU5wEKpXWwveA
          stance: supports
          locator: CBDB：兄弟 王君賞（204856）之父／母 王惠
          quotation: null
          interpretation_note: 由兄弟关系推断：王君賜 与 王君賞 为同胞（CBDB 记「弟」），王君賞 之父／母即 王君賜 之父／母。
          source:
            id: s_kQIt41xqkxU5wEKpXWwveA
            source_type: api_record
            title: 中国历代人物传记资料库：王君賜（CBDB 325024）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325024&o=json
            external_identifier: CBDB:325024
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3UKbRHPbQbqFq84iP2CGsh
        status: active
        display_name: 王惠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_H31BOw-h_wsxFokiC7P2zn
        subject_person_id: p_AsKndUgLV5THcrwWuRrJU9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yf2d89FPUSwi2cw7k6dzD8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TD_ZdLsOIvgx1ppSRdlZHk
          claim_id: c_H31BOw-h_wsxFokiC7P2zn
          source_id: s_kQIt41xqkxU5wEKpXWwveA
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204856 王君賞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kQIt41xqkxU5wEKpXWwveA
            source_type: api_record
            title: 中国历代人物传记资料库：王君賜（CBDB 325024）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325024&o=json
            external_identifier: CBDB:325024
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AsKndUgLV5THcrwWuRrJU9
        status: active
        display_name: 王君賞
        merged_into_person_id: null
---

# 王君賜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王君賜，明人物。嘉靖三十八年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 325024） | accepted |
| name.primary | 王君賜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3UKbRHPbQbqFq84iP2CGsh | 王惠 | accepted |
| other | p_AsKndUgLV5THcrwWuRrJU9 | 王君賞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王君賜（CBDB 325024）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325024&o=json)
