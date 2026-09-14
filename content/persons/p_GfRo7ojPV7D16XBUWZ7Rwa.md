---
schema: wang-person/v1
id: p_GfRo7ojPV7D16XBUWZ7Rwa
status: active
merged_into: null
display_name: 王紹
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GPymwLzR5swqrQJMM9dL8T
        subject_person_id: p_GfRo7ojPV7D16XBUWZ7Rwa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LXBehBm8dCyjGw5nEfjKyo
          claim_id: c_GPymwLzR5swqrQJMM9dL8T
          source_id: s_DDVornPTAzrLPAYD1qMnKU
          stance: supports
          locator: CBDB:331067
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（331067）
          source: &a1
            id: s_DDVornPTAzrLPAYD1qMnKU
            source_type: api_record
            title: 中国历代人物传记资料库：王紹（CBDB 331067）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331067&o=json
            external_identifier: CBDB:331067
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.358Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HehmAwpruYkhY5TKL3dd5R
        subject_person_id: p_GfRo7ojPV7D16XBUWZ7Rwa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹，明人物。嘉靖四十四年進士，籍贯南豐。（中国历代人物传记资料库 CBDB 331067）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Z8WHrSoFZySNEZYvFhFGhn
          claim_id: c_HehmAwpruYkhY5TKL3dd5R
          source_id: s_DDVornPTAzrLPAYD1qMnKU
          stance: supports
          locator: CBDB:331067
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_UPmNBWt4_eoOzyTkyIzGls
        subject_person_id: p_GfRo7ojPV7D16XBUWZ7Rwa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o84m9e1kQDV1djF1562w8T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WFV8yfeYgpmpJF-LjKgC_C
          claim_id: c_UPmNBWt4_eoOzyTkyIzGls
          source_id: s_DDVornPTAzrLPAYD1qMnKU
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第七十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_o84m9e1kQDV1djF1562w8T
        status: active
        display_name: 王璽
        merged_into_person_id: null
    - claim:
        id: c_RJzGP0HUE2np5kv3ytDtmN
        subject_person_id: p_GfRo7ojPV7D16XBUWZ7Rwa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YV1nnuxqk7zB52jg5UQVY8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3qsNkjNvKbgu0nU0hxH5BT
          claim_id: c_RJzGP0HUE2np5kv3ytDtmN
          source_id: s__hjrxw45MmsqfwmLXp5-3p
          stance: supports
          locator: CBDB：兄弟 王璽（126871）之父／母 王紹
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑩 与 王璽 为同胞（CBDB 记「兄」），王璽 之父／母即 王瑩 之父／母。
          source:
            id: s__hjrxw45MmsqfwmLXp5-3p
            source_type: api_record
            title: 中国历代人物传记资料库：王瑩（CBDB 331072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331072&o=json
            external_identifier: CBDB:331072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YV1nnuxqk7zB52jg5UQVY8
        status: active
        display_name: 王瑩
        merged_into_person_id: null
    - claim:
        id: c_-109cvE3JY93HnH5tIZqWR
        subject_person_id: p_GfRo7ojPV7D16XBUWZ7Rwa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jZVzbtGhJHDytzxBB75tC2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aT3D9JMhGoktJB0XZWoYXY
          claim_id: c_-109cvE3JY93HnH5tIZqWR
          source_id: s_oN5KP1AgDZf7zp_RGyEmLI
          stance: supports
          locator: CBDB：兄弟 王璽（126871）之父／母 王紹
          quotation: null
          interpretation_note: 由兄弟关系推断：王寶 与 王璽 为同胞（CBDB 记「兄」），王璽 之父／母即 王寶 之父／母。
          source:
            id: s_oN5KP1AgDZf7zp_RGyEmLI
            source_type: api_record
            title: 中国历代人物传记资料库：王寶（CBDB 331071）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331071&o=json
            external_identifier: CBDB:331071
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jZVzbtGhJHDytzxBB75tC2
        status: active
        display_name: 王寶
        merged_into_person_id: null
    - claim:
        id: c_QKhvX7JTW9yAWdirJi9QHP
        subject_person_id: p_GfRo7ojPV7D16XBUWZ7Rwa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r5vKuJADPEciARjgn1mpBk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W4sE1iXzfe2oj4LyylWXpC
          claim_id: c_QKhvX7JTW9yAWdirJi9QHP
          source_id: s_F4zewVNXt4ppomxNdP6aXQ
          stance: supports
          locator: CBDB：兄弟 王璽（126871）之父／母 王紹
          quotation: null
          interpretation_note: 由兄弟关系推断：王璧 与 王璽 为同胞（CBDB 记「兄」），王璽 之父／母即 王璧 之父／母。
          source:
            id: s_F4zewVNXt4ppomxNdP6aXQ
            source_type: api_record
            title: 中国历代人物传记资料库：王璧（CBDB 331070）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331070&o=json
            external_identifier: CBDB:331070
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_r5vKuJADPEciARjgn1mpBk
        status: active
        display_name: 王璧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王紹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹 | accepted |
| bio.summary | 王紹，明人物。嘉靖四十四年進士，籍贯南豐。（中国历代人物传记资料库 CBDB 331067） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_o84m9e1kQDV1djF1562w8T | 王璽 | accepted |
| children | p_YV1nnuxqk7zB52jg5UQVY8 | 王瑩 | accepted |
| children | p_jZVzbtGhJHDytzxBB75tC2 | 王寶 | accepted |
| children | p_r5vKuJADPEciARjgn1mpBk | 王璧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寶（CBDB 331071）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331071&o=json)
- [中国历代人物传记资料库：王璧（CBDB 331070）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331070&o=json)
- [中国历代人物传记资料库：王紹（CBDB 331067）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331067&o=json)
- [中国历代人物传记资料库：王瑩（CBDB 331072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331072&o=json)
