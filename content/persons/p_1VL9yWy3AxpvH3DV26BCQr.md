---
schema: wang-person/v1
id: p_1VL9yWy3AxpvH3DV26BCQr
status: active
merged_into: null
display_name: 王乃祿
cbdb_id: 526776
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9GatQFgac9GDHFqmCXT8i4
        subject_person_id: p_1VL9yWy3AxpvH3DV26BCQr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乃祿，史料所见人物。本项目依据《中国历代人物传记资料库：王乃祿（CBDB 526776）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_wt9U4IgKe-QUCVgKaDXIsn
          claim_id: c_9GatQFgac9GDHFqmCXT8i4
          source_id: s_c82AACNCEyfS9PEBZpzFGj
          stance: supports
          locator: CBDB:526776
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_c82AACNCEyfS9PEBZpzFGj
            source_type: api_record
            title: 中国历代人物传记资料库：王乃祿（CBDB 526776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526776&o=json
            external_identifier: CBDB:526776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_yQbfLE6zL5z89BVwt3c9AH
        subject_person_id: p_1VL9yWy3AxpvH3DV26BCQr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乃祿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_91fymZ4xkx74kBenKNYtGv
          claim_id: c_yQbfLE6zL5z89BVwt3c9AH
          source_id: s_c82AACNCEyfS9PEBZpzFGj
          stance: supports
          locator: CBDB:526776
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GH-ySGU_5HIVGduoLXP0CZ
        subject_person_id: p_uY44cnKCroThAW6ZhacCSQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1VL9yWy3AxpvH3DV26BCQr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gLNtECbSvvCf-eRqWmt2M5
          claim_id: c_GH-ySGU_5HIVGduoLXP0CZ
          source_id: s_LGBHmd25HmcofazNRbUSp1
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12921：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LGBHmd25HmcofazNRbUSp1
            source_type: api_record
            title: 中国历代人物传记资料库：王希賢（CBDB 69222）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69222&o=json
            external_identifier: CBDB:69222
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.166Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uY44cnKCroThAW6ZhacCSQ
        status: active
        display_name: 王希賢
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王乃祿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王乃祿，史料所见人物。本项目依据《中国历代人物传记资料库：王乃祿（CBDB 526776）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王乃祿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uY44cnKCroThAW6ZhacCSQ | 王希賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王乃祿（CBDB 526776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526776&o=json)
- [中国历代人物传记资料库：王希賢（CBDB 69222）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69222&o=json)
