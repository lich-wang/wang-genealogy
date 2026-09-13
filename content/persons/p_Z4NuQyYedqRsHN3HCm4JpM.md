---
schema: wang-person/v1
id: p_Z4NuQyYedqRsHN3HCm4JpM
status: active
merged_into: null
display_name: 王維鏞
cbdb_id: 526898
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_umbTVxEfeqndZF8xunuHW6
        subject_person_id: p_Z4NuQyYedqRsHN3HCm4JpM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維鏞，史料所见人物。本项目依据《中国历代人物传记资料库：王維鏞（CBDB 526898）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_miqIQ_U9h3tWTm412_47qU
          claim_id: c_umbTVxEfeqndZF8xunuHW6
          source_id: s_AwfTQaGLXD1cznmZTGWwta
          stance: supports
          locator: CBDB:526898
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_AwfTQaGLXD1cznmZTGWwta
            source_type: api_record
            title: 中国历代人物传记资料库：王維鏞（CBDB 526898）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526898&o=json
            external_identifier: CBDB:526898
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:19.665Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oofEZ661fBSE8N4fzu4N3A
        subject_person_id: p_Z4NuQyYedqRsHN3HCm4JpM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維鏞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ELxZrGcqUFNAba5evVmH3U
          claim_id: c_oofEZ661fBSE8N4fzu4N3A
          source_id: s_AwfTQaGLXD1cznmZTGWwta
          stance: supports
          locator: CBDB:526898
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7201-7229）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_I_01SkVSnM-MewmT3pAQLh
        subject_person_id: p_WGN9wvJbsoV4MZHf6rn2aA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z4NuQyYedqRsHN3HCm4JpM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5ln9koLKbzgLc3o2sk2od6
          claim_id: c_I_01SkVSnM-MewmT3pAQLh
          source_id: s_3x1Ur5GNf53XHzKkvTRQ9n
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13075：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3x1Ur5GNf53XHzKkvTRQ9n
            source_type: api_record
            title: 中国历代人物传记资料库：王萬龍（CBDB 69370）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69370&o=json
            external_identifier: CBDB:69370
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.111Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WGN9wvJbsoV4MZHf6rn2aA
        status: active
        display_name: 王萬龍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王維鏞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王維鏞，史料所见人物。本项目依据《中国历代人物传记资料库：王維鏞（CBDB 526898）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王維鏞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WGN9wvJbsoV4MZHf6rn2aA | 王萬龍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王萬龍（CBDB 69370）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69370&o=json)
- [中国历代人物传记资料库：王維鏞（CBDB 526898）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526898&o=json)
